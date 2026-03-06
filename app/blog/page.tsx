import BlogLayout from '@/components/BlogLayout';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'The Journal - DIAN Framework | CeFi ↔ DeFi Integration Insights',
  description: 'Daily analysis, protocol updates, and integration patterns for connecting traditional finance with DeFi.',
};

// Revalidate every 1 hour - ensures new articles appear automatically
export const revalidate = 3600;

export default function BlogPage() {
  const allPosts = getAllPosts();

  return <BlogLayout allPosts={allPosts} />;
}
