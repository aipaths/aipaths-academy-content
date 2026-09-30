---
# Unique semantic identifier (links EN/ES versions)
content_id: "docs-n8n-ai-news-workflow-free"

# Locale (MUST match file extension: .en.md or .es.md)
locale: "es"

# SEO & Display
title: "Crea un Digest de Noticias IA Gratis con n8n, REST API y Cualquier CLI de IA"
description: "Crea un flujo de trabajo automatizado de noticias de IA usando n8n local, REST API y cualquier CLI de IA (Claude Code, Cursor, Gemini) - completamente gratis con opciones de despliegue económicas."

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

Aprende a construir un sistema de digest de noticias completamente automatizado y potenciado por IA que se ejecuta diariamente, selecciona las 5 noticias más importantes de IA, y las envía a tu bandeja de entrada - todo sin pagar por plataformas de automatización costosas.

Esta guía te muestra cómo usar **cualquier herramienta CLI de IA** para crear programáticamente flujos de trabajo de n8n via REST API, dándote control completo sobre tu infraestructura de automatización.

> **Opciones de CLI de IA (todas funcionan para esta guía)**:
> - [Claude Code](https://claude.ai/claude-code) - CLI de Anthropic (de pago, pero potente)
> - [Cursor](https://cursor.com) - Tier gratuito disponible
> - [Gemini CLI](https://ai.google.dev) - Gratis con cuenta de Google
> - Cualquier asistente de IA con acceso a terminal

> **Lo que construirás**: Un flujo de trabajo programado que obtiene noticias de IA, usa Gemini para clasificar artículos por importancia y reputación de fuente, los formatea en un email HTML atractivo, y te lo envía cada mañana a las 8am.

## Prerrequisitos

Antes de comenzar, necesitarás:

- **Conocimiento básico de terminal/línea de comandos**
- **Una computadora** (Mac, Linux, o Windows con WSL)
- **~30 minutos** para la configuración inicial
- **Una herramienta CLI de IA** (Claude Code, Cursor, o similar) - opcional pero recomendado

### Desglose de Costos

| Servicio | Costo | Notas |
|----------|-------|-------|
| n8n | Gratis | Auto-hospedado localmente |
| NewsAPI | Gratis | 100 peticiones/día en tier gratuito |
| Google Gemini | Gratis | Tier gratuito generoso |
| Resend (SMTP) | Gratis | 3,000 emails/mes |
| **Total** | **$0** | Completamente gratis para uso personal |

## Visión General de la Arquitectura

Esto es lo que construiremos:

```text
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Programador    │────▶│  NewsAPI        │────▶│  Gemini AI      │
│  (8am diario)   │     │  (Obtener news) │     │  (Rankear top 5)│
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                        │
                                                        ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Tu Bandeja     │◀────│  SMTP/Resend    │◀────│  Formatear HTML │
│  (Digest diario)│     │  (Enviar email) │     │  (Estilizar)    │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### ¿Por qué REST API en lugar de la UI?

- **Reproducible**: Guarda tu flujo como código, versión controlada
- **Asistido por IA**: Deja que cualquier CLI de IA construya flujos complejos por ti
- **Más rápido**: Sin clicks en menús - solo una llamada API
- **Scriptable**: Integra la creación de flujos en pipelines CI/CD

## Configurando n8n Localmente

### Opción 1: Usando npm (Recomendado para desarrollo)

```bash
# Instalar n8n globalmente
npm install -g n8n

# Iniciar n8n
n8n start
```

n8n estará disponible en `http://localhost:5678`

### Opción 2: Usando Docker

```bash
# Crear un directorio para datos de n8n
mkdir ~/.n8n-docker

# Ejecutar n8n en Docker
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n-docker:/home/node/.n8n \
  n8nio/n8n
```

### Opción 3: Desde el Código Fuente (Avanzado)

```bash
# Clonar el repositorio
git clone https://github.com/n8n-io/n8n.git
cd n8n

# Instalar dependencias
pnpm install

# Compilar e iniciar
pnpm build
pnpm start
```

### Configuración Inicial

1. Abre `http://localhost:5678` en tu navegador
2. Crea tu cuenta de administrador
3. Completa el asistente de configuración

## Obteniendo tus API Keys

### 1. API Key de n8n (Requerido)

Así es como crearemos flujos programáticamente:

1. En n8n, ve a **Settings** (abajo a la izquierda)
2. Click en **API**
3. Click en **Create API Key**
4. Copia y guarda tu key de forma segura

```bash
# Guárdala como variable de entorno
export N8N_API_KEY="tu-api-key-aqui"
```

### 2. API Key de NewsAPI (Gratis)

1. Ve a [newsapi.org](https://newsapi.org)
2. Click en **Get API Key**
3. Regístrate (cuenta gratuita)
4. Copia tu API key

```bash
export NEWS_API_KEY="tu-newsapi-key"
```

### 3. API Key de Google Gemini (Gratis)

1. Ve a [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Inicia sesión con tu cuenta de Google
3. Click en **Create API Key**
4. Copia tu API key

Luego agrégala como credencial en n8n:
1. Ve a **Credentials** en n8n
2. Click en **Add Credential**
3. Busca **Google Gemini**
4. Pega tu API key y guarda

### 4. Resend SMTP (Gratis)

Resend ofrece un tier gratuito generoso (3,000 emails/mes):

1. Ve a [resend.com](https://resend.com)
2. Regístrate gratis
3. Verifica tu dominio o usa su dominio de prueba
4. Ve a configuración de **SMTP** y copia:
   - Host: `smtp.resend.com`
   - Puerto: `465`
   - Usuario: `resend`
   - Contraseña: Tu API key

Agrega credenciales SMTP en n8n:
1. Ve a **Credentials** en n8n
2. Click en **Add Credential**
3. Busca **SMTP**
4. Completa:
   - Host: `smtp.resend.com`
   - Port: `465`
   - User: `resend`
   - Password: Tu API key de Resend
   - SSL/TLS: Habilitado

## Creando el Workflow via REST API

Ahora la parte divertida - crear todo el flujo con una sola llamada API.

### Entendiendo la REST API de n8n

La REST API de n8n sigue convenciones REST estándar:

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/v1/workflows` | Listar todos los workflows |
| GET | `/api/v1/workflows/{id}` | Obtener detalles del workflow |
| POST | `/api/v1/workflows` | Crear nuevo workflow |
| PUT | `/api/v1/workflows/{id}` | Actualizar workflow |
| DELETE | `/api/v1/workflows/{id}` | Eliminar workflow |

### Probando la Conexión API

```bash
# Probar tu API key
curl -s -H "X-N8N-API-KEY: $N8N_API_KEY" \
  http://localhost:5678/api/v1/workflows | jq
```

Deberías ver una lista de tus workflows existentes (o un array vacío).

### Creando el Workflow Completo

Aquí está el JSON completo del workflow. Guárdalo como `ai-news-workflow.json`:

<details>
<summary><strong>Click para expandir el JSON completo del workflow</strong></summary>

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

### Desplegar el Workflow

**Opción A: Crear nuevo workflow**

```bash
curl -X POST \
  -H "X-N8N-API-KEY: $N8N_API_KEY" \
  -H "Content-Type: application/json" \
  -d @ai-news-workflow.json \
  http://localhost:5678/api/v1/workflows
```

**Opción B: Actualizar workflow existente**

```bash
# Reemplaza WORKFLOW_ID con el ID de tu workflow
curl -X PUT \
  -H "X-N8N-API-KEY: $N8N_API_KEY" \
  -H "Content-Type: application/json" \
  -d @ai-news-workflow.json \
  http://localhost:5678/api/v1/workflows/WORKFLOW_ID
```

### Usando Cualquier CLI de IA

Si tienes un CLI de IA (Claude Code, Cursor, Gemini CLI, etc.), puedes dejar que construya el workflow por ti:

```text
Tú: Crea un workflow de n8n que obtenga noticias de IA diariamente a las 8am,
    use Gemini para rankear los 5 artículos más importantes, y me envíe un
    digest en HTML por email. Usa la REST API para desplegarlo.

CLI de IA: [Construye y despliega todo el workflow automáticamente]
```

Cualquier asistente de IA con acceso a terminal puede:
- Generar el JSON del workflow basado en tus requisitos
- Hacer las llamadas API para crear/actualizar workflows
- Solucionar problemas en tiempo real
- Modificar el workflow basado en feedback

> **Tip**: El tier gratuito de Cursor y Gemini CLI son excelentes alternativas gratuitas si no tienes una suscripción de IA de pago.

## Configuración Post-Despliegue

Después de crear el workflow via API, necesitas configurar las credenciales en la UI de n8n:

1. Abre `http://localhost:5678`
2. Encuentra tu nuevo workflow
3. Click en el nodo **Gemini 2.5 Flash** → Selecciona tu credencial de Gemini
4. Click en el nodo **Send Digest Email** → Selecciona tu credencial SMTP
5. Actualiza las direcciones de email (from/to)
6. Click en **Save**
7. Activa el workflow con el toggle

### Probando el Workflow

```bash
# Ejecutar el workflow manualmente via API
curl -X POST \
  -H "X-N8N-API-KEY: $N8N_API_KEY" \
  http://localhost:5678/api/v1/workflows/WORKFLOW_ID/execute
```

O click en **Test Workflow** en la UI de n8n.

## Opciones de Despliegue para Operación 24/7

Ejecutar n8n en tu laptop significa que solo funciona cuando tu computadora está encendida. Aquí hay alternativas gratuitas/económicas:

### Opción 1: Raspberry Pi (~$35-50 único pago)

Perfecto para automatización del hogar:

```bash
# En Raspberry Pi (Raspberry Pi OS)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g n8n

# Crear servicio systemd para auto-inicio
sudo nano /etc/systemd/system/n8n.service
```

Agrega este contenido:

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

Habilitar e iniciar:

```bash
sudo systemctl enable n8n
sudo systemctl start n8n
```

### Opción 2: Tiers Gratuitos de VPS

Algunos proveedores ofrecen tiers gratuitos:

- **Oracle Cloud**: Tier gratuito con 2 instancias AMD
- **Google Cloud**: $300 en créditos gratis por 90 días
- **Azure**: $200 en créditos gratis por 30 días

### Opción 3: Laptop Vieja/Mini PC

Reutiliza hardware viejo:

1. Instala Ubuntu Server (ligero)
2. Sigue la instalación con npm
3. Configura como servicio systemd
4. Configura port forwarding si es necesario

### Opción 4: Docker en Servidor Casero

Si tienes un NAS o servidor casero:

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

## Opciones de Despliegue en la Nube Económicas

Si quieres hosting en la nube sin complicaciones ni gestionar infraestructura, estas son opciones accesibles:

### Railway (~$5/mes)

Railway ofrece despliegues de contenedores simples con un tier gratuito generoso para empezar:

1. Ve a [Railway](https://railway.app?referralCode=ElklE4) (link de referido para créditos)
2. Click en **New Project** → **Deploy from Template**
3. Busca **n8n** y despliega
4. Railway maneja SSL, dominios y auto-reinicios

**Precio**: Pagas por lo que usas, típicamente $5-10/mes para automatización ligera.

### Hostinger VPS (~$5/mes)

Si quieres más control con un VPS tradicional:

1. Ve a [Hostinger](https://hostinger.com?REFERRALCODE=VTKAIPATHWQM) (link de referido para descuento)
2. Elige el plan VPS más barato (~$5/mes)
3. Selecciona Ubuntu 22.04
4. Conéctate por SSH a tu servidor y ejecuta:

```bash
# Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalar n8n
sudo npm install -g n8n

# Ejecutar con PM2 para auto-reinicio
sudo npm install -g pm2
pm2 start n8n --name n8n
pm2 save
pm2 startup
```

**Beneficios**: Control total, puedes ejecutar múltiples servicios, costo mensual fijo.

### Comparación de Costos

| Opción | Costo Mensual | Pros | Contras |
|--------|---------------|------|---------|
| Raspberry Pi | $0 (único ~$50) | Sin costo recurrente, control total | Requiere setup en casa |
| Railway | ~$5-10 | Setup fácil, auto-escalado | Costo variable |
| Hostinger VPS | ~$5 | Costo fijo, control total | Setup manual |
| Oracle Cloud | $0 (tier gratis) | Completamente gratis | Setup complejo, recursos limitados |

## Problemas Comunes y Soluciones

### Problema: "Invalid API Key" de NewsAPI

**Causa**: El tier gratuito solo funciona con localhost, no con dominios de producción.

**Solución**: Para producción, puedes:
- Actualizar al plan de pago de NewsAPI
- Usar fuentes de noticias alternativas gratuitas (feeds RSS)

### Problema: Gemini devuelve JSON malformado

**Causa**: La IA a veces agrega texto explicativo alrededor del JSON.

**Solución**: El código incluye regex para extraer el JSON de la respuesta:

```javascript
const jsonMatch = response.match(/\[\s*\{[\s\S]*\}\s*\]/);
articles = jsonMatch ? JSON.parse(jsonMatch[0]) : JSON.parse(response);
```

### Problema: Emails van a spam

**Causa**: Dominio no configurado correctamente para envío de emails.

**Solución**:
1. Verifica tu dominio en Resend
2. Agrega registros SPF, DKIM y DMARC
3. Usa una dirección "from" consistente

### Problema: El workflow no se ejecuta en el horario programado

**Causa**: n8n debe estar ejecutándose para que los programadores funcionen.

**Solución**: Despliega en infraestructura siempre activa (ver Opciones de Despliegue arriba).

## Ideas de Personalización

Una vez que tengas el workflow básico funcionando, prueba estas mejoras:

### Diferentes Temas de Noticias

Cambia la query de búsqueda en el nodo HTTP Request:

```javascript
// Noticias crypto
"(bitcoin) OR (ethereum) OR (cryptocurrency) OR (DeFi)"

// Startups tech
"(startup funding) OR (Series A) OR (YCombinator) OR (venture capital)"

// Ciberseguridad
"(data breach) OR (ransomware) OR (zero-day) OR (CVE)"
```

### Múltiples Canales de Entrega

Agrega nodos para enviar a:
- Slack (nodo Slack)
- Discord (nodo Discord)
- Telegram (nodo Telegram)
- Notion (nodo Notion)

### Resumen Semanal en lugar de Diario

Cambia el Schedule Trigger a semanal:

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

## Recursos Adicionales

- [Documentación de n8n](https://docs.n8n.io)
- [Referencia de REST API de n8n](https://docs.n8n.io/api/)
- [Documentación de Resend](https://resend.com/docs)
- [Google Gemini API](https://ai.google.dev/docs)
- [Documentación de NewsAPI](https://newsapi.org/docs)

---

**¿Preguntas?** Abre un issue o únete a las discusiones de nuestra comunidad!

## Contenido relacionado

- 📘 [**Guía Completa de n8n para Principiantes**](https://www.aipaths.academy/es/docs/014_n8n-complete-beginners-guide) — Si es tu primera vez con n8n, empezá por acá
- 📘 [**Guía Completa de RAG: 4 Métodos**](https://www.aipaths.academy/es/docs/016_rag-methods-guide) — Llevá tus workflows al siguiente nivel conectándolos con bases de conocimiento
- 📝 [**n8n es Ahora una Plataforma AI-First**](https://www.aipaths.academy/es/blog/014_n8n-ai-first-platform) — El contexto de por qué n8n se convirtió en la herramienta ideal para workflows de IA
