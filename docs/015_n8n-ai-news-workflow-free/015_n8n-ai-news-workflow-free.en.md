---
# Unique semantic identifier (links EN/ES versions)
content_id: "docs-n8n-ai-news-workflow-free"

# Locale (MUST match file extension: .en.md or .es.md)
locale: "en"

# SEO & Display
title: "Build a Free AI News Digest with n8n, REST API & Any AI CLI"
description: "Create an automated daily AI news workflow using n8n locally, REST API, and any AI CLI (Claude Code, Cursor, Gemini) - completely free with low-cost deployment options."

# Author
author: "AIPaths Academy"

# Publication dates (ISO 8601 format)
publishedAt: "2025-12-17T12:00:00Z"
updatedAt: "2025-12-17T12:00:00Z"

# Cover image
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/docs/015_n8n-ai-news-workflow-free/hero.jpg"

# Tags (canonical lowercase English IDs)
tags: ["n8n", "automation", "ai", "tutorial", "api", "free-tools", "ai-cli"]
---

Learn how to build a fully automated AI-powered news digest system that runs daily, curates the top 5 AI news stories, and delivers them to your inbox - all without paying for expensive automation platforms.

This guide shows you how to use **any AI CLI tool** to programmatically create n8n workflows via the REST API, giving you complete control over your automation infrastructure.

