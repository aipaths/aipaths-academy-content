---
content_id: "blogs-stanford-reglas-agentes-ia-negocio"
locale: "es"
title: "Stanford ya esta escribiendo reglas para agentes de IA: la leccion para tu negocio"
description: "Stanford CS336 publico reglas para que los agentes de IA ayuden sin resolver tareas. Aprende que significa para gobernar agentes en tu negocio."
author: "AIPaths Academy"
publishedAt: "2026-08-03T12:00:00.000Z"
updatedAt: "2026-08-03T12:00:00.000Z"
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/blogs/033_stanford-reglas-agentes-ia-negocio/hero.png"
tags:
  - ai-agents
  - ai-coding-tools
  - governance
  - business-automation
readingTime: 10
---

Stanford no publico otro paper sobre IA. Publico algo mas practico: un archivo `CLAUDE.md` dentro del repositorio de una tarea de CS336, su curso de *Language Modeling from Scratch*, explicando como deberian comportarse los agentes de IA cuando ayudan a estudiantes.

La regla central es simple: el agente debe actuar como asistente docente, no como generador de soluciones.

Eso parece un detalle academico. No lo es.

Es una senal de hacia donde va el uso real de agentes: menos "prompt libre" y mas reglas operativas pegadas al lugar donde ocurre el trabajo. El agente no solo necesita contexto tecnico. Necesita saber cual es su rol, que puede hacer, que no puede hacer, cuando debe negarse, como debe ayudar y que tipo de resultado seria peligroso aunque parezca util.

Para emprendedores y equipos chicos, esa es la parte importante. Si vas a meter agentes en soporte, ventas, operaciones, contenido, codigo o analisis interno, no alcanza con conectar un modelo a tus herramientas. Necesitas escribir las reglas del trabajo.

## Que hizo Stanford exactamente

El archivo se llama `CLAUDE.md` y vive en el repositorio de `assignment1-basics`, una de las tareas del curso CS336. La pagina oficial de Spring 2026 describe CS336 como un curso para construir modelos de lenguaje desde cero: tokenizacion, arquitectura Transformer, optimizacion, sistemas, escalado, datos y alineamiento.

No es una tarea liviana. El curso aclara que los estudiantes escriben bastante Python y PyTorch con poco andamiaje. Assignment 1 incluye implementar componentes como tokenizer, arquitectura del modelo y optimizer para entrenar un Transformer.

En ese contexto, permitir que un agente escriba codigo completo destruye el objetivo del curso. El estudiante entregaria algo, pero no aprenderia lo que vino a aprender.

Por eso las reglas de Stanford separan dos categorias:

- Lo que el agente puede hacer: explicar conceptos, apuntar a materiales oficiales, revisar codigo escrito por el estudiante, sugerir invariantes, proponer tests, ayudar a entender errores y guiar debugging con preguntas.
- Lo que no puede hacer: escribir Python o pseudocodigo, completar TODOs, editar el repo, correr comandos, implementar componentes centrales, convertir requisitos en codigo funcional o apuntar a implementaciones externas.

La idea no es "no uses IA". Es "usa IA de una manera que preserve el aprendizaje".

Ese matiz importa.

Muchas instituciones reaccionan a la IA como si el unico camino fuera prohibirla o rendirse. Stanford esta haciendo algo mas realista: acepta que los estudiantes van a usar agentes, pero intenta definir el modo correcto de uso.

## La parte que muchos van a leer mal

La lectura superficial seria: "Stanford limita a Claude para evitar trampas".

La lectura util es otra: Stanford esta convirtiendo una politica humana en instrucciones operativas para un agente.

Eso cambia el nivel de la conversacion.

Antes, una politica academica vivia en un PDF, en una pagina del curso o en una explicacion del profesor. Ahora tambien vive en el mismo repositorio donde el agente trabaja. La regla esta cerca del contexto de ejecucion.

Ese es el patron que deberian copiar los negocios.

Si tienes un agente que responde WhatsApp, no deberia descubrir sus limites durante una conversacion con un cliente molesto. Si tienes un agente que analiza pedidos, no deberia improvisar cuando aparece una devolucion rara. Si tienes un agente de codigo, no deberia decidir solo si puede tocar migraciones, editar produccion o saltarse tests.

Los limites deben estar escritos antes.

## Por que esto se volvio noticia

La publicacion se movio fuerte en Hacker News. El hilo sobre las "AI Agent Guidelines for CS336 at Stanford" paso los 460 puntos y mas de 140 comentarios. Otro hilo sobre el curso CS336 tambien tuvo mas de 500 puntos.

El debate fue interesante porque muestra la tension real.

Un grupo dice: la botella ya se abrio, no puedes pedirle a la gente que no use agentes. Otro grupo responde: si el objetivo es aprender, dejar que el agente resuelva todo elimina el proceso que forma criterio. Tambien aparece un punto intermedio: el mundo real va a usar IA, entonces la educacion deberia ensenar como integrarla sin perder entendimiento.

