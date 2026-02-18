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

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${post.title} | DIAN Framework Blog`,
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

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link href="/blog" className="text-secondary hover:text-accent transition-colors font-medium">
            ← Back to Blog
          </Link>
        </div>

        <header className="mb-12">
          <span className="inline-block px-3 py-1 bg-accent text-white text-sm font-bold rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">{post.title}</h1>
          <div className="flex items-center gap-4 text-neutral-dark">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white font-bold">
                {post.author.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <p className="font-medium text-primary">{post.author}</p>
                <p className="text-sm text-neutral">
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
          <div className="mb-12 rounded-lg overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-neutral-dark leading-relaxed">
            <MDXRemote source={post.content} />
          </div>
        </div>

        {/* Newsletter Signup (inline) */}
        <NewsletterSignup variant="inline" />

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-neutral-light">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <p className="text-sm text-neutral mb-2">Share this article</p>
              <div className="flex gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://dianframework.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-neutral-dark rounded-md transition-colors text-sm font-medium"
                >
                  Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://dianframework.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-neutral-dark rounded-md transition-colors text-sm font-medium"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-neutral mb-2">Author</p>
              <p className="font-bold text-primary">{post.author}</p>
              <Link href="/about" className="text-sm text-accent hover:text-secondary">
                View profile →
              </Link>
            </div>
          </div>
        </footer>
      </article>

      {/* Related Articles */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8">Continue Reading</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {getAllPosts()
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-background p-6 rounded-lg border border-neutral-light hover:border-accent transition-colors"
                >
                  <span className="text-xs font-bold text-neutral uppercase">{relatedPost.category}</span>
                  <h3 className="text-lg font-bold text-primary mt-2 mb-2 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-neutral-dark line-clamp-2">{relatedPost.excerpt}</p>
                  <p className="text-xs text-neutral mt-3">{relatedPost.readingTime}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
