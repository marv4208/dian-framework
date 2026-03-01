'use client';

import { useState } from 'react';
import Link from 'next/link';
import BlogSidebar from './BlogSidebar';
import type { BlogPost } from '@/lib/blog';

interface BlogLayoutProps {
  allPosts: BlogPost[];
}

export default function BlogLayout({ allPosts }: BlogLayoutProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'ALL'
    ? allPosts
    : allPosts.filter(post => post.category === selectedCategory);

  // Get featured post (most recent)
  const featuredPost = allPosts[0];

  // Get posts by category for sections
  const categorySections = [
    { name: 'Integration', icon: '🔗', posts: allPosts.filter(p => p.category === 'Integration') },
    { name: 'Protocol Updates', icon: '🔄', posts: allPosts.filter(p => p.category === 'Protocol Updates') },
    { name: 'Web3 Security', icon: '🔐', posts: allPosts.filter(p => p.category === 'Web3 Security') },
  ];

  return (
    <div className="flex min-h-screen bg-[#F5F3F0]">
      {/* Sidebar */}
      <BlogSidebar
        allPosts={allPosts}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Main Content */}
      <main className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-20 lg:pl-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
              The Journal
            </h1>
            <p className="text-secondary text-lg">
              Insights on CeFi ↔ DeFi integration
            </p>
          </div>
        </header>

        {selectedCategory === 'ALL' ? (
          <>
            {/* Featured Article Hero */}
            {featuredPost && (
              <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-full">
                      Featured
                    </span>
                    <span className="text-xs text-neutral">
                      {new Date(featuredPost.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <Link href={`/blog/${featuredPost.slug}`} className="group">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      {/* Image */}
                      <div className="aspect-[16/9] bg-gradient-to-br from-accent/20 to-accent/40 rounded-lg overflow-hidden">
                        {featuredPost.coverImage ? (
                          <img
                            src={featuredPost.coverImage}
                            alt={featuredPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-8xl text-white">📰</div>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div>
                        <span className="text-sm font-bold text-accent uppercase tracking-wider">
                          {featuredPost.category}
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-4 group-hover:text-accent transition-colors">
                          {featuredPost.title}
                        </h2>
                        <p className="text-secondary text-lg mb-6 leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-neutral">
                          <span>{featuredPost.author}</span>
                          <span>•</span>
                          <span>{featuredPost.readingTime}</span>
                        </div>
                        <div className="mt-6">
                          <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                            Read Article
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </section>
            )}

            {/* Category Sections */}
            {categorySections.map((section) => {
              if (section.posts.length === 0) return null;

              return (
                <section key={section.name} className="py-12 border-b border-gray-200 last:border-0">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="font-serif text-3xl font-bold text-primary flex items-center gap-3">
                        <span className="text-4xl">{section.icon}</span>
                        {section.name}
                      </h2>
                      <button
                        onClick={() => setSelectedCategory(section.name)}
                        className="text-sm text-accent hover:text-accent-light font-medium"
                      >
                        View all →
                      </button>
                    </div>

                    {/* Article Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.posts.slice(0, 3).map((post) => (
                        <ArticleCard key={post.slug} post={post} />
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}
          </>
        ) : (
          /* Filtered View */
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <button
                  onClick={() => setSelectedCategory('ALL')}
                  className="text-sm text-accent hover:text-accent-light font-medium mb-4"
                >
                  ← Back to all articles
                </button>
                <h2 className="font-serif text-3xl font-bold text-primary">
                  {selectedCategory}
                </h2>
                <p className="text-secondary mt-2">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <ArticleCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter Section */}
        <section id="newsletter" className="py-16 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Subscribe to DIAN Insights
            </h2>
            <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
              Weekly analysis, protocol updates, and integration patterns delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
              />
              <button className="px-8 py-3 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-12 bg-[#F5F3F0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-3">
              Need Integration Strategy?
            </h2>
            <p className="text-secondary mb-6">
              Work with an expert to design your CeFi ↔ DeFi roadmap
            </p>
            <Link
              href="/consulting"
              className="inline-block px-8 py-3 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-colors"
            >
              Explore Consulting
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

// Article Card Component
function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="aspect-[16/9] bg-gradient-to-br from-accent/20 to-accent/40 relative overflow-hidden">
        {post.coverImage ? (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl text-white">📰</div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-accent uppercase tracking-wider">
            {post.category}
          </span>
          <span className="text-xs text-neutral">
            {new Date(post.date).toLocaleDateString('en-US', {
              month: '2-digit',
              day: '2-digit',
              year: '2-digit'
            }).replace(/\//g, '.')}
          </span>
        </div>

        <h3 className="font-serif text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors">
          {post.title}
        </h3>

        <p className="text-secondary text-sm mb-4 line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between text-xs">
          <span className="text-neutral">{post.readingTime}</span>
          <span className="text-accent font-medium group-hover:text-accent-light">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  );
}
