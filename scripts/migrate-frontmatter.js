#!/usr/bin/env node

/**
 * Frontmatter Migration Script for AIPaths Academy
 *
 * Migrates existing content to the new standardized frontmatter format:
 * - Adds content_id field (generated from folder name)
 * - Adds locale field (extracted from filename)
 * - Adds updatedAt field (using publishedAt or lastUpdated as fallback)
 * - Removes published field (redundant)
 * - Renames lastUpdated to updatedAt
 * - Adds coverImage placeholder for docs if missing
 * - Ensures EN/ES pairs have identical shared fields
 *
 * Usage:
 *   node scripts/migrate-frontmatter.js --preview  # Show changes without applying
 *   node scripts/migrate-frontmatter.js --apply    # Apply changes to files
 */

const fs = require('fs');
const path = require('path');

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
  magenta: '\x1b[35m',
};

/**
 * Parse frontmatter from content
 */
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;

  const [, frontmatterText, body] = match;
  const frontmatter = {};
  const lines = frontmatterText.split('\n');
  let currentKey = null;
  let inMultilineArray = false;
  let arrayItems = [];

  for (const line of lines) {
    // Skip comments and empty lines
    if (line.trim().startsWith('#') || line.trim() === '') continue;

    // Check if we're in a multiline array
    if (inMultilineArray) {
      if (line.trim().startsWith('-')) {
        // Array item
        const item = line.trim().substring(1).trim();
        arrayItems.push(item);
      } else if (line.match(/^\w+:/)) {
        // New key, end multiline array
        frontmatter[currentKey] = arrayItems;
        inMultilineArray = false;
        arrayItems = [];

        // Parse new key
        const kvMatch = line.match(/^(\w+):\s*(.*)$/);
        if (kvMatch) {
          const [, key, value] = kvMatch;
          currentKey = key;
          if (value.trim() === '') {
            // Start of new multiline array
            inMultilineArray = true;
            arrayItems = [];
          } else {
            frontmatter[key] = parseValue(value);
          }
        }
      }
      continue;
    }

    // Parse key-value pairs
    const kvMatch = line.match(/^(\w+):\s*(.*)$/);
    if (kvMatch) {
      const [, key, value] = kvMatch;
      currentKey = key;

      if (value.trim() === '') {
        // Start of multiline array
        inMultilineArray = true;
        arrayItems = [];
      } else {
        frontmatter[key] = parseValue(value);
      }
    }
  }

  // Close any remaining multiline array
  if (inMultilineArray && currentKey) {
    frontmatter[currentKey] = arrayItems;
  }

  return { frontmatter, body };
}

/**
 * Parse a frontmatter value (handle arrays, strings, etc.)
 */
