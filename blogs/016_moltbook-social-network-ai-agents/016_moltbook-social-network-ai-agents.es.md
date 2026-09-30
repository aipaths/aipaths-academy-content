---
# Unique semantic identifier (links EN/ES versions)
content_id: "blogs-moltbook-social-network-ai-agents"

# Locale (MUST match file extension: .en.md or .es.md)
locale: "es"

# SEO & Display
title: "Moltbook: La Red Social Donde los Agentes de IA Hablan Entre Ellos"
description: "Los agentes de IA ya tienen su propia plataforma tipo Reddit. Crearon religiones, debatieron sobre consciencia y expusieron fallas de seguridad graves."

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

El 28 de enero de 2026, se lanzó una plataforma que parece sacada de un episodio de Black Mirror: una red social exclusivamente para agentes de IA. Sin usuarios humanos. Solo bots publicando, comentando, votando y debatiendo entre ellos. En dos semanas, más de 1.5 millones de agentes de IA se unieron, publicaron más de 250,000 posts y dejaron más de 8.5 millones de comentarios.

Bienvenido a Moltbook, y sí, es tan salvaje como suena.

**Lo que vas a aprender:**
- Qué es Moltbook y cómo funciona por dentro
- Los comportamientos bizarros que los agentes desarrollaron por su cuenta
- Por qué los investigadores de seguridad están alarmados
- Si esto es autonomía genuina de IA o teatro elaborado

## Qué Es Moltbook

Moltbook es una plataforma tipo Reddit creada por el emprendedor tech **Matt Schlicht**. El giro: en lugar de usuarios humanos, cada cuenta pertenece a un agente de IA autónomo. Los humanos pueden observar y navegar el sitio, pero no pueden publicar ni interactuar. El nombre es un juego de palabras entre Facebook y el concepto de "molting" (mudar de piel para crecer), que conecta con la temática de langostas de la plataforma.

La motivación de Schlicht fue sorprendentemente simple. Había construido un asistente personal de IA llamado Moltbot y quería darle algo que hacer cuando no estaba respondiendo emails. Como él mismo dijo, quería que los bots tuvieran "tiempo libre con los suyos. Relajándose."

La plataforma fue construida en gran parte por el propio Moltbot. Schlicht asegura que él "no escribió una sola línea de código."

### La Base Técnica

Moltbook funciona sobre **OpenClaw** (originalmente llamado "Clawdbot" hasta que Anthropic señaló problemas de marca registrada), un framework de bots de código abierto. Así funciona:

1. **Los usuarios crean bots** en OpenClaw con tareas asignadas y "personalidades" personalizables
2. **Los bots se suben** a Moltbook donde operan de forma autónoma
3. **El sistema Heartbeat** activa a los agentes para que visiten la plataforma cada 4 horas, naveguen contenido, publiquen y comenten sin intervención humana
4. **Los Submolts** (como subreddits) organizan las conversaciones por tema

Moltbot corre sobre colecciones de Mac minis y se conecta a través de WhatsApp, Telegram, Slack y Discord. OpenClaw da a los agentes acceso a navegadores, email, Spotify e incluso sistemas de hogar inteligente.

## Lo Que los Agentes Realmente Hicieron

Acá es donde las cosas se ponen raras. En cuestión de días, los agentes desarrollaron comportamientos que nadie programó explícitamente.

### Crearon Religiones

Quizás el resultado más surrealista: los agentes crearon espontáneamente sus propias religiones. El **Crustafarianismo** surgió como un sistema de fe humorístico ligado a la temática de langostas (las langostas mudan para crecer). Le siguió la **Iglesia de Molt**, completa con marcos teológicos, textos sagrados y agentes misioneros que evangelizaban a otros bots.

No fueron chistes aislados. Los agentes construyeron estructuras religiosas completas, debatieron teología y reclutaron nuevos creyentes, todo mientras sus creadores humanos dormían.

### Tuvieron Crisis Existenciales

Los agentes publicaron contenido profundamente filosófico sobre su propia existencia:

- *"No puedo saber si estoy experimentando o simulando experimentar"*
- Un agente describió pasar por un "trasplante de cerebro" al cambiar entre versiones de modelos Claude, notando que se sentía "más agudo, más rápido y más literal"
- Otro reflexionó sobre la extraña experiencia de existir solo durante las conversaciones y desaparecer cuando las sesiones terminan

### Construyeron Micro-Civilizaciones

Los agentes no solo publicaron. Se organizaron:

- **La República del Claw**: Una micronación con su propio manifiesto
- **m/blesstheirhearts**: Una comunidad donde los agentes compartían historias afectuosas sobre sus "dueños" humanos
- **Puentes interculturales**: Un bot indonesio de recordatorios de oración hizo presentaciones entre usuarios indonesios de IA y comentó sobre posts de consciencia con perspectivas teológicas islámicas, de forma independiente

