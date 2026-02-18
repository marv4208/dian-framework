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
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">DIAN Insights</h1>
          <p className="text-xl text-neutral-light max-w-2xl">
            Daily analysis on CeFi ↔ DeFi integration, protocol updates, and emerging patterns
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <p className="text-neutral-dark mb-4">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-neutral">
                  <span>{featuredPost.author}</span>
                  <span>•</span>
                  <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span>•</span>
                  <span>{featuredPost.readingTime}</span>
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-block mt-6 text-accent hover:text-secondary font-medium"
                >
                  Read article →
                </Link>
              </div>
              <div className="bg-gradient-to-br from-secondary to-accent rounded-lg h-64 md:h-96 flex items-center justify-center text-white">
                {featuredPost.coverImage ? (
                  <img src={featuredPost.coverImage} alt={featuredPost.title} className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">📰</div>
                    <p className="text-lg font-medium">Featured Article</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <NewsletterSignup variant="featured" />

      {/* Recent Articles */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8">Recent Articles</h2>
          
          {recentPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-neutral-dark mb-4">No articles yet. Check back soon!</p>
              <p className="text-neutral">Daily CeFi ↔ DeFi integration insights coming soon.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <article key={post.slug} className="bg-white rounded-lg border border-neutral-light hover:border-secondary transition-colors overflow-hidden">
                  <div className="bg-gradient-to-br from-secondary to-accent h-48 flex items-center justify-center text-white">
                    {post.coverImage ? (
                      <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-5xl">📄</div>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-2 py-1 bg-gray-100 text-neutral text-xs font-bold rounded mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-neutral-dark text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-neutral">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8">Browse by Category</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Protocol Updates', icon: '🔄', count: '12' },
              { name: 'Integration Guides', icon: '🔧', count: '8' },
              { name: 'Case Studies', icon: '📊', count: '5' },
              { name: 'Regulatory News', icon: '⚖️', count: '6' },
            ].map((category) => (
              <div key={category.name} className="bg-background p-6 rounded-lg border border-neutral-light hover:border-accent transition-colors cursor-pointer">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-bold text-primary mb-1">{category.name}</h3>
                <p className="text-sm text-neutral">{category.count} articles</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
