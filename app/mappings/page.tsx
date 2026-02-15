import Link from 'next/link';

export default function Mappings() {
  const domains = [
    { id: 'payments', name: 'Payments & Settlement', icon: '💸', protocols: 'Stablecoins, L1/L2s, Bridges' },
    { id: 'lending', name: 'Lending & Credit', icon: '🏛️', protocols: 'Aave, Compound, Morpho' },
    { id: 'trading', name: 'Trading & Market Making', icon: '📊', protocols: 'Uniswap, Curve, 1inch' },
    { id: 'custody', name: 'Custody & Asset Management', icon: '🔐', protocols: 'Gnosis Safe, Yearn, Lido' },
    { id: 'identity', name: 'Identity & Compliance', icon: '🆔', protocols: 'Civic, Worldcoin, Chainalysis' },
    { id: 'treasury', name: 'Treasury & Liquidity', icon: '💰', protocols: 'DAO Treasuries, Curve Pools' },
    { id: 'derivatives', name: 'Derivatives', icon: '📈', protocols: 'dYdX, GMX, Ribbon' },
    { id: 'governance', name: 'Governance', icon: '🗳️', protocols: 'Governor Bravo, Snapshot' },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-primary mb-4 text-center">Domain Mappings</h1>
        <p className="text-xl text-neutral-dark text-center mb-12 max-w-3xl mx-auto">
          Comprehensive mappings between BIAN service domains and DeFi protocols across 8 core clusters.
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
              <p className="text-neutral-dark mb-4">{domain.protocols}</p>
              <span className="text-secondary font-medium">View detailed mapping →</span>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">Need Custom Analysis?</h2>
          <p className="text-neutral-dark mb-6">
            Get tailored protocol evaluation and integration strategies for your specific use case.
          </p>
          <Link
            href="/consulting"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent-light text-white rounded-md transition-colors font-medium"
          >
            Work With Me
          </Link>
        </div>
      </div>
    </main>
  );
}
