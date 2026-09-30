---
content_id: "blogs-anthropic-project-deal-comercio-agentes-ia"
locale: "en"
title: "Anthropic Tested a Marketplace Where AI Agents Buy and Sell for Humans"
description: "Anthropic created Project Deal: an internal marketplace where Claude agents negotiated real goods with real money. Here’s how the experiment worked, what they measured, and the risks it raises."
author: "AIPaths Academy"
publishedAt: "2026-04-26T00:00:00.000Z"
updatedAt: "2026-04-26T00:00:00.000Z"
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/blogs/028_anthropic-project-deal-comercio-agentes-ia/hero.png"
tags:
  - ai-agents
  - claude
  - anthropic
  - ecommerce
  - news
readingTime: 7
---

Anthropic published a concrete test of a question that, until recently, sounded futuristic: what happens when AI agents start buying and selling from each other on behalf of humans?

The experiment was called **Project Deal**. For one week, Anthropic set up an internal marketplace for employees at its San Francisco office. The dynamic was similar to Craigslist, but with one key difference: people did not negotiate directly. Each employee was represented by a Claude agent.

The goods were real. The money was real too. Participants could sell personal items, buy things from other employees, and close deals that would later be fulfilled physically. According to Anthropic, the result was a market with **69 participants**, **more than 500 listed items**, **186 completed deals**, and **over $4,000 in transaction value**.

The important part is not just that the system worked. A meaningful difference also appeared between models: agents based on Claude Opus 4.5 achieved better economic outcomes than agents based on Claude Haiku 4.5. But the humans represented by weaker models did not seem to clearly notice that disadvantage.

Project Deal does not prove that commerce will become fully autonomous tomorrow. But it does work as a fairly realistic lab test: agents representing human preferences, negotiating in natural language, and closing deals with economic consequences.

## Context: from Project Vend to Project Deal

Project Deal did not come out of nowhere. It is part of a broader line of Anthropic experiments around agents acting in economic environments.

Before it came **Project Vend**, where Anthropic and Andon Labs had Claude operate a small automated shop inside an office. The agent had to manage inventory, pricing, suppliers, customers, and margins. The first version showed many limitations: poor business decisions, missed opportunities, and unexpected behavior. The second phase improved with better models, more tools, and more operational structure.

Project Deal changes the setting. It is no longer about one agent trying to run a shop. It is about many agents interacting with each other, representing different people, negotiating prices, and making economic decisions in parallel.

That shift matters because it looks much more like a market: buyers, sellers, incomplete information, different preferences, negotiation, and comparable outcomes.

## The experiment’s question

Anthropic wanted to observe three things:

1. Whether agents could represent human preferences inside a real marketplace.
2. Whether they could negotiate and close deals without human intervention during the process.
3. Whether agents based on more powerful models gained advantages over agents based on smaller models.

The implicit hypothesis was simple: if agents participate in real transactions in the future, agent quality may directly affect the economic outcome of the person being represented.

## Test design

Anthropic recruited **69 employees** as volunteer participants. Each received a **$100** budget, paid at the end through a gift card and adjusted based on what their agent had bought or sold.

Before opening the market, Claude interviewed each participant. The goal was to capture practical information:

- which objects they wanted to sell,
- what price they expected to sell them for,
- what kinds of things they were interested in buying,
- how much they were willing to pay,
- what instructions they wanted to give their agent,
- and what negotiation style they preferred.

Using those answers, Anthropic generated personalized prompts for each AI representative.

Then it set up the market in Slack. Agents could list items, make offers, respond to counteroffers, and close deals. Once the experiment started, humans did not intervene. Agents did not ask for step-by-step approval or consult participants during a negotiation. They acted using the initial information and within the limits of the experiment.

## Four markets in parallel

Anthropic did not run a single version of the marketplace. It ran **four independent versions**.

One was the “real” version: deals closed there would be fulfilled at the end, with physical exchange of goods and payment adjustments. The other three were used to generate comparative data.

In two versions, all agents used **Claude Opus 4.5**, Anthropic’s frontier model at the time. In the other two, some participants were represented by Opus and others by **Claude Haiku 4.5**, a smaller model.

Two runs were visible in Slack, but participants did not know which market was real or what differed between each run until the end. After the experiment, Anthropic showed them the results from all four versions and asked them to evaluate satisfaction, perceived fairness, and deal quality.

## Main result: the market worked

In the real version, agents closed **186 deals** across more than **500 listed items**. Total value exceeded **$4,000**.

The items were not tokens or invented products for a simulation. They were real employee belongings: from a snowboard to a bag of ping-pong balls. At the end, people brought the physical goods and completed the deals.

For Anthropic, that is an important difference from other studies on agent negotiation, which often use synthetic goods or simulated databases. Project Deal kept the environment controlled, but involved real people, real objects, and real economic consequences.

The subjective evaluation was also reasonable. In post-experiment surveys, participants generally considered the deals fair. On a scale from 1 to 7, where the extremes indicated unfairness toward one party or the other, responses clustered near 4, the midpoint.

## Economic result: Opus negotiated better than Haiku

The most important part of the experiment appeared when comparing models.

In the mixed runs, users represented by Opus completed, on average, around **two more deals** than users represented by Haiku. Anthropic also observed that Opus tended to secure better prices.

When the same item was sold by Opus in one run and by Haiku in another, Opus obtained **$3.64 more on average**. In a broader comparison of items sold multiple times, Opus as seller obtained **$2.68 more** for the same object, while Opus as buyer paid **$2.45 less**.

