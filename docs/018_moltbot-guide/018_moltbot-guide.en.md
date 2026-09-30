---
# Unique semantic identifier (links EN/ES versions)
content_id: "docs-moltbot-guide"

# Locale (must match filename: .en.md or .es.md)
locale: "en"

# SEO & Display
title: "Molt Bot: The Autonomous AI Agent Guide"

description: "Understand what Molt Bot is, how it works, the risks involved, and how to use it safely as a developer."

# Author
author: "AIPaths Academy"

# Publication dates (ISO 8601 format)
publishedAt: "2026-02-11T10:00:00Z"

updatedAt: "2026-02-11T10:00:00Z"

# Cover image
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/docs/018_moltbot-guide/hero.jpg"

# Tags (canonical lowercase English IDs)
tags: ["intermediate", "ai-agents", "automation", "claude", "tools", "guide"]

---

A conceptual guide for developers who want to understand Molt Bot before running it.

## What Is Molt Bot?

Molt Bot (formerly Clawdbot) is an open-source, self-hosted AI assistant that turns LLMs like Claude into **autonomous agents with full system access**. Created by Peter Steinberger (founder of PSPDFKit), it launched January 26, 2026 and became one of GitHub's fastest-growing projects—60,000+ stars in three days.

Think of it as **"Claude with hands."** Unlike browser-based AI that just chats, Molt Bot runs on your hardware and can:

- Install software and run scripts
- Manage files and directories
- Send emails and messages
- Control browsers
- Execute terminal commands
- Interact with APIs

All triggered from a simple chat message on WhatsApp, Telegram, Discord, iMessage, or Slack.

> **Note:** The project was originally called "Clawdbot" and was rebranded to **Molt Bot** after Anthropic requested a name change (trademark). The legitimate project now lives at `github.com/moltbot/moltbot` and `docs.molt.bot`.

## How It Works

### Architecture Overview

Molt Bot follows a **local-first** architecture with these core components:

```text
┌─────────────────────────────────────────────────────────┐
│                    Your Device                          │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐ │
│  │   Gateway   │───▶│    Agent    │───▶│   Skills    │ │
│  │  (Node.js)  │    │   (LLM)     │    │  (Tools)    │ │
│  └──────┬──────┘    └─────────────┘    └─────────────┘ │
│         │                                               │
└─────────┼───────────────────────────────────────────────┘
          │
          ▼
┌─────────────────────────────────────────────────────────┐
│              Messaging Channels                         │
│  WhatsApp │ Telegram │ Discord │ Slack │ iMessage │ ...│
└─────────────────────────────────────────────────────────┘
```

**Gateway**: A WebSocket-based control plane running on your machine. Requires Node.js &gt;= 22.

**Multi-Channel Bridge**: Connects to messaging apps you already use. Supported channels include WhatsApp, Telegram, Slack, Discord, Signal, iMessage, Microsoft Teams, and WebChat.

**Agent**: Routes messages to configured LLMs (Claude, GPT-4o, Gemini) with access to tools and skills.

**Skills**: Modular TypeScript/JavaScript plugins that grant controlled access to system resources.

### The Flow

1. You send a message to the bot on WhatsApp/Telegram/etc.
2. The Gateway receives it and routes to the configured agent
3. The agent consults the LLM with available tools/skills
4. The LLM decides what actions to take (read files, run commands, browse web)
5. Actions execute on your machine
6. Response returns to your chat

### Skills System

Skills extend Molt Bot's capabilities. They load from three locations with this precedence:

| Priority | Location | Scope |
|----------|----------|-------|
| Highest | `&lt;workspace&gt;/skills` | Per-agent only |
| Medium | `~/.clawdbot/skills` | Shared across all agents |
| Lowest | Bundled skills | Default installation |

**ClawdHub** (`clawdhub.com`) is the public registry where you can discover and install community skills.

Skills are gated at load time using metadata conditions—they can require specific binaries, environment variables, or operating systems before activating.

## The Risks

Molt Bot is powerful. With power comes risk. Understand these before running it.

### Security Risks

**The fundamental issue:** Molt Bot has root-level access to your system. If compromised, attackers control everything.

#### Known Attack Vectors

| Risk | What Happens |
|------|--------------|
| **Gateway exposure** | Over 1,000 gateways found publicly exposed on the internet, many without authentication |
| **Prompt injection** | Malicious content in messages, links, or attachments can hijack agent behavior |
| **Credential theft** | `auth-profiles.json` stores API tokens in plaintext. Malware families (RedLine, Lumma, Vidar) now specifically target `~/.clawdbot/` |
| **mDNS broadcasting** | Default settings leak hostname, filesystem paths, and SSH availability to your local network |
| **Context leakage** | Without session isolation, multi-user setups can expose private conversations |

