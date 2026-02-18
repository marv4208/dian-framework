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
      <form onSubmit={handleSubmit} className="max-w-md mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-accent hover:bg-accent-light text-white rounded-lg font-medium transition-colors disabled:opacity-50 whitespace-nowrap text-sm sm:text-base"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        {status === 'success' && (
          <p className="mt-3 text-sm text-success text-center">{message}</p>
        )}
        {status === 'error' && (
          <p className="mt-3 text-sm text-error text-center">{message}</p>
        )}
        <p className="text-xs sm:text-sm mt-4 text-secondary text-center">No spam. Unsubscribe anytime.</p>
      </form>
    );
  }

  if (variant === 'footer') {
    return (
      <div className="bg-white p-6 rounded-lg border border-gray-300">
        <h3 className="font-serif text-xl font-bold text-primary mb-3">Subscribe to Insights</h3>
        <p className="text-sm mb-4 text-secondary">
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
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-4 py-2 bg-accent hover:bg-accent-light text-white rounded-lg font-medium transition-colors disabled:opacity-50"
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
    <div className="my-8 bg-white p-8 rounded-lg border-2 border-accent/20">
      <h3 className="font-serif text-2xl font-bold text-primary mb-3 text-center">
        Get Integration Insights in Your Inbox
      </h3>
      <p className="text-secondary text-center mb-6">
        Join professionals staying ahead of CeFi ↔ DeFi integration trends.
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-accent hover:bg-accent-light text-white rounded-lg font-medium transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        {status === 'success' && (
          <p className="mt-2 text-sm text-success text-center">{message}</p>
        )}
      </form>
    </div>
  );
}