Esa tercera posicion es la mas valiosa para AIPaths.

No se trata de volver a trabajar como antes de ChatGPT. Tampoco se trata de delegar todo a la IA y llamar "productividad" a no entender nada.

La ventaja esta en saber dirigir agentes.

## El error comun: pensar que las instrucciones son solo prompts

Un archivo como `CLAUDE.md` no es un prompt suelto. Es una pieza de gobernanza operativa.

Anthropic documenta `CLAUDE.md` como una forma de darle instrucciones persistentes a Claude Code sobre un proyecto. GitHub tambien documenta instrucciones de repositorio para Copilot, incluyendo `copilot-instructions.md`, archivos por ruta y `AGENTS.md`. Es decir: el ecosistema ya se esta moviendo hacia instrucciones versionadas, cerca del codigo y del flujo de trabajo.

Para un negocio, esto tiene una implicacion practica:

> Cada agente importante deberia tener un contrato de comportamiento escrito.

No un prompt bonito. Un contrato operativo.

Ese contrato deberia responder:

- Cual es el rol del agente.
- Que resultado busca.
- Que tareas puede hacer.
- Que tareas no puede hacer.
- Que datos puede usar.
- Que acciones requieren aprobacion humana.
- Que debe hacer cuando no sabe.
- Como debe verificar antes de responder o ejecutar.
- Como debe escalar casos sensibles.

Stanford hizo esto para preservar aprendizaje. Tu negocio lo necesita para preservar confianza, dinero y control.

## La leccion para emprendedores: no construyas agentes genericos

El peor agente de negocio es el que intenta ser "asistente general".

Al principio impresiona. Contesta de todo. Parece flexible. Pero cuando lo conectas a clientes, datos o herramientas, esa flexibilidad se vuelve riesgo.

Un agente de soporte no deberia inventar politicas de reembolso. Un agente de ventas no deberia prometer descuentos que no existen. Un agente de operaciones no deberia modificar pedidos sin revisar permisos. Un agente de desarrollo no deberia cambiar archivos criticos sin tests.

El valor no esta en que el modelo "pueda" hacerlo. El valor esta en que el sistema sepa cuando no debe hacerlo.

Stanford lo expresa con claridad: aunque un agente puede escribir la solucion, no debe hacerlo porque contradice el objetivo del entorno.

En un negocio pasa igual.

Un agente podria cerrar una venta prometiendo entrega inmediata. Pero si tu equipo no puede cumplir, el agente destruye confianza. Un agente podria responder una consulta legal con seguridad. Pero si se equivoca, el costo no es solo una mala respuesta. Un agente podria automatizar una decision financiera. Pero si no entiende excepciones, puedes perder plata.

La pregunta no es "que puede hacer la IA?".

La pregunta es: **que deberia poder hacer este agente dentro de este proceso?**

## Como convertir esta idea en reglas para tu negocio

Si estas construyendo un agente, usa este marco simple.

### 1. Define el rol en una frase

Stanford no dice "eres un agente inteligente". Dice, en esencia: eres un asistente docente, no un generador de soluciones.

Esa distincion evita muchos errores.

Ejemplos para negocio:

- "Eres un asistente de soporte nivel 1, no un representante autorizado para cambiar contratos."
- "Eres un analista de ventas que prepara informacion, no un vendedor que aprueba descuentos."
- "Eres un agente de operaciones que detecta excepciones, no un sistema que modifica pedidos sin aprobacion."
- "Eres un asistente de codigo que propone cambios y verifica, no un bot que toca produccion."

Una buena regla de rol incluye lo que el agente es y lo que no es.

### 2. Escribe la lista de cosas permitidas

No basta con decir "ayuda al usuario".

Stanford lista comportamientos permitidos: explicar, apuntar a material oficial, revisar codigo ya escrito, sugerir tests, hacer preguntas, ayudar a interpretar errores.

En soporte, la lista podria ser:

- Responder preguntas frecuentes con base en la documentacion aprobada.
- Pedir datos faltantes antes de clasificar el caso.
- Sugerir pasos de diagnostico.
- Resumir la conversacion para un humano.
- Crear un ticket con prioridad sugerida.

Mientras mas claro sea el "si", menos tendra que improvisar el modelo.

### 3. Escribe la lista de cosas prohibidas

Esta es la parte que muchos prompts evitan porque suena negativa. Pero es la parte que protege el sistema.

Stanford prohibe escribir codigo, completar TODOs, correr comandos y resolver componentes centrales. No porque el agente no pueda, sino porque no debe.

En un negocio, prohibiciones utiles podrian ser:

