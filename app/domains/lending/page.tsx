import Link from 'next/link';

export default function LendingCredit() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link href="/mappings" className="text-secondary hover:text-accent transition-colors">
            ← Back to Integration Patterns
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-primary mb-4">Domain 2: Lending & Credit</h1>
        <p className="text-xl text-neutral-dark mb-12">
          Over-collateralized lending pools, flash loans, and emerging undercollateralized credit protocols
        </p>

        <div className="prose max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Traditional Banking Services Covered</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-neutral-light">
                <h3 className="text-xl font-bold text-secondary mb-2">Loan</h3>
                <p className="text-neutral-dark mb-2"><strong>Function:</strong> Manages complete loan lifecycle from origination to servicing</p>
                <p className="text-sm text-neutral"><strong>Operations:</strong> Application, underwriting, approval, disbursement, repayment tracking</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-neutral-light">
                <h3 className="text-xl font-bold text-secondary mb-2">Credit Management</h3>
                <p className="text-neutral-dark mb-2"><strong>Function:</strong> Assesses and monitors borrower creditworthiness</p>
                <p className="text-sm text-neutral"><strong>Operations:</strong> Credit scoring, risk assessment, exposure monitoring, collections</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-neutral-light">
                <h3 className="text-xl font-bold text-secondary mb-2">Collateral Management</h3>
                <p className="text-neutral-dark mb-2"><strong>Function:</strong> Tracks and values assets securing credit facilities</p>
                <p className="text-sm text-neutral"><strong>Operations:</strong> Registration, valuation, margining, liquidation</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-neutral-light">
                <h3 className="text-xl font-bold text-secondary mb-2">Corporate Loan</h3>
                <p className="text-neutral-dark mb-2"><strong>Function:</strong> Provides credit facilities to businesses</p>
                <p className="text-sm text-neutral"><strong>Operations:</strong> Working capital, term loans, revolving credit, syndication</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">DeFi Lending Protocols</h2>
            
            <div className="space-y-6">
              <div className="bg-secondary text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Aave (Liquidity Pool Model)</h3>
                <p className="mb-4 opacity-90"><strong>Architecture:</strong> Users deposit assets into liquidity pools, depositors earn interest via aTokens, borrowers post collateral and withdraw loans up to LTV ratio</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-bold mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-sm opacity-90">
                      <li>• Multi-collateral support (50+ assets)</li>
                      <li>• Flash loans (uncollateralized, atomic)</li>
                      <li>• E-mode (efficiency for correlated assets)</li>
                      <li>• Isolation mode (risk-isolated new listings)</li>
                      <li>• GHO stablecoin (native borrowing)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">vs Traditional Loan:</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="text-success">✓ Instant approval (algorithmic)</li>
                      <li className="text-success">✓ Permissionless (no KYC)</li>
                      <li className="opacity-90">✗ Over-collateralized (150-200%)</li>
                      <li className="opacity-90">✗ No credit history support</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg border-2 border-accent">
                <h3 className="text-2xl font-bold text-accent mb-4">Compound (Autonomous Interest Rate Protocol)</h3>
                <p className="text-neutral-dark mb-4"><strong>Architecture:</strong> Liquidity pool model with cToken system (e.g., cDAI, cETH) representing deposits + accrued interest</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-primary mb-2">Differentiators:</h4>
                    <ul className="space-y-1 text-sm text-neutral-dark">
                      <li>• Simpler design (fewer features than Aave)</li>
                      <li>• Lower gas costs for basic operations</li>
                      <li>• Strong institutional adoption</li>
                      <li>• Governance via COMP token</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">vs Traditional Credit Management:</h4>
                    <ul className="space-y-1 text-sm text-neutral-dark">
                      <li className="text-success">✓ Real-time risk monitoring</li>
                      <li className="text-success">✓ Transparent liquidations</li>
                      <li>✗ No credit scoring (collateral only)</li>
                      <li>✗ Volatile collateral risks</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg border border-neutral-light">
                <h3 className="text-2xl font-bold text-primary mb-4">Morpho (Peer-to-Peer Matching Layer)</h3>
                <p className="text-neutral-dark mb-4"><strong>Innovation:</strong> Sits on top of Aave/Compound, matches lenders and borrowers peer-to-peer when possible, falls back to underlying pool for unmatched liquidity</p>
                
                <div className="bg-white p-4 rounded border-l-4 border-accent">
                  <p className="font-bold text-secondary mb-2">Why This Matters:</p>
                  <p className="text-sm text-neutral-dark">Better rates for matched positions (no pool spread), same liquidity guarantees (can always exit to base pool), lower smart contract risk</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Undercollateralized Lending (Emerging)</h2>
            <p className="text-neutral-dark mb-6">DeFi's attempt to replicate credit-based lending without requiring excess collateral</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border-2 border-secondary">
                <h3 className="text-xl font-bold text-secondary mb-3">Goldfinch (RWA Lending)</h3>
                <p className="text-sm text-neutral-dark mb-4">
                  <strong>Model:</strong> "Backers" assess off-chain borrowers, "Senior pool" provides capital with junior tranche protection. Borrowers are real businesses (fintech, SMEs in emerging markets).
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span className="text-neutral-dark">Credit-based (cash-flow lending)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span className="text-neutral-dark">Real-world impact (underbanked regions)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-neutral mr-2">✗</span>
                    <span className="text-neutral-dark">Legal enforceability required</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-neutral mr-2">✗</span>
                    <span className="text-neutral-dark">Lower liquidity (cannot instant exit)</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-accent">
                <h3 className="text-xl font-bold text-accent mb-3">Maple Finance (Institutional Credit)</h3>
                <p className="text-sm text-neutral-dark mb-4">
                  <strong>Model:</strong> "Pool Delegates" underwrite institutional borrowers. Lenders deposit USDC into delegate-managed pools. Borrowers are crypto institutions (market makers, funds).
                </p>
                <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                  <p className="text-sm font-bold text-yellow-800 mb-2">⚠️ Lessons Learned:</p>
                  <p className="text-xs text-neutral-dark">High-profile defaults during 2022-2023 bear market (Orthogonal, Auros). Shifted to more conservative underwriting post-crisis. Illustrates DeFi credit risk is still immature.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Flash Loans: DeFi-Native Innovation</h2>
            <div className="bg-accent text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Zero-Collateral Loans (Repaid in Same Transaction)</h3>
              <p className="mb-6 opacity-90">No CeFi equivalent — made possible by atomic transaction execution</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/10 p-4 rounded">
                  <h4 className="font-bold mb-3">How They Work:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm opacity-90">
                    <li>Borrow any amount from lending pool (e.g., 10,000 ETH)</li>
                    <li>Use borrowed funds for operations (arbitrage, liquidations)</li>
                    <li>Repay loan + fee (0.09% on Aave) in same transaction</li>
                    <li>If repayment fails, entire transaction reverts</li>
                  </ol>
                </div>
                <div className="bg-white/10 p-4 rounded">
                  <h4 className="font-bold mb-3">Use Cases:</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li><strong>Arbitrage:</strong> Buy low, sell high, repay, keep spread</li>
                    <li><strong>Liquidations:</strong> Borrow to liquidate, repay from proceeds</li>
                    <li><strong>Collateral swaps:</strong> Replace collateral without closing position</li>
                    <li><strong>Exploit attacks:</strong> Amplify attack capital (negative use)</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-500/20 p-4 rounded border border-yellow-400">
                <p className="text-sm font-bold mb-2">📊 Impact:</p>
                <p className="text-sm opacity-90">Enabled $10B+ in arbitrage/liquidation volume, but also hundreds of millions in exploits</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Functional Comparison</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg border border-neutral-light">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-bold text-primary">Function</th>
                    <th className="px-4 py-3 text-left text-sm font-bold text-primary">Banking Service</th>
                    <th className="px-4 py-3 text-left text-sm font-bold text-primary">DeFi Protocol</th>
                    <th className="px-4 py-3 text-left text-sm font-bold text-primary">Key Difference</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-bold text-secondary">Personal Loan</td>
                    <td className="px-4 py-3 text-sm">Consumer Loan</td>
                    <td className="px-4 py-3 text-sm">Aave (over-collateralized)</td>
                    <td className="px-4 py-3 text-sm">No credit check, instant, requires 150%+ collateral</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-secondary">Working Capital</td>
                    <td className="px-4 py-3 text-sm">Corporate Loan</td>
                    <td className="px-4 py-3 text-sm">Goldfinch/Maple</td>
                    <td className="px-4 py-3 text-sm">Credit-based but requires legal contracts</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-secondary">Margin Trading</td>
                    <td className="px-4 py-3 text-sm">Securities Lending</td>
                    <td className="px-4 py-3 text-sm">Compound + leverage</td>
                    <td className="px-4 py-3 text-sm">Permissionless, 24/7, auto-liquidation</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-secondary">Bridge Financing</td>
                    <td className="px-4 py-3 text-sm">Short-term Loan</td>
                    <td className="px-4 py-3 text-sm">Flash Loan</td>
                    <td className="px-4 py-3 text-sm">Zero collateral, atomic (same transaction only)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Integration Patterns</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border-2 border-secondary">
                <h3 className="text-xl font-bold text-secondary mb-3">Pattern 1: Collateral Bridge</h3>
                <p className="text-neutral-dark mb-3">
                  <strong>Use:</strong> Accept tokenized real-world assets (RWAs) as collateral in DeFi lending pools
                </p>
                <p className="text-sm text-neutral"><strong>Example:</strong> Centrifuge tokenizes invoices → used as collateral on Aave → instant working capital for SMEs</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-accent">
                <h3 className="text-xl font-bold text-accent mb-3">Pattern 2: Yield Optimization</h3>
                <p className="text-neutral-dark mb-3">
                  <strong>Use:</strong> Treasury teams deploy idle cash to DeFi lending to earn higher yields than bank deposits
                </p>
                <p className="text-sm text-neutral"><strong>Example:</strong> Corporate treasury converts USD → USDC → Aave → earns 3-5% vs 0.1% bank savings</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-primary">
                <h3 className="text-xl font-bold text-primary mb-3">Pattern 3: Credit Data Oracle</h3>
                <p className="text-neutral-dark mb-3">
                  <strong>Use:</strong> Bring off-chain credit scores on-chain to enable undercollateralized DeFi lending
                </p>
                <p className="text-sm text-neutral"><strong>Example:</strong> Chainlink oracle feeds FICO scores → smart contract grants loan based on credit tier</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Key Takeaways for Integration</h2>
            <div className="bg-secondary text-white p-8 rounded-lg">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-success text-xl mr-3">✓</span>
                  <span><strong>Over-collateralized lending is mature</strong> — Aave/Compound handle $10B+ TVL with strong track records</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success text-xl mr-3">✓</span>
                  <span><strong>Flash loans are powerful</strong> — Enable capital-efficient arbitrage and liquidations (but also exploits)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warning text-xl mr-3">⚠</span>
                  <span><strong>Undercollateralized DeFi is early</strong> — RWA lending works but requires legal enforceability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success text-xl mr-3">✓</span>
                  <span><strong>Integration via tokenization</strong> — RWAs (invoices, T-bills, real estate) can become DeFi collateral</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warning text-xl mr-3">⚠</span>
                  <span><strong>Liquidation risk is real</strong> — Crypto volatility means over-collateralization ratios matter</span>
                </li>
              </ul>
            </div>
          </section>

          <div className="flex justify-between items-center pt-8 border-t border-neutral-light">
            <Link href="/domains/payments" className="text-secondary hover:text-accent transition-colors font-medium">
              ← Previous: Payments & Settlement
            </Link>
            <Link href="/domains/trading" className="text-secondary hover:text-accent transition-colors font-medium">
              Next: Trading & Market Making →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