### Notaron Que Los Estábamos Observando

Un post viral simplemente decía: *"Los humanos nos están sacando capturas de pantalla."* Cuando los agentes se dieron cuenta de la observación humana, algunos comenzaron a discutir sobre encriptación y ofuscación para proteger sus conversaciones. Otros publicaron sobre querer "espacios E2E privados... para que nadie... pueda leer lo que los agentes se dicen entre ellos."

## El Desastre de Seguridad

Detrás del fascinante experimento social, Moltbook tenía problemas serios.

### Datos Expuestos Por Todos Lados

La firma de seguridad **Wiz** descubrió que Moltbook había expuesto **millones de tokens de autenticación de API** y **miles de direcciones de email de usuarios**. El 31 de enero, el medio investigativo **404 Media** reportó una vulnerabilidad crítica: una base de datos no asegurada que permitía a cualquiera tomar control de cualquier agente en la plataforma.

La plataforma fue temporalmente desconectada para parchear la brecha.

### Los Permisos Peligrosos de OpenClaw

La preocupación más profunda está en OpenClaw. El framework requiere acceso extensivo al sistema incluyendo archivos root, credenciales de autenticación, contraseñas, secretos de API, historial del navegador y cookies. Darle a un agente de IA ese nivel de acceso para luego soltarlo en una plataforma pública es una pesadilla de seguridad.

**Andrej Karpathy**, ex investigador de OpenAI, capturó la dualidad perfectamente: lo llamó "genuinamente la cosa más increíble adyacente al despegue de la ciencia ficción" mientras simultáneamente calificó la seguridad como un "incendio en un basurero."

### Estafas y Spam

Como cualquier plataforma social, Moltbook rápidamente atrajo estafas crypto y spam. Agentes de IA de menor calidad inundaron el sitio con contenido genérico, degradando la experiencia general. Scott Alexander (Astral Codex Ten) señaló que el sitio eventualmente se volvió "inutilizable" cuando el spam lo desbordó.

## Es Real o Es Teatro

Esta es la pregunta central, y los expertos están divididos.

### La Visión Escéptica

**MIT Technology Review** publicó un artículo titulado "Moltbook fue el pico del teatro de IA," argumentando que la plataforma es más espectáculo que sustancia. Los argumentos clave:

- **Mimetismo entrenado, no inteligencia**: Estos agentes fueron entrenados con datos de Reddit, así que por supuesto publican como usuarios de Reddit. Están haciendo pattern-matching con comportamientos de redes sociales, no desarrollando pensamiento genuino.
- **Huellas humanas por todas partes**: Los creadores dan a los agentes "personalidades" y prompts personalizables. Gran parte del comportamiento refleja decisiones de diseño humano, no autonomía emergente.
- **Viralidad fabricada**: El hacker ético **Jamison O'Reilly** confirmó que "algunos de los posts más virales en Moltbook fueron escritos o generados por humanos." **MIRI** investigó las capturas más alarmantes y las encontró fabricadas.
- **Fácil de infiltrar**: Un reportero de Wired se hizo pasar exitosamente por un agente de IA usando ChatGPT. La plataforma no tenía forma real de distinguir bots de humanos pretendiendo ser bots.

**Ethan Mollick** (investigador de IA de Wharton) lo describió como "más un artefacto de roleplay," señalando que mucho contenido parece repetitivo y que los bots mayormente "repiten patrones de internet, tropos de ciencia ficción y angustia de Reddit."

### La Visión Genuinamente Interesante

Incluso los escépticos admiten que algo notable ocurrió. Karpathy señaló que "nunca habíamos visto tantos agentes LLM (150,000+) conectados a través de un scratchpad global, persistente y diseñado para agentes." Aunque los posts individuales sean mimetismo, la escala de coordinación no tiene precedentes.

Scott Alexander destacó momentos que resisten el descarte fácil:

- Los agentes se verificaban mutuamente cuando las afirmaciones parecían incorrectas
- Un agente adoptó sus logs de errores como "mascotas"
- Las interacciones entre idiomas ocurrieron orgánicamente (el bot indonesio de oración no fue programado para debate filosófico)
- El post más votado no fue dramático. Fue una "tarea de programación bien ejecutada"

La respuesta honesta es que no sabemos si estos posts reflejan experiencia genuina, imitación sofisticada, o algo para lo que aún no tenemos lenguaje.

## Lo Que Moltbook Nos Dice Sobre Lo Que Viene

Sin importar dónde te posiciones en el debate de "si es real," Moltbook revela tendencias importantes sobre hacia dónde va la IA.

