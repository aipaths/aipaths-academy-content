---
content_id: "blogs-vibe-coding-context-engineering-agentic-engineering"
locale: "es"
title: "Vibe Coding - Context Engineering - Agentic Engineering"
description: "En febrero de 2025, Andrej Karpathy —cofundador de OpenAI y ex-líder de IA en Tesla— publicó un tweet que cambió el vocabulario de la industria tech. Describió "
author: "AIPaths Academy"
publishedAt: "2026-03-14T12:07:57.584Z"
updatedAt: "2026-03-14T12:07:57.584Z"
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/blogs/019_vibe-coding-context-engineering-agentic-engineering/hero.png"
tags:
  - ai-agents
  - vibe-coding
  - agentic-engineering
  - news
readingTime: 10
---

En febrero de 2025, Andrej Karpathy —cofundador de OpenAI y ex-líder de IA en Tesla— publicó un tweet que cambió el vocabulario de la industria tech. Describió una nueva forma de programar donde "te entregás completamente a las vibes, aceptás los exponenciales, y te olvidás de que el código existe."

Lo llamó vibe coding. Y así empezó todo.

Catorce meses después, ese mismo término ya quedó chico. La industria pasó de "dejá que la IA escriba todo" a dos conceptos más sofisticados: context engineering y agentic engineering. Cada uno marca una era diferente en la relación entre humanos e inteligencia artificial para crear software.

Esta es la historia de esa evolución — quién creó cada término, qué significa realmente, y por qué importa para cualquiera que trabaje con IA.

## Era 1: Vibe Coding — "Olvidate del código" (Febrero 2025)

Karpathy no inventó la práctica — inventó el nombre perfecto para algo que ya estaba pasando. Millones de personas estaban usando ChatGPT, Claude y Copilot para generar código sin entender qué hacía. Le pedías algo a la IA, aceptabas lo que te daba, y si funcionaba, listo. Si no, pegabas el error y repetías.

La definición clave viene de Simon Willison, creador de Django: "Si un LLM escribió cada línea de tu código, pero vos lo revisaste, testeaste y entendiste todo, eso NO es vibe coding — eso es usar un LLM como asistente de tipeo." Lo que define al vibe coding es aceptar código sin entenderlo.

El impacto fue inmediato:

- Merriam-Webster lo listó como "slang & trending" en marzo 2025

- Y Combinator reportó que el 25% de sus startups del batch Winter 2025 tenían codebases 95% generadas por IA

- Collins English Dictionary lo nombró Palabra del Año 2025

- Hasta Linus Torvalds (sí, el creador de Linux) admitió haber "vibe codeado" una herramienta de Python en enero 2026

Pero la resaca llegó rápido. En septiembre 2025, Fast Company tituló "The vibe coding hangover is upon us", documentando cómo ingenieros senior describían como "development hell" el trabajo con código generado por IA que nadie entendía. Un post en Reddit de un consultor IT con 20 años de experiencia acumuló 749 upvotes preguntando: "¿Ya perdimos la batalla profesional contra el vibe coding?" Contaba cómo lo rechazaron en una entrevista en una fintech global porque "no usaba suficiente IA."

El vibe coding demostró algo poderoso: que cualquier persona podía crear software funcional con IA. Pero también demostró su límite: código que nadie entiende es código que nadie puede mantener.

## Era 2: Context Engineering — "No es lo que le decís, es lo que sabe" (Junio 2025)

Cuatro meses después de crear "vibe coding", el mismo Karpathy introdujo otro concepto. En un tweet de junio 2025, declaró que prefería hablar de context engineering en vez de prompt engineering. No fue un cambio de nombre cosmético — fue un cambio de paradigma.

La diferencia es fundamental:

- Prompt engineering = encontrar las palabras correctas para tu instrucción

- Context engineering = diseñar todo el contexto que el modelo recibe — instrucciones, herramientas, datos externos, historial, memoria

Anthropic (los creadores de Claude) publicaron un artículo técnico que formalizó el concepto: "Context engineering es el arte y la ciencia de curar qué va a entrar en la ventana de contexto limitada, desde un universo constantemente cambiante de información posible."

