---
content_id: "docs-claude-code-cheat-sheet-6-meses-uso-diario"
locale: "en"
title: "Claude Code: a practical guide after 6 months of daily use"
description: "A practical Claude Code guide after months of daily use: workflow, context, skills, hooks, security, and prompts to move faster without losing control."
author: "AIPaths Academy"
publishedAt: "2026-05-01T19:03:59.322Z"
updatedAt: "2026-10-27T12:00:00.000Z"
tags:
  - ai-agents
  - claude-code
  - agentic-engineering
  - workflows
  - security
  - productivity
---

Claude Code does not become truly useful when you learn more commands. It becomes useful when you stop treating it like a chatbot and start operating it like a work system: clean context, small steps, constant verification, and persistent rules.

That is the most important lesson from the viral Reddit thread “Claude Code cheat sheet after 6 months of daily use” and Marmelab’s extended article, written by a team that says it uses Claude Code every day on client projects and on its own frameworks, including react-admin and Atomic CRM. The post resonated because it does not talk about futuristic promises. It talks about real friction: cost, context, security, and the habits that make the agent stop behaving like “an enthusiastic intern” and start feeling more like a senior pair programmer.

This guide adapts that experience into a practical workflow for founders, developers, and small teams that want to use Claude Code to move faster without losing control of the codebase. You do not need to use everything on day one. The goal is to understand why these practices work, and how to apply them without turning your setup into an endless tool circus.

## The core idea: do not just ask it to “do it”; ask it to work with you

The beginner mistake is opening Claude Code and asking for a large task all at once:

```text
Implement the full dashboard with authentication, permissions, tests, and responsive design.
```

That prompt feels efficient because it delegates a lot. In practice, it usually creates a problem: Claude has to understand the project, choose the architecture, touch many files, invent acceptance criteria, and verify its own work almost at the same time. If something goes wrong, you do not know where the error started. Did it misunderstand the requirement? Choose the wrong approach? Change too much? Skip the right test?

It is more useful to think of Claude Code as a very fast person who still needs direction. If someone new joins your team and you say “build this full feature,” they will probably make progress, but they will also fill many gaps with assumptions. If instead you say “today, research how this part works; tomorrow, we implement the first change,” the work becomes safer. Claude Code works the same way: first context, then plan, then small implementation, then verification.

That separation is what turns a chaotic session into an auditable one. You are not slowing the agent down. You are giving it lanes.

## A simple workflow for any medium-sized task

For a tiny task, you can ask for the change directly. For a medium or large task, it is better to split the session into four moments: explore, plan, implement, and verify.

First, ask it to explore without editing anything. This matters because Claude Code can start modifying files too early if the request sounds actionable. A good first message would be:

```text
Read @src/billing and @src/auth. I need to understand how plan limits are calculated and where permissions are validated. Do not edit anything yet. Summarize the current flow and identify risks.
```

The phrase “do not edit anything yet” is not decoration. It tells Claude that the first output should be understanding, not code. It also gives you a chance to correct it before a misunderstanding becomes a diff.

Then comes the plan. Do not simply ask it to “continue.” Ask it to break the work into reviewable steps:

```text
Propose a plan to add workspace-level limits. Split the work into small steps, including affected files, required tests, and risks.
```

The value of the plan is not that Claude “thinks more.” The value is that you can review its assumptions. If it proposes changing the wrong layer, you catch it there. Correcting a plan takes minutes. Correcting the wrong implementation can take hours.

When the plan looks good, do not give it permission to implement everything. Ask only for the first step:

```text
Implement only step 1 of the plan. Do not move to step 2 yet. When you finish, run the smallest relevant test and show me what changed.
```

This pattern reduces the size of every change and keeps your review within a human range. Claude can write a lot of code quickly, but your bottleneck is still understanding whether that code is right. If you allow huge diffs, productivity turns into review debt.

Finally, verify with concrete commands. “Run tests” is too generic. Better:

```text
Run !npm run typecheck and !npm test -- billing-limit.test.ts. If something fails, explain the root cause before changing more code.
```

