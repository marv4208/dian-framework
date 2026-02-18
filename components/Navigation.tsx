'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-neutral-light sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">
              <span className="text-accent">DIAN</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/blog" className="text-secondary hover:text-primary transition-colors font-medium">
              Blog
            </Link>
            <Link href="/framework" className="text-secondary hover:text-primary transition-colors font-medium">
              Framework
            </Link>
            <Link href="/explorer" className="text-secondary hover:text-primary transition-colors font-medium">
              Explorer
            </Link>
            <Link href="/about" className="text-secondary hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link
              href="/consulting"
              className="px-5 py-2 bg-accent hover:bg-accent-light text-white rounded-lg transition-colors font-medium shadow-sm"
            >
              Consulting
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary focus:outline-none p-2"
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
        <div className="md:hidden border-t border-neutral-light bg-white">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/blog"
              className="block px-3 py-2 text-secondary hover:text-primary hover:bg-gray-50 rounded-md transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/framework"
              className="block px-3 py-2 text-secondary hover:text-primary hover:bg-gray-50 rounded-md transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Framework
            </Link>
            <Link
              href="/explorer"
              className="block px-3 py-2 text-secondary hover:text-primary hover:bg-gray-50 rounded-md transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Explorer
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-secondary hover:text-primary hover:bg-gray-50 rounded-md transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/consulting"
              className="block px-3 py-2 bg-accent hover:bg-accent-light text-white rounded-md transition-colors font-medium text-center mt-2"
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