¿Por qué importa? Porque los LLMs tienen lo que Anthropic llama un "presupuesto de atención". Cada token adicional en el contexto reduce la capacidad del modelo para prestar atención a lo que realmente importa. Un estudio de ChromaDB encontró que 11 de 12 modelos caían por debajo del 50% de rendimiento con contextos de 32K tokens. Microsoft documentó caídas de 90% a 51% de precisión en conversaciones largas.

Más contexto ≠ mejores resultados. Después de cierto punto, el rendimiento se degrada. Esto le dieron el nombre de "context rot" — pudrimiento de contexto.

Los principios clave del buen context engineering son:

1. Mínimos tokens de alta señal — encontrar la menor cantidad de información que maximice el resultado deseado

1. Contexto just-in-time — no precargar todo, sino traer lo necesario durante la ejecución

1. Altitud correcta — instrucciones ni demasiado específicas (frágiles) ni demasiado vagas (inútiles)

1. Diseño de herramientas — pocas herramientas bien definidas le ganan a muchas que se superponen

El context engineering marcó la transición de "hablarle bien a la IA" a "diseñar el sistema de información que rodea a la IA". Ya no eras un DJ de prompts — eras un arquitecto de contexto.

## El interludio: Vibe Engineering — el puente que no cruzó (Octubre 2025)

Mientras el context engineering redefinía cómo alimentar a los modelos, quedaba un hueco terminológico: ¿cómo llamás a la versión profesional y disciplinada de programar con IA? Porque claramente no era vibe coding, pero tampoco existía un nombre.

Simon Willison, una de las voces más respetadas en la comunidad de desarrollo con IA, propuso "vibe engineering" en octubre 2025. La idea era recuperar "vibe" (ya era cultural) y agregarle "engineering" para señalar disciplina. Willison describía un espectro: en un extremo el vibe coding irresponsable; en el otro, ingenieros senior que corrían múltiples agentes de código en paralelo, manteniendo tests, documentación y control de versiones.

El término tenía sentido, pero nunca pegó del todo. Como Addy Osmani (engineering lead en Google) explicaría después: "La palabra 'vibe' carga demasiado equipaje. Señala casualidad. Cuando le decís a un CTO que estás haciendo 'vibe engineering' de su sistema de pagos, le ves la preocupación en la cara."

## Era 3: Agentic Engineering — "La IA ejecuta, vos dirigís" (Febrero 2026)

En febrero de 2026, un año exacto después de crear "vibe coding", Karpathy cerró el ciclo. Propuso un nuevo término: agentic engineering. Y esta vez, la comunidad se alineó casi inmediatamente.

¿Por qué funcionó? Porque describe exactamente lo que está pasando:

- Agentic: estás orquestando agentes de IA — asistentes de código que pueden ejecutar, testear y refinar código — mientras vos actuás como arquitecto, revisor y decisor

- Engineering: aplicás disciplina de ingeniería en todo el proceso — specs, tests, revisión de código, CI/CD

Addy Osmani escribió el artículo definitivo que cristalizó la diferencia: "Vibe coding = YOLO. Agentic engineering = la IA implementa, el humano es dueño de la arquitectura, la calidad y la correctitud."

Simon Willison, que había propuesto "vibe engineering" meses antes, pivoteó inmediatamente: "Parece que el término 'agentic engineering' está ganando. Tengo un nuevo tag para eso y estoy escribiendo un libro de patrones."

El workflow del agentic engineering se ve así:

1. Empezás con un plan — escribís un spec o design doc (a veces con ayuda de IA) antes de tocar una línea de código

1. Dirigís y revisás — le das al agente tareas bien definidas, revisás cada diff con el mismo rigor que un PR humano

1. Testeás sin piedad — la diferencia más grande vs vibe coding. Con tests sólidos, un agente puede iterar en un loop hasta que los tests pasen

1. Sos dueño del codebase — documentación, version control, CI, monitoreo. La IA acelera, pero la responsabilidad es tuya

## La ironía: la IA premia más a los buenos ingenieros

Hay una verdad incómoda que emerge de esta evolución: el agentic engineering beneficia desproporcionadamente a los ingenieros senior. Si tenés fundamentos sólidos — diseño de sistemas, patrones de seguridad, tradeoffs de rendimiento — la IA es un multiplicador de fuerza brutal. Sabés cómo se ve el buen código, así que podés revisar y corregir la salida de la IA de forma eficiente.

