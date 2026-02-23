#!/usr/bin/env node

/**
 * Auto-publish daily DeFi article
 * Run via cron: 9 AM CST daily
 * Generates article content + Midjourney prompt
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

// Article topics queue (rotate through these)
const ARTICLE_TOPICS = [
  {
    title: "Institutional Adoption of DeFi Lending: Q1 2026 Analysis",
    category: "Integration",
    slug: "institutional-defi-lending-q1-2026",
    keywords: "Aave, Compound, institutional lending, treasury management"
  },
  {
    title: "Layer 2 Cost Analysis: Arbitrum vs Optimism vs zkSync",
    category: "Protocol Updates",
    slug: "layer-2-cost-comparison-2026",
    keywords: "Arbitrum, Optimism, zkSync, gas costs, scaling"
  },
  {
    title: "Regulatory Landscape: MiCA Implementation and US Stablecoin Bills",
    category: "Integration",
    slug: "defi-regulation-update-2026",
    keywords: "MiCA, regulation, compliance, stablecoins"
  },
  {
    title: "Chainlink CCIP: Cross-Chain Treasury Management",
    category: "Protocol Updates",
    slug: "chainlink-ccip-treasury-integration",
    keywords: "Chainlink, CCIP, cross-chain, interoperability"
  },
  {
    title: "Stablecoin Yield Strategies for Corporate Treasuries",
    category: "Integration",
    slug: "corporate-stablecoin-yield-strategies",
    keywords: "USDC, DAI, yield, treasury, sDAI"
  }
];

// Track which topic to use next
const STATE_FILE = path.join(__dirname, '.auto-publish-state.json');

function loadState() {
  if (fs.existsSync(STATE_FILE)) {
    return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
  }
  return { lastTopicIndex: -1, publishedSlugs: [] };
}

function saveState(state) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

function getNextTopic(state) {
  // Find next unpublished topic
  for (let i = 0; i < ARTICLE_TOPICS.length; i++) {
    const index = (state.lastTopicIndex + 1 + i) % ARTICLE_TOPICS.length;
    const topic = ARTICLE_TOPICS[index];
    
    if (!state.publishedSlugs.includes(topic.slug)) {
      return { topic, index };
    }
  }
  
  // All published, reset and start over
  console.log('All topics published, resetting queue...');
  state.publishedSlugs = [];
  saveState(state);
  return { topic: ARTICLE_TOPICS[0], index: 0 };
}

function generateMidjourneyPrompt(topic) {
  const prompts = {
    "Integration": "Professional blockchain integration architecture, corporate network connecting to DeFi protocols, geometric data flows, blue teal gradient, clean minimal fintech aesthetic, no text --ar 16:9 --style raw --v 6",
    "Protocol Updates": "Modern DeFi protocol infrastructure diagram, smart contract network visualization, abstract geometric shapes, blue gradient background, technical precision aesthetic, no text --ar 16:9 --style raw --v 6",
    "Web3 Security": "Cybersecurity shield with blockchain elements, cryptographic protection layers, geometric security visualization, blue teal colors, professional security aesthetic, no text --ar 16:9 --style raw --v 6",
    "Case Studies": "Abstract business success visualization, corporate integration pathway, geometric transformation elements, professional color palette, modern fintech illustration, no text --ar 16:9 --style raw --v 6"
  };
  
  return prompts[topic.category] || prompts["Integration"];
}

async function generateArticleContent(topic) {
  // This would call Claude API in production
  // For now, return a template
  const today = new Date().toISOString().split('T')[0];
  
  return `---
title: "${topic.title}"
date: "${today}"
excerpt: "Deep technical analysis of ${topic.keywords.split(',')[0].trim()} and its implications for institutional DeFi integration."
author: "Marlena DeHart"
category: "${topic.category}"
readingTime: "8 min read"
coverImage: "/images/blog/${topic.slug}.jpg"
---

[AI-GENERATED CONTENT PLACEHOLDER]

This article covers:
- Technical analysis of ${topic.keywords}
- Integration patterns for institutions
- Cost-benefit analysis
- Risk assessment
- Implementation roadmap

## Introduction

[Content to be generated via Claude API]

## Key Technical Details

[Content to be generated via Claude API]

## Integration Patterns

[Content to be generated via Claude API]

## Cost-Benefit Analysis

[Content to be generated via Claude API]

## Conclusion

[Content to be generated via Claude API]

---

## Need Help with DeFi Integration?

[Standard CTA]

**[Schedule Consultation →](/consulting)**

**[View Framework →](/framework)**

---

*Marlena DeHart advises institutions on DeFi integration and security architecture. Master's in Blockchain & Digital Currencies, University of Nicosia.*
`;
}

async function main() {
  console.log('🚀 Starting auto-publish workflow...');
  
  // Load state
  const state = loadState();
  const { topic, index } = getNextTopic(state);
  
  console.log(`📝 Selected topic: ${topic.title}`);
  
  // Generate Midjourney prompt
  const mjPrompt = generateMidjourneyPrompt(topic);
  console.log('\n🎨 Midjourney Prompt:');
  console.log(mjPrompt);
  console.log(`\n💾 Save generated image as: ${topic.slug}.jpg`);
  
  // Save prompt to queue file
  const promptQueueFile = path.join(__dirname, 'midjourney-prompts.txt');
  const promptEntry = `\n\n=== ${new Date().toISOString()} ===\nArticle: ${topic.title}\nFilename: ${topic.slug}.jpg\nPrompt:\n${mjPrompt}\n`;
  fs.appendFileSync(promptQueueFile, promptEntry);
  
  // Generate article content
  const content = await generateArticleContent(topic);
  const articlePath = path.join(__dirname, '..', 'content', 'blog', `${topic.slug}.mdx`);
  
  // Write article file
  fs.writeFileSync(articlePath, content);
  console.log(`✅ Article written to: ${articlePath}`);
  
  // Update state
  state.lastTopicIndex = index;
  state.publishedSlugs.push(topic.slug);
  saveState(state);
  
  // Git commit and push
  console.log('\n📤 Committing and pushing to GitHub...');
  
  try {
    await execAsync('git add -A', { cwd: path.join(__dirname, '..') });
    await execAsync(`git commit -m "Auto-publish: ${topic.title}"`, { cwd: path.join(__dirname, '..') });
    await execAsync('git push origin main', { cwd: path.join(__dirname, '..') });
    console.log('✅ Deployed to GitHub (Vercel will auto-deploy)');
  } catch (error) {
    console.error('❌ Git push failed:', error.message);
    process.exit(1);
  }
  
  // Output instructions
  console.log('\n' + '='.repeat(60));
  console.log('🎉 AUTO-PUBLISH COMPLETE!');
  console.log('='.repeat(60));
  console.log('\n📋 Next Steps:');
  console.log('1. Generate Midjourney image using prompt above');
  console.log(`2. Save as: ${topic.slug}.jpg`);
  console.log('3. Move to: site/public/images/blog/');
  console.log('4. Run: git add -A && git commit -m "Add article image" && git push');
  console.log('\n✨ Or check midjourney-prompts.txt for queued prompts');
  console.log('='.repeat(60));
}

main().catch(console.error);
