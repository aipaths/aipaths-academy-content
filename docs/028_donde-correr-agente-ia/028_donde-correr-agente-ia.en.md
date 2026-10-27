---
content_id: "docs-donde-correr-agente-ia"
locale: "en"
title: "Where to Run Your AI Agent: The Definitive Decision Guide"
description: "You have the agent configured, prompts ready, everything works on your machine. Now the question: where do you leave it running? This decision affects cost, performance, security, and reliability. There's no universal answer — it depends on YOUR situation. This guide takes you step by step to the ri"
author: "AIPaths Academy"
publishedAt: "2026-03-23T12:09:13.810Z"
updatedAt: "2026-10-27T12:00:00.000Z"
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/blogs/028_donde-correr-agente-ia/hero.jpg"
tags:
  - ai-agents
  - openclaw
  - hardware
  - vps
  - tutorial
---

## Decision 1: Own hardware or VPS/Cloud?

Own hardware (Mac Mini, PC, Raspberry Pi): one-time investment, full data control, no third-party dependency, you handle maintenance and electricity. Profile: values privacy, has stable internet, prefers paying once. VPS/Cloud: recurring monthly cost (from $4/month), fixed IP, guaranteed uptime (99.9%+), scalable, provider handles physical hardware. Profile: doesn't want hardware, needs fixed IP, or has unreliable home internet.

## Decision 2: If you chose hardware → Which hardware?

🥇 Mac Mini M4 — The top recommendation. Silent (no fan at idle), low power (5-10W), macOS stable, Apple Silicon excellent for Node.js. Base ($599): 16GB RAM, 256GB SSD — enough for cloud agents. 24GB ($799) if you want local models. Electricity: ~$1-3/month. It's literally what we use at AIPaths. 🥈 Raspberry Pi 5 — The minimum that works. $80-100 complete kit. 8GB RAM max — enough for cloud agents, NOT for local models. Low power (~5W). Limitation: ARM may have issues with some npm packages. 🥉 Your current laptop — To start (not to stay). $0 additional cost. Agent sleeps when laptop sleeps. Viable for testing, development, work-hours-only use.

## Decision 3: If you chose VPS → What type?

Budget VPS ($4-8/month): what most people need. 1-2 vCPU, 1-4GB RAM. Enough for OpenClaw + a few agents. Providers: Hetzner, DigitalOcean, Contabo. GPU VPS ($30-80/month): only if you run local models (Ollama). Not needed for cloud API agents. Managed cloud ($5-20/month): zero DevOps, services like Railway or Render. Easier but less control.

## Which VPS for OpenClaw: the five providers worth your money

OpenClaw is an always-on Node.js daemon: it holds persistent connections to your messaging channels and runs tools in real time. It needs stable (non-burst) CPU, constant RAM (~500MB base; 2GB minimum, 4GB comfortable with browser automation), fast SSD, a stable network for WebSockets, and no GPU — models run on the API provider's side. With 1-2GB of RAM, add at least 2GB of swap or browser automation can OOM the process.