Security researchers describe Molt Bot as a **"primary target for infostealers in the AI era."**

> Treat Molt Bot like a production server, not a weekend side project.

### Cost Risks

API costs can escalate quickly with autonomous agents.

| Usage Level | Monthly Cost |
|-------------|--------------|
| Light (casual queries) | $20-50 |
| Moderate (daily automation) | $50-100 |
| Heavy (complex multi-agent) | $100-300 |
| Extreme | $3,600+ |

**Claude Opus 4.5 pricing:** $5 per million input tokens, $25 per million output tokens.

Costs compound with:
- Long conversations (context accumulates)
- Frequent tool use (each action = more tokens)
- Multi-agent setups (parallel processing)

**Mitigation:** Use prompt caching (0.1x cost for cached reads), batch API (50% discount), and set hard spending limits in your Anthropic dashboard.

### Reliability Risks

**Agent drift:** LLMs can misinterpret instructions, especially with ambiguous commands, untrusted content, or complex multi-step tasks.

**Model susceptibility:** Older and smaller models are more vulnerable to prompt injection. Anthropic's Opus 4.5 has the strongest resistance.

**No undo:** If the agent deletes files, runs destructive commands, or sends embarrassing messages—there's no rollback.

## Installation

```bash
npm install -g moltbot@latest && moltbot onboard --install-daemon
```

**Requirements:**
- Node.js &gt;= 22 (check with `node -v`)
- A 24/7 device (Mac Mini, Linux box, Raspberry Pi, or cloud VM)
- API key from Anthropic, OpenAI, or another supported provider

The onboarding wizard will guide you through initial configuration.

## Security Hardening

Do this **before** exposing Molt Bot to any messaging channel.

### 1. Bind to Localhost Only

```json5
// ~/.clawdbot/moltbot.json
{
  gateway: {
    bind: "loopback",
    port: 18789
  }
}
```

This prevents external network access to your gateway.

### 2. Enable Authentication

Generate a secure token:

```bash
moltbot doctor --generate-gateway-token
```

Configure it:

```json5
{
  gateway: {
    auth: {
      mode: "token",
      token: "your-long-random-token"
    }
  }
}
```

### 3. Run the Security Audit

```bash
moltbot security audit --deep --fix
```

This identifies vulnerabilities and auto-fixes common issues like file permissions.

### 4. Enable Sandboxing

Run tools in isolated Docker containers:

```json5
{
  agents: {
    defaults: {
      sandbox: {
        mode: "all",
        workspaceAccess: "ro"  // read-only
      }
    }
  }
}
```

Workspace access options:
- `"none"`: Most restrictive, sandbox only
- `"ro"`: Read-only access to agent workspace
- `"rw"`: Read/write access (use with caution)

### 5. Restrict DM Access

Keep pairing mode enabled (default):

```json5
{
  channels: {
    whatsapp: {
      dmPolicy: "pairing"
    }
  }
}
```

Unknown senders must complete a pairing handshake before the bot processes their messages.

### 6. Require Mentions in Groups

Prevent the bot from responding to every message:

```json5
{
  channels: {
    whatsapp: {
      groups: {
        "*": { requireMention: true }
      }
    }
  },
  agents: {
    list: [{
      id: "main",
      groupChat: {
        mentionPatterns: ["@moltbot", "@mybot"]
      }
    }]
  }
}
```

### 7. Disable mDNS Broadcasting

Stop leaking information to your local network:

```bash
export MOLTBOT_DISABLE_BONJOUR=1
```

Or in config:

```json5
{
  discovery: {
    mdns: { mode: "off" }
  }
}
```

### 8. Lock Down File Permissions

```bash
chmod 700 ~/.clawdbot/
chmod 600 ~/.clawdbot/moltbot.json
chmod 600 ~/.clawdbot/agents/*/agent/auth-profiles.json
```

Or let the tool fix it:

```bash
moltbot security audit --fix
```

## Best Practices

### Do

- Use a **dedicated device or VM** for Molt Bot
- Create **bot-specific accounts** with limited permissions
- Set **API spending limits** in your provider dashboard
- **Review skills** before installing from ClawdHub
- Use **latest-gen models** (Opus 4.5) for tool-enabled agents
- Keep **secrets in environment variables**, not prompts
- Start with **read-only access**, expand cautiously

