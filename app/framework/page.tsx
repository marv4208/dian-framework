export default function Framework() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">DIAN Framework Overview</h1>
        
        <div className="prose max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Integration-First Approach</h2>
            <p className="text-lg text-neutral-dark mb-4">
              DIAN (Decentralized Integration Architecture Network) provides practical patterns for 
              connecting traditional finance systems with DeFi protocols. Rather than just mapping 
              "what does what," we show you HOW to actually build the integration.
            </p>
            <div className="bg-secondary text-white p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-3">Core Philosophy</h3>
              <p className="opacity-90">
                If you understand how APIs work, you can understand how oracles work. If you know 
                webhooks, you can grasp event listeners. DIAN translates familiar CeFi patterns into 
                DeFi equivalents with working examples.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">20+ Integration Patterns</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  cefi: 'REST APIs',
                  defi: 'The Graph Subgraphs',
                  use: 'Query balances, transaction history',
                },
                {
                  cefi: 'Webhooks',
                  defi: 'Smart Contract Events',
                  use: 'Real-time notifications of state changes',
                },
                {
                  cefi: 'Database Transactions (ACID)',
                  defi: 'Atomic Swaps',
                  use: 'Ensure all-or-nothing execution',
                },
                {
                  cefi: 'Message Queues (Kafka)',
                  defi: 'Relayers',
                  use: 'Asynchronous transaction processing',
                },
                {
                  cefi: 'OAuth 2.0',
                  defi: 'Wallet Connect',
                  use: 'User authentication and authorization',
                },
                {
                  cefi: 'ACH/SWIFT Networks',
                  defi: 'Stablecoin Payment Rails',
                  use: 'Cross-border value transfer',
                },
              ].map((pattern, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border-2 border-neutral-light hover:border-secondary transition-colors">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="border-l-4 border-neutral pl-3">
                      <p className="text-sm text-neutral uppercase font-bold mb-1">CeFi</p>
                      <p className="font-bold text-primary">{pattern.cefi}</p>
                    </div>
                    <div className="border-l-4 border-accent pl-3">
                      <p className="text-sm text-neutral uppercase font-bold mb-1">DeFi</p>
                      <p className="font-bold text-accent">{pattern.defi}</p>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-dark">
                    <strong>Use Case:</strong> {pattern.use}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">8 Integration Domain Clusters</h2>
            <p className="text-neutral-dark mb-6">
              Each cluster includes detailed integration patterns, architecture diagrams, code examples, 
              and risk analysis:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { num: 1, name: 'Payments & Settlement', desc: 'Stablecoin integration, on/off ramps, cross-border' },
                { num: 2, name: 'Lending & Credit', desc: 'Over-collateralized lending, RWA credit bridges' },
                { num: 3, name: 'Trading & Market Making', desc: 'DEX integration, AMM patterns, MEV protection' },
                { num: 4, name: 'Custody & Asset Management', desc: 'Institutional custody, multisig, yield aggregation' },
                { num: 5, name: 'Identity & Compliance', desc: 'KYC/AML integration, on-chain attestations' },
                { num: 6, name: 'Treasury & Liquidity', desc: 'DAO treasury, liquidity pool integration' },
                { num: 7, name: 'Derivatives', desc: 'Perpetual swaps, options, synthetic asset integration' },
                { num: 8, name: 'Governance', desc: 'DAO integration, on-chain voting automation' },
              ].map((domain) => (
                <div key={domain.num} className="bg-white p-6 rounded-lg border border-neutral-light">
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    Domain {domain.num}: {domain.name}
                  </h3>
                  <p className="text-neutral-dark">{domain.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Methodology</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-secondary mb-3">1. Pattern Identification</h3>
                <p className="text-neutral-dark">
                  Map familiar CeFi integration patterns (APIs, webhooks, message queues) to DeFi 
                  equivalents (oracles, events, relayers). Document similarities and key differences.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-secondary mb-3">2. Data Flow Analysis</h3>
                <p className="text-neutral-dark">
                  Trace how information moves through each pattern: authentication, request/response, 
                  error handling, state synchronization, and rollback mechanisms.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-secondary mb-3">3. Implementation Examples</h3>
                <p className="text-neutral-dark">
                  Provide working code: smart contract integrations, API adapters, middleware layers. 
                  Show both simple (proof-of-concept) and production-grade implementations.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-secondary mb-3">4. Risk & Cost Assessment</h3>
                <p className="text-neutral-dark">
                  Analyze security vulnerabilities, performance bottlenecks, cost trade-offs, and 
                  regulatory considerations. Provide mitigation strategies for each identified risk.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Next Steps</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/mappings"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent-light text-white rounded-md transition-colors font-medium"
              >
                Explore Integration Patterns
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary hover:bg-gray-50 rounded-md transition-colors font-medium"
              >
                View Case Studies
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