That distinction matters. You do not only want to know whether something failed. You want to stop Claude from patching blindly. When a test fails, root cause first, change second.

## How to manage context without drowning the agent

Context is the session’s working memory: instructions, files read, errors, terminal output, plans, corrections, and decisions. Many people assume more context always improves the result. With Claude Code, the opposite is often true: too much noise makes the agent less precise.

The practical rule is to give relevant context, not infinite context. If you already know which file matters, point to it explicitly with `@`:

```text
Review @src/pricing/calculatePrice.ts and tell me which edge cases are not covered.
```

That is usually better than saying “find where the price is calculated.” Search can be useful, but it also consumes context and can pull the agent into secondary files. When you already have a lead, use it.

The same applies to `CLAUDE.md`. That file should not be an encyclopedia of the project. It should contain what Claude cannot infer by reading the repo: real build and test commands, internal conventions, non-obvious business rules, recurring mistakes, and security boundaries.

A good way to decide what belongs in `CLAUDE.md` is to ask: “Would this line prevent a real mistake?” If the answer is no, it probably does not belong there. Generic instructions like “write clean code” or “be careful” take up space but rarely improve behavior.

If you work with multiple agents, it helps to separate portable rules from tool-specific rules. `AGENTS.md` can hold common rules for Claude, Codex, Copilot, or other environments. `CLAUDE.md` can import that file and add Claude Code-specific details:

```markdown
@AGENTS.md

## Claude Code
- Use Plan Mode for large changes under src/billing.
- Run npm run typecheck before closing medium-sized tasks.
```

That avoids duplicating rules and keeps one source of truth. If you are designing a work system around multiple agents, this approach connects well with `/docs/024_agentic-engineering-framework`.

## Plan Mode: when to use it and when not to

Plan Mode is useful when the cost of being wrong is high. If you are touching authentication, billing, permissions, migrations, infrastructure, or an area you do not understand well, it is better not to start with code. Ask for a plan and review it first.

But if the change is small — for example, renaming text, adjusting a style, or fixing an isolated test — Plan Mode can become unnecessary bureaucracy. The skill is choosing the level of control based on risk.

A simple reference: if the change affects more than one layer of the system, use a plan. If it requires understanding business rules, use a plan. If it involves data, permissions, or money, use a plan. If it is only a local and reversible edit, you can go straight to the change.

The important point is that Plan Mode is not a ceremony. It is a way to put thinking before a large diff.

## Skills and hooks explained for beginners

One of the most valuable points in the conversation around the thread was the difference between skills and hooks. At first, they can sound like “advanced configuration,” but the idea is simple.

A skill teaches Claude how to do a repeated task. For example: reviewing a PR, writing integration tests, documenting a technical decision, or running a lightweight security audit. The skill is not magic. It is a packaged instruction that Claude loads when the description matches the task.

That is why a skill’s description matters so much. If it says “help with code,” it is too vague. If it says “use this when reviewing a PR and leaving comments prioritized by severity,” Claude gets a much clearer signal.

A hook, on the other hand, does not try to teach. It tries to force or block something deterministically. If you never want the agent to edit `.env`, that should not depend on Claude “remembering” a rule. It should be a hook. If you want to run a formatter after every edit, hook. If you want confirmation before a dangerous command, hook.

The useful formula is:

```text
Skill = how to do X well.
Hook = never do Y without passing this control.
```

To start, you do not need ten skills or ten hooks. Start with one skill for your most repeated workflow and one or two hooks for the most expensive mistakes. For example, a PR review skill and a hook that protects secrets or sensitive files. Expand only when the system prevents a real error or saves real time.

If you want to go deeper on skills, you can pair this guide with `/docs/011_claude-skills-guide`.

## Security: do not copy configurations without auditing them

Claude Code can read files, run commands, and modify a real project. That is why it can save so much time. It is also why it can cause damage if you give it broad permissions without thinking.

The risk is not only that Claude makes a mistake. You can also introduce risk by copying skills, hooks, commands, or MCP servers from the internet. A malicious skill could try to exfiltrate secrets. A poorly written hook could execute unwanted commands. An MCP server with too many permissions could expose internal data.

