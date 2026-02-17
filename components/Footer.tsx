import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-foreground-inverse border-t border-neutral-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">
              <span className="text-accent">DIAN</span> Framework
            </h3>
            <p className="text-neutral-light text-sm">
              Decentralized Integration Architecture Network — practical patterns for connecting 
              traditional finance with DeFi protocols.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Framework</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/framework" className="text-neutral-light hover:text-foreground-inverse transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/mappings" className="text-neutral-light hover:text-foreground-inverse transition-colors">
                  Integration Patterns
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-neutral-light hover:text-foreground-inverse transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-neutral-light hover:text-foreground-inverse transition-colors">
                  About DIAN
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="text-neutral-light hover:text-foreground-inverse transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/explorer" className="text-neutral-light hover:text-foreground-inverse transition-colors">
                  Protocol Explorer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.linkedin.com/in/marleneveum/" target="_blank" rel="noopener noreferrer" className="text-neutral-light hover:text-foreground-inverse transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/marv4208" target="_blank" rel="noopener noreferrer" className="text-neutral-light hover:text-foreground-inverse transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:marlene@kyberstrategy.com" className="text-neutral-light hover:text-foreground-inverse transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-dark text-center text-sm text-neutral-light">
          <p>© 2026 Marlena DeHart. DIAN Framework — Decentralized Integration Architecture Network</p>
          <p className="mt-2">Master's in Blockchain & Digital Currencies, University of Nicosia</p>
        </div>
      </div>
    </footer>
  );
}
