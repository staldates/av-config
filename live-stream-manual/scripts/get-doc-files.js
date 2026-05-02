#!/usr/bin/env node

/**
 * Extract document file paths from sidebars.js for PDF generation
 * Outputs space-separated list of file paths relative to docs/
 */

const fs = require('fs');
const path = require('path');
const sidebars = require('../sidebars.js');

function extractDocIds(items) {
  const ids = [];

  for (const item of items) {
    if (typeof item === 'string') {
      ids.push(item);
    } else if (item.type === 'category' && item.items) {
      ids.push(...extractDocIds(item.items));
    }
  }

  return ids;
}

function resolveDocPath(docId, docsDir) {
  // Try .md first, then .mdx
  const mdPath = path.join(docsDir, `${docId}.md`);
  const mdxPath = path.join(docsDir, `${docId}.mdx`);

  if (fs.existsSync(mdPath)) {
    return `${docId}.md`;
  } else if (fs.existsSync(mdxPath)) {
    return `${docId}.mdx`;
  }

  return null;
}

// Get all doc IDs from sidebar
const docIds = extractDocIds(sidebars.docsSidebar);

// Resolve to actual file paths
const docsDir = path.join(__dirname, '../docs');
const filePaths = docIds
  .map(id => resolveDocPath(id, docsDir))
  .filter(Boolean);

// Output space-separated paths for pandoc
console.log(filePaths.join(' '));
