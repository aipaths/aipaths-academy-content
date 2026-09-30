# Contributing to AIPaths Academy Content

Thank you for your interest in contributing! This repository is designed to be simple and easy to use—you can edit in Obsidian, your favorite text editor, or directly on GitHub.

> **Spanish-only policy (GON-150):** new content ships as `.es.md` only. Do not
> create a new `.en.md` counterpart. Existing EN files stay published and
> untouched — they're legacy, not required. The rest of this doc still shows
> EN+ES examples because that's the existing corpus; treat "both locales"
> notes below as applying only when an EN file already exists.

## Repository Structure

This repository uses a content-first structure with numeric prefixes for ordering:

```
/blogs/                        # Blog posts
  /001_getting-started/        # Each post in its own folder
    001_getting-started.en.md  # English version
    001_getting-started.es.md  # Spanish version
  /002_ai-agents/
    002_ai-agents.en.md
    002_ai-agents.es.md

/docs/                         # Documentation
  /001_ai-agents-guide/        # Each doc in its own folder
    001_ai-agents-guide.en.md  # English version
    001_ai-agents-guide.es.md  # Spanish version
  /002_claude-context-window/
    002_claude-context-window.en.md
    002_claude-context-window.es.md
  /003_superclaude/
    003_superclaude.en.md
    003_superclaude.es.md

/templates/                    # Templates for creating new content
  doc-template.md
  blog-template.md
```

### Important Naming Convention

All content is organized in folders with matching filenames:
- **Folder name**: `001_title-slug/` - Controls display order and URL
- **File names**: `001_title-slug.en.md` and `001_title-slug.es.md` - Must match folder name
- **Language suffix**: `.en.md` (English) or `.es.md` (Spanish)

The folder name (without prefix) becomes the URL slug:
- `blogs/001_getting-started/` → `/getting-started`
- `docs/002_ai-agents-guide/` → `/ai-agents-guide`

## How to Contribute

### Quick Start

1. **Fork this repository** on GitHub
2. **Clone your fork** to your computer
3. **Create/edit** files in the appropriate language folder
4. **Use templates** from `/templates/` for structure
5. **Commit and push** your changes
6. **Create a pull request**

### Adding New Documentation

**Step 1:** Determine the next number

Check existing folders in `/docs/` to find the highest number (e.g., if last is `003_`, use `004_`)

**Step 2:** Create folder and copy template

```bash
# If the last folder is 003_superclaude, use 004_
mkdir docs/004_your-topic
cp templates/doc-template.md docs/004_your-topic/004_your-topic.es.md
```

**Step 3:** Fill in the frontmatter

```yaml
---
# Unique semantic identifier (links EN/ES versions)
content_id: "docs-your-topic"

# Locale (must match filename: .es.md, or .en.md for legacy content)
locale: "es"

# SEO & Display
title: "Your Document Title"
description: "Brief description (max 160 characters)"

# Author
author: "AIPaths Academy"

# Publication dates (ISO 8601 format)
publishedAt: "2025-01-05T10:00:00Z"
updatedAt: "2025-01-05T10:00:00Z"

# Cover image (required for consistency)
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/docs/004_your-topic/hero.jpg"

# Tags (canonical lowercase English IDs)
# IMPORTANT: if an EN version exists, both EN/ES versions MUST have IDENTICAL tags
tags:
  - beginner
  - claude
  - tutorial
  - agents
---
```

**Important notes about frontmatter:**
- `content_id`: Unique semantic ID in format `docs-kebab-case`
  - Can include lowercase letters, numbers, and hyphens
  - Must start with `docs-` prefix
  - Examples: `docs-ai-agents-guide`, `docs-claude-3-5-sonnet`
  - Links EN/ES versions together when both exist
  - Must be identical in both language files, if an EN file exists
- `locale`: Must match filename extension (`.en.md` → `"en"`, `.es.md` → `"es"`)
- `tags`: Use canonical lowercase English tags (see tagging guide in CLAUDE.md)
  - **CRITICAL**: if an EN version exists, both EN/ES versions must have IDENTICAL tags
  - Include one difficulty level: beginner, intermediate, or advanced
  - 4-8 tags recommended
