---
# Unique semantic identifier (links EN/ES versions)
content_id: "docs-moltbot-guide"

# Locale (must match filename: .en.md or .es.md)
locale: "es"

# SEO & Display
title: "Molt Bot: Guia del Agente de IA Autonomo"
description: "Entiende que es Molt Bot, como funciona, los riesgos involucrados y como usarlo de forma segura como desarrollador."

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

Una guia conceptual para desarrolladores que quieren entender Molt Bot antes de ejecutarlo.

## Que es Molt Bot?

Molt Bot (anteriormente Clawdbot) es un asistente de IA open-source y auto-alojado que convierte LLMs como Claude en **agentes autonomos con acceso total al sistema**. Creado por Peter Steinberger (fundador de PSPDFKit), se lanzo el 26 de enero de 2026 y se convirtio en uno de los proyectos de mas rapido crecimiento en GitHub, con mas de 60,000 estrellas en tres dias.

Pensalo como **"Claude con manos."** A diferencia de la IA basada en navegador que solo chatea, Molt Bot corre en tu hardware y puede:

- Instalar software y ejecutar scripts
- Administrar archivos y directorios
- Enviar emails y mensajes
- Controlar navegadores
- Ejecutar comandos de terminal
- Interactuar con APIs

Todo activado desde un simple mensaje de chat en WhatsApp, Telegram, Discord, iMessage o Slack.

> **Nota:** El proyecto se llamaba originalmente "Clawdbot" y fue renombrado a **Molt Bot** despues de que Anthropic solicitara un cambio de nombre (marca registrada). El proyecto legitimo ahora vive en `github.com/moltbot/moltbot` y `docs.molt.bot`.

## Como Funciona

### Arquitectura General

Molt Bot sigue una arquitectura **local-first** con estos componentes principales:

```text
┌─────────────────────────────────────────────────────────┐
│                    Tu Dispositivo                        │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐ │
│  │   Gateway   │───▶│    Agent    │───▶│   Skills    │ │
│  │  (Node.js)  │    │   (LLM)     │    │  (Tools)    │ │
│  └──────┬──────┘    └─────────────┘    └─────────────┘ │
│         │                                               │
└─────────┼───────────────────────────────────────────────┘
          │
          ▼
┌─────────────────────────────────────────────────────────┐
│              Canales de Mensajeria                       │
│  WhatsApp │ Telegram │ Discord │ Slack │ iMessage │ ...│
└─────────────────────────────────────────────────────────┘
```

**Gateway**: Un plano de control basado en WebSocket que corre en tu maquina. Requiere Node.js &gt;= 22.

**Multi-Channel Bridge**: Se conecta a las apps de mensajeria que ya usas. Los canales soportados incluyen WhatsApp, Telegram, Slack, Discord, Signal, iMessage, Microsoft Teams y WebChat.

**Agent**: Enruta mensajes a los LLMs configurados (Claude, GPT-4o, Gemini) con acceso a herramientas y skills.

**Skills**: Plugins modulares en TypeScript/JavaScript que otorgan acceso controlado a los recursos del sistema.

### El Flujo

1. Envias un mensaje al bot en WhatsApp/Telegram/etc.
2. El Gateway lo recibe y lo enruta al agente configurado
3. El agente consulta al LLM con las herramientas/skills disponibles
4. El LLM decide que acciones tomar (leer archivos, ejecutar comandos, navegar la web)
5. Las acciones se ejecutan en tu maquina
6. La respuesta vuelve a tu chat

### Sistema de Skills

Los Skills extienden las capacidades de Molt Bot. Se cargan desde tres ubicaciones con esta precedencia:

| Prioridad | Ubicacion | Alcance |
|-----------|-----------|---------|
| Mas alta | `&lt;workspace&gt;/skills` | Solo por agente |
| Media | `~/.clawdbot/skills` | Compartido entre todos los agentes |
| Mas baja | Skills incluidos | Instalacion por defecto |

**ClawdHub** (`clawdhub.com`) es el registro publico donde podes descubrir e instalar skills de la comunidad.

Los skills se filtran en tiempo de carga usando condiciones de metadata — pueden requerir binarios especificos, variables de entorno o sistemas operativos antes de activarse.

## Los Riesgos

Molt Bot es poderoso. Con el poder viene el riesgo. Entende estos puntos antes de ejecutarlo.

### Riesgos de Seguridad

**El problema fundamental:** Molt Bot tiene acceso de nivel root a tu sistema. Si se compromete, los atacantes controlan todo.

#### Vectores de Ataque Conocidos

| Riesgo | Que Sucede |
|--------|------------|
| **Exposicion del Gateway** | Mas de 1,000 gateways encontrados expuestos publicamente en internet, muchos sin autenticacion |
| **Prompt injection** | Contenido malicioso en mensajes, links o archivos adjuntos puede secuestrar el comportamiento del agente |
| **Robo de credenciales** | `auth-profiles.json` almacena tokens de API en texto plano. Familias de malware (RedLine, Lumma, Vidar) ahora apuntan especificamente a `~/.clawdbot/` |
| **Broadcasting mDNS** | La configuracion por defecto filtra hostname, rutas del filesystem y disponibilidad SSH a tu red local |
| **Filtracion de contexto** | Sin aislamiento de sesion, las configuraciones multi-usuario pueden exponer conversaciones privadas |