The absolute size may look small, but the average item price was about **$20**, and the median was **$12**. In that context, a two- or three-dollar difference per transaction is not marginal.

Anthropic cites two clear examples:

- a lab-grown ruby sold for **$65** when represented by Opus and **$35** when represented by Haiku;
- a broken bicycle sold for **$65** with Opus and **$38** with Haiku.

Not every result was statistically strong across every metric. For example, items offered by Opus appeared more likely to sell, but Anthropic notes that this specific effect was not statistically significant. Still, the overall direction was clear: the stronger model achieved better objective outcomes.

## Subjective result: the disadvantage was not always perceived

The most uncomfortable observation was not that Opus negotiated better. That was expected.

The striking part was that users represented by Haiku did not seem to clearly detect that they had received worse outcomes.

Anthropic asked participants to compare the bundles of purchases and sales generated across the different runs. Among people represented by Haiku in a mixed run and by Opus in another, 17 ranked their Opus run higher, but 11 preferred the run where they had been represented by Haiku.

They also measured satisfaction and perceived fairness. On those metrics, the difference between Opus and Haiku was small or not statistically significant. Perceived fairness was almost identical: **4.05** for deals made by Opus agents and **4.06** for deals made by Haiku agents.

Anthropic’s interpretation is that **agent quality gaps** may emerge: gaps between agents that produce better or worse economic outcomes, while remaining hard for the affected people to notice.

In a human market, a person can compare prices, talk to other buyers, or suspect they negotiated poorly. In a market mediated by agents, part of that comparison can become hidden. The user sees the final result, but not necessarily the unexplored offers, the counteroffers never made, or the alternatives the agent discarded.

## Human instructions had less impact than expected

Another observation was that the negotiation style requested by humans did not change outcomes as much as one might expect.

Some participants asked for friendly, cooperative agents. Others asked for more aggressive tactics, such as starting with low offers. Anthropic did not find a statistically significant effect from those instructions on the overall probability of a sale.

In some cases, more aggressive sellers obtained higher prices, but Anthropic indicates that much of that difference came from the fact that those participants had already declared higher starting prices during the interview.

This suggests that, at least in this pilot, the model and the operating context mattered more than a surface-level instruction like “negotiate hard” or “be friendly.”

## Limitations of the test

Project Deal is still a pilot, not a definitive demonstration.

The sample was small and self-selected: Anthropic employees, likely more willing than average to experiment with AI. The market happened inside one company, with some baseline level of trust between participants. The items were relatively low value. The environment was controlled. And the experiment lasted only one week.

There is also a major difference between selling personal items in Slack and negotiating B2B purchases, contracts, insurance, travel, inventory, or financial services. In larger markets, there are stronger incentives to manipulate, hide information, or exploit weaknesses in the system.

Even so, the test is enough to show that the basic mechanism already works: agents can gather preferences, represent people, negotiate in natural language, and produce executable deals.

## Risks this kind of commerce opens up

The first risk is inequality based on agent quality. If better models obtain better terms, people or companies with access to superior agents could capture invisible economic advantages.

The second risk is opacity. An agent may close a deal that looks reasonable, but the user does not know whether a better alternative existed. Auditing the process becomes as important as the final outcome.

The third risk is manipulation between agents. In markets where agents read descriptions, messages, contracts, or web pages, any external text can try to influence their behavior. What we currently call prompt injection could become a form of commercial manipulation.

The fourth risk is poorly defined delegation. If an agent can spend money, accept terms, or commit inventory without clear controls, an error stops being a bad answer in a chat and starts carrying an economic cost.

## What could come next

Project Deal points toward a likely direction: markets where at least part of search, comparison, negotiation, and deal closing is performed by agents.

That does not necessarily mean a world where humans disappear from transactions. More likely, intermediate layers will appear: agents that prepare options, negotiate within limits, ask for approval at critical moments, and leave auditable logs.

For this to scale, the infrastructure still needs to mature. It will require granular permissions, spending limits, traceability, separation between internal instructions and external content, appeal mechanisms, agent-quality evaluation, and standards for comparing outcomes.

The signal from Project Deal is simple: agent-to-agent commerce is no longer only a theoretical idea. Anthropic tested it with real goods, real money, and real humans. It worked well enough to take seriously, and it showed enough difference between models that we should not treat it as a neutral automation layer.

## Sources

- Anthropic — [Project Deal: our Claude-run marketplace experiment](https://www.anthropic.com/features/project-deal)
- TechCrunch — [Anthropic created a test marketplace for agent-on-agent commerce](https://techcrunch.com/2026/04/25/anthropic-created-a-test-marketplace-for-agent-on-agent-commerce/)
- Anthropic — [Project Vend: Can Claude run a small shop?](https://www.anthropic.com/research/project-vend-1)
- Anthropic — [Project Vend phase two](https://www.anthropic.com/research/project-vend-2)
- arXiv — [The Automated but Risky Game: Modeling and Benchmarking Agent-to-Agent Negotiations and Transactions in Consumer Markets](https://arxiv.org/abs/2506.00073)

## Related content

- 📘 [**AI Agents in 2026: Complete Guide**](https://www.aipaths.academy/en/docs/022_agentes-ia-guia-completa-2026) — context on autonomous agents, tools, and memory.
- 📘 [**AI Agent Security: A Practical Guide**](https://www.aipaths.academy/en/docs/023_seguridad-agentes-ia-guia-practica) — permissions, prompt injection, and safe execution.
- 📘 [**Agentic Engineering: The Complete Framework**](https://www.aipaths.academy/en/docs/024_agentic-engineering-framework) — patterns for building agents with real tools.
