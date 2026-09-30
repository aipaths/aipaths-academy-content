---
# Unique semantic identifier (links EN/ES versions)
content_id: "docs-claude-skills-guide"

# Locale (must match filename: .en.md or .es.md)
locale: "en"

# SEO & Display
title: "Claude Skills: The Complete Guide to Customizing AI Workflows"
description: "Learn what Claude Skills are, how they work, and how to create your own. From basic setup to advanced custom skills with scripts and templates."

# Author
author: "AIPaths Academy"

# Publication dates (ISO 8601 format)
publishedAt: "2025-12-01T10:00:00Z"
updatedAt: "2025-12-01T10:00:00Z"

# Cover image
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/docs/011_claude-skills-guide/hero.jpg"

# Tags (canonical lowercase English IDs)
# IMPORTANT: Both EN/ES versions MUST have IDENTICAL tags
tags:
  - claude
  - tutorial
  - productivity
  - automation
  - workflows
---

Skills are one of Claude's most powerful features—yet most users don't know they exist.

Think of Skills as specialized "modes" that Claude can activate when needed. Instead of explaining your preferences every conversation, Skills let you teach Claude your workflows once and have it apply them automatically.

This guide covers everything you need to know: what Skills are, how they differ from other Claude features, and how to create your own.

---

## Table of Contents

