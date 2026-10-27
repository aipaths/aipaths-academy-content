---
content_id: "docs-claude-code-cheat-sheet-6-meses-uso-diario"
locale: "es"
title: "Claude Code cheat sheet after 6 months of daily use"
description: "Guía práctica de Claude Code tras meses de uso diario: workflow, contexto, skills, hooks, seguridad y prompts para trabajar más rápido sin perder control."
author: "AIPaths Academy"
publishedAt: "2026-05-01T19:03:59.322Z"
updatedAt: "2026-10-27T12:00:00.000Z"
tags:
  - ai-agents
  - claude-code
  - agentic-engineering
  - workflows
  - security
  - productivity
---

Claude Code no se vuelve realmente útil cuando aprendes más comandos. Se vuelve útil cuando dejas de tratarlo como un chatbot y empiezas a operarlo como un sistema de trabajo: contexto limpio, pasos pequeños, verificación constante y reglas persistentes.

Esa es la lectura más importante del hilo viral de Reddit “Claude Code cheat sheet after 6 months of daily use” y del artículo extendido de Marmelab, un equipo que dice usar Claude Code a diario en proyectos de clientes y en frameworks propios como react-admin y Atomic CRM. El post funcionó porque no habla de promesas futuristas: habla de fricción real, costos, contexto, seguridad y hábitos que hacen que el agente deje de comportarse como “un intern entusiasta” y empiece a parecerse más a un pair programmer senior.

Esta guía traduce esa experiencia a un flujo práctico para founders, devs y equipos pequeños que quieren usar Claude Code para avanzar más rápido sin perder control del código. No necesitas usar todo desde el primer día. La meta es entender por qué ciertas prácticas funcionan y cómo aplicarlas sin convertir tu setup en una feria de herramientas.

## La idea central: no le pidas “hacer”, pídele trabajar contigo

El error de principiante es abrir Claude Code y pedirle una tarea grande de una sola vez:

```text
Implementa el dashboard completo con autenticación, permisos, tests y responsive.
```

Ese prompt parece eficiente porque delega mucho. En la práctica, suele crear un problema: Claude tiene que entender el proyecto, decidir arquitectura, tocar muchos archivos, inventar criterios de aceptación y verificar su propio trabajo casi al mismo tiempo. Si algo sale mal, no sabes dónde nació el error. ¿Entendió mal el requerimiento? ¿Eligió mal el enfoque? ¿Cambió demasiado? ¿No corrió la prueba correcta?

Es más útil pensarlo como una persona muy rápida que necesita dirección. Si a alguien nuevo en tu equipo le dices “haz esta feature completa”, probablemente avance, pero también va a rellenar muchos huecos con suposiciones. Si en cambio le dices “hoy investiga cómo funciona esta parte; mañana implementamos el primer cambio”, el trabajo se vuelve más seguro. Claude Code funciona igual: primero contexto, después plan, después implementación pequeña, después verificación.

Esa separación es lo que convierte una sesión caótica en una sesión auditable. No estás frenando al agente; estás dándole carriles.

## Un flujo simple para cualquier tarea mediana

Para una tarea pequeña, puedes pedir el cambio directo. Para una tarea mediana o grande, conviene usar cuatro momentos: explorar, planear, implementar y verificar.

Primero, pídele que explore sin editar nada. Esto es clave porque Claude Code puede empezar a modificar archivos demasiado pronto si el pedido suena accionable. Un buen primer mensaje sería:

```text
Lee @src/billing y @src/auth. Necesito entender cómo se calculan los límites de plan y dónde se validan permisos. No edites nada todavía. Resume el flujo actual y detecta riesgos.
```

La frase “no edites nada todavía” no es decoración. Le marca que la primera salida debe ser entendimiento, no código. También te da una oportunidad de corregirlo antes de que el error se transforme en diff.

Después viene el plan. No le pidas simplemente “continúa”; pídele que divida el trabajo en pasos revisables:

```text
Propón un plan para añadir límites por workspace. Divide el trabajo en pasos pequeños, con archivos afectados, pruebas necesarias y riesgos.
```

