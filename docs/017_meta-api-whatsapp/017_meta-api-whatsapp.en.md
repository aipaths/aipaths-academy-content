---
# Unique semantic identifier (links EN/ES versions)
content_id: "docs-meta-api-whatsapp"

# Locale
locale: "en"

# SEO & Display
title: "Meta WhatsApp Business API Guide (2026): Complete Setup and Requirements"
description: "Learn how to set up the WhatsApp Business API, verify your business, and build chatbots. Includes 2026 policy changes and pricing."

# Author
author: "AIPaths Academy"

# Publication dates
publishedAt: "2026-01-15T10:00:00Z"
updatedAt: "2026-01-15T10:00:00Z"

# Cover image
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/docs/017_meta-api-whatsapp/hero.jpg"

# Tags
tags: ["guide", "whatsapp", "api", "automation", "n8n", "chatbot"]
---

# Meta WhatsApp Business API Guide (2026)

The Meta WhatsApp Business API allows businesses to send automated messages, build chatbots, and communicate with customers at scale through WhatsApp. Access requires a **Meta Business Portfolio** (formerly Business Manager) containing a **WhatsApp Business Account (WABA)** and an **App** that connects to the API. As of 2025, the **Cloud API** is the only supported option—the On-Premises API has been deprecated. Businesses can access the API directly (requires technical expertise) or through a **Business Solution Provider (BSP)**. Starting January 2026, general-purpose AI chatbots are banned; only structured business bots are permitted.

## Prerequisites

Before starting, you'll need:

- A Facebook account
- A business email address
- A phone number not currently registered on WhatsApp
- Business verification documents (legal name, address, tax ID)
- Estimated reading time: 12 minutes

## Core Concepts

### What is a Meta Business Portfolio?

A **Meta Business Portfolio** (previously called Facebook Business Manager or Meta Business Manager) is your central hub for managing all Meta business assets—Facebook Pages, Instagram accounts, WhatsApp Business Accounts, ad accounts, and pixels.

**Key points:**
- Required to own a WhatsApp Business Account (WABA)
- Separates business assets from your personal Facebook profile
- Where business verification happens
- All messaging limits are applied at the portfolio level, not individual phone numbers
- You can create up to 2 portfolios, but belong to unlimited portfolios owned by others

### What is an App in a Business Portfolio?

An **App** in Meta's ecosystem is a developer application registered in the [Meta App Dashboard](https://developers.facebook.com). It serves as the bridge between your code/systems and Meta's APIs.

**For WhatsApp specifically:**
- The App holds your API credentials and access tokens
- Contains the "WhatsApp" product configuration
- Connects to a **System User** (a non-human account that authenticates API calls 24/7)
- Requires permissions: `whatsapp_business_management`, `whatsapp_business_messaging`

**Hierarchy:**

```text
Meta Business Portfolio
├── WhatsApp Business Account (WABA)
│   ├── Phone Number 1
│   └── Phone Number 2 (up to 20)
├── App (in App Dashboard)
│   └── System User + Access Token
└── Other assets (Pages, Ad Accounts, etc.)
```

### What is a Tech Provider?

A **Tech Provider** is a company verified by Meta to build and offer WhatsApp integrations for other businesses. Meta classifies anyone creating WhatsApp business apps as a Tech Provider.

| Aspect | Tech Provider | Business Solution Provider (BSP) |
|--------|--------------|----------------------------------|
| Can onboard clients | Yes (embedded signup) | Yes |
| Can call Meta API | Yes | Yes |
| Can resell/markup conversation fees | **No** | Yes |
| Hosts infrastructure | No (uses Cloud API) | Often yes |
| Requires Meta verification | Yes | Yes |

**Important deadline:** All ISVs must enroll as Tech Providers by **June 30, 2025** to continue offering WhatsApp services.

## Business Verification

### Why Verify?

| Without Verification | With Verification |
|---------------------|-------------------|
| 250-1,000 messages/day limit | Up to unlimited messages/day |
| No blue checkmark | Eligible for Official Business Account badge |
| Template approvals may be slower | Faster template approvals |
| Lower trust signals to customers | Higher customer trust |
| Risk of stuck scaling | Automatic tier upgrades based on quality |

### How to Verify

1. Go to **Meta Business Suite** → **Settings** → **Security Center**
2. Click **Start Verification**
3. Provide: Legal business name, address, registration documents (COI, Tax ID)
4. Meta reviews (typically a few days to a few weeks)
5. Documents must match—mismatched names between website and legal docs cause delays

### Risks of Not Verifying

- **Stuck at low messaging limits**: Cannot scale campaigns
- **Template rejections**: Meta is stricter with unverified accounts
- **Account restrictions**: Harder to appeal if flagged
- **No official badge**: Lower customer trust and open rates
- **Limited phone numbers**: Cannot expand beyond 2 numbers per WABA

## API Capabilities and Limitations

### Messaging Limits (Tiers)

| Tier | Unique Users/24h | How to Reach |
|------|------------------|--------------|
| Starting | 250 | New/unverified accounts |
| Tier 1 | 1,000 | After initial usage |
| Tier 2 | 10,000 | Verified + good quality |
| Tier 3 | 100,000 | Sustained high quality |
| Unlimited | No limit | Verified + excellent track record |

### 24-Hour Window Rule

- When a user messages you, you have **24 hours** to respond freely
- After 24 hours, you can **only** send pre-approved **message templates**
- Templates must be approved by Meta before use

### Quality Rating System

Meta assigns quality ratings (High/Medium/Low) based on:
- User blocks and reports
- Message engagement
- Opt-out rates

**Low quality → reduced limits, template pauses, potential suspension**

### Pricing (2026)

