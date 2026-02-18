'use client';

import { useState } from 'react';

export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const categories = ['ALL', 'Protocol Updates', 'Integration', 'Case Studies', 'Regulatory'];

  return (
    <section className="bg-white border-b border-gray-300 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto scrollbar-hide flex-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-xs sm:text-sm font-medium whitespace-nowrap transition-colors px-1 ${
                  selectedCategory === category
                    ? 'text-primary border-b-2 border-accent pb-1'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <button className="hidden lg:block px-3 sm:px-4 py-2 border border-gray-300 rounded-md text-xs sm:text-sm font-medium text-secondary hover:border-accent transition-colors ml-4 whitespace-nowrap">
            SEARCH
          </button>
        </div>
      </div>
    </section>
  );
}