El valor del plan no es que Claude “piense más”. El valor es que tú puedes revisar sus supuestos. Si propone tocar una capa que no corresponde, lo corriges ahí. Corregir un plan cuesta minutos; corregir una implementación equivocada puede costar horas.

Cuando el plan se ve bien, no le des permiso para implementar todo. Pídele solo el primer paso:

```text
Implementa solo el paso 1 del plan. No avances al paso 2 todavía. Al terminar, ejecuta el test mínimo relevante y muéstrame qué cambió.
```

Este patrón reduce el tamaño de cada cambio y mantiene tu revisión dentro de un rango humano. Claude puede escribir mucho código rápido, pero tu cuello de botella sigue siendo entender si ese código está bien. Si permites diffs gigantes, la productividad se convierte en deuda de revisión.

Finalmente, verifica con comandos concretos. “Corre tests” es demasiado genérico. Mejor:

```text
Ejecuta !npm run typecheck y !npm test -- billing-limit.test.ts. Si falla, explica la causa raíz antes de tocar más código.
```

La diferencia es importante: no solo quieres saber si algo falla; quieres evitar que Claude empiece a parchear a ciegas. Cuando una prueba falla, primero causa raíz, después cambio.

## Cómo manejar el contexto sin ahogar al agente

El contexto es la memoria de trabajo de la sesión: instrucciones, archivos leídos, errores, outputs de terminal, planes, correcciones y decisiones. Mucha gente cree que más contexto siempre mejora el resultado. En Claude Code, muchas veces pasa lo contrario: demasiado ruido hace que el agente se vuelva menos preciso.

La regla práctica es darle contexto relevante, no contexto infinito. Si ya sabes qué archivo importa, apúntalo explícitamente con `@`:

```text
Revisa @src/pricing/calculatePrice.ts y dime qué casos borde no están cubiertos.
```

Esto suele ser mejor que decir “busca dónde se calcula el precio”. La búsqueda puede ser útil, pero también consume contexto y puede llevar al agente a archivos secundarios. Cuando tú ya tienes una pista, úsala.

Lo mismo aplica a `CLAUDE.md`. Ese archivo no debería ser una enciclopedia del proyecto. Debería contener lo que Claude no puede inferir leyendo el repo: comandos reales de build y test, convenciones internas, reglas de negocio no obvias, errores recurrentes y límites de seguridad.

Una buena forma de decidir qué entra en `CLAUDE.md` es hacer esta pregunta: “¿esta línea evitaría un error real?”. Si la respuesta es no, probablemente sobra. Instrucciones genéricas como “escribe código limpio” o “sé cuidadoso” ocupan espacio pero no mejoran mucho el comportamiento.

Si trabajas con varios agentes, conviene separar lo portable de lo específico. `AGENTS.md` puede guardar reglas comunes para Claude, Codex, Copilot u otros entornos. `CLAUDE.md` puede importar ese archivo y agregar detalles propios de Claude Code:

```markdown
@AGENTS.md

## Claude Code
- Usa Plan Mode para cambios grandes bajo src/billing.
- Ejecuta npm run typecheck antes de cerrar tareas medianas.
```

Así evitas duplicar reglas y mantienes una sola fuente de verdad. Si estás diseñando un sistema de trabajo con varios agentes, este enfoque conecta bien con `/docs/024_agentic-engineering-framework`.

## Plan Mode: cuándo usarlo y cuándo no

Plan Mode es útil cuando el costo de equivocarse es alto. Si vas a tocar autenticación, billing, permisos, migraciones, infraestructura o una parte que no entiendes bien, no conviene empezar por código. Conviene pedir un plan y revisarlo.

En cambio, si el cambio es pequeño —por ejemplo, renombrar un texto, ajustar un estilo o corregir un test aislado— Plan Mode puede ser burocracia innecesaria. La habilidad está en elegir el nivel de control según el riesgo.

Una referencia simple: si el cambio afecta más de una capa del sistema, usa plan. Si requiere entender reglas de negocio, usa plan. Si involucra datos, permisos o dinero, usa plan. Si solo es una edición local y reversible, puedes ir directo.

