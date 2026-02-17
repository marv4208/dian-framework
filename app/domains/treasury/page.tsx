import Link from 'next/link';

export default function TreasuryLiquidity() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link href="/mappings" className="text-secondary hover:text-accent transition-colors">
            ← Back to Integration Patterns
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-primary mb-4">Domain 6: Treasury & Liquidity Management</h1>
        <p className="text-xl text-neutral-dark mb-12">
          DAO treasury management, protocol-owned liquidity, on-chain reserves, and diversification strategies
        </p>

        <div className="prose max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Traditional Banking Services Covered</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-neutral-light">
                <h3 className="text-xl font-bold text-secondary mb-2">Corporate Treasury</h3>
                <p className="text-neutral-dark mb-2"><strong>Function:</strong> Manages organizational funds and liquidity</p>
                <p className="text-sm text-neutral"><strong>Operations:</strong> Cash management, investment, FX hedging, risk management</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-neutral-light">
                <h3 className="text-xl font-bold text-secondary mb-2">Financial Market Research</h3>
                <p className="text-neutral-dark mb-2"><strong>Function:</strong> Analyzes markets to inform treasury decisions</p>
                <p className="text-sm text-neutral"><strong>Operations:</strong> Market analysis, forecasting, investment recommendations</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">DAO Treasury Management</h2>
            
            <div className="space-y-6">
              <div className="bg-secondary text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Typical DAO Treasury Composition</h3>
                <p className="mb-4 opacity-90">Protocol treasuries hold native tokens + stablecoins + strategic assets</p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white/10 p-4 rounded">
                    <h4 className="font-bold mb-2">Native Token (60-80%)</h4>
                    <p className="text-sm opacity-90">Governance/utility token for protocol</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded">
                    <h4 className="font-bold mb-2">Stablecoins (10-30%)</h4>
                    <p className="text-sm opacity-90">USDC/DAI for operational expenses</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded">
                    <h4 className="font-bold mb-2">Strategic Assets (5-10%)</h4>
                    <p className="text-sm opacity-90">ETH, BTC, partner tokens</p>
                  </div>
                </div>

                <div className="bg-yellow-500/20 p-4 rounded border border-yellow-400">
                  <p className="text-sm font-bold mb-2">⚠️ Problem: Over-Concentration Risk</p>
                  <p className="text-sm opacity-90">80% treasury in native token = vulnerable to price crashes. Need diversification.</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg border-2 border-accent">
                <h3 className="text-2xl font-bold text-accent mb-4">Protocol-Owned Liquidity (POL)</h3>
                <p className="text-neutral-dark mb-4">Protocol owns DEX liquidity instead of renting it via emissions</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-bold text-primary mb-2">Old Model: Liquidity Mining</h4>
                    <ul className="text-sm text-neutral-dark space-y-1">
                      <li>• Protocol emits tokens as LP rewards</li>
                      <li>• Mercenary capital: LPs leave when rewards dry up</li>
                      <li>• Unsustainable token inflation</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-success pl-4">
                    <h4 className="font-bold text-primary mb-2">New Model: POL (OlympusDAO)</h4>
                    <ul className="text-sm text-neutral-dark space-y-1">
                      <li>• Protocol buys LP tokens with treasury funds</li>
                      <li>• Permanent liquidity (won't leave)</li>
                      <li>• Earns trading fees forever</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg border border-neutral-light">
                <h3 className="text-2xl font-bold text-primary mb-4">Treasury Diversification Strategies</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-secondary">
                    <h4 className="font-bold text-secondary mb-2">1. Token Swaps</h4>
                    <p className="text-sm text-neutral-dark">Exchange native tokens with partner protocols at negotiated prices (e.g., Aave ↔ Balancer)</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-accent">
                    <h4 className="font-bold text-accent mb-2">2. Yield Generation</h4>
                    <p className="text-sm text-neutral-dark">Deploy stablecoins to Aave/Curve, earn 3-8% on idle capital</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-primary">
                    <h4 className="font-bold text-primary mb-2">3. Strategic Investments</h4>
                    <p className="text-sm text-neutral-dark">Buy ETH/BTC as long-term value accrual (e.g., MakerDAO holds ETH + T-bills)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Case Study: MakerDAO Treasury</h2>
            <div className="bg-white p-8 rounded-lg border-2 border-secondary">
              <h3 className="text-xl font-bold text-secondary mb-4">$7B+ Treasury Management</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-primary mb-3">Asset Breakdown (2024):</h4>
                  <ul className="text-sm text-neutral-dark space-y-2">
                    <li><strong>50% US Treasuries (RWA)</strong> — earn 5% risk-free yield</li>
                    <li><strong>30% USDC/stablecoins</strong> — operational liquidity</li>
                    <li><strong>10% ETH</strong> — long-term strategic asset</li>
                    <li><strong>10% Other collateral</strong> — diversified crypto</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-primary mb-3">Innovation:</h4>
                  <ul className="text-sm text-neutral-dark space-y-2">
                    <li>• First DAO to buy US Treasuries on-chain</li>
                    <li>• Partnered with Monetalis for RWA custody</li>
                    <li>• Generates ~$200M annual revenue from T-bill yields</li>
                    <li>• Reduced dependence on volatile crypto collateral</li>
                  </ul>
                </div>
              </div>

              <div className="bg-success p-4 rounded">
                <p className="font-bold text-primary mb-2">💡 Key Lesson:</p>
                <p className="text-sm text-neutral-dark">Institutional assets (T-bills) in DeFi provide stable yield without crypto volatility. Hybrid model works.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Integration Pattern: Corporate Treasury → DeFi</h2>
            <div className="bg-white p-8 rounded-lg border-2 border-accent">
              <h3 className="text-xl font-bold text-accent mb-4">Use Case: $100M Corporate Treasury Diversification</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-primary mb-2">Traditional Allocation:</h4>
                  <ul className="text-sm text-neutral-dark space-y-1">
                    <li>• 80% bank deposits (0.1% yield)</li>
                    <li>• 15% money market funds (2% yield)</li>
                    <li>• 5% short-term bonds (3% yield)</li>
                    <li>• <strong>Blended yield: 0.5%</strong></li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-primary mb-2">Hybrid Allocation (25% to DeFi):</h4>
                  <ul className="text-sm text-neutral-dark space-y-1">
                    <li>• 60% bank deposits (0.1% yield) — $60M</li>
                    <li>• 15% money market funds (2% yield) — $15M</li>
                    <li>• <strong>25% USDC in Aave (4% yield) — $25M</strong></li>
                    <li>• <strong>Blended yield: 1.4% → +$900k/year</strong></li>
                  </ul>
                </div>

                <div className="bg-accent/10 p-4 rounded border-2 border-accent">
                  <p className="font-bold text-accent mb-2">🎯 Implementation:</p>
                  <ol className="text-sm text-neutral-dark space-y-1 list-decimal list-inside">
                    <li>Convert $25M USD → USDC via Circle (0.1% fee)</li>
                    <li>Transfer USDC to Gnosis Safe multisig (4-of-6 board signatures)</li>
                    <li>Deploy to Aave via Safe transaction</li>
                    <li>Earn 4% yield, auto-compound via aUSDC token</li>
                    <li>Monitor risk: set alerts if TVL drops or exploit detected</li>
                  </ol>
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
                  <span><strong>DeFi yields beat traditional rates</strong> — 3-5% USDC yield vs 0.1% bank deposits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success text-xl mr-3">✓</span>
                  <span><strong>RWAs enable institutional yields</strong> — US Treasuries on-chain (5% yield, low risk)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warning text-xl mr-3">⚠</span>
                  <span><strong>Diversification critical</strong> — Never hold 80%+ in one asset (even stablecoins)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success text-xl mr-3">✓</span>
                  <span><strong>POL reduces inflation</strong> — Own liquidity instead of renting it via emissions</span>
                </li>
              </ul>
            </div>
          </section>

          <div className="flex justify-between items-center pt-8 border-t border-neutral-light">
            <Link href="/domains/identity" className="text-secondary hover:text-accent transition-colors font-medium">
              ← Previous: Identity & Compliance
            </Link>
            <Link href="/domains/derivatives" className="text-secondary hover:text-accent transition-colors font-medium">
              Next: Derivatives →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
