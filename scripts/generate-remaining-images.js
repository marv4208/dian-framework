#!/usr/bin/env node

/**
 * Generate only the remaining images (skip ones that already exist)
 */

const fs = require('fs');
const path = require('path');
const { generateImage } = require('./generate-image-gemini.js');

async function generateRemaining() {
  console.log('🎨 Generating Remaining Images (Slow Mode - 90s between each)\n');
  console.log('⏰ Estimated time: ~12 minutes for 8 images\n');
  
  const remainingArticles = [
    { title: 'Circle USDC Bank Integration', slug: 'circle-usdc-bank-integration' },
    { title: 'Uniswap V4 Integration Deep Dive', slug: 'uniswap-v4-integration-deep-dive' },
    { title: 'zkSync Era Layer 2 for Institutions', slug: 'zksync-era-layer-2-institutions' },
    { title: 'MakerDAO Endgame Strategy Analysis', slug: 'makerdao-endgame-strategy-analysis' },
    { title: 'Cross-Border Payments via DeFi', slug: 'cross-border-payments-defi' },
    { title: 'Institutional DeFi Custody Solutions', slug: 'institutional-defi-custody-solutions' },
    { title: 'Real-World Asset Tokenization', slug: 'real-world-asset-tokenization' },
    { title: 'Smart Contract Auditing Best Practices', slug: 'smart-contract-auditing-best-practices' },
  ];
  
  const results = [];
  let successCount = 0;
  
  for (const article of remainingArticles) {
    // Check if image already exists
    const filepath = path.join(__dirname, '../public/images/blog', `${article.slug}.jpg`);
    if (fs.existsSync(filepath)) {
      console.log(`⏭️  Skipping ${article.title} (already exists)\n`);
      results.push({ ...article, success: true, filename: `${article.slug}.jpg`, skipped: true });
      successCount++;
      continue;
    }
    
    const result = await generateImage(article.title, article.slug);
    results.push({ ...article, ...result });
    
    if (result.success) successCount++;
    
    // Rate limiting: wait 90 seconds between requests (unless it's the last one)
    if (remainingArticles.indexOf(article) < remainingArticles.length - 1) {
      console.log('\n⏱️  Waiting 90 seconds (Google Cloud rate limit)...\n');
      await new Promise(resolve => setTimeout(resolve, 90000));
    }
  }
  
  console.log('\n\n📊 Generation Summary:\n');
  console.table(results.map(r => ({
    title: r.title,
    status: r.skipped ? '⏭️' : (r.success ? '✅' : '❌'),
    filename: r.filename || 'N/A',
  })));
  
  console.log(`\n✅ Generated ${successCount}/8 remaining images`);
  console.log('\n💡 Next step: npm run update-mdx-images');
}

generateRemaining().catch(console.error);
