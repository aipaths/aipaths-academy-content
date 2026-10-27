---
content_id: "docs-claude-code-terminal-workflow"
locale: "en"
title: "How to Use Claude Code from the Terminal: A Workflow to Move Faster Without Losing Context"
description: "A practical guide for terminal users who want to use Claude Code with less friction: shell commands, @ file references, statusline, context hygiene, multi-repo work, /btw, and review before closing changes."
published: false
author: "AIPaths Academy"
publishedAt: "2026-06-04T14:30:02.838Z"
updatedAt: "2026-06-04T14:30:02.838Z"
tags:
  - claude-code
  - ai-coding
  - developer-tools
  - workflows
  - productivity
---
Claude Code is not just a chatbot that can edit files. In the terminal, it becomes something more useful: a working environment where you can combine conversation, files, commands, errors, Git branches, tests, context, and review without copying and pasting between five windows.

That is the important idea behind the Marmelab post that inspired this guide. After more than six months using Claude Code from Linux, the author described commands that look small but change the daily workflow: `!` for shell commands, `@` for referencing files, `/statusline` for persistent session information, `/add-dir` for working across repositories, and `/btw` for side questions.

The list is useful, but the real value is not memorizing commands. The value is designing a way of working where Claude Code has the right context, sees real evidence from your project, and does not turn every task into a long, expensive, hard-to-review conversation.

This guide is for technical founders, freelance developers, small teams, and builders who already live in the terminal. The promise is not that Claude Code will program by itself. The promise is more concrete: less friction, less context noise, and more control when closing changes.

## The Core Idea: The Terminal Is Live Context

When you use a normal chat interface for programming, you have to bring information to the model: copy errors, paste files, summarize structure, explain which command failed, and describe what changed. Every manual step adds friction and, worse, incomplete context.

With Claude Code in the terminal, the agent is closer to the real work. It can see files, run commands, inspect diffs, read errors, and help you decide the next step. But that does not mean you should let it explore everything without direction.

Good usage is a balance:

- Give it specific files when you know where to look.
- Give it reproducible commands when something needs validation.
- Add multi-repo context only when it is necessary.
- Clean the session when the topic changes.
- Review the diff before closing the task.

Claude Code gets better when your workflow gives it clear signals. If the session fills up with long searches, huge logs, topic changes, and irrelevant output, the agent loses precision. The terminal helps, but it does not fix poor context hygiene.

## 1. Run Commands with `!` to Work from Real Evidence

The simplest and most useful command for terminal users is the `!` prefix.

In Claude Code, you can write:

```bash
! npm test
! git status
! npm run typecheck
```

That runs the command directly from the session. The result stays in the conversation context, so you can ask a follow-up question without copying anything:

```text
Analyze the failing test and explain the root cause before proposing changes.
```

The difference looks small, but it changes the workflow. Instead of asking Claude to guess why something fails, you give it the real output. Instead of manually pasting a stack trace, you generate it where it belongs. Instead of saying "I think the build is failing," you run the build.

Use `!` for quick, verifiable commands:

```bash
! git diff --stat
! npm run lint
! npm test -- pricing.test.ts
! rg "createCheckoutSession" src
```

For long-running processes, Claude Code lets you send tasks to the background with `Ctrl+B`. This is useful for dev servers, large test suites, builds, or processes you do not want to block the session. The official documentation explains that background tasks run asynchronously, with their own ID and retrievable output.

The practical rule: use `!` to bring evidence into context, not to flood the session with noise. If a command prints thousands of lines, filter first:

```bash
! npm test -- --runInBand 2>&1 | tail -n 80
! git diff -- src/billing | sed -n '1,220p'
```

Do not put secrets, `.env` files, giant dumps, or logs with sensitive data into the context. Claude can help interpret output, but you are still responsible for what information enters the conversation.

## 2. Use `@` to Point to Exact Files

The second habit that saves the most time is referencing files with `@`.

Instead of saying:

```text
Find where the price is calculated and check if there are bugs.
```

you can say:

```text
Review @src/pricing/calculatePrice.ts and tell me which edge cases are not covered.
```

