import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import NewsletterSignup from '@/components/NewsletterSignup';
import CategoryFilter from '@/components/CategoryFilter';

export const metadata = {
  title: 'The Journal - DIAN Framework | CeFi ↔ DeFi Integration Insights',
  description: 'Daily analysis, protocol updates, and integration patterns for connecting traditional finance with DeFi.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[#F5F3F0]">
      {/* Hero Section */}
      <section className="bg-[#F5F3F0] pt-12 sm:pt-16 pb-8 sm:pb-12 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
            The Journal
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-secondary max-w-3xl mx-auto leading-relaxed px-4">
            Your gateway to insights, strategies, and inspiration to elevate CeFi ↔ DeFi integration—with a fun mix of technical depth and everyday innovation.
          </p>
        </div>
      </section>

      {/* Category Filter Bar */}
      <CategoryFilter />

      {/* Article Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12 sm:py-16 bg-white rounded-lg">
              <p className="text-lg sm:text-xl text-secondary mb-4">No articles yet. Check back soon!</p>
              <p className="text-sm sm:text-base text-neutral">Daily CeFi ↔ DeFi integration insights coming soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Article Image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-accent/40 relative overflow-hidden">
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
                  
                  {/* Article Content */}
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
                    
                    <h3 className="font-serif text-2xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-secondary text-sm mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-neutral">{post.readingTime}</span>
                      <span className="text-sm font-medium text-accent group-hover:text-accent-light">
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
              
              {/* Coming Soon Placeholders */}
              {posts.length < 6 && [1, 2, 3].map((i) => (
                <div key={`placeholder-${i}`} className="bg-white rounded-lg overflow-hidden opacity-60">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-5xl">⏳</div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-neutral uppercase tracking-wider">
                      Coming Soon
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-primary mt-3 mb-3">
                      {
                        i === 1 ? 'Uniswap V4 Integration Deep Dive' :
                        i === 2 ? 'zkSync Era: Layer 2 for Institutions' :
                        'MakerDAO Endgame Strategy Analysis'
                      }
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed">
                      In-depth analysis and integration patterns. Publishing soon.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Subscribe to DIAN Insights
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-secondary mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Get daily CeFi ↔ DeFi integration analysis, protocol updates, and exclusive insights delivered to your inbox.
          </p>
          <NewsletterSignup variant="featured" />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 sm:py-16 bg-[#F5F3F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Need Custom Integration Strategy?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-secondary mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Work with an expert to design your CeFi ↔ DeFi integration roadmap.
          </p>
          <Link
            href="/consulting"
            className="inline-block px-6 sm:px-8 py-3 bg-accent hover:bg-accent-light text-white rounded-lg font-medium transition-colors text-sm sm:text-base"
          >
            Explore Consulting Services
          </Link>
        </div>
      </section>
    </main>
  );
}