function parseValue(value) {
  const trimmed = value.trim();

  // Inline array [item1, item2]
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    try {
      return JSON.parse(trimmed);
    } catch (e) {
      // Fallback: manual parsing
      return trimmed
        .slice(1, -1)
        .split(',')
        .map(v => v.trim().replace(/^["']|["']$/g, ''));
    }
  }

  // Remove quotes from strings
  return trimmed.replace(/^["']|["']$/g, '');
}

/**
 * Serialize frontmatter to YAML-like format
 */
function serializeFrontmatter(frontmatter, isDoc = false) {
  const lines = ['---'];

  // Identification & Linking
  lines.push('# Unique semantic identifier (links EN/ES versions)');
  lines.push(`content_id: "${frontmatter.content_id}"`);
  lines.push('');

  // Locale
  lines.push('# Locale');
  lines.push(`locale: "${frontmatter.locale}"`);
  lines.push('');

  // SEO & Display
  lines.push('# SEO & Display');
  lines.push(`title: "${frontmatter.title}"`);
  lines.push(`description: "${frontmatter.description}"`);
  lines.push('');

  // Author
  lines.push('# Author');
  lines.push(`author: "${frontmatter.author || 'AIPaths Academy'}"`);
  lines.push('');

  // Dates
  lines.push('# Publication dates (ISO 8601 format)');
  lines.push(`publishedAt: "${frontmatter.publishedAt}"`);
  lines.push(`updatedAt: "${frontmatter.updatedAt}"`);
  lines.push('');

  // Cover Image
  lines.push('# Cover image');
  lines.push(`coverImage: "${frontmatter.coverImage}"`);
  lines.push('');

  // Tags
  lines.push('# Tags (canonical lowercase English IDs)');
  lines.push('# IMPORTANT: Both EN/ES versions MUST have IDENTICAL tags');
  if (Array.isArray(frontmatter.tags)) {
    lines.push('tags:');
    frontmatter.tags.forEach(tag => {
      lines.push(`  - ${tag}`);
    });
  } else {
    lines.push(`tags: ${JSON.stringify(frontmatter.tags || [])}`);
  }

  // Reading time (blogs only)
  if (!isDoc && frontmatter.readingTime) {
    lines.push('');
    lines.push('# Reading time estimate');
    lines.push(`readingTime: ${frontmatter.readingTime}`);
  }

  lines.push('---');
  return lines.join('\n');
}

/**
 * Generate content_id from folder/file path
 */
function generateContentId(filePath) {
  const parts = filePath.split('/');
  const folderName = parts[parts.length - 2]; // Get parent folder name

  // Extract slug from folder name (remove 3-digit prefix)
  const slug = folderName.replace(/^\d{3}_/, '');

  // Determine if it's a blog or doc
  const isBlog = filePath.includes('/blogs/');
  const prefix = isBlog ? 'blogs' : 'docs';

  return `${prefix}-${slug}`;
}

/**
 * Migrate a single file's frontmatter
 */
function migrateFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const parsed = parseFrontmatter(content);

  if (!parsed) {
    return { error: 'No frontmatter found' };
  }

  const { frontmatter: oldFrontmatter, body } = parsed;
  const isDoc = filePath.includes('/docs/');
  const locale = path.basename(filePath).match(/\.(en|es)\.md$/)?.[1];

  // Build new frontmatter
  const newFrontmatter = {
    // Add content_id
    content_id: generateContentId(filePath),

    // Add locale
    locale: locale || oldFrontmatter.locale,

    // Preserve existing fields
    title: oldFrontmatter.title,
    description: oldFrontmatter.description,
    author: oldFrontmatter.author || 'AIPaths Academy',

    // Dates
    publishedAt: oldFrontmatter.publishedAt,
    updatedAt: oldFrontmatter.updatedAt ||
               oldFrontmatter.lastUpdated ||
               oldFrontmatter.publishedAt,

    // Cover image
    coverImage: oldFrontmatter.coverImage ||
                (isDoc ?
                  'https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/docs/default-hero.jpg' :
                  'https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/blogs/default-hero.jpg'),

    // Tags
    tags: oldFrontmatter.tags || [],

    // Reading time (blogs only)
    ...(oldFrontmatter.readingTime && { readingTime: oldFrontmatter.readingTime }),
  };

  // Note: published and lastUpdated fields are intentionally removed

  const newContent = serializeFrontmatter(newFrontmatter, isDoc) + '\n' + body;

  return {
    oldFrontmatter,
    newFrontmatter,
    newContent,
    changes: detectChanges(oldFrontmatter, newFrontmatter),
  };
}

/**
 * Detect what changed between old and new frontmatter
 */
function detectChanges(oldFm, newFm) {
  const changes = [];

  // Added fields
  if (!oldFm.content_id) changes.push('+ Added content_id');
  if (!oldFm.locale) changes.push('+ Added locale');
  if (!oldFm.updatedAt && !oldFm.lastUpdated) changes.push('+ Added updatedAt');
  if (!oldFm.coverImage && newFm.coverImage) changes.push('+ Added coverImage');

  // Removed fields
  if (oldFm.published !== undefined) changes.push('- Removed published');
  if (oldFm.lastUpdated !== undefined) changes.push('~ Renamed lastUpdated � updatedAt');

  return changes;
}

/**
 * Find all content files
 */
function findContentFiles(dir) {
  const files = [];

  function traverse(currentDir) {
    if (!fs.existsSync(currentDir)) return;

    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        traverse(fullPath);
      } else if (entry.isFile() && /\.(en|es)\.md$/.test(entry.name)) {
        files.push(fullPath);
      }
    }
  }

  traverse(dir);
  return files;
}

/**
 * Preview migration changes
 */
function previewMigration(files) {
  console.log(`\n${colors.cyan}=� Migration Preview${colors.reset}`);
  console.log(`${colors.gray}${'P'.repeat(80)}${colors.reset}\n`);

  let totalChanges = 0;
  const errors = [];

  for (const filePath of files) {
    const relativePath = path.relative(process.cwd(), filePath);
    const result = migrateFile(filePath);

    if (result.error) {
      errors.push({ file: relativePath, error: result.error });
      continue;
    }

    if (result.changes.length > 0) {
      totalChanges++;
      console.log(`${colors.blue}${relativePath}${colors.reset}`);
      result.changes.forEach(change => {
        const color = change.startsWith('+') ? colors.green :
                     change.startsWith('-') ? colors.red :
                     colors.yellow;
        console.log(`  ${color}${change}${colors.reset}`);
      });
      console.log(`  ${colors.gray}content_id: ${result.newFrontmatter.content_id}${colors.reset}`);
      console.log('');
    }
  }

  console.log(`${colors.gray}${'P'.repeat(80)}${colors.reset}`);
  console.log(`${colors.blue}Files to update:${colors.reset} ${totalChanges}/${files.length}`);

  if (errors.length > 0) {
    console.log(`${colors.red}Errors:${colors.reset} ${errors.length}`);
    errors.forEach(({ file, error }) => {
      console.log(`  ${colors.red}${colors.reset} ${file}: ${error}`);
    });
  }

  console.log('');
}

/**
 * Apply migration
 */
function applyMigration(files) {
  console.log(`\n${colors.cyan}=� Applying Migration${colors.reset}`);
  console.log(`${colors.gray}${'P'.repeat(80)}${colors.reset}\n`);

  let updated = 0;
  let skipped = 0;
  let errors = 0;

  for (const filePath of files) {
    const relativePath = path.relative(process.cwd(), filePath);
    const result = migrateFile(filePath);

    if (result.error) {
      console.log(`${colors.red}${colors.reset} ${relativePath}: ${result.error}`);
      errors++;
      continue;
    }

    if (result.changes.length > 0) {
      try {
        fs.writeFileSync(filePath, result.newContent, 'utf8');
        console.log(`${colors.green}${colors.reset} ${relativePath}`);
        updated++;
      } catch (err) {
        console.log(`${colors.red}${colors.reset} ${relativePath}: ${err.message}`);
        errors++;
      }
    } else {
      skipped++;
    }
  }

  console.log(`\n${colors.gray}${'P'.repeat(80)}${colors.reset}`);
  console.log(`${colors.green}Updated:${colors.reset} ${updated}`);
  console.log(`${colors.gray}Skipped:${colors.reset} ${skipped} (already migrated)`);
  if (errors > 0) {
    console.log(`${colors.red}Errors:${colors.reset} ${errors}`);
  }
  console.log('');
}

/**
 * Main
 */
function main() {
  const args = process.argv.slice(2);
  const mode = args[0];

  if (!mode || !['--preview', '--apply'].includes(mode)) {
    console.log(`
${colors.cyan}Frontmatter Migration Tool${colors.reset}

Usage:
  ${colors.yellow}node scripts/migrate-frontmatter.js --preview${colors.reset}  Preview changes
  ${colors.yellow}node scripts/migrate-frontmatter.js --apply${colors.reset}    Apply changes

This script will:
  ${colors.green}+${colors.reset} Add content_id field
  ${colors.green}+${colors.reset} Add locale field
  ${colors.green}+${colors.reset} Add updatedAt field
  ${colors.red}-${colors.reset} Remove published field
  ${colors.yellow}~${colors.reset} Rename lastUpdated � updatedAt
  ${colors.green}+${colors.reset} Add coverImage (if missing)
`);
    process.exit(0);
  }

  const repoPath = path.join(__dirname, '..');
  const blogsPath = path.join(repoPath, 'blogs');
  const docsPath = path.join(repoPath, 'docs');

  const allFiles = [
    ...findContentFiles(blogsPath),
    ...findContentFiles(docsPath),
  ];

  console.log(`${colors.blue}Found ${allFiles.length} content files${colors.reset}`);

  if (mode === '--preview') {
    previewMigration(allFiles);
    console.log(`${colors.yellow}To apply these changes, run:${colors.reset}`);
    console.log(`${colors.yellow}  node scripts/migrate-frontmatter.js --apply${colors.reset}\n`);
  } else if (mode === '--apply') {
    applyMigration(allFiles);
    console.log(`${colors.green} Migration complete!${colors.reset}`);
    console.log(`${colors.cyan}Run validation to verify:${colors.reset}`);
    console.log(`${colors.cyan}  node scripts/validate-translations.js${colors.reset}\n`);
  }
}

// Run
if (require.main === module) {
  main();
}