According to the Claude Code documentation, `@` lets you quickly include files or directories. If you mention a file, its content enters the conversation. If you mention a directory, Claude sees a listing with file information.

This matters because "explore the repo" is usually too broad. Claude can do it, but it consumes context and increases the chance of drifting into secondary paths. If you already know which file matters, say it.

Good uses of `@`:

```text
Explain the authentication flow in @src/auth/session.ts.
```

```text
Compare @src/components/CheckoutForm.tsx with @src/server/checkout.ts and tell me whether validation is duplicated or inconsistent.
```

```text
Review @docs/billing.md and @src/billing/limits.ts. I want to know whether the documentation matches the real behavior.
```

You can also use `@` to reduce ambiguity when requesting changes:

```text
Modify only @src/pricing/calculatePrice.ts to cover annual plans. Do not touch checkout or billing. When you finish, run the minimum relevant test.
```

That sentence does three things: defines the file, limits scope, and requires validation.

For medium-sized projects, this pattern matters more than any sophisticated prompt. Less "look at everything" and more "look here first."

## 3. Configure `/statusline` to See What You Usually Forget

A good terminal session needs visible signals. Which branch are you on? Which model are you using? How much context is left? What is the active directory? How much has the session cost?

Claude Code has `/statusline` for configuring a persistent bar at the bottom of the terminal. The official documentation explains that the bar can show context usage, costs, Git state, and other data generated by a script that receives session information.

A useful starting configuration would be:

```text
/statusline show model name, current directory, git branch, context percentage and session cost
```

You do not need to make it perfect. You need it to prevent avoidable mistakes:

- Working on the wrong branch.
- Missing that the context window is almost full.
- Using an expensive model for a simple task.
- Letting a long session run without noticing accumulated cost.

For small teams, this visibility is valuable. A technical founder may switch between frontend, backend, automation scripts, and content. A simple statusline reduces confusion.

If you already have a custom shell statusline, Claude Code can help adapt it. But do not turn this into an infinite personalization project. Start with branch, directory, model, context, and cost. If you need more later, add it then.

## 4. Check `/usage` and `/context` Before Blaming the Model

When a Claude Code session starts responding worse, many people think: "the model got dumb." Sometimes the problem is simpler: the context is full of noise.

Claude Code includes commands to inspect that:

```text
/usage
/context
```

`/usage` shows usage statistics, costs, and activity. `/context` visualizes how the context window is being used and can show optimization suggestions. This is especially useful after long debugging sessions, large migrations, or research across many files.

If you see that the context is dominated by terminal output, irrelevant files, or old exploration, do not keep stacking instructions. Clean it.

Use `/compact` when the task is still the same, but you want to summarize the conversation:

```text
/compact keep only the goal, decisions made, files changed, tests run and pending work
```

Use `/clear` when you change topics:

```text
/clear checkout-fix-done
```

The difference matters. `/compact` lets you continue with less weight. `/clear` starts a new conversation with an empty context, while keeping project memory.

Simple rule:

- Same task, conversation too long: `/compact`.
- New topic: `/clear`.
- Recent wrong path: `/rewind`.

This habit is one of the highest-leverage ways to reduce cost and improve precision. If you use Claude Code every day, context hygiene is worth more than learning twenty obscure commands.

## 5. Use `/add-dir` for Multi-Repo Work, but Set Limits

Real products often do not live in a single repo. You may have:

- `web-app/`
- `api/`
- `workers/`
- `infra/`
- `automation-scripts/`

If you open Claude Code from `web-app/`, the work is centered there by default. To give it access to another directory during the session, you can use:

```text
/add-dir ../api
```

You can also start Claude with additional directories:

```bash
claude --add-dir ../api ../automation-scripts
```

This is useful when a change crosses real boundaries. For example: a checkout screen in React calls a backend endpoint, and the bug is in how the payload is transformed. In that case, having the frontend and API in the same session avoids opening two separate conversations.

But `/add-dir` should not be your default answer. Every additional directory increases the space Claude can explore and edit. It also increases the risk of noisy context and permissions that are too broad.

The official documentation also points out an important detail: when you add directories, you grant file access, but you should not assume every `.claude/` configuration from those directories is automatically discovered. If an additional repo has its own rules, verify how they are loaded.

