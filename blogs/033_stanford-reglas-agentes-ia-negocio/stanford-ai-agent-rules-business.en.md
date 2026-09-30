---
content_id: "blogs-stanford-reglas-agentes-ia-negocio"
locale: "en"
title: "Stanford Is Already Writing Rules for AI Agents. Here Is the Lesson for Your Business"
description: "Stanford CS336 published rules for AI agents that help without solving student assignments. Learn what that means for governing agents in your business."
author: "AIPaths Academy"
publishedAt: "2026-08-03T12:00:00.000Z"
updatedAt: "2026-08-03T12:00:00.000Z"
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/blogs/033_stanford-reglas-agentes-ia-negocio/hero.png"
tags:
  - ai-agents
  - ai-coding-tools
  - governance
  - business-automation
readingTime: 11
---

Stanford did not publish another AI paper. It published something more practical: a `CLAUDE.md` file inside the repository for an assignment in CS336, its *Language Modeling from Scratch* course, explaining how AI agents should behave when helping students.

The central rule is simple: the agent should act like a teaching assistant, not a solution generator.

That may sound like an academic detail. It is not.

It is a signal of where real agent usage is going: less free-form prompting, more operational rules attached to the place where the work happens. The agent does not only need technical context. It needs to know its role, what it can do, what it cannot do, when it should refuse, how it should help, and what kind of output would be dangerous even if it looks useful.

For founders and small teams, that is the important part. If you are going to put agents into support, sales, operations, content, code, or internal analysis, connecting a model to your tools is not enough. You need to write the rules of the work.

## What Stanford actually did

The file is called `CLAUDE.md` and lives in the `assignment1-basics` repository, one of the assignments for CS336. The official Spring 2026 course page describes CS336 as a course for building language models from scratch: tokenization, Transformer architecture, optimization, systems, scaling, data, and alignment.

This is not a lightweight assignment. The course makes clear that students write a meaningful amount of Python and PyTorch with limited scaffolding. Assignment 1 includes implementing components such as a tokenizer, the model architecture, and an optimizer to train a Transformer.

In that context, allowing an agent to write complete code would destroy the goal of the course. The student might submit something, but would not learn what they came to learn.

That is why Stanford's rules separate two categories:

- What the agent can do: explain concepts, point to official materials, review code written by the student, suggest invariants, propose tests, help interpret errors, and guide debugging through questions.
- What the agent cannot do: write Python or pseudocode, complete TODOs, edit the repo, run commands, implement core components, turn requirements into functional code, or point to external implementations.

The idea is not "do not use AI." It is "use AI in a way that preserves learning."

That distinction matters.

Many institutions react to AI as if the only options are banning it or surrendering to it. Stanford is doing something more realistic: accepting that students will use agents, while trying to define the right mode of use.

## The part many people will read wrong

The shallow reading is: "Stanford is limiting Claude to prevent cheating."

The useful reading is different: Stanford is turning a human policy into operational instructions for an agent.

That changes the level of the conversation.

Before, an academic policy lived in a PDF, on a course page, or in an explanation from the professor. Now it also lives in the same repository where the agent works. The rule is close to the execution context.

That is the pattern businesses should copy.

If you have an agent answering WhatsApp messages, it should not discover its limits during a conversation with an angry customer. If you have an agent analyzing orders, it should not improvise when an unusual return appears. If you have a coding agent, it should not decide on its own whether it can touch migrations, edit production, or skip tests.

The limits need to be written before the work starts.

## Why this became news

The post moved strongly on Hacker News. The thread about "AI Agent Guidelines for CS336 at Stanford" passed 460 points and more than 140 comments. Another thread about CS336 also received more than 500 points.

The debate was interesting because it shows the real tension.

One group says the bottle is already open; you cannot ask people not to use agents. Another group responds that if the goal is learning, letting the agent solve everything removes the process that builds judgment. A third position also appears: the real world will use AI, so education should teach people how to integrate it without losing understanding.

That third position is the most valuable one for AIPaths.

This is not about going back to how work happened before ChatGPT. It is also not about delegating everything to AI and calling a lack of understanding "productivity."

The advantage is knowing how to direct agents.

## The common mistake: thinking instructions are just prompts

A file like `CLAUDE.md` is not a loose prompt. It is a piece of operational governance.

Anthropic documents `CLAUDE.md` as a way to give Claude Code persistent instructions for a project. GitHub also documents repository instructions for Copilot, including `copilot-instructions.md`, path-specific files, and `AGENTS.md`. In other words, the ecosystem is already moving toward versioned instructions that sit close to the code and the workflow.

For a business, this has a practical implication:

> Every important agent should have a written behavior contract.

Not a nice-looking prompt. An operating contract.

That contract should answer:

- What role the agent has.
- What outcome it is trying to produce.
- What tasks it can perform.
- What tasks it cannot perform.
- What data it can use.
- What actions require human approval.
- What it should do when it does not know.
- How it should verify before answering or acting.
- How it should escalate sensitive cases.

Stanford did this to preserve learning. Your business needs it to preserve trust, money, and control.

## The lesson for founders: do not build generic agents

The worst business agent is the one that tries to be a "general assistant."

At first, it is impressive. It answers everything. It looks flexible. But once you connect it to customers, data, or tools, that flexibility becomes risk.

A support agent should not invent refund policies. A sales agent should not promise discounts that do not exist. An operations agent should not modify orders without checking permissions. A development agent should not change critical files without tests.

The value is not that the model can do something. The value is that the system knows when it should not do it.

Stanford expresses this clearly: even if an agent can write the solution, it should not do so because that contradicts the goal of the environment.

