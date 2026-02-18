import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              <span className="text-accent">DIAN</span> Framework
            </h3>
            <p className="text-secondary text-sm leading-relaxed">
              Practical integration patterns for connecting traditional finance with DeFi protocols.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-4">Framework</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-secondary hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/framework" className="text-secondary hover:text-accent transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/mappings" className="text-secondary hover:text-accent transition-colors">
                  Integration Patterns
                </Link>
              </li>
              <li>
                <Link href="/explorer" className="text-secondary hover:text-accent transition-colors">
                  Protocol Explorer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-secondary hover:text-accent transition-colors">
                  About DIAN
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="text-secondary hover:text-accent transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-secondary hover:text-accent transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.linkedin.com/in/marleneveum/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/marv4208" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:marlene@kyberstrategy.com" className="text-secondary hover:text-accent transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-light text-center text-sm text-secondary">
          <p>© 2026 Marlena DeHart. DIAN Framework — Decentralized Integration Architecture Network</p>
          <p className="mt-2">Master's in Blockchain & Digital Currencies, University of Nicosia</p>
        </div>
      </div>
    </footer>
  );
}