Good use:

```text
/add-dir ../api

I need to trace the flow between @src/components/CheckoutForm.tsx and the checkout endpoint in ../api. First explore without editing and tell me which files matter.
```

Poor use:

```text
/add-dir ..

Review my whole workspace and fix whatever you find.
```

The first instruction is bounded. The second invites chaos that will be hard to review.

If you work across multiple repos, use `/add-dir` with a concrete intent: tracing a flow, syncing a contract between client and server, reviewing cross-repo documentation, or modifying both sides of a small feature.

## 6. Use `/btw` for Side Questions Without Polluting the Session

Small questions appear during long sessions:

- What did this helper do?
- Why did we choose this library?
- Which file had the configuration?
- Did that error come from frontend or backend?

Before, those questions ended up inside the main conversation. That added noise. Claude Code has `/btw` for side questions:

```text
/btw what does this function in @src/utils/pricing.ts do?
```

Current documentation says `/btw` is for a quick question that does not get added to conversation history. The question can see the current context, but it does not have tool access: it cannot read new files or run commands. It answers using what is already in context.

That makes it perfect for small interruptions. If you need to investigate something new, do not use `/btw`; use a branch of the conversation or a separate session.

Practical rule:

- Short question about something Claude has already seen: `/btw`.
- Long discussion or new investigation: `/branch` or a new session.

This keeps the main session focused. And when you work with agents, focus is not cosmetic. It is quality.

## 7. Review the Diff Before Closing: `/diff`, `/code-review`, and `/simplify`

Claude can move fast, but the work is not finished when it "seems to work." It is finished when you can review what changed, validate that nothing else broke, and decide whether the solution is more complex than necessary.

A reasonable ending for a task would be:

```text
/diff
```

Then:

```text
Summarize the diff in 5 bullets: goal, files touched, risks, tests run and what remains pending.
```

If the change carries real risk, use review:

```text
/code-review
```

For complexity cleanup, Claude Code includes `/simplify`. According to current documentation, recent versions of `/simplify` focus on cleanup opportunities and not correctness bugs. For bugs, use `/code-review`.

This matters because simplifying is not the same as verifying. A change can become more elegant and still contain a bug. Keep the phases separate:

- `/simplify` for removing unnecessary complexity.
- `/code-review` for finding real bugs and risks.
- Specific tests or commands for validating behavior.

A good closing sequence would be:

```text
/simplify
```

```bash
! npm run typecheck
! npm test -- checkout.test.ts
```

```text
If everything passes, give me a final summary with changes, risks and next steps. If something fails, explain the root cause before editing.
```

That last detail avoids the dangerous pattern of "something failed, so I patched something." Diagnosis first, then changes.

## 8. Use `/rewind` When the Session Goes Off Track

Not every session can be saved with more prompting. Sometimes Claude misunderstood the goal, touched too many files, or followed the wrong architecture.

When the mistake is recent, `/rewind` is better than arguing with a contaminated conversation. The command documentation describes `/rewind` as a way to return code and conversation to a checkpoint, or summarize part of the conversation.

Use it when:

- Claude started solving the wrong problem.
- The diff grew too large.
- A refactor broke more than it fixed.
- You realized the original assumption was wrong.

After going back, do not repeat the same prompt. Write a narrower one:

```text
Let's return to the minimum goal. I do not want a general refactor. Only fix the tax calculation in @src/pricing/taxes.ts and add a test for annual plans.
```

This pattern teaches an important lesson: you do not have to save every conversation. Sometimes the professional move is to return to a healthy point and reduce scope.

## A Complete Workflow You Can Copy

If you want to apply all of this to a real task, use this flow.

First, context:

```text
I need to fix a checkout bug. First explore without editing. Review @src/components/CheckoutForm.tsx and @src/server/checkout.ts. Identify the flow, possible root cause, files that may need to change and the minimum test.
```

Then, evidence:

```bash
! npm test -- checkout.test.ts
! npm run typecheck
```

Then, plan:

```text
Propose a plan with no more than 3 steps. Each step must include affected files, validation and risk. Do not implement yet.
```

