import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-foreground-inverse">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              DIAN Framework
            </h1>
            <p className="text-2xl sm:text-3xl text-success font-semibold mb-4">
              Decentralized Integration Architecture Network
            </p>
            <p className="text-xl sm:text-2xl text-neutral-light max-w-3xl mx-auto mb-8">
              Practical integration patterns for connecting traditional finance systems with DeFi protocols.
            </p>
            <p className="text-lg text-neutral-light max-w-2xl mx-auto mb-12">
              The integration framework for connecting traditional banking services with DeFi protocols. 
              Practical patterns and technical implementations for teams building the future of finance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/framework"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-foreground-inverse bg-accent hover:bg-accent-light transition-colors"
              >
                Explore Integration Patterns
              </Link>
              <Link
                href="/mappings"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-secondary text-base font-medium rounded-md text-foreground-inverse hover:bg-secondary hover:border-secondary transition-colors"
              >
                View Domain Mappings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Integration Over Translation
            </h2>
            <p className="text-lg text-neutral max-w-3xl mx-auto">
              Moving beyond "what maps to what" — learn HOW to actually connect CeFi and DeFi systems with proven patterns.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg border-2 border-neutral-light hover:border-secondary transition-colors">
              <div className="text-secondary text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-bold text-primary mb-2">
                For Financial Institutions
              </h3>
              <p className="text-neutral-dark">
                Step-by-step integration guides for connecting core banking systems to DeFi protocols. 
                Understand data flow patterns, API equivalents, and risk mitigation strategies.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border-2 border-neutral-light hover:border-secondary transition-colors">
              <div className="text-secondary text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-primary mb-2">
                For DeFi Protocols
              </h3>
              <p className="text-neutral-dark">
                Learn how institutional systems work and design integration-friendly interfaces. 
                Position your protocol for enterprise adoption with clear integration paths.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border-2 border-neutral-light hover:border-secondary transition-colors">
              <div className="text-secondary text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-primary mb-2">
                For Integration Engineers
              </h3>
              <p className="text-neutral-dark">
                Practical code examples, architecture diagrams, and battle-tested patterns. 
                Understand DeFi equivalents to familiar CeFi concepts (APIs, webhooks, transactions).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Pattern Example */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Familiar Concepts, New Mechanisms
          </h2>
          <div className="bg-white p-8 rounded-lg border-2 border-secondary">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Traditional Finance (CeFi)</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-neutral pl-4">
                    <p className="font-semibold text-secondary">REST APIs</p>
                    <p className="text-sm text-neutral-dark">Query account balances, transaction history</p>
                  </div>
                  <div className="border-l-4 border-neutral pl-4">
                    <p className="font-semibold text-secondary">Webhooks</p>
                    <p className="text-sm text-neutral-dark">Receive payment notifications in real-time</p>
                  </div>
                  <div className="border-l-4 border-neutral pl-4">
                    <p className="font-semibold text-secondary">Database Transactions</p>
                    <p className="text-sm text-neutral-dark">ACID guarantees for data consistency</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Decentralized Finance (DeFi)</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-4">
                    <p className="font-semibold text-accent">Oracles & The Graph</p>
                    <p className="text-sm text-neutral-dark">Query on-chain data via subgraphs</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <p className="font-semibold text-accent">Event Listeners</p>
                    <p className="text-sm text-neutral-dark">Listen to smart contract events on-chain</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <p className="font-semibold text-accent">Atomic Swaps</p>
                    <p className="text-sm text-neutral-dark">Blockchain state transitions guarantee atomicity</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link href="/framework" className="text-secondary font-medium hover:text-accent transition-colors">
                Explore 20+ Integration Patterns →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
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
                className="bg-background p-6 rounded-lg border border-neutral-light hover:border-secondary hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-3">{domain.icon}</div>
                <h3 className="text-lg font-semibold text-primary">
                  {domain.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Explorer */}
      <section className="py-16 bg-accent text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">🔍 Interactive Protocol Explorer</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Explore 47+ traditional banking service → DeFi protocol mappings with live filtering by domain cluster, 
            maturity, and gas efficiency. Search across protocols, patterns, and integration strategies.
          </p>
          <Link
            href="/explorer"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-accent hover:bg-gray-100 rounded-md transition-colors font-bold text-lg"
          >
            Launch Explorer →
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary text-foreground-inverse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-success mb-2">47+</div>
              <div className="text-lg text-neutral-light">Protocol Mappings in Explorer</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">50+</div>
              <div className="text-lg text-neutral-light">DeFi Protocols Analyzed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">8</div>
              <div className="text-lg text-neutral-light">Domain Clusters Mapped</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Integrate CeFi and DeFi?
          </h2>
          <p className="text-lg text-neutral-dark mb-8 max-w-2xl mx-auto">
            Whether you're building bridges between traditional finance and DeFi or architecting 
            the next generation of financial infrastructure, DIAN provides the integration roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consulting"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-foreground-inverse bg-accent hover:bg-accent-light transition-colors"
            >
              Work With Me
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-base font-medium rounded-md text-primary hover:bg-gray-50 transition-colors"
            >
              View Integration Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
