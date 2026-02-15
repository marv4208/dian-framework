import Link from 'next/link';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 'cross-border-payment',
      title: 'Cross-Border Payment: US → EU',
      summary: '92% cost reduction, 200x faster settlement using stablecoins vs traditional wire transfer',
      savings: '92% cost savings',
      time: '30 minutes vs 3 days',
    },
    {
      id: 'institutional-treasury',
      title: 'Institutional Treasury Management',
      summary: '$100M treasury optimization via DeFi hybrid strategy — 21% higher yield with risk management',
      savings: '21% higher yield',
      time: 'Instant liquidity',
    },
    {
      id: 'dao-treasury',
      title: 'DAO Treasury Diversification',
      summary: 'Protocol DAO achieves sustainability through diversification, POL, and yield generation',
      savings: 'Infinite runway',
      time: 'Cash-flow positive',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-primary mb-4 text-center">Case Studies</h1>
        <p className="text-xl text-neutral-dark text-center mb-12 max-w-3xl mx-auto">
          Real-world examples demonstrating cost savings, efficiency gains, and implementation strategies 
          for CeFi → DeFi integration.
        </p>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <Link
              key={study.id}
              href={`/case-studies/${study.id}`}
              className="block bg-white p-8 rounded-lg border-2 border-neutral-light hover:border-secondary hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-sm text-neutral uppercase font-bold">Case Study {index + 1}</span>
                  <h2 className="text-2xl font-bold text-primary mt-1">{study.title}</h2>
                </div>
                <span className="text-secondary font-bold text-lg">→</span>
              </div>
              <p className="text-neutral-dark mb-6">{study.summary}</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-success px-4 py-2 rounded-md">
                  <span className="text-sm font-bold text-primary">{study.savings}</span>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-md">
                  <span className="text-sm font-medium text-neutral-dark">{study.time}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center bg-secondary text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Case?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Get custom analysis for your organization's DeFi integration strategy, including cost-benefit 
            analysis, risk assessment, and implementation roadmap.
          </p>
          <Link
            href="/consulting"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent hover:bg-accent-light text-white rounded-md transition-colors font-medium"
          >
            Schedule Discovery Call
          </Link>
        </div>
      </div>
    </main>
  );
}