1. [What Are Claude Skills?](#what-are-claude-skills)
2. [Skills vs. Other Claude Features](#skills-vs-other-claude-features)
3. [Types of Skills](#types-of-skills)
4. [How Skills Work](#how-skills-work)
5. [Enabling and Using Skills](#enabling-and-using-skills)
6. [Creating Your First Skill](#creating-your-first-skill)
7. [The SKILL.md File Structure](#the-skillmd-file-structure)
8. [Advanced Skills with Scripts](#advanced-skills-with-scripts)
9. [Best Practices](#best-practices)
10. [Example Skills](#example-skills)

---

## What Are Claude Skills?

Skills are folders containing instructions, scripts, and resources that Claude loads dynamically when relevant to your task.

**Key characteristics:**

- **Automatic activation**: Claude decides when to use a Skill based on your request—no manual selection needed
- **Task-specific**: Unlike broad settings, Skills activate only when relevant
- **Reusable**: Create once, use across any conversation or project
- **Extendable**: Can include executable code, templates, and reference files

**Example use cases:**

- Generate reports following your company's exact formatting rules
- Create presentations with your brand guidelines
- Analyze data using your organization's specific frameworks
- Automate repetitive tasks with custom scripts

---

## Skills vs. Other Claude Features

Understanding when to use Skills versus other Claude customization options:

| Feature | Scope | When It Loads | Best For |
|---------|-------|---------------|----------|
| **Custom Instructions** | All conversations | Always active | Broad preferences ("be concise", "use Oxford commas") |
| **Projects** | Within a project | When project opens | Static background knowledge, project context |
| **Skills** | Task-specific | When relevant to request | Specialized workflows, repeatable procedures |

**The key difference**: Custom Instructions are personality tweaks. Projects provide context. Skills are task-specific procedures with optional automation.

---

## Types of Skills

### Anthropic Skills (Built-in)

Pre-built Skills maintained by Anthropic:

- **Excel creation**: Enhanced spreadsheet generation
- **Word documents**: Formatted document creation
- **PowerPoint**: Presentation building
- **PDF creation**: Document export

These activate automatically when you request relevant tasks.

### Custom Skills

Skills you or your organization create:

- **Brand compliance**: Logo files, color codes, layout templates
- **Technical documentation**: Notation guides, terminology standards
- **Customer feedback analysis**: Categorization frameworks, pattern identification
- **Meeting notes**: Company-specific formatting, action item extraction
- **Sales call prep**: Account research, talking point generation

---

## How Skills Work

### Progressive Disclosure

Skills use a lightweight loading system:

1. **Metadata scan** (~100 tokens): Claude reads all Skill names and descriptions at startup
2. **Relevance check**: When you make a request, Claude matches it against Skill descriptions
3. **Full load** (&lt;5k tokens): Only the relevant Skill's full instructions load
4. **Resource access**: Scripts and templates load only as needed

This keeps Claude fast while enabling specialized capabilities.

### Model-Invoked vs. User-Invoked

**Skills are model-invoked**—Claude autonomously decides when to use them based on:

- Your request content
- The Skill's description
- Context relevance

This differs from **slash commands**, which are user-invoked (you explicitly type `/command`).

---

## Enabling and Using Skills

### Availability

Skills require a paid plan:

- **Pro**: Full access
- **Max**: Full access
- **Team**: Enabled by default
- **Enterprise**: Requires admin enablement

### Setup by Plan Type

**Pro/Max users:**
1. Go to Settings > Capabilities
2. Enable "Code execution and file creation"
3. Toggle on example Skills or upload your own

**Team plans:**
Skills are enabled by default. Individual members can toggle Skills in Settings > Capabilities.

**Enterprise plans:**
1. Owners must enable in Admin settings > Capabilities
2. Enable both "Code execution" and "Skills"
3. Members can then toggle Skills individually

### Using Skills

Once enabled, Skills work automatically. Simply make requests as normal:

- "Create a PowerPoint about Q3 results" → PowerPoint Skill activates
- "Format this document with our brand guidelines" → Brand Skill activates (if you've created one)
- "Analyze this customer feedback" → Feedback analysis Skill activates (if you've created one)

---

## Creating Your First Skill

### Method 1: Conversational Creation

The easiest way—let Claude help you:

1. Start a new chat
2. Say: "I want to create a skill for [your workflow]"
3. Upload relevant materials (templates, examples, guidelines)
4. Claude will generate the Skill structure for you

**Example prompt:**
> "I want to create a skill for writing weekly status reports. Here's a template I use and an example of a good report I wrote."

### Method 2: Manual Creation

For more control, create the files yourself:

1. Create a folder with your Skill name
2. Add a `SKILL.md` file with YAML frontmatter
3. (Optional) Add scripts, templates, and reference files

---

## The SKILL.md File Structure

Every Skill needs a `SKILL.md` file. Here's the structure:

```markdown
---
name: your-skill-name
description: Brief description of what this Skill does and when to use it
---

# Your Skill Name

## Instructions

Clear, step-by-step guidance for Claude.

## Examples

Concrete examples showing expected input and output.

## Guidelines

Specific rules or constraints to follow.
```

### Required Fields

| Field | Rules | Example |
|-------|-------|---------|
| `name` | Lowercase, numbers, hyphens only. Max 64 characters. | `weekly-report-generator` |
| `description` | What it does AND when to use it. Max 1024 characters. | `Generates formatted weekly status reports when user requests progress updates or weekly summaries` |

### Why Description Matters

The description is **critical**—it's how Claude decides whether to activate your Skill. Include:

- What the Skill does
- When Claude should use it
- Key trigger words or phrases

**Good description:**
> "Creates quarterly business review presentations with executive summary, KPI dashboards, and action items. Use when user requests QBR, quarterly review, or business performance presentation."

**Bad description:**
> "Makes presentations" (too vague—Claude won't know when to activate)

---

## Advanced Skills with Scripts

Skills can include executable code for automation.

### Directory Structure

```text
my-skill/
├── SKILL.md          # Core instructions
├── scripts/          # Executable Python/Bash scripts
├── references/       # Documentation loaded into context
└── assets/           # Templates and binary files
```

### Example: Data Validation Skill

```text
data-validator/
├── SKILL.md
├── scripts/
│   └── validate.py
└── references/
    └── validation-rules.md
```

**SKILL.md:**
```markdown
---
name: data-validator
description: Validates CSV data against business rules. Use when user uploads data files for validation or quality checks.
---

# Data Validation Skill

## Instructions

1. When user uploads a CSV, run scripts/validate.py
2. Parse the validation output
3. Present findings in a clear summary table
4. Suggest fixes for any issues found

## Validation Rules

See references/validation-rules.md for the complete ruleset.
```

### Where Skills Are Stored

**Claude Code users:**

| Location | Scope | Path |
|----------|-------|------|
| Personal Skills | Only you | `~/.claude/skills/` |
| Project Skills | Shared with team | `.claude/skills/` |

**Claude.ai users:**

Upload Skills through Settings > Capabilities.

---

## Best Practices

### Start Simple

Begin with basic Markdown instructions before adding scripts. You can always expand later.

```markdown
---
name: meeting-notes
description: Formats meeting notes with attendees, decisions, and action items
---

# Meeting Notes Formatter

## Format

1. **Date and Title** at top
2. **Attendees** as bullet list
3. **Key Decisions** numbered
4. **Action Items** with owners and due dates
5. **Next Steps** at bottom
```

### The 5/10 Rule

Before creating a Skill, ask:
- Have I done this task at least **5 times**?
- Will I do it at least **10 more times**?

If yes, a Skill makes sense. If no, a simple prompt might suffice.

### Keep Skills Focused

Create separate Skills for different workflows. Multiple focused Skills compose better than one large Skill.

**Good:**
- `sales-call-prep`
- `sales-follow-up-email`
- `sales-proposal-generator`

**Bad:**
- `sales-everything` (too broad, harder to maintain)

### Use Examples

Include example inputs and outputs in your SKILL.md:

```markdown
## Examples

### Input
"Meeting with Acme Corp about Q1 renewal"

### Output
**Meeting Notes: Acme Corp Q1 Renewal**
*Date: [Current Date]*

**Attendees:**
- [To be filled]

**Key Decisions:**
1. [Decision 1]
...
```

### Ideal Length

- **Starter Skills**: &lt;100 lines
- **Mature Skills**: 150-400 lines
- **Maximum**: Keep under 5,000 words to avoid overwhelming context

---

## Example Skills

### 1. Brand Guidelines Skill

```markdown
---
name: brand-compliance
description: Applies company brand guidelines to documents and presentations. Use for any content that needs brand review or formatting.
---

# Brand Compliance Skill

## Brand Colors
- Primary: #1E40AF (Blue)
- Secondary: #10B981 (Green)
- Accent: #F59E0B (Orange)

## Typography
- Headlines: Inter Bold
- Body: Inter Regular
- Code: JetBrains Mono

## Voice Guidelines
- Professional but approachable
- Active voice preferred
- Avoid jargon unless technical audience

## Logo Usage
- Minimum clear space: 20px
- Never stretch or distort
- Dark backgrounds: use white logo version
```

### 2. Code Review Skill

```markdown
---
name: code-review
description: Reviews code for best practices, security issues, and performance. Use when user shares code for review or asks for code feedback.
---

# Code Review Skill

## Review Checklist

### Security
- [ ] No hardcoded secrets
- [ ] Input validation present
- [ ] SQL injection prevention
- [ ] XSS protection

### Performance
- [ ] No unnecessary loops
- [ ] Efficient data structures
- [ ] Proper caching where applicable

### Maintainability
- [ ] Clear naming conventions
- [ ] Appropriate comments
- [ ] Functions under 50 lines
- [ ] Single responsibility principle

## Output Format
Provide review as:
1. **Summary**: One-line overall assessment
2. **Critical Issues**: Must fix before merge
3. **Suggestions**: Nice to have improvements
4. **Positive Notes**: What's done well
```

### 3. Email Template Skill

```markdown
---
name: customer-email
description: Generates customer communication emails following company templates. Use for support responses, updates, or announcements.
---

# Customer Email Skill

## Structure
1. Personalized greeting
2. Acknowledge their situation
3. Provide solution/information
4. Next steps (if any)
5. Warm closing

## Tone
- Empathetic and helpful
- Confident but not arrogant
- Concise—respect their time

## Templates

### Support Response
Subject: Re: [Their Subject]

Hi [Name],

Thank you for reaching out about [issue summary].

[Solution/explanation in 2-3 sentences]

[Next steps if needed]

Let me know if you have any questions!

Best,
[Your Name]
```

---

## Security Note

Skills can execute arbitrary code in Claude's environment. Only install Skills from trusted sources.

Before using a third-party Skill:
- Review the SKILL.md and any scripts
- Check for suspicious network calls or file access
- Prefer Skills from Anthropic's official repository

---

## Resources

- [Official Skills Documentation](https://docs.claude.com/en/docs/claude-code/skills)
- [Anthropic Skills Repository](https://github.com/anthropics/skills)
- [Skill Authoring Best Practices](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/best-practices)
- [Claude Help Center - Skills](https://support.claude.com/en/articles/12512176-what-are-skills)

---

## Summary

Claude Skills transform how you work with AI:

1. **Skills are dynamic**—they load only when needed
2. **Skills are powerful**—they can include scripts, templates, and reference materials
3. **Skills are shareable**—create once, use everywhere

Start with a simple Skill for a task you do frequently. As you get comfortable, add scripts and expand capabilities.

The investment of creating a Skill pays dividends every time Claude automatically applies your exact workflow—no re-explaining required.

## Related content

- 📘 [**Prompt Engineering for Claude: Best Practices**](https://www.aipaths.academy/en/docs/005_prompt-engineering-best-practices) — The prompting foundation you need before creating advanced Skills
- 📘 [**Claude Context Window: Complete Guide**](https://www.aipaths.academy/en/docs/002_claude-context-window) — Understand how Skills interact with available context
- 📘 [**Context Engineering: The Evolution**](https://www.aipaths.academy/en/docs/012_context-engineering-evolution) — Skills are a form of applied context engineering
- 📝 [**Claude Code vs Cursor**](https://www.aipaths.academy/en/blog/004_claude-code-vs-cursor) — Where Skills work best: environment comparison
