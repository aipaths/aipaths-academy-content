---
content_id: "docs-claude-code-terminal-workflow"
locale: "es"
title: "Cómo usar Claude Code desde la terminal: workflow para avanzar más rápido sin perder contexto"
description: "Guía práctica para usuarios de terminal que quieren usar Claude Code con menos fricción: comandos shell, archivos con @, statusline, contexto, multi-repo, /btw y revisión antes de cerrar cambios."
published: false
author: "AIPaths Academy"
publishedAt: "2026-06-04T14:30:02.838Z"
updatedAt: "2026-06-04T14:30:02.838Z"
tags:
  - claude-code
  - ai-coding
  - developer-tools
  - workflows
  - productivity
---
Claude Code no es solo un chatbot que puede tocar archivos. En la terminal se convierte en algo más útil: un espacio de trabajo donde puedes mezclar conversación, archivos, comandos, errores, branch de Git, tests, contexto y revisión sin estar copiando y pegando entre cinco ventanas.

Esa es la idea importante detrás del post de Marmelab que disparó esta guía. El autor contaba que, después de más de seis meses usando Claude Code desde Linux, descubrió comandos que parecían pequeños pero cambiaban mucho el flujo diario: `!` para ejecutar shell commands, `@` para mencionar archivos, `/statusline` para ver información persistente, `/add-dir` para trabajar con varios repositorios y `/btw` para preguntas laterales.

La lista es útil, pero el valor real no está en memorizar comandos. El valor está en diseñar una forma de trabajar donde Claude Code tenga el contexto correcto, vea la evidencia real de tu proyecto y no convierta cada tarea en una conversación larga, cara y difícil de revisar.

Esta guía está escrita para founders técnicos, developers freelance, equipos chicos y builders que ya viven en la terminal. La promesa no es que Claude Code programe solo. La promesa es más concreta: reducir fricción, bajar ruido de contexto y cerrar cambios con más control.

## La idea central: la terminal es el contexto vivo

Cuando usas un chat normal para programar, tienes que llevarle información al modelo: copiar errores, pegar archivos, resumir estructura, explicar qué comando falló y contar qué cambió. Cada paso manual introduce fricción y, peor, contexto incompleto.

En Claude Code desde terminal, el agente está más cerca del trabajo real. Puede ver archivos, ejecutar comandos, revisar diffs, leer errores y ayudarte a decidir el siguiente paso. Pero eso no significa que debas dejarlo explorar todo sin dirección.

El buen uso está en el equilibrio:

- Le das archivos concretos cuando sabes dónde mirar.
- Le das comandos reproducibles cuando hay que validar.
- Le das contexto multi-repo solo cuando hace falta.
- Limpias la sesión cuando el tema cambia.
- Revisas el diff antes de cerrar.

Claude Code mejora cuando tu flujo le da señales claras. Si la sesión se llena de búsquedas largas, logs enormes, cambios de tema y outputs irrelevantes, el agente pierde precisión. La terminal ayuda, pero no arregla una mala práctica de contexto.

## 1. Ejecuta comandos con `!` para trabajar con evidencia real

El comando más simple y más útil para usuarios de terminal es el prefijo `!`.

En Claude Code puedes escribir:

```bash
! npm test
! git status
! npm run typecheck
```

Eso ejecuta el comando directamente desde la sesión. El resultado queda en el contexto de la conversación, así que puedes hacer una pregunta de seguimiento sin copiar nada:

```text
Analiza el fallo del test y explícame la causa raíz antes de proponer cambios.
```

La diferencia parece pequeña, pero cambia el flujo. En vez de pedirle a Claude que “adivine” por qué algo falla, le das el output real. En vez de pegar un stack trace manualmente, lo generas donde corresponde. En vez de decir “creo que falla el build”, corres el build.

Usa `!` para comandos rápidos y verificables:

```bash
! git diff --stat
! npm run lint
! npm test -- pricing.test.ts
! rg "createCheckoutSession" src
```

Para procesos largos, Claude Code permite mandar tareas al background con `Ctrl+B`. Esto sirve para dev servers, suites de tests grandes, builds o procesos que no quieres bloquear. La documentación oficial aclara que los background tasks quedan corriendo de forma asíncrona, con un ID propio y salida recuperable.