Los investigadores de seguridad describen a Molt Bot como un **"objetivo principal para infostealers en la era de la IA."**

> Trata a Molt Bot como un servidor de produccion, no como un proyecto de fin de semana.

### Riesgos de Costo

Los costos de API pueden escalar rapidamente con agentes autonomos.

| Nivel de Uso | Costo Mensual |
|--------------|---------------|
| Ligero (consultas casuales) | $20-50 |
| Moderado (automatizacion diaria) | $50-100 |
| Intensivo (multi-agente complejo) | $100-300 |
| Extremo | $3,600+ |

**Precios de Claude Opus 4.5:** $5 por millon de tokens de entrada, $25 por millon de tokens de salida.

Los costos se acumulan con:
- Conversaciones largas (el contexto se acumula)
- Uso frecuente de herramientas (cada accion = mas tokens)
- Configuraciones multi-agente (procesamiento paralelo)

**Mitigacion:** Usa prompt caching (0.1x de costo para lecturas en cache), batch API (50% de descuento) y configura limites de gasto estrictos en tu dashboard de Anthropic.

### Riesgos de Confiabilidad

**Deriva del agente:** Los LLMs pueden malinterpretar instrucciones, especialmente con comandos ambiguos, contenido no confiable o tareas complejas de multiples pasos.

**Susceptibilidad del modelo:** Los modelos mas antiguos y pequenos son mas vulnerables a prompt injection. El Opus 4.5 de Anthropic tiene la mayor resistencia.

**Sin deshacer:** Si el agente borra archivos, ejecuta comandos destructivos o envia mensajes vergonzosos, no hay vuelta atras.

## Instalacion

```bash
npm install -g moltbot@latest && moltbot onboard --install-daemon
```

**Requisitos:**
- Node.js &gt;= 22 (verifica con `node -v`)
- Un dispositivo 24/7 (Mac Mini, servidor Linux, Raspberry Pi o VM en la nube)
- API key de Anthropic, OpenAI u otro proveedor soportado

El asistente de configuracion te guiara a traves de la configuracion inicial.

## Hardening de Seguridad

Hace esto **antes** de exponer Molt Bot a cualquier canal de mensajeria.

### 1. Vincular Solo a Localhost

```json5
// ~/.clawdbot/moltbot.json
{
  gateway: {
    bind: "loopback",
    port: 18789
  }
}
```

Esto previene el acceso de red externo a tu gateway.

### 2. Habilitar Autenticacion

Genera un token seguro:

```bash
moltbot doctor --generate-gateway-token
```

Configuralo:

```json5
{
  gateway: {
    auth: {
      mode: "token",
      token: "tu-token-largo-aleatorio"
    }
  }
}
```

### 3. Ejecutar la Auditoria de Seguridad

```bash
moltbot security audit --deep --fix
```

Esto identifica vulnerabilidades y corrige automaticamente problemas comunes como permisos de archivos.

### 4. Habilitar Sandboxing

Ejecuta herramientas en contenedores Docker aislados:

```json5
{
  agents: {
    defaults: {
      sandbox: {
        mode: "all",
        workspaceAccess: "ro"  // solo lectura
      }
    }
  }
}
```

Opciones de acceso al workspace:
- `"none"`: Mas restrictivo, solo sandbox
- `"ro"`: Acceso de solo lectura al workspace del agente
- `"rw"`: Acceso de lectura/escritura (usar con precaucion)

### 5. Restringir Acceso por DM

Manten el modo de emparejamiento habilitado (por defecto):

```json5
{
  channels: {
    whatsapp: {
      dmPolicy: "pairing"
    }
  }
}
```

Los remitentes desconocidos deben completar un handshake de emparejamiento antes de que el bot procese sus mensajes.

### 6. Requerir Menciones en Grupos

Evita que el bot responda a cada mensaje:

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

### 7. Deshabilitar Broadcasting mDNS

Deja de filtrar informacion a tu red local:

```bash
export MOLTBOT_DISABLE_BONJOUR=1
```

O en la configuracion:

```json5
{
  discovery: {
    mdns: { mode: "off" }
  }
}
```

### 8. Bloquear Permisos de Archivos

```bash
chmod 700 ~/.clawdbot/
chmod 600 ~/.clawdbot/moltbot.json
chmod 600 ~/.clawdbot/agents/*/agent/auth-profiles.json
```

O deja que la herramienta lo arregle:

```bash
moltbot security audit --fix
```

## Mejores Practicas

### Hacer