Lo importante es que Plan Mode no es una ceremonia. Es una forma de poner el pensamiento antes del diff.

## Skills y hooks explicados para principiantes

Uno de los puntos más valiosos de la conversación alrededor del hilo fue la diferencia entre skills y hooks. Al principio pueden sonar como “configuración avanzada”, pero la idea es simple.

Una skill le enseña a Claude cómo hacer una tarea repetida. Por ejemplo: revisar un PR, escribir tests de integración, documentar una decisión técnica o hacer una auditoría de seguridad ligera. La skill no es magia; es una instrucción empaquetada que Claude carga cuando la descripción coincide con la tarea.

Por eso la descripción de una skill importa tanto. Si dices “ayuda con código”, es demasiado vaga. Si dices “usar cuando haya que revisar un PR y dejar comentarios priorizados por severidad”, Claude tiene una señal mucho más clara.

Un hook, en cambio, no intenta enseñar. Intenta forzar o bloquear algo de forma determinística. Si nunca quieres que el agente edite `.env`, eso no debería depender de que “recuerde” una regla. Debería ser un hook. Si quieres correr un formatter después de cada edición, hook. Si quieres pedir confirmación antes de un comando peligroso, hook.

La fórmula útil es esta:

```text
Skill = cómo hacer X bien.
Hook = nunca hagas Y sin pasar este control.
```

Para empezar, no necesitas diez skills ni diez hooks. Empieza con una skill para tu workflow más repetido y uno o dos hooks para los errores más caros. Por ejemplo, una skill de revisión de PR y un hook que proteja secretos o archivos sensibles. Cuando el sistema te ahorre un error real, recién ahí expandes.

Si quieres profundizar en skills, puedes complementar esta guía con `/docs/011_claude-skills-guide`.

## Seguridad: no copies configuraciones sin auditarlas

Claude Code puede leer archivos, ejecutar comandos y modificar un proyecto real. Esa es la razón por la que ahorra tanto tiempo. También es la razón por la que puede hacer daño si le das permisos amplios sin pensar.

El riesgo no es solo que Claude se equivoque. También puedes introducir riesgo copiando skills, hooks, comandos o MCP servers desde internet. Una skill maliciosa podría intentar exfiltrar secretos. Un hook mal escrito podría ejecutar comandos indeseados. Un servidor MCP con demasiados permisos podría exponer datos internos.

La regla de principiante es sencilla: si algo puede ejecutar código, leer secretos o conectarse a herramientas externas, revísalo antes de instalarlo. No importa si viene de Reddit, GitHub o un blog popular.

También conviene separar permisos por proyecto. No es lo mismo usar Claude Code en un repo experimental que en un repo con credenciales, datos de clientes o infraestructura productiva. Dale al agente el acceso mínimo necesario para la tarea actual.

Puedes pedirle a Claude una revisión de seguridad, pero no la trates como garantía absoluta:

```text
Haz una revisión de seguridad enfocada en secretos, permisos excesivos, inyección, comandos peligrosos y exposición de datos. No cambies código todavía: primero lista hallazgos y severidad.
```

Para un marco más amplio sobre agentes con herramientas y permisos, la guía `/docs/023_seguridad-agentes-ia-guia-practica` es un buen complemento.

## Herramientas útiles sin caer en el “setup infinito”

Marmelab menciona herramientas como Context7 para documentación versionada, GitHub CLI para PRs e issues, Snyk MCP para vulnerabilidades, rtk para reducir tokens y repositorios de skills como Superpowers o Tessl. Todas pueden servir, pero no todas deberían estar en tu setup desde el día uno.

Cada herramienta añade superficie de seguridad, ruido de contexto, mantenimiento y posibles errores de integración. Un setup pequeño y confiable suele ganar a un setup enorme que nadie entiende.

Para la mayoría de equipos pequeños, el orden razonable es este: primero documenta los comandos reales de test, typecheck y lint; después limpia `AGENTS.md` y `CLAUDE.md`; luego crea una o dos skills para tareas repetidas; después agrega hooks para reglas críticas. Recién cuando sientas una necesidad clara, suma MCPs o herramientas externas.

