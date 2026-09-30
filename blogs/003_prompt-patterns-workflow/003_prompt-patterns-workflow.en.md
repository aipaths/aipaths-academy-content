---
# Unique semantic identifier (links EN/ES versions)
content_id: "blogs-prompt-patterns-workflow"

# Locale
locale: "en"

# SEO & Display
title: "10 Prompt Patterns That Changed My Claude Workflow"
description: "Discover proven prompt patterns for Claude. Real examples from production code, debugging sessions, and daily development workflows."

# Author
author: "AIPaths Academy"

# Publication dates (ISO 8601 format)
publishedAt: "2025-10-30T00:00:00Z"
updatedAt: "2025-10-30T00:00:00Z"

# Cover image
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/blogs/003_prompt-patterns-workflow/hero.jpg"

# Tags (canonical lowercase English IDs)
# IMPORTANT: Both EN/ES versions MUST have IDENTICAL tags
tags:
  - prompt-engineering
  - productivity
  - workflows
  - claude
  - best-practices

# Reading time estimate
readingTime: 12
---

Six months ago, I was frustrated with Claude. Half my prompts needed multiple iterations, responses were inconsistent, and I spent more time clarifying than actually getting work done. Sound familiar?

Then I discovered something: the problem wasn't Claude—it was how I was talking to it.

After analyzing hundreds of successful and failed prompts, I identified 10 patterns that consistently produce better results. These patterns transformed my workflow from frustrating to incredibly productive. I use them daily for everything from debugging production issues to writing documentation.

