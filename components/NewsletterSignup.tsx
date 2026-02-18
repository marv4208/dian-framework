'use client';

import { useState } from 'react';

interface NewsletterSignupProps {
  variant?: 'inline' | 'featured' | 'footer';
}

export default function NewsletterSignup({ variant = 'inline' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // TODO: Integrate with email service (ConvertKit, Beehiiv, etc.)
    // For now, just simulate success
    setTimeout(() => {
      setStatus('success');
      setMessage('Thanks for subscribing! Check your inbox.');
      setEmail('');
    }, 1000);
  };

  if (variant === 'featured') {
    return (
      <section className="bg-accent text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated on CeFi ↔ DeFi Integration</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get daily insights, protocol updates, and integration patterns delivered to your inbox. 
            Join 1,000+ professionals building the future of finance.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 bg-white text-accent font-bold rounded-md hover:bg-gray-100 transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {status === 'success' && (
              <p className="mt-3 text-sm text-success">{message}</p>
            )}
            {status === 'error' && (
              <p className="mt-3 text-sm text-red-300">{message}</p>
            )}
          </form>
          <p className="text-sm mt-4 opacity-75">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    );
  }

  if (variant === 'footer') {
    return (
      <div className="bg-secondary text-white p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Subscribe to DIAN Insights</h3>
        <p className="text-sm mb-4 opacity-90">
          Daily CeFi ↔ DeFi integration news and analysis.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-4 py-2 bg-accent hover:bg-accent-light text-white font-medium rounded-md transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? '...' : 'Subscribe'}
            </button>
          </div>
          {status === 'success' && (
            <p className="mt-2 text-sm text-success">{message}</p>
          )}
        </form>
      </div>
    );
  }

  // Inline variant (in articles)
  return (
    <div className="my-8 bg-gray-50 p-6 rounded-lg border-2 border-accent">
      <h3 className="text-xl font-bold text-primary mb-2">Get Integration Insights in Your Inbox</h3>
      <p className="text-sm text-neutral-dark mb-4">
        Join professionals staying ahead of CeFi ↔ DeFi integration trends.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-2 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-4 py-2 bg-accent hover:bg-accent-light text-white font-medium rounded-md transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        {status === 'success' && (
          <p className="mt-2 text-sm text-success">{message}</p>
        )}
      </form>
    </div>
  );
}
