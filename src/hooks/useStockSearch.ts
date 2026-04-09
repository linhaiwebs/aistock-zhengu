import { useState, useEffect, useRef, useCallback } from 'react';

export interface SearchResult {
  code: string;
  name: string;
  market: string;
}

export function useStockSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  // Search function using backend API
  const search = useCallback((query: string): SearchResult[] => {
    // This is now async, so we return empty array
    // The actual search is done via the async searchAsync function
    return [];
  }, []);

  // Async search function that calls the backend API
  const searchAsync = useCallback(async (query: string): Promise<SearchResult[]> => {
    if (!query || query.trim().length === 0) {
      return [];
    }

    // Cancel previous search
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new abort controller for this search
    abortControllerRef.current = new AbortController();

    try {
      setIsLoading(true);
      setError(null);

      const apiUrl = `${import.meta.env.VITE_API_URL || ''}/api/stock-search/search`;
      const response = await fetch(`${apiUrl}?q=${encodeURIComponent(query.trim())}&limit=100`, {
        signal: abortControllerRef.current.signal
      });

      if (!response.ok) {
        throw new Error('Search failed');
      }

      const data = await response.json();
      
      if (data.success && Array.isArray(data.results)) {
        return data.results;
      }

      return [];
    } catch (err) {
      // Don't set error if it's an abort error
      if (err instanceof Error && err.name === 'AbortError') {
        return [];
      }
      
      console.error('Error searching stocks:', err);
      setError(err instanceof Error ? err.message : 'Search failed');
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Debounced async search
  const searchDebounced = useCallback((query: string, callback: (results: SearchResult[]) => void) => {
    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Immediate search for short queries, debounced for longer ones
    const delay = query.length <= 2 ? 0 : 150;

    searchTimeoutRef.current = setTimeout(async () => {
      const results = await searchAsync(query);
      callback(results);
    }, delay);
  }, [searchAsync]);

  return {
    search,
    searchAsync,
    searchDebounced,
    isLoading,
    error
  };
}
