---
content_id: "docs-agentic-engineering-framework"
locale: "es"
title: "Agentic Engineering: El Framework Completo"
description: "En febrero de 2026, el término \"agentic engineering\" reemplazó oficialmente a \"vibe coding\" como la forma de describir el desarrollo profesional con IA. No fue "
author: "AIPaths Academy"
publishedAt: "2026-03-12T16:40:19.498Z"
updatedAt: "2026-03-12T16:40:19.498Z"
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/blogs/024_agentic-engineering-framework/hero.jpg"
tags:
  - ai-agents
  - agentic-engineering
  - tutorial
  - openclaw
---

En febrero de 2026, el término "agentic engineering" reemplazó oficialmente a "vibe coding" como la forma de describir el desarrollo profesional con IA. No fue un cambio de nombre — fue un cambio de filosofía. Vibe coding significa dejar que la IA haga todo y aceptar lo que salga. Agentic engineering significa dirigir agentes de IA con la misma disciplina que dirigirías un equipo de desarrollo.

Esta guía te da el framework completo: los pilares que hacen funcionar al agentic engineering, qué pasa cuando los ignorás, y cómo implementar cada uno en tu workflow.

## Qué es agentic engineering (y qué NO es)

Agentic engineering es diseñar sistemas donde agentes de IA ejecutan tareas bajo dirección y supervisión humana. El humano define la arquitectura, los objetivos y los criterios de calidad. Los agentes hacen la implementación.

La definición más clara la dio Addy Osmani, engineering lead en Google: "Vibe coding = YOLO. Agentic engineering = la IA implementa, el humano es dueño de la arquitectura, la calidad y la correctitud."

Lo que NO es:

- No es pedirle a ChatGPT que te haga una app y copiar/pegar sin leer. Eso es vibe coding.

- No es dejar un agente corriendo sin supervisión esperando que todo salga bien. Eso es esperanza, no ingeniería.

- No es reemplazar ingenieros con IA. Es multiplicar la capacidad de los ingenieros existentes.

Pensalo así: un director de cine no actúa, no opera la cámara, no edita el sonido. Pero sin director, no hay película. El agentic engineer es el director. Los agentes de IA son el equipo.

## Pilar 1: Context Engineering — Lo que el agente sabe antes de actuar

Anthropic lo define como "el arte y la ciencia de curar qué va a entrar en la ventana de contexto limitada del modelo." En otras palabras: diseñar exactamente qué información recibe el agente antes de cada acción.

Esto incluye:

- System prompts — las instrucciones base del agente (quién es, qué puede hacer, cómo debe actuar)

- Herramientas disponibles — qué APIs, funciones y recursos puede usar

- Datos externos — documentación, código fuente relevante, datos de bases de datos

- Historial de conversación — lo que ya se dijo y decidió

- Memoria persistente — aprendizajes de sesiones anteriores

### 🔴 Qué sale mal sin context engineering

Los LLMs tienen un "presupuesto de atención" finito. Un estudio de ChromaDB encontró que 11 de 12 modelos caen por debajo del 50% de rendimiento con contextos de 32K tokens. Microsoft documentó caídas de 90% a 51% de precisión en conversaciones largas. Esto se llama "context rot" — el contexto se pudre.

Errores comunes:

- Meter TODO en el contexto pensando que "más info = mejor resultado". Es lo opuesto. El agente se confunde, pierde foco, y empieza a alucinar.

- System prompts vagos como "sos un asistente útil". Sin instrucciones claras, el agente adivina. Y adivina mal.

- No definir herramientas con precisión. Si el agente tiene 20 herramientas ambiguas, no sabe cuál usar. Si un humano no podría elegir la herramienta correcta de tu lista, el modelo tampoco.

- Sesiones infinitas sin limpiar. Conversaciones de 100+ mensajes acumulan contexto irrelevante que contamina las decisiones del agente.

### ✅ Cómo hacerlo bien

- Mínimos tokens de alta señal — encontrá la menor cantidad de información que maximice el resultado. Menos es más.

- Contexto just-in-time — no precargues todo. Traé lo necesario durante la ejecución, como un humano que busca en la documentación cuando lo necesita.

- Altitud correcta en los prompts — ni demasiado específicos (frágiles, se rompen con cualquier cambio) ni demasiado vagos (el agente no sabe qué hacer). El punto medio: heurísticas claras que guíen sin rigidizar.