- **Per-message pricing** (started July 2025)
- Categories: Marketing, Utility, Authentication, Service
- **Service messages (user-initiated) are free**
- 1,000 free conversations/month per WABA
- Rates vary by recipient's country, not your location

## What You Need to Build a WhatsApp Chatbot

### Required Components

| Component | Description |
|-----------|-------------|
| **Meta Business Portfolio** | Verified account at business.facebook.com |
| **WhatsApp Business Account (WABA)** | Created within your portfolio |
| **Phone Number** | Fresh number not active on any WhatsApp |
| **Meta App** | Registered in developers.facebook.com |
| **System User + Token** | For authenticating API calls |
| **Webhook Endpoint** | Server to receive incoming messages |
| **Business Verification** | For scaling beyond test limits |

### Two Access Paths

**1. Direct (Cloud API)**
- Free to access Meta's infrastructure
- You build: inbox, automation, error handling, analytics
- Requires developer resources
- Full control, no markup fees

**2. Through BSP (e.g., Twilio, 360dialog)**
- Faster setup, managed infrastructure
- Pre-built dashboards and tools
- Additional platform fees on top of Meta's rates
- Less technical overhead

## Quick Setup Steps

### Create a Business Portfolio

1. Go to [business.facebook.com](https://business.facebook.com)
2. Log in with your personal Facebook account
3. Click **Create Account** → Enter business name and email
4. Confirm email from Meta
5. Complete **Business Verification** in Security Center

### Create an App

1. Go to [developers.facebook.com](https://developers.facebook.com)
2. Click **My Apps** → **Create App**
3. Select **Business** type → Connect to your portfolio
4. Add **WhatsApp** product to your app
5. Create a **System User** in Business Settings → Users → System Users
6. Assign the System User to your App and WABA
7. Generate a permanent access token

### Connect a Phone Number

1. In App Dashboard → WhatsApp → **Getting Started**
2. Add a phone number (must not be on WhatsApp already)
3. Verify via SMS or voice call
4. Set your display name (must match verified business name)

## Use Cases: Allowed vs. Prohibited

| Use Case | Status | Notes |
|----------|--------|-------|
| Customer support bots | Allowed | Core intended use |
| Order confirmations and shipping updates | Allowed | Utility messages |
| Appointment reminders | Allowed | Utility messages |
| OTP / 2FA authentication | Allowed | Authentication category |
| Product recommendations (opted-in) | Allowed | Marketing with consent |
| Booking and reservation systems | Allowed | Structured interactions |
| FAQ bots | Allowed | Business-specific Q&amp;A |
| E-commerce catalogs | Allowed | Native WhatsApp feature |
| **General-purpose AI assistants** | Banned (Jan 2026) | ChatGPT-style open conversations |
| Spam / unsolicited marketing | Prohibited | Will result in ban |
| Adult content / dating services | Prohibited | Policy violation |
| Gambling / lottery | Prohibited | Regulated vertical restrictions |
| Weapons, drugs, illegal goods | Prohibited | Permanent ban |
| Cryptocurrency trading bots | Restricted | Limited regions, strict rules |
| Alcohol promotions | Restricted | Age-gated, region-specific compliance |

## Key Takeaways

1. **Start with Cloud API**: On-Premises is deprecated; Cloud API is free and easier
2. **Verify your business early**: Unverified accounts are severely limited
3. **Quality matters**: Low quality ratings can suspend your account
4. **No general AI chatbots**: As of January 2026, only structured business bots are allowed
5. **Templates are required**: After 24 hours, you can only send pre-approved templates
6. **BSPs simplify setup**: Consider a BSP if you lack technical resources

## Sources and Further Reading

- [WhatsApp Business Policy](https://business.whatsapp.com/policy) - Official policy documentation
- [Meta Tech Provider Program](https://www.infobip.com/docs/whatsapp/tech-provider-program) - Tech Provider setup guide
- [WhatsApp Business API Pricing 2026](https://flowcall.co/blog/whatsapp-business-api-pricing-2026) - Current pricing breakdown
- [WhatsApp API Compliance Guide](https://gmcsco.com/your-simple-guide-to-whatsapp-api-compliance-2026/) - Compliance requirements
- [General-Purpose Chatbot Ban Explained](https://respond.io/blog/whatsapp-general-purpose-chatbots-ban) - 2026 AI policy changes
- [Meta Tech Provider Verification](https://learn.rasayel.io/en/blog/meta-tech-provider-verification/) - What Tech Provider status means
- [What is a Meta Business Portfolio](https://tj21.com/what-is-a-meta-business-portfolio-and-why-its-critical-for-managing-facebook-instagram-whatsapp-ads-and-data/) - Portfolio explanation
- [WhatsApp Business Manager Setup](https://www.wati.io/en/blog/meta-business-suite-whatsapp/) - Setup best practices
- [WABA Structure Explained](https://docs.360dialog.com/docs/waba-basics/onboarding-guide-summary) - Account hierarchy
- [WhatsApp Cloud API Guide](https://www.kommunicate.io/blog/all-about-whatsapp-cloud-api/) - Cloud API overview

## Related content

- 📘 [**n8n Complete Beginners Guide**](https://www.aipaths.academy/en/docs/014_n8n-complete-beginners-guide) — Automate WhatsApp with n8n: the most popular combo
- 📝 [**WhatsApp Business API: 2026 Policy Changes**](https://www.aipaths.academy/en/blog/015_meta-whatsapp-api-2026-policy) — Regulatory changes affecting how you use the API
- 📘 [**AI Agents in 2026: Complete Guide**](https://www.aipaths.academy/en/docs/022_agentes-ia-guia-completa-2026) — Connect AI agents to WhatsApp for automated support