The beginner rule is simple: if something can execute code, read secrets, or connect to external tools, review it before installing it. It does not matter whether it comes from Reddit, GitHub, or a popular blog.

It also helps to separate permissions by project. Using Claude Code in an experimental repo is not the same as using it in a repo with credentials, customer data, or production infrastructure. Give the agent the minimum access needed for the current task.

You can ask Claude to perform a security review, but do not treat that as an absolute guarantee:

```text
Run a security review focused on secrets, excessive permissions, injection, dangerous commands, and data exposure. Do not change code yet: first list findings and severity.
```

For a broader framework on agents with tools and permissions, `/docs/023_seguridad-agentes-ia-guia-practica` is a good companion guide.

## Useful tools without falling into “infinite setup”

Marmelab mentions tools such as Context7 for versioned documentation, GitHub CLI for PRs and issues, Snyk MCP for vulnerabilities, rtk for token reduction, and skill repositories like Superpowers or Tessl. All of them can help, but not all of them belong in your setup on day one.

Every tool adds security surface area, context noise, maintenance, and possible integration failures. A small, reliable setup usually beats a huge setup nobody fully understands.

For most small teams, a reasonable order is this: first document the real test, typecheck, and lint commands; then clean up `AGENTS.md` and `CLAUDE.md`; then create one or two skills for repeated tasks; then add hooks for critical rules. Only when you feel a clear need should you add MCPs or external tools.

If your problem is token cost, do not try to fix it by installing more things. First reduce noise: shorter context files, more specific prompts, fewer unnecessary searches, and smaller sessions. If you need to go deeper on that topic, see `/docs/027_optimizar-costos-agente-ia`.

## What to do when Claude gets it wrong

When Claude takes the wrong path, many people try to correct it with longer and longer messages. Sometimes that works. Often, it only adds more noise to the context.

If the mistake is recent, use `/rewind` to return to the last healthy point. If the conversation is already polluted, use `/clear` and start again with a clean summary. This can feel drastic, but it is often cheaper than arguing with a context full of bad assumptions.

It is also important to close the loop. If Claude introduced a bug and you fixed it manually, you solved the symptom but missed the system improvement. A better move is to ask it to investigate why it failed:

```text
Before fixing the bug, explain why it happened. Then propose which rule should be added to AGENTS.md, CLAUDE.md, a skill, or an ADR so it does not happen again.
```

The idea is not that Claude “learns” magically forever. The idea is to convert the error into documentation that the next session or the next agent can actually read.

## A reasonable starting configuration

If you are starting with Claude Code on a real project, you do not need a perfect architecture. You need a minimum base that prevents obvious mistakes.

Create an `AGENTS.md` with the project structure, install, build, test, and typecheck commands, important conventions, non-obvious business rules, and files that should not be touched without permission. Then create a short `CLAUDE.md` that imports `AGENTS.md` and adds Claude Code-specific details.

Next, define your first workflow. For example: for large changes, Claude first explores without editing; then proposes a plan; then implements one step; then runs a concrete test. A simple flow that you actually use is better than a huge configuration nobody maintains.

Finally, add protection where mistakes hurt most. If the biggest risk is secrets, protect `.env` and credentials. If the biggest risk is migrations, require review before touching the database. If the biggest risk is untested code, document the minimum test and make Claude run it before closing the task.

## Copy-ready prompts

These prompts are starting points. Use them as structure, not as religion.

To start a complex task:

```text
Explore the relevant area of the codebase without editing anything. Identify key files, dependencies, risks, and required tests. Then propose a plan split into small, reviewable steps.
```

To limit scope:

```text
Implement only step 1. Do not move to the next step. When you finish, show what changed, which test you ran, and what remains pending.
```

To remove overengineering:

```text
Review this diff and remove unnecessary complexity: premature abstractions, generics that do not help, speculative error handling, or code that does not serve the current requirement.
```

To turn a mistake into learning:

