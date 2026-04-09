// Web Worker for stock search to avoid blocking the main thread

interface StockData {
  description: string;
  exchange: string;
  name: string;
  type: string;
}

interface SearchResult {
  code: string;
  name: string;
  market: string;
}

interface SearchMessage {
  type: 'search';
  query: string;
}

interface LoadMessage {
  type: 'load';
  data: StockData[];
}

type WorkerMessage = SearchMessage | LoadMessage;

let stockData: StockData[] = [];

// Listen for messages from the main thread
self.addEventListener('message', (event: MessageEvent<WorkerMessage>) => {
  const { type } = event.data;

  if (type === 'load') {
    stockData = event.data.data;
    self.postMessage({ type: 'loaded', count: stockData.length });
  } else if (type === 'search') {
    const { query } = event.data;
    const results = performSearch(query);
    self.postMessage({ type: 'results', results });
  }
});

function performSearch(query: string): SearchResult[] {
  if (!query || query.trim().length === 0 || stockData.length === 0) {
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
}

export {};
