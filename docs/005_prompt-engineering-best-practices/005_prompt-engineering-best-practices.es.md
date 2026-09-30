---
# Unique semantic identifier (links EN/ES versions)
content_id: "docs-prompt-engineering-best-practices"

# Locale
locale: "es"

# SEO & Display
title: "Prompt Engineering para Claude: Mejores Prácticas"
description: "Domina el arte del prompt engineering con Claude. Aprende técnicas probadas para obtener respuestas mejores, más consistentes y confiables de la IA."

# Author
author: "AIPaths Academy"

# Publication dates (ISO 8601 format)
publishedAt: "2025-11-02T00:00:00Z"
updatedAt: "2025-11-02T00:00:00Z"

# Cover image
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/docs/default-hero.jpg"

# Tags (canonical lowercase English IDs)
# IMPORTANT: Both EN/ES versions MUST have IDENTICAL tags
tags:
  - claude
  - prompt-engineering
  - best-practices
  - beginner
---

Obtener excelentes resultados de Claude no es magia—es una habilidad. La diferencia entre una respuesta mediocre y una excepcional a menudo se reduce a cómo haces la pregunta. Esto es prompt engineering: la práctica de crear entradas que guían a los modelos de IA para producir exactamente lo que necesitas.

En esta guía completa, aprenderás los principios fundamentales, técnicas probadas y patrones prácticos que los desarrolladores profesionales usan para aprovechar al máximo Claude. Ya sea que estés construyendo aplicaciones de producción o simplemente quieras mejor productividad personal, dominar estas habilidades transformará cómo trabajas con IA.

## ¿Qué es el Prompt Engineering?

**Prompt engineering** es la práctica de diseñar y refinar entradas a modelos de IA para lograr salidas deseadas de manera consistente. Es parte comunicación, parte programación y parte psicología—entender tanto cómo expresar tus necesidades como cómo el modelo las interpreta.

### Por Qué Importa

Un buen prompt engineering significa:
- **Mejor Precisión**: Obtén respuestas que coincidan con tus necesidades reales
- **Consistencia**: Logra resultados confiables en múltiples interacciones
- **Eficiencia**: Reduce iteraciones de ida y vuelta
- **Ahorro de Costos**: Menos tokens desperdiciados en aclaraciones
- **Escalabilidad**: Construye prompts que funcionen en sistemas de producción

### Fortalezas Únicas de Claude

Claude es particularmente fuerte en:
- Seguir instrucciones complejas con múltiples pasos
- Mantener contexto en conversaciones largas
- Entender requisitos matizados
- Producir salidas estructuradas y bien formateadas
- Adherirse a pautas y restricciones

## Prerrequisitos

Antes de sumergirte en técnicas avanzadas:

- Familiaridad básica con Claude o modelos de IA similares
- Comprensión de tu caso de uso o dominio del problema
- Disposición para experimentar e iterar
- No se requiere código (pero es útil para implementación)

**Nivel de Habilidad:** Intermedio
**Tiempo para Dominar:** Práctica continua

## Principios Fundamentales

### 1. Sé Claro y Específico

Los prompts vagos obtienen resultados vagos. La especificidad es tu herramienta más poderosa.

**❌ Vago:**
```
Escribe algo de código para autenticación de usuarios.
```

**✅ Específico:**
```
Escribe una función en TypeScript que valide email y contraseña de usuario contra una base de datos PostgreSQL usando bcrypt para hashing de contraseñas. Incluye manejo de errores para credenciales inválidas y fallos de conexión a la base de datos.
```

**Técnicas Clave:**
- Define el formato de salida exacto que quieres
- Especifica lenguajes de programación, frameworks o herramientas
- Incluye restricciones (longitud, estilo, tono)
- Menciona qué incluir y qué excluir

### 2. Proporciona Contexto

Claude funciona mejor cuando entiende el panorama más amplio.

**❌ Sin contexto:**
```
¿Cómo debería estructurar este componente?
```

**✅ Con contexto:**
```
Estoy construyendo un dashboard React para una plataforma SaaS de análisis. El componente necesita mostrar métricas en tiempo real, actualizar cada 30 segundos y manejar hasta 10,000 puntos de datos. Estamos usando TypeScript, Tailwind CSS y React Query. ¿Cómo debería estructurar este componente para rendimiento y mantenibilidad?
```

**Qué incluir:**
- Tu stack tecnológico
- Restricciones del proyecto (rendimiento, escala, presupuesto)
- Audiencia o usuarios objetivo
- Sistemas relacionados o dependencias
- Decisiones previas o convenciones

### 3. Usa Ejemplos (Few-Shot Learning)

Muestra a Claude lo que quieres proporcionando ejemplos.

**Patrón:**
```
Necesito que categorices feedback de clientes. Aquí hay ejemplos:

Entrada: "La app es muy lenta en mi teléfono"
Salida: {"categoria": "rendimiento", "sentimiento": "negativo", "prioridad": "alta"}

Entrada: "¡Me encanta la nueva función de modo oscuro!"
Salida: {"categoria": "caracteristica", "sentimiento": "positivo", "prioridad": "baja"}

Ahora categoriza esto:
Entrada: "No puedo entender cómo exportar mis datos"
```

**Beneficios:**
- Muestra expectativas de formato exacto
- Demuestra casos extremos
- Establece patrones
- Reduce ambigüedad

### 4. Asigna Roles y Personas

Claude puede adoptar diferentes perspectivas para ajustarse a tus necesidades.

**Ejemplos:**

```
Actúa como un ingeniero senior de seguridad revisando este código de autenticación. Enfócate en vulnerabilidades comunes como inyección SQL, XSS y almacenamiento inseguro de contraseñas.
```

```
Eres un escritor técnico creando documentación para usuarios no técnicos. Explica este endpoint de API en términos simples sin jerga.
```

```
Toma el rol de un revisor de código en Google. Revisa este pull request usando sus estándares de ingeniería y guía de estilo.
```

**Personas útiles:**
- Experto técnico (arquitecto, desarrollador senior, especialista en seguridad)
- Experto de dominio (product manager, diseñador UX, científico de datos)
- Representante de audiencia (principiante, usuario final, ejecutivo)
- Controlador de calidad (revisor, tester, auditor)

### 5. Divide Tareas Complejas en Pasos

Las instrucciones de múltiples pasos producen mejores resultados que solicitudes monolíticas.

**❌ Monolítico:**
```
Constrúyeme una API REST para una app de tareas.
```

**✅ Paso a paso:**
```
Construyamos una API REST para una app de tareas paso a paso:

1. Primero, diseña el esquema de datos con estas entidades: usuarios, tareas, categorías
2. Define los endpoints de API siguiendo convenciones REST
3. Escribe los manejadores de rutas con validación de entrada
4. Añade middleware de autenticación usando JWT
5. Incluye manejo de errores y logging
6. Escribe pruebas unitarias para cada endpoint

Comencemos con el paso 1: diseñar el esquema de datos.
```

**Beneficios:**
- Mantiene el enfoque en cada etapa
- Más fácil de verificar corrección
- Permite ajustes entre pasos
- Produce salida más organizada

### 6. Especifica Formato de Salida

Dile a Claude exactamente cómo estructurar la respuesta.

**Ejemplos:**

```
Responde en formato JSON:
{
  "resumen": "descripción breve",
  "detalles": ["punto 1", "punto 2"],
  "recomendacion": "tu acción sugerida"
}
```

```
Formatea tu respuesta como una tabla Markdown con columnas: Característica, Pros, Contras, Veredicto.
```

```
Proporciona tu respuesta en tres secciones:
1. **Respuesta Rápida**: Resumen de una oración
2. **Explicación**: 2-3 párrafos con detalles
3. **Próximos Pasos**: Elementos de acción con viñetas
```

**Formatos comunes:**
- JSON o YAML para datos estructurados
- Markdown para documentación
- Bloques de código con etiquetas de lenguaje
- Tablas para comparaciones
- Listas para pasos o elementos

### 7. Establece Restricciones y Límites

Define qué debe y qué no debe hacer Claude.

**Ejemplos:**

```
Escribe una descripción de producto en exactamente 150 palabras. No uses superlativos como "mejor" o "increíble". Enfócate en especificaciones técnicas y beneficios reales para usuarios.
```

```
Explica este concepto usando solo palabras que un niño de 10 años entendería. Evita jerga técnica. Usa analogías con objetos cotidianos.
```

```
Revisa este código pero NO sugieras una reescritura completa. Enfócate solo en problemas de seguridad y bugs críticos. Ignora preferencias de estilo.
```

**Restricciones útiles:**
- Límites de longitud (palabras, caracteres, líneas)
- Tono y estilo (formal, casual, técnico)
- Límites de alcance (qué incluir/excluir)
- Límites de tiempo o recursos
- Umbrales de calidad

## Técnicas Avanzadas

### Chain of Thought (CoT)

Pide a Claude que muestre su proceso de razonamiento.

**Prompt:**
```
Resuelve este problema paso a paso, mostrando tu razonamiento:

Una consulta de base de datos tarda 5 segundos en devolver 10,000 filas. Después de añadir un índice en la columna de filtro, ahora tarda 6 segundos. ¿Por qué podría pasar esto y qué debería investigar?

Piensa en:
1. Cómo normalmente los índices afectan el rendimiento
2. Qué podría causar que un índice ralentice las cosas
3. Qué factores investigar
```

**Por qué funciona:**
- Desglosa razonamiento complejo
- Hace la lógica transparente y verificable
- Detecta errores en pasos intermedios
- Produce respuestas finales más precisas

### Auto-Consistencia

Pide múltiples enfoques, luego sintetiza.

**Prompt:**
```
Necesito optimizar este endpoint de API lento. Genera tres enfoques diferentes:

1. Enfoque de optimización de base de datos
2. Enfoque de estrategia de caché
3. Enfoque de optimización a nivel de código

Para cada enfoque, lista:
- Cambios específicos necesarios
- Mejora de rendimiento esperada
- Complejidad de implementación
- Trade-offs potenciales

Luego recomienda qué combinación sería más efectiva.
```

### Generación Restringida

Usa etiquetas XML o delimitadores para estructurar prompts complejos.

**Ejemplo:**
```xml
<contexto>
Estoy construyendo un flujo de checkout de e-commerce. Los usuarios se quejan de demasiados pasos.
</contexto>

<flujo_actual>
1. Revisión de carrito
2. Dirección de envío
3. Dirección de facturación
4. Método de envío
5. Método de pago
6. Revisión de orden
7. Confirmación
</flujo_actual>

<requisitos>
- Debe recopilar toda la información necesaria
- Cumplir con PCI DSS para datos de pago
- Soportar checkout como invitado
- Reducir pasos sin sacrificar calidad de datos
</requisitos>

<tarea>
Rediseña este flujo para reducir pasos mientras mantienes todos los requisitos. Explica tu razonamiento para cada cambio.
</tarea>
```

**Beneficios:**
- Separa limpiamente diferentes tipos de información
- Hace los prompts más fáciles de modificar y mantener
- Reduce ambigüedad en escenarios complejos
- Funciona bien con generación programática de prompts

### Refinamiento Iterativo

Construye respuestas progresivamente a través de conversación.

**Patrón:**
```
Usuario: Escribe una función para validar direcciones de email.
Claude: [proporciona validación regex básica]

Usuario: Buen inicio. Ahora añade:
- Soporte para dominios internacionales
- Verificación de proveedores de email desechables
- Devuelve mensajes de error detallados

Claude: [mejora la función]

Usuario: Perfecto. Ahora añade pruebas unitarias cubriendo casos extremos.
```

**Cuándo usar:**
- Resolución exploratoria de problemas
- Cuando los requisitos no están completamente definidos
- Para soluciones complejas de múltiples partes
- Cuando necesitas ajustar el curso

### Meta-Prompting

Haz que Claude te ayude a escribir mejores prompts.

**Ejemplo:**
```
Quiero pedirte que me ayudes a refactorizar algo de código React, pero quiero asegurarme de que mi prompt sea efectivo. Aquí está mi prompt actual:

"Haz este componente mejor"

Esto es demasiado vago. Ayúdame a reescribirlo para ser más específico y efectivo. Hazme preguntas aclaratorias sobre qué significa "mejor" en mi contexto.
```

**Casos de uso:**
- Aprender prompt engineering
- Optimizar flujos de trabajo repetidos
- Construir plantillas de prompts
- Depurar prompts problemáticos

## Mejores Prácticas Específicas por Dominio

### Para Generación de Código

```
Crea una función en [lenguaje] que [tarea específica].

Requisitos:
- Usa [framework/biblioteca] versión X
- Sigue convenciones de [guía de estilo]
- Incluye anotaciones/type hints
- Añade comentarios JSDoc/docstring
- Maneja estos casos extremos: [lista]
- Lanza/devuelve errores para entrada inválida

Optimiza para: [legibilidad/rendimiento/memoria]

Ejemplo de uso:
[muestra cómo quieres llamarla]
```

### Para Revisión de Código

