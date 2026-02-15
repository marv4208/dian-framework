export default function Framework() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">Framework Overview</h1>
        
        <div className="prose max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Executive Summary</h2>
            <p className="text-lg text-neutral-dark mb-4">
              This framework provides a structured mapping between traditional banking service domains 
              (as defined by the Banking Industry Architecture Network - BIAN) and decentralized finance 
              (DeFi) protocols. It serves as a bridge for financial institutions, fintech companies, and 
              DeFi protocols to understand architectural equivalencies, identify integration points, and 
              assess gaps between centralized and decentralized financial systems.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">What is BIAN?</h2>
            <p className="text-neutral-dark mb-4">
              The Banking Industry Architecture Network (BIAN) is an independent, member-owned, non-profit 
              organization that has developed a comprehensive service-oriented architecture (SOA) framework 
              for the banking industry. BIAN defines over 300 "Service Domains" that represent discrete, 
              reusable banking functions with standardized APIs.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h3 className="text-xl font-bold text-secondary mb-3">Key BIAN Principles:</h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-dark">
                <li><strong>Service-oriented decomposition:</strong> Each domain is a self-contained business capability</li>
                <li><strong>Standardized interfaces:</strong> Consistent API patterns across domains</li>
                <li><strong>Vendor neutrality:</strong> Enables plug-and-play integration</li>
                <li><strong>Reduced complexity:</strong> Breaks monolithic core banking into modular components</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">DeFi Architecture Stack</h2>
            <p className="text-neutral-dark mb-4">
              DeFi replicates and extends traditional financial services through a layered, composable architecture:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="text-xl font-bold text-secondary">Layer 0/1: Settlement Layer</h3>
                <p className="text-neutral-dark">Base blockchain providing security, consensus, and transaction finality (Ethereum, Solana, Arbitrum)</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="text-xl font-bold text-secondary">Layer 2: Asset Layer</h3>
                <p className="text-neutral-dark">Digital representation of value via token standards (ERC-20, ERC-721, ERC-1155)</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="text-xl font-bold text-secondary">Layer 3: Protocol Layer</h3>
                <p className="text-neutral-dark">Business logic via smart contracts (AMMs, lending pools, oracles, governance)</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="text-xl font-bold text-secondary">Layer 4: Application Layer</h3>
                <p className="text-neutral-dark">User-facing interfaces (dApps, wallets, dashboards, aggregators)</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">8 Domain Clusters</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { num: 1, name: 'Payments & Settlement', desc: 'Stablecoins, L1/L2s, cross-border transfers' },
                { num: 2, name: 'Lending & Credit', desc: 'Over-collateralized lending, flash loans' },
                { num: 3, name: 'Trading & Market Making', desc: 'AMMs, DEXs, MEV protection' },
                { num: 4, name: 'Custody & Asset Management', desc: 'Self-custody, multisigs, yield' },
                { num: 5, name: 'Identity & Compliance', desc: 'KYC/AML, decentralized identity' },
                { num: 6, name: 'Treasury & Liquidity', desc: 'DAO treasuries, reserves' },
                { num: 7, name: 'Derivatives', desc: 'Perpetuals, options, synthetics' },
                { num: 8, name: 'Governance', desc: 'DAOs, on-chain voting' },
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

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Next Steps</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/mappings"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent-light text-white rounded-md transition-colors font-medium"
              >
                Explore Mappings
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
