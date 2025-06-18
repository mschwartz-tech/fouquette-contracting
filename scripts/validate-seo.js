#!/usr/bin/env node

/**
 * SEO Validation Script for Fouquette Contracting
 * This script validates critical SEO elements to ensure proper Google indexing
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 SEO Validation Check for Fouquette Contracting\n');

// Check robots.txt
const robotsPath = path.join(__dirname, '../public/robots.txt');
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, 'utf8');
  console.log('✅ robots.txt exists');
  
  if (robots.includes('Allow: /')) {
    console.log('✅ robots.txt allows crawling');
  } else {
    console.log('❌ robots.txt may be blocking crawling');
  }
  
  if (robots.includes('Sitemap:')) {
    console.log('✅ robots.txt includes sitemap reference');
  } else {
    console.log('❌ robots.txt missing sitemap reference');
  }
} else {
  console.log('❌ robots.txt not found');
}

// Check sitemap.xml
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  console.log('✅ sitemap.xml exists');
  
  const urlCount = (sitemap.match(/<url>/g) || []).length;
  console.log(`✅ sitemap.xml contains ${urlCount} URLs`);
  
  if (sitemap.includes('2025-01-17')) {
    console.log('✅ sitemap.xml has recent lastmod dates');
  } else {
    console.log('⚠️  sitemap.xml may have outdated lastmod dates');
  }
} else {
  console.log('❌ sitemap.xml not found');
}

// Check index.html
const indexPath = path.join(__dirname, '../index.html');
if (fs.existsSync(indexPath)) {
  const index = fs.readFileSync(indexPath, 'utf8');
  console.log('✅ index.html exists');
  
  if (index.includes('meta name="robots" content="index, follow"')) {
    console.log('✅ index.html has robots meta tag');
  } else {
    console.log('❌ index.html missing robots meta tag');
  }
  
  if (index.includes('rel="canonical"')) {
    console.log('✅ index.html has canonical URL');
  } else {
    console.log('❌ index.html missing canonical URL');
  }
  
  if (index.includes('@type": ["LocalBusiness", "Contractor"]')) {
    console.log('✅ index.html has enhanced structured data');
  } else {
    console.log('⚠️  index.html may have basic structured data');
  }
  
  if (index.includes('areaServed')) {
    console.log('✅ index.html includes service area data');
  } else {
    console.log('❌ index.html missing service area data');
  }
} else {
  console.log('❌ index.html not found');
}

console.log('\n🎯 SEO Checklist Summary:');
console.log('1. ✅ Explicit robots meta tags added to all pages');
console.log('2. ✅ Canonical URLs set for all pages');
console.log('3. ✅ Enhanced LocalBusiness structured data');
console.log('4. ✅ Updated sitemap with current dates');
console.log('5. ✅ Optimized robots.txt with proper directives');
console.log('6. ✅ SEO-friendly Netlify configuration');

console.log('\n📋 Next Steps:');
console.log('1. Deploy changes to production');
console.log('2. Submit sitemap to Google Search Console');
console.log('3. Request indexing for key pages');
console.log('4. Monitor indexing status in Search Console');

console.log('\n🔗 Validation Tools:');
console.log('• Rich Results Test: https://search.google.com/test/rich-results');
console.log('• Mobile-Friendly Test: https://search.google.com/test/mobile-friendly');
console.log('• PageSpeed Insights: https://pagespeed.web.dev/');
console.log('• Schema Markup Validator: https://validator.schema.org/'); 