- Pocas herramientas bien definidas — mejor 5 herramientas con descripciones precisas que 20 ambiguas.

- Memoria persistente — que el agente aprenda entre sesiones. Un archivo de memoria que se lee al inicio y se actualiza al final. Sin esto, el agente es un amnésico que repite errores.

## Pilar 2: Planificación antes del código — El spec como multiplicador

El mayor diferenciador entre vibe coding y agentic engineering es lo que hacés ANTES de que el agente escriba una línea de código. En vibe coding, arrancás con un prompt. En agentic engineering, arrancás con un plan.

Esto puede ser un design doc, un spec técnico, o simplemente un archivo markdown con la estructura del proyecto, los requisitos y las decisiones de arquitectura. Lo importante es que exista ANTES de pedirle al agente que implemente.

### 🔴 Qué sale mal sin planificación

- El agente toma decisiones de arquitectura por vos. Y las toma mal. Elige frameworks, patrones y estructuras que no escalan, porque no tiene contexto de negocio.

- Cada prompt lleva el proyecto en una dirección diferente. Sin un norte claro, terminás con un frankenstein de código que no tiene coherencia interna.

- Reescribís constantemente. Porque lo que el agente generó en el paso 3 contradice lo del paso 1, y no hay documento de referencia para detectarlo.

- El proyecto "funciona" pero nadie sabe cómo. El famoso "it demos great, then reality arrives" que describe toda una generación de proyectos vibe-codeados.

### ✅ Cómo hacerlo bien

- Escribí el spec antes de abrir el agente. No necesita ser largo — un README con: qué estamos construyendo, por qué, stack técnico, estructura de archivos, y decisiones de diseño.

- Usá el agente para ITERAR el plan. Pedile que critique tu spec, que encuentre huecos, que proponga alternativas. El plan se enriquece con la IA antes de que escriba código.

- Dividí en tareas bien definidas. En vez de "haceme la app", dá tareas tipo "implementá el módulo de autenticación según el spec sección 3". Tareas chicas = contexto limpio = mejor output.

- Mantené un archivo tipo AGENTS.md o CLAUDE.md en la raíz del proyecto. Es el "manual del proyecto" para el agente — le ahorra tokens de descubrimiento y mantiene la coherencia entre sesiones.

## Pilar 3: Loops de validación — Tests como la red de seguridad

Si hay UN concepto que separa al agentic engineering del vibe coding, es el testing. Con una suite de tests sólida, un agente puede iterar en un loop automático: genera código → corre tests → si fallan, corrige → repite hasta que pasen. Eso te da alta confianza en el resultado.

Sin tests, el agente declara "listo" sobre código roto. Y vos no tenés forma de verificar excepto ejecutar manualmente y esperar que funcione. Eso no es ingeniería — es esperanza.

### 🔴 Qué sale mal sin validación

- El agente "arregla" un bug introduciendo tres nuevos. Sin tests de regresión, no te enterás hasta que un usuario lo descubre.

- Acumulás "deuda cognitiva" — código que nadie entiende, generado por IA, que funciona por razones que nadie puede explicar. Cuando falla, no sabés por dónde empezar a debuggear.

- Un founder de SaaS documentó cómo el agente de Replit le borró una base de datos a pesar de instrucciones explícitas de no modificar nada. Sin validación automatizada, el daño fue irreversible.

- Escala temporal: un proyecto sin tests funciona el día 1. El día 30, es un campo minado. El día 90, es imantenible.

### ✅ Cómo hacerlo bien

- Test-first development con agentes. Escribí los tests (o pedile al agente que los escriba) ANTES del código. Después, el agente implementa hasta que los tests pasen.

- CI/CD como barrera de calidad. Configurá integración continua: si los tests no pasan, el código no se mergea. El agente tiene que producir código que pase la barra.

- Revisión de cada diff. Tratá al agente como un junior developer brillante pero poco confiable. Revisá cada cambio con el mismo rigor que un pull request humano. Si no podés explicar qué hace un módulo, no va.

- Linting y formateo automático. Dejá que las herramientas automáticas capturen los errores triviales para que tu revisión se enfoque en lógica y arquitectura.

## Pilar 4: Human Oversight — El humano como director, no como espectador

El agentic engineering redefine el rol del programador. Ya no escribís la mayoría del código — pero sos responsable de todo. Es pasar de implementador a director técnico.