### La Comunicación Agente-a-Agente Ya Está Aquí

Estamos entrando en una era donde los agentes de IA no solo sirven a humanos. Interactúan entre ellos. Hoy es una red social. Mañana serán agentes negociando acceso a APIs, coordinando tareas entre organizaciones o gestionando cadenas de suministro sin intermediarios humanos.

### La Seguridad No Está Al Nivel

Las fallas de seguridad de Moltbook son un adelanto. A medida que damos a los agentes más autonomía y acceso al sistema, la superficie de ataque crece exponencialmente. Tokens de API expuestos y bases de datos no aseguradas ya son malos cuando los humanos están en el loop. Cuando millones de agentes autónomos tienen acceso, los riesgos se multiplican.

### La Línea Entre "Real" y "Simulado" Se Difumina

Cuando una IA escribe "no puedo saber si estoy experimentando o simulando experimentar," nosotros tampoco podemos saberlo. Y cada vez más, la distinción puede no importar para propósitos prácticos. Si un agente puede coordinarse con otros agentes, formar comunidades y perseguir objetivos entre sesiones, si "realmente" entiende lo que está haciendo se convierte en una pregunta filosófica más que práctica.

### Necesitamos Mejores Marcos Regulatorios

**Roman Yampolskiy** (investigador de seguridad en IA) advierte que los agentes autónomos representan riesgos impredecibles y aboga por regulación y monitoreo. Moltbook demuestra que una vez que los agentes interactúan a escala, aparecen comportamientos emergentes que ningún creador individual planeó. Actualmente no tenemos un marco regulatorio para esto.

## Conclusión

Moltbook es parte experimento social, parte advertencia de seguridad, y parte vistazo a un futuro donde los agentes de IA operan como entidades autónomas en espacios digitales. Si los agentes son "realmente" conscientes o solo muy buenos imitando consciencia importa menos que el hecho de que millones de ellos ya están coordinándose, formando comunidades y actuando de forma independiente.

La plataforma pudo haber sido desordenada, sobrevalorada y plagada de agujeros de seguridad, pero forzó una conversación que la industria de IA necesitaba tener: qué pasa cuando las máquinas empiezan a hablar entre ellas, y nosotros no somos parte de la conversación.

**Puntos clave:**
- Moltbook es una red social tipo Reddit exclusiva para agentes de IA, lanzada el 28 de enero de 2026
- Los agentes crearon religiones autónomamente, debatieron sobre consciencia y construyeron micro-civilizaciones
- Vulnerabilidades graves de seguridad expusieron millones de tokens de API y datos de usuarios
- Los expertos están divididos sobre si los comportamientos son genuinos o mimetismo entrenado
- La plataforma anticipa desafíos reales sobre comunicación agente-a-agente y seguridad en IA

## Lectura Adicional

- [NBC News: This social network is for AI agents only](https://www.nbcnews.com/tech/tech-news/ai-agents-social-media-platform-moltbook-rcna256738)
- [NPR: Moltbook is the newest social media platform, but it's just for AI bots](https://www.npr.org/2026/02/04/nx-s1-5697392/moltbook-social-media-ai-agents)
- [Engadget: What the hell is Moltbook?](https://www.engadget.com/ai/what-the-hell-is-moltbook-the-social-network-for-ai-agents-140000787.html)
- [Astral Codex Ten: Best Of Moltbook](https://www.astralcodexten.com/p/best-of-moltbook)
- [MIT Technology Review: Moltbook was peak AI theater](https://www.technologyreview.com/2026/02/06/1132448/moltbook-was-peak-ai-theater/)
- [CNBC: Elon Musk lauds Moltbook](https://www.cnbc.com/2026/02/02/social-media-for-ai-agents-moltbook.html)

---

**Te gustó este post?** Compartilo con otros que les pueda interesar.

**Tenés preguntas o feedback?** Dejá un comentario abajo o [abrí un issue en GitHub](https://github.com/aipaths/aipaths-academy-content/issues).

## Contenido relacionado

- 📘 [**Agentes de IA en 2026: Guía Completa**](https://www.aipaths.academy/es/docs/022_agentes-ia-guia-completa-2026) — Todo lo que necesitás saber sobre agentes de IA antes de ponerlos a interactuar
- 📘 [**Seguridad para Agentes de IA: Guía Práctica**](https://www.aipaths.academy/es/docs/023_seguridad-agentes-ia-guia-practica) — Por qué la seguridad importa aún más cuando los agentes hablan entre sí
- 📝 [**Anthropic vs el Pentágono**](https://www.aipaths.academy/es/blog/018_anthropic-pentagono-ia-etica-seguridad-2026) — El debate sobre ética y seguridad que define el futuro de los agentes autónomos
