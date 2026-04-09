import { useState, useEffect, useMemo, useRef } from 'react';

interface StockData {
  description: string;
  exchange: string;
  name: string;
  type: string;
}

export interface SearchResult {
  code: string;
  name: string;
  market: string;
}

// Global cache for stock data
let stockDataCache: StockData[] | null = null;
let cachePromise: Promise<StockData[]> | null = null;

// Web Worker instance (singleton)
let workerInstance: Worker | null = null;
let workerReady = false;
let workerCallbacks: Map<string, (results: SearchResult[]) => void> = new Map();

// Check if Web Worker is supported
const supportsWorker = typeof Worker !== 'undefined';

// Initialize Web Worker
function initWorker(): Worker | null {
  if (!supportsWorker || workerInstance) return workerInstance;

  try {
    workerInstance = new Worker(
      new URL('../workers/stockSearch.worker.ts', import.meta.url),
      { type: 'module' }
    );

    workerInstance.addEventListener('message', (event) => {
      const { type, results, count } = event.data;

      if (type === 'loaded') {
        workerReady = true;
        console.log(`Stock search worker loaded with ${count} stocks`);
      } else if (type === 'results') {
        // Resolve the callback for this search
        const callbackId = event.data.query;
        const callback = workerCallbacks.get(callbackId);
        if (callback) {
          callback(results);
          workerCallbacks.delete(callbackId);
        }
      }
    });

    workerInstance.addEventListener('error', (error) => {
      console.error('Worker error:', error);
      workerReady = false;
    });

    return workerInstance;
  } catch (error) {
    console.error('Failed to initialize worker:', error);
    return null;
  }
}

export function useStockSearch() {
  const [stockData, setStockData] = useState<StockData[]>(stockDataCache || []);
  const [isLoading, setIsLoading] = useState(!stockDataCache);
  const [error, setError] = useState<string | null>(null);
  const loadingAttempted = useRef(false);
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    // Try to initialize worker
    if (supportsWorker) {
      workerRef.current = initWorker();
    }

    // If already cached, no need to load
    if (stockDataCache) {
      setStockData(stockDataCache);
      setIsLoading(false);
      
      // Send data to worker if available
      if (workerRef.current && workerReady) {
        workerRef.current.postMessage({
          type: 'load',
          data: stockDataCache
        });
      }
      return;
    }

    // Prevent multiple simultaneous loads
    if (loadingAttempted.current && cachePromise) {
      cachePromise
        .then(data => {
          setStockData(data);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        });
      return;
    }

    loadingAttempted.current = true;

    const loadStockData = async () => {
      try {
        // Check if there's already a loading promise
        if (cachePromise) {
          const data = await cachePromise;
          return data;
        }

        // Create new loading promise
        cachePromise = (async () => {
          const response = await fetch('/assets/stock.json');
          if (!response.ok) {
            throw new Error('Failed to load stock data');
          }
          const data = await response.json();
          stockDataCache = data;
          return data;
        })();

        const data = await cachePromise;
        setStockData(data);
        setError(null);

        // Send data to worker if available
        if (workerRef.current) {
          workerRef.current.postMessage({
            type: 'load',
            data
          });
        }
      } catch (err) {
        console.error('Error loading stock data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load stock data');
      } finally {
        setIsLoading(false);
      }
    };

    // Use requestIdleCallback for non-critical loading
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        loadStockData();
      }, { timeout: 1000 });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(loadStockData, 100);
    }

    return () => {
      // Cleanup worker callbacks
      workerCallbacks.clear();
    };
  }, []);

  // Synchronous search (fallback and primary method)
  const search = useMemo(() => {
    return (query: string): SearchResult[] => {
      if (!query || query.trim().length === 0) {
        return [];
      }

      // If data not loaded yet, return empty results
      // This allows the input to work immediately
      if (stockData.length === 0) {
        return [];
      }

      const searchTerm = query.trim().toLowerCase();
      const results: SearchResult[] = [];

      // Optimize search by using for loop with early break
      for (let i = 0; i < stockData.length; i++) {
        const stock = stockData[i];
        const code = stock.name;
        const name = stock.description || '';
        const market = stock.exchange || '';

        const codeMatch = code.toLowerCase().includes(searchTerm);
        const nameMatch = name.toLowerCase().includes(searchTerm);

        if (codeMatch || nameMatch) {
          results.push({
            code,
            name,
            market
          });
        }

        if (results.length >= 100) {
          break;
        }
      }

      return results;
    };
  }, [stockData]);

  return {
    search,
    isLoading,
    error,
    totalStocks: stockData.length
  };
}