Small implementation:

```text
Implement only step 1. Do not move to step 2. Keep the change minimal and explain what you modified.
```

Validation:

```bash
! npm test -- checkout.test.ts
! npm run typecheck
```

Closing:

```text
/diff
```

```text
Summarize the change, remaining risks and whether anything needs manual review.
```

If the change became noisy:

```text
/simplify
```

If the conversation became heavy but the task continues:

```text
/compact keep the goal, decisions, modified files, tests and pending work
```

If you switch tasks:

```text
/clear checkout-fix-done
```

This flow is not complicated. It forces you to separate stages: understand, validate, plan, implement, review and clean up.

## Common Mistakes When Using Claude Code in the Terminal

The first mistake is asking for changes that are too large. If you could not calmly review the diff, the task is probably poorly divided.

The second mistake is letting Claude explore without limits when you already know where to start. Use `@` to point to files. Ask it to search only when you genuinely do not know where the problem lives.

The third mistake is filling the conversation with giant outputs. If you need logs, filter them. If you need diffs, limit the paths. If you need to understand an error, bring in the relevant last lines.

The fourth mistake is adding too many directories. `/add-dir` is powerful, but it does not turn your whole workspace into good context. Give access to the repo you need, not your whole disk.

The fifth mistake is not closing with review. A session that ends with "done" but no diff, tests, or risk summary is not production-ready.

## What This Changes for a Technical Founder

For a founder or builder using Claude Code as product leverage, the terminal is not just a place to code. It is an operating console.

You can fix bugs, prepare scripts, update docs, review automations, inspect logs, write tests, and connect frontend with backend without leaving the flow. But for that to become an advantage instead of chaos, you need minimum discipline:

- Small tasks.
- Explicit files.
- Reproducible commands.
- Visible context.
- Clean sessions.
- Review before closing.

This connects directly to the idea of principled agentic engineering: the point is not to collect more prompts, but to create a system where the agent works with context, limits, and validation. To go deeper into that framework, read [Agentic Engineering: The Complete Framework](https://www.aipaths.academy/en/docs/024_agentic-engineering-framework).

If your main problem is cost or context, complement this with [How to Optimize Your AI Agent Costs](https://www.aipaths.academy/en/docs/027_optimizar-costos-agente-ia).

And if you are going to give broader permissions to code agents, read [AI Agent Security: A Practical Guide](https://www.aipaths.academy/en/docs/023_seguridad-agentes-ia-guia-practica).

## Conclusion: Less Friction, More Control

Claude Code terminal commands are not isolated tricks. They are pieces of a workflow.

`!` brings in real evidence. `@` reduces ambiguity. `/statusline` makes session state visible. `/usage` and `/context` show when the problem is noise. `/add-dir` enables multi-repo work with boundaries. `/btw` keeps side questions from polluting the main conversation. `/diff`, `/code-review`, and `/simplify` help you close changes with more rigor. `/rewind`, `/compact`, and `/clear` keep context healthy.

The advantage does not come from knowing every command. It comes from using them for one concrete practice: give Claude Code less noise, more evidence, and better boundaries.

If you already live in the terminal, that change shows up quickly. Claude stops feeling like an extra window and starts becoming part of the environment where you actually build.

## Sources Reviewed

- Reddit, "Claude Code tips for terminal users (from a senior dev)": https://www.reddit.com/r/ClaudeAI/comments/1tbwwel/claude_code_tips_for_terminal_users_from_a_senior/
- Marmelab, "Getting More Out of Claude Code in the Terminal": https://marmelab.com/blog/2026/05/12/claude-code-hidden-commands.html
- Anthropic, "Commands", Claude Code docs: https://code.claude.com/docs/en/commands
- Anthropic, "Interactive mode", Claude Code docs: https://code.claude.com/docs/en/interactive-mode
- Anthropic, "Customize your status line", Claude Code docs: https://code.claude.com/docs/en/statusline
- Anthropic, "CLI reference", Claude Code docs: https://code.claude.com/docs/en/cli-reference
- Anthropic Support, "Claude Code power user tips": https://support.claude.com/en/articles/14554000-claude-code-power-user-tips