**What you'll learn:**
- 10 battle-tested prompt patterns with real examples
- When and why each pattern works
- How to adapt patterns to your specific needs
- Mistakes I made (so you don't have to)

**Time to read:** 12 minutes
**Skill level:** All levels

## Pattern 1: The Sandwich Pattern

**What it is:** Context → Request → Constraints

This pattern drastically improved my results by structuring prompts into three clear layers.

### Before (Failure Rate: 60%)

```
Write a function to validate user input.
```

Result: Generic, incomplete, missing edge cases.

### After (Failure Rate: 5%)

```
[CONTEXT]
I'm building a sign-up form for a B2B SaaS app. Users have been submitting invalid data causing database errors.

[REQUEST]
Write a TypeScript function that validates user registration input.

[CONSTRAINTS]
- Email: valid format, no disposable domains
- Password: min 12 chars, 1 uppercase, 1 number, 1 special char
- Company name: 2-100 chars, alphanumeric and spaces only
- Return detailed error messages for each field
- Use Zod for schema validation
```

### Why It Works

The sandwich pattern separates concerns: Claude understands WHY (context), WHAT (request), and HOW (constraints) independently. This reduces ambiguity and produces more precise results.

### When to Use

- Feature implementation
- Code generation
- Content creation
- Any complex, multi-faceted request

## Pattern 2: The Example-First Pattern

**What it is:** Show, don't tell

I learned this after wasting hours explaining format requirements that one example would have made crystal clear.

### The Transformation

**Before:**
```
Convert the API response to a cleaner format.
```

**After:**
```
Transform API responses into a clean format. Here's an example:

Input:
{
  "usr_nm": "john_doe",
  "usr_eml": "john@example.com",
  "acc_sts": 1,
  "crt_dt": "2024-01-15T10:30:00Z"
}

Expected Output:
{
  "username": "john_doe",
  "email": "john@example.com",
  "accountStatus": "active",
  "createdAt": "2024-01-15T10:30:00Z"
}

Now transform this response:
[paste actual response]
```

### Why It Works

Examples eliminate ambiguity. Claude sees the exact pattern, format, and transformations you want. This is especially powerful for data transformations, formatting, and style matching.

### Real-World Win

I used this pattern to generate 50+ test fixtures. Instead of explaining the format, I provided 2 examples and asked for 48 more. Saved me 3 hours of manual work.

### When to Use

- Data transformations
- Format specifications
- Style matching
- Code patterns
- Any time "just like this" is clearer than explaining

## Pattern 3: The Role Assignment Pattern

**What it is:** Give Claude a specific expertise

This pattern changed how I approach code reviews and architectural decisions.

### The Pattern

```
You are a [specific role] with [specific expertise].

[Task in the context of that role]

Focus on [role-specific concerns].
```

### Real Examples That Worked

**Security Review:**
```
You are a senior security engineer specializing in web application security and OWASP Top 10 vulnerabilities.

Review this authentication endpoint for security issues:

[paste code]

Focus specifically on:
- Authentication bypasses
- SQL injection vectors
- XSS vulnerabilities
- Insecure token handling
- Rate limiting gaps
```

**Performance Optimization:**
```
You are a performance engineer specializing in React applications with 10+ years optimizing production apps.

This component re-renders too frequently. Analyze why and suggest specific optimizations:

[paste component]

Focus on:
- Unnecessary re-renders
- Expensive computations
- Memory leaks
- Bundle size impact
```

**Database Design:**
```
You are a database architect specializing in PostgreSQL at scale.

Review this schema for a multi-tenant SaaS app:

[paste schema]

Focus on:
- Query performance at 1M+ rows
- Index strategy
- Partition opportunities
- N+1 query risks
```

### Why It Works

Roles activate specific "knowledge domains" and evaluation criteria. A security expert looks for different things than a performance engineer. The role focuses Claude's analysis on what matters for your specific concern.

### When to Use

- Code reviews
- Architectural decisions
- Specialized analysis
- Expert-level feedback
- Domain-specific tasks

## Pattern 4: The Step-by-Step Breakdown Pattern

**What it is:** Explicitly outline the process

Complex tasks fail when treated as single monolithic requests. Breaking them into steps dramatically improved my success rate.

### Real Example: API Implementation

**Before (Failed):**
```
Build a REST API for a blog.
```

Result: Generic boilerplate that didn't fit my needs.

**After (Success):**
```
Let's build a REST API for a blog step-by-step. I'll ask you to complete each step before moving to the next.

Step 1: Design the data models
- Post (title, content, authorId, publishedAt, status)
- Author (name, email, bio)
- Comment (content, authorName, postId, createdAt)

Create the Prisma schema with proper relations.

[Wait for response, review, then continue...]

Step 2: Define the API routes following RESTful conventions
[And so on...]
```

### Why It Works

- Each step has a clear, focused goal
- You can verify correctness before proceeding
- Easy to adjust based on intermediate results
- Prevents overwhelming Claude with too much at once
- Builds complex solutions incrementally

### When to Use

- Multi-step implementations
- Complex refactoring
- System design
- Migration projects
- Anything that takes >15 minutes to complete

## Pattern 5: The Constraint-First Pattern

**What it is:** Define boundaries before asking

I learned this the hard way after Claude suggested solutions that violated our production constraints.

### The Pattern

```
CONSTRAINTS (Do not violate these):
- [Hard constraint 1]
- [Hard constraint 2]
- [Hard constraint 3]

PREFERENCES (Nice to have):
- [Preference 1]
- [Preference 2]

Given these constraints, [your request]
```

### Real Example

```
CONSTRAINTS (Do not violate):
- Must work in Node.js 16 (can't upgrade yet)
- Cannot add new npm dependencies (corporate policy)
- Must complete in &lt;100ms (P99 latency requirement)
- Can't modify database schema (migration freeze)

PREFERENCES (Nice to have):
- Readable code over clever optimizations
- Minimal memory footprint

Given these constraints, optimize this slow API endpoint:
[paste code]
```

### Before vs After

**Before:** Claude suggested solutions requiring new dependencies or breaking changes.

**After:** Claude worked within constraints, found creative solutions using existing tools.

### Why It Works

Constraints prevent wasted iterations. Claude knows exactly what's off-limits and can focus on viable solutions.

### When to Use

- Production systems with restrictions
- Legacy codebases
- Regulated environments
- Time-sensitive fixes
- Budget or resource constraints

## Pattern 6: The Format Lock Pattern

**What it is:** Specify exact output structure

This pattern eliminated 90% of my "reformat this" follow-up requests.

### The Pattern

```
Respond in EXACTLY this format:

[Specify structure with examples]

Do not add commentary outside this format.
```

### Real Examples

**For Code Reviews:**
```
Review this code. Respond in EXACTLY this format:

## Security Issues
- [Issue 1]: [Description] | Severity: [Critical/High/Medium/Low]
  Fix: [Specific code change]

## Performance Issues
- [Issue 1]: [Description] | Impact: [High/Medium/Low]
  Fix: [Specific optimization]

## Best Practices
- [Issue 1]: [What to improve]
  Suggestion: [Better approach]

If no issues in a category, write "None found."
```

**For Bug Reports:**
```
Analyze this bug and respond in this JSON format:

{
  "rootCause": "single sentence explanation",
  "whyItHappens": "detailed explanation",
  "fix": "specific code solution",
  "preventionTips": ["tip 1", "tip 2"],
  "relatedIssues": ["issue 1", "issue 2"]
}
```

**For Documentation:**
```
Write API documentation in this format:

# Endpoint Name

## Overview
[One paragraph description]

## Request
```http
[Example HTTP request]
```

## Response
```json
[Example response]
```

## Parameters
| Name | Type | Required | Description |
|------|------|----------|-------------|

## Error Codes
| Code | Meaning | Resolution |
|------|---------|------------|

## Code Example
```javascript
[Complete, runnable example]
```
```

### Why It Works

Format specifications make responses immediately usable. No reformatting, no restructuring—just copy and use.

### When to Use

- Code reviews
- Documentation generation
- Data extraction
- Report generation
- Any repeated task with standard output

## Pattern 7: The Debugging Protocol Pattern

**What it is:** Structured problem-solving framework

This pattern cut my debugging time in half by ensuring Claude had all necessary context upfront.

### The Template

```
## Bug Report

**Error:**
[Exact error message or unexpected behavior]

**Expected:**
[What should happen]

**Context:**
- Environment: [dev/staging/prod]
- Stack: [languages, frameworks, versions]
- Recent changes: [what changed before bug appeared]

**Code:**
```text
[relevant code snippet]
```

**What I've Tried:**
1. [Attempt 1] - [Result]
2. [Attempt 2] - [Result]

**Please:**
1. Identify the root cause
2. Explain why it's happening
3. Provide the fix
4. Suggest how to prevent similar issues
```

### Real Success Story

**My Bug:**
```
## Bug Report

**Error:**
PostgreSQL error: "column 'user_id' does not exist"

**Expected:**
Query should return user's posts with author information

**Context:**
- Environment: production (works in dev!)
- Stack: Node.js 18, PostgreSQL 14, Prisma 4.2
- Recent changes: added new 'userId' column to posts table yesterday

**Code:**
```sql
SELECT posts.*, users.name
FROM posts
JOIN users ON posts.user_id = users.id
WHERE users.id = $1;
```

**What I've Tried:**
1. Verified migration ran - shows as complete in Prisma
2. Checked database directly - column exists in table
3. Restarted application - still failing

**Please:**
[Ask Claude for help]
```

**Claude's Response:**
Immediately spotted the issue: case sensitivity! Production database had `userId` (camelCase) but query used `user_id` (snake_case). Development database wasn't case-sensitive, masking the issue.

### Why It Works

Complete context prevents the "I need more information" loop. Claude can diagnose issues immediately instead of playing 20 questions.

### When to Use

- Production bugs
- Mysterious errors
- Environment-specific issues
- Complex debugging scenarios

## Pattern 8: The Progressive Refinement Pattern

**What it is:** Iterate intelligently through conversation

Instead of trying to get everything perfect in one shot, this pattern builds solutions progressively.

### The Flow

```
Request 1: Basic version
[Claude provides foundation]

Request 2: "Good. Now add [specific enhancement]"
[Claude enhances]

Request 3: "Perfect. Now optimize for [specific concern]"
[Claude optimizes]

Request 4: "Final step: add [finishing touches]"
[Claude completes]
```

### Real Example

**Step 1:**
```
Write a React hook to fetch user data from an API.
```

**Step 2:**
```
Good start. Now add:
- Loading state
- Error handling
- Automatic retry on failure
```

**Step 3:**
```
Great. Now add TypeScript types and handle these edge cases:
- User not found (404)
- Network timeout
- Invalid response format
```

**Step 4:**
```
Final touches:
- Add React Query integration
- Include cache configuration
- Add JSDoc comments
```

### Why It Works

- Each iteration is focused and manageable
- You can verify correctness at each stage
- Easy to adjust direction based on results
- Prevents overwhelming requests
- Builds complex solutions naturally

### When to Use

- Exploratory development
- Complex features
- When requirements aren't fully clear
- Learning new patterns
- Iterative improvement

## Pattern 9: The Meta-Prompt Pattern

**What it is:** Ask Claude to help you write better prompts

This meta-pattern helped me discover many of the patterns in this article.

### How to Use It

```
I want to ask you to [high-level goal], but I want to make sure my prompt is effective.

My current prompt is:
"[your current prompt]"

This seems [too vague/too specific/missing something].

Help me:
1. Identify what's unclear or missing
2. Ask clarifying questions
3. Rewrite it as an effective prompt
```

### Real Example

**Me:**
```
I want to ask you to help me refactor some code, but I want to make sure my prompt is effective.

My current prompt is: "Make this component better"

This is too vague. Help me rewrite it.
```

**Claude:**
```
You're right, that's too vague. Let me ask clarifying questions:

1. What specific issues exist? (performance, readability, bugs?)
2. What constraints? (can't change API, must maintain compatibility?)
3. What's the context? (component's role, tech stack, scale?)
4. What does "better" mean to you?

Once you answer these, here's how I'd structure the prompt:

"Refactor this [component name] in our [tech stack].

Current issues:
- [Issue 1]
- [Issue 2]

Goals:
- [Goal 1]
- [Goal 2]

Constraints:
- [Constraint 1]
- [Constraint 2]

[Component code]"
```

### Why It Works

Claude understands prompt engineering and can help you craft better requests. It's like having a prompt engineering tutor available 24/7.

### When to Use

- Learning prompt engineering
- Optimizing repeated workflows
- When stuck on how to ask something
- Building prompt templates

## Pattern 10: The Test-Driven Prompt Pattern

**What it is:** Define success criteria upfront

Inspired by TDD, this pattern ensures responses meet your actual needs.

### The Structure

```
I need [goal].

Success criteria (response must meet ALL):
✓ [Specific requirement 1]
✓ [Specific requirement 2]
✓ [Specific requirement 3]

Test cases (must handle all):
- Case 1: [Input] → [Expected output]
- Case 2: [Input] → [Expected output]
- Edge case: [Input] → [Expected behavior]

[Your actual request]

After responding, verify your solution meets all criteria.
```

### Real Example

```
I need a function to calculate shipping costs.

Success criteria:
✓ Returns a number (USD cents)
✓ Handles all 50 US states
✓ Accounts for weight and dimensions
✓ Applies regional multipliers
✓ Includes type hints (TypeScript)
✓ Has unit tests

Test cases:
- CA, 1lb, 6x4x2: → $895
- NY, 5lb, 12x12x6: → $1450
- HI, 2lb, 8x8x4: → $2100 (Hawaii premium)
- Invalid state: → throws error

Write the function and tests.

After writing, verify it meets all 6 criteria.
```

### Why It Works

- Clear definition of "done"
- Testable requirements
- Forces completeness
- Catches edge cases upfront
- Claude self-validates

### When to Use

- Critical functions
- Public APIs
- Production code
- Complex logic
- When precision matters

## Combining Patterns

The real magic happens when you combine patterns. Here's how I use them together:

### Example: Building a Feature

```
[ROLE] You are a senior full-stack developer.

[SANDWICH - CONTEXT]
I'm building a real-time notification system for a social media app. Users report missing notifications.

[CONSTRAINTS]
- Must work with existing WebSocket infrastructure
- Can't modify database schema (migration freeze)
- Must handle 10,000 concurrent users
- Maximum 100ms latency

[STEP-BY-STEP]
Let's approach this in stages:

Stage 1: Diagnose the current system
[Current code]

Identify why notifications are being missed.

[FORMAT LOCK]
Respond in this format:
- Root Cause: [diagnosis]
- Evidence: [what indicates this]
- Impact: [how it affects users]
- Confidence: [High/Medium/Low]

[TEST-DRIVEN]
After your analysis, propose a solution that:
✓ Guarantees delivery
✓ Handles connection drops
✓ Maintains order
✓ Stays under 100ms
✓ Doesn't require schema changes
```

### The Result

By combining patterns, I get focused, structured, verifiable solutions that meet all requirements. This approach saves hours of back-and-forth.

## Common Mistakes I Made (And How to Avoid Them)

### Mistake 1: Being Too Polite

**Don't:** "Could you please maybe help me write a function if it's not too much trouble?"

**Do:** "Write a function to validate email addresses."

Claude doesn't need pleasantries. Be direct and save tokens.

### Mistake 2: Asking Multiple Things at Once

**Don't:** "Write a function, explain how it works, and also tell me about error handling best practices."

**Do:** Break into separate prompts. Complete one thing well before moving to the next.

### Mistake 3: Not Checking Claude's Understanding

**Don't:** Assume Claude interpreted your prompt correctly.

**Do:** Start with "Confirm you understand: I need [restate key requirement]"

### Mistake 4: Ignoring First Responses

**Don't:** Keep asking the same thing differently.

**Do:** Use progressive refinement. Build on what works.

### Mistake 5: Not Saving What Works

**Don't:** Recreate prompts from scratch every time.

**Do:** Build a personal prompt library. Document patterns that work.

## Building Your Prompt Library

Start collecting prompts that work for you:

```markdown
## My Prompt Library

### Code Review (Security Focus)
```
You are a security engineer. Review this code for vulnerabilities:
[code]
Focus on: [security concerns]
Format: Table with Issue | Severity | Fix
```

### Bug Diagnosis
```
[Use Debugging Protocol Pattern]
```

### API Documentation
```
[Use Format Lock Pattern for API docs]
```
```

**Benefits:**
- Saves time on repeated tasks
- Ensures consistency
- Improves over time
- Easy to share with team

## Measuring Improvement

Track your prompt effectiveness:

**Metrics I Use:**
- First response success rate
- Number of clarifying questions needed
- Time from prompt to usable result
- Consistency across similar tasks

**Before these patterns:**
- Success rate: ~40%
- Average iterations: 3-4
- Time to result: 15-20 minutes

**After these patterns:**
- Success rate: ~85%
- Average iterations: 1-2
- Time to result: 5-8 minutes

## Conclusion

These 10 patterns transformed my Claude workflow from frustrating to incredibly productive:

1. **Sandwich Pattern**: Context → Request → Constraints
2. **Example-First Pattern**: Show, don't tell
3. **Role Assignment Pattern**: Give specific expertise
4. **Step-by-Step Breakdown**: Divide complex tasks
5. **Constraint-First Pattern**: Define boundaries upfront
6. **Format Lock Pattern**: Specify exact output structure
7. **Debugging Protocol Pattern**: Structured problem-solving
8. **Progressive Refinement Pattern**: Iterate intelligently
9. **Meta-Prompt Pattern**: Ask Claude for help writing prompts
10. **Test-Driven Prompt Pattern**: Define success criteria upfront

**Key takeaways:**
- Good prompts are structured, not longer
- Examples eliminate ambiguity
- Constraints prevent wasted iterations
- Roles activate specialized knowledge
- Format specifications make output immediately usable
- Combining patterns creates powerful workflows

### What's Next?

1. **Pick one pattern** to practice this week
2. **Track your results** before and after
3. **Build your prompt library** as you discover what works
4. **Share and learn** from others' patterns
5. **Iterate continuously** as you get better

## Further Reading

- 📘 [**Prompt Engineering for Claude: Best Practices**](https://www.aipaths.academy/en/docs/005_prompt-engineering-best-practices) — The complete guide behind these patterns
- 📘 [**Claude Context Window: Complete Guide**](https://www.aipaths.academy/en/docs/002_claude-context-window) — Understand how context affects prompt quality
- 📘 [**Building MCP Servers**](https://www.aipaths.academy/en/docs/004_building-first-mcp-server) — Extend Claude capabilities with custom tools
- 📘 [**Claude Skills: Customize Workflows**](https://www.aipaths.academy/en/docs/011_claude-skills-guide) — Turn these patterns into reusable Skills
- [Anthropic Prompt Engineering Guide](https://docs.anthropic.com/claude/docs/prompt-engineering)

---

**Found this helpful?** Share it with your team!

**Have a pattern that works great for you?** Drop a comment below or [open an issue on GitHub](https://github.com/aipaths/aipaths-academy-content/issues)!

**Want to see more examples?** Check out our [Anthropic Cookbook examples](https://github.com/anthropics/anthropic-cookbook).
