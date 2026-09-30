---
# Unique semantic identifier (links EN/ES versions)
content_id: "docs-building-first-mcp-server"

# Locale
locale: "en"

# SEO & Display
title: "Building Your First MCP Server: A Complete Guide"
description: "Learn how to build Model Context Protocol (MCP) servers to extend Claude's capabilities with custom tools and data sources."

# Author
author: "AIPaths Academy"

# Publication dates (ISO 8601 format)
publishedAt: "2025-10-20T00:00:00Z"
updatedAt: "2025-10-20T00:00:00Z"

# Cover image
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/docs/default-hero.jpg"

# Tags (canonical lowercase English IDs)
# IMPORTANT: Both EN/ES versions MUST have IDENTICAL tags
tags:
  - mcp
  - claude
  - tools
  - intermediate
---

If you've been working with Claude and want to extend its capabilities with custom tools, data sources, or integrations, the Model Context Protocol (MCP) is your answer. MCP is an open protocol that standardizes how AI applications connect to external systems—think of it as a USB-C port for AI.

In this guide, you'll learn what MCP is, how it works, and build your first MCP server from scratch. By the end, you'll have a working weather server that Claude can use to fetch real-time weather data.

## What is MCP?

**Model Context Protocol (MCP)** is an open standard that enables AI applications to securely connect to external data sources, tools, and services. Created by Anthropic, MCP solves a critical problem: how to give AI models access to real-world data and functionality without rebuilding integrations for every use case.

### Why MCP Matters

Before MCP, every AI application had to build custom integrations for each data source or tool. This meant:
- Duplicated effort across projects
- Inconsistent security practices
- Hard-to-maintain integrations
- Limited interoperability

**MCP provides:**
- **Standardization**: One protocol for all integrations
- **Security**: Built-in authentication and authorization
- **Flexibility**: Works with any data source or tool
- **Interoperability**: Build once, use everywhere

### Real-World Use Cases

- **Enterprise Data Access**: Connect Claude to internal databases, APIs, and knowledge bases
- **Custom Tools**: Give Claude the ability to execute domain-specific functions
- **File Systems**: Let Claude read and write files safely
- **External APIs**: Integrate weather services, payment systems, CRMs, and more
- **Development Tools**: Git operations, code analysis, testing frameworks

## Prerequisites

Before you start, ensure you have:

- **Node.js 18+** or **Python 3.8+** installed
- Basic knowledge of JavaScript/TypeScript or Python
- A text editor (VS Code recommended)
- Claude for Desktop (optional, for testing)
- 30 minutes of your time

**Skill Level:** Intermediate
**Time Required:** 30-45 minutes

## Understanding MCP Architecture

MCP follows a **client-server architecture** where:

1. **MCP Host**: The AI application (like Claude for Desktop)
2. **MCP Client**: Manages connections to servers (runs inside the host)
3. **MCP Server**: Provides resources, tools, or prompts to the AI

```
┌─────────────────────────────────────┐
│       MCP Host (Claude)             │
│  ┌────────────────────────────────┐ │
│  │      MCP Client Manager        │ │
│  │  ┌──────┐  ┌──────┐  ┌──────┐ │ │
│  │  │Client│  │Client│  │Client│ │ │
│  │  └───┬──┘  └───┬──┘  └───┬──┘ │ │
│  └──────┼─────────┼─────────┼────┘ │
└─────────┼─────────┼─────────┼──────┘
          │         │         │
          ▼         ▼         ▼
     ┌────────┐┌────────┐┌────────┐
     │Weather ││FileSystem││GitHub│
     │Server  ││Server   ││Server │
     └────────┘└────────┘└────────┘
```

### Key Concepts

**Resources**: Data or content that Claude can read (files, database records, API responses)

**Tools**: Functions that Claude can execute (search, calculate, API calls)

**Prompts**: Pre-defined prompt templates for common tasks

**Transport**: Communication channel between client and server (typically STDIO or HTTP)

## Building a Weather MCP Server

Let's build a practical MCP server that provides weather information using the National Weather Service API.

### Step 1: Project Setup

Create a new project directory:

```bash
# Create project directory
mkdir weather-mcp-server
cd weather-mcp-server

# Initialize npm project
npm init -y

# Install dependencies
npm install @modelcontextprotocol/sdk zod
npm install -D @types/node typescript

# Create source directory
mkdir src
touch src/index.ts
```

Create a `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "Node16",
    "moduleResolution": "Node16",
    "outDir": "./build",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"]
}
```

### Step 2: Initialize the MCP Server

Create `src/index.ts` and set up the server:

```typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

const NWS_API_BASE = "https://api.weather.gov";
const USER_AGENT = "weather-mcp-server/1.0";

// Create server instance
const server = new Server(
  {
    name: "weather-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

console.error("Weather MCP Server starting...");
```

> **Note**: We use `console.error()` instead of `console.log()` because MCP servers communicate via STDIO, and `stdout` is reserved for JSON-RPC messages.

### Step 3: Define Tool Schemas

Define the structure for our weather tools using Zod:

```typescript
// Tool input schemas
const GetForecastSchema = z.object({
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
});

const GetAlertsSchema = z.object({
  state: z.string().length(2).describe("Two-letter state code (e.g., CA, NY)"),
});

// Helper function to make API requests
async function fetchWeatherData(url: string) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": USER_AGENT,
    },
  });

  if (!response.ok) {
    throw new Error(`Weather API error: ${response.statusText}`);
  }

  return response.json();
}
```

### Step 4: Implement Tool Handlers

Register tools that Claude can call:

```typescript
// Handle tool list requests
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "get_forecast",
        description: "Get weather forecast for a location by latitude and longitude",
        inputSchema: {
          type: "object",
          properties: {
            latitude: {
              type: "number",
              description: "Latitude of the location",
              minimum: -90,
              maximum: 90,
            },
            longitude: {
              type: "number",
              description: "Longitude of the location",
              minimum: -180,
              maximum: 180,
            },
          },
          required: ["latitude", "longitude"],
        },
      },
      {
        name: "get_alerts",
        description: "Get active weather alerts for a US state",
        inputSchema: {
          type: "object",
          properties: {
            state: {
              type: "string",
              description: "Two-letter US state code (e.g., CA, NY)",
              pattern: "^[A-Z]{2}$",
            },
          },
          required: ["state"],
        },
      },
    ],
  };
});

// Handle tool execution
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    if (name === "get_forecast") {
      const { latitude, longitude } = GetForecastSchema.parse(args);

      // Get gridpoint data
      const pointsUrl = `${NWS_API_BASE}/points/${latitude},${longitude}`;
      const pointsData = await fetchWeatherData(pointsUrl);

      // Get forecast
      const forecastUrl = pointsData.properties.forecast;
      const forecastData = await fetchWeatherData(forecastUrl);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(forecastData.properties.periods, null, 2),
          },
        ],
      };
    }

    if (name === "get_alerts") {
      const { state } = GetAlertsSchema.parse(args);

      const alertsUrl = `${NWS_API_BASE}/alerts?area=${state}`;
      const alertsData = await fetchWeatherData(alertsUrl);

      const features = alertsData.features;
      if (features.length === 0) {
        return {
          content: [
            {
              type: "text",
              text: `No active weather alerts for ${state}`,
            },
          ],
        };
      }

      const alerts = features.map((feature: any) => ({
        event: feature.properties.event,
        severity: feature.properties.severity,
        description: feature.properties.description,
      }));

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(alerts, null, 2),
          },
        ],
      };
    }

    throw new Error(`Unknown tool: ${name}`);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(`Invalid arguments: ${error.message}`);
    }
    throw error;
  }
});
```

### Step 5: Start the Server

Add the main function to run the server:

```typescript
// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Weather MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
```

### Step 6: Build and Test

Add build scripts to `package.json`:

```json
{
  "name": "weather-mcp-server",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "build": "tsc",
    "start": "node build/index.js"
  },
  "dependencies": {
    "@modelcontextprotocol/sdk": "^1.0.0",
    "zod": "^3.22.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0"
  }
}
```

Build the server:

```bash
npm run build
```

Test it using the MCP Inspector (a debugging tool):

```bash
npx @modelcontextprotocol/inspector node build/index.js
```

This opens a web interface where you can test your tools interactively.

## Connecting to Claude for Desktop

To use your server with Claude for Desktop:

1. **Locate your config file:**
   - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

2. **Add your server:**

```json
{
  "mcpServers": {
    "weather": {
      "command": "node",
      "args": ["/absolute/path/to/weather-mcp-server/build/index.js"]
    }
  }
}
```

3. **Restart Claude for Desktop**

4. **Test it:**
   - Open Claude for Desktop
   - Look for the 🔌 icon indicating MCP servers are connected
   - Ask: "What's the weather forecast for Seattle?" (latitude: 47.6062, longitude: -122.3321)

## Common Issues & Troubleshooting

### Issue: "Server not connecting"

**Cause:** Incorrect path or missing build files

**Solution:**
1. Ensure you've run `npm run build`
2. Use absolute paths in the config file
3. Check Claude's logs: `~/Library/Logs/Claude/mcp*.log`

