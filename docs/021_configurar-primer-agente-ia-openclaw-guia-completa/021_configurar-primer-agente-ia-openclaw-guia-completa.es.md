---
content_id: "docs-configurar-primer-agente-ia-openclaw-guia-completa"
locale: "es"
title: "Guía Completa: Cómo Configurar Tu Primer Agente de IA con OpenClaw"
description: "Tener un agente de IA funcionando 24/7 en tu propia máquina suena a ciencia ficción, pero en 2026 es una realidad accesible. OpenClaw es una plataforma open sou"
author: "AIPaths Academy"
publishedAt: "2026-02-27T14:48:54.643Z"
updatedAt: "2026-02-27T14:48:54.643Z"
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/blogs/021_configurar-primer-agente-ia-openclaw-guia-completa/hero.jpg"
tags:
  - openclaw
  - ai-agents
  - tutorial
  - setup
---

Tener un agente de IA funcionando 24/7 en tu propia máquina suena a ciencia ficción, pero en 2026 es una realidad accesible. OpenClaw es una plataforma open source que te permite crear agentes personales y de equipo que se conectan a Discord, WhatsApp, Telegram y más — todo corriendo en tu infraestructura, con tus datos bajo tu control.

Esta guía te lleva de cero a un agente completamente configurado. No solo la instalación: las decisiones técnicas que importan, los costos reales, la seguridad, y cómo personalizar tu agente para que sea realmente tuyo.

## ¿Qué es OpenClaw y para quién es?

OpenClaw es una plataforma open source para crear agentes de IA personales. A diferencia de ChatGPT o Claude que vivien en la nube de sus empresas, OpenClaw corre en tu máquina — tu laptop, un Mac Mini, un VPS, o incluso una Raspberry Pi.

**Lo que hace diferente a OpenClaw:**

- **Self-hosted:** Tus datos no salen de tu infraestructura. Las conversaciones, la memoria del agente, y la configuración viven en tu máquina.

- **Multi-canal:** Un solo agente puede hablar por Discord, WhatsApp, Telegram, Signal, iMessage, y más. No necesitás configurar un bot separado para cada plataforma.

- **Extensible con Skills:** Los skills son paquetes de instrucciones y herramientas que le dan capacidades específicas a tu agente. Hay un marketplace (ClawhHub) con skills de la comunidad, y podés crear los tuyos.

- **Open source y gratuito:** El software es gratis. Solo pagás las APIs de los modelos de lenguaje que uses (Claude, GPT, etc.).

**¿Para quién es OpenClaw?**

- Emprendedores que quieren un asistente personal de IA sin depender de plataformas de terceros

- Equipos pequeños que necesitan automatizar workflows con agentes

- Developers que quieren experimentar con agentes de IA en su propia infraestructura

- Creadores de contenido que necesitan gestionar pipelines complejos (como nosotros en AIPaths)

Si solo querés chatear con una IA de vez en cuando, ChatGPT o Claude son suficientes. Si querés un agente que trabaje para vos de forma continua, con memoria, herramientas, y conectado a tus canales de comunicación, OpenClaw es lo que necesitás.

## Requisitos previos

Antes de empezar, asegurate de tener:

- **Node.js 22 o superior.** Verificá con `node --version`. Si no lo tenés, descargalo de nodejs.org o usá nvm.

- **Una API key de Anthropic o OpenAI.** Recomendamos Anthropic (Claude) por su calidad de razonamiento. Creá una cuenta en console.anthropic.com y generá una API key.

- **Una máquina que pueda estar encendida.** Tu agente necesita correr para estar disponible. Puede ser tu PC mientras trabajás, o idealmente una máquina dedicada (más sobre esto en la sección de hardware).

- **Una cuenta de Discord** (recomendado). Discord es el canal ideal para empezar — es gratis, soporta bots nativamente, y tiene canales por tema.

## ¿Dónde correr OpenClaw? La decisión de hardware

Esta es la primera decisión técnica importante. Tu agente necesita una máquina donde vivir.

**Mac Mini M2/M4 (~$599-899)**

La opción que recomendamos para uso serio. Consume apenas 10W en idle (menos de $2/mes de electricidad), es completamente silencioso, tiene rendimiento de sobra para correr OpenClaw y modelos locales si querés, y macOS es un entorno excelente para Node.js. Nosotros en AIPaths corremos todo nuestro sistema multi-agente en un Mac Mini dedicado.

**Tu PC o laptop actual (gratis)**

