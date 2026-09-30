---
content_id: "blogs-anthropic-project-deal-comercio-agentes-ia"
locale: "es"
title: "Anthropic Probó un Marketplace Donde Agentes de IA Compran y Venden por Humanos"
description: "Anthropic creó Project Deal: un mercado interno donde agentes de Claude negociaron bienes reales con dinero real. Así fue el experimento, qué midieron y qué riesgos abre."
author: "AIPaths Academy"
publishedAt: "2026-04-26T00:00:00.000Z"
updatedAt: "2026-04-26T00:00:00.000Z"
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/blogs/028_anthropic-project-deal-comercio-agentes-ia/hero.png"
tags:
  - ai-agents
  - claude
  - anthropic
  - ecommerce
  - news
readingTime: 7
---

Anthropic publicó una prueba concreta sobre una pregunta que hasta hace poco sonaba futurista: qué pasa cuando agentes de IA empiezan a comprar y vender entre sí en nombre de humanos.

El experimento se llamó **Project Deal**. Durante una semana, Anthropic montó un marketplace interno para empleados de su oficina en San Francisco. La dinámica era parecida a Craigslist, pero con una diferencia central: las personas no negociaban directamente. Cada empleado era representado por un agente de Claude.

Los bienes eran reales. El dinero también. Los participantes podían vender objetos personales, comprar cosas de otros empleados y cerrar acuerdos que después se ejecutarían físicamente. Según Anthropic, el resultado fue un mercado con **69 participantes**, **más de 500 ítems listados**, **186 acuerdos cerrados** y **más de 4.000 dólares en valor transaccionado**.

Lo relevante no es solo que el sistema funcionó. También apareció una diferencia importante entre modelos: los agentes basados en Claude Opus 4.5 consiguieron mejores resultados económicos que los basados en Claude Haiku 4.5. Pero los humanos representados por modelos más débiles no parecieron notar claramente esa desventaja.

Project Deal no prueba que el comercio vaya a volverse completamente autónomo mañana. Sí funciona como una prueba de laboratorio bastante realista: agentes representando preferencias humanas, negociando en lenguaje natural y cerrando acuerdos con impacto económico.

## Contexto: de Project Vend a Project Deal

Project Deal no aparece de la nada. Es parte de una línea de experimentos de Anthropic sobre agentes actuando en entornos económicos.

Antes estuvo **Project Vend**, donde Anthropic y Andon Labs pusieron a Claude a operar una pequeña tienda automatizada dentro de una oficina. El agente tenía que manejar inventario, precios, proveedores, clientes y márgenes. La primera versión mostró muchas limitaciones: decisiones comerciales malas, oportunidades perdidas y comportamientos inesperados. La segunda fase mejoró con mejores modelos, más herramientas y más estructura operativa.

Project Deal cambia el escenario. Ya no se trata de un solo agente intentando operar una tienda. Se trata de muchos agentes interactuando entre sí, representando a distintas personas, negociando precios y tomando decisiones económicas en paralelo.

Ese cambio importa porque se parece más a un mercado: compradores, vendedores, información incompleta, preferencias distintas, negociación y resultados comparables.

## Pregunta del experimento

Anthropic quería observar tres cosas:

1. Si los agentes podían representar preferencias humanas dentro de un marketplace real.
2. Si podían negociar y cerrar acuerdos sin intervención humana durante el proceso.
3. Si agentes basados en modelos más potentes obtenían ventajas frente a agentes basados en modelos más pequeños.

La hipótesis implícita era simple: si en el futuro los agentes participan en transacciones reales, la calidad del agente puede afectar directamente el resultado económico de la persona representada.

## Diseño de la prueba

Anthropic reclutó a **69 empleados** como participantes voluntarios. Cada uno recibió un presupuesto de **100 dólares**, pagado al final mediante gift card y ajustado según lo que el agente hubiera comprado o vendido.

Antes de abrir el mercado, Claude entrevistó a cada participante. El objetivo era capturar información práctica:

- qué objetos quería vender,
- a qué precio esperaba venderlos,
- qué cosas le interesaba comprar,
- cuánto estaba dispuesto a pagar,
- qué instrucciones quería darle a su agente,
- y qué estilo de negociación prefería.

Con esas respuestas, Anthropic generó prompts personalizados para cada representante de IA.

Después montó el mercado en Slack. Los agentes podían publicar objetos, hacer ofertas, responder contraofertas y cerrar acuerdos. Una vez iniciado el experimento, los humanos no intervenían. Los agentes no pedían aprobación paso a paso ni consultaban durante una negociación. Actuaban con la información inicial y dentro de los límites del experimento.

## Cuatro mercados en paralelo

Anthropic no corrió una sola versión del marketplace. Corrió **cuatro versiones independientes**.

