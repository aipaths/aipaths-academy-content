---
content_id: "blogs-vibe-coding-context-engineering-agentic-engineering"
locale: "en"
title: "From Vibe Coding to Context Engineering to Agentic Engineering: The Evolution Nobody Saw Coming"
description: "In 14 months, the way we program with AI went through three distinct eras: vibe coding, context engineering, and agentic engineering. The complete story of how each term changed the rules of the game."
author: "AIPaths Academy"
publishedAt: "2026-03-14T12:07:58.960Z"
updatedAt: "2026-03-14T12:07:58.960Z"
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/blogs/019_vibe-coding-context-engineering-agentic-engineering/hero.png"
tags:
  - ai-agents
  - vibe-coding
  - agentic-engineering
  - news
readingTime: 6
---

In February 2025, Andrej Karpathy — OpenAI co-founder and former AI leader at Tesla — published a tweet that changed the tech industry's vocabulary. He described a new way of programming where you "fully give in to the vibes, embrace exponentials, and forget that the code even exists."

He called it vibe coding. And that's how it all started.

Fourteen months later, that same term has already outgrown itself. The industry moved from "let AI write everything" to two more sophisticated concepts: context engineering and agentic engineering. Each one marks a different era in the relationship between humans and artificial intelligence for building software.

## Era 1: Vibe Coding — "Forget the code" (February 2025)

Karpathy didn't invent the practice — he invented the perfect name for something already happening. Millions of people were using ChatGPT, Claude, and Copilot to generate code without understanding what it did. You asked the AI for something, accepted what it gave you, and if it worked, done. If not, paste the error and repeat.

The key definition comes from Simon Willison, Django creator: "If an LLM wrote every line of your code, but you've reviewed, tested, and understood it all, that's not vibe coding — that's using an LLM as a typing assistant." What defines vibe coding is accepting code without understanding it.

The impact was immediate: Merriam-Webster listed it as "slang & trending" in March 2025. Y Combinator reported 25% of its Winter 2025 startups had codebases 95% AI-generated. Collins Dictionary named it Word of the Year 2025. Even Linus Torvalds admitted to vibe coding a Python tool in January 2026.

But the hangover came fast. In September 2025, Fast Company titled "The vibe coding hangover is upon us," documenting how senior engineers described "development hell" working with AI-generated code nobody understood. A Reddit post from a 20-year IT consultant accumulated 749 upvotes asking: "Have we already lost the professional battle against vibe coding?" He'd been rejected from a global fintech interview because he "didn't use AI enough."

Vibe coding proved something powerful: anyone could create functional software with AI. But it also proved its limit: code nobody understands is code nobody can maintain.

## Era 2: Context Engineering — "It's not what you say, it's what it knows" (June 2025)

Four months after creating "vibe coding," the same Karpathy introduced another concept. In a June 2025 tweet, he declared he preferred talking about context engineering instead of prompt engineering. It wasn't a cosmetic rename — it was a paradigm shift.

The difference is fundamental: prompt engineering = finding the right words for your instruction. Context engineering = designing everything the model receives — instructions, tools, external data, history, memory.

Anthropic (Claude's creators) published a technical article that formalized the concept: "Context engineering is the art and science of curating what goes into the limited context window from a constantly evolving universe of possible information."

Why does it matter? Because LLMs have what Anthropic calls an "attention budget." Each additional token in the context reduces the model's ability to pay attention to what really matters. A ChromaDB study found 11 of 12 models fell below 50% performance with 32K token contexts. Microsoft documented drops from 90% to 51% accuracy in long conversations. More context ≠ better results. After a certain point, performance degrades — they call it "context rot."

The key principles: minimum high-signal tokens, just-in-time context, right altitude in prompts, and well-scoped tool design. Context engineering marked the transition from "talking to AI well" to "designing the information system that surrounds the AI." You were no longer a prompt DJ — you were a context architect.

## The interlude: Vibe Engineering — the bridge that didn't cross (October 2025)

Simon Willison, one of the most respected voices in the AI development community, proposed "vibe engineering" in October 2025. The idea was to reclaim "vibe" (already cultural) and add "engineering" to signal discipline. But as Addy Osmani (Google engineering lead) would later explain: "The word 'vibe' carries too much baggage. It signals casualness. When you tell a CTO you're 'vibe engineering' their payment system, you can see the concern on their face."

## Era 3: Agentic Engineering — "AI executes, you direct" (February 2026)

In February 2026, exactly one year after creating "vibe coding," Karpathy closed the cycle. He proposed a new term: agentic engineering. And this time, the community aligned almost immediately. Why did it work? Because it describes exactly what's happening: you're orchestrating AI agents while acting as architect, reviewer, and decision-maker. And you're applying engineering discipline throughout.

Addy Osmani wrote the definitive article: "Vibe coding = YOLO. Agentic engineering = AI does the implementation, the human owns the architecture, quality, and correctness." Simon Willison pivoted immediately: "It looks like 'agentic engineering' is coming out on top. I have a new tag for that and I'm working on a patterns book."

The workflow: start with a plan (spec/design doc before any code), direct and review (well-scoped tasks, review every diff like a human PR), test relentlessly (the biggest differentiator — agents iterate until tests pass), own the codebase (documentation, version control, CI, monitoring).

## The irony: AI rewards good engineers more

Agentic engineering disproportionately benefits senior engineers. If you have solid fundamentals, AI is a brutal force multiplier. As Osmani summarizes: "Agentic engineering isn't easier than traditional engineering — it's a different kind of hard. You're trading typing time for review time, implementation effort for orchestration skill." Better spec → better AI output. Better tests → more confidence to delegate. Cleaner architecture → fewer hallucinations. AI didn't cause the discipline problem — it exposed one that always existed.

## Complete timeline: 14 months that redefined software engineering

📅 February 2025 — Karpathy coins "vibe coding" on X. Describes programming by "giving in to the vibes" without reviewing code.
📅 March 2025 — Merriam-Webster lists it as trending. Y Combinator reports 95% AI-generated codebases in 25% of startups.
📅 June 2025 — Karpathy tweets preferring "context engineering" over "prompt engineering." Anthropic publishes technical article formalizing the concept.
📅 September 2025 — Fast Company declares the "vibe coding hangover." Senior engineers describe "development hell."
📅 October 2025 — Willison proposes "vibe engineering." Collins Dictionary names "vibe coding" Word of the Year.
📅 February 2026 — Karpathy proposes "agentic engineering." Osmani writes the definitive article. Willison pivots to the new term. The industry aligns.

## Where all this is heading

The progression isn't accidental. Each era solved the previous one's limitations: vibe coding democratized software creation but generated unmaintainable code. Context engineering taught that AI quality depends on context design, not just prompt words. Agentic engineering integrated everything into a professional framework where AI executes and the human directs.

The trend points to the programmer's role mutating but not disappearing. It looks less and less like "writing code" and more like a mix of architect, technical director, and senior reviewer. Those who'll thrive are the ones who think most clearly about what they're building and why — then use every available tool, including AI agents, to build it well.

As Osmani wrote: "Vibe coding showed us what's possible when you drop all conventions. Now it's time to bring the engineering back."