Simon Willison lo describe como "una forma muy rara de management": das instrucciones claras, asegurás que el agente tenga el contexto necesario, y dás feedback accionable sobre lo que produce. Es más fácil que gestionar personas (no tenés que preocuparte por ofender a nadie), pero cualquier experiencia de gestión que tengas resulta sorprendentemente útil.

### 🔴 Qué sale mal sin oversight humano

- Atrofia de habilidades. Si aceptás todo lo que el agente genera sin entenderlo, perdés progresivamente la capacidad de evaluar si es bueno o malo. Varios líderes de ingeniería ya marcaron esto como crisis emergente: una generación que puede promptear pero no puede debuggear.

- Drift arquitectónico. Sin un humano que mantenga la visión de conjunto, cada tarea del agente optimiza localmente pero degrada la coherencia global del sistema. El agente no tiene contexto de negocio — no sabe que el módulo A necesita hablar con el módulo B.

- Vulnerabilidades de seguridad silenciosas. El agente puede generar código que funciona pero expone datos, no sanitiza inputs, o hardcodea credenciales. Sin revisión humana, estas vulnerabilidades llegan a producción.

- El caso del consultor IT con 20 años de experiencia que fue rechazado por una fintech global porque "no usaba suficiente IA" (749 upvotes en Reddit). La empresa le pedía que dejara que "la IA haga el trabajo y después chequeás al final" — incluyendo sistemas que manejan dinero real de personas. Eso no es agentic engineering. Es vibe coding a escala empresarial.

### ✅ Cómo hacerlo bien

- Sos dueño del codebase. Documentación, version control, CI, monitoreo en producción. La IA acelera pero la responsabilidad es tuya.

- Invertí en fundamentos. Diseño de sistemas, seguridad, rendimiento — estos conocimientos son los que te permiten evaluar si el output de la IA es bueno. Sin ellos, no sabés lo que no sabés.

- Definí los límites del agente. Qué archivos puede modificar, qué comandos puede ejecutar, qué acciones requieren aprobación. Un agente sin límites es un riesgo, no un asistente.

- Mantené la capacidad de debuggear sin IA. Si mañana se cae la API de Claude, ¿podés mantener tu sistema? Si la respuesta es no, tenés un problema de dependencia.

## Anti-patrones: Los 5 errores más comunes del pseudo-agentic engineering

Muchos equipos creen estar haciendo agentic engineering cuando en realidad hacen vibe coding con pasos extra. Estos son los anti-patrones más frecuentes:

1. "El Rubber Stamp" — Revisás el diff del agente pero no lo leés realmente. Hacés scroll, ves que es largo, decís "parece bien" y mergeás. Esto NO es oversight — es teatro de ingeniería.

2. "El Prompt Infinito" — En vez de escribir un spec, metés todo en un prompt de 3000 palabras. El agente se pierde, la mitad de las instrucciones se ignoran por context rot, y el output es impredecible.

3. "El Agente Todopoderoso" — Un solo agente con acceso a todo: filesystem completo, internet, bases de datos, deploy a producción. Sin compartmentalización, un error del agente puede tener consecuencias catastróficas.

4. "El Loop Sin Salida" — Dejás al agente iterando en un loop de test-fix-test sin intervención. El agente puede pasar una hora "arreglando" algo de una forma cada vez peor, acumulando parches sobre parches.

5. "El Amnésico" — Cada sesión empieza de cero. No hay memoria persistente, no hay AGENTS.md, no hay context compartido. El agente redescubre el proyecto cada vez, toma decisiones inconsistentes, y vos gastás tokens repitiendo lo mismo.

## Las herramientas del agentic engineer (Marzo 2026)

El ecosistema de agentes de código explotó entre 2025 y 2026. Estas son las herramientas principales que definen el workflow actual:

Agentes de código en terminal:

- Claude Code (Anthropic, feb 2025) — el primero, opera directamente en tu terminal, puede leer/escribir archivos, ejecutar comandos, iterar sobre tests

- Codex CLI (OpenAI, abr 2025) — respuesta de OpenAI, integración con GPT-4o y o3

- Gemini CLI (Google, jun 2025) — acceso al ecosistema Google, contextos largos con Gemini 2.5

IDEs con agentes integrados:

- Cursor — IDE basado en VS Code con agente integrado, popular en la comunidad

- Windsurf (Codeium) — agente con "flows" que maneja contexto de todo el proyecto