### Don't

- Run on your primary machine with sensitive data
- Use your personal WhatsApp or email account
- Let API costs run unchecked
- Blindly trust third-party skills
- Use legacy models for sensitive operations
- Paste API keys into conversations
- Grant full write/exec permissions from day one
- Set `allowFrom: "*"` unless you want the internet controlling your PC

## Useful Commands

```bash
# Check overall status
moltbot status --all

# Diagnose configuration issues
moltbot doctor

# Security scan
moltbot security audit
moltbot security audit --deep
moltbot security audit --fix

# Manage pairing requests
moltbot pairing list <channel>
moltbot pairing approve <channel> <code>

# Open web dashboard
moltbot dashboard
# Then visit http://127.0.0.1:18789/
```

## Incident Response

If you suspect compromise:

### Immediate Containment

1. Stop the gateway: `pkill -f moltbot` or stop the macOS app
2. Set `gateway.bind: "loopback"` in config
3. Disable risky DM/group access

### Rotate All Secrets

1. Gateway token (`gateway.auth.token`)
2. Remote client secrets (`gateway.remote.token`)
3. Provider credentials (Anthropic API key, WhatsApp creds, etc.)

### Investigate

1. Review logs: `/tmp/moltbot/moltbot-*.log`
2. Check session transcripts: `~/.clawdbot/agents/*/sessions/*.jsonl`
3. Audit recent config changes

## Credential Storage Reference

Know where sensitive data lives:

| Type | Location |
|------|----------|
| WhatsApp credentials | `~/.clawdbot/credentials/whatsapp/&lt;accountId&gt;/creds.json` |
| Telegram token | Config or `channels.telegram.tokenFile` |
| Discord token | Config/env only |
| Slack tokens | Config/env (`channels.slack.*`) |
| Pairing allowlists | `~/.clawdbot/credentials/&lt;channel&gt;-allowFrom.json` |
| Model API keys | `~/.clawdbot/agents/&lt;agentId&gt;/agent/auth-profiles.json` |
| Session transcripts | `~/.clawdbot/agents/&lt;agentId&gt;/sessions/*.jsonl` |

## Secure Baseline Configuration

A hardened starting point:

```json5
// ~/.clawdbot/moltbot.json
{
  gateway: {
    mode: "local",
    bind: "loopback",
    port: 18789,
    auth: {
      mode: "token",
      token: "your-long-random-token"
    }
  },
  channels: {
    whatsapp: {
      dmPolicy: "pairing",
      groups: {
        "*": { requireMention: true }
      }
    }
  },
  logging: {
    redactSensitive: "tools"
  },
  discovery: {
    mdns: { mode: "minimal" }
  },
  agents: {
    defaults: {
      sandbox: {
        mode: "all",
        workspaceAccess: "ro"
      }
    }
  }
}
```

## Final Thoughts

Molt Bot is a powerful tool with legitimate use cases. Developers are running it on Mac Minis as "24/7 AI employees." But it requires serious operational security.

The official docs say it best:

> "There is no perfectly secure setup."

Start minimal. Expand only as confidence grows. And remember: if an AI agent has access to your system, treat its security like you would a production server exposed to the internet.

## Resources

**Official:**
- [Moltbot Documentation](https://docs.molt.bot/)
- [GitHub Repository](https://github.com/moltbot/moltbot)
- [ClawdHub Skills Registry](https://clawdhub.com)

**Security Analysis:**
- [Security Boulevard: When AI Gets Root Access](https://securityboulevard.com/2026/01/clawdbot-is-what-happens-when-ai-gets-root-access-a-security-experts-take-on-silicon-valleys-hottest-ai-agent/)
- [SOCRadar: Is It Actually Safe?](https://socradar.io/blog/clawdbot-is-it-safe/)
- [InfoStealers: Primary Target for Malware](https://www.infostealers.com/article/clawdbot-the-new-primary-target-for-infostealers-in-the-ai-era/)

**Guides:**
- [MacStories: Future of Personal AI Assistants](https://www.macstories.net/stories/clawdbot-showed-me-what-the-future-of-personal-ai-assistants-looks-like/)
- [iWeaver: Ultimate Guide](https://www.iweaver.ai/blog/clawdbot-guide-how-to-deploy-ai-assistant/)
- [DEV Community: Getting Started](https://dev.to/ajeetraina/getting-started-with-clawdbot-the-complete-step-by-step-guide-2ffj)
