import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import NewsletterSignup from '@/components/NewsletterSignup';

export const metadata = {
  title: 'Blog - DIAN Framework | CeFi ↔ DeFi Integration Insights',
  description: 'Daily analysis, protocol updates, and integration patterns for connecting traditional finance with DeFi.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 7);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-white pt-12 pb-8 border-b border-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-primary mb-4">DIAN Insights</h1>
          <p className="text-xl text-secondary max-w-2xl">
            Daily analysis on CeFi ↔ DeFi integration, protocol updates, and emerging patterns
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="section-sm bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card border-2 border-accent p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block px-3 py-1 bg-accent text-white text-sm font-bold rounded-full mb-4">
                    Featured
                  </span>
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    <Link href={`/blog/${featuredPost.slug}`} className="hover:text-accent transition-colors">
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-secondary mb-4 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-neutral mb-6">
                    <span className="font-medium">{featuredPost.author}</span>
                    <span>•</span>
                    <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span>•</span>
                    <span>{featuredPost.readingTime}</span>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="text-accent hover:text-accent-light font-medium inline-flex items-center"
                  >
                    Read article 
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-accent to-accent-light rounded-lg h-64 flex items-center justify-center text-white">
                  {featuredPost.coverImage ? (
                    <img src={featuredPost.coverImage} alt={featuredPost.title} className="w-full h-full object-cover rounded-lg" />
                  ) : (
                    <div className="text-6xl">📰</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <NewsletterSignup variant="featured" />

      {/* Recent Articles */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary mb-12">Recent Articles</h2>
          
          {recentPosts.length === 0 ? (
            <div className="text-center py-12 card">
              <p className="text-xl text-secondary mb-4">No articles yet. Check back soon!</p>
              <p className="text-neutral">Daily CeFi ↔ DeFi integration insights coming soon.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <article key={post.slug} className="card hover:shadow-xl">
                  <div className="bg-gradient-to-br from-accent to-accent-light h-48 flex items-center justify-center text-white rounded-t-lg -mx-6 -mt-6 mb-6">
                    {post.coverImage ? (
                      <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover rounded-t-lg" />
                    ) : (
                      <div className="text-5xl">📄</div>
                    )}
                  </div>
                  <span className="inline-block px-2 py-1 bg-gray-100 text-neutral text-xs font-bold rounded mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-secondary text-sm mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-neutral">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    <span>{post.readingTime}</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary mb-12">Browse by Category</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Protocol Updates', icon: '🔄', count: '12' },
              { name: 'Integration Guides', icon: '🔧', count: '8' },
              { name: 'Case Studies', icon: '📊', count: '5' },
              { name: 'Regulatory News', icon: '⚖️', count: '6' },
            ].map((category) => (
              <div key={category.name} className="card hover:shadow-xl cursor-pointer text-center">
                <div className="text-5xl mb-3">{category.icon}</div>
                <h3 className="font-bold text-primary mb-1">{category.name}</h3>
                <p className="text-sm text-secondary">{category.count} articles</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