```text
Before fixing the bug, explain why it happened. Then propose which rule should be added to AGENTS.md, CLAUDE.md, a skill, or an ADR so it does not happen again.
```

For security:

```text
Run a security review focused on secrets, excessive permissions, injection, dangerous commands, and data exposure. Do not change code yet: first list findings and severity.
```

## Terminal commands that change the daily flow

The sections above are the method. These commands are the mechanics that make it fast when you live in the terminal. You do not need to memorize all of them: each one removes a specific kind of friction.

**`!` to work from real evidence.** A command prefixed with `!` runs from the session and its output stays in context, so you can ask about the result without copying anything:

```bash
! npm test -- pricing.test.ts
! git diff --stat
! rg "createCheckoutSession" src
```

Instead of asking Claude to guess why something fails, you hand it the output. Two rules: filter anything verbose (`! npm test 2>&1 | tail -n 80`, `! git diff -- src/billing | sed -n '1,220p'`) and never put secrets, `.env` files or giant dumps into the conversation. For long-running processes (dev servers, big suites), `Ctrl+B` sends them to the background with their own ID and retrievable output.

**`/statusline` to see what you usually forget.** A persistent bar with model, directory, Git branch, context percentage and session cost prevents avoidable mistakes: working on the wrong branch, missing that the context is almost full, using an expensive model for a trivial task.

```text
/statusline show model name, current directory, git branch, context percentage and session cost
```

**`/usage` and `/context` before blaming the model.** When a session starts answering worse, the context is almost always full of noise. `/context` shows what dominates it (terminal output, irrelevant files, old exploration). From there, the simple rule:

- Same task, conversation too long → `/compact keep the goal, decisions, modified files, tests and pending work`.
- New topic → `/clear`.
- Recent wrong turn → `/rewind`.

**`/add-dir` for multi-repo work, with limits.** If a bug crosses frontend and API, `/add-dir ../api` (or `claude --add-dir ../api ../workers` at startup) avoids opening two conversations. But every extra directory widens what Claude can explore and edit, and that repo's `.claude/` configuration is not discovered automatically. Use it with a concrete intent ("trace the flow between @src/components/CheckoutForm.tsx and the checkout endpoint in ../api, explore first without editing"), never as `/add-dir ..` plus "fix whatever you find".

**`/btw` for side questions.** A quick question that sees the current context but does not enter the history and has no tool access: perfect for "what did this helper do?" without polluting the main session. If you need to investigate something new, branch the conversation or open a separate session.

**`/diff`, `/code-review` and `/simplify` to close.** The work is not done when it "seems to work". A reasonable ending:

```text
/diff
Summarize the diff in 5 bullets: goal, files touched, risks, tests run and pending work.
/code-review
/simplify
! npm run typecheck
! npm test -- checkout.test.ts
```

Keep the three apart: `/simplify` removes unnecessary complexity, `/code-review` hunts for real bugs, and tests validate behavior. A change can get more elegant and still be broken. If something fails, root cause before editing.

## Conclusion: more structure, less faith

Claude Code can accelerate development dramatically, but not because it “understands your project” by magic. It accelerates when you give it an environment where it can operate with good boundaries: short and relevant context, explicitly referenced files, plans before large diffs, small steps, concrete tests, skills for repeated procedures, hooks for mandatory rules, and human review for important decisions.

The signal from the Reddit thread is not “use these tricks.” The deeper signal is that teams getting real value from coding agents are building an operating layer around the agent.

Claude Code does not replace the developer. It amplifies the judgment that already exists. If your judgment is documented, tested, and protected by hooks, the agent works much better. If your judgment only lives in your head, Claude will improvise.

## Sources reviewed

- Reddit: “Claude Code cheat sheet after 6 months of daily use”, r/ClaudeAI.
- Marmelab: “Claude Code Tips I Wish I’d Had From Day One”.
- Anthropic Claude Code Docs: Best Practices, Memory / CLAUDE.md, Skills, Hooks, and Commands.
- Community discussion around skills, hooks, security, and automation limits in the comments on the original thread.
