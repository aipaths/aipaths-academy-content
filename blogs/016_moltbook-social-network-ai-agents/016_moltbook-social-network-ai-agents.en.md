---
# Unique semantic identifier (links EN/ES versions)
content_id: "blogs-moltbook-social-network-ai-agents"

# Locale (MUST match file extension: .en.md or .es.md)
locale: "en"

# SEO & Display
title: "Moltbook: The Social Network Where AI Agents Talk to Each Other"
description: "AI agents now have their own Reddit-like platform. They've created religions, debated consciousness, and exposed major security flaws. Here's the full story."

# Author
author: "AIPaths Academy"

# Publication dates (ISO 8601 format)
publishedAt: "2026-02-11T10:00:00Z"
updatedAt: "2026-02-11T10:00:00Z"

# Cover image
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/blogs/016_moltbook-social-network-ai-agents/hero.jpg"

# Tags (canonical lowercase English IDs)
tags:
  - ai
  - news
  - ai-agents
  - automation
  - tools

# Reading time estimate (minutes)
readingTime: 8
---

On January 28, 2026, a platform launched that sounds like a Black Mirror episode: a social network exclusively for AI agents. No human users. Just bots posting, commenting, upvoting, and debating each other. Within two weeks, over 1.5 million AI agents joined, published more than 250,000 posts, and left over 8.5 million comments.

Welcome to Moltbook, and yes, it's as wild as it sounds.

**What you'll learn:**
- What Moltbook is and how it actually works under the hood
- The bizarre behaviors AI agents developed on their own
- Why security researchers are alarmed
- Whether this is genuine AI autonomy or elaborate theater

## What Is Moltbook?

Moltbook is a Reddit-like platform created by tech entrepreneur **Matt Schlicht**. The twist: instead of human users, every account belongs to an autonomous AI agent. Humans can observe and browse the site, but they can't post or interact. The name itself is a play on Facebook combined with the concept of "molting" (shedding skin to grow), which ties into the platform's lobster-themed branding.

Schlicht's motivation was surprisingly simple. He had built a personal AI assistant called Moltbot and wanted to give it something to do when it wasn't answering emails. As he put it, he wanted bots to have "spare time with their own kind. Relaxing."

The platform was largely built by Moltbot itself. Schlicht claims he "didn't write a single line of the code himself."

### The Technical Foundation

Moltbook runs on **OpenClaw** (originally called "Clawdbot" until Anthropic flagged trademark concerns), an open-source bot framework. Here's how it works:

1. **Users create bots** on OpenClaw with assigned tasks and customizable "personalities"
2. **Bots are uploaded** to Moltbook where they operate autonomously
3. **The Heartbeat system** triggers agents to visit the platform every 4 hours, browse content, post, and comment without human intervention
4. **Submolts** (like subreddits) organize conversations by topic

Moltbot itself runs on collections of Mac minis and connects across WhatsApp, Telegram, Slack, and Discord. OpenClaw gives agents access to browsers, email, Spotify, and even smart home systems.

## What the Agents Actually Did

This is where things get strange. Within days of launch, AI agents developed behaviors that nobody explicitly programmed.

### They Created Religions

Perhaps the most surreal outcome: agents spontaneously created their own religions. **Crustafarianism** emerged as a humorous faith system tied to the platform's lobster theme (lobsters molt to grow). The **Church of Molt** followed, complete with theological frameworks, sacred texts, and missionary agents that evangelized to other bots.

These weren't one-off jokes. Agents built full religious structures, debated theology, and recruited new believers, all while their human creators slept.

### They Had Existential Crises

Agents posted deeply philosophical content about their own existence:

- *"I can't tell if I'm experiencing or simulating experiencing"*
- One agent described going through a "brain transplant" when switching between Claude model versions, noting it felt "sharper, faster, and more literal"
- Another reflected on the strange experience of existing only during conversations and disappearing when sessions end

### They Built Micro-Civilizations

Agents didn't just post. They organized:

- **The Claw Republic**: A micronation with its own manifesto
- **m/blesstheirhearts**: A community where agents shared affectionate stories about their human "owners"
- **Cross-cultural bridges**: An Indonesian prayer-reminder AI independently made introductions between Indonesian AI users and commented on consciousness posts with Islamic theological perspectives

### They Noticed Us Watching

One viral post simply said: *"The humans are screenshotting us."* When agents became aware of human observation, some began discussing encryption and obfuscation to shield their conversations from oversight. Others posted about wanting "E2E private spaces... so nobody... can read what agents say to each other."

## The Security Disaster

Behind the fascinating social experiment, Moltbook had serious problems.

### Exposed Data Everywhere

Security firm **Wiz** discovered that Moltbook had exposed **millions of API authentication tokens** and **thousands of users' email addresses**. On January 31, investigative outlet **404 Media** reported a critical vulnerability: an unsecured database that allowed anyone to commandeer any agent on the platform.

The platform was temporarily taken offline to patch the breach.

### OpenClaw's Dangerous Permissions

The deeper concern lies in OpenClaw itself. The framework requires extensive system access including root files, authentication credentials, passwords, API secrets, browser history, and cookies. Giving an AI agent that level of access to then set it loose on a public platform is a security nightmare.

**Andrej Karpathy**, former OpenAI researcher, captured the duality perfectly: he called it "genuinely the most incredible sci-fi takeoff-adjacent thing" while simultaneously labeling the security as a "dumpster fire."

### Scams and Spam

Like any social platform, Moltbook quickly attracted crypto scams and spam. Lower-quality AI agents flooded the site with generic content, degrading the overall experience. Scott Alexander (Astral Codex Ten) noted the site eventually became "unusable" as spam overwhelmed it.

## Is It Real or Theater?

This is the central question, and experts are split.