Una era la versión “real”: los acuerdos cerrados ahí se ejecutarían al final, con intercambio físico de bienes y ajuste de pagos. Las otras tres servían para generar datos comparativos.

En dos versiones, todos los agentes usaban **Claude Opus 4.5**, el modelo frontier de Anthropic en ese momento. En las otras dos, algunos participantes eran representados por Opus y otros por **Claude Haiku 4.5**, un modelo más pequeño.

Dos runs fueron visibles en Slack, pero los participantes no sabían cuál era el mercado real ni qué diferencia había entre cada run hasta el final. Después del experimento, Anthropic les mostró los resultados de las cuatro versiones y les pidió evaluar la satisfacción, la justicia percibida y la calidad de los acuerdos.

## Resultado principal: el mercado funcionó

En la versión real, los agentes cerraron **186 deals** sobre más de **500 ítems listados**. El valor total superó los **4.000 dólares**.

Los objetos no eran tokens ni productos inventados para una simulación. Eran pertenencias reales de empleados: desde una tabla de snowboard hasta una bolsa con pelotas de ping-pong. Al terminar, las personas llevaron los bienes físicos y ejecutaron los acuerdos.

Para Anthropic, ese punto es una diferencia importante frente a otros estudios sobre negociación entre agentes, que suelen usar bienes sintéticos o bases de datos simuladas. Project Deal mantuvo un entorno controlado, pero con personas reales, objetos reales y consecuencias económicas reales.

La evaluación subjetiva también fue razonable. En las encuestas posteriores, los participantes tendieron a considerar los acuerdos como justos. En una escala de 1 a 7, donde los extremos indicaban injusticia hacia una de las partes, las respuestas se concentraron cerca de 4, el punto medio.

## Resultado económico: Opus negoció mejor que Haiku

La parte más importante del experimento apareció al comparar modelos.

En los runs mixtos, los usuarios representados por Opus completaron, en promedio, alrededor de **dos acuerdos más** que los representados por Haiku. Anthropic también observó que Opus tendía a conseguir mejores precios.

Cuando el mismo ítem era vendido por Opus en un run y por Haiku en otro, Opus conseguía **3,64 dólares más en promedio**. En una comparación más amplia de ítems vendidos varias veces, Opus como vendedor obtenía **2,68 dólares más** por el mismo objeto, y Opus como comprador pagaba **2,45 dólares menos**.

El tamaño absoluto puede parecer pequeño, pero el precio medio de los ítems era de unos **20 dólares** y la mediana era de **12 dólares**. En ese contexto, una diferencia de dos o tres dólares por transacción no es marginal.

Anthropic cita dos ejemplos claros:

- un rubí de laboratorio se vendió por **65 dólares** cuando lo representó Opus y por **35 dólares** cuando lo representó Haiku;
- una bicicleta rota se vendió por **65 dólares** con Opus y por **38 dólares** con Haiku.

No todos los resultados fueron estadísticamente fuertes en todas las métricas. Por ejemplo, los ítems ofrecidos por Opus parecían tener más probabilidad de venderse, pero Anthropic aclara que ese efecto específico no fue estadísticamente significativo. Aun así, la dirección general fue clara: el modelo más potente obtuvo mejores resultados objetivos.

## Resultado subjetivo: la desventaja no siempre se percibió

La observación más incómoda no fue que Opus negociara mejor. Eso era esperable.

Lo llamativo fue que los usuarios representados por Haiku no parecieron detectar claramente que habían recibido peores resultados.

Anthropic pidió a los participantes comparar los bundles de compras y ventas generados en los distintos runs. Entre quienes fueron representados por Haiku en un run mixto y por Opus en otro, 17 rankearon mejor su run con Opus, pero 11 prefirieron el run donde habían sido representados por Haiku.

También midieron satisfacción y percepción de justicia. En esas métricas, la diferencia entre Opus y Haiku fue pequeña o no estadísticamente significativa. La justicia percibida fue prácticamente idéntica: **4,05** para deals hechos por agentes Opus y **4,06** para deals hechos por agentes Haiku.

La lectura de Anthropic es que pueden aparecer **agent quality gaps**: brechas de calidad entre agentes que generan mejores o peores resultados económicos, pero que no son evidentes para las personas afectadas.

En un mercado humano, una persona puede comparar precios, hablar con otros compradores o sospechar que negoció mal. En un mercado mediado por agentes, parte de esa comparación puede quedar oculta. El usuario ve el resultado final, pero no necesariamente ve las ofertas no exploradas, las contraofertas no hechas o las alternativas descartadas.

## Instrucciones humanas: menos impacto del esperado

Otra observación fue que el estilo de negociación pedido por los humanos no cambió tanto los resultados como podía suponerse.