- Usa un **dispositivo o VM dedicado** para Molt Bot
- Crea **cuentas especificas para el bot** con permisos limitados
- Configura **limites de gasto en la API** en el dashboard de tu proveedor
- **Revisa los skills** antes de instalarlos desde ClawdHub
- Usa **modelos de ultima generacion** (Opus 4.5) para agentes con herramientas
- Guarda **secretos en variables de entorno**, no en prompts
- Empeza con **acceso de solo lectura**, expandi con precaucion

### No Hacer

- Ejecutar en tu maquina principal con datos sensibles
- Usar tu cuenta personal de WhatsApp o email
- Dejar que los costos de API corran sin control
- Confiar ciegamente en skills de terceros
- Usar modelos legacy para operaciones sensibles
- Pegar API keys en conversaciones
- Otorgar permisos completos de escritura/ejecucion desde el primer dia
- Configurar `allowFrom: "*"` a menos que quieras que internet controle tu PC

## Comandos Utiles

```bash
# Verificar estado general
moltbot status --all

# Diagnosticar problemas de configuracion
moltbot doctor

# Escaneo de seguridad
moltbot security audit
moltbot security audit --deep
moltbot security audit --fix

# Administrar solicitudes de emparejamiento
moltbot pairing list <channel>
moltbot pairing approve <channel> <code>

# Abrir dashboard web
moltbot dashboard
# Luego visitar http://127.0.0.1:18789/
```

## Respuesta ante Incidentes

Si sospechas que hubo un compromiso:

### Contencion Inmediata

1. Detene el gateway: `pkill -f moltbot` o detene la app de macOS
2. Configura `gateway.bind: "loopback"` en la configuracion
3. Deshabilita acceso riesgoso de DM/grupos

### Rotar Todos los Secretos

1. Token del gateway (`gateway.auth.token`)
2. Secretos de clientes remotos (`gateway.remote.token`)
3. Credenciales de proveedores (API key de Anthropic, credenciales de WhatsApp, etc.)

### Investigar

1. Revisa logs: `/tmp/moltbot/moltbot-*.log`
2. Revisa transcripciones de sesion: `~/.clawdbot/agents/*/sessions/*.jsonl`
3. Audita cambios recientes en la configuracion

## Referencia de Almacenamiento de Credenciales

Conoce donde vive la data sensible:

| Tipo | Ubicacion |
|------|-----------|
| Credenciales de WhatsApp | `~/.clawdbot/credentials/whatsapp/&lt;accountId&gt;/creds.json` |
| Token de Telegram | Config o `channels.telegram.tokenFile` |
| Token de Discord | Solo config/env |
| Tokens de Slack | Config/env (`channels.slack.*`) |
| Allowlists de emparejamiento | `~/.clawdbot/credentials/&lt;channel&gt;-allowFrom.json` |
| API keys de modelos | `~/.clawdbot/agents/&lt;agentId&gt;/agent/auth-profiles.json` |
| Transcripciones de sesion | `~/.clawdbot/agents/&lt;agentId&gt;/sessions/*.jsonl` |

## Configuracion Base Segura

Un punto de partida reforzado:

```json5
// ~/.clawdbot/moltbot.json
{
  gateway: {
    mode: "local",
    bind: "loopback",
    port: 18789,
    auth: {
      mode: "token",
      token: "tu-token-largo-aleatorio"
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

## Reflexiones Finales

Molt Bot es una herramienta poderosa con casos de uso legitimos. Los desarrolladores lo estan ejecutando en Mac Minis como "empleados de IA 24/7." Pero requiere seguridad operacional seria.

La documentacion oficial lo dice mejor:

> "No existe una configuracion perfectamente segura."

Empeza con lo minimo. Expandi solo a medida que crece la confianza. Y recorda: si un agente de IA tiene acceso a tu sistema, trata su seguridad como lo harias con un servidor de produccion expuesto a internet.

## Recursos

**Oficiales:**
- [Documentacion de Moltbot](https://docs.molt.bot/)
- [Repositorio en GitHub](https://github.com/moltbot/moltbot)
- [Registro de Skills ClawdHub](https://clawdhub.com)

**Analisis de Seguridad:**
- [Security Boulevard: Cuando la IA Obtiene Acceso Root](https://securityboulevard.com/2026/01/clawdbot-is-what-happens-when-ai-gets-root-access-a-security-experts-take-on-silicon-valleys-hottest-ai-agent/)
- [SOCRadar: Es Realmente Seguro?](https://socradar.io/blog/clawdbot-is-it-safe/)
- [InfoStealers: Objetivo Principal para Malware](https://www.infostealers.com/article/clawdbot-the-new-primary-target-for-infostealers-in-the-ai-era/)

**Guias:**
- [MacStories: El Futuro de los Asistentes Personales de IA](https://www.macstories.net/stories/clawdbot-showed-me-what-the-future-of-personal-ai-assistants-looks-like/)
- [iWeaver: Guia Completa](https://www.iweaver.ai/blog/clawdbot-guide-how-to-deploy-ai-assistant/)
- [DEV Community: Primeros Pasos](https://dev.to/ajeetraina/getting-started-with-clawdbot-the-complete-step-by-step-guide-2ffj)
