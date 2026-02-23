'use client';

import { useEffect, useState } from 'react';

interface CryptoPrice {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export default function PriceTicker() {
  const [prices, setPrices] = useState<CryptoPrice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPrices();
    // Update every 60 seconds
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  async function fetchPrices() {
    try {
      // CoinGecko API (free, no auth required)
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,binancecoin,solana,usd-coin,dai,aave,uniswap,chainlink,polygon&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      );
      const data = await response.json();
      setPrices(data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch crypto prices:', error);
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-accent/10 to-accent-light/10 border-b border-accent/20 py-2 overflow-hidden">
        <div className="text-center text-sm text-secondary">Loading market data...</div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-accent/10 to-accent-light/10 border-b border-accent/20 py-2 overflow-hidden">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {/* Duplicate content for seamless loop */}
          {[...prices, ...prices].map((coin, index) => {
            const isPositive = coin.price_change_percentage_24h >= 0;
            return (
              <div
                key={`${coin.id}-${index}`}
                className="ticker-item inline-flex items-center gap-2 px-6 text-sm"
              >
                <span className="font-bold text-primary uppercase">{coin.symbol}</span>
                <span className="text-secondary">
                  ${coin.current_price.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: coin.current_price < 1 ? 4 : 2
                  })}
                </span>
                <span className={isPositive ? 'text-green-600' : 'text-red-600'}>
                  {isPositive ? '▲' : '▼'} {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
        }

        .ticker-content {
          display: inline-flex;
          white-space: nowrap;
          animation: scroll 40s linear infinite;
        }

        .ticker-item {
          flex-shrink: 0;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Pause on hover */
        .ticker-wrapper:hover .ticker-content {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