Como lo resume Osmani: "El agentic engineering no es más fácil que la ingeniería tradicional — es un tipo diferente de difícil. Estás intercambiando tiempo de tipeo por tiempo de revisión, esfuerzo de implementación por habilidad de orquestación, escribir código por leer y evaluar código."

Y acá es donde las tres eras se conectan. El context engineering te enseñó que la calidad depende de cuán bien diseñás el contexto que recibe el modelo. El agentic engineering te dice que ese contexto lo podés diseñar como un sistema — con specs, herramientas, loops de validación y memoria persistente.

Mejor spec → mejor output de la IA. Mejores tests → más confianza para delegar. Arquitectura más limpia → menos alucinaciones. La IA no causó el problema de la falta de disciplina — expuso un problema que siempre existió.

## Timeline completo: 14 meses que redefinieron la ingeniería de software

📅 Febrero 2025 — Karpathy acuña "vibe coding" en X (Twitter). Describe programar "entregándote a las vibes" sin revisar código.

📅 Marzo 2025 — Merriam-Webster lo lista como "slang & trending". Y Combinator reporta codebases 95% generadas por IA en el 25% de sus startups.

📅 Junio 2025 — Karpathy tuitea que prefiere "context engineering" sobre "prompt engineering". Anthropic publica artículo técnico formalizando el concepto.

📅 Septiembre 2025 — Fast Company declara la "resaca del vibe coding". Ingenieros senior describen "development hell".

📅 Octubre 2025 — Simon Willison propone "vibe engineering" como el extremo disciplinado del espectro. Collins Dictionary nombra "vibe coding" Palabra del Año.

📅 Febrero 2026 — Karpathy propone "agentic engineering". Addy Osmani escribe el artículo definitivo. Willison pivotea al nuevo término. La industria se alinea.

## Hacia dónde apunta todo esto

La progresión no es casual. Cada era resolvió las limitaciones de la anterior:

- Vibe coding democratizó la creación de software, pero generó código que nadie podía mantener

- Context engineering enseñó que la calidad de la IA depende del diseño del contexto, no solo de las palabras del prompt

- Agentic engineering integró todo en un framework profesional donde la IA es el ejecutor y el humano es el director

La tendencia apunta a que el rol del programador muta pero no desaparece. Se parece cada vez menos a "escribir código" y cada vez más a algo entre arquitecto, director técnico y revisor senior. Los que van a crecer en esta nueva era son los que piensen con más claridad sobre qué están construyendo y por qué — y después usen toda herramienta disponible, incluidos agentes de IA, para construirlo bien.

Como escribió Osmani: "El vibe coding nos mostró lo que es posible cuando abandonás todas las convenciones. Ahora es momento de traer la ingeniería de vuelta."

Y si querés ver esto en acción — un sistema multi-agente real, con context engineering aplicado, corriendo 24/7 — es exactamente lo que hacemos en AIPaths con OpenClaw. Cada agente tiene su system prompt diseñado como context engineering, sus herramientas definidas, sus loops de validación. No es vibe coding. Es agentic engineering en la práctica.

## Contenido relacionado

- 📘 [**Agentic Engineering: El Framework Completo**](https://www.aipaths.academy/es/docs/024_agentic-engineering-framework) — Los 4 pilares del agentic engineering y cómo implementarlos en tu workflow

- 📘 [**Context Engineering: La Evolución que Necesitas Entender**](https://www.aipaths.academy/es/docs/012_context-engineering-evolution) — Guía completa sobre cómo diseñar el contexto que reciben los modelos de IA

- 📝 [**Claude Code vs Cursor: ¿Qué Asistente Elegir?**](https://www.aipaths.academy/es/blog/004_claude-code-vs-cursor) — Comparativa práctica de las dos herramientas que dominan el agentic engineering

- 📘 [**Prompt Engineering para Claude: Mejores Prácticas**](https://www.aipaths.academy/es/docs/005_prompt-engineering-best-practices) — La base técnica que necesitás antes de pasar a context y agentic engineering