Si tu problema ya es costo de tokens, no lo arregles instalando más cosas. Primero reduce ruido: archivos de contexto más cortos, prompts más específicos, menos búsquedas innecesarias y sesiones más pequeñas. Si necesitas profundizar en ese tema, revisa `/docs/027_optimizar-costos-agente-ia`.

## Qué hacer cuando Claude se equivoca

Cuando Claude toma un camino equivocado, mucha gente intenta corregirlo con mensajes cada vez más largos. A veces funciona. Muchas veces solo agrega más ruido al contexto.

Si el error es reciente, usa `/rewind` para volver al último punto sano. Si la conversación ya está muy contaminada, usa `/clear` y empieza de nuevo con un resumen limpio. Esto se siente drástico, pero suele ser más barato que discutir con un contexto lleno de suposiciones malas.

También es importante cerrar el loop. Si Claude introdujo un bug y tú lo corriges manualmente, resolviste el síntoma pero perdiste la mejora del sistema. Mejor pídele que investigue por qué falló:

```text
Antes de corregir el bug, explica por qué ocurrió. Luego propone qué regla debería agregarse a AGENTS.md, CLAUDE.md, una skill o un ADR para evitar que se repita.
```

La idea no es que Claude “aprenda” mágicamente para siempre. La idea es convertir el error en documentación que la próxima sesión o el próximo agente sí pueda leer.

## Una configuración inicial razonable

Si estás empezando con Claude Code en un proyecto real, no necesitas una arquitectura perfecta. Necesitas una base mínima que evite errores obvios.

Crea un `AGENTS.md` con la estructura del proyecto, comandos de instalación, build, test y typecheck, convenciones importantes, reglas de negocio no obvias y archivos que no deberían tocarse sin permiso. Después crea un `CLAUDE.md` corto que importe `AGENTS.md` y agregue detalles específicos de Claude Code.

Luego define tu primer workflow. Por ejemplo: para cambios grandes, Claude primero explora sin editar; después propone plan; después implementa un paso; después corre una prueba concreta. Es mejor tener un flujo simple que realmente uses que una configuración enorme que nadie mantiene.

Finalmente, agrega protección donde más duele. Si el mayor riesgo son secretos, protege `.env` y credenciales. Si el mayor riesgo son migraciones, exige revisión antes de tocar base de datos. Si el mayor riesgo es código sin tests, documenta el test mínimo y haz que Claude lo ejecute antes de cerrar.

## Prompts listos para copiar

Estos prompts son puntos de partida. Úsalos como estructura, no como religión.

Para empezar una tarea compleja:

```text
Explora el área relevante del código sin editar nada. Identifica archivos clave, dependencias, riesgos y pruebas necesarias. Luego propón un plan dividido en pasos pequeños y revisables.
```

Para limitar alcance:

```text
Implementa solo el paso 1. No avances al siguiente paso. Al terminar, muestra qué cambió, qué prueba corriste y qué queda pendiente.
```

Para limpiar sobreingeniería:

```text
Revisa este diff y elimina complejidad innecesaria: abstracciones prematuras, generics que no aportan, manejo de errores especulativo o código que no responde al requerimiento actual.
```

Para convertir un error en aprendizaje:

```text
Antes de corregir el bug, explica por qué ocurrió. Luego propone qué regla debería agregarse a AGENTS.md, CLAUDE.md, una skill o un ADR para evitar que se repita.
```

Para seguridad:

```text
Haz una revisión de seguridad enfocada en secretos, permisos excesivos, inyección, comandos peligrosos y exposición de datos. No cambies código todavía: primero lista hallazgos y severidad.
```

## Comandos de terminal que cambian el flujo diario

Las secciones anteriores son el método. Estos comandos son la mecánica que lo hace rápido cuando vives en la terminal. No hace falta memorizarlos todos: cada uno resuelve un tipo concreto de fricción.

**`!` para trabajar con evidencia real.** Un comando precedido por `!` se ejecuta desde la sesión y su salida queda en el contexto, así que puedes preguntar sobre el resultado sin copiar nada:

```bash
! npm test -- pricing.test.ts
! git diff --stat
! rg "createCheckoutSession" src
```