La regla práctica: usa `!` para traer evidencia al contexto, no para llenar la sesión de ruido. Si un comando imprime miles de líneas, filtra primero:

```bash
! npm test -- --runInBand 2>&1 | tail -n 80
! git diff -- src/billing | sed -n '1,220p'
```

No metas secretos, `.env`, dumps gigantes ni logs con datos sensibles en el contexto. Claude puede ayudarte a interpretar outputs, pero tú sigues siendo responsable de qué información entra en la conversación.

## 2. Usa `@` para apuntar archivos exactos

El segundo hábito que más ahorra tiempo es mencionar archivos con `@`.

En vez de decir:

```text
Busca dónde se calcula el precio y revisa si hay bugs.
```

puedes decir:

```text
Revisa @src/pricing/calculatePrice.ts y dime qué casos borde no están cubiertos.
```

Según la documentación de Claude Code, `@` permite incluir archivos o directorios rápidamente. Si mencionas un archivo, su contenido entra en la conversación. Si mencionas un directorio, Claude ve un listado con información de archivos.

Esto importa porque “explora el repo” suele ser una instrucción demasiado amplia. Claude puede hacerlo, pero consume contexto y aumenta la probabilidad de irse por ramas secundarias. Si ya sabes qué archivo importa, díselo.

Buenos usos de `@`:

```text
Explica el flujo de autenticación en @src/auth/session.ts.
```

```text
Compara @src/components/CheckoutForm.tsx con @src/server/checkout.ts y dime si la validación está duplicada o inconsistente.
```

```text
Revisa @docs/billing.md y @src/billing/limits.ts. Quiero saber si la documentación coincide con el comportamiento real.
```

También puedes usar `@` para reducir ambigüedad cuando pides cambios:

```text
Modifica solo @src/pricing/calculatePrice.ts para cubrir planes anuales. No toques checkout ni billing. Al terminar, corre el test mínimo relevante.
```

Esa frase hace tres cosas: define archivo, limita alcance y exige validación.

Para proyectos medianos, este patrón es más importante que cualquier prompt sofisticado. Menos “mira todo” y más “mira esto primero”.

## 3. Configura `/statusline` para ver lo que normalmente olvidas

Una buena sesión de terminal necesita señales visibles. ¿En qué branch estás? ¿Qué modelo estás usando? ¿Cuánto contexto queda? ¿Cuál es el directorio activo? ¿Cuánto costó la sesión?

Claude Code tiene `/statusline` para configurar una barra persistente al fondo de la terminal. La documentación oficial explica que esa barra puede mostrar uso de contexto, costos, estado de Git y otros datos, generados por un script que recibe información de la sesión.

Una configuración inicial útil sería:

```text
/statusline show model name, current directory, git branch, context percentage and session cost
```

No necesitas hacerla perfecta. Necesitas que te evite errores tontos:

- Trabajar en la rama equivocada.
- No notar que el contexto está casi lleno.
- Usar un modelo caro para una tarea simple.
- Seguir una sesión larga sin ver cuánto se acumuló.

Para equipos pequeños, esta visibilidad vale mucho. Un founder técnico puede estar alternando entre frontend, backend, scripts de automatización y contenido. Una statusline simple reduce confusión.

Si ya tienes una statusline propia en tu shell, Claude Code puede ayudarte a adaptarla. Pero no conviertas esto en un proyecto de personalización infinito. Empieza con branch, directorio, modelo, contexto y costo. Si después necesitas más, lo agregas.

## 4. Mira `/usage` y `/context` antes de culpar al modelo

Cuando una sesión de Claude Code empieza a responder peor, mucha gente piensa: “el modelo se volvió tonto”. A veces el problema es más simple: el contexto está lleno de ruido.

Claude Code incluye comandos para mirar eso:

```text
/usage
/context
```

`/usage` muestra estadísticas de uso, costos y actividad. `/context` visualiza cómo se está usando la ventana de contexto y puede mostrar sugerencias de optimización. Esto es especialmente útil después de sesiones largas de debug, migraciones grandes o investigación en muchos archivos.

