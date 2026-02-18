'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-foreground-inverse sticky top-0 z-50 border-b border-neutral-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-foreground-inverse">
                <span className="text-accent">DIAN</span> Framework
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/blog" className="text-neutral-light hover:text-foreground-inverse transition-colors">
              Blog
            </Link>
            <Link href="/framework" className="text-neutral-light hover:text-foreground-inverse transition-colors">
              Framework
            </Link>
            <Link href="/explorer" className="text-neutral-light hover:text-foreground-inverse transition-colors">
              Explorer
            </Link>
            <Link href="/about" className="text-neutral-light hover:text-foreground-inverse transition-colors">
              About
            </Link>
            <Link
              href="/consulting"
              className="px-4 py-2 bg-accent hover:bg-accent-light text-foreground-inverse rounded-md transition-colors font-medium"
            >
              Consulting
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-light hover:text-foreground-inverse focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-dark">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/blog"
              className="block px-3 py-2 text-neutral-light hover:text-foreground-inverse hover:bg-primary-light rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/framework"
              className="block px-3 py-2 text-neutral-light hover:text-foreground-inverse hover:bg-primary-light rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Framework
            </Link>
            <Link
              href="/explorer"
              className="block px-3 py-2 text-neutral-light hover:text-foreground-inverse hover:bg-primary-light rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Explorer
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-neutral-light hover:text-foreground-inverse hover:bg-primary-light rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/consulting"
              className="block px-3 py-2 bg-accent hover:bg-accent-light text-foreground-inverse rounded-md transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Consulting
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