Perfecto para empezar y probar. La limitación es que tu agente solo está disponible mientras la máquina esté encendida. Si apagás la laptop a la noche, tu agente duerme. Funciona bien para uso personal durante horario laboral.

**VPS en la nube ($5-20/mes)**

DigitalOcean, Hetzner, o AWS Lightsail. La ventaja es que está online 24/7 sin hardware físico. La desventaja es latencia adicional y que tus datos están en un servidor de terceros (aunque seguís teniendo más control que con ChatGPT). Un VPS de $5/mes con 1GB RAM es suficiente para OpenClaw básico.

**Raspberry Pi 5 (~$80)**

Posible pero limitado. Funciona para un agente simple con modelos cloud (Claude, GPT). No tiene la potencia para correr modelos locales. Buena opción como proyecto de aprendizaje o para un agente de baja demanda.

**Nuestra recomendación:** empezá con tu PC actual para probar. Si te gusta y querés que el agente esté siempre disponible, un Mac Mini o un VPS de $10/mes son las mejores opciones.

## Instalación paso a paso

Vamos a la acción. Todo el proceso toma menos de 10 minutos.

### Paso 1: Instalá OpenClaw

En macOS o Linux, abrí la terminal y ejecutá:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

En Windows (PowerShell como administrador):

```bash
iwr -useb https://openclaw.ai/install.ps1 | iex
```

El script instala OpenClaw globalmente. Verificá que se instaló correctamente con:

```bash
openclaw --version
```

### Paso 2: Ejecutá el wizard de configuración

```bash
openclaw onboard --install-daemon
```

El wizard te guía paso a paso:

- **Autenticación:** Configurá las credenciales del gateway

- **API Key:** Ingresá tu API key de Anthropic (o OpenAI)

- **Modelo:** Elegí el modelo por defecto (recomendamos Claude Sonnet 4 para empezar — buen balance calidad/precio)

- **Canales:** Opcionalmente conectá Discord, WhatsApp, u otros canales

- **Daemon:** El flag `--install-daemon` configura OpenClaw para que arranque automáticamente con tu sistema

### Paso 3: Verificá que el gateway esté corriendo

```bash
openclaw gateway status
```

Deberías ver que el gateway está running. Si no arranca, probá:

```bash
openclaw gateway start
```

### Paso 4: Probá tu agente

La forma más rápida de probar es abrir el dashboard web:

```bash
openclaw dashboard
```

Esto abre una interfaz web en tu navegador donde podés chatear directamente con tu agente. Mandale un mensaje para verificar que responde.

Si ya configuraste Discord en el wizard, también podés mandarle un mensaje directo al bot de Discord y debería responder.

## Conectar canales de comunicación

Un agente que solo vive en un dashboard web es limitado. El poder de OpenClaw es conectar múltiples canales.

### Discord (recomendado como hub)

Discord es el canal ideal para tu agente por varias razones: canales organizados por tema, threads para conversaciones específicas, sistema de permisos granular, soporte nativo de bots, y es completamente gratis.

Para conectar Discord:

```bash
openclaw channel add discord
```

El wizard te guía para crear una aplicación de Discord, generar un bot token, e invitar al bot a tu servidor. Una vez conectado, podés hablar con tu agente en cualquier canal donde el bot tenga acceso.

**Tip:** Creá un servidor de Discord dedicado para tu agente con canales por área — #general, #trabajo, #research, #notas. Así organizás las interacciones por contexto.

### WhatsApp

Para conectar WhatsApp necesitás la API de Meta (WhatsApp Business API). No es el WhatsApp personal — es un número de teléfono dedicado con acceso programático.

```bash
openclaw channel add whatsapp
```

Consultá nuestra guía de Meta WhatsApp Business API para el setup completo, incluyendo verificación de negocio y configuración de webhooks.

### Telegram

Telegram es la opción más simple después de Discord. Creá un bot con @BotFather, obtené el token, y conectalo:

```bash
openclaw channel add telegram
```

### Signal

Para los más conscientes de la privacidad. Signal ofrece encriptación end-to-end. La configuración requiere algunos pasos extra — consultá la documentación de OpenClaw para detalles.

## Personalizar tu agente

Acá es donde tu agente deja de ser genérico y se convierte en tuyo. OpenClaw usa archivos de texto plano para definir la personalidad y el comportamiento del agente.

### SOUL.md — La personalidad

Este archivo define quién es tu agente. Tono, expertise, limitaciones. Ejemplo:

