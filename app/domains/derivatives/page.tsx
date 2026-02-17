import Link from 'next/link';

export default function Derivatives() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link href="/mappings" className="text-secondary hover:text-accent transition-colors">
            ← Back to Integration Patterns
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-primary mb-4">Domain 7: Derivatives & Structured Products</h1>
        <p className="text-xl text-neutral-dark mb-12">
          Perpetual swaps, on-chain options, synthetic assets, and decentralized derivatives exchanges
        </p>

        <div className="prose max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Traditional Banking Services Covered</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-neutral-light">
                <h3 className="text-xl font-bold text-secondary mb-2">Derivatives Trading</h3>
                <p className="text-neutral-dark mb-2"><strong>Function:</strong> Facilitates trading of futures, options, swaps</p>
                <p className="text-sm text-neutral"><strong>Operations:</strong> Order execution, margin management, settlement</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-neutral-light">
                <h3 className="text-xl font-bold text-secondary mb-2">Structured Products</h3>
                <p className="text-neutral-dark mb-2"><strong>Function:</strong> Creates and distributes custom derivative instruments</p>
                <p className="text-sm text-neutral"><strong>Operations:</strong> Product design, hedging, lifecycle management</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">DeFi Derivatives Protocols</h2>
            
            <div className="space-y-6">
              <div className="bg-secondary text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Perpetual Swaps (Perps)</h3>
                <p className="mb-4 opacity-90">Futures contracts with no expiry, track spot price via funding rates</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-white/10 p-4 rounded">
                    <h4 className="font-bold mb-2">dYdX (Order Book Model)</h4>
                    <ul className="text-sm opacity-90 space-y-1">
                      <li>• Layer 2 (StarkEx, now own chain)</li>
                      <li>• Up to 20x leverage</li>
                      <li>• Professional trading UI</li>
                      <li>• ~$500M daily volume</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 p-4 rounded">
                    <h4 className="font-bold mb-2">GMX (Liquidity Pool Model)</h4>
                    <ul className="text-sm opacity-90 space-y-1">
                      <li>• On Arbitrum/Avalanche</li>
                      <li>• Up to 50x leverage</li>
                      <li>• LP-backed (GLP pool)</li>
                      <li>• Low fees, no price impact</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-500/20 p-4 rounded border border-yellow-400">
                  <p className="text-sm font-bold mb-2">⚠️ vs Traditional Perps (Binance, CME):</p>
                  <p className="text-sm opacity-90">DeFi perps: permissionless, lower fees, but less liquidity. Centralized: deeper liquidity, more pairs, but requires KYC.</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg border-2 border-accent">
                <h3 className="text-2xl font-bold text-accent mb-4">On-Chain Options</h3>
                <p className="text-neutral-dark mb-4">Puts and calls settled automatically via smart contracts</p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-bold text-primary mb-2">Ribbon Finance (Structured Products)</h4>
                    <p className="text-sm text-neutral-dark mb-2">Automated yield via covered call vaults</p>
                    <p className="text-xs text-neutral">Deposit ETH → vault sells weekly call options → earn premium (5-20% APY)</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-bold text-primary mb-2">Opyn (Options Protocol)</h4>
                    <p className="text-sm text-neutral-dark mb-2">Create/trade custom options (any strike, expiry)</p>
                    <p className="text-xs text-neutral">Used by Ribbon, Squeeth, and other structured products</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg border border-neutral-light">
                <h3 className="text-2xl font-bold text-primary mb-4">Synthetic Assets</h3>
                <p className="text-neutral-dark mb-4">Tokenized exposure to real-world assets without holding them</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold text-secondary mb-2">Synthetix</h4>
                    <p className="text-sm text-neutral-dark">Mint sUSD, trade synths (sBTC, sETH, sGOLD, sAAPL)</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold text-accent mb-2">Mirror Protocol (Terra)</h4>
                    <p className="text-sm text-neutral-dark">mAssets track US stocks (mTSLA, mAMZN) — defunct after Terra collapse</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Integration Pattern: Hedging Strategy</h2>
            <div className="bg-white p-8 rounded-lg border-2 border-secondary">
              <h3 className="text-xl font-bold text-secondary mb-4">Use Case: Protocol Treasury Hedges ETH Exposure</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-primary mb-2">Problem:</h4>
                  <p className="text-sm text-neutral-dark">DAO holds $50M in ETH (80% of treasury). ETH crashes 40% → treasury now $30M. Can't cover operational costs.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-primary mb-2">DeFi Solution:</h4>
                  <ol className="list-decimal list-inside text-sm text-neutral-dark space-y-1">
                    <li>Buy put options on Opyn (strike: $2000 ETH, 3-month expiry)</li>
                    <li>If ETH drops below $2000, puts pay out the difference</li>
                    <li>Premium cost: ~2-5% of notional ($1-2.5M for $50M hedge)</li>
                    <li>Downside protected, upside maintained</li>
                  </ol>
                </div>

                <div className="bg-success p-4 rounded">
                  <p className="font-bold text-primary mb-2">✓ Alternative: Perpetual Short</p>
                  <p className="text-sm text-neutral-dark">Short ETH perps on GMX (e.g., $25M short) to hedge 50% of exposure. If ETH drops, short profits offset treasury loss.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Key Takeaways for Integration</h2>
            <div className="bg-secondary text-white p-8 rounded-lg">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-success text-xl mr-3">✓</span>
                  <span><strong>Perps are mature on-chain</strong> — dYdX/GMX handle billions in volume</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warning text-xl mr-3">⚠</span>
                  <span><strong>Options liquidity lower</strong> — Less depth than CEX options, but improving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success text-xl mr-3">✓</span>
                  <span><strong>Structured products enable yield</strong> — Ribbon vaults (5-20% APY on ETH/BTC)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warning text-xl mr-3">⚠</span>
                  <span><strong>Synthetics carry oracle risk</strong> — Price feed manipulation can cause liquidations</span>
                </li>
              </ul>
            </div>
          </section>

          <div className="flex justify-between items-center pt-8 border-t border-neutral-light">
            <Link href="/domains/treasury" className="text-secondary hover:text-accent transition-colors font-medium">
              ← Previous: Treasury & Liquidity
            </Link>
            <Link href="/domains/governance" className="text-secondary hover:text-accent transition-colors font-medium">
              Next: Governance →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
