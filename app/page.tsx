import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Clean & Professional */}
      <section className="bg-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6">
              DIAN Framework
            </h1>
            <p className="text-2xl sm:text-3xl text-accent font-semibold mb-6">
              Decentralized Integration Architecture Network
            </p>
            <p className="text-xl text-secondary mb-8 leading-relaxed">
              The integration framework for connecting traditional banking services with DeFi protocols. 
              Practical patterns and technical implementations for teams building the future of finance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/framework"
                className="btn btn-primary text-lg px-8"
              >
                Explore Framework
              </Link>
              <Link
                href="/blog"
                className="btn btn-outline text-lg px-8"
              >
                Read the Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - Clean Grid */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Integration Over Translation
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Learn HOW to actually connect CeFi and DeFi systems with proven patterns
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card hover:shadow-xl">
              <div className="text-accent text-5xl mb-4">🏦</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                For Financial Institutions
              </h3>
              <p className="text-secondary leading-relaxed">
                Step-by-step integration guides for connecting core banking systems to DeFi protocols.
              </p>
            </div>
            <div className="card hover:shadow-xl">
              <div className="text-accent text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                For DeFi Protocols
              </h3>
              <p className="text-secondary leading-relaxed">
                Design integration-friendly interfaces and position your protocol for enterprise adoption.
              </p>
            </div>
            <div className="card hover:shadow-xl">
              <div className="text-accent text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                For Integration Engineers
              </h3>
              <p className="text-secondary leading-relaxed">
                Practical code examples, architecture diagrams, and battle-tested integration patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Pattern Example */}
      <section className="section bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Familiar Concepts, New Mechanisms
          </h2>
          <div className="card border-2 border-accent">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Traditional Finance</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-neutral-light pl-4">
                    <p className="font-bold text-primary mb-1">REST APIs</p>
                    <p className="text-sm text-secondary">Query account balances, transaction history</p>
                  </div>
                  <div className="border-l-4 border-neutral-light pl-4">
                    <p className="font-bold text-primary mb-1">Webhooks</p>
                    <p className="text-sm text-secondary">Receive payment notifications in real-time</p>
                  </div>
                  <div className="border-l-4 border-neutral-light pl-4">
                    <p className="font-bold text-primary mb-1">Database Transactions</p>
                    <p className="text-sm text-secondary">ACID guarantees for data consistency</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Decentralized Finance</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-4">
                    <p className="font-bold text-accent mb-1">Oracles & The Graph</p>
                    <p className="text-sm text-secondary">Query on-chain data via subgraphs</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <p className="font-bold text-accent mb-1">Event Listeners</p>
                    <p className="text-sm text-secondary">Listen to smart contract events on-chain</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <p className="font-bold text-accent mb-1">Atomic Swaps</p>
                    <p className="text-sm text-secondary">Blockchain state transitions guarantee atomicity</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="/framework" className="text-accent hover:text-accent-light font-medium">
                Explore 20+ Integration Patterns →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Overview */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            8 Integration Domain Clusters
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Payments & Settlement', icon: '💸', href: '/domains/payments' },
              { name: 'Lending & Credit', icon: '🏛️', href: '/domains/lending' },
              { name: 'Trading & Market Making', icon: '📊', href: '/domains/trading' },
              { name: 'Custody & Asset Management', icon: '🔐', href: '/domains/custody' },
              { name: 'Identity & Compliance', icon: '🆔', href: '/domains/identity' },
              { name: 'Treasury & Liquidity', icon: '💰', href: '/domains/treasury' },
              { name: 'Derivatives', icon: '📈', href: '/domains/derivatives' },
              { name: 'Governance', icon: '🗳️', href: '/domains/governance' },
            ].map((domain) => (
              <Link
                key={domain.name}
                href={domain.href}
                className="card hover:shadow-xl text-center"
              >
                <div className="text-5xl mb-3">{domain.icon}</div>
                <h3 className="text-lg font-bold text-primary">
                  {domain.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Explorer CTA */}
      <section className="section bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">🔍 Interactive Protocol Explorer</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Explore 47+ traditional banking service → DeFi protocol mappings with live filtering by domain cluster, 
            maturity, and gas efficiency.
          </p>
          <Link
            href="/explorer"
            className="btn bg-white text-accent hover:bg-gray-100 text-lg px-8"
          >
            Launch Explorer →
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-accent mb-2">47+</div>
              <div className="text-lg text-secondary">Protocol Mappings</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">50+</div>
              <div className="text-lg text-secondary">DeFi Protocols Analyzed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">8</div>
              <div className="text-lg text-secondary">Domain Clusters</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Ready to Integrate CeFi and DeFi?
          </h2>
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
            Whether you're building bridges between traditional finance and DeFi or architecting 
            the next generation of financial infrastructure, DIAN provides the integration roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consulting"
              className="btn btn-primary text-lg px-8"
            >
              Work With Me
            </Link>
            <Link
              href="/case-studies"
              className="btn btn-secondary text-lg px-8"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
