import Link from 'next/link';

export default function CustodyAssetManagement() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link href="/mappings" className="text-secondary hover:text-accent transition-colors">
            ← Back to Integration Patterns
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-primary mb-4">Domain 4: Custody & Asset Management</h1>
        <p className="text-xl text-neutral-dark mb-12">
          Self-custody wallets, multisigs, institutional custody solutions, and yield aggregation
        </p>

        <div className="prose max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Traditional Banking Services Covered</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-neutral-light">
                <h3 className="text-xl font-bold text-secondary mb-2">Custody Administration</h3>
                <p className="text-neutral-dark mb-2"><strong>Function:</strong> Safekeeps and administers client assets</p>
                <p className="text-sm text-neutral"><strong>Operations:</strong> Asset segregation, safekeeping, corporate actions, reporting</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-neutral-light">
                <h3 className="text-xl font-bold text-secondary mb-2">Investment Portfolio Management</h3>
                <p className="text-neutral-dark mb-2"><strong>Function:</strong> Manages investment strategies and asset allocation</p>
                <p className="text-sm text-neutral"><strong>Operations:</strong> Portfolio construction, rebalancing, performance tracking</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">DeFi Custody Solutions</h2>
            
            <div className="space-y-6">
              <div className="bg-secondary text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Self-Custody Wallets</h3>
                <p className="mb-4 opacity-90">"Not your keys, not your coins" — Users control private keys directly</p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/10 p-4 rounded">
                    <h4 className="font-bold mb-2">MetaMask</h4>
                    <p className="text-sm opacity-90">Browser extension + mobile, most popular Ethereum wallet</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded">
                    <h4 className="font-bold mb-2">Ledger/Trezor</h4>
                    <p className="text-sm opacity-90">Hardware wallets, offline key storage</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded">
                    <h4 className="font-bold mb-2">WalletConnect</h4>
                    <p className="text-sm opacity-90">Protocol connecting wallets to dApps</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg border-2 border-accent">
                <h3 className="text-2xl font-bold text-accent mb-4">Multisig Wallets (Institutional Custody)</h3>
                <p className="text-neutral-dark mb-4">Require M-of-N signatures to authorize transactions (e.g., 3-of-5)</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-bold text-primary mb-2">Gnosis Safe</h4>
                    <p className="text-sm text-neutral-dark mb-2">Most popular multisig, modular design, supports plugins</p>
                    <p className="text-xs text-neutral"><strong>Used by:</strong> DAOs, protocols, institutional treasuries</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-bold text-primary mb-2">Fireblocks</h4>
                    <p className="text-sm text-neutral-dark mb-2">Enterprise custody with MPC (multi-party computation)</p>
                    <p className="text-xs text-neutral"><strong>Features:</strong> Compliance, insurance, off-chain coordination</p>
                  </div>
                </div>

                <div className="bg-success p-4 rounded">
                  <p className="font-bold text-primary mb-2">✓ vs Traditional Custody:</p>
                  <p className="text-sm text-neutral-dark">Multisigs provide institutional controls (approval workflows, spending limits) without requiring a trusted custodian. No counterparty risk.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg border border-neutral-light">
                <h3 className="text-2xl font-bold text-primary mb-4">Yield Aggregators</h3>
                <p className="text-neutral-dark mb-4">Automatically optimize yield across DeFi protocols</p>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-secondary">
                    <h4 className="font-bold text-secondary mb-2">Yearn Finance</h4>
                    <p className="text-sm text-neutral-dark">Deposit stablecoins/ETH, vaults auto-compound yield across Aave/Curve/Convex</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-accent">
                    <h4 className="font-bold text-accent mb-2">Lido (Liquid Staking)</h4>
                    <p className="text-sm text-neutral-dark">Stake ETH, receive stETH (liquid token), earn staking yield while staying liquid</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-primary">
                    <h4 className="font-bold text-primary mb-2">Beefy Finance</h4>
                    <p className="text-sm text-neutral-dark">Multi-chain yield optimizer, auto-compounds LP rewards</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Integration Pattern: Institutional Treasury</h2>
            <div className="bg-white p-8 rounded-lg border-2 border-secondary">
              <h3 className="text-xl font-bold text-secondary mb-4">Use Case: $50M Corporate Treasury in DeFi</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-primary mb-2">Setup:</h4>
                  <ul className="text-sm text-neutral-dark space-y-1">
                    <li>• Gnosis Safe (4-of-6 multisig: CFO, CEO, 2x directors, 2x advisors)</li>
                    <li>• Fireblocks MPC for transaction signing + compliance layer</li>
                    <li>• On-chain spending limits ($100k/day auto-approved, &gt;$100k requires vote)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-primary mb-2">Asset Allocation:</h4>
                  <ul className="text-sm text-neutral-dark space-y-1">
                    <li>• 60% USDC in Aave (3-5% yield, liquid)</li>
                    <li>• 20% ETH staked via Lido (4-5% yield + ETH appreciation)</li>
                    <li>• 15% Curve LP (stablecoin pools, 5-8% yield)</li>
                    <li>• 5% Emergency reserve (hot wallet for operations)</li>
                  </ul>
                </div>

                <div className="bg-success p-4 rounded">
                  <p className="font-bold text-primary mb-2">💰 Results:</p>
                  <p className="text-sm text-neutral-dark">4.2% blended yield vs 0.1% bank savings = <strong>$2M+ additional annual income</strong></p>
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
                  <span><strong>Multisigs are institutional-grade</strong> — Gnosis Safe + Fireblocks used by major protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success text-xl mr-3">✓</span>
                  <span><strong>Yield beats traditional savings</strong> — 3-5% USDC yield vs 0.1% bank deposits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warning text-xl mr-3">⚠</span>
                  <span><strong>Key management is critical</strong> — No password reset, no customer support if keys lost</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success text-xl mr-3">✓</span>
                  <span><strong>Insurance available</strong> — Nexus Mutual, InsurAce provide smart contract coverage</span>
                </li>
              </ul>
            </div>
          </section>

          <div className="flex justify-between items-center pt-8 border-t border-neutral-light">
            <Link href="/domains/trading" className="text-secondary hover:text-accent transition-colors font-medium">
              ← Previous: Trading & Market Making
            </Link>
            <Link href="/domains/identity" className="text-secondary hover:text-accent transition-colors font-medium">
              Next: Identity & Compliance →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
