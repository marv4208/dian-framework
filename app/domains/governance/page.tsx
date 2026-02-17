import Link from 'next/link';

export default function Governance() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link href="/mappings" className="text-secondary hover:text-accent transition-colors">
            ← Back to Integration Patterns
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-primary mb-4">Domain 8: Governance & Operations</h1>
        <p className="text-xl text-neutral-dark mb-12">
          DAOs, on-chain voting, governance tokens, and automated protocol operations
        </p>

        <div className="prose max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Traditional Banking Services Covered</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-neutral-light">
                <h3 className="text-xl font-bold text-secondary mb-2">Corporate Governance</h3>
                <p className="text-neutral-dark mb-2"><strong>Function:</strong> Manages organizational decision-making and oversight</p>
                <p className="text-sm text-neutral"><strong>Operations:</strong> Board meetings, voting, policy approval, compliance</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-neutral-light">
                <h3 className="text-xl font-bold text-secondary mb-2">Business Operations</h3>
                <p className="text-neutral-dark mb-2"><strong>Function:</strong> Executes day-to-day organizational functions</p>
                <p className="text-sm text-neutral"><strong>Operations:</strong> Workflow management, resource allocation, reporting</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">DAO Governance Mechanisms</h2>
            
            <div className="space-y-6">
              <div className="bg-secondary text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Token-Based Voting (1 Token = 1 Vote)</h3>
                <p className="mb-4 opacity-90">Most common model — governance token holders vote on proposals</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-white/10 p-4 rounded">
                    <h4 className="font-bold mb-2">On-Chain Voting</h4>
                    <ul className="text-sm opacity-90 space-y-1">
                      <li>• Votes recorded on blockchain</li>
                      <li>• Gas costs required</li>
                      <li>• Immediate execution (if passed)</li>
                      <li><strong>Example:</strong> Compound, Uniswap</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 p-4 rounded">
                    <h4 className="font-bold mb-2">Off-Chain Voting (Snapshot)</h4>
                    <ul className="text-sm opacity-90 space-y-1">
                      <li>• Gasless voting (signed messages)</li>
                      <li>• Token balance snapshot at block</li>
                      <li>• Manual execution (multisig)</li>
                      <li><strong>Example:</strong> Aave, Balancer</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-500/20 p-4 rounded border border-yellow-400">
                  <p className="text-sm font-bold mb-2">⚠️ Plutocracy Problem:</p>
                  <p className="text-sm opacity-90">Whales with large token holdings control decisions. Solutions: quadratic voting, delegation, multi-chamber governance.</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg border-2 border-accent">
                <h3 className="text-2xl font-bold text-accent mb-4">Governor Bravo (OpenZeppelin Standard)</h3>
                <p className="text-neutral-dark mb-4">Smart contract framework for on-chain governance</p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-bold text-primary mb-2">Proposal Lifecycle:</h4>
                    <ol className="list-decimal list-inside text-sm text-neutral-dark space-y-1">
                      <li>User submits proposal (requires X tokens to prevent spam)</li>
                      <li>Voting period (e.g., 3 days)</li>
                      <li>Quorum check (e.g., 4% of tokens must vote)</li>
                      <li>If passed: timelock delay (e.g., 2 days for review)</li>
                      <li>Automatic execution on-chain</li>
                    </ol>
                  </div>

                  <div className="bg-gray-50 p-4 rounded mt-4">
                    <p className="font-bold text-primary mb-2">Used By:</p>
                    <p className="text-sm text-neutral-dark">Compound, Uniswap, ENS, Gitcoin — most major DeFi protocols</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg border border-neutral-light">
                <h3 className="text-2xl font-bold text-primary mb-4">Delegation</h3>
                <p className="text-neutral-dark mb-4">Token holders delegate voting power to active participants</p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-accent text-2xl mr-3">→</span>
                    <div>
                      <p className="font-bold text-secondary">Why It Matters</p>
                      <p className="text-sm text-neutral-dark">Most token holders don't vote (apathy). Delegation concentrates voting power in engaged delegates.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent text-2xl mr-3">→</span>
                    <div>
                      <p className="font-bold text-secondary">Example: Uniswap</p>
                      <p className="text-sm text-neutral-dark">a16z holds ~4% of UNI supply, often the deciding vote on major proposals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Automated Operations</h2>
            <div className="bg-white p-8 rounded-lg border-2 border-secondary">
              <h3 className="text-xl font-bold text-secondary mb-4">Smart Contract Automation vs Traditional Ops</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="border-l-4 border-neutral pl-4">
                  <h4 className="font-bold text-primary mb-3">Traditional Banking</h4>
                  <ul className="text-sm text-neutral-dark space-y-2">
                    <li><strong>Policy changes:</strong> Board approves → legal drafts → manual implementation</li>
                    <li><strong>Fund disbursement:</strong> Approval workflow → bank transfer → reconciliation</li>
                    <li><strong>Fee adjustments:</strong> IT ticket → dev work → testing → deploy</li>
                  </ul>
                  <div className="mt-4 bg-gray-100 p-3 rounded">
                    <p className="text-xs font-bold">Timeline: Weeks to months</p>
                  </div>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-bold text-primary mb-3">DAO (Automated)</h4>
                  <ul className="text-sm text-neutral-dark space-y-2">
                    <li><strong>Policy changes:</strong> Proposal → vote → automatic execution on-chain</li>
                    <li><strong>Fund disbursement:</strong> Proposal → vote → smart contract sends funds</li>
                    <li><strong>Fee adjustments:</strong> Proposal → vote → parameter updated automatically</li>
                  </ul>
                  <div className="mt-4 bg-success p-3 rounded">
                    <p className="text-xs font-bold text-primary">Timeline: 3-7 days</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 p-4 rounded">
                <p className="font-bold text-accent mb-2">💡 Key Advantage:</p>
                <p className="text-sm text-neutral-dark">No execution risk — if vote passes, code MUST execute. No bureaucracy, manual steps, or "implementation delays."</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Integration Pattern: Hybrid Governance</h2>
            <div className="bg-white p-8 rounded-lg border-2 border-accent">
              <h3 className="text-xl font-bold text-accent mb-4">Use Case: DeFi Protocol with Legal Wrapper</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-primary mb-2">Challenge:</h4>
                  <p className="text-sm text-neutral-dark">Pure DAO = no legal entity = cannot sign contracts, hire employees, hold IP</p>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-primary mb-2">Solution: Hybrid Model</h4>
                  <ol className="list-decimal list-inside text-sm text-neutral-dark space-y-1">
                    <li>DAO controls treasury + protocol parameters (on-chain)</li>
                    <li>Foundation (legal entity) handles off-chain operations</li>
                    <li>Foundation governed by DAO (token holders elect directors)</li>
                    <li>Foundation cannot change protocol code (only DAO can)</li>
                  </ol>
                </div>

                <div className="bg-success p-4 rounded">
                  <p className="font-bold text-primary mb-2">✓ Examples:</p>
                  <ul className="text-sm text-neutral-dark space-y-1">
                    <li>• Uniswap Foundation + UNI token governance</li>
                    <li>• Aave Companies + AAVE token governance</li>
                    <li>• ENS DAO + ENS Foundation</li>
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
                  <span className="text-success text-xl mr-3">✓</span>
                  <span><strong>DAOs enable global coordination</strong> — Permissionless, transparent, automated execution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warning text-xl mr-3">⚠</span>
                  <span><strong>Low voter turnout is real</strong> — Delegation critical to maintain governance health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success text-xl mr-3">✓</span>
                  <span><strong>Automation reduces overhead</strong> — No manual execution, instant implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warning text-xl mr-3">⚠</span>
                  <span><strong>Legal clarity still evolving</strong> — Hybrid models (DAO + Foundation) common</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success text-xl mr-3">✓</span>
                  <span><strong>Snapshot reduces costs</strong> — Gasless voting enables broader participation</span>
                </li>
              </ul>
            </div>
          </section>

          <div className="flex justify-between items-center pt-8 border-t border-neutral-light">
            <Link href="/domains/derivatives" className="text-secondary hover:text-accent transition-colors font-medium">
              ← Previous: Derivatives
            </Link>
            <Link href="/mappings" className="text-secondary hover:text-accent transition-colors font-medium">
              Back to All Domains →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