```
Revisa este código en [lenguaje] como un desarrollador senior:

```text
[pegar código]
```

Enfócate en:
1. Vulnerabilidades de seguridad
2. Problemas de rendimiento
3. Bugs o errores de lógica
4. Estilo y legibilidad de código
5. Mejores prácticas

Para cada problema encontrado:
- Severidad: crítico/alto/medio/bajo
- Ubicación: números de línea
- Explicación: por qué es un problema
- Corrección: sugerencia de código específica
```

### Para Documentación

```
Escribe documentación técnica para [característica/API/sistema].

Audiencia: [desarrolladores/usuarios finales/admins] con [nivel de habilidad]

Incluye:
- Descripción general: qué hace y por qué
- Prerrequisitos
- Instrucciones paso a paso
- Ejemplos de código (con comentarios)
- Problemas comunes y soluciones
- Recursos relacionados

Tono: [profesional/amigable/técnico]
Formato: Markdown con encabezados apropiados
```

### Para Depuración

```
Estoy encontrando este error: [mensaje de error]

Contexto:
- Lenguaje/Framework: [detalles]
- Lo que estoy tratando de hacer: [objetivo]
- Lo que esperaba: [comportamiento esperado]
- Lo que realmente pasó: [comportamiento real]
- Lo que he intentado: [intentos previos]

Código relevante:
```text
[pegar código]
```

Ayúdame a:
1. Identificar la causa raíz
2. Explicar por qué ocurre este error
3. Proporcionar una solución con explicación
4. Sugerir cómo prevenir problemas similares
```

### Para Análisis de Datos

```
Analiza esta descripción de dataset:

Datos: [descripción]
Tamaño: [filas/registros]
Columnas: [lista con tipos]

Preguntas:
1. [pregunta específica]
2. [pregunta específica]

Para cada pregunta:
- Enfoque de análisis recomendado
- Código SQL/Python/R para ejecutar
- Cómo interpretar resultados
- Limitaciones potenciales o sesgos
```

## Errores Comunes a Evitar

### 1. Ser Demasiado Breve

**Problema:** "Arregla mi código"
**Mejor:** "Esta función lanza un TypeError en la línea 15 al procesar valores nulos. Aquí está el código: [pegar]. ¿Cómo debería manejar entradas nulas de manera segura?"

### 2. Asumir Contexto

**Problema:** "Actualiza el dashboard" (¿Qué dashboard? ¿Qué actualizaciones?)
**Mejor:** "Actualiza el dashboard de análisis de admin para incluir la nueva métrica 'Retención de Usuarios' que añadimos a la base de datos la semana pasada."

### 3. Hacer Múltiples Preguntas No Relacionadas

**Problema:** "¿Cómo optimizo mi base de datos Y cuál es la mejor forma de estructurar componentes React Y explica OAuth?"
**Mejor:** Divide en prompts separados y enfocados

### 4. No Proporcionar Ejemplos

**Problema:** "Parsea estos datos a un mejor formato"
**Mejor:** "Parsea estos datos CSV a JSON. Ejemplo: 'Juan,Pérez,25' → `{"nombre":` "Juan", "apellido": "Pérez", "edad": 25}`"

### 5. Ignorar Formato de Salida

**Problema:** No especificar cómo quieres los resultados
**Mejor:** "Devuelve un array JSON de objetos, cada uno con campos 'nombre' y 'puntaje'"

### 6. Prioridades Poco Claras

**Problema:** "Haz este código mejor"
**Mejor:** "Optimiza este código para legibilidad primero, luego rendimiento. No sacrifiques claridad por micro-optimizaciones."

### 7. Sin Restricciones

**Problema:** "Escribe documentación"
**Mejor:** "Escribe documentación en 500 palabras o menos, adecuada para desarrolladores junior, enfocándose solo en los casos de uso más comunes"

## Pruebas e Iteración

### Cómo Evaluar Calidad del Prompt

**Los buenos prompts producen consistentemente respuestas que:**
1. ✅ Responden directamente la pregunta
2. ✅ Coinciden con el formato especificado
3. ✅ Incluyen toda la información requerida
4. ✅ Siguen las restricciones establecidas
5. ✅ Son apropiadas para la audiencia
6. ✅ Funcionan confiablemente en múltiples ejecuciones

### Pruebas A/B de Prompts

Prueba variaciones para encontrar qué funciona mejor:

**Versión A:**
```
Explica cómo funciona la autenticación JWT.
```

**Versión B:**
```
Estoy construyendo una API Node.js. Explica cómo funciona la autenticación JWT, incluyendo:
- La estructura del token
- Cómo implementar login/logout
- Dónde almacenar tokens de manera segura
- Cómo refrescar tokens expirados

Usa ejemplos de código con Express.js.
```

