---
# Unique semantic identifier (links EN/ES versions)
content_id: "docs-ai-agents-guide"

# Locale
locale: "en"

# SEO & Display
title: "AI Agents in Claude Code"
description: "Learn how AI agents work in Claude Code, why they matter, and how to leverage them effectively for complex tasks"

# Author
author: "AIPaths Academy"

# Publication dates (ISO 8601 format)
publishedAt: "2025-11-10T00:00:00Z"
updatedAt: "2025-11-10T00:00:00Z"

# Cover image
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/docs/default-hero.jpg"

# Tags (canonical lowercase English IDs)
# IMPORTANT: Both EN/ES versions MUST have IDENTICAL tags
tags:
  - agents
  - beginner
  - context-window
  - claude
---

# Understanding AI Agents in Claude Code

AI agents in Claude Code are specialized subprocesses that autonomously handle complex, multi-step tasks. Think of them as focused experts that can explore, plan, test, and execute specific workflows while you continue working on other things.

## What is an AI Agent?

An AI agent is an autonomous subprocess launched by Claude Code to handle specific types of tasks. Unlike a simple command execution, agents can:

- **Think independently**: Make decisions about next steps without constant guidance
- **Use multiple tools**: Combine file reading, searching, code analysis, and more
- **Work iteratively**: Adjust their approach based on what they discover
- **Run in parallel**: Multiple agents can work simultaneously on different tasks
- **Report back**: Return comprehensive results when they complete their work

**Example scenario:**
Instead of you manually searching for authentication code, reading multiple files, and piecing together how it works, you can launch an Explore agent that autonomously searches, reads relevant files, follows code references, and returns a complete analysis.

## Why AI Agents Matter

### 1. Context Window Efficiency

Claude Code has a context window (the amount of information it can "see" at once). Every file you read, every search result, and every conversation message consumes this window.

**Without agents:**
```
Your context window: [Message 1] [Message 2] [File read] [Search results] [Another file] [More searches]...
→ Context window fills up quickly
→ You lose earlier conversation history
→ Performance degrades
```

**With agents:**
```
Your context window: [Message 1] [Message 2] [Agent launch] [Agent summary]
Agent's context window: [Searches] [File reads] [Analysis] [More searches]...
→ Your context stays clean
→ You get a concise summary instead of raw data
→ Better performance and longer conversations
```

### 2. Parallel Execution

Agents can run simultaneously, dramatically speeding up complex workflows:

```typescript
// Launch multiple agents in parallel
Task("Explore authentication flow") +
Task("Explore database schema") +
Task("Explore API endpoints")
// All three run at once, each with their own context
```

### 3. Specialized Expertise

Each agent type has specific capabilities optimized for certain tasks:

| Agent Type | Best For | Tools Available |
|------------|----------|-----------------|
| **Explore** | Codebase discovery, understanding architecture | File search, grep, read, pattern matching |
| **Plan** | Breaking down complex features, design decisions | All tools, optimized for planning |
| **git-commit-guardian** | Secure commits, reviewing changes | Git commands, security scanning |
| **playwright-browser-tester** | Browser testing, debugging web apps | Playwright, browser automation |

## Agent Types: Task-Based Not Role-Based

**Important principle:** Think about *what needs to be done*, not *who should do it*.

### Common Agent Tasks

#### Explore Agent
**Use when you need to:**
- Understand how a feature is implemented
- Find where specific functionality lives
- Map out code architecture
- Answer "how does X work?" questions

**Example tasks:**
```bash
# Good: Specific exploration tasks
- "Find all API endpoints and how they're authenticated"
- "Explore the user registration flow from frontend to database"
- "Understand how error handling works across the application"

# Bad: Too vague
- "Look at the code"
- "Understand everything about authentication"
```

#### Plan Agent
**Use when you need to:**
- Break down complex implementations
- Design multi-step features
- Make architectural decisions
- Create implementation roadmaps

**Example tasks:**
```bash
# Good: Complex planning needs
- "Plan how to add OAuth authentication to the existing auth system"
- "Design a caching layer for the API with Redis"
- "Break down implementing real-time notifications"

# Bad: Simple tasks that don't need planning
- "Add a console.log statement"
- "Fix a typo"
```

## How the Context Window Works

### Understanding Token Limits

Claude Code (Sonnet 4.5) has a **200,000 token context window**. Approximately:
- 1 token ≈ 4 characters
- 1,000 tokens ≈ 750 words
- Average code file (200 lines) ≈ 1,500-3,000 tokens

**What fills your context window:**
1. **Conversation history**: Every message exchanged
2. **File contents**: Every file read with the Read tool
3. **Search results**: Output from Grep, Glob, etc.
4. **Tool outputs**: Results from bash commands, etc.
5. **System prompts**: Instructions Claude Code uses

### Context Window Best Practices

1. **Start with Agents**: For any exploration or research task, default to using an agent
2. **Direct Reading for Known Files**: Use Read tool when you know exactly which file you need
3. **Batch Operations**: If reading multiple files directly, do it in parallel when possible
4. **Clear Completed Tasks**: Old todo items and conversation history count toward your limit
5. **Restart When Needed**: If context feels cluttered, consider starting a fresh conversation

## Next Steps

Now that you understand AI agents:

1. **Practice with Explore Agent**
   - Try exploring your current project's main features
   - Experiment with different thoroughness levels
   - Compare results with manual exploration

2. **Use Plan Agent for Features**
   - Next time you implement something complex, try planning with an agent first
   - Compare the plan to what you would have done intuitively
   - Iterate on the plan before implementing

3. **Master Parallel Execution**
   - Practice launching multiple agents at once
   - Measure the time savings
   - Notice the context window benefits

---

**Questions?** Open an [issue](https://github.com/aipaths/aipaths-academy-content/issues) or join our community discussions!

