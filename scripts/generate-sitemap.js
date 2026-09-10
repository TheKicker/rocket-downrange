#!/usr/bin/env node
/**
 * Regenerates public/sitemap.xml from the routes declared in
 * src/router/index.js.
 *
 * The sitemap used to be maintained by hand, which is how it ended up
 * listing /APOD (the route is /apod, and vue-router is case sensitive)
 * and both error pages. Deriving it from the router avoids that drift.
 *
 * Run with:  npm run sitemap
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const ROUTER = path.join(ROOT, 'src', 'router', 'index.js');
const OUT = path.join(ROOT, 'public', 'sitemap.xml');
const SITE = 'https://rocketdownrange.com';

// Pages that exist but should never be submitted for indexing.
const EXCLUDE = new Set([
  '/error-404',
  '/error-418',
  '/calculator', // placeholder: "Section Coming Soon"
]);

// Crawl priority by path prefix. First match wins.
const PRIORITY = [
  [/^\/$/, '1.0', 'daily'],
  [/^\/(apod|spacex|rocket-lab|blue-origin)$/, '0.9', 'daily'],
  [/^\/locations\//, '0.7', 'monthly'],
  [/^\/(perseverance|curiosity|opportunity|spirit|sojourner)$/, '0.7', 'weekly'],
  [/^\/(accessibility-statement|privacy-policy|about)$/, '0.3', 'yearly'],
];

function classify(p) {
  for (const [re, priority, changefreq] of PRIORITY) {
    if (re.test(p)) return { priority, changefreq };
  }
  return { priority: '0.8', changefreq: 'weekly' };
}

function extractPaths(source) {
  const paths = [];
  const re = /path:\s*'([^']+)'/g;
  let m;
  while ((m = re.exec(source)) !== null) {
    const p = m[1];
    if (p.includes(':') || p.includes('*')) continue; // catch-all
    if (EXCLUDE.has(p)) continue;
    if (!paths.includes(p)) paths.push(p);
  }
  return paths;
}

function build(paths, lastmod) {
  const urls = paths
    .map((p) => {
      const { priority, changefreq } = classify(p);
      const loc = p === '/' ? `${SITE}/` : `${SITE}${p}`;
      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
    '',
  ].join('\n');
}

const source = fs.readFileSync(ROUTER, 'utf8');
const paths = extractPaths(source);
const lastmod = new Date().toISOString().split('T')[0];
fs.writeFileSync(OUT, build(paths, lastmod), 'utf8');

console.log(`sitemap.xml: ${paths.length} URLs, lastmod ${lastmod}`);
