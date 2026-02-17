import Link from 'next/link';

export default function PaymentsSettlement() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link href="/mappings" className="text-secondary hover:text-accent transition-colors">
            ← Back to Integration Patterns
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-primary mb-4">Domain 1: Payments & Settlement</h1>
        <p className="text-xl text-neutral-dark mb-12">
          Stablecoin payment rails, cross-border transfers, and on-chain settlement mechanisms
        </p>

        <div className="prose max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Traditional Banking Services Covered</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-neutral-light">
                <h3 className="text-xl font-bold text-secondary mb-2">Payment Execution</h3>
                <p className="text-neutral-dark mb-2"><strong>Function:</strong> Processes individual payment transactions</p>
                <p className="text-sm text-neutral"><strong>Operations:</strong> Initiate, authorize, execute, reconcile payment instructions</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-neutral-light">
                <h3 className="text-xl font-bold text-secondary mb-2">Payment Order</h3>
                <p className="text-neutral-dark mb-2"><strong>Function:</strong> Manages the lifecycle of payment instructions</p>
                <p className="text-sm text-neutral"><strong>Operations:</strong> Capture, validate, route, track payment orders</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-neutral-light">
                <h3 className="text-xl font-bold text-secondary mb-2">Settlement</h3>
                <p className="text-neutral-dark mb-2"><strong>Function:</strong> Finalizes transfer of funds between parties</p>
                <p className="text-sm text-neutral"><strong>Operations:</strong> Gross/net settlement, finality confirmation, reconciliation</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-neutral-light">
                <h3 className="text-xl font-bold text-secondary mb-2">Wire Transfer</h3>
                <p className="text-neutral-dark mb-2"><strong>Function:</strong> Real-time interbank electronic funds transfer</p>
                <p className="text-sm text-neutral"><strong>Operations:</strong> SWIFT/Fedwire message handling, correspondent banking</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">DeFi Protocol Equivalents</h2>
            
            <div className="bg-secondary text-white p-8 rounded-lg mb-6">
              <h3 className="text-2xl font-bold mb-4">Settlement Layer (L1/L2 Blockchains)</h3>
              <p className="mb-4 opacity-90">Base layer for transaction finality and state transitions</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded">
                  <p className="font-bold mb-1">Ethereum (L1)</p>
                  <p className="text-sm opacity-90">Largest DeFi ecosystem, ~12 second block time, high security</p>
                </div>
                <div className="bg-white/10 p-4 rounded">
                  <p className="font-bold mb-1">Arbitrum (L2)</p>
                  <p className="text-sm opacity-90">Optimistic rollup, 250ms blocks, lower fees</p>
                </div>
                <div className="bg-white/10 p-4 rounded">
                  <p className="font-bold mb-1">Base (L2)</p>
                  <p className="text-sm opacity-90">Coinbase-backed, fast finality, institutional-friendly</p>
                </div>
                <div className="bg-white/10 p-4 rounded">
                  <p className="font-bold mb-1">Solana</p>
                  <p className="text-sm opacity-90">High-throughput L1, 400ms blocks, parallel execution</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-accent mb-6">
              <h3 className="text-2xl font-bold text-primary mb-4">Stablecoins (Payment Rails)</h3>
              <p className="text-neutral-dark mb-4">Fiat-pegged digital currencies for on-chain payments</p>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-bold text-primary">Stablecoin</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-primary">Type</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-primary">Issuer</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-primary">Use Case</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 font-bold text-secondary">USDC</td>
                      <td className="px-4 py-3 text-sm">Fiat-backed</td>
                      <td className="px-4 py-3 text-sm">Circle</td>
                      <td className="px-4 py-3 text-sm">Institutional, compliant</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-bold text-secondary">USDT</td>
                      <td className="px-4 py-3 text-sm">Fiat-backed</td>
                      <td className="px-4 py-3 text-sm">Tether</td>
                      <td className="px-4 py-3 text-sm">High liquidity, cross-border</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-bold text-secondary">DAI</td>
                      <td className="px-4 py-3 text-sm">Crypto-collateralized</td>
                      <td className="px-4 py-3 text-sm">MakerDAO</td>
                      <td className="px-4 py-3 text-sm">Decentralized, censorship-resistant</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-bold text-secondary">PYUSD</td>
                      <td className="px-4 py-3 text-sm">Fiat-backed</td>
                      <td className="px-4 py-3 text-sm">PayPal/Paxos</td>
                      <td className="px-4 py-3 text-sm">Mainstream adoption</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Cross-Border Payment Protocols</h3>
              <p className="text-neutral-dark mb-4">Enable transfers between different blockchain ecosystems</p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-accent text-2xl mr-3">→</span>
                  <div>
                    <p className="font-bold text-secondary">Across Protocol</p>
                    <p className="text-sm text-neutral-dark">Optimistic bridge for L2 ↔ L2 transfers, fast UX</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-accent text-2xl mr-3">→</span>
                  <div>
                    <p className="font-bold text-secondary">Hop Protocol</p>
                    <p className="text-sm text-neutral-dark">Automated Market Maker bridge, L2 ↔ L2</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-accent text-2xl mr-3">→</span>
                  <div>
                    <p className="font-bold text-secondary">LayerZero</p>
                    <p className="text-sm text-neutral-dark">Omnichain messaging, enables cross-chain apps</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Real-World Implementation</h2>
            <div className="bg-white border-2 border-secondary rounded-lg overflow-hidden">
              <div className="bg-secondary text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Use Case: SME Cross-Border Payment (US → EU)</h3>
                <p className="opacity-90">Comparing traditional wire transfer vs DeFi stablecoin transfer</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border-l-4 border-neutral pl-4">
                    <h4 className="font-bold text-primary mb-3">Traditional Banking</h4>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-dark">
                      <li>SME initiates wire transfer via bank portal</li>
                      <li>Bank creates SWIFT MT103 message</li>
                      <li>Routed through 1-3 correspondent banks</li>
                      <li>Each intermediary takes 0.5-1% + $25-50 fee</li>
                      <li>Settlement in 2-5 business days</li>
                    </ol>
                    <div className="mt-4 bg-gray-100 p-4 rounded">
                      <p className="text-sm font-bold text-neutral-dark">Total cost: 2-4% + $75-150</p>
                      <p className="text-sm font-bold text-neutral-dark">Total time: 2-5 days</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-bold text-primary mb-3">DeFi Equivalent</h4>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-dark">
                      <li>SME converts USD to USDC via Circle (0.1% fee)</li>
                      <li>Transfers USDC on Base L2 (~$0.50 gas)</li>
                      <li>Optional: Bridge if needed (Across, ~$2)</li>
                      <li>Recipient converts USDC → EUR (0.1% fee)</li>
                    </ol>
                    <div className="mt-4 bg-success p-4 rounded">
                      <p className="text-sm font-bold text-primary">Total cost: 0.2% + $2.50</p>
                      <p className="text-sm font-bold text-primary">Total time: 10-30 minutes</p>
                    </div>
                  </div>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <p className="text-lg font-bold text-accent mb-2">💡 Savings: ~75-90% cost reduction, 200x+ time reduction</p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="font-bold text-primary mb-2">✅ DeFi Advantages:</p>
                      <ul className="text-sm text-neutral-dark space-y-1">
                        <li>• Speed (minutes vs days)</li>
                        <li>• Cost (10x-40x cheaper)</li>
                        <li>• Transparency (on-chain verification)</li>
                        <li>• 24/7 availability</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-primary mb-2">⚠️ CeFi Advantages:</p>
                      <ul className="text-sm text-neutral-dark space-y-1">
                        <li>• Dispute resolution & chargebacks</li>
                        <li>• Regulatory clarity</li>
                        <li>• No wallet security risk</li>
                        <li>• Fiat native</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Integration Patterns</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border-2 border-secondary">
                <h3 className="text-xl font-bold text-secondary mb-3">Pattern 1: Hybrid (Fiat → DeFi → Fiat)</h3>
                <p className="text-neutral-dark mb-3">
                  <strong>Flow:</strong> Bank → Stablecoin issuer → DeFi protocol → Stablecoin issuer → Bank
                </p>
                <p className="text-neutral-dark mb-2"><strong>Example:</strong> Visa's USDC settlement pilot, PayPal's PYUSD</p>
                <p className="text-sm text-neutral"><strong>Benefit:</strong> Keeps fiat endpoints, uses DeFi for middle-mile efficiency</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-accent">
                <h3 className="text-xl font-bold text-accent mb-3">Pattern 2: DeFi-Native (Crypto End-to-End)</h3>
                <p className="text-neutral-dark mb-3">
                  <strong>Flow:</strong> Wallet → DEX/Bridge → Wallet
                </p>
                <p className="text-neutral-dark mb-2"><strong>Example:</strong> Freelancer paid in USDC, pays contractors in ETH</p>
                <p className="text-sm text-neutral"><strong>Benefit:</strong> No fiat touch points, full DeFi composability</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-primary">
                <h3 className="text-xl font-bold text-primary mb-3">Pattern 3: Institutional On-Chain (Permissioned DeFi)</h3>
                <p className="text-neutral-dark mb-3">
                  <strong>Flow:</strong> KYC'd wallet → Compliant stablecoin → Permissioned protocol
                </p>
                <p className="text-neutral-dark mb-2"><strong>Example:</strong> JPMorgan's Onyx, Goldman's tokenized assets</p>
                <p className="text-sm text-neutral"><strong>Benefit:</strong> DeFi rails with institutional controls</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Key Takeaways for Integration</h2>
            <div className="bg-secondary text-white p-8 rounded-lg">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-success text-xl mr-3">✓</span>
                  <span><strong>DeFi is production-ready for payments</strong> — Stablecoins + L2s handle billions in daily volume</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success text-xl mr-3">✓</span>
                  <span><strong>Cost/speed advantage is real</strong> — 10-40x cheaper, 200x+ faster than traditional rails</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success text-xl mr-3">✓</span>
                  <span><strong>Regulatory clarity improving</strong> — USDC/PYUSD have compliance frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success text-xl mr-3">✓</span>
                  <span><strong>Hybrid models work</strong> — Visa, PayPal, Stripe all using stablecoin settlement internally</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success text-xl mr-3">✓</span>
                  <span><strong>On/off ramps critical</strong> — Integration point for fiat ↔ crypto conversion</span>
                </li>
              </ul>
            </div>
          </section>

          <div className="flex justify-between items-center pt-8 border-t border-neutral-light">
            <Link href="/mappings" className="text-secondary hover:text-accent transition-colors font-medium">
              ← Back to All Domains
            </Link>
            <Link href="/domains/lending" className="text-secondary hover:text-accent transition-colors font-medium">
              Next: Lending & Credit →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
