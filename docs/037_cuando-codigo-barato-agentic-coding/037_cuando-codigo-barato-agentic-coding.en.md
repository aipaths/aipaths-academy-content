---
content_id: "docs-cuando-codigo-barato-agentic-coding"
locale: "en"
title: "When Code Gets Cheap: What to Do in the Age of Agentic Coding"
description: "If AI can write code fast, the advantage is no longer writing more code. It is designing better systems, tests, criteria, and maintenance workflows."
published: false
author: "AIPaths Academy"
publishedAt: "2026-06-04T12:07:35.395Z"
updatedAt: "2026-06-04T12:07:35.395Z"
tags:
  - agentic-coding
  - desarrollo-ia
  - agentes-ia
  - software
  - spec-driven-development
---
## Core idea

Coding agents like Codex, Claude Code, Cursor, and Kiro are lowering the cost of producing software. They can read repositories, edit files, run tests, fix errors, and deliver complete changes. They still fail. They still need supervision. They still do not replace technical judgment. But they have changed the question.

Before, we asked: **"Can I write this code?"**

Now the more important question is: **"If code is cheap, which parts of the work are still expensive?"**

The answer is intent, architecture, validation, security, maintenance, and product judgment. Code got cheaper. Reliable systems did not.

This guide adapts the ideas from Drew Breunig's "10 Lessons for Agentic Coding" for builders, solopreneurs, and small teams that want to move faster with AI without creating fragile software.

## 1. Use cheap code to learn, not to accumulate

When implementation costs less, coding stops being only production. It becomes research. You can ask an agent for a simple version, a more robust version, or a disposable prototype to discover which decisions were hidden inside the idea.

That shift matters. In the past, a spec had to anticipate a lot because building was expensive. Now a first implementation can help expose where the idea was incomplete.

Example: you want to automate WhatsApp leads into a CRM. In the brief, it sounds simple: receive a message, extract data, save the lead, and notify the team. But once you build, the real decisions appear: voice notes, split messages, duplicate contacts, users asking for a human, different countries, required fields, and permissions.

The code does not just execute the idea. It interrogates it.

The practical rule: do not use agents only to close tickets. Use them to reveal decisions you do not yet know how to formulate.

## 2. Rebuild more often, but only with contracts

When writing code was expensive, rewriting was a heavy decision. Today, an agent can rebuild a module in minutes or hours. That lets you compare approaches instead of arguing about abstractions: one simpler version, one more modular version, one easier-to-test version.

But rebuilding without contracts creates motion, not progress. If you do not know which behavior must stay true, each reimplementation can break something different.

The contract does not have to start as a perfect unit test suite. For a small team, it can be a set of end-to-end checks: if a message shows buying intent, create a lead; if the email is missing, ask for confirmation; if the contact already exists, do not duplicate it; if the user asks for a person, escalate.

That kind of contract protects what matters: product behavior. It lets you tell the agent: "you can change the implementation, but this must remain true."

The freedom to rebuild depends on the quality of your tests. Without tests, cheap code becomes debt that is cheap to create and expensive to understand.

## 3. Keep spec, tests, and code in sync

Agentic development accelerates a classic source of debt: documentation gets old before anyone looks at it. The agent changes code, adjusts tests, changes flows, and the original spec still says something else.

Breunig suggests thinking in a triangle: **spec, tests, and code**. The spec explains what we want and why. The tests validate whether it works. The code implements the decision. When one part changes, the other two need to be reviewed.

This sounds obvious, but it becomes critical when changes are cheap to produce. Debt does not appear only because a line is wrong. It appears when the system loses coherence.

That is also why documenting intent matters more than documenting instructions. An agent might see an extra validation and remove it because it looks redundant, without knowing that it prevents garbage leads. It might simplify a strange-looking flow without knowing that it exists because of a legal, commercial, or support constraint.

You do not need an encyclopedia. A well-maintained `SPEC.md`, `DECISIONS.md`, or `AGENTS.md` can be enough. The important part is capturing decisions an agent could accidentally reverse because it lacks context: why clarity was prioritized over performance, why the final customer reply is not automated, why a table exists even if it looks duplicated.

A useful closing habit: ask the agent to summarize new decisions, changed behavior, tests that should exist, and documentation that may need updates. Then you decide what stays. The agent detects gaps. Human judgment still owns the system.

## 4. Look for the hard parts: that is where your advantage is

Cheap code removes a lot of mechanical work: boilerplate, CRUD, controlled refactors, repetitive components, simple migrations, internal scripts, and common integrations.