Si ves que el contexto está dominado por outputs de terminal, archivos irrelevantes o exploración vieja, no sigas apilando instrucciones. Limpia.

Usa `/compact` cuando la tarea sigue siendo la misma, pero quieres resumir la conversación:

```text
/compact conserva solo el objetivo, decisiones tomadas, archivos modificados, pruebas ejecutadas y pendientes
```

Usa `/clear` cuando cambias de tema:

```text
/clear checkout-fix-done
```

La diferencia importa. `/compact` sirve para continuar con menos peso. `/clear` sirve para empezar una conversación nueva con contexto vacío, manteniendo memoria del proyecto.

La regla simple:

- Misma tarea, conversación demasiado larga: `/compact`.
- Tema nuevo: `/clear`.
- Camino equivocado reciente: `/rewind`.

Este hábito es uno de los más rentables para bajar costo y mejorar precisión. Si usas Claude Code todos los días, la higiene de contexto vale más que aprender veinte comandos raros.

## 5. Usa `/add-dir` para multi-repo, pero con límites

Muchos productos reales no viven en un solo repo. Puedes tener:

- `web-app/`
- `api/`
- `workers/`
- `infra/`
- `automation-scripts/`

Si abres Claude Code desde `web-app/`, por defecto el trabajo queda centrado ahí. Para darle acceso a otro directorio durante la sesión, puedes usar:

```text
/add-dir ../api
```

También existe la opción de arrancar Claude con directorios adicionales:

```bash
claude --add-dir ../api ../automation-scripts
```

Esto sirve cuando el cambio cruza límites reales. Por ejemplo: una pantalla de checkout en React llama a un endpoint en el backend, y el bug está en cómo se transforma el payload. En ese caso, tener frontend y API en la misma sesión evita abrir dos conversaciones separadas.

Pero `/add-dir` no debería ser tu respuesta por defecto. Cada directorio adicional aumenta el espacio que Claude puede explorar y editar. También aumenta riesgo de contexto ruidoso y permisos demasiado amplios.

Además, la documentación oficial señala un detalle importante: al agregar directorios, das acceso de archivos, pero no debes asumir que toda la configuración `.claude/` de esos directorios se descubre automáticamente. Si un repo adicional tiene reglas propias, verifica cómo se cargan.

Buen uso:

```text
/add-dir ../api

Necesito trazar el flujo entre @src/components/CheckoutForm.tsx y el endpoint de checkout en ../api. Primero explora sin editar y dime qué archivos importan.
```

Mal uso:

```text
/add-dir ..

Revisa todo mi workspace y arregla lo que encuentres.
```

La primera instrucción es acotada. La segunda abre la puerta a un caos difícil de revisar.

Si trabajas multi-repo, usa `/add-dir` con una intención concreta: trazar un flujo, sincronizar contrato entre cliente y servidor, revisar documentación cruzada o modificar dos lados de una feature pequeña.

## 6. Usa `/btw` para preguntas laterales sin ensuciar la sesión

En una sesión larga, aparecen preguntas pequeñas:

- ¿Qué hacía este helper?
- ¿Por qué elegimos esta librería?
- ¿Qué archivo era el de configuración?
- ¿Ese error venía de frontend o backend?

Antes, esas preguntas terminaban dentro de la conversación principal. Eso agregaba ruido. Claude Code tiene `/btw` para preguntas laterales:

```text
/btw qué hace esta función en @src/utils/pricing.ts?
```

La documentación actual dice que `/btw` sirve para una pregunta rápida sin agregarla al historial de conversación. La pregunta ve el contexto actual, pero no tiene acceso a herramientas: no puede leer archivos nuevos ni ejecutar comandos. Responde con lo que ya está en contexto.

Eso lo hace perfecto para interrupciones pequeñas. Si necesitas investigar algo nuevo, no uses `/btw`; abre una rama de conversación o una sesión aparte.

Regla práctica:

- Pregunta corta sobre algo que Claude ya vio: `/btw`.
- Discusión larga o investigación nueva: `/branch` o nueva sesión.