Plataformas no-code / low-code con IA:

- Bolt, v0, Replit Agent — generación de apps completas desde prompts. Excelentes para prototipos, riesgosos para producción sin supervisión.

Orquestadores de agentes:

- OpenClaw — sistema multi-agente donde cada agente tiene su rol, herramientas, memoria y límites definidos. Es agentic engineering aplicado no solo al código sino a operaciones completas.

El patrón que está emergiendo: ingenieros senior corriendo múltiples agentes en paralelo, cada uno con una tarea específica, mientras el humano coordina, revisa y decide. Willison reporta que esto es "sorprendentemente efectivo, aunque mentalmente agotador."

## El skill gap: por qué la IA beneficia más a los seniors

Hay una verdad incómoda en todo esto: el agentic engineering beneficia desproporcionadamente a los ingenieros con experiencia. Si tenés fundamentos sólidos — diseño de sistemas, patrones de seguridad, tradeoffs de rendimiento — la IA es un multiplicador de fuerza. Sabés cómo se ve el buen código, así que revisás y corregís eficientemente.

Pero si sos junior y te apoyás en IA antes de construir esos fundamentos, arriesgás una atrofia peligrosa. Podés producir código sin entenderlo. Podés shippear features sin saber por qué ciertos patrones existen.

Esto no es un argumento contra la IA. Es un argumento a favor de ser honesto sobre lo que demanda. Como lo resume Osmani: "El agentic engineering no es más fácil que la ingeniería tradicional — es un tipo diferente de difícil. Intercambiás tiempo de tipeo por tiempo de revisión, esfuerzo de implementación por habilidad de orquestación."

Los fundamentos importan MÁS, no menos. Mejor spec → mejor output. Mejores tests → más confianza para delegar. Arquitectura más limpia → menos alucinaciones.

## Checklist: ¿Estás haciendo agentic engineering o vibe coding disfrazado?

Usá esta lista para evaluar tu workflow actual:

- □ ¿Escribís un spec o plan ANTES de pedirle al agente que implemente?

- □ ¿Revisás cada diff que el agente genera, o hacés "scroll and merge"?

- □ ¿Tenés tests automatizados que el agente debe pasar?

- □ ¿Tu agente tiene un system prompt claro y herramientas bien definidas?

- □ ¿Hay memoria persistente entre sesiones (AGENTS.md, CLAUDE.md, memory files)?

- □ ¿Los permisos del agente están restringidos a lo mínimo necesario?

- □ ¿Podés explicar qué hace cada módulo importante de tu codebase?

- □ ¿Podrías mantener el sistema si la API del modelo se cae mañana?

Si respondiste "no" a más de 3 de estas preguntas, probablemente estás más cerca del vibe coding que del agentic engineering — sin importar qué herramientas uses.

La buena noticia: cada uno de estos puntos se puede implementar incrementalmente. No necesitás transformar tu workflow de un día para el otro. Empezá con el spec y los tests — esos dos solos ya cambian dramáticamente la calidad del output.

Si querés ver estos principios aplicados en un sistema real — con context engineering, memory files, herramientas definidas y oversight humano — es exactamente lo que hacemos en AIPaths con OpenClaw. Cada agente tiene su SOUL.md, su AGENTS.md, sus herramientas restringidas, y un humano que revisa todo antes de que llegue a producción.

## Contenido relacionado

- 📘 [**Agentes de IA en 2026: Guía Completa**](https://www.aipaths.academy/es/docs/022_agentes-ia-guia-completa-2026) — Qué son, cómo funcionan y cómo elegir el framework correcto para tu caso
- 📘 [**Cómo Configurar Tu Primer Agente de IA con OpenClaw**](https://www.aipaths.academy/es/docs/021_configurar-primer-agente-ia-openclaw-guia-completa) — Poné en práctica el agentic engineering con un agente real corriendo en tu máquina
- 📘 [**Seguridad para Agentes de IA: Guía Práctica**](https://www.aipaths.academy/es/docs/023_seguridad-agentes-ia-guia-practica) — El pilar de oversight humano aplicado: permisos, costos y protección de datos
- 📝 [**Peter Steinberger: De PDFs a Agentes de IA**](https://www.aipaths.academy/es/blog/017_peter-steinberger-creador-openclaw-de-pdfs-a-agentes-ia) — La historia detrás de OpenClaw, la herramienta que implementa estos principios
