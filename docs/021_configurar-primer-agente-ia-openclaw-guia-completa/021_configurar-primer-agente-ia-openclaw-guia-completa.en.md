---
content_id: "docs-configurar-primer-agente-ia-openclaw-guia-completa"
locale: "en"
title: "Complete Guide: How to Set Up Your First AI Agent with OpenClaw"
description: "Step-by-step guide to setting up your own AI agent with OpenClaw. Hardware decisions, real costs, security best practices, and full customization — from zero to a working agent."
author: "AIPaths Academy"
publishedAt: "2026-02-27T14:48:58.140Z"
updatedAt: "2026-03-02T12:50:00.000Z"
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/blogs/021_configurar-primer-agente-ia-openclaw-guia-completa/hero.jpg"
tags:
  - openclaw
  - ai-agents
  - tutorial
  - setup
---

Having an AI agent running 24/7 on your own machine sounds like science fiction, but in 2026 it's an accessible reality. OpenClaw is an open source platform that lets you create personal and team AI agents connected to Discord, WhatsApp, Telegram, and more — all running on your infrastructure, with your data under your control.

This guide takes you from zero to a fully configured agent. Not just the installation: the technical decisions that matter, real costs, security, and how to customize your agent to make it truly yours.

## What is OpenClaw and Who is it For?

OpenClaw is an open source platform for creating personal AI agents. Unlike ChatGPT or Claude, which live in their companies' clouds, OpenClaw runs on your machine — your laptop, a Mac Mini, a VPS, or even a Raspberry Pi.

**What makes OpenClaw different:**

- **Self-hosted:** Your data never leaves your infrastructure. Conversations, agent memory, and configuration all live on your machine.

- **Multi-channel:** A single agent can communicate through Discord, WhatsApp, Telegram, Signal, iMessage, and more. No need to set up a separate bot for each platform.

- **Extensible with Skills:** Skills are instruction and tool packages that give your agent specific capabilities. There's a marketplace (ClawhHub) with community skills, and you can create your own.

- **Open source and free:** The software is free. You only pay for the language model APIs you use (Claude, GPT, etc.).

**Who is OpenClaw for?**

- Entrepreneurs who want a personal AI assistant without depending on third-party platforms

- Small teams that need to automate workflows with agents

- Developers who want to experiment with AI agents on their own infrastructure

- Content creators who need to manage complex pipelines (like us at AIPaths)

If you just want to chat with an AI occasionally, ChatGPT or Claude are enough. If you want an agent that works for you continuously, with memory, tools, and connected to your communication channels, OpenClaw is what you need.

## Prerequisites

Before you start, make sure you have:

- **Node.js 22 or higher.** Check with `node --version`. If you don't have it, download from nodejs.org or use nvm.

- **An Anthropic or OpenAI API key.** We recommend Anthropic (Claude) for its reasoning quality. Create an account at console.anthropic.com and generate an API key.

- **A machine that can stay on.** Your agent needs to be running to be available. It can be your PC while you work, or ideally a dedicated machine (more on this in the hardware section).

- **A Discord account** (recommended). Discord is the ideal channel to start — it's free, natively supports bots, and has topic-based channels.

## Where to Run OpenClaw? The Hardware Decision

This is the first important technical decision. Your agent needs a machine to live on.

**Mac Mini M2/M4 (~$599-899)**

The option we recommend for serious use. It draws barely 10W at idle (less than $2/month in electricity), is completely silent, has plenty of performance for running OpenClaw and local models if you want, and macOS is an excellent environment for Node.js. At AIPaths, we run our entire multi-agent system on a dedicated Mac Mini.

**Your current PC or laptop (free)**

Perfect for getting started and testing. The limitation is that your agent is only available while the machine is on. If you shut your laptop at night, your agent sleeps. Works well for personal use during work hours.

**Cloud VPS ($5-20/month)**

DigitalOcean, Hetzner, or AWS Lightsail. The advantage is it's online 24/7 without physical hardware. The downside is additional latency and your data being on a third-party server (though you still have more control than with ChatGPT). A $5/month VPS with 1GB RAM is enough for basic OpenClaw.

**Raspberry Pi 5 (~$80)**

Possible but limited. Works for a simple agent with cloud models (Claude, GPT). Doesn't have the power to run local models. Good option as a learning project or for a low-demand agent.

**Our recommendation:** start with your current PC to test. If you like it and want your agent always available, a Mac Mini or $10/month VPS are the best options.

## Step-by-Step Installation

Let's get to it. The entire process takes less than 10 minutes.

### Step 1: Install OpenClaw

On macOS or Linux, open the terminal and run:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

On Windows (PowerShell as administrator):

```bash
iwr -useb https://openclaw.ai/install.ps1 | iex
```

The script installs OpenClaw globally. Verify it installed correctly with:

```bash
openclaw --version
```