> **AI CLI Options (all work for this guide)**:
> - [Claude Code](https://claude.ai/claude-code) - Anthropic's CLI (paid, but powerful)
> - [Cursor](https://cursor.com) - Free tier available
> - [Gemini CLI](https://ai.google.dev) - Free with Google account
> - Any AI assistant with terminal access

> **What you'll build**: A scheduled workflow that fetches AI news, uses Gemini to rank articles by importance and source reputation, formats them into a beautiful HTML email, and sends it to you every morning at 8am.

## Prerequisites

Before starting, you'll need:

- **Basic terminal/command line knowledge**
- **A computer** (Mac, Linux, or Windows with WSL)
- **~30 minutes** for initial setup
- **An AI CLI tool** (Claude Code, Cursor, or similar) - optional but recommended

### Cost Breakdown

| Service | Cost | Notes |
|---------|------|-------|
| n8n | Free | Self-hosted locally |
| NewsAPI | Free | 100 requests/day on free tier |
| Google Gemini | Free | Generous free tier |
| Resend (SMTP) | Free | 3,000 emails/month |
| **Total** | **$0** | Completely free for personal use |

## Architecture Overview

Here's what we're building:

```text
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Schedule       │────▶│  NewsAPI        │────▶│  Gemini AI      │
│  (8am daily)    │     │  (Fetch news)   │     │  (Rank top 5)   │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                        │
                                                        ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Your Inbox     │◀────│  SMTP/Resend    │◀────│  Format HTML    │
│  (Daily digest) │     │  (Send email)   │     │  (Style output) │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### Why REST API Instead of UI?

- **Reproducible**: Save your workflow as code, version control it
- **AI-assisted**: Let any AI CLI build complex workflows for you
- **Faster**: No clicking through menus - just one API call
- **Scriptable**: Integrate workflow creation into CI/CD pipelines

## Setting Up n8n Locally

### Option 1: Using npm (Recommended for development)

```bash
# Install n8n globally
npm install -g n8n

# Start n8n
n8n start
```

n8n will be available at `http://localhost:5678`

### Option 2: Using Docker

```bash
# Create a directory for n8n data
mkdir ~/.n8n-docker

# Run n8n in Docker
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n-docker:/home/node/.n8n \
  n8nio/n8n
```

### Option 3: From Source (Advanced)

```bash
# Clone the repository
git clone https://github.com/n8n-io/n8n.git
cd n8n

# Install dependencies
pnpm install

# Build and start
pnpm build
pnpm start
```

### First-Time Setup

1. Open `http://localhost:5678` in your browser
2. Create your admin account
3. Complete the onboarding wizard

## Getting Your API Keys

### 1. n8n API Key (Required)

This is how we'll create workflows programmatically:

1. In n8n, go to **Settings** (bottom left)
2. Click **API**
3. Click **Create API Key**
4. Copy and save your key securely

```bash
# Save it as an environment variable
export N8N_API_KEY="your-api-key-here"
```

### 2. NewsAPI Key (Free)

1. Go to [newsapi.org](https://newsapi.org)
2. Click **Get API Key**
3. Sign up (free account)
4. Copy your API key

```bash
export NEWS_API_KEY="your-newsapi-key"
```

### 3. Google Gemini API Key (Free)

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **Create API Key**
4. Copy your API key

Then add it as a credential in n8n:
1. Go to **Credentials** in n8n
2. Click **Add Credential**
3. Search for **Google Gemini**
4. Paste your API key and save

### 4. Resend SMTP (Free)

Resend offers a generous free tier (3,000 emails/month):

1. Go to [resend.com](https://resend.com)
2. Sign up for free
3. Verify your domain or use their test domain
4. Go to **SMTP** settings and copy:
   - Host: `smtp.resend.com`
   - Port: `465`
   - Username: `resend`
   - Password: Your API key

Add SMTP credentials in n8n:
1. Go to **Credentials** in n8n
2. Click **Add Credential**
3. Search for **SMTP**
4. Fill in:
   - Host: `smtp.resend.com`
   - Port: `465`
   - User: `resend`
   - Password: Your Resend API key
   - SSL/TLS: Enabled

## Creating the Workflow via REST API

Now the fun part - creating the entire workflow with a single API call.

### Understanding the n8n REST API

The n8n REST API follows standard REST conventions:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/workflows` | List all workflows |
| GET | `/api/v1/workflows/{id}` | Get workflow details |
| POST | `/api/v1/workflows` | Create new workflow |
| PUT | `/api/v1/workflows/{id}` | Update workflow |
| DELETE | `/api/v1/workflows/{id}` | Delete workflow |

### Testing API Connection

```bash
# Test your API key
curl -s -H "X-N8N-API-KEY: $N8N_API_KEY" \
  http://localhost:5678/api/v1/workflows | jq
```

You should see a list of your existing workflows (or an empty array).

### Creating the Complete Workflow

Here's the complete workflow JSON. Save this as `ai-news-workflow.json`:

<details>
<summary><strong>Click to expand the complete workflow JSON</strong></summary>

```json
{
  "name": "Daily AI News Digest",
  "nodes": [
    {
      "parameters": {
        "rule": {
          "interval": [
            {
              "field": "hours",
              "hoursInterval": 24,
              "triggerAtHour": 8
            }
          ]
        }
      },
      "id": "schedule-trigger",
      "name": "Daily 8am Trigger",
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1.2,
      "position": [0, 0]
    },
    {
      "parameters": {
        "url": "https://newsapi.org/v2/everything",
        "sendQuery": true,
        "queryParameters": {
          "parameters": [
            {
              "name": "q",
              "value": "(artificial intelligence) OR (OpenAI) OR (Google AI) OR (Claude) OR (LLM) OR (GPT)"
            },
            {
              "name": "sortBy",
              "value": "publishedAt"
            },
            {
              "name": "language",
              "value": "en"
            },
            {
              "name": "pageSize",
              "value": "30"
            },
            {
              "name": "apiKey",
              "value": "YOUR_NEWSAPI_KEY"
            }
          ]
        },
        "options": {}
      },
      "id": "http-newsapi",
      "name": "Fetch AI News",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.2,
      "position": [220, 0]
    },
    {
      "parameters": {
        "jsCode": "const articles = $input.first().json.articles || [];\nconst articleList = articles.map((a, i) => `${i + 1}. \"${a.title}\"\\n   Source: ${a.source?.name || 'Unknown'}\\n   Description: ${a.description || 'No description'}\\n   URL: ${a.url}`).join('\\n\\n');\nconst prompt = `You are an AI news curator. Analyze these AI articles and select the TOP 5 most important based on:\\n- Source reputation (tier 1: OpenAI, Google, Anthropic blogs; tier 2: TechCrunch, Verge, Wired)\\n- Industry impact\\n- Developer relevance\\n\\nReturn ONLY a JSON array with 5 objects containing: title, source, summary (2 sentences), url, importance.\\n\\nArticles:\\n\\n${articleList}\\n\\nJSON array only:`;\nreturn [{ json: { prompt, articleCount: articles.length } }];"
      },
      "id": "code-prepare",
      "name": "Prepare AI Prompt",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [440, 0]
    },
    {
      "parameters": {
        "modelName": "models/gemini-2.5-flash",
        "options": {
          "temperature": 0.3
        }
      },
      "id": "gemini-model",
      "name": "Gemini 2.5 Flash",
      "type": "@n8n/n8n-nodes-langchain.lmChatGoogleGemini",
      "typeVersion": 1,
      "position": [660, 200]
    },
    {
      "parameters": {
        "prompt": "={{ $json.prompt }}",
        "options": {}
      },
      "id": "llm-chain",
      "name": "Rank Articles",
      "type": "@n8n/n8n-nodes-langchain.chainLlm",
      "typeVersion": 1,
      "position": [660, 0]
    },
    {
      "parameters": {
        "jsCode": "const response = $input.first().json.text || $input.first().json.response || '';\nconst today = new Date().toISOString().split('T')[0];\nlet articles;\ntry {\n  const jsonMatch = response.match(/\\[\\s*\\{[\\s\\S]*\\}\\s*\\]/);\n  articles = jsonMatch ? JSON.parse(jsonMatch[0]) : JSON.parse(response);\n} catch (e) {\n  return [{ json: { html: `<h1>Error</h1><pre>${response}</pre>`, subject: `AI News Digest - ${today}` } }];\n}\nlet html = `<!DOCTYPE html><html><head><style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:700px;margin:0 auto;padding:20px;background:#f5f5f5}.container{background:white;border-radius:12px;padding:30px;box-shadow:0 2px 8px rgba(0,0,0,0.1)}h1{color:#1a1a1a;border-bottom:3px solid #6366f1;padding-bottom:15px}.subtitle{color:#666;font-size:14px;margin-bottom:30px}.article{margin-bottom:25px;padding:20px;background:#fafafa;border-radius:8px;border-left:4px solid #6366f1}.article h2{margin:0 0 8px;font-size:18px;color:#1a1a1a}.article .source{color:#6366f1;font-weight:600;font-size:13px;margin-bottom:10px}.article .summary{color:#444;line-height:1.6;margin-bottom:10px}.article .importance{color:#666;font-style:italic;font-size:13px;margin-bottom:12px}.article a{color:#6366f1;text-decoration:none;font-weight:500}.footer{margin-top:30px;padding-top:20px;border-top:1px solid #eee;color:#999;font-size:12px;text-align:center}</style></head><body><div class=\"container\"><h1>AI News Digest</h1><p class=\"subtitle\">${today} - Top 5 stories curated by AI</p>`;\narticles.slice(0,5).forEach((a,i) => {\n  html += `<div class=\"article\"><h2>${i+1}. ${a.title}</h2><div class=\"source\">${a.source}</div><p class=\"summary\">${a.summary}</p>${a.importance ? `<p class=\"importance\">Why: ${a.importance}</p>` : ''}<a href=\"${a.url}\">Read more</a></div>`;\n});\nhtml += `<div class=\"footer\">Generated at ${new Date().toLocaleTimeString()} - n8n + Gemini</div></div></body></html>`;\nreturn [{ json: { html, subject: `AI News Digest - ${today}` } }];"
      },
      "id": "code-format",
      "name": "Format HTML Email",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [880, 0]
    },
    {
      "parameters": {
        "fromEmail": "news@yourdomain.com",
        "toEmail": "you@example.com",
        "subject": "={{ $json.subject }}",
        "emailFormat": "html",
        "html": "={{ $json.html }}",
        "options": {}
      },
      "id": "send-email",
      "name": "Send Digest Email",
      "type": "n8n-nodes-base.emailSend",
      "typeVersion": 2.1,
      "position": [1100, 0]
    }
  ],
  "connections": {
    "Daily 8am Trigger": {
      "main": [[{"node": "Fetch AI News", "type": "main", "index": 0}]]
    },
    "Fetch AI News": {
      "main": [[{"node": "Prepare AI Prompt", "type": "main", "index": 0}]]
    },
    "Prepare AI Prompt": {
      "main": [[{"node": "Rank Articles", "type": "main", "index": 0}]]
    },
    "Gemini 2.5 Flash": {
      "ai_languageModel": [[{"node": "Rank Articles", "type": "ai_languageModel", "index": 0}]]
    },
    "Rank Articles": {
      "main": [[{"node": "Format HTML Email", "type": "main", "index": 0}]]
    },
    "Format HTML Email": {
      "main": [[{"node": "Send Digest Email", "type": "main", "index": 0}]]
    }
  },
  "settings": {
    "executionOrder": "v1"
  }
}
```

</details>

### Deploy the Workflow

**Option A: Create new workflow**

```bash
curl -X POST \
  -H "X-N8N-API-KEY: $N8N_API_KEY" \
  -H "Content-Type: application/json" \
  -d @ai-news-workflow.json \
  http://localhost:5678/api/v1/workflows
```

**Option B: Update existing workflow**

```bash
# Replace WORKFLOW_ID with your workflow's ID
curl -X PUT \
  -H "X-N8N-API-KEY: $N8N_API_KEY" \
  -H "Content-Type: application/json" \
  -d @ai-news-workflow.json \
  http://localhost:5678/api/v1/workflows/WORKFLOW_ID
```

### Using Any AI CLI

If you have an AI CLI (Claude Code, Cursor, Gemini CLI, etc.), you can let it build the workflow for you:

```text
You: Create an n8n workflow that fetches AI news daily at 8am,
     uses Gemini to rank the top 5 articles, and sends me an
     HTML email digest. Use the REST API to deploy it.

AI CLI: [Builds and deploys the entire workflow automatically]
```

Any AI assistant with terminal access can:
- Generate the workflow JSON based on your requirements
- Make the API calls to create/update workflows
- Troubleshoot issues in real-time
- Modify the workflow based on feedback

> **Tip**: Cursor's free tier and Gemini CLI are great free alternatives if you don't have a paid AI subscription.

## Post-Deployment Configuration

After creating the workflow via API, you need to configure credentials in the n8n UI:

1. Open `http://localhost:5678`
2. Find your new workflow
3. Click on **Gemini 2.5 Flash** node → Select your Gemini credential
4. Click on **Send Digest Email** node → Select your SMTP credential
5. Update the email addresses (from/to)
6. Click **Save**
7. Toggle the workflow to **Active**

### Testing the Workflow

```bash
# Execute the workflow manually via API
curl -X POST \
  -H "X-N8N-API-KEY: $N8N_API_KEY" \
  http://localhost:5678/api/v1/workflows/WORKFLOW_ID/execute
```

Or click **Test Workflow** in the n8n UI.

## Deployment Options for 24/7 Operation

Running n8n on your laptop means it only works when your computer is on. Here are free/cheap alternatives:

### Option 1: Raspberry Pi (~$35-50 one-time)

Perfect for home automation:

```bash
# On Raspberry Pi (Raspberry Pi OS)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g n8n

# Create systemd service for auto-start
sudo nano /etc/systemd/system/n8n.service
```

Add this content:

```ini
[Unit]
Description=n8n Workflow Automation
After=network.target

[Service]
Type=simple
User=pi
ExecStart=/usr/bin/n8n start
Restart=on-failure
Environment=N8N_PORT=5678

[Install]
WantedBy=multi-user.target
```

Enable and start:

```bash
sudo systemctl enable n8n
sudo systemctl start n8n
```

### Option 2: Free VPS Tiers

Some providers offer free tiers:

- **Oracle Cloud**: Free tier with 2 AMD instances
- **Google Cloud**: $300 free credits for 90 days
- **Azure**: $200 free credits for 30 days

### Option 3: Old Laptop/Mini PC

Repurpose old hardware:

1. Install Ubuntu Server (lightweight)
2. Follow the npm installation
3. Set up as systemd service
4. Configure port forwarding if needed

### Option 4: Docker on Home Server

If you have a NAS or home server:

```yaml
# docker-compose.yml
version: '3.8'
services:
  n8n:
    image: n8nio/n8n
    restart: always
    ports:
      - "5678:5678"
    volumes:
      - n8n_data:/home/node/.n8n
    environment:
      - N8N_SECURE_COOKIE=false

volumes:
  n8n_data:
```

## Cheap Cloud Deployment Options

If you want hassle-free cloud hosting without managing infrastructure, these are affordable options:

### Railway (~$5/month)

Railway offers simple container deployments with a generous free tier to start:

1. Go to [Railway](https://railway.app?referralCode=ElklE4) (referral link for credits)
2. Click **New Project** → **Deploy from Template**
3. Search for **n8n** and deploy
4. Railway handles SSL, domains, and auto-restarts

**Pricing**: Pay for what you use, typically $5-10/month for light automation.

### Hostinger VPS (~$5/month)

If you want more control with a traditional VPS:

1. Go to [Hostinger](https://hostinger.com?REFERRALCODE=VTKAIPATHWQM) (referral link for discount)
2. Choose the cheapest VPS plan (~$5/month)
3. Select Ubuntu 22.04
4. SSH into your server and run:

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install n8n
sudo npm install -g n8n

# Run with PM2 for auto-restart
sudo npm install -g pm2
pm2 start n8n --name n8n
pm2 save
pm2 startup
```

**Benefits**: Full control, can run multiple services, fixed monthly cost.

### Cost Comparison

| Option | Monthly Cost | Pros | Cons |
|--------|-------------|------|------|
| Raspberry Pi | $0 (one-time ~$50) | No recurring cost, full control | Requires home setup |
| Railway | ~$5-10 | Easy setup, auto-scaling | Variable cost |
| Hostinger VPS | ~$5 | Fixed cost, full control | Manual setup |
| Oracle Cloud | $0 (free tier) | Completely free | Complex setup, limited resources |

## Common Issues & Troubleshooting

### Issue: "Invalid API Key" from NewsAPI

**Cause**: Free tier only works with localhost, not production domains.

**Solution**: For production, either:
- Upgrade to paid NewsAPI plan
- Use alternative free news sources (RSS feeds)

### Issue: Gemini returns malformed JSON

**Cause**: AI sometimes adds explanation text around the JSON.

**Solution**: The code includes regex to extract JSON from the response:

```javascript
const jsonMatch = response.match(/\[\s*\{[\s\S]*\}\s*\]/);
articles = jsonMatch ? JSON.parse(jsonMatch[0]) : JSON.parse(response);
```

### Issue: Emails going to spam

**Cause**: Domain not properly configured for email sending.

**Solution**:
1. Verify your domain in Resend
2. Add SPF, DKIM, and DMARC records
3. Use a consistent "from" address

### Issue: Workflow not triggering at scheduled time

**Cause**: n8n must be running for schedules to work.

**Solution**: Deploy to always-on infrastructure (see Deployment Options above).

## Customization Ideas

Once you have the basic workflow running, try these enhancements:

### Different News Topics

Change the search query in the HTTP Request node:

```javascript
// Crypto news
"(bitcoin) OR (ethereum) OR (cryptocurrency) OR (DeFi)"

// Tech startups
"(startup funding) OR (Series A) OR (YCombinator) OR (venture capital)"

// Cybersecurity
"(data breach) OR (ransomware) OR (zero-day) OR (CVE)"
```

### Multiple Delivery Channels

Add nodes to send to:
- Slack (Slack node)
- Discord (Discord node)
- Telegram (Telegram node)
- Notion (Notion node)

### Weekly Summary Instead of Daily

Change the Schedule Trigger to weekly:

```json
{
  "rule": {
    "interval": [{
      "field": "weeks",
      "weeksInterval": 1,
      "triggerAtDay": 1,
      "triggerAtHour": 9
    }]
  }
}
```

## Additional Resources

- [n8n Documentation](https://docs.n8n.io)
- [n8n REST API Reference](https://docs.n8n.io/api/)
- [Resend Documentation](https://resend.com/docs)
- [Google Gemini API](https://ai.google.dev/docs)
- [NewsAPI Documentation](https://newsapi.org/docs)

---

**Questions?** Open an issue or join our community discussions!

## Related content

- 📘 [**n8n Complete Beginners Guide**](https://www.aipaths.academy/en/docs/014_n8n-complete-beginners-guide) — First time with n8n? Start here
- 📘 [**Complete RAG Guide: 4 Methods**](https://www.aipaths.academy/en/docs/016_rag-methods-guide) — Take your workflows to the next level by connecting them with knowledge bases
- 📝 [**n8n is Now an AI-First Platform**](https://www.aipaths.academy/en/blog/014_n8n-ai-first-platform) — The context on why n8n became the ideal tool for AI workflows