Esto mantiene la sesión principal enfocada. Y para trabajo con agentes, foco no es un detalle estético: es calidad.

## 7. Revisa el diff antes de cerrar: `/diff`, `/code-review` y `/simplify`

Claude puede avanzar rápido, pero el trabajo no está terminado cuando “parece funcionar”. Está terminado cuando puedes revisar qué cambió, validar que no rompió otra cosa y decidir si la solución es más simple de lo necesario.

Un cierre razonable para una tarea sería:

```text
/diff
```

Luego:

```text
Resume el diff en 5 bullets: objetivo, archivos tocados, riesgos, pruebas corridas y qué queda pendiente.
```

Si el cambio tiene riesgo real, usa revisión:

```text
/code-review
```

Para limpieza de complejidad, Claude Code incluye `/simplify`. Según la documentación actual, en versiones recientes `/simplify` se enfoca en oportunidades de limpieza y no en encontrar bugs de correctness. Para bugs, usa `/code-review`.

Esto es importante porque simplificar no es lo mismo que verificar. Un cambio puede quedar más elegante y seguir teniendo un bug. Por eso conviene separar:

- `/simplify` para eliminar complejidad innecesaria.
- `/code-review` para buscar bugs y problemas reales.
- Tests o comandos concretos para validar comportamiento.

Un buen cierre sería:

```text
/simplify
```

```bash
! npm run typecheck
! npm test -- checkout.test.ts
```

```text
Si todo pasa, dame un resumen final con cambios, riesgos y próximos pasos. Si algo falla, explica causa raíz antes de editar.
```

Ese último detalle evita el patrón peligroso de “falló algo, parcheo algo”. Primero diagnóstico, después cambio.

## 8. Usa `/rewind` cuando el camino se torció

No todas las sesiones se salvan con más prompts. A veces Claude entendió mal el objetivo, tocó archivos de más o siguió una arquitectura equivocada.

Cuando el error es reciente, `/rewind` es mejor que discutir con una conversación contaminada. La documentación de comandos describe `/rewind` como una forma de volver código y conversación a un checkpoint, o resumir parte de la conversación.

Úsalo cuando:

- Claude empezó a resolver el problema equivocado.
- El diff creció demasiado.
- Una refactorización rompió más de lo que arregló.
- Te diste cuenta de que el supuesto inicial estaba mal.

Después de volver, no repitas el mismo prompt. Escribe uno más acotado:

```text
Volvamos al objetivo mínimo. No quiero refactor general. Solo corregir el cálculo de impuestos en @src/pricing/taxes.ts y agregar un test para planes anuales.
```

Este patrón enseña una lección importante: no tienes que salvar cada conversación. A veces lo más profesional es volver a un punto sano y reducir alcance.

## Un workflow completo para copiar

Si quieres aplicar todo esto en una tarea real, usa este flujo.

Primero, contexto:

```text
Necesito corregir un bug en checkout. Primero explora sin editar. Revisa @src/components/CheckoutForm.tsx y @src/server/checkout.ts. Identifica el flujo, posible causa raíz, archivos que podrían cambiar y prueba mínima.
```

Luego, evidencia:

```bash
! npm test -- checkout.test.ts
! npm run typecheck
```

Después, plan:

```text
Propón un plan de máximo 3 pasos. Cada paso debe incluir archivos afectados, validación y riesgo. No implementes todavía.
```

Implementación pequeña:

```text
Implementa solo el paso 1. No avances al paso 2. Mantén el cambio mínimo y explica qué modificaste.
```

Validación:

```bash
! npm test -- checkout.test.ts
! npm run typecheck
```

Cierre:

```text
/diff
```

```text
Resume el cambio, riesgos restantes y si hace falta revisar algo manualmente.
```

Si el cambio quedó ruidoso:

```text
/simplify
```

Si la conversación quedó pesada pero la tarea sigue:

```text
/compact conserva objetivo, decisiones, archivos modificados, pruebas y pendientes
```

Si cambias de tarea:

```text
/clear checkout-fix-done
```

Este flujo no es complicado. Lo que hace es obligarte a separar etapas: entender, validar, planear, implementar, revisar y limpiar.