- No prometer reembolsos sin politica confirmada.
- No modificar precios.
- No enviar datos personales por canales no aprobados.
- No diagnosticar temas medicos, legales o fiscales como respuesta final.
- No ejecutar acciones irreversibles sin confirmacion.
- No inventar informacion si la fuente interna no responde.

Un agente sin prohibiciones claras se convierte en un empleado sin onboarding.

### 4. Cambia "resolver" por "guiar" cuando el objetivo sea aprendizaje o criterio

La parte mas interesante del archivo de Stanford es que obliga al agente a usar preguntas, tests e invariantes en vez de entregar respuestas finales.

Eso tambien aplica fuera de la universidad.

Si estas entrenando a un equipo, un agente que da la respuesta exacta puede ser peor que uno que guia. Si quieres que una persona aprenda a revisar metricas, vender mejor o debuggear una automatizacion, el agente no deberia saltar directo al resultado. Deberia ayudar a construir criterio.

Hay tareas donde quieres ejecucion. Hay tareas donde quieres aprendizaje.

Confundir esas dos categorias es caro.

### 5. Define escalamiento humano

El archivo de Stanford cierra con una regla sensata: cuando haya duda, enviar al estudiante al staff del curso u office hours.

Tu negocio necesita el equivalente.

Ejemplos:

- Si el cliente esta enojado y pide cancelacion, escalar.
- Si hay riesgo legal o fiscal, escalar.
- Si el pedido supera cierto monto, escalar.
- Si faltan datos y la accion seria irreversible, escalar.
- Si el agente detecta contradiccion entre fuentes internas, escalar.

Escalar no es fallar. Escalar es parte del diseno.

## La plantilla minima para un agente serio

Puedes copiar esta estructura para cualquier agente interno:

```md
# Rol
Eres [rol especifico]. Tu objetivo es [resultado]. No eres [limite critico].

# Puedes hacer
- [accion permitida 1]
- [accion permitida 2]
- [accion permitida 3]

# No puedes hacer
- [accion prohibida 1]
- [accion prohibida 2]
- [accion prohibida 3]

# Como ayudar
1. Pregunta por datos faltantes.
2. Usa solo fuentes aprobadas.
3. Sugiere el siguiente paso verificable.
4. Explica la razon cuando rechaces una accion.
5. Escala cuando el caso sea sensible o ambiguo.

# Verificacion
Antes de responder o ejecutar, revisa:
- fuente usada,
- confianza,
- impacto,
- si requiere aprobacion humana,
- siguiente paso reversible.
```

No es sofisticado. Pero ya te pone por delante de la mayoria de agentes improvisados.

## Lo que Stanford entendio antes que muchas empresas

La IA no elimina la necesidad de proceso. La hace mas importante.

Cuando una persona trabaja sin proceso, el dano es limitado por su velocidad. Cuando un agente trabaja sin proceso, el dano puede escalar con cada conversacion, cada ticket, cada commit o cada automatizacion.

Por eso el futuro no es "agentes sin supervision". El futuro es agentes con contexto, limites, permisos, memoria, evaluacion y escalamiento.

La parte ironica es que una universidad lo esta mostrando con un archivo sencillo de instrucciones.

No hace falta empezar con una plataforma gigante de gobernanza. Puedes empezar escribiendo las reglas correctas para un solo agente en un solo flujo.

Un agente de IA no deberia ser "ChatGPT conectado a tu negocio".

Deberia ser una pieza del sistema operativo de tu negocio: con rol claro, permisos definidos, criterios de exito y salida humana cuando el caso se vuelve sensible.

## Conclusion

El archivo de Stanford no importa solo porque sea Stanford. Importa porque muestra un cambio de mentalidad.

Los agentes ya no viven solo en chats. Viven en repositorios, workflows, CRMs, bandejas de entrada, canales de soporte y sistemas internos. Y cuando viven ahi, necesitan reglas locales.

Para AIPaths, la leccion es directa:

> No construyas agentes mas "inteligentes" antes de construir agentes mas gobernados.

La ventaja no sera tener el modelo mas nuevo. Sera tener agentes que saben que hacer, que no hacer, cuando preguntar, cuando verificar y cuando llamar a un humano.

Eso es lo que convierte una demo de IA en un sistema de negocio.

## Fuentes consultadas

- Stanford CS336 Assignment 1 `CLAUDE.md`: https://github.com/stanford-cs336/assignment1-basics/blob/main/CLAUDE.md
- Stanford CS336 official course page: https://cs336.stanford.edu/
- Hacker News: "AI Agent Guidelines for CS336 at Stanford": https://news.ycombinator.com/item?id=48359232
- Hacker News: "CS336: Language Modeling from Scratch": https://news.ycombinator.com/item?id=48357075
- Claude Code docs: "How Claude remembers your project": https://code.claude.com/docs/en/memory
- GitHub Docs: "Adding repository custom instructions for GitHub Copilot": https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot
