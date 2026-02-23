import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import NewsletterSignup from '@/components/NewsletterSignup';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${post.title} | DIAN Framework`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getAllPosts()
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#F5F3F0]">
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-6 sm:mb-8">
          <Link href="/blog" className="text-accent hover:text-accent-light transition-colors font-medium inline-flex items-center text-sm sm:text-base">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Journal
          </Link>
        </div>

        <header className="mb-8 sm:mb-12 text-center">
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full mb-4 sm:mb-6 uppercase tracking-wider">
            {post.category}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-tight px-2">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-secondary">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center text-white font-bold">
                {post.author.split(' ').map((n) => n[0]).join('')}
              </div>
              <div className="text-left">
                <p className="font-medium text-primary">{post.author}</p>
                <p className="text-sm text-secondary">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                  {' • '}
                  {post.readingTime}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="mb-8 sm:mb-12 rounded-lg overflow-hidden shadow-xl -mx-4 sm:mx-0">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="bg-white rounded-lg p-6 sm:p-8 md:p-12 shadow-sm mb-8 sm:mb-12">
          <div className="prose prose-lg max-w-none">
            <div className="text-secondary leading-relaxed">
              <MDXRemote source={post.content} />
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-12">
          <div className="bg-white rounded-lg p-8 border-2 border-accent/20">
            <h3 className="font-serif text-2xl font-bold text-primary mb-3 text-center">
              Get Integration Insights in Your Inbox
            </h3>
            <p className="text-secondary text-center mb-6">
              Join professionals staying ahead of CeFi ↔ DeFi integration trends.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-accent hover:bg-accent-light text-white rounded-lg font-medium transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Article Footer - Social Share */}
        <footer className="bg-white rounded-lg p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <p className="text-sm font-bold text-primary mb-3">Share this article</p>
              <div className="flex gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://dianframework.com/blog/${slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-neutral-dark rounded-lg transition-colors text-sm font-medium"
                >
                  Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://dianframework.com/blog/${slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-neutral-dark rounded-lg transition-colors text-sm font-medium"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-primary mb-2">Author</p>
              <p className="font-medium text-primary">{post.author}</p>
              <Link href="/about" className="text-sm text-accent hover:text-accent-light">
                View profile →
              </Link>
            </div>
          </div>
        </footer>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-bold text-primary mb-12 text-center">
              Continue Reading
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-[#F5F3F0] rounded-lg overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center">
                    <div className="text-5xl">📄</div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">
                      {relatedPost.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-primary mt-2 mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-secondary line-clamp-2 mb-3">{relatedPost.excerpt}</p>
                    <p className="text-xs text-neutral">{relatedPost.readingTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
