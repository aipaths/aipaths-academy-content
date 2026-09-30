---
# Unique semantic identifier (stable across locales; keep it if an
# English legacy file exists in the same folder)
# Format: docs-kebab-case-title (no numbers)
content_id: "docs-your-document-title"

# Locale (MUST match file extension). New content is Spanish-only:
# use .es.md and "es". ".en.md"/"en" is legacy and not created any more.
locale: "es"

# SEO & Display
title: "Your Document Title"
description: "Brief description (1-2 sentences, max 160 characters)"

# Author
author: "AIPaths Academy"

# Publication dates (ISO 8601 format recommended: YYYY-MM-DDTHH:MM:SSZ)
publishedAt: "2025-01-15T10:00:00Z"
updatedAt: "2025-01-15T10:00:00Z"

# Cover image (absolute URL or path)
# Optional for docs, but include for consistency
# Can use a category/topic-based default image
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/docs/XXX_folder-name/hero.jpg"

# Tags (4-8 recommended, use canonical lowercase English IDs)
# If a legacy English counterpart exists, its tags are left as they are
# Include: 1 difficulty level (beginner/intermediate/advanced)
#          1 primary technology, 1 content type, 1-3 key concepts
# See TAG_GUIDELINES.md for full list
tags: ["beginner", "claude", "tutorial", "agents"]
---

# Your Document Title

Brief introduction explaining what this document covers and who it's for. Keep it concise (2-3 paragraphs max).

> **Important**: Use H2 (`##`) for all main sections below. Only H2 headings appear in the "On This Page" sidebar navigation. Use H3 (`###`) for subsections within each H2.

## Prerequisites

If applicable, list what readers need before starting:

- Required tools or accounts
- Background knowledge needed
- Estimated time commitment
- System requirements

## Main Section 1

Start with the most important information. Use clear headings to organize content.

### Subsection 1.1

Break complex topics into digestible chunks. Each subsection should cover one specific aspect.

**Key points:**
- Use bullet points for lists
- Keep paragraphs short (3-5 sentences)
- Add code examples where relevant

```typescript
// Code example with clear comments
const example = "your code here";

// Explain what this does and why it matters
console.log(example);
```

### Subsection 1.2

Continue building on the previous concepts.

> **Note**: Use callouts for important warnings, tips, or additional information.

> **Warning**: Highlight critical security or performance considerations.

## Main Section 2

Progress logically from basics to more advanced topics.

### Practical Example

Include real-world examples that readers can try:

```bash
# Step-by-step commands
npm install example-package
```

**Expected output:**
```
Successfully installed example-package
```

## Common Issues & Troubleshooting

Address frequent problems and their solutions:

### Issue: "Error message here"

**Cause:** Explain why this happens

**Solution:** Step-by-step fix:
1. First do this
2. Then do that
3. Verify it works

## Best Practices

Share professional tips and recommendations:

1. **Practice Name**: Brief explanation of why this matters
2. **Another Practice**: What to do and what to avoid
3. **Third Practice**: Common pitfalls and how to prevent them

## Next Steps

Guide readers on where to go from here:

- **Learn more about X**: Link to related documentation
- **Try a tutorial**: Suggest hands-on practice
- **Join the community**: Connect with other learners

## Additional Resources

- [Official Documentation](https://example.com)
- [Related Guide](/path/to/related-guide)
- [Community Forum](https://example.com/forum)
- [Video Tutorial](https://youtube.com/example)

---

**Questions?** Open an issue or join our community discussions!