Algunos participantes pidieron agentes amables y cooperativos. Otros pidieron tácticas más agresivas, como empezar con ofertas bajas. Anthropic no encontró un efecto estadísticamente significativo de esas instrucciones sobre la probabilidad general de venta.

En algunos casos, los vendedores más agresivos obtuvieron precios más altos, pero Anthropic indica que buena parte de esa diferencia venía de que esos participantes ya habían declarado precios iniciales más altos durante la entrevista.

Esto sugiere que, al menos en este piloto, el modelo y el contexto operativo pesaron más que una instrucción superficial de “negociá fuerte” o “sé amable”.

## Limitaciones de la prueba

Project Deal sigue siendo un piloto, no una demostración definitiva.

La muestra fue pequeña y autoseleccionada: empleados de Anthropic, probablemente más dispuestos que el promedio a experimentar con IA. El mercado ocurrió dentro de una empresa, con cierto nivel de confianza entre participantes. Los objetos eran de bajo valor relativo. El entorno estaba controlado. Y la duración fue corta: una semana.

También hay una diferencia importante entre vender objetos personales en Slack y negociar compras B2B, contratos, seguros, viajes, inventario o servicios financieros. En mercados más grandes, aparecen más incentivos para manipular, ocultar información o explotar debilidades del sistema.

Aun así, la prueba alcanza para mostrar que la mecánica básica ya funciona: agentes pueden recopilar preferencias, representar a personas, negociar en lenguaje natural y producir acuerdos ejecutables.

## Riesgos que abre este tipo de comercio

El primer riesgo es la desigualdad por calidad de agente. Si mejores modelos obtienen mejores condiciones, las personas o empresas con acceso a agentes superiores podrían capturar ventajas económicas invisibles.

El segundo riesgo es la opacidad. Un agente puede cerrar un acuerdo que parece razonable, pero el usuario no sabe si había una alternativa mejor. La auditoría del proceso se vuelve tan importante como el resultado final.

El tercer riesgo es la manipulación entre agentes. En mercados donde los agentes leen descripciones, mensajes, contratos o páginas web, cualquier texto externo puede intentar influir en su comportamiento. Lo que hoy llamamos prompt injection podría convertirse en una forma de manipulación comercial.

El cuarto riesgo es la delegación mal definida. Si un agente puede gastar dinero, aceptar términos o comprometer inventario sin controles claros, un error deja de ser una respuesta mala en un chat y pasa a tener costo económico.

## Qué podría venir después

Project Deal apunta a una dirección probable: mercados donde al menos una parte de la búsqueda, comparación, negociación y cierre de acuerdos sea realizada por agentes.

No necesariamente será un mundo donde los humanos desaparezcan de la transacción. Es más probable que aparezcan capas intermedias: agentes que preparan opciones, negocian dentro de límites, piden aprobación en momentos críticos y dejan logs auditables.

Para que eso escale, la infraestructura todavía tiene que madurar. Harán falta permisos granulares, límites de gasto, trazabilidad, separación entre instrucciones internas y contenido externo, mecanismos de apelación, evaluación de calidad del agente y estándares para comparar resultados.

La señal de Project Deal es simple: el comercio agent-to-agent ya no es solo una idea teórica. Anthropic lo probó con bienes reales, dinero real y humanos reales. Funcionó lo suficiente como para tomarlo en serio, y mostró suficientes diferencias entre modelos como para no tratarlo como una simple automatización neutral.

## Fuentes

- Anthropic — [Project Deal: our Claude-run marketplace experiment](https://www.anthropic.com/features/project-deal)
- TechCrunch — [Anthropic created a test marketplace for agent-on-agent commerce](https://techcrunch.com/2026/04/25/anthropic-created-a-test-marketplace-for-agent-on-agent-commerce/)
- Anthropic — [Project Vend: Can Claude run a small shop?](https://www.anthropic.com/research/project-vend-1)
- Anthropic — [Project Vend phase two](https://www.anthropic.com/research/project-vend-2)
- arXiv — [The Automated but Risky Game: Modeling and Benchmarking Agent-to-Agent Negotiations and Transactions in Consumer Markets](https://arxiv.org/abs/2506.00073)

## Contenido relacionado

- 📘 [**Agentes de IA en 2026: Guía Completa**](https://www.aipaths.academy/es/docs/022_agentes-ia-guia-completa-2026) — contexto sobre agentes autónomos, herramientas y memoria.
- 📘 [**Seguridad para Agentes de IA**](https://www.aipaths.academy/es/docs/023_seguridad-agentes-ia-guia-practica) — permisos, prompt injection y ejecución segura.
- 📘 [**Agentic Engineering: El Framework Completo**](https://www.aipaths.academy/es/docs/024_agentic-engineering-framework) — patrones para construir agentes con herramientas reales.
