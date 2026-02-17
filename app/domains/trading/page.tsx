import Link from 'next/link';

export default function TradingMarketMaking() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link href="/mappings" className="text-secondary hover:text-accent transition-colors">
            ← Back to Integration Patterns
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-primary mb-4">Domain 3: Trading & Market Making</h1>
        <p className="text-xl text-neutral-dark mb-12">
          Automated Market Makers (AMMs), DEX aggregators, and MEV protection mechanisms
        </p>

        <div className="prose max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Traditional Banking Services Covered</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-neutral-light">
                <h3 className="text-xl font-bold text-secondary mb-2">Trading Market</h3>
                <p className="text-neutral-dark mb-2"><strong>Function:</strong> Facilitates buying and selling of financial instruments</p>
                <p className="text-sm text-neutral"><strong>Operations:</strong> Order matching, price discovery, trade execution, settlement</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-neutral-light">
                <h3 className="text-xl font-bold text-secondary mb-2">Market Making</h3>
                <p className="text-neutral-dark mb-2"><strong>Function:</strong> Provides liquidity by quoting bid/ask prices</p>
                <p className="text-sm text-neutral"><strong>Operations:</strong> Quote management, inventory risk, spread capture</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-neutral-light">
                <h3 className="text-xl font-bold text-secondary mb-2">Securities Position Keeping</h3>
                <p className="text-neutral-dark mb-2"><strong>Function:</strong> Tracks ownership and settlement of securities</p>
                <p className="text-sm text-neutral"><strong>Operations:</strong> Position tracking, corporate actions, reconciliation</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-neutral-light">
                <h3 className="text-xl font-bold text-secondary mb-2">Order Routing</h3>
                <p className="text-neutral-dark mb-2"><strong>Function:</strong> Routes orders to optimal execution venues</p>
                <p className="text-sm text-neutral"><strong>Operations:</strong> Best execution, venue selection, smart order routing</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">DeFi Trading Protocols</h2>
            
            <div className="space-y-6">
              <div className="bg-secondary text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Automated Market Makers (AMMs)</h3>
                <p className="mb-4 opacity-90">Replace order books with liquidity pools and mathematical pricing formulas</p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/10 p-4 rounded">
                    <h4 className="font-bold mb-2">Uniswap V3</h4>
                    <p className="text-sm opacity-90 mb-2">Concentrated liquidity AMM</p>
                    <ul className="text-xs space-y-1 opacity-80">
                      <li>• Custom price ranges</li>
                      <li>• Capital efficiency</li>
                      <li>• Multiple fee tiers</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 p-4 rounded">
                    <h4 className="font-bold mb-2">Curve Finance</h4>
                    <p className="text-sm opacity-90 mb-2">Stablecoin-optimized AMM</p>
                    <ul className="text-xs space-y-1 opacity-80">
                      <li>• Low slippage for like assets</li>
                      <li>• StableSwap algorithm</li>
                      <li>• CRV incentives</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 p-4 rounded">
                    <h4 className="font-bold mb-2">Balancer</h4>
                    <p className="text-sm opacity-90 mb-2">Multi-asset weighted pools</p>
                    <ul className="text-xs space-y-1 opacity-80">
                      <li>• Custom pool weights</li>
                      <li>• Programmable pools</li>
                      <li>• Index fund mechanics</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/10 p-4 rounded">
                  <h4 className="font-bold mb-2">vs Traditional Market Making:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-success mb-1">✓ Permissionless liquidity provision</p>
                      <p className="text-success mb-1">✓ 24/7 automated execution</p>
                      <p className="text-success">✓ Transparent pricing formula</p>
                    </div>
                    <div>
                      <p className="opacity-90 mb-1">✗ Impermanent loss risk</p>
                      <p className="opacity-90 mb-1">✗ No bid/ask spread control</p>
                      <p className="opacity-90">✗ Vulnerable to sandwich attacks</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg border-2 border-accent">
                <h3 className="text-2xl font-bold text-accent mb-4">DEX Aggregators</h3>
                <p className="text-neutral-dark mb-4">Split trades across multiple DEXs to find optimal execution</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-bold text-primary mb-2">1inch</h4>
                    <p className="text-sm text-neutral-dark mb-3">Pathfinder algorithm routes trades through multiple protocols simultaneously</p>
                    <p className="text-xs text-neutral"><strong>Example:</strong> Split 100 ETH → USDC across Uniswap (60%), Curve (30%), Balancer (10%) for best price</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-bold text-primary mb-2">CoW Swap</h4>
                    <p className="text-sm text-neutral-dark mb-3">Batch auction mechanism that matches trades peer-to-peer before hitting AMMs</p>
                    <p className="text-xs text-neutral"><strong>Innovation:</strong> MEV protection via batch settlement</p>
                  </div>
                </div>

                <div className="mt-4 bg-gray-50 p-4 rounded">
                  <p className="text-sm font-bold text-primary mb-2">vs Traditional Order Routing:</p>
                  <p className="text-sm text-neutral-dark">Both optimize execution, but DEX aggregators are transparent (on-chain) and don't require exchange relationships. Traditional smart order routing is opaque and venue-dependent.</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-8 rounded-lg border-2 border-yellow-400">
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">⚠️ MEV (Maximal Extractable Value)</h3>
                <p className="text-neutral-dark mb-4">Profit extracted by reordering, inserting, or censoring transactions within a block</p>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold text-yellow-800 mb-2">Sandwich Attacks</h4>
                    <p className="text-sm text-neutral-dark">Attacker sees your trade, front-runs with buy, lets your trade execute (pushing price up), back-runs with sell. You get worse price, attacker profits.</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold text-yellow-800 mb-2">Protection Mechanisms</h4>
                    <ul className="text-sm text-neutral-dark space-y-1">
                      <li><strong>Flashbots Protect:</strong> Private mempool, no front-running</li>
                      <li><strong>CoW Swap:</strong> Batch auctions eliminate ordering games</li>
                      <li><strong>Slippage limits:</strong> Reject trades with worse-than-expected prices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Integration Pattern: Institutional Trading</h2>
            <div className="bg-white p-8 rounded-lg border-2 border-secondary">
              <h3 className="text-xl font-bold text-secondary mb-4">Use Case: Treasury Desk Executes Large Token Swap</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="border-l-4 border-neutral pl-4">
                  <h4 className="font-bold text-primary mb-3">Traditional Banking</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-dark">
                    <li>Contact multiple exchanges for quotes</li>
                    <li>Negotiate best execution terms</li>
                    <li>Submit order via FIX protocol</li>
                    <li>Wait for fill confirmation (seconds to minutes)</li>
                    <li>Reconcile settlement (T+2)</li>
                  </ol>
                  <div className="mt-4 bg-gray-100 p-3 rounded">
                    <p className="text-xs font-bold">Time: Minutes to hours</p>
                    <p className="text-xs font-bold">Cost: 0.1-0.5% + venue fees</p>
                  </div>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-bold text-primary mb-3">DeFi Integration</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-dark">
                    <li>Use 1inch API to get optimal route quote</li>
                    <li>Submit transaction via Flashbots Protect (MEV protection)</li>
                    <li>Smart contract splits order across Uniswap + Curve + Balancer</li>
                    <li>Instant execution and settlement on-chain</li>
                    <li>No reconciliation needed (atomic)</li>
                  </ol>
                  <div className="mt-4 bg-success p-3 rounded">
                    <p className="text-xs font-bold text-primary">Time: 12 seconds (1 block)</p>
                    <p className="text-xs font-bold text-primary">Cost: 0.05-0.3% (gas + swap fees)</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 p-4 rounded">
                <p className="font-bold text-accent mb-2">💡 Key Insight:</p>
                <p className="text-sm text-neutral-dark">DeFi provides better execution for mid-size trades ($10k-$1M), but deep liquidity for $10M+ trades still favors centralized exchanges.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Key Takeaways for Integration</h2>
            <div className="bg-secondary text-white p-8 rounded-lg">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-success text-xl mr-3">✓</span>
                  <span><strong>AMMs are mature for mid-size trades</strong> — Uniswap V3 + aggregators provide competitive pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success text-xl mr-3">✓</span>
                  <span><strong>DEX aggregators essential</strong> — Never trade directly on a single AMM; always use 1inch/Matcha</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warning text-xl mr-3">⚠</span>
                  <span><strong>MEV protection required</strong> — Institutional trades MUST use Flashbots or private mempools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success text-xl mr-3">✓</span>
                  <span><strong>Liquidity concentrated on L2s</strong> — Arbitrum/Base have better execution than mainnet for many pairs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warning text-xl mr-3">⚠</span>
                  <span><strong>Large trades still favor CEXs</strong> — $10M+ orders get better fills on Binance/Coinbase than DEXs</span>
                </li>
              </ul>
            </div>
          </section>

          <div className="flex justify-between items-center pt-8 border-t border-neutral-light">
            <Link href="/domains/lending" className="text-secondary hover:text-accent transition-colors font-medium">
              ← Previous: Lending & Credit
            </Link>
            <Link href="/domains/custody" className="text-secondary hover:text-accent transition-colors font-medium">
              Next: Custody & Asset Management →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
