# Image Management Guide - Content Repository

This guide explains how images are managed for blog posts in the content repository.

## Architecture Overview

Images for blog posts are hosted in **this content repository** and referenced via GitHub raw URLs. This approach:
- ✅ Keeps content and media together
- ✅ Avoids duplication in the main application repository
- ✅ Works seamlessly with the git submodule setup
- ✅ Allows independent content management
- ✅ Provides reliable CDN via GitHub

## Folder Structure

```
public/
└── images/
    └── blogs/
        ├── 001_cursor-2-0-updates/
        │   └── hero.jpg
        ├── 002_essential-mcp-servers/
        │   └── hero.jpg
        ├── 003_prompt-patterns-workflow/
        │   └── hero.jpg
        ├── 004_claude-code-vs-cursor/
        │   └── hero.jpg
        ├── 005_managed-authentication-services/
        │   └── hero.jpg
        ├── 006_supabase-vs-firebase-2025/
        │   └── hero.jpg
        └── 007_rag-documentation-chatbot/
            └── hero.jpg
```

## How It Works

1. **Images are stored** in `public/images/blogs/[blog-folder]/hero.jpg`
2. **Blog frontmatter references** GitHub raw URLs
3. **Main application displays** images directly from GitHub
4. **No duplication** - images only exist in the content repo

### Example Frontmatter

```yaml
---
title: "Cursor 2.0: The AI Coding Revolution"
description: "..."
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/blogs/001_cursor-2-0-updates/hero.jpg"
author: AIPaths Academy
---
```

## Adding Images to Blog Posts

### Step 1: Add Image to Repository

Place your image (1200x630px recommended) in the appropriate folder:

```bash
# Navigate to content repository
cd src/content  # if in main repo
# or directly if cloned separately

# Add your image
cp ~/Downloads/hero.jpg public/images/blogs/001_cursor-2-0-updates/hero.jpg
```

### Step 2: Update Blog Frontmatter (if needed)

The script `scripts/update-blog-images-github.js` has already updated all blog posts.
For new posts, add:

```yaml
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/blogs/[blog-folder]/hero.jpg"
```

### Step 3: Commit and Push

```bash
# Add all changes
git add .

# Commit
git commit -m "feat: add hero images for blog posts"

# Push to GitHub
git push origin main
```

### Step 4: Update Submodule in Main App

```bash
# Go back to main app
cd ../..  # or navigate to main app directory

# Update submodule reference
git add src/content
git commit -m "chore: update content submodule with blog images"
git push
```

## Image Specifications

- **Dimensions**: 1200x630px (optimal for social sharing)
- **Format**: JPG or PNG
- **Max Size**: 500KB (optimize for web)
- **Filename**: `hero.jpg` or `hero.png`
- **Aspect Ratio**: 1.91:1

## Image Sources and Recommendations

### 001_cursor-2-0-updates
**Theme**: AI coding, speed, multi-agent systems
**Search**: "artificial intelligence programming code"

### 002_essential-mcp-servers
**Theme**: Integration, connectivity, protocol
**Search**: "network connections api integration"

### 003_prompt-patterns-workflow
**Theme**: Patterns, workflows, organization
**Search**: "geometric patterns workflow"

### 004_claude-code-vs-cursor
**Theme**: Comparison, choice, decision
**Search**: "choice decision fork road"

### 005_managed-authentication-services
**Theme**: Security, authentication, simplicity
**Search**: "cybersecurity digital lock authentication"

### 006_supabase-vs-firebase-2025
**Theme**: Database, backend, cloud
**Search**: "server room cloud computing database"

### 007_rag-documentation-chatbot
**Theme**: AI chatbot, documentation, knowledge
**Search**: "chatbot ai assistant communication"

## Helper Scripts

### `scripts/update-blog-images-github.js`

Updates all blog frontmatter with GitHub raw URLs:

```bash
node scripts/update-blog-images-github.js
```

This script:
- Scans all blog posts
- Updates `coverImage` field with GitHub URLs
- Shows which images are missing
- Provides complete GitHub URLs for verification

## Troubleshooting

### Images Not Loading

1. **Verify image exists on GitHub**:
   ```
   https://github.com/aipaths/aipaths-academy-content/tree/main/public/images/blogs
   ```

2. **Check the raw URL works**:
   ```
   https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/blogs/001_cursor-2-0-updates/hero.jpg
   ```

3. **Ensure image is committed and pushed**:
   ```bash
   git status
   git log --oneline -5
   ```

### Wrong Image URL

Run the update script again:
```bash
node scripts/update-blog-images-github.js
```

### Image Not Updating in App

The main app might be using cached submodule:
```bash
# In main app
git submodule update --remote
git add src/content
git commit -m "chore: update content submodule"
```

## Benefits of This Approach

1. **No Duplication**: Images only exist in content repository
2. **Version Control**: Images are versioned with content
3. **CDN Performance**: GitHub serves images globally
4. **Simple Management**: Content team manages everything in one place
5. **Clean Separation**: Main app focuses on functionality, not content storage
6. **Backup**: GitHub provides reliable storage and backup

## Quick Reference

### Add New Blog with Image

```bash
# 1. Create blog folder
mkdir blogs/008_new-blog

# 2. Add blog files
touch blogs/008_new-blog/008_new-blog.en.md
touch blogs/008_new-blog/008_new-blog.es.md

# 3. Create image folder
mkdir -p public/images/blogs/008_new-blog

# 4. Add image
cp ~/hero.jpg public/images/blogs/008_new-blog/hero.jpg

# 5. Add to frontmatter
echo 'coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/blogs/008_new-blog/hero.jpg"'

# 6. Commit and push
git add .
git commit -m "feat: add new blog post with hero image"
git push
```

## For Main Application Repository

See `CONTENT_IMAGES.md` in the main repository for how the application consumes these images.