- `publishedAt` / `updatedAt`: Use ISO 8601 format with time
  - Format: `"YYYY-MM-DDTHH:MM:SSZ"` (e.g., `"2025-01-15T10:00:00Z"`)
  - **CRITICAL**: Must include full timestamp (not just date)
  - If an EN version exists, both EN/ES versions must have the same `publishedAt`
  - `updatedAt` can differ if translation lags
- `coverImage`: Always include (use default if needed)
- `description`: Keep under 160 characters for SEO

**Step 4:** Write your content

Follow the template structure. Key guidelines:
- Use clear headings (H2 for main sections, H3 for subsections)
- Include code examples with language tags
- Add practical examples readers can try
- Link to related content

**Step 5:** Stop here — Spanish is the published version

AIPaths publishes Spanish-only. Do **not** create an English counterpart for new
content: no `.en.md` file, no translation, no placeholder. Existing English
files stay exactly as they are; they are frozen, not deleted.

See `docs/SPANISH-ONLY.md` in the website repo for the policy and the rollback plan.

### Adding Blog Posts

**Step 1:** Determine the next number and copy the template

```bash
# Check existing folders in /blogs/ for the highest number
# If the last folder is 001_getting-started, use 002_
mkdir blogs/002_your-post-title
cp templates/blog-template.md blogs/002_your-post-title/002_your-post-title.es.md
```

**Step 2:** Fill in the frontmatter

```yaml
---
# Unique semantic identifier (links EN/ES versions)
content_id: "blogs-your-post-title"

# Locale (must match filename: .es.md, or .en.md for legacy content)
locale: "es"

# SEO & Display
title: "Your Engaging Blog Post Title"
description: "Compelling description (150-160 characters)"

# Author
author: "AIPaths Academy"

# Publication dates (ISO 8601 format)
publishedAt: "2025-01-05T10:00:00Z"
updatedAt: "2025-01-05T10:00:00Z"

# Cover image
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/blogs/002_your-post-title/hero.jpg"

# Tags (canonical lowercase English IDs)
# IMPORTANT: if an EN version exists, both EN/ES versions MUST have IDENTICAL tags
tags:
  - cursor
  - ai-coding
  - tutorial
  - productivity

# Reading time estimate (minutes)
readingTime: 8
---
```

**Important notes:**
- `content_id`: Format `blogs-kebab-case`, must be identical in EN/ES
  - Can include lowercase letters, numbers, and hyphens
  - Examples: `blogs-cursor-2-0-updates`, `blogs-supabase-vs-firebase-2025`
- Blogs do NOT use difficulty tags (beginner/intermediate/advanced)
- Dates must use full ISO 8601 format with time: `"2025-01-15T10:00:00Z"`
- All other fields follow same rules as documentation

**Step 3:** Write engaging content

Blog posts should be:
- **Personal**: Share your experience or perspective
- **Practical**: Include code examples and real scenarios
- **Actionable**: Give readers something to do or try
- **Conversational**: Write like you're explaining to a friend

### Editing Existing Content

1. Find the file you want to edit
2. Make your changes
3. Update the `updatedAt` date in frontmatter (use ISO 8601 format)
4. If editing both EN and ES versions:
   - Keep `content_id`, `tags`, `publishedAt`, and `coverImage` IDENTICAL
   - Only translate `title`, `description`, and content body
5. Commit with a clear message: `fix: Correct API endpoint in getting-started guide`

## Content Guidelines

### Writing Style

- **Clear and concise**: Avoid jargon unless necessary
- **Beginner-friendly**: Explain concepts simply
- **Practical**: Focus on real-world use cases
- **Professional**: Maintain a respectful, helpful tone

### Heading Structure (Critical for Navigation)

**Our "On This Page" sidebar only tracks H2 headings (`##`).** Follow this structure for proper navigation:

**Document Structure:**
```markdown
# Document Title (H1 - Only once at the top)

Brief introduction paragraph.

## Main Section 1 (H2 - Appears in "On This Page")

Content for main section.

### Subsection 1.1 (H3 - Does NOT appear in sidebar)

Detailed content within the section.

### Subsection 1.2 (H3 - Does NOT appear in sidebar)

More detailed content.

## Main Section 2 (H2 - Appears in "On This Page")

Next major topic.

### Subsection 2.1 (H3)

Supporting details.
```

**Best Practices:**

✅ **DO:**
- Use **one H1 (`#`)** only - the document title at the top
- Use **H2 (`##`)** for all main sections that should appear in the "On This Page" sidebar
- Use **H3 (`###`)** for subsections within an H2 section
- Keep H2 headings descriptive and scannable (2-6 words ideal)
- Maintain logical hierarchy: H1 → H2 → H3 (don't skip levels)

❌ **DON'T:**
- Use multiple H1 headings in one document
- Skip from H1 directly to H3 without H2
- Use H3 for main sections (they won't appear in sidebar)
- Create H2 headings that are too long (>8 words)
- Use special characters that break URL anchors (emojis, slashes, etc.)

**Example of Good Heading Structure:**
```markdown
# Getting Started with Claude API

## Prerequisites
### System Requirements
### Account Setup

## Authentication
### API Key Generation
### Environment Variables

## Your First Request
### Basic Example
### Handling Responses

## Error Handling
### Common Errors
### Debugging Tips

## Next Steps
```

**Why This Matters:**
- Users navigate docs via the "On This Page" sidebar
- Only H2 headings appear in the sidebar for clean navigation
- Proper hierarchy improves accessibility and SEO
- Consistent structure makes docs easier to scan

### Formatting

**Code Blocks:**
Always specify the language:

````markdown
```typescript
const example = "like this";
```
````

**CRITICAL - Valid Language Identifiers:**
Never use placeholder text like `[language]` in code blocks. Use actual language names:
- ✅ Good: `typescript`, `javascript`, `python`, `bash`, `json`, `yaml`, `text`, `markdown`
- ❌ Bad: `[language]`, `[code]`, `your-language`

**Callouts:**
Use for important notes:

```markdown
> **Note**: Important information here

> **Warning**: Critical security consideration

> **Pro Tip**: Helpful shortcut or best practice
```

**Links:**
- Use descriptive text: `[Claude API Documentation](https://docs.anthropic.com)`
- Not: `[Click here](https://docs.anthropic.com)`

## MDX Compilation Rules (CRITICAL)

Our documentation uses MDX, which combines Markdown with JSX. This means certain characters are interpreted as code. **Follow these rules to avoid compilation errors:**

### 1. Comparison Operators MUST Be Escaped

**The Problem:** MDX interprets `<` as the start of a JSX tag.

**Examples that BREAK:**
```markdown
❌ Hardware with <16GB RAM
❌ Response time <100ms
❌ Budget <$50/month
❌ Use for <10,000 users
```

**Correct Usage:**
```markdown
✅ Hardware with &lt;16GB RAM
✅ Response time &lt;100ms
✅ Budget &lt;$50/month
✅ Use for &lt;10,000 users
```

**Rule:** Always replace `<` with `&lt;` when followed by a number or dollar sign in regular text.

**Where This Applies:**
- ✅ Regular text and paragraphs
- ✅ List items (both ordered and unordered)
- ✅ Inside code blocks (plain text, not fenced)
- ✅ Headings
- ✅ Table cells
- ⚠️ Inside fenced code blocks (` ``` `), you can usually use `<` directly, but escape if you see errors

### 2. Greater Than Operators

**The Problem:** MDX can confuse `>` in certain contexts.

**Safer Approach:**
```markdown
❌ Users >1000
✅ Users &gt;1000

❌ Memory >8GB
✅ Memory &gt;8GB
```

**Rule:** When in doubt, escape `>` as `&gt;` in regular text.

### 3. Curly Braces in Text

**The Problem:** MDX interprets `{` and `}` as JavaScript expressions.

**Examples that BREAK:**
```markdown
❌ The object {name: "value"} is invalid
❌ Use the pattern {id} in your code
```

**Correct Usage:**
```markdown
✅ The object `{name: "value"}` is invalid  (wrapped in backticks)
✅ Use the pattern \{id\} in your code      (escaped with backslash)
```

**Rule:** Wrap curly braces in backticks (inline code) or escape them with backslashes.

### 4. Ampersands in URLs and Text

**The Problem:** `&` is an HTML entity marker and can cause issues.

**Examples:**
```markdown
⚠️ Use ?param1=value&param2=value  (might work but risky)
✅ Use ?param1=value&amp;param2=value
✅ Use `?param1=value&param2=value`  (in backticks is safe)
```

**Rule:** In regular text, use `&amp;` for ampersands. In code blocks or inline code, regular `&` is fine.

### 5. HTML Comments

**The Problem:** MDX processes HTML comments, which can cause issues.

**Avoid:**
```markdown
❌ <!-- This is a comment -->
```

**Better:**
```markdown
✅ [//]: # (This is a comment)
✅ Just delete the comment
```

**Rule:** Use Markdown-style comments `[//]: # (comment)` or remove comments entirely.

### 6. Self-Closing Tags

**The Problem:** Malformed self-closing tags cause errors.

**Examples that BREAK:**
```markdown
❌ <Component/ >     (space before >)
❌ <img src="x"/m>   (invalid character after /)
```

**Correct Usage:**
```markdown
✅ <Component />
✅ <img src="x" />
```

**Rule:** Use proper JSX syntax for any HTML/JSX tags, or avoid them entirely in Markdown.

### 7. Unescaped Hash in URLs

**The Problem:** Hashes can interfere with heading syntax.

**Safer Approach:**
```markdown
⚠️ Visit https://example.com#section
✅ Visit <https://example.com#section>
✅ Visit `https://example.com#section`
✅ [Visit Link](https://example.com#section)
```

**Rule:** Wrap URLs containing `#` in angle brackets, backticks, or use proper link syntax.

## Quick Reference: Characters to Watch

| Character | When to Escape | HTML Entity | Example |
|-----------|---------------|-------------|---------|
| `<` | Before numbers/$ | `&lt;` | `&lt;100ms` |
| `>` | Before numbers | `&gt;` | `&gt;1000` |
| `&` | In text (not code) | `&amp;` | `Smith &amp; Co` |
| `{` `}` | Always in text | Wrap in backticks | `` `{value}` `` |
| `[` `]` | In code blocks | Use language name | `` ```text`` not `` ```[language]`` |

## Testing Your Content

Before submitting, check for these common issues:

```bash
# Search for potential MDX errors in your file
grep -n "<[0-9$]" your-file.md      # Find unescaped < before numbers
grep -n "\[language\]" your-file.md # Find placeholder languages
grep -n "```\[" your-file.md        # Find invalid code blocks
```

## When You See MDX Errors

If you encounter an error like:
```
[next-mdx-remote] error compiling MDX:
Unexpected character `5` (U+0035) before name
```

This means:
1. You have `<5` or similar in your text
2. MDX thinks it's a JSX tag starting with a number (which is invalid)
3. **Solution:** Replace `<` with `&lt;`

**Other common errors:**
- `Unknown language: '[language]'` → Use actual language name in code blocks
- `Unexpected character after self-closing slash` → Fix malformed JSX/HTML tags
- `Expected '>' to close the tag` → Missing closing bracket in HTML/JSX

### Tags vs. Categories

**We use tags, not rigid categories.** This gives you flexibility:

**Good tags:**
- `["claude", "getting-started", "api", "beginner"]`
- `["deployment", "vercel", "nextjs", "production"]`
- `["agents", "context-window", "advanced"]`

**What makes a good tag:**
- Describes the content accurately
- Helps users find related content
- Specific enough to be useful
- Common enough to group content

**Avoid:**
- Too many tags (4-6 is ideal)
- Overly generic tags like "tutorial" alone
- Tags that are too specific to be reused

## Code Examples

### Requirements

All code examples must:
- **Work**: Test before submitting
- **Be clear**: Include comments explaining key parts
- **Be complete**: Include necessary imports and setup
- **Be secure**: No hardcoded secrets or API keys

### Example Format

```typescript
/**
 * Brief description of what this does
 */
import { SomePackage } from 'package-name';

// Setup with environment variables
const apiKey = process.env.API_KEY;

async function exampleFunction() {
  try {
    // Explain what this block does
    const result = await someOperation();
    return result;
  } catch (error) {
    // Always include error handling
    console.error('Operation failed:', error);
    throw error;
  }
}

// Show usage
const output = await exampleFunction();
console.log(output);
```

## Legacy English Content (EN)

AIPaths publishes Spanish-only. New content is `.es.md` and has no English
counterpart. This section applies **only** to the English files that already
exist.

### Frozen, not deleted
- Do not create new `.en.md` files
- Do not translate new Spanish content into English
- Do not rewrite, empty or delete existing English files — they stay published
  and are kept for a possible future reactivation

### If an existing pair is inconsistent
- Tag and timestamp drift between an existing EN/ES pair is reported as a
  notice, never as an error. Fixing it would mean rewriting frozen English, so
  leave it alone unless Gonza asks for that specific piece.

### Code Examples
- Keep code identical between languages
- Translate comments and variable names if it aids understanding
- Translate output/results shown in comments

## Content Validation

**Before committing**, always validate your content to catch errors early:

```bash
# Validate MDX syntax and structure
node scripts/validate-content.js

# Validate EN/ES translation consistency
node scripts/validate-translations.js

# Validate specific file
node scripts/validate-content.js path/to/file.md

# Validate only changed files (git)
node scripts/validate-content.js --changed
```

### What Gets Validated

#### Translation Consistency (`validate-translations.js`)
- ✅ A Spanish version exists for each `content_id` (English is optional legacy)
- ✅ Shared fields match between EN/ES:
  - `content_id` (must be identical)
  - `tags` (must be identical arrays)
  - `publishedAt` (must match exactly)
  - `coverImage` (must match exactly)
- ✅ `content_id` format is correct (`blogs-*` or `docs-*`)
- ✅ All required fields are present
- ✅ `locale` matches filename extension

#### Content Structure (`validate-content.js`)
The validation script checks for three levels of issues:

#### 🔴 **ERRORS** (Must Fix - Blocks Deployment)
- **Single H1 heading**: Only document title should be H1
- **Required frontmatter**: Must have all required fields:
  - `content_id`, `locale`, `title`, `description`
  - `publishedAt`, `updatedAt`, `coverImage`, `tags`
- **Valid locale**: Filename must end with `.en.md` or `.es.md`
- **Locale match**: `locale` field must match filename extension
- **content_id format**: Must be `blogs-*` or `docs-*` (lowercase, kebab-case, can include numbers)
- **Tags consistency**: reported when an EN/ES pair disagrees, but never blocking — frozen English is not rewritten
- **MDX syntax**: No unescaped `<`, `>`, `{}` outside code blocks
- **Code block languages**: No placeholder `[language]` tags

#### 🟡 **WARNINGS** (Should Fix - Quality Issues)
- **H2 count**: At least 3 H2 sections for good navigation
- **Heading hierarchy**: Don't skip levels (H1→H3)
- **H2 length**: Keep H2 headings under 8 words
- **Description length**: Under 160 characters for SEO
- **Tag count**: 4-8 tags recommended
- **Empty sections**: No headings without content

#### 💡 **INFO** (Nice to Fix - Suggestions)
- **Code language**: Specify language for syntax highlighting
- **Reading time**: Very short (<2 min) or long (>20 min) content

### Reading Validation Output

```bash
$ npm run validate

🔍 AIPaths Academy Content Validator
════════════════════════════════════════════════════════════════════════════════

Validating 2 files...

✅ docs/003_superclaude/003_superclaude.en.md

────────────────────────────────────────────────────────────────────────────────
📄 docs/001_my-doc/001_my-doc.en.md
────────────────────────────────────────────────────────────────────────────────
  🔴 ERROR: Multiple H1 headings found (2). Only the document title should be H1. (line 45)
  🟡 WARNING: Only 2 H2 sections found. Recommended: 3+ for "On This Page" navigation.
  💡 INFO: Code block without language specified. Consider adding for syntax highlighting. (line 78)

════════════════════════════════════════════════════════════════════════════════

📊 Summary:
  ✅ 1 file passed
  ❌ 1 file with issues
  🔴 1 error
  🟡 1 warning
  💡 1 info

❌ Validation failed with errors.
```

### Common Validation Errors and Fixes

**Error: "Multiple H1 headings found"**
```markdown
❌ WRONG:
# My Document Title
## Section 1
# Section 2  ← Second H1

✅ CORRECT:
# My Document Title
## Section 1
## Section 2  ← Changed to H2
```

**Error: "Unescaped < before number"**
```markdown
❌ WRONG:
Hardware with <16GB RAM

✅ CORRECT:
Hardware with &lt;16GB RAM
# OR
Hardware with `<16GB` RAM
```

**Error: "Invalid code block language"**
````markdown
❌ WRONG:
```[language]
code here
```

✅ CORRECT:
```typescript
code here
```
````

**Error: "Missing required frontmatter field"**
```yaml
❌ WRONG:
---
title: "My Doc"
---

✅ CORRECT:
---
content_id: "docs-my-doc"
locale: "en"
title: "My Doc"
description: "Clear description under 160 chars"
author: "AIPaths Academy"
publishedAt: "2025-01-12T10:00:00Z"
updatedAt: "2025-01-12T10:00:00Z"
coverImage: "https://..."
tags:
  - beginner
  - claude
  - tutorial
  - agents
---
```

### When to Run Validation

1. **Before committing**: Catches issues early
2. **After AI generation**: Verifies AI-created content
3. **After bulk edits**: Ensures consistency
4. **Before submitting PR**: Final quality check

### Validation Best Practices

- ✅ **Run often**: Validate as you write, not just at the end
- ✅ **Fix errors first**: Address 🔴 errors before warnings
- ✅ **Review warnings**: Quality improvements are worth it
- ✅ **Check info**: Enhancement suggestions improve UX
- ✅ **Commit clean**: Don't commit files with errors

## Commit Message Format

Use clear, descriptive commit messages:

- `docs: Add guide on Claude streaming responses`
- `blog: Create tutorial for deploying Next.js apps`
- `fix: Correct code example in getting-started guide`
- `update: Refresh authentication guide with latest API`

**Format:**
- `docs:` - Documentation changes
- `blog:` - Blog post additions/changes
- `fix:` - Corrections or bug fixes
- `update:` - Refresh existing content
- `examples:` - Code example changes

## Pull Request Process

### Before Submitting

- [ ] Test all code examples
- [ ] Check all links work
- [ ] Proofread for typos and grammar
- [ ] Verify frontmatter is correct
- [ ] Ensure the file is named `.es.md` and `locale: "es"` matches it

### PR Description

Include:
1. **What**: What content did you add/change?
2. **Why**: Why is this valuable?
3. **Testing**: How did you verify it works?
4. **Notes**: Anything reviewers should know?

### Review Process

1. Maintainers review within 3-5 business days
2. Address any feedback or requested changes
3. Once approved, content is merged
4. Changes go live automatically!

## Working in Obsidian

This repository is optimized for Obsidian editing:

### Workflow

1. **Open vault**: Open the repository folder in Obsidian
2. **Browse**: Navigate through language folders
3. **Create/Edit**: Use templates, drag images, create links
4. **Preview**: See how it looks in Obsidian's preview mode
5. **Commit**: Use git in terminal or Obsidian git plugin

### File Ordering

Numeric prefixes (`001_`, `002_`, `003_`) control the display order of documentation. This ensures content appears in a logical learning sequence.

### Obsidian Features

Use standard markdown. Avoid Obsidian-specific features like:
- `[[Wiki links]]` - Use `[standard markdown links](path)`
- Dataview queries
- Canvas files
- Obsidian-specific plugins

## Questions?

- **General questions**: [Open a Discussion](https://github.com/aipaths/aipaths-academy-content/discussions)
- **Bug reports**: [Open an Issue](https://github.com/aipaths/aipaths-academy-content/issues)
- **Content suggestions**: [Open an Issue](https://github.com/aipaths/aipaths-academy-content/issues)

## Recognition

Contributors are credited:
- In the `author` field of content
- In our contributors list
- In the project changelog

Thank you for helping make AI education accessible to everyone!
