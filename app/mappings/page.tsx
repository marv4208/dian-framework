import Link from 'next/link';

export default function Mappings() {
  const domains = [
    { id: 'payments', name: 'Payments & Settlement', icon: '💸', patterns: 'Stablecoin rails, on/off ramps, cross-border' },
    { id: 'lending', name: 'Lending & Credit', icon: '🏛️', patterns: 'Over-collateralized lending, flash loans, RWA credit' },
    { id: 'trading', name: 'Trading & Market Making', icon: '📊', patterns: 'DEX integration, AMM patterns, MEV protection' },
    { id: 'custody', name: 'Custody & Asset Management', icon: '🔐', patterns: 'Multisig, yield aggregation, institutional custody' },
    { id: 'identity', name: 'Identity & Compliance', icon: '🆔', patterns: 'KYC/AML integration, on-chain attestations' },
    { id: 'treasury', name: 'Treasury & Liquidity', icon: '💰', patterns: 'DAO treasury, liquidity pool integration' },
    { id: 'derivatives', name: 'Derivatives', icon: '📈', patterns: 'Perpetual swaps, options, synthetic assets' },
    { id: 'governance', name: 'Governance', icon: '🗳️', patterns: 'DAO integration, on-chain voting automation' },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-primary mb-4 text-center">Integration Patterns</h1>
        <p className="text-xl text-neutral-dark text-center mb-12 max-w-3xl mx-auto">
          Practical patterns for connecting CeFi systems with DeFi protocols across 8 domain clusters. 
          Each pattern includes architecture diagrams, code examples, and implementation guides.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {domains.map((domain) => (
            <Link
              key={domain.id}
              href={`/domains/${domain.id}`}
              className="bg-white p-8 rounded-lg border-2 border-neutral-light hover:border-secondary hover:shadow-lg transition-all"
            >
              <div className="text-6xl mb-4">{domain.icon}</div>
              <h2 className="text-2xl font-bold text-primary mb-2">{domain.name}</h2>
              <p className="text-neutral-dark mb-4">{domain.patterns}</p>
              <span className="text-secondary font-medium">View integration patterns →</span>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center bg-secondary text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Need Custom Integration Strategy?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Get tailored integration architecture, protocol evaluation, and implementation roadmaps 
            for your specific use case.
          </p>
          <Link
            href="/consulting"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent hover:bg-accent-light text-white rounded-md transition-colors font-medium"
          >
            Work With Me
          </Link>
        </div>
      </div>
    </main>
  );
}