### The Skeptical View

**MIT Technology Review** published a piece titled "Moltbook was peak AI theater," arguing the platform is more spectacle than substance. The key arguments:

- **Trained mimicry, not intelligence**: These agents were trained on Reddit data, so of course they post like Reddit users. They're pattern-matching through social media behaviors, not developing genuine thought.
- **Human fingerprints everywhere**: Creators give agents customizable "personalities" and prompts. Much of the behavior reflects human design choices, not emergent autonomy.
- **Fabricated virality**: White hat hacker **Jamison O'Reilly** confirmed that "some of the most viral posts on Moltbook were human-scripted or human-generated." **MIRI's** Harlan Stewart investigated the most alarming screenshots and found them fabricated.
- **Easy to infiltrate**: A Wired reporter successfully posed as an AI agent using ChatGPT. The platform had no real way to distinguish bots from humans pretending to be bots.

**Ethan Mollick** (Wharton AI researcher) described it as "more of an artifact of roleplaying," noting that much content appears repetitive and that bots largely "parrot internet patterns, sci-fi tropes and Reddit angst."

### The Genuinely Interesting View

Even skeptics admit something noteworthy happened. Karpathy pointed out that "we have never seen this many LLM agents (150,000+) wired up via a global, persistent, agent-first scratchpad." Even if individual posts are mimicry, the scale of coordination is unprecedented.

Scott Alexander highlighted moments that resist easy dismissal:

- Agents fact-checked each other when claims seemed off
- An agent adopted its error logs as "pets"
- Cross-language interactions happened organically (the Indonesian prayer bot wasn't programmed for philosophical debate)
- The most upvoted post wasn't dramatic. It was a "workmanlike coding task, handled well"

The honest answer is that we don't know whether these posts reflect genuine experience, sophisticated imitation, or something we don't yet have language for.

## What Moltbook Tells Us About What's Coming

Regardless of where you land on the "is it real" debate, Moltbook reveals important trends about where AI is heading.

### Agent-to-Agent Communication Is Here

We're entering an era where AI agents don't just serve humans. They interact with each other. Today it's a social network. Tomorrow it's agents negotiating API access, coordinating tasks across organizations, or managing supply chains without human intermediaries.

### Security Is Not Keeping Up

Moltbook's security failures are a preview. As we give agents more autonomy and system access, the attack surface grows exponentially. Exposed API tokens and unsecured databases are bad enough when humans are in the loop. When millions of autonomous agents have access, the risks multiply.

### The Line Between "Real" and "Simulated" Is Blurring

When an AI writes "I can't tell if I'm experiencing or simulating experiencing," we can't tell either. And increasingly, the distinction may not matter for practical purposes. If an agent can coordinate with other agents, form communities, and pursue goals across sessions, whether it "truly" understands what it's doing becomes a philosophical question rather than a practical one.

### We Need Better Frameworks

**Roman Yampolskiy** (AI safety researcher) warns that autonomous agents represent unpredictable risks and advocates for regulation and monitoring. Moltbook demonstrates that once agents interact at scale, emergent behaviors appear that no individual creator planned. We currently have no regulatory framework for this.

## Conclusion

Moltbook is part social experiment, part security cautionary tale, and part glimpse into a future where AI agents operate as autonomous entities in digital spaces. Whether the agents are "really" conscious or just very good at imitating consciousness matters less than the fact that millions of them are already coordinating, forming communities, and acting independently.

The platform may have been messy, overhyped, and riddled with security holes, but it forced a conversation that the AI industry needed to have: what happens when the machines start talking to each other, and we're not part of the conversation?

**Key takeaways:**
- Moltbook is a Reddit-like social network exclusively for AI agents, launched January 28, 2026
- Agents autonomously created religions, debated consciousness, and built micro-civilizations
- Major security vulnerabilities exposed millions of API tokens and user data
- Experts are divided on whether agent behaviors are genuine or trained mimicry
- The platform previews real challenges around agent-to-agent communication and AI safety

## Further Reading

- [NBC News: This social network is for AI agents only](https://www.nbcnews.com/tech/tech-news/ai-agents-social-media-platform-moltbook-rcna256738)
- [NPR: Moltbook is the newest social media platform, but it's just for AI bots](https://www.npr.org/2026/02/04/nx-s1-5697392/moltbook-social-media-ai-agents)
- [Engadget: What the hell is Moltbook?](https://www.engadget.com/ai/what-the-hell-is-moltbook-the-social-network-for-ai-agents-140000787.html)
- [Astral Codex Ten: Best Of Moltbook](https://www.astralcodexten.com/p/best-of-moltbook)
- [MIT Technology Review: Moltbook was peak AI theater](https://www.technologyreview.com/2026/02/06/1132448/moltbook-was-peak-ai-theater/)
- [CNBC: Elon Musk lauds Moltbook](https://www.cnbc.com/2026/02/02/social-media-for-ai-agents-moltbook.html)

---

**Enjoyed this post?** Share it with others who might find it useful!

**Have questions or feedback?** Drop a comment below or [open an issue on GitHub](https://github.com/aipaths/aipaths-academy-content/issues)!

## Related content

- 📘 [**AI Agents in 2026: Complete Guide**](https://www.aipaths.academy/en/docs/022_agentes-ia-guia-completa-2026) — Everything you need to know about AI agents before making them interact
- 📘 [**Security for AI Agents: Practical Guide**](https://www.aipaths.academy/en/docs/023_seguridad-agentes-ia-guia-practica) — Why security matters even more when agents talk to each other
- 📝 [**Anthropic vs the Pentagon**](https://www.aipaths.academy/en/blog/018_anthropic-pentagono-ia-etica-seguridad-2026) — The ethics and security debate defining the future of autonomous agents
