---
content_id: "blogs-cursor-composer-2-modelo-codigo-barato"
locale: "en"
title: "Cursor Composer 2: The Model That Rivals Claude Opus at 10x Less"
description: "Cursor launched Composer 2, its own code-specialized AI model. It matches Claude Opus 4.6 on coding benchmarks at a tenth of the price. What this means for AI agent costs."
author: "AIPaths Academy"
publishedAt: "2026-03-20T16:07:37.049Z"
updatedAt: "2026-03-20T16:07:37.049Z"
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/blogs/021_cursor-composer-2-modelo-codigo-barato/hero.png?v=1774029737"
tags:
  - news
  - ai-agents
  - coding
  - cursor
readingTime: 5
---

Cursor just launched something that changes the game: Composer 2, their own AI model for code. Not a wrapper on Claude. Not a GPT integration. A proprietary model, trained from scratch to program.

What's interesting isn't just that it works well — it costs 10 times less than the competition. At a time when everyone's asking how to keep AI costs under control, Cursor just proved that quality and price don't have to be at odds.

## The numbers that matter

First, the prices per million tokens (what you actually pay when using these models):

- Composer 2: $0.50 input / $2.50 output

- Composer 2 Fast: $1.50 input / $7.50 output

- Claude Opus 4.6: $5.00 input / $25.00 output

- GPT-5.4: $2.50 input / $15.00 output

Read those numbers again. Composer 2 costs 10x less than Claude Opus on both input and output. Even the Fast version (which ships as default) costs less than GPT-5.4.

Now the benchmarks — because cheap is useless if it doesn't work:

- CursorBench (general coding): Composer 2 = 61.3 vs Opus 4.6 = 58.2 vs GPT-5.4 Thinking = 63.9

- Terminal Bench 2.0 (terminal tasks): Composer 2 = 61.7 vs Opus 4.6 = 58.0

- SWE-bench Multilingual (software engineering): Composer 2 = 73.7 vs Opus 4.6 = 77.8

Composer 2 beats Claude Opus on 2 out of 3 coding benchmarks. And where it loses (SWE-bench), the gap is only 4 points. At a tenth of the price.

To put it in perspective: if your code agent spends $200/month on Claude Opus tokens, switching to Composer 2 could bring you down to $20/month doing the exact same work.

## Why a code-only model?

Aman Sanger, Cursor's co-founder, was blunt with Bloomberg: "It won't help you do your taxes. It won't be able to write poems."

And that's exactly the strategy. Claude and GPT are generalist models — they know everything from poetry to quantum physics. That makes them incredibly versatile, but also incredibly expensive to train and operate.

Composer 2 is different. It's trained exclusively on code data. All its knowledge, all its reasoning capacity, is focused on one thing: programming well. And by not needing to "know everything," the model can be smaller, faster, and cheaper.

The technique behind it is reinforcement learning on "long-horizon" coding tasks — problems that require hundreds of individual actions to solve. It's not just "complete the next line" but "understand the complete codebase, plan a solution, and execute it step by step." It's a code agent, not an autocomplete.

## The pattern we're seeing

Cursor isn't the first company to do this, but they demonstrate it best. The pattern is clear: specialized tools are stopping their reliance on OpenAI and Anthropic to create their own models.

Why does this matter for you as a user?

- More competition = lower prices. If Cursor can offer similar quality at 10x less, OpenAI and Anthropic will have to respond.

- Specialized models > generalist models for specific tasks. You don't need a model that can write essays to help you code.

- The concept of model routing becomes more relevant. Use Composer 2 for code tasks and Claude/GPT for everything else. That combination gives you the best quality at the lowest cost.

## What this means for AI agent users

If you use AI agents for development (like the ones we build with OpenClaw), Composer 2 opens an interesting possibility: an agent that codes at enterprise level for a fraction of the cost.

The key is the model routing we explain in our cost optimization guide: don't use the same model for everything. Use Composer 2 (or similar budget models) for code tasks — which are probably 60-70% of what your agent does — and reserve premium models for complex decisions requiring generalist reasoning.

The launch of Composer 2 also confirms something we've been saying: AI for programming isn't going to get more expensive over time — it's going to get cheaper. Much cheaper. And those who don't optimize their costs today will be paying 10x more than necessary while the competition runs lighter.

Composer 2 isn't perfect. It won't replace Claude for complex reasoning or GPT for tasks mixing code with natural language. But for 80% of pure programming work — writing functions, refactoring code, fixing bugs — it's more than enough. And at those prices, the question isn't whether it's worth trying. It's why you're not using it already.

## Related content

- 📘 [**How to Optimize Your AI Agent Costs**](https://www.aipaths.academy/en/docs/027_optimizar-costos-agente-ia) — Model routing, prompt caching and strategies to cut your bill in half

- 📝 [**From Vibe Coding to Agentic Engineering**](https://www.aipaths.academy/en/blog/019_vibe-coding-context-engineering-agentic-engineering) — The evolution of coding with AI that led to models like Composer 2

- 📝 [**Claude Code vs Cursor: Which Assistant to Choose?**](https://www.aipaths.academy/en/blog/004_claude-code-vs-cursor) — Comparison with a new factor: Cursor now has its own model

- 📘 [**Agentic Engineering: The Complete Framework**](https://www.aipaths.academy/en/docs/024_agentic-engineering-framework) — The principles behind code agents like Composer 2
