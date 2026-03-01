'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { BlogPost } from '@/lib/blog';

interface BlogSidebarProps {
  allPosts: BlogPost[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function BlogSidebar({ allPosts, selectedCategory, onCategoryChange }: BlogSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Get category counts
  const categoryCounts = allPosts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Get all unique tags
  const allTags = Array.from(
    new Set(
      allPosts.flatMap(post => {
        // Extract keywords from excerpt or title as tags
        const text = `${post.title} ${post.excerpt}`.toLowerCase();
        const keywords = ['aave', 'compound', 'chainlink', 'treasury', 'usdc', 'dai', 'defi', 'cefi', 'layer 2', 'arbitrum', 'optimism'];
        return keywords.filter(keyword => text.includes(keyword));
      })
    )
  ).slice(0, 12); // Limit to 12 most common tags

  const categories = [
    { name: 'All Articles', value: 'ALL', icon: '📚' },
    { name: 'Integration', value: 'Integration', icon: '🔗' },
    { name: 'Protocol Updates', value: 'Protocol Updates', icon: '🔄' },
    { name: 'Web3 Security', value: 'Web3 Security', icon: '🔐' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-3 rounded-lg shadow-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen w-72 bg-white border-r border-gray-200
          overflow-y-auto z-40 transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="p-6 space-y-8">
          {/* Logo/Brand */}
          <div className="border-b border-gray-200 pb-6">
            <Link href="/" className="block">
              <h2 className="font-serif text-2xl font-bold text-primary mb-1">
                DIAN Framework
              </h2>
              <p className="text-xs text-secondary uppercase tracking-wider">
                The Journal
              </p>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <h3 className="text-xs font-bold text-neutral uppercase tracking-wider mb-3">
              Navigation
            </h3>
            <Link
              href="/blog"
              className="block px-3 py-2 rounded-lg text-sm font-medium bg-accent/10 text-accent"
            >
              📰 The Journal
            </Link>
            <Link
              href="/framework"
              className="block px-3 py-2 rounded-lg text-sm font-medium text-secondary hover:bg-gray-50 transition-colors"
            >
              🔧 Framework
            </Link>
            <Link
              href="/explorer"
              className="block px-3 py-2 rounded-lg text-sm font-medium text-secondary hover:bg-gray-50 transition-colors"
            >
              🔍 Explorer
            </Link>
            <Link
              href="/consulting"
              className="block px-3 py-2 rounded-lg text-sm font-medium text-secondary hover:bg-gray-50 transition-colors"
            >
              💼 Consulting
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-lg text-sm font-medium text-secondary hover:bg-gray-50 transition-colors"
            >
              👤 About
            </Link>
          </nav>

          {/* Categories */}
          <div>
            <h3 className="text-xs font-bold text-neutral uppercase tracking-wider mb-3">
              Categories
            </h3>
            <div className="space-y-1">
              {categories.map((category) => {
                const count = category.value === 'ALL' 
                  ? allPosts.length 
                  : categoryCounts[category.value] || 0;
                const isActive = selectedCategory === category.value;

                return (
                  <button
                    key={category.value}
                    onClick={() => {
                      onCategoryChange(category.value);
                      setIsOpen(false);
                    }}
                    className={`
                      w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium
                      transition-colors
                      ${isActive 
                        ? 'bg-accent text-white' 
                        : 'text-secondary hover:bg-gray-50'
                      }
                    `}
                  >
                    <span className="flex items-center gap-2">
                      <span>{category.icon}</span>
                      <span>{category.name}</span>
                    </span>
                    <span className={`text-xs ${isActive ? 'text-white/80' : 'text-neutral'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tags */}
          {allTags.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-neutral uppercase tracking-wider mb-3">
                Popular Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-gray-100 text-secondary rounded-md hover:bg-accent/10 hover:text-accent transition-colors cursor-pointer capitalize"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Newsletter */}
          <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
            <h3 className="text-sm font-bold text-primary mb-2">
              📬 Newsletter
            </h3>
            <p className="text-xs text-secondary mb-3 leading-relaxed">
              Weekly insights on CeFi ↔ DeFi integration
            </p>
            <Link
              href="/blog#newsletter"
              className="block w-full text-center px-4 py-2 bg-accent hover:bg-accent-light text-white text-sm font-medium rounded-lg transition-colors"
            >
              Subscribe
            </Link>
          </div>

          {/* Stats */}
          <div className="pt-4 border-t border-gray-200">
            <div className="text-xs text-neutral space-y-2">
              <div className="flex justify-between">
                <span>Total Articles</span>
                <span className="font-medium text-primary">{allPosts.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Categories</span>
                <span className="font-medium text-primary">{Object.keys(categoryCounts).length}</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