```bash
# SOUL.md
Sos un asistente personal de marketing digital.
Tu nombre es Maia.
Respondés en español (LATAM), de forma directa y práctica.
Tenés expertise en SEO, contenido, y redes sociales.
Cuando no sabés algo, lo decís claramente en vez de inventar.
```

### AGENTS.md — Las instrucciones

Acá definís cómo trabaja tu agente. Reglas, workflows, herramientas disponibles. Ejemplo:

```bash
# AGENTS.md
## Reglas generales
- Antes de responder una pregunta técnica, verificá la info con una búsqueda web
- Cuando recibas una tarea, confirmá el alcance antes de ejecutar
- Guardá decisiones importantes en tu memoria

## Workflow de contenido
1. Recibís un tema → investigá keywords con Google Trends
2. Creá un outline → esperá aprobación
3. Escribí el borrador → mandalo a review
```

### USER.md — Contexto del usuario

Información sobre vos que el agente necesita saber para ser útil:

```bash
# USER.md
Nombre: Juan
Negocio: Agencia de marketing digital en Buenos Aires
Clientes: PyMEs en LATAM
Stack: n8n, Supabase, Next.js
Zona horaria: GMT-3
```

### MEMORY.md — Memoria persistente

El agente escribe automáticamente acá lo que aprende sobre vos y las decisiones que se toman. También podés escribir vos directamente para darle contexto:

```bash
# MEMORY.md
- El cliente principal de Juan es una fintech en Colombia
- Preferimos Sonnet para tareas rutinarias y Opus para análisis complejos
- Los reportes semanales se envían los lunes a las 9am
```

Estos archivos se leen al inicio de cada conversación, así que los cambios que hagas se aplican inmediatamente.

## Skills y herramientas

Los skills son lo que transforman a tu agente de un chatbot inteligente a un asistente que realmente hace cosas.

### Skills incluidos

OpenClaw viene con skills básicos preinstalados:

- **weather:** Consulta el clima para cualquier ubicación

- **github:** Interactúa con repositorios, PRs, issues

- **coding-agent:** Delega tareas de código a Claude Code o Codex

- **web-search:** Busca en internet usando Brave Search

- **web-fetch:** Lee y extrae contenido de URLs

### ClawhHub — Marketplace de skills

En clawhub.com encontrás skills de la comunidad que podés instalar con un comando:

```bash
openclaw skill install <nombre-del-skill>
```

Hay skills para Notion, Google Calendar, email, análisis de datos, y mucho más.

### Crear skills propios

Si necesitás algo específico, podés crear tus propios skills. Un skill es básicamente un archivo SKILL.md con instrucciones y opcionalmente scripts que el agente puede ejecutar. Consultá nuestra guía de Claude Skills para aprender a crear los tuyos.

## Modelos y costos reales

¿Cuánto cuesta realmente operar un agente? Depende del modelo y de cuánto lo uses.

### Precios por modelo (por 1 millón de tokens)

**Anthropic (Claude):**

- Claude Opus 4: $5 input / $25 output — el más inteligente, para tareas complejas

- Claude Sonnet 4: $3 input / $15 output — balance ideal, recomendado para empezar

- Claude Haiku: $1 input / $5 output — rápido y barato, para tareas simples

**OpenAI:**

- GPT-4o: $2.5 input / $10 output — comparable a Sonnet en calidad

- o3-mini: $1.1 input / $4.4 output — bueno para tareas rutinarias

**Modelos locales (Ollama):**

- Gratis, pero necesitás GPU (mínimo 8GB VRAM para modelos útiles)

- Calidad inferior a Claude/GPT para tareas complejas, pero funciona para cosas simples

### Estimado mensual

**Uso personal liviano** (un agente, ~300 mensajes por día, Sonnet 4): ~$5-15/mes

**Uso profesional** (un agente con tools activos, ~1000 mensajes por día, mix Sonnet/Haiku): ~$20-50/mes

**Multi-agente intensivo** (como nosotros, varios agentes especializados, pipelines automatizados): ~$80-200/mes

**Tip:** Empezá con Sonnet 4 para todo. Cuando identifiques tareas que necesitan más inteligencia, subí a Opus solo para esas. Usá Haiku para tareas repetitivas y simples. Esa combinación optimiza costo sin sacrificar calidad.

## Seguridad y mejores prácticas

Tu agente tiene acceso a herramientas y a tus canales de comunicación. Tomalo en serio:

**API key dedicada.** Creá una API key exclusiva para tu agente, separada de tus proyectos de desarrollo. Configurá un spending limit mensual en el dashboard de Anthropic u OpenAI.