## Errores comunes al usar Claude Code en terminal

El primer error es pedir cambios demasiado grandes. Si no podrías revisar el diff con calma, probablemente la tarea está mal dividida.

El segundo error es dejar que Claude explore sin límites cuando tú ya sabes por dónde empezar. Usa `@` para apuntar archivos. Pídele búsqueda solo cuando realmente no sabes dónde está el problema.

El tercer error es llenar la conversación con outputs gigantes. Si necesitas logs, filtra. Si necesitas diffs, limita rutas. Si necesitas entender un error, trae las últimas líneas relevantes.

El cuarto error es agregar directorios de más. `/add-dir` es potente, pero no convierte tu workspace completo en un buen contexto. Dale acceso al repo necesario, no a todo tu disco.

El quinto error es no cerrar con revisión. Una sesión que termina con “listo” pero sin diff, tests o resumen de riesgos no está lista para producción.

## Qué cambiaría para un emprendedor técnico

Para un founder o builder que usa Claude Code como palanca de producto, la terminal no es solo un lugar para programar. Es una consola de operación.

Puedes corregir bugs, preparar scripts, actualizar docs, revisar automatizaciones, inspeccionar logs, escribir tests y conectar frontend con backend sin salir del flujo. Pero para que eso sea ventaja y no caos, necesitas disciplina mínima:

- Tareas pequeñas.
- Archivos explícitos.
- Comandos reproducibles.
- Contexto visible.
- Sesiones limpias.
- Revisión antes de cerrar.

Esto conecta directamente con la idea de ingeniería agéntica principiada: no se trata de tener más prompts, sino de crear un sistema donde el agente trabaje con contexto, límites y validación. Si quieres profundizar en ese marco, revisa [la guía de ingeniería agéntica](https://www.aipaths.academy/es/docs/024_agentic-engineering-framework).

Si el problema principal es costo o contexto, complementa con [la guía para optimizar costos de agentes de IA](https://www.aipaths.academy/es/docs/027_optimizar-costos-agente-ia).

Y si vas a darle permisos más amplios a agentes de código, conviene leer [la guía de seguridad para agentes de IA](https://www.aipaths.academy/es/docs/023_seguridad-agentes-ia-guia-practica).

## Conclusión: menos fricción, más control

Los comandos de Claude Code para terminal no son trucos aislados. Son piezas de un workflow.

`!` trae evidencia real. `@` reduce ambigüedad. `/statusline` hace visible el estado de la sesión. `/usage` y `/context` te muestran cuándo el problema es ruido. `/add-dir` permite trabajo multi-repo con límites. `/btw` evita contaminar la conversación principal. `/diff`, `/code-review` y `/simplify` ayudan a cerrar cambios con más rigor. `/rewind`, `/compact` y `/clear` mantienen el contexto sano.

La ventaja no viene de saber todos los comandos. Viene de usarlos para una práctica concreta: darle a Claude Code menos ruido, más evidencia y mejores límites.

Si ya vives en la terminal, ese cambio se nota rápido. Claude deja de ser una ventana extra y empieza a funcionar como parte del entorno donde realmente construyes.

## Fuentes revisadas

- Reddit, “Claude Code tips for terminal users (from a senior dev)”: https://www.reddit.com/r/ClaudeAI/comments/1tbwwel/claude_code_tips_for_terminal_users_from_a_senior/
- Marmelab, “Getting More Out of Claude Code in the Terminal”: https://marmelab.com/blog/2026/05/12/claude-code-hidden-commands.html
- Anthropic, “Commands”, Claude Code docs: https://code.claude.com/docs/en/commands
- Anthropic, “Interactive mode”, Claude Code docs: https://code.claude.com/docs/en/interactive-mode
- Anthropic, “Customize your status line”, Claude Code docs: https://code.claude.com/docs/en/statusline
- Anthropic, “CLI reference”, Claude Code docs: https://code.claude.com/docs/en/cli-reference
- Anthropic Support, “Claude Code power user tips”: https://support.claude.com/en/articles/14554000-claude-code-power-user-tips
