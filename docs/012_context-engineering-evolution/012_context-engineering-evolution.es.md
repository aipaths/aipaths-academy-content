---
# Unique semantic identifier (links EN/ES versions)
content_id: "docs-context-engineering-evolution"

# Locale (MUST match file extension: .en.md or .es.md)
locale: "es"

# SEO & Display
title: "Context Engineering: La Evolución que Necesitas Entender"
description: "Descubre por qué context engineering está reemplazando a prompt engineering como la habilidad clave para el desarrollo asistido por IA en 2025."

# Author
author: "AIPaths Academy"

# Publication dates (ISO 8601 format)
publishedAt: "2025-12-09T10:00:00Z"
updatedAt: "2025-12-09T10:00:00Z"

# Cover image
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/docs/012_context-engineering-evolution/hero.jpg"

# Tags (canonical lowercase English IDs)
tags: ["intermediate", "ai-agents", "guide", "prompt-engineering", "productivity", "developer-tools"]
---

# De Prompt Engineering a Context Engineering

Si has estado usando asistentes de código con IA y notaste que tus prompts cuidadosamente elaborados siguen produciendo resultados inconsistentes, estás experimentando los límites del prompt engineering. La industria ha cambiado silenciosamente hacia algo más fundamental: **context engineering**.

Esta guía explica qué cambió, por qué importa, y cómo pensar diferente sobre las interacciones con IA.

## El Cambio: Qué Pasó en 2025

Durante años, el consejo era simple: escribe mejores prompts. Sé específico. Usa ejemplos. Estructura tus solicitudes claramente. Esto funcionaba—hasta que dejó de hacerlo.

El punto de quiebre llegó con la IA agéntica. Cuando los sistemas de IA comenzaron a ejecutar tareas de múltiples pasos de forma autónoma, la calidad del prompt dejó de ser el cuello de botella. La nueva restricción: **Qué información tiene el modelo disponible en cada paso.**

Andrej Karpathy capturó este cambio con una analogía útil: si el LLM es un CPU, entonces la ventana de contexto es la RAM. Prompt engineering es como optimizar una sola instrucción. Context engineering es como diseñar cómo un sistema operativo gestiona la memoria.

> "Context engineering es el delicado arte y ciencia de llenar la ventana de contexto con exactamente la información correcta para el siguiente paso." — Andrej Karpathy

## Prompt Engineering vs Context Engineering

| Aspecto | Prompt Engineering | Context Engineering |
|---------|-------------------|---------------------|
| **Enfoque** | Lo que dices | Todo lo que el modelo ve |
| **Alcance** | Interacción única | Flujo de información del sistema |
| **Problema** | Elaborar las palabras correctas | Curar la información correcta |
| **Metáfora** | Escribir un buen email | Diseñar un sistema de archivos |
| **Modo de fallo** | Instrucciones poco claras | Contexto incorrecto o faltante |

Prompt engineering pregunta: "¿Cómo formulo esta solicitud?"

Context engineering pregunta: "¿Qué información necesita el modelo para tener éxito—y cómo la hago llegar?"

## Los Cuatro Pilares del Contexto

Context engineering gestiona cuatro elementos interconectados:

### 1. Instrucciones

Tus system prompts, definiciones de tareas y reglas. Pero a diferencia del prompt engineering, context engineering reconoce que las instrucciones compiten por espacio con todo lo demás. El objetivo no son instrucciones exhaustivas—son instrucciones *suficientes* que dejen espacio para la información que importa.

**Insight clave**: Los modelos capaces necesitan menos instrucciones. Empieza con lo mínimo, agrega solo cuando observes fallos.

### 2. Memoria

Dos tipos importan:

- **Corto plazo (sesión)**: Lo que pasó antes en esta conversación. Incluye tus mensajes, respuestas de la IA, y salidas de herramientas.
- **Largo plazo (entre sesiones)**: Conocimiento persistente sobre tu proyecto, preferencias, y decisiones pasadas.

El desafío: la memoria se acumula. Una ventana de 200K tokens se llena más rápido de lo que esperarías cuando un agente ejecuta docenas de llamadas a herramientas.

### 3. Conocimiento

Información externa recuperada durante la ejecución: documentación, archivos de código, resultados de búsqueda, registros de base de datos. Aquí es donde encaja RAG (Retrieval-Augmented Generation).

**Insight clave**: La recuperación just-in-time supera a la pre-carga. No llenes el contexto por adelantado—deja que el modelo obtenga lo que necesita cuando lo necesita.

### 4. Herramientas

Cada herramienta que el modelo puede llamar tiene una descripción que consume tokens. Las salidas de herramientas—especialmente código, logs, o respuestas de API—pueden ser masivas.

**Insight clave**: Las descripciones de herramientas que se superponen confunden a los modelos sobre cuál usar. Mantén las herramientas distintas y autocontenidas.

## Técnicas Principales

Context engineering usa cuatro técnicas principales para gestionar estos pilares:

### Escribir: Externalizar Contexto

Cuando la información podría necesitarse después pero no necesita estar en contexto *ahora*, escríbela en algún lugar externo.

- Scratchpads para razonamiento intermedio
- Archivos de notas para decisiones arquitectónicas
- Checkpoints para tareas de larga duración

Por esto existen los archivos CLAUDE.md, .cursorrules, y similares archivos de contexto de proyecto—externalizan contexto persistente para que no infle cada conversación.

### Seleccionar: Recuperar Estratégicamente

No todo pertenece al contexto. Selecciona lo que es relevante para el paso actual.

- Usa embeddings para consultar memoria
- Aplica RAG para recuperación de conocimiento
- Obtén descripciones de herramientas bajo demanda en lugar de cargar todas las herramientas por adelantado