**Mide:**
- Relevancia a tu necesidad real
- Completitud de la respuesta
- Claridad y usabilidad
- Tiempo para obtener resultado utilizable

### Construyendo Bibliotecas de Prompts

Crea plantillas reutilizables para tareas comunes:

````markdown
## Plantilla de Revisión de Código
Revisa este código en \{lenguaje\} para \{enfoque_específico\}:

```\{lenguaje\}
\{código_aquí\}
```

Destaca:
1. \{área_enfoque_1\}
2. \{área_enfoque_2\}
3. \{área_enfoque_3\}

Formato: Tabla con Problema | Severidad | Corrección
````

**Beneficios:**
- Ahorra tiempo en tareas repetidas
- Asegura consistencia
- Fácil de compartir con el equipo
- Mejora con el tiempo

## Consideraciones de Producción

### System Prompts

Para aplicaciones, usa system prompts para establecer comportamiento consistente:

```javascript
const systemPrompt = `Eres un revisor de código experto especializado en seguridad.
Para cada revisión de código:
- Identifica vulnerabilidades de seguridad primero
- Explica el riesgo en términos de negocio
- Proporciona correcciones de código específicas
- Califica severidad como Crítico/Alto/Medio/Bajo
- Siempre sé constructivo y educativo

Formatea todas las respuestas como JSON con esta estructura:
{
  "problemas": [{"severidad": "", "descripcion": "", "correccion": ""}],
  "resumen": ""
}`;
```

### Versionado de Prompts

Rastrea cambios de prompts como código:

```javascript
// v1.0 - Versión inicial
const promptV1 = "Resume este texto en 100 palabras.";

// v1.1 - Añadida especificación de formato
const promptV1_1 = "Resume este texto en exactamente 100 palabras usando viñetas.";

// v2.0 - Añadido contexto y restricciones
const promptV2 = `Resume este {tipo_documento} para {audiencia}.

Requisitos:
- Exactamente 100 palabras
- Usa viñetas
- Enfócate en insights accionables
- Evita jerga técnica`;
```

### Manejo de Errores

Diseña prompts que fallen con gracia:

```
Analiza estos datos: {datos}

Si los datos son inválidos o incompletos:
- Devuelve {"error": "descripción", "sugerencias": ["qué se necesita"]}
- No intentes adivinar valores faltantes
- No procedas con análisis parcial

Solo si los datos son válidos:
- Proporciona análisis en formato JSON
- Incluye puntajes de confianza
```

### Optimización de Tokens

Sé conciso sin perder claridad:

**❌ Verboso (100 tokens):**
```
Realmente apreciaría mucho si pudieras por favor ayudarme escribiendo una función en Python que sea capaz de calcular y luego devolver el factorial de cualquier número dado que se le proporcione como entrada.
```

**✅ Conciso (20 tokens):**
```
Escribe una función en Python que calcule y devuelva el factorial de un número dado.
```

## Ejercicios de Práctica

### Ejercicio 1: Refactorizando Prompts Vagos

Mejora este prompt:
```
Ayúdame con mi sitio web.
```

**Solución:**

```
Estoy construyendo un sitio web de e-commerce con React y Node.js. La página de producto carga lentamente (5+ segundos) al mostrar más de 100 artículos.

Ayúdame a:
1. Identificar probables cuellos de botella de rendimiento
2. Sugerir estrategias de optimización
3. Priorizar victorias rápidas vs soluciones a largo plazo

Enfócate en rendimiento de renderizado frontend y tiempos de respuesta de API.
```

### Ejercicio 2: Añadiendo Estructura

Reestructura este prompt usando etiquetas XML:
```
Necesito migrar datos de MySQL a PostgreSQL pero me preocupa el tiempo de inactividad y tenemos 10GB de datos y algunos triggers y procedimientos almacenados complejos que podrían no ser compatibles.
```

**Solución:**

```xml
<tarea>Migrar base de datos de MySQL a PostgreSQL</tarea>

<restricciones>
- Minimizar tiempo de inactividad (actual: desconocido)
- Tamaño de datos: 10GB
- Debe preservar integridad de datos
</restricciones>

<preocupaciones>
- Compatibilidad de triggers complejos
- Migración de procedimientos almacenados
- Requisito de cero pérdida de datos
</preocupaciones>

<entregables>
1. Estrategia de migración con pasos
2. Problemas de compatibilidad a abordar
3. Tiempo de inactividad estimado
4. Plan de rollback
</entregables>
```

