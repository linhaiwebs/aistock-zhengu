import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cache stock data in memory
let stockDataCache = null;
let lastLoadTime = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

// Load stock data with caching
function loadStockData() {
  const now = Date.now();
  
  // Return cached data if still valid
  if (stockDataCache && (now - lastLoadTime) < CACHE_DURATION) {
    return stockDataCache;
  }

  try {
    const stockJsonPath = path.join(__dirname, '../../public/assets/stock.json');
    const data = fs.readFileSync(stockJsonPath, 'utf-8');
    stockDataCache = JSON.parse(data);
    lastLoadTime = now;
    console.log(`[Stock Search] Loaded ${stockDataCache.length} stocks into memory`);
    return stockDataCache;
  } catch (error) {
    console.error('[Stock Search] Error loading stock data:', error);
    return [];
  }
}

// Search stocks by code or name
router.get('/search', (req, res) => {
  try {
    const { q: query, limit = 100 } = req.query;

    if (!query || query.trim().length === 0) {
      return res.json({
        success: true,
        results: [],
        total: 0
      });
    }

    const stockData = loadStockData();
    const searchTerm = query.trim().toLowerCase();
    const results = [];
    const maxResults = Math.min(parseInt(limit), 100);

    for (const stock of stockData) {
      const code = stock.name || '';
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

        if (results.length >= maxResults) {
          break;
        }
      }
    }

    res.json({
      success: true,
      results,
      total: results.length,
      query: query.trim()
    });
  } catch (error) {
    console.error('[Stock Search] Error:', error);
    res.status(500).json({
      success: false,
      error: 'Search failed',
      results: []
    });
  }
});

// Get stock info by code
router.get('/info/:code', (req, res) => {
  try {
    const { code } = req.params;
    const stockData = loadStockData();

    const stock = stockData.find(s => s.name === code);

    if (stock) {
      res.json({
        success: true,
        stock: {
          code: stock.name,
          name: stock.description,
          market: stock.exchange,
          type: stock.type
        }
      });
    } else {
      res.json({
        success: false,
        error: 'Stock not found'
      });
    }
  } catch (error) {
    console.error('[Stock Info] Error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get stock info'
    });
  }
});

// Get popular stocks (for initial load)
router.get('/popular', (req, res) => {
  try {
    const { limit = 50 } = req.query;
    const stockData = loadStockData();
    
    // Return first N stocks as "popular" (you can customize this logic)
    const popularStocks = stockData.slice(0, parseInt(limit)).map(stock => ({
      code: stock.name,
      name: stock.description,
      market: stock.exchange
    }));

    res.json({
      success: true,
      results: popularStocks,
      total: popularStocks.length
    });
  } catch (error) {
    console.error('[Popular Stocks] Error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get popular stocks'
    });
  }
});

export default router;