That frees time, but it also exposes the hard parts faster: choosing the right problem, designing a usable flow, defining permissions, protecting data, thinking through failures, keeping observability, deciding what not to automate, and understanding which decisions will be expensive to change later.

Anyone can request a screen. Fewer people can decide whether that screen should exist, which edge case breaks the business, which behavior needs consistency, and which decision will be expensive to reverse in six months.

For builders, the advantage is no longer producing more lines. It is knowing where to put attention.

When the agent solves the easy part, do not use that speed to add complexity by reflex. Use it to reach the important questions sooner: what happens if a dependency fails, which sensitive data the flow touches, what a human needs to understand before trusting this automation, and which part should not be automated yet.

## 5. Automate repeatable tasks, not unclear decisions

Agentic coding makes it tempting to automate everything: reviews, tickets, tests, deploys, changelogs, documentation, subagents, and control flows. Some automations are excellent. Others only hide complexity behind another layer.

Good automation reduces cognitive load. Bad automation creates an opaque system where nobody knows who decided what, where something failed, or how to turn it off.

The question is not "can I automate this?" The question is "is this process already clear manually?" If you do not yet know how to review a feature well, do not automate the whole review. Start with concrete checks: typecheck, tests, link validation, screenshots, environment variables, expected logs, and a basic permissions review.

Automation should turn judgment into process. It should not replace judgment that does not exist yet.

## 6. The real cost appears after the merge

The risk of cheap code is that it lowers the friction to say yes: another feature, another integration, another custom flow, another microservice, another internal automation.

But every piece that lives in production brings support, bugs, data, permissions, migrations, documentation, confused users, alerts, and future decisions constrained by what already exists.

The mature question is not: **"Can the agent build it?"**

The mature question is: **"Do we want to be responsible for this after it exists?"**

Before accepting AI-generated code, check whether you know who maintains it, how failures are detected, which main behavior is protected, which data it touches, which permission it needs, how it can be disabled, and which document explains the intent.

If you cannot answer those questions, you probably do not need more code. You need more clarity.

## A practical workflow for building with agents without losing control

Start every change with a short statement of intent: problem, user, expected outcome, constraints, risks, and what must not change. If you cannot write that, the agent will not have good direction either.

Before editing files, ask for a plan: what it would touch, why, which risks it sees, which tests it recommends, and which questions need to be resolved. This prevents the agent from turning ambiguity into silent changes.

Implement in small cycles. Three reviewable changes are usually better than one giant opaque modification. Agent speed does not justify losing process legibility.

Validate behavior, not only compilation. Build, lint, and typecheck are the floor. On top of that, you need a real test of the flow: a data fixture, an end-to-end test, a screenshot, a guided manual check, or a before-and-after comparison.

At the end, update specs and decisions. If behavior changed, the documentation needs to reflect it. If you accepted debt, make it visible. If a prototype only helped you learn, throw away the code and keep the decision.

## What changes for entrepreneurs and small teams

For AIPaths, this trend matters because it lowers a historical barrier: implementation. An entrepreneur can prototype faster. A technical person can multiply output. A non-technical person can get closer to a real product without waiting months.

But "using AI to code" will become a commodity. The advantage will be having a work system where AI can produce without destroying coherence: better briefs, better specs, better tests, better documentation, better review, and better maintenance.

The market will fill with software generated quickly. Much of it will be fragile, hard to maintain, or superficial. The opportunity is to use cheap code to reach useful, reliable, well-designed software faster.

## Conclusion

Agentic coding does not eliminate the builder's work. It moves it.

Before, much of the effort was turning an idea into code. Now, increasingly, the effort is turning intent into verifiable systems.

When code is cheap, writing code is no longer the center of the game. The center becomes knowing what to build, how to validate it, how to maintain it, and when to say no.

That is the skill that will matter most.

## Sources and recommended reading

- Drew Breunig, ["10 Lessons for Agentic Coding"](https://www.dbreunig.com/2026/05/04/10-lessons-for-agentic-coding.html)
- Drew Breunig, ["The Rise of Spec Driven Development"](https://www.dbreunig.com/2026/02/06/the-rise-of-spec-driven-development.html)
- Drew Breunig, ["Keeping the Spec Driven Development Triangle in Sync"](https://www.dbreunig.com/2026/03/04/the-spec-driven-development-triangle.html)
- LangChain, ["Agentic Engineering: How Swarms of AI Agents Are Redefining Software Engineering"](https://www.langchain.com/blog/agentic-engineering-redefining-software-engineering)
- Google Cloud, ["What is agentic coding?"](https://cloud.google.com/discover/what-is-agentic-coding)