### Ejercicio 3: Proporcionando Ejemplos

Escribe un prompt con ejemplos para extraer datos estructurados de lenguaje natural:

Entrada: "Programa una reunión con Juan el próximo martes a las 3pm sobre el presupuesto Q4"

**Solución:**

```
Extrae detalles de reunión de lenguaje natural a formato JSON.

Ejemplos:

Entrada: "Programa una reunión con Juan el próximo martes a las 3pm sobre el presupuesto Q4"
Salida: {
  "accion": "programar_reunion",
  "asistentes": ["Juan"],
  "fecha": "próximo martes",
  "hora": "3pm",
  "tema": "presupuesto Q4"
}

Entrada: "Recuérdame llamar a Sara mañana por la mañana"
Salida: {
  "accion": "establecer_recordatorio",
  "tarea": "llamar a Sara",
  "fecha": "mañana",
  "hora": "mañana"
}

Ahora extrae de:
Entrada: "Reserva una sala de conferencias para el standup del equipo cada lunes a las 9am"
```

## Herramientas y Recursos

### Herramientas de Prueba de Prompts

- **Claude.ai**: Prueba prompts interactivamente
- **Consola de Anthropic**: Pruebas de API y monitoreo
- **Claude Code**: Integración de flujo de trabajo de desarrollo
- **MCP Inspector**: Depura cadenas complejas de prompts

### Patrones Útiles

**Patrón Chain-of-Thought:**
```
Resolvamos esto paso a paso:
1. [Primer paso de razonamiento]
2. [Segundo paso de razonamiento]
3. [Conclusión]
```

**Patrón de Auto-Corrección:**
```
[Tu respuesta]

Ahora revisa tu respuesta para:
- Errores lógicos
- Información faltante
- Suposiciones incorrectas

Proporciona una versión corregida si es necesario.
```

**Patrón Ensemble de Expertos:**
```
Aborda este problema desde tres perspectivas:

1. Como un experto en bases de datos: [perspectiva]
2. Como un experto en seguridad: [perspectiva]
3. Como un ingeniero de rendimiento: [perspectiva]

Luego sintetiza la mejor solución general.
```

## Próximos Pasos

1. **Practica Diariamente**: Aplica estas técnicas a tu trabajo real
2. **Construye una Biblioteca**: Guarda prompts que funcionen bien para ti
3. **Experimenta**: Prueba variaciones para ver qué mejora resultados
4. **Comparte y Aprende**: Colabora con otros en estrategias de prompts
5. **Mantente Actualizado**: El prompt engineering evoluciona a medida que mejoran los modelos

## Recursos Adicionales

### Documentación Oficial
- [Documentación de Claude](https://docs.anthropic.com/claude/docs)
- [Guía de Prompt Engineering](https://docs.anthropic.com/claude/docs/prompt-engineering)
- [Referencia de API](https://docs.anthropic.com/claude/reference)

### Recursos de la Comunidad
- [Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook)
- [Prompt Engineering GitHub](https://github.com/dair-ai/Prompt-Engineering-Guide)
- [Biblioteca de Ejemplos de Claude](https://docs.anthropic.com/claude/docs/examples)

### Guías Relacionadas
- 📘 [**Ventana de Contexto de Claude: Guía Completa**](https://www.aipaths.academy/es/docs/002_claude-context-window) — Dominá el contexto antes de optimizar los prompts
- 📘 [**Claude Skills: Personalizar Flujos de Trabajo con IA**](https://www.aipaths.academy/es/docs/011_claude-skills-guide) — Convertí tus mejores prompts en Skills reutilizables
- 📘 [**Context Engineering: La Evolución**](https://www.aipaths.academy/es/docs/012_context-engineering-evolution) — El siguiente nivel después de prompt engineering
- 📝 [**10 Patrones de Prompts que Cambiaron Mi Workflow**](https://www.aipaths.academy/es/blog/003_prompt-patterns-workflow) — Patrones prácticos aplicando estas mejores prácticas
- 📝 [**Claude Code vs Cursor**](https://www.aipaths.academy/es/blog/004_claude-code-vs-cursor) — Dónde aplicar estos prompts: comparativa de herramientas

---

**¿Preguntas?** ¡Abre un issue o únete a nuestras discusiones comunitarias!

**¿Encontraste un gran patrón de prompt?** ¡Compártelo con nosotros y ayuda a otros a aprender!