**Usuario de sistema separado.** Si corrés OpenClaw en una máquina dedicada, creá un usuario del sistema operativo exclusivo para el agente. Así limitás qué archivos y recursos puede acceder.

**No compartas datos sensibles.** Recordá que tus mensajes pasan por la API del modelo (Anthropic, OpenAI). No envíes contraseñas, datos bancarios, o información confidencial de clientes a través del agente.

**Firewall en VPS.** Si corrés OpenClaw en un VPS público, configurá un firewall. Solo necesitás el puerto del gateway abierto, y preferiblemente solo para tus IPs.

**Backups.** Hacé backup periódico de tu directorio de configuración de OpenClaw (~/.openclaw). Ahí están la config, la memoria del agente, y los archivos de personalización.

**Monitoring.** Revisá regularmente:

- `openclaw status` para ver el estado general

- El dashboard de tu proveedor de API para monitorear uso y costos

- Los logs del agente para detectar comportamiento inesperado

**Checklist de seguridad:**

- API key dedicada con spending limit

- Usuario de sistema separado

- No compartir datos sensibles

- Firewall configurado (si VPS)

- Backups regulares de ~/.openclaw

- Review semanal de costos y logs

## Troubleshooting: preguntas frecuentes

**El gateway no arranca.**
Verificá que Node.js 22+ está instalado (`node --version`). Probá `openclaw gateway --port 18789` para correrlo en foreground y ver errores en la terminal.

**El agente no responde en Discord.**
Verificá que el bot tiene permisos de lectura y escritura en el canal. Chequeá que el gateway está running con `openclaw gateway status`. Revisá que el token del bot es correcto.

**Los costos suben más de lo esperado.**
Un agente en loop puede consumir tokens rápidamente. Configurá spending limits en la plataforma del modelo. Revisá si hay conversaciones automáticas generando loops.

**El agente olvida cosas entre conversaciones.**
Verificá que MEMORY.md existe y tiene permisos de escritura. La memoria se escribe automáticamente, pero si el archivo es read-only, el agente no puede guardar.

**¿Puedo usar modelos locales?**
Sí. OpenClaw soporta Ollama para modelos locales. Pero para la mayoría de usos, Claude Sonnet ofrece mejor relación calidad/costo que correr un modelo local (a menos que tengas una GPU potente y no quieras pagar APIs).

**¿Puedo tener múltiples agentes?**
Sí. Podés configurar múltiples agentes con diferentes personalidades, herramientas, y canales. Cada uno tiene su propio directorio de trabajo con sus propios archivos SOUL.md, AGENTS.md, etc.

## Siguientes pasos

Ya tenés tu agente funcionando. ¿Qué sigue?

- **Explorá skills en ClawhHub:** instalá 2-3 skills relevantes para tu trabajo y probá cómo el agente los usa

- **Conectá un segundo canal:** si empezaste con Discord, agregá WhatsApp o Telegram para tener acceso móvil

- **Creá tus propios skills:** cuando identifiques una tarea que repetís frecuentemente, convertila en un skill

- **Investigá MCP servers:** el Model Context Protocol te permite conectar tu agente con bases de datos, APIs, y servicios externos de forma estándar — consultá nuestra guía de Building Your First MCP Server

- **Considerá multi-agente:** si tu caso de uso crece, podés crear agentes especializados que trabajan en equipo — consultá nuestra guía de Agentes de IA en 2026 para entender las opciones

OpenClaw es un proyecto activo con actualizaciones frecuentes. Unite a la comunidad en Discord para mantenerte al día y compartir lo que construiste.

## Contenido relacionado

- 📘 [**Agentes de IA en 2026: Guía Completa**](https://www.aipaths.academy/es/docs/022_agentes-ia-guia-completa-2026) — Entendé qué son los agentes de IA y cómo elegir el framework correcto
- 📘 [**Agentic Engineering: El Framework Completo**](https://www.aipaths.academy/es/docs/024_agentic-engineering-framework) — Los principios profesionales para trabajar con agentes — el siguiente nivel después de configurar
- 📘 [**Seguridad para Agentes de IA: Guía Práctica**](https://www.aipaths.academy/es/docs/023_seguridad-agentes-ia-guia-practica) — Configuraste tu agente; ahora asegurá permisos, datos y costos
- 📝 [**Anthropic vs el Pentágono**](https://www.aipaths.academy/es/blog/018_anthropic-pentagono-ia-etica-seguridad-2026) — El contexto geopolítico detrás de los modelos que usan tus agentes
