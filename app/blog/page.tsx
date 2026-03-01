import BlogLayout from '@/components/BlogLayout';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'The Journal - DIAN Framework | CeFi ↔ DeFi Integration Insights',
  description: 'Daily analysis, protocol updates, and integration patterns for connecting traditional finance with DeFi.',
};

export default function BlogPage() {
  const allPosts = getAllPosts();

  return <BlogLayout allPosts={allPosts} />;
}
