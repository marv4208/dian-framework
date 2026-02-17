export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">About DIAN Framework</h1>
        
        <div className="prose max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">What is DIAN?</h2>
            <p className="text-lg text-neutral-dark mb-4">
              <strong>DIAN (Decentralized Integration Architecture Network)</strong> is a comprehensive 
              framework for connecting traditional finance systems with DeFi protocols through proven 
              integration patterns.
            </p>
            <p className="text-lg text-neutral-dark">
              Built on proven service-oriented banking architecture principles, DIAN goes beyond mapping to provide 
              practical, implementable integration strategies. We focus on HOW systems connect, not just 
              WHAT they do differently.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Integration Over Translation</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-neutral-dark mb-4">
                Most CeFi ↔ DeFi resources stop at comparison: "Banks use APIs, DeFi uses oracles." 
                DIAN shows you the complete integration pattern:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-dark pl-4">
                <li><strong>Data Flow:</strong> How information moves between systems</li>
                <li><strong>Authentication:</strong> How permissions and access control work</li>
                <li><strong>Error Handling:</strong> What happens when things go wrong</li>
                <li><strong>State Management:</strong> How systems stay synchronized</li>
                <li><strong>Security:</strong> Where vulnerabilities emerge and how to mitigate them</li>
              </ul>
            </div>
            
            <h3 className="text-2xl font-bold text-secondary mb-3">Example: Data Integration Pattern</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="border-l-4 border-neutral pl-4">
                <h4 className="font-bold text-primary mb-2">CeFi Pattern: REST API</h4>
                <p className="text-sm text-neutral-dark mb-2">
                  Bank exposes GET /accounts/:id/balance endpoint
                </p>
                <ul className="text-sm text-neutral-dark space-y-1">
                  <li>• OAuth 2.0 authentication</li>
                  <li>• JSON response format</li>
                  <li>• Rate limiting (100 req/min)</li>
                  <li>• Real-time data</li>
                </ul>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-bold text-primary mb-2">DeFi Pattern: The Graph + Oracle</h4>
                <p className="text-sm text-neutral-dark mb-2">
                  Subgraph indexes token balance events on-chain
                </p>
                <ul className="text-sm text-neutral-dark space-y-1">
                  <li>• GraphQL query with wallet address</li>
                  <li>• JSON response format</li>
                  <li>• Rate limiting (varies by host)</li>
                  <li>• Near real-time (block finality delay)</li>
                </ul>
              </div>
            </div>
            <p className="text-neutral-dark">
              <strong>Integration Insight:</strong> Both patterns use HTTP + JSON, making them interoperable 
              with minimal adapter code. The key difference is data source (centralized DB vs blockchain).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">About the Author</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-secondary mb-4">Marlena DeHart</h3>
              <p className="text-lg text-neutral-dark mb-4">
                Master's in Blockchain & Digital Currencies  
                <br />
                University of Nicosia
              </p>
              <p className="text-neutral-dark mb-4">
                Marlena specializes in bridging traditional finance and decentralized systems, bringing 
                deep technical expertise in blockchain architecture, smart contracts, and financial 
                system integration.
              </p>
              <p className="text-neutral-dark">
                Her unique positioning combines institutional finance knowledge with cutting-edge Web3 
                development experience, making her an ideal consultant for organizations navigating the 
                CeFi to DeFi transition.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why DIAN?</h2>
            <p className="text-neutral-dark mb-4">
              Traditional banking systems are built on service-oriented architectures with well-defined 
              service domains used by financial institutions worldwide. DIAN brings this proven 
              architectural thinking to the decentralized world.
            </p>
            <p className="text-neutral-dark">
              By creating a common language and structured integration framework between traditional finance 
              and blockchain-based systems, DIAN enables better evaluation, integration planning, and 
              compliance strategies for organizations navigating the CeFi to DeFi transition.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Framework Structure</h2>
            <p className="text-neutral-dark mb-4">
              DIAN is organized into 8 integration domain clusters:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-neutral-dark pl-4">
              <li><strong>Payments & Settlement:</strong> Stablecoin rails, cross-border transfers, on/off ramps</li>
              <li><strong>Lending & Credit:</strong> Over-collateralized lending, flash loans, RWA credit integrations</li>
              <li><strong>Trading & Market Making:</strong> AMM integration, DEX aggregation, MEV protection</li>
              <li><strong>Custody & Asset Management:</strong> Multisig wallets, yield aggregation, institutional custody</li>
              <li><strong>Identity & Compliance:</strong> KYC/AML integration, on-chain attestations, privacy tools</li>
              <li><strong>Treasury & Liquidity:</strong> DAO treasury management, liquidity pool integration, reserves</li>
              <li><strong>Derivatives & Structured Products:</strong> Perpetual swaps, on-chain options, synthetic assets</li>
              <li><strong>Governance & Operations:</strong> DAO integration, on-chain voting, treasury automation</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">20+ Integration Patterns</h2>
            <p className="text-neutral-dark mb-4">
              Each domain includes detailed integration patterns with:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-4 rounded border border-neutral-light">
                <p className="font-semibold text-secondary mb-2">📋 Architecture Diagrams</p>
                <p className="text-sm text-neutral-dark">Visual data flow between CeFi and DeFi systems</p>
              </div>
              <div className="bg-white p-4 rounded border border-neutral-light">
                <p className="font-semibold text-secondary mb-2">💻 Code Examples</p>
                <p className="text-sm text-neutral-dark">Smart contract integrations and API adapters</p>
              </div>
              <div className="bg-white p-4 rounded border border-neutral-light">
                <p className="font-semibold text-secondary mb-2">⚠️ Risk Analysis</p>
                <p className="text-sm text-neutral-dark">Security considerations and mitigation strategies</p>
              </div>
              <div className="bg-white p-4 rounded border border-neutral-light">
                <p className="font-semibold text-secondary mb-2">📊 Cost Comparisons</p>
                <p className="text-sm text-neutral-dark">TCO analysis for different integration approaches</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Get Involved</h2>
            <p className="text-neutral-dark mb-4">
              DIAN is a living framework, continuously updated as DeFi protocols evolve and new 
              integration patterns emerge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="/consulting"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent-light text-white rounded-md transition-colors font-medium"
              >
                Work With Me
              </a>
              <a
                href="mailto:marlene@kyberstrategy.com"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary hover:bg-gray-50 rounded-md transition-colors font-medium"
              >
                Get In Touch
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
