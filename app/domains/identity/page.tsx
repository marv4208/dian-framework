import Link from 'next/link';

export default function IdentityCompliance() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link href="/mappings" className="text-secondary hover:text-accent transition-colors">
            ← Back to Integration Patterns
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-primary mb-4">Domain 5: Identity & Compliance</h1>
        <p className="text-xl text-neutral-dark mb-12">
          Decentralized identity (DID), on-chain KYC/AML, privacy-preserving compliance solutions
        </p>

        <div className="prose max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Traditional Banking Services Covered</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-neutral-light">
                <h3 className="text-xl font-bold text-secondary mb-2">Customer/Party Reference Data Management</h3>
                <p className="text-neutral-dark mb-2"><strong>Function:</strong> Maintains verified customer identity data</p>
                <p className="text-sm text-neutral"><strong>Operations:</strong> KYC, identity verification, data updates</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-neutral-light">
                <h3 className="text-xl font-bold text-secondary mb-2">Regulatory Compliance</h3>
                <p className="text-neutral-dark mb-2"><strong>Function:</strong> Ensures adherence to regulations</p>
                <p className="text-sm text-neutral"><strong>Operations:</strong> AML monitoring, sanctions screening, reporting</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">DeFi Identity Solutions</h2>
            
            <div className="space-y-6">
              <div className="bg-secondary text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Decentralized Identity (DID)</h3>
                <p className="mb-4 opacity-90">Self-sovereign identity: users control their credentials, share selectively</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 p-4 rounded">
                    <h4 className="font-bold mb-2">Worldcoin</h4>
                    <p className="text-sm opacity-90 mb-2">Biometric identity (iris scan) → proof of unique human</p>
                    <p className="text-xs opacity-80"><strong>Use:</strong> Airdrop eligibility, Sybil resistance</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded">
                    <h4 className="font-bold mb-2">ENS (Ethereum Name Service)</h4>
                    <p className="text-sm opacity-90 mb-2">Human-readable addresses (alice.eth)</p>
                    <p className="text-xs opacity-80"><strong>Use:</strong> Identity layer, payment endpoints</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg border-2 border-accent">
                <h3 className="text-2xl font-bold text-accent mb-4">On-Chain KYC/AML</h3>
                <p className="text-neutral-dark mb-4">Verified credentials without revealing personal data publicly</p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-bold text-primary mb-2">Civic Pass</h4>
                    <p className="text-sm text-neutral-dark">KYC verification → NFT credential → protocols accept credential</p>
                    <p className="text-xs text-neutral mt-2"><strong>Privacy:</strong> Protocols see "verified" status, not personal data</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-bold text-primary mb-2">Chainalysis/TRM Labs</h4>
                    <p className="text-sm text-neutral-dark">On-chain analytics for AML compliance</p>
                    <p className="text-xs text-neutral mt-2"><strong>Use:</strong> Flag sanctioned addresses, trace illicit funds</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">⚠️ Privacy vs Compliance Trade-off</h3>
                <p className="text-sm text-neutral-dark mb-3">DeFi's ethos (permissionless, pseudonymous) conflicts with regulatory requirements (KYC, sanctions screening)</p>
                
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-bold text-yellow-800 mb-2">Privacy-First Approach:</p>
                    <ul className="space-y-1 text-neutral-dark">
                      <li>• Zero-knowledge proofs (prove eligibility without revealing identity)</li>
                      <li>• Tornado Cash (sanctioned in 2022)</li>
                      <li>• Privacy coins (Monero, Zcash)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-yellow-800 mb-2">Compliance-First Approach:</p>
                    <ul className="space-y-1 text-neutral-dark">
                      <li>• Permissioned DeFi (allowlisted addresses)</li>
                      <li>• USDC blacklist (Circle can freeze addresses)</li>
                      <li>• RWA protocols require KYC</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Integration Pattern: Compliant DeFi Access</h2>
            <div className="bg-white p-8 rounded-lg border-2 border-secondary">
              <h3 className="text-xl font-bold text-secondary mb-4">Use Case: Regulated DeFi Lending</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-primary mb-2">Traditional Banking:</h4>
                  <p className="text-sm text-neutral-dark">Bank collects KYC docs → verifies with ID service → stores in centralized DB → periodic re-verification</p>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-primary mb-2">DeFi Integration:</h4>
                  <ol className="list-decimal list-inside text-sm text-neutral-dark space-y-1">
                    <li>User completes KYC with Civic (off-chain)</li>
                    <li>Civic issues soulbound NFT to user's wallet (on-chain credential)</li>
                    <li>Smart contract checks: "Does address hold valid Civic Pass?"</li>
                    <li>If yes, allow access to lending protocol</li>
                    <li>No personal data on-chain, only verification status</li>
                  </ol>
                </div>

                <div className="bg-success p-4 rounded">
                  <p className="font-bold text-primary mb-2">✓ Benefits:</p>
                  <ul className="text-sm text-neutral-dark space-y-1">
                    <li>• Portable credentials (verify once, use everywhere)</li>
                    <li>• Privacy-preserving (protocols don't see personal data)</li>
                    <li>• User controls data (can revoke access)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Key Takeaways for Integration</h2>
            <div className="bg-secondary text-white p-8 rounded-lg">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-warning text-xl mr-3">⚠</span>
                  <span><strong>Regulatory uncertainty remains</strong> — DeFi identity standards still emerging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success text-xl mr-3">✓</span>
                  <span><strong>Soulbound tokens enable credentials</strong> — Non-transferable NFTs can represent KYC status</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success text-xl mr-3">✓</span>
                  <span><strong>Zero-knowledge proofs promising</strong> — Prove eligibility without revealing data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warning text-xl mr-3">⚠</span>
                  <span><strong>Permissioned DeFi growing</strong> — RWA lending requires institutional compliance</span>
                </li>
              </ul>
            </div>
          </section>

          <div className="flex justify-between items-center pt-8 border-t border-neutral-light">
            <Link href="/domains/custody" className="text-secondary hover:text-accent transition-colors font-medium">
              ← Previous: Custody & Asset Management
            </Link>
            <Link href="/domains/treasury" className="text-secondary hover:text-accent transition-colors font-medium">
              Next: Treasury & Liquidity →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