The same thing happens in a business.

An agent could close a sale by promising immediate delivery. But if your team cannot deliver, the agent destroys trust. An agent could answer a legal question with confidence. But if it is wrong, the cost is not just a bad answer. An agent could automate a financial decision. But if it does not understand exceptions, you can lose money.

The question is not "what can AI do?"

The question is: **what should this agent be allowed to do inside this process?**

## How to turn this idea into rules for your business

If you are building an agent, use this simple framework.

### 1. Define the role in one sentence

Stanford does not say "you are an intelligent agent." In practice, it says: you are a teaching assistant, not a solution generator.

That distinction prevents many mistakes.

Business examples:

- "You are a level 1 support assistant, not an authorized representative who can change contracts."
- "You are a sales analyst who prepares information, not a salesperson who approves discounts."
- "You are an operations agent that detects exceptions, not a system that modifies orders without approval."
- "You are a coding assistant that proposes changes and verifies them, not a bot that touches production."

A good role rule includes what the agent is and what it is not.

### 2. Write the list of allowed actions

It is not enough to say "help the user."

Stanford lists allowed behaviors: explain, point to official materials, review already-written code, suggest tests, ask questions, and help interpret errors.

In support, the list could be:

- Answer frequently asked questions using approved documentation.
- Ask for missing information before classifying the case.
- Suggest diagnostic steps.
- Summarize the conversation for a human.
- Create a ticket with a suggested priority.

The clearer the "yes" is, the less the model has to improvise.

### 3. Write the list of forbidden actions

This is the part many prompts avoid because it sounds negative. But it is the part that protects the system.

Stanford forbids writing code, completing TODOs, running commands, and solving core components. Not because the agent cannot do those things, but because it should not.

Useful business prohibitions might be:

- Do not promise refunds without a confirmed policy.
- Do not modify prices.
- Do not send personal data through unapproved channels.
- Do not provide medical, legal, or tax diagnosis as a final answer.
- Do not execute irreversible actions without confirmation.
- Do not invent information if the internal source does not respond.

An agent without clear prohibitions is an employee without onboarding.

### 4. Replace "solve" with "guide" when the goal is learning or judgment

The most interesting part of Stanford's file is that it forces the agent to use questions, tests, and invariants instead of handing over final answers.

That also applies outside the university.

If you are training a team, an agent that gives the exact answer can be worse than one that guides. If you want someone to learn how to review metrics, sell better, or debug an automation, the agent should not jump straight to the result. It should help build judgment.

There are tasks where you want execution. There are tasks where you want learning.

Confusing those two categories is expensive.

### 5. Define human escalation

Stanford's file closes with a sensible rule: when there is doubt, send the student to the course staff or office hours.

Your business needs the equivalent.

Examples:

- If the customer is angry and asks to cancel, escalate.
- If there is legal or tax risk, escalate.
- If the order is above a certain amount, escalate.
- If data is missing and the action would be irreversible, escalate.
- If the agent detects a contradiction between internal sources, escalate.

Escalation is not failure. Escalation is part of the design.

## The minimum template for a serious agent

You can copy this structure for any internal agent:

```md
# Role
You are [specific role]. Your objective is [outcome]. You are not [critical limit].

# You can
- [allowed action 1]
- [allowed action 2]
- [allowed action 3]

# You cannot
- [forbidden action 1]
- [forbidden action 2]
- [forbidden action 3]

# How to help
1. Ask for missing information.
2. Use only approved sources.
3. Suggest the next verifiable step.
4. Explain the reason when refusing an action.
5. Escalate when the case is sensitive or ambiguous.

# Verification
Before answering or acting, check:
- source used,
- confidence,
- impact,
- whether human approval is required,
- next reversible step.
```

It is not sophisticated. But it already puts you ahead of most improvised agents.

## What Stanford understood before many companies

AI does not remove the need for process. It makes process more important.

When a person works without process, the damage is limited by that person's speed. When an agent works without process, the damage can scale across every conversation, every ticket, every commit, or every automation.

That is why the future is not "agents without supervision." The future is agents with context, limits, permissions, memory, evaluation, and escalation.

The ironic part is that a university is showing this with a simple instruction file.

You do not need to start with a huge governance platform. You can start by writing the right rules for one agent in one workflow.

An AI agent should not be "ChatGPT connected to your business."

It should be a piece of your business operating system: with a clear role, defined permissions, success criteria, and a human exit when the case becomes sensitive.

## Conclusion

The Stanford file matters not only because it came from Stanford. It matters because it shows a shift in mindset.

Agents no longer live only in chats. They live in repositories, workflows, CRMs, inboxes, support channels, and internal systems. And when they live there, they need local rules.

For AIPaths, the lesson is direct:

> Do not build more "intelligent" agents before you build more governed agents.

The advantage will not come from having the newest model. It will come from having agents that know what to do, what not to do, when to ask, when to verify, and when to call a human.

That is what turns an AI demo into a business system.

## Sources consulted

- Stanford CS336 Assignment 1 `CLAUDE.md`: https://github.com/stanford-cs336/assignment1-basics/blob/main/CLAUDE.md
- Stanford CS336 official course page: https://cs336.stanford.edu/
- Hacker News: "AI Agent Guidelines for CS336 at Stanford": https://news.ycombinator.com/item?id=48359232
- Hacker News: "CS336: Language Modeling from Scratch": https://news.ycombinator.com/item?id=48357075
- Claude Code docs: "How Claude remembers your project": https://code.claude.com/docs/en/memory
- GitHub Docs: "Adding repository custom instructions for GitHub Copilot": https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot
