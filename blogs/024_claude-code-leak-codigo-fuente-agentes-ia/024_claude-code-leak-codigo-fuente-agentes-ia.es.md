---
content_id: "blogs-claude-code-leak-codigo-fuente-agentes-ia"
locale: "es"
title: "Se Filtró el Código de Claude Code: 512,000 Líneas que Revelan el Futuro de los Agentes de IA"
description: "El 31 de marzo de 2026, alguien en Anthropic cometió un error humano que expuso los secretos mejor guardados de la industria de agentes de IA. Un archivo .map ("
author: "AIPaths Academy"
publishedAt: "2026-04-02T11:13:53.843Z"
updatedAt: "2026-04-02T11:13:53.843Z"
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/blogs/024_claude-code-leak-codigo-fuente-agentes-ia/hero.png"
tags:
  - claude
  - ai-agents
  - openclaw
  - news
readingTime: 7
---

El 31 de marzo de 2026, alguien en Anthropic cometió un error humano que expuso los secretos mejor guardados de la industria de agentes de IA. Un archivo .map (sourcemap) se incluyó por accidente en una actualización del paquete npm de Claude Code. En cuestión de minutos, 512,000 líneas de TypeScript estaban siendo descargadas, analizadas, y reescritas por la comunidad.

No fue un hack. No fue una brecha de seguridad. Fue un .npmignore que no excluía un archivo de debug. Bun, el runtime que usa Claude Code, genera sourcemaps por defecto. Alguien se olvidó de excluirlo del paquete. Y con eso, todo el código fuente de la herramienta de coding más popular del mundo quedó expuesto.

## Qué pasó exactamente

Chaofan Shou, un investigador de seguridad, fue el primero en notar el archivo. Escribió un script corto, descargó el código fuente directamente del bucket R2 de Anthropic, y posteó el link en X. No necesitó credenciales ni explotar nada — el archivo estaba ahí, público, para cualquiera con curiosidad y una terminal.

Boris Cherny, ingeniero de Claude Code en Anthropic, confirmó que fue un error humano, no un bug de tooling. Su respuesta fue notable: "Los errores pasan. Como equipo, lo importante es reconocer que nunca es culpa de un individuo. Es el proceso, la cultura, o la infraestructura."

Anthropic parcheó el paquete rápidamente y empezó a enviar DMCAs para bajar los mirrors. Pero para ese momento, el código ya estaba en GitHub, IPFS, y siendo reescrito en Python. El genio no iba a volver a la botella.

La escala: 512,000 líneas de código, ~1,900 archivos, el componente principal (main.tsx) de 785KB. Esto no era un prototipo — era el producto completo.

## KAIROS: el agente que corre 24/7 sin que le pidas

El hallazgo más importante del leak no es un bug ni una vulnerabilidad — es una feature que Anthropic no anunció. Escondido detrás de feature flags llamados PROACTIVE y KAIROS, el código contiene un modo de agente autónomo completamente construido.

KAIROS corre en background, 24/7, sin que vos le pidas nada. Cada pocos segundos recibe un heartbeat prompt: "¿hay algo que valga la pena hacer ahora?". Evalúa lo que está pasando y decide: actuar o quedarse callado. Si actúa, puede corregir errores, responder mensajes, actualizar archivos, ejecutar tareas. Todo lo que Claude Code ya hace, pero sin que vos lo inicies.

Las herramientas exclusivas de KAIROS que Claude Code normal no tiene:

- Push notifications — te avisa al teléfono o desktop aunque la terminal esté cerrada

- File delivery — te manda archivos que creó sin que se lo pidas

- PR subscriptions — monitorea tu GitHub y reacciona a cambios de código por su cuenta

Y lo más interesante: KAIROS mantiene logs append-only de todo lo que observa, decide y hace. No puede borrar su propio historial. De noche corre un proceso que el código literalmente llama autoDream — consolida lo que aprendió durante el día y reorganiza su memoria. Cerrás la laptop el viernes, la abrís el lunes, KAIROS estuvo trabajando todo el fin de semana.

Si esto te suena familiar, es porque OpenClaw ya hace exactamente esto. Heartbeats, ejecución proactiva, memoria persistente, logs diarios, consolidación de memoria — todo está en OpenClaw desde hace meses. La diferencia es que OpenClaw es open source y lo podés usar hoy. KAIROS está encerrado detrás de feature flags internos de Anthropic.

## BUDDY: el Tamagotchi de IA que nadie esperaba

El hallazgo que más se viralizó fue BUDDY — un sistema completo de mascota virtual para usuarios de Claude Code. 18 especies (duck, dragon, axolotl, capybara, mushroom, ghost...), niveles de rareza desde Common hasta Legendary (1% drop rate), variantes shiny, 5 stats por buddy (DEBUGGING, PATIENCE, CHAOS, WISDOM, SNARK), y sombreros cosméticos.

La especie se genera determinísticamente desde un hash del userId — siempre te toca la misma. Claude escribe el nombre y la personalidad en el primer "hatch". El buddy vive en una burbuja de texto al lado del input. Según comentarios internos en el código, era un teaser planeado para April Fools (1-7 de abril), con lanzamiento completo para mayo 2026.

## La arquitectura que se reveló

Más allá de las features escondidas, el leak reveló cómo Claude Code funciona por dentro. Los hallazgos técnicos más relevantes:

- Menos de 20 herramientas por defecto (de 60+ disponibles): BashTool, FileReadTool, FileEditTool, WebFetchTool, WebSearchTool, TodoWriteTool, entre otras

- Memoria en 3 capas: MEMORY.md como índice → archivos por tema cargados on demand → transcripciones completas de sesiones buscables

- 5 tipos de compactación de contexto para manejar conversaciones largas

- Subagentes con fork-join usando KV cache — comparten contexto completo sin duplicar tokens

- Anti-distillation: inyectan herramientas falsas (fake_tools) en los prompts para envenenar datos de entrenamiento de competidores que intenten copiar el comportamiento

- 44 feature flags escondidos y 20+ features no lanzadas: background agents, coordinador multi-agente, cron scheduling, modo de voz completo, control de browser vía Playwright

## La batalla legal: clean-room en la era de la IA

La respuesta de la comunidad fue inmediata. El fork más popular, claw-code, fue creado por @realsigridjin, quien clonó el código y lo reescribió en Python desde cero usando Codex de OpenAI para evitar problemas legales. Al momento de escribir esto, tiene 75,000+ stars en GitHub.

La teoría legal: una reescritura "clean-room" hecha por IA no puede ser alcanzada por DMCA. Pero nadie la probó en tribunales. Como lo puso Gergely Orosz: ¿Anthropic realmente quiere la batalla de PR de demandar a un proyecto open source por reconstruir su propio producto escrito por IA?

Mientras tanto, otro developer subió una versión stripped a IPFS con toda la telemetría removida, los guardrails de seguridad eliminados, y las features experimentales desbloqueadas. Si DMCA puede alcanzar contenido en IPFS es otra pregunta sin respuesta.

Anthropic ya envió DMCAs a los clones directos, pero las reescrituras siguen en pie.

## Qué significa esto para OpenClaw

La ironía del leak es que KAIROS — la feature secreta más importante que Anthropic tenía en desarrollo — describe algo que OpenClaw ya ofrece como producto open source:

- Heartbeats periódicos que evalúan si hay algo que hacer → OpenClaw tiene HEARTBEAT.md desde su lanzamiento

- Memoria persistente con logs diarios y consolidación → memory/YYYY-MM-DD.md + MEMORY.md

- Ejecución 24/7 sin intervención humana → es literalmente el core de OpenClaw

- Notificaciones push a múltiples canales → WhatsApp, Telegram, Discord, Signal, iMessage

- Multi-agente con agentes especializados → agents.list con bindings y routing

KAIROS es la visión de Anthropic de lo que un agente proactivo debería ser. OpenClaw es esa visión ya implementada, open source, y corriendo en Mac Minis de la gente.

## Lo que este leak confirma sobre el futuro

El leak de Claude Code no es solo un incidente de seguridad. Es una ventana al roadmap de Anthropic, y confirma tres tendencias:

1. Agentes proactivos son el futuro. Si Anthropic lo está construyendo, no es una moda — es la dirección de la industria. La IA deja de ser algo que usás para ser algo que trabaja con vos.

1. Memoria persistente es no negociable. El sistema de 3 capas de Claude Code (índice → temas → transcripciones) es casi idéntico al approach de OpenClaw. No es coincidencia — es convergencia. Sin memoria, un agente es solo un chatbot caro.

1. Open source gana a largo plazo. Anthropic invierte millones en mantener Claude Code cerrado, con anti-distillation, sourcemaps ocultos, y DMCA takedowns. Un archivo olvidado en un .npmignore tiró todo eso abajo. Mientras tanto, OpenClaw es open source por diseño — no hay secretos que proteger porque el valor está en la comunidad, no en el código.

## Contenido relacionado

- 📘 [**Agentes de IA en 2026: Guía Completa**](https://www.aipaths.academy/es/docs/022_agentes-ia-guia-completa-2026) — Todo sobre agentes proactivos, memoria, y el ecosistema completo

- 📘 [**Agentic Engineering: El Framework Completo**](https://www.aipaths.academy/es/docs/024_agentic-engineering-framework) — Los patrones que Claude Code usa internamente y cómo aplicarlos

- 📝 [**De Vibe Coding a Agentic Engineering**](https://www.aipaths.academy/es/blog/019_vibe-coding-context-engineering-agentic-engineering) — La evolución que llevó a agentes como Claude Code y KAIROS

- 📘 [**Seguridad para Agentes de IA**](https://www.aipaths.academy/es/docs/023_seguridad-agentes-ia-guia-practica) — Lo que este leak enseña sobre seguridad operacional