### Issue: "Tool not found"

**Cause:** Server didn't register tools properly

**Solution:**
1. Verify `ListToolsRequestSchema` handler is set
2. Check server logs for errors
3. Test with MCP Inspector first

### Issue: "API errors"

**Cause:** Invalid coordinates or network issues

**Solution:**
1. Validate latitude/longitude ranges
2. Check your internet connection
3. The NWS API only works for US locations

## Best Practices

### 1. **Always Validate Input**

Use Zod or similar libraries to validate tool arguments:

```typescript
const args = MySchema.parse(request.params.arguments);
```

### 2. **Provide Clear Descriptions**

Tool and parameter descriptions help Claude understand when and how to use them:

```typescript
{
  name: "search_database",
  description: "Search the customer database by email or ID. Returns customer details.",
  inputSchema: {
    // ...
  }
}
```

### 3. **Handle Errors Gracefully**

Return meaningful error messages:

```typescript
try {
  // Tool logic
} catch (error) {
  return {
    content: [{
      type: "text",
      text: `Error: ${error.message}. Please check your input.`
    }],
    isError: true,
  };
}
```

### 4. **Use Logging Wisely**

Always log to `stderr` in STDIO servers:

```typescript
console.error("Processing request:", request.params.name);
```

### 5. **Implement Rate Limiting**

Protect external APIs from abuse:

```typescript
let lastRequest = 0;
const MIN_INTERVAL = 1000; // 1 second

if (Date.now() - lastRequest < MIN_INTERVAL) {
  throw new Error("Rate limit exceeded");
}
lastRequest = Date.now();
```

## Advanced Features

### Resources

Expose data that Claude can read:

```typescript
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: [
      {
        uri: "weather://alerts",
        name: "Active Weather Alerts",
        mimeType: "application/json",
      },
    ],
  };
});
```

### Prompts

Provide prompt templates:

```typescript
server.setRequestHandler(ListPromptsRequestSchema, async () => {
  return {
    prompts: [
      {
        name: "weather_report",
        description: "Generate a detailed weather report",
        arguments: [
          {
            name: "location",
            description: "City name",
            required: true,
          },
        ],
      },
    ],
  };
});
```

### Progress Notifications

Send progress updates for long-running operations:

```typescript
server.notification({
  method: "notifications/progress",
  params: {
    progress: 50,
    total: 100,
  },
});
```

## Python Alternative

Prefer Python? Here's the equivalent setup:

```bash
# Create project
mkdir weather-mcp-server
cd weather-mcp-server

# Install dependencies
pip install mcp

# Create server
touch server.py
```

Basic Python server structure:

```python
from mcp.server import Server, Tool
from mcp.server.stdio import stdio_server
import httpx

app = Server("weather-server")

@app.tool()
async def get_forecast(latitude: float, longitude: float) -> str:
    """Get weather forecast for coordinates"""
    async with httpx.AsyncClient() as client:
        # Fetch and return weather data
        pass

async def main():
    async with stdio_server() as (read, write):
        await app.run(read, write)

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
```

## Next Steps

Now that you've built your first MCP server, explore:

1. **Build More Tools**: Create servers for your specific use cases
2. **Explore Official Servers**: Study [@modelcontextprotocol](https://github.com/modelcontextprotocol) repositories
3. **Add Authentication**: Implement secure API key handling
4. **Deploy Remotely**: Set up HTTP transport for remote servers
5. **Contribute**: Share your servers with the community

**Popular MCP Server Examples:**
- [@modelcontextprotocol/server-filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) - File operations
- [@modelcontextprotocol/server-github](https://github.com/modelcontextprotocol/servers/tree/main/src/github) - GitHub integration
- [@modelcontextprotocol/server-memory](https://github.com/modelcontextprotocol/servers/tree/main/src/memory) - Persistent memory

## Additional Resources

### Official Documentation
- [MCP Specification](https://spec.modelcontextprotocol.io/)
- [MCP SDK Documentation](https://github.com/modelcontextprotocol/typescript-sdk)
- [Official MCP Servers](https://github.com/modelcontextprotocol/servers)

### Tools
- [MCP Inspector](https://github.com/modelcontextprotocol/inspector) - Debug MCP servers
- [Claude for Desktop](https://claude.ai/download) - Test your servers

### Community
- [MCP GitHub Discussions](https://github.com/modelcontextprotocol/specification/discussions)
- [Anthropic Discord](https://discord.gg/anthropic) - #mcp channel

---

**Questions?** Open an issue or join our community discussions!