### Step 2: Run the Configuration Wizard

```bash
openclaw onboard --install-daemon
```

The wizard guides you step by step:

- **Authentication:** Set up gateway credentials

- **API Key:** Enter your Anthropic (or OpenAI) API key

- **Model:** Choose the default model (we recommend Claude Sonnet 4 to start — good quality/price balance)

- **Channels:** Optionally connect Discord, WhatsApp, or other channels

- **Daemon:** The `--install-daemon` flag configures OpenClaw to start automatically with your system

### Step 3: Verify the Gateway is Running

```bash
openclaw gateway status
```

You should see the gateway is running. If it doesn't start, try:

```bash
openclaw gateway start
```

### Step 4: Test Your Agent

The quickest way to test is opening the web dashboard:

```bash
openclaw dashboard
```

This opens a web interface in your browser where you can chat directly with your agent. Send it a message to verify it responds.

If you already configured Discord in the wizard, you can also send a direct message to the Discord bot and it should respond.

## Connecting Communication Channels

An agent that only lives on a web dashboard is limited. OpenClaw's power is connecting multiple channels.

### Discord (Recommended as Hub)

Discord is the ideal channel for your agent for several reasons: topic-organized channels, threads for specific conversations, granular permission system, native bot support, and it's completely free.

To connect Discord:

```bash
openclaw channel add discord
```

The wizard guides you through creating a Discord application, generating a bot token, and inviting the bot to your server. Once connected, you can talk to your agent in any channel where the bot has access.

**Tip:** Create a dedicated Discord server for your agent with channels by area — #general, #work, #research, #notes. This organizes interactions by context.

### WhatsApp

To connect WhatsApp you need the Meta API (WhatsApp Business API). This isn't personal WhatsApp — it's a dedicated phone number with programmatic access.

```bash
openclaw channel add whatsapp
```

Check our Meta WhatsApp Business API guide for the complete setup, including business verification and webhook configuration.

### Telegram

Telegram is the simplest option after Discord. Create a bot with @BotFather, get the token, and connect it:

```bash
openclaw channel add telegram
```

### Signal

For the more privacy-conscious. Signal offers end-to-end encryption. The setup requires a few extra steps — check the OpenClaw documentation for details.

## Customizing Your Agent

This is where your agent stops being generic and becomes truly yours. OpenClaw uses plain text files to define the agent's personality and behavior.

### SOUL.md — The Personality

This file defines who your agent is. Tone, expertise, limitations. Example:

```bash
# SOUL.md
You are a personal digital marketing assistant.
Your name is Maia.
You respond in a direct and practical manner.
You have expertise in SEO, content, and social media.
When you don't know something, you say so clearly instead of making it up.
```

### AGENTS.md — The Instructions

Here you define how your agent works. Rules, workflows, available tools. Example:

```bash
# AGENTS.md
## General rules
- Before answering a technical question, verify the info with a web search
- When you receive a task, confirm the scope before executing
- Save important decisions in your memory

## Content workflow
1. Receive a topic → research keywords with Google Trends
2. Create an outline → wait for approval
3. Write the draft → send to review
```

### USER.md — User Context

Information about you that the agent needs to know to be useful:

```bash
# USER.md
Name: John
Business: Digital marketing agency in Buenos Aires
Clients: SMBs in LATAM
Stack: n8n, Supabase, Next.js
Timezone: GMT-3
```

### MEMORY.md — Persistent Memory

The agent automatically writes here what it learns about you and decisions that are made. You can also write directly to give it context:

```bash
# MEMORY.md
- John's main client is a fintech in Colombia
- We prefer Sonnet for routine tasks and Opus for complex analysis
- Weekly reports are sent on Mondays at 9am
```

These files are read at the start of every conversation, so changes you make take effect immediately.

## Skills and Tools

Skills are what transform your agent from a smart chatbot into an assistant that actually does things.

### Included Skills

OpenClaw comes with basic pre-installed skills:

- **weather:** Check the weather for any location

- **github:** Interact with repositories, PRs, issues

- **coding-agent:** Delegate code tasks to Claude Code or Codex

- **web-search:** Search the internet using Brave Search

- **web-fetch:** Read and extract content from URLs

### ClawhHub — Skills Marketplace

At clawhub.com you'll find community skills you can install with a single command:

```bash
openclaw skill install <skill-name>
```

There are skills for Notion, Google Calendar, email, data analysis, and much more.

### Creating Custom Skills

If you need something specific, you can create your own skills. A skill is basically a SKILL.md file with instructions and optionally scripts the agent can execute. Check our Claude Skills guide to learn how to create your own.

## Models and Real Costs

How much does it really cost to operate an agent? It depends on the model and how much you use it.

### Pricing per Model (per 1 Million Tokens)

**Anthropic (Claude):**

- Claude Opus 4: $5 input / $25 output — the smartest, for complex tasks