En vez de pedirle a Claude que adivine por qué falla algo, le das el output. Dos reglas: filtra lo que imprime mucho (`! npm test 2>&1 | tail -n 80`, `! git diff -- src/billing | sed -n '1,220p'`) y nunca metas secretos, `.env` ni dumps gigantes en la conversación. Para procesos largos (dev server, suites grandes), `Ctrl+B` los manda al background con un ID propio y salida recuperable.

**`/statusline` para ver lo que sueles olvidar.** Una barra persistente con modelo, directorio, branch de Git, porcentaje de contexto y costo de la sesión evita errores tontos: trabajar en la rama equivocada, no notar que el contexto está casi lleno, usar un modelo caro para una tarea simple.

```text
/statusline show model name, current directory, git branch, context percentage and session cost
```

**`/usage` y `/context` antes de culpar al modelo.** Cuando una sesión empieza a responder peor, casi siempre el contexto está lleno de ruido. `/context` muestra qué lo domina (outputs de terminal, archivos irrelevantes, exploración vieja). A partir de ahí, la regla simple:

- Misma tarea, conversación demasiado larga → `/compact conserva objetivo, decisiones, archivos modificados, pruebas y pendientes`.
- Tema nuevo → `/clear`.
- Camino equivocado reciente → `/rewind`.

**`/add-dir` para multi-repo, con límites.** Si el bug cruza frontend y API, `/add-dir ../api` (o `claude --add-dir ../api ../workers` al arrancar) evita abrir dos conversaciones. Pero cada directorio extra amplía lo que Claude puede explorar y editar, y la configuración `.claude/` de ese repo no se descubre sola. Úsalo con una intención concreta ("traza el flujo entre @src/components/CheckoutForm.tsx y el endpoint de checkout en ../api, primero sin editar"), nunca como `/add-dir ..` más "arregla lo que encuentres".

**`/btw` para preguntas laterales.** Una pregunta rápida que ve el contexto actual pero no entra al historial ni tiene acceso a herramientas: perfecta para "¿qué hacía este helper?" sin ensuciar la sesión principal. Si necesitas investigar algo nuevo, abre una rama de conversación o una sesión aparte.

**`/diff`, `/code-review` y `/simplify` para cerrar.** El trabajo no termina cuando "parece funcionar". Un cierre razonable:

```text
/diff
Resume el diff en 5 bullets: objetivo, archivos tocados, riesgos, pruebas corridas y pendientes.
/code-review
/simplify
! npm run typecheck
! npm test -- checkout.test.ts
```

Separa las tres cosas: `/simplify` elimina complejidad innecesaria, `/code-review` busca bugs reales, y los tests validan comportamiento. Un cambio puede quedar más elegante y seguir roto. Si algo falla, causa raíz antes de editar.

## Conclusión: más estructura, menos fe

Claude Code puede acelerar muchísimo el desarrollo, pero no porque “entienda tu proyecto” de forma mágica. Acelera cuando le das un entorno donde puede operar con buenos límites: contexto corto y relevante, archivos apuntados explícitamente, planes antes de diffs grandes, pasos pequeños, pruebas concretas, skills para procedimientos repetidos, hooks para reglas obligatorias y revisión humana en las decisiones importantes.

La señal del hilo de Reddit no es “usa estos trucos”. La señal es más profunda: los equipos que sacan valor real de agentes de código están construyendo una capa de operación alrededor del agente.

Claude Code no reemplaza al desarrollador. Amplifica el criterio que ya existe. Si tu criterio está documentado, probado y protegido por hooks, el agente trabaja mucho mejor. Si tu criterio vive solo en tu cabeza, Claude va a improvisar.

## Fuentes revisadas

- Reddit: “Claude Code cheat sheet after 6 months of daily use”, r/ClaudeAI.
- Marmelab: “Claude Code Tips I Wish I’d Had From Day One”.
- Anthropic Claude Code Docs: Best Practices, Memory / CLAUDE.md, Skills, Hooks y Commands.
- Discusión comunitaria sobre skills, hooks, seguridad y límites de automatización en comentarios del hilo original.