### Comprimir: Reducir Carga de Tokens

Cuando el contexto crece demasiado:

- **Resumir**: Condensa turnos de conversación anteriores en puntos clave
- **Recortar**: Elimina mensajes antiguos que ya no son relevantes
- **Compactar**: Remueve salidas de herramientas redundantes, quédate solo con resultados

### Aislar: Particionar Contexto

Para tareas complejas, divide el contexto en límites:

- **Sub-agentes**: Agentes especializados manejan subtareas enfocadas, devuelven resúmenes
- **Sandboxes**: Entornos separados para diferentes preocupaciones
- **Esquemas de estado**: Campos estructurados que organizan información por tipo

## Context Engineering en la Práctica

Así se aplican estos conceptos a herramientas de código con IA:

### Archivos de Contexto de Proyecto

La mayoría de las herramientas de código con IA soportan archivos de contexto persistente (CLAUDE.md, .cursorrules, etc.). Esto es context engineering en acción—proporcionan información que cada interacción necesita sin que tengas que repetirla.

**Mejores prácticas:**

- Mantén los archivos raíz en 100-200 líneas máximo
- Usa archivos específicos por subdirectorio para reglas locales
- Prefiere punteros sobre fragmentos de código (los fragmentos se desactualizan)
- No dupliques lo que los linters ya aplican

### Gestión de Sesión

El contexto se acumula durante una sesión. Sesiones largas significan que el modelo trabaja con contexto cada vez más obsoleto y ruidoso.

**Mejores prácticas:**

- Limpia el contexto entre tareas distintas
- Inicia conversaciones nuevas para trabajo no relacionado
- Resume discusiones complejas antes de continuar

### Prompts Estructurados

Cuando escribes instrucciones, la estructura importa. Context engineering toma prestado del diseño de sistemas:

- Organiza en secciones distintas (restricciones, ejemplos, criterios de éxito)
- Usa formato consistente (tags XML, encabezados Markdown)
- Pon la información crítica al principio—los modelos prestan más atención al inicio

### Diseño de Herramientas

Si estás construyendo herramientas personalizadas o servidores MCP:

- Escribe descripciones que no se superpongan con otras herramientas
- Devuelve respuestas mínimas y eficientes en tokens
- Incluye solo la información que el modelo necesita para proceder

## El Principio del Contexto Mínimo Viable

La filosofía central de context engineering es contraintuitiva: **menos es más**.

Cada token en contexto compite por la atención del modelo. La información irrelevante no solo desperdicia espacio—degrada activamente el rendimiento. El objetivo no es contexto máximo, es contexto *óptimo*.

Pregunta: "¿Cuál es el contexto más pequeño de alta señal que maximiza la probabilidad del resultado deseado?"

Esto significa:

- No pre-cargues todo "por si acaso"
- Poda agresivamente conforme el contexto crece
- Confía en que el modelo solicitará la información que necesita
- Mide el éxito por la calidad del output, no por el tamaño del contexto

## Errores Comunes

**Llenar el contexto con casos límite**: Agregar reglas exhaustivas para escenarios raros diluye la atención en casos comunes.

**Ignorar límites de contexto en flujos extendidos**: Agentes que ejecutan más de 100 pasos alcanzarán límites de contexto. Planifica para la compactación.

**Descripciones de herramientas superpuestas**: Cuando las herramientas suenan similares, los modelos luchan por elegir la correcta.

**Codificar lógica frágil**: Lógica condicional compleja en prompts se rompe fácilmente. Deja que el modelo razone en su lugar.

**Nunca limpiar el contexto**: El historial acumulado de tareas no relacionadas crea ruido.

## Conclusiones Clave

1. **Context engineering es pensamiento de sistemas** para interacciones con IA, no solo mejores palabras

2. **Cuatro pilares**: Instrucciones, Memoria, Conocimiento y Herramientas—todos compiten por la misma ventana limitada

3. **Cuatro técnicas**: Escribir (externalizar), Seleccionar (recuperar), Comprimir (reducir), Aislar (particionar)

4. **Contexto mínimo viable**: El objetivo es el contexto más pequeño de alta señal, no máxima información

5. **Los archivos de contexto de proyecto** son la herramienta principal de context engineering para asistentes de código con IA

6. **La higiene de sesión importa**: Limpia el contexto entre tareas, inicia de nuevo para trabajo no relacionado

El cambio de prompt engineering a context engineering refleja una verdad más profunda: conforme los sistemas de IA se vuelven más capaces y autónomos, el cuello de botella se mueve de "cómo pregunto" a "qué sabe". Domina esto, y tus herramientas de IA se vuelven dramáticamente más efectivas.

## Recursos Adicionales

- [Anthropic: Effective Context Engineering for AI Agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- [LangChain: Context Engineering for Agents](https://blog.langchain.com/context-engineering-for-agents/)
- [Gartner: Context Engineering](https://www.gartner.com/en/articles/context-engineering)

## Contenido relacionado

- 📘 [**Prompt Engineering para Claude: Mejores Prácticas**](https://www.aipaths.academy/es/docs/005_prompt-engineering-best-practices) — Donde empezó todo: la disciplina base sobre la que se construye context engineering
- 📘 [**Ventana de Contexto de Claude: Guía Completa**](https://www.aipaths.academy/es/docs/002_claude-context-window) — El recurso técnico que context engineering busca optimizar
- 📘 [**Claude Skills: Personalizar Flujos de Trabajo**](https://www.aipaths.academy/es/docs/011_claude-skills-guide) — Una implementación práctica de context engineering con Skills
- 📘 [**Agentic Engineering: El Framework Completo**](https://www.aipaths.academy/es/docs/024_agentic-engineering-framework) — La evolución que vino después: de context engineering a agentic engineering