- Claude Sonnet 4: $3 input / $15 output — ideal balance, recommended to start

- Claude Haiku: $1 input / $5 output — fast and cheap, for simple tasks

**OpenAI:**

- GPT-4o: $2.5 input / $10 output — comparable to Sonnet in quality

- o3-mini: $1.1 input / $4.4 output — good for routine tasks

**Local models (Ollama):**

- Free, but you need a GPU (minimum 8GB VRAM for useful models)

- Lower quality than Claude/GPT for complex tasks, but works for simple things

### Monthly Estimate

**Light personal use** (one agent, ~300 messages per day, Sonnet 4): ~$5-15/month

**Professional use** (one agent with active tools, ~1000 messages per day, Sonnet/Haiku mix): ~$20-50/month

**Intensive multi-agent** (like us, multiple specialized agents, automated pipelines): ~$80-200/month

**Tip:** Start with Sonnet 4 for everything. When you identify tasks that need more intelligence, switch to Opus just for those. Use Haiku for repetitive and simple tasks. That combination optimizes cost without sacrificing quality.

## Security and Best Practices

Your agent has access to tools and your communication channels. Take it seriously:

**Dedicated API key.** Create an API key exclusively for your agent, separate from your development projects. Set a monthly spending limit in the Anthropic or OpenAI dashboard.

**Separate system user.** If you run OpenClaw on a dedicated machine, create an exclusive operating system user for the agent. This limits which files and resources it can access.

**Don't share sensitive data.** Remember that your messages go through the model provider's API (Anthropic, OpenAI). Don't send passwords, banking data, or confidential client information through the agent.

**Firewall on VPS.** If you run OpenClaw on a public VPS, set up a firewall. You only need the gateway port open, and preferably only for your IPs.

**Backups.** Regularly back up your OpenClaw configuration directory (~/.openclaw). That's where config, agent memory, and personalization files live.

**Monitoring.** Check regularly:

- `openclaw status` for the overall state

- Your API provider dashboard to monitor usage and costs

- Agent logs for unexpected behavior

**Security checklist:**

- Dedicated API key with spending limit

- Separate system user

- Don't share sensitive data

- Firewall configured (if VPS)

- Regular backups of ~/.openclaw

- Weekly review of costs and logs

## Troubleshooting: FAQ

**The gateway won't start.**
Verify Node.js 22+ is installed (`node --version`). Try `openclaw gateway --port 18789` to run it in foreground and see errors in the terminal.

**The agent doesn't respond on Discord.**
Verify the bot has read and write permissions in the channel. Check that the gateway is running with `openclaw gateway status`. Verify the bot token is correct.

**Costs are rising more than expected.**
An agent in a loop can consume tokens quickly. Set spending limits on the model platform. Check if there are automated conversations generating loops.

**The agent forgets things between conversations.**
Verify that MEMORY.md exists and has write permissions. Memory is written automatically, but if the file is read-only, the agent can't save.

**Can I use local models?**
Yes. OpenClaw supports Ollama for local models. But for most uses, Claude Sonnet offers a better quality/cost ratio than running a local model (unless you have a powerful GPU and don't want to pay for APIs).

**Can I have multiple agents?**
Yes. You can configure multiple agents with different personalities, tools, and channels. Each one has its own working directory with its own SOUL.md, AGENTS.md, etc. files.

## Next Steps

You now have your agent running. What's next?

- **Explore skills on ClawhHub:** install 2-3 skills relevant to your work and test how the agent uses them

- **Connect a second channel:** if you started with Discord, add WhatsApp or Telegram for mobile access

- **Create your own skills:** when you identify a task you repeat frequently, turn it into a skill

- **Look into MCP servers:** the Model Context Protocol lets you connect your agent with databases, APIs, and external services in a standard way — check our Building Your First MCP Server guide

- **Consider multi-agent:** if your use case grows, you can create specialized agents that work as a team — check our AI Agents in 2026 guide to understand the options

OpenClaw is an active project with frequent updates. Join the community on Discord to stay up to date and share what you've built.

## Related content

- 📘 [**AI Agents in 2026: Complete Guide**](https://www.aipaths.academy/en/docs/022_agentes-ia-guia-completa-2026) — Understand what AI agents are and how to choose the right framework
- 📘 [**Agentic Engineering: The Complete Framework**](https://www.aipaths.academy/en/docs/024_agentic-engineering-framework) — Professional principles for working with agents — the next level after setup
- 📘 [**Security for AI Agents: Practical Guide**](https://www.aipaths.academy/en/docs/023_seguridad-agentes-ia-guia-practica) — You set up your agent; now secure permissions, data, and costs
- 📝 [**Anthropic vs the Pentagon**](https://www.aipaths.academy/en/blog/018_anthropic-pentagono-ia-etica-seguridad-2026) — The geopolitical context behind the models your agents use