| Provider | Recommended plan | Price | Deploy | Best for |
|----------|------------------|-------|--------|----------|
| **Hetzner** 🥇 | CX23 — 2 vCPU, 4GB RAM, 40GB NVMe (or CAX11 ARM, same price) | ~€4.79/mo, hourly billing | Manual (Node + systemd), official OpenClaw guide | Best price/performance if you know Linux. Community favorite. No LATAM locations. |
| **Contabo** 🥈 | Cloud VPS 10 — 4 vCPU, 8GB RAM, 75GB NVMe | ~$4.50/mo (12-month term) | One-click OpenClaw with Docker | Lots of cheap RAM for multi-agent setups. Slow provisioning, no hourly billing. |
| **DigitalOcean** 🥉 | Droplet 2 vCPU, 2GB RAM | $6-12/mo, hourly | 1-Click App in the Marketplace | Beginners: best UX and docs, $200 starting credit. Expensive per spec. |
| **Vultr** | VX1 from $3.50/mo or Cloud Compute $6/mo | $3.50-12/mo, hourly | Manual | LATAM latency: Miami, São Paulo, Mexico City. Best single-core performance (matters for Node). |
| **Hostinger** | KVM 2 — 2 vCPU, 8GB RAM, 100GB NVMe | ~$5.99/mo (12-24-month plans) | Docker templates with OpenClaw, hPanel | Visual panel and a Brazil datacenter. Pricier renewals. 10% off for the community: [hostinger.com/AIPATHS](https://hostinger.com/AIPATHS) |

Special mention: Oracle Cloud Free Tier gives up to 4 ARM OCPUs, 24GB RAM and 200GB for free, and OpenClaw has an official guide for it. Signup is a lottery, ARM breaks some binaries, idle instances can be reclaimed and there is no support. Great for experiments, not for production.

**Security before you install.** OpenClaw has full access to the server, and there are multiple Reddit reports of exposed instances compromised within hours. Never expose port 18789 (the gateway listens on `127.0.0.1:18789` by default — leave it). Use Tailscale or an SSH tunnel (`ssh -L 18789:localhost:18789 user@your-vps`) for remote access. UFW with only 22, 80 and 443, plus `ufw limit 22/tcp`. SSH keys only, no root login. A dedicated non-root user for OpenClaw.

**Hidden costs.** Backups add ~20% at Hetzner and DigitalOcean (Contabo includes snapshots). Hetzner includes 20TB of traffic, Contabo is unlimited, DigitalOcean and Vultr charge $0.01/GB over quota. The real cost is the model APIs ($20-100+/month depending on volume), so a cheap VPS leaves budget where it matters.

Quick pick: best price per spec and you know Linux → Hetzner. Lots of RAM and one-click → Contabo. First server ever → DigitalOcean. In LATAM → Vultr or Hostinger. Zero budget and patience → Oracle Free Tier.

## Bonus decision: Local models or API?

If you only use APIs (Claude, GPT, Gemini): any option works. The heavy compute happens on the provider's cloud. Your machine just runs Node.js and maintains connections. If you want local models (Ollama): you need RAM. 7B params → 4-8GB RAM. 13B params → 8-16GB RAM. 30B+ params → 24-32GB+ RAM. Mac Mini with 24GB or PC with 32GB minimum. Hybrid approach (most popular): basic hardware for APIs + small local models (7-9B) for simple tasks.

## Local models vs API: how to decide without overthinking it

With an API, the provider manages the intelligence and you consume the service: an account, a key, a way to call the model, clear prompts, basic error and cost handling, and a policy for which data may leave your system. It is the shortest path for prototypes, agents still being validated, and anything that needs strong reasoning, long context, vision or native tools. With a local model (an open model running on Ollama, llama.cpp, LM Studio or vLLM on your machine or a GPU VPS), you manage execution: enough RAM/VRAM, a runtime, compatibility, performance, monitoring, updates and a fallback for when the model falls short. You gain control over where data lives, but "local" means neither free nor better.

**When each one makes sense.** Start with an API when the priority is validating fast: an MVP, a customer-facing agent, an automation whose volume you do not know yet. The rule: if you do not yet know what your agent will do every day, start with an API. Consider local when you have a concrete reason: data must not leave your environment, the agent must work offline or on a private network, you have many simple repetitive tasks, cost at volume starts to matter, or you want less dependency on one provider. An internal agent classifying thousands of tickets a day does not need the most expensive model; an agent analyzing confidential contracts may not be allowed to send them anywhere even if an API would do better. At that point local stops being an optimization and becomes an architecture decision.

**The smart path is usually hybrid.** Local for frequent, simple or sensitive steps (classify, extract fields, short summaries, routing); API for complex, ambiguous or high-value steps; routing rules to decide which model handles what; logs to measure cost, latency and quality per task. Support example: a local model classifies the message and extracts basic data, simple cases get a draft, delicate cases go to a strong API model for the final reply, and the agent logs which model it used. Private-documents example: a local model filters and anonymizes, the API reasons over the sanitized version, and the result returns to the internal environment.

**How to start.** Define the exact task (the task defines the model). Validate the full flow with an API. Separate the repetitive parts (local candidates) from the ambiguous or high-risk ones (stay on API). Decide from day one which data can leave. Build a thin layer for model calls and metrics so you can switch providers without rewriting the agent.

Common mistakes: going local too early and spending weeks on infrastructure before validating; assuming APIs stay cheap forever without measuring usage per task; confusing privacy with location (local does not help if you keep unsafe logs or grant excessive permissions); and using one model for everything. The mature question is not "local or API?" but which model fits this task, with this data, this risk and this stage of the project.

## Your decision path: the summary

Own hardware → High budget: Mac Mini M4. Medium: recycled PC. Low: Raspberry Pi. Cloud → Budget VPS (Hetzner/DO) + Tailscale + hardening. Local models? → Need 24GB+ RAM. Our recommendation: Mac Mini M4 16GB for most people. It's what we use, it works, and the cost amortizes in ~6 months vs an equivalent VPS.

## FAQ — Real questions from our audience

"Can my API account get banned for using OpenClaw?" — No. The API is designed for programmatic use. Different from automating the web interface (which DOES violate TOS). "Can I use an old PC instead of buying a Mac Mini?" — Yes. Install Ubuntu Server, it works the same but noisier and more power-hungry. "Do I need a fixed IP or domain?" — Not necessarily. Tailscale gives you secure remote access without exposing ports. "How many agents can I run on a Mac Mini?" — With cloud APIs, dozens. The bottleneck is the API, not local hardware. "What happens if power or internet goes out?" — Agent loses connection, reconnects automatically when restored. For high availability, use a VPS. "Is it safe to give an AI agent access to desktop/files?" — Create a dedicated OS user, restrict permissions, use workspace-only mode. See our Security Guide. "Which Mac Mini model? Base or more RAM?" — Base 16GB for cloud agents. 24GB if you want local models.

## Related Content

- 📘 [**How to Optimize Your AI Agent Costs**](https://www.aipaths.academy/en/docs/027_optimizar-costos-agente-ia) — You chose where to run it; now optimize how much you spend on APIs

- 📘 [**AI Agent Security: A Practical Guide**](https://www.aipaths.academy/en/docs/023_seguridad-agentes-ia-guia-practica) — Permissions, data, and costs: what you need to secure regardless of where it runs

- 📘 [**How to Set Up Your First AI Agent with OpenClaw**](https://www.aipaths.academy/en/docs/021_configurar-primer-agente-ia-openclaw-guia-completa) — Step-by-step tutorial to install and configure your first agent

- 📘 [**AI Agents in 2026: Complete Guide**](https://www.aipaths.academy/en/docs/022_agentes-ia-guia-completa-2026) — If you don't know what an AI agent is yet, start here
