---
# Unique semantic identifier (links EN/ES versions)
content_id: "blogs-prompt-patterns-workflow"

# Locale
locale: "es"

# SEO & Display
title: "10 Patrones de Prompts Que Cambiaron Mi Flujo de Trabajo con Claude"
description: "Descubre patrones de prompts probados para Claude. Ejemplos reales de código de producción y sesiones de depuración diarias."

# Author
author: "AIPaths Academy"

# Publication dates (ISO 8601 format)
publishedAt: "2025-10-30T00:00:00Z"
updatedAt: "2025-10-30T00:00:00Z"

# Cover image
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/blogs/003_prompt-patterns-workflow/hero.jpg"

# Tags (canonical lowercase English IDs)
# IMPORTANT: Both EN/ES versions MUST have IDENTICAL tags
tags:
  - prompt-engineering
  - productivity
  - workflows
  - claude
  - best-practices

# Reading time estimate
readingTime: 12
---

Hace seis meses, estaba frustrado con Claude. La mitad de mis prompts necesitaban múltiples iteraciones, las respuestas eran inconsistentes, y pasaba más tiempo aclarando que realmente haciendo trabajo. ¿Te suena familiar?

Entonces descubrí algo: el problema no era Claude—era cómo le estaba hablando.

Después de analizar cientos de prompts exitosos y fallidos, identifiqué 10 patrones que consistentemente producen mejores resultados. Estos patrones transformaron mi flujo de trabajo de frustrante a increíblemente productivo. Los uso diariamente para todo, desde depurar problemas de producción hasta escribir documentación.

**Lo que aprenderás:**
- 10 patrones de prompts probados en batalla con ejemplos reales
- Cuándo y por qué funciona cada patrón
- Cómo adaptar patrones a tus necesidades específicas
- Errores que cometí (para que tú no tengas que hacerlo)

**Tiempo de lectura:** 12 minutos
**Nivel de habilidad:** Todos los niveles

## Patrón 1: El Patrón Sándwich

**Qué es:** Contexto → Solicitud → Restricciones

Este patrón mejoró drásticamente mis resultados al estructurar prompts en tres capas claras.

### Antes (Tasa de Fallo: 60%)

```
Escribe una función para validar entrada de usuario.
```

Resultado: Genérico, incompleto, faltando casos extremos.

### Después (Tasa de Fallo: 5%)

```
[CONTEXTO]
Estoy construyendo un formulario de registro para una app SaaS B2B. Los usuarios han estado enviando datos inválidos causando errores de base de datos.

[SOLICITUD]
Escribe una función TypeScript que valide entrada de registro de usuario.

[RESTRICCIONES]
- Email: formato válido, sin dominios desechables
- Contraseña: mín 12 caracteres, 1 mayúscula, 1 número, 1 carácter especial
- Nombre de empresa: 2-100 caracteres, solo alfanuméricos y espacios
- Devuelve mensajes de error detallados para cada campo
- Usa Zod para validación de esquema
```

### Por Qué Funciona

El patrón sándwich separa preocupaciones: Claude entiende el POR QUÉ (contexto), QUÉ (solicitud), y CÓMO (restricciones) independientemente. Esto reduce ambigüedad y produce resultados más precisos.

### Cuándo Usarlo

- Implementación de características
- Generación de código
- Creación de contenido
- Cualquier solicitud compleja de múltiples facetas

## Patrón 2: El Patrón Ejemplo-Primero

**Qué es:** Muestra, no digas

Aprendí esto después de desperdiciar horas explicando requisitos de formato que un ejemplo habría dejado cristalino.

### La Transformación

**Antes:**
```
Convierte la respuesta de API a un formato más limpio.
```

**Después:**
```
Transforma respuestas de API a un formato limpio. Aquí hay un ejemplo:

Entrada:
{
  "usr_nm": "juan_perez",
  "usr_eml": "juan@ejemplo.com",
  "acc_sts": 1,
  "crt_dt": "2024-01-15T10:30:00Z"
}

Salida Esperada:
{
  "username": "juan_perez",
  "email": "juan@ejemplo.com",
  "accountStatus": "activo",
  "createdAt": "2024-01-15T10:30:00Z"
}

Ahora transforma esta respuesta:
[pegar respuesta real]
```

### Por Qué Funciona

Los ejemplos eliminan ambigüedad. Claude ve el patrón exacto, formato y transformaciones que quieres. Esto es especialmente poderoso para transformaciones de datos, formateo y coincidencia de estilo.

### Victoria del Mundo Real

Usé este patrón para generar más de 50 fixtures de prueba. En lugar de explicar el formato, proporcioné 2 ejemplos y pedí 48 más. Me ahorró 3 horas de trabajo manual.

### Cuándo Usarlo

- Transformaciones de datos
- Especificaciones de formato
- Coincidencia de estilo
- Patrones de código
- Cualquier vez que "justo así" sea más claro que explicar

## Patrón 3: El Patrón de Asignación de Rol

**Qué es:** Dale a Claude una experiencia específica

Este patrón cambió cómo abordo revisiones de código y decisiones arquitectónicas.

### El Patrón

```
Eres un [rol específico] con [experiencia específica].

[Tarea en el contexto de ese rol]

Enfócate en [preocupaciones específicas del rol].
```

### Ejemplos Reales Que Funcionaron

**Revisión de Seguridad:**
```
Eres un ingeniero senior de seguridad especializado en seguridad de aplicaciones web y vulnerabilidades OWASP Top 10.

Revisa este endpoint de autenticación en busca de problemas de seguridad:

[pegar código]

Enfócate específicamente en:
- Bypasses de autenticación
- Vectores de inyección SQL
- Vulnerabilidades XSS
- Manejo inseguro de tokens
- Gaps en limitación de tasa
```

**Optimización de Rendimiento:**
```
Eres un ingeniero de rendimiento especializado en aplicaciones React con más de 10 años optimizando apps de producción.

Este componente se re-renderiza con demasiada frecuencia. Analiza por qué y sugiere optimizaciones específicas:

[pegar componente]

Enfócate en:
- Re-renders innecesarios
- Computaciones costosas
- Memory leaks
- Impacto en tamaño del bundle
```

**Diseño de Base de Datos:**
```
Eres un arquitecto de bases de datos especializado en PostgreSQL a escala.

Revisa este esquema para una app SaaS multi-tenant:

[pegar esquema]

Enfócate en:
- Rendimiento de consultas en más de 1M de filas
- Estrategia de índices
- Oportunidades de particionamiento
- Riesgos de consultas N+1
```

### Por Qué Funciona

Los roles activan "dominios de conocimiento" específicos y criterios de evaluación. Un experto en seguridad busca cosas diferentes que un ingeniero de rendimiento. El rol enfoca el análisis de Claude en lo que importa para tu preocupación específica.

### Cuándo Usarlo

- Revisiones de código
- Decisiones arquitectónicas
- Análisis especializado
- Feedback de nivel experto
- Tareas específicas de dominio

## Patrón 4: Desglose Paso a Paso

**Qué es:** Delinea explícitamente el proceso

Las tareas complejas fallan cuando se tratan como solicitudes monolíticas únicas. Dividirlas en pasos mejoró dramáticamente mi tasa de éxito.

### Ejemplo Real: Implementación de API

**Antes (Falló):**
```
Construye una API REST para un blog.
```

Resultado: Boilerplate genérico que no se ajustaba a mis necesidades.

**Después (Éxito):**
```
Construyamos una API REST para un blog paso a paso. Te pediré que completes cada paso antes de pasar al siguiente.

Paso 1: Diseña los modelos de datos
- Post (título, contenido, autorId, publishedAt, estado)
- Autor (nombre, email, bio)
- Comentario (contenido, nombreAutor, postId, createdAt)

Crea el esquema Prisma con relaciones apropiadas.

[Esperar respuesta, revisar, luego continuar...]

Paso 2: Define las rutas de API siguiendo convenciones RESTful
[Y así sucesivamente...]
```

### Por Qué Funciona

- Cada paso tiene un objetivo claro y enfocado
- Puedes verificar corrección antes de proceder
- Fácil de ajustar basándose en resultados intermedios
- Previene abrumar a Claude con demasiado de una vez
- Construye soluciones complejas incrementalmente

### Cuándo Usarlo

- Implementaciones de múltiples pasos
- Refactoring complejo
- Diseño de sistemas
- Proyectos de migración
- Cualquier cosa que tome más de 15 minutos en completar

## Patrón 5: El Patrón Restricción-Primero

**Qué es:** Define límites antes de preguntar

Aprendí esto por las malas después de que Claude sugiriera soluciones que violaban nuestras restricciones de producción.

### El Patrón

```
RESTRICCIONES (No violar estas):
- [Restricción dura 1]
- [Restricción dura 2]
- [Restricción dura 3]

PREFERENCIAS (Sería bueno tener):
- [Preferencia 1]
- [Preferencia 2]

Dadas estas restricciones, [tu solicitud]
```

### Ejemplo Real

```
RESTRICCIONES (No violar):
- Debe funcionar en Node.js 16 (no podemos actualizar aún)
- No se pueden añadir nuevas dependencias npm (política corporativa)
- Debe completarse en &lt;100ms (requisito de latencia P99)
- No se puede modificar esquema de base de datos (congelamiento de migración)

PREFERENCIAS (Sería bueno tener):
- Código legible sobre optimizaciones ingeniosas
- Huella de memoria mínima

Dadas estas restricciones, optimiza este endpoint de API lento:
[pegar código]
```

### Antes vs Después

**Antes:** Claude sugería soluciones que requerían nuevas dependencias o cambios que rompen compatibilidad.

**Después:** Claude trabajaba dentro de las restricciones, encontraba soluciones creativas usando herramientas existentes.

### Por Qué Funciona

Las restricciones previenen iteraciones desperdiciadas. Claude sabe exactamente qué está fuera de límites y puede enfocarse en soluciones viables.

### Cuándo Usarlo

- Sistemas de producción con restricciones
- Bases de código legacy
- Entornos regulados
- Correcciones sensibles al tiempo
- Restricciones de presupuesto o recursos

## Patrón 6: El Patrón de Bloqueo de Formato

**Qué es:** Especifica estructura exacta de salida

Este patrón eliminó el 90% de mis solicitudes de seguimiento "reformatea esto".

### El Patrón

```
Responde en EXACTAMENTE este formato:

[Especifica estructura con ejemplos]

No añadas comentario fuera de este formato.
```

### Ejemplos Reales

**Para Revisiones de Código:**
```
Revisa este código. Responde en EXACTAMENTE este formato:

## Problemas de Seguridad
- [Problema 1]: [Descripción] | Severidad: [Crítico/Alto/Medio/Bajo]
  Corrección: [Cambio de código específico]

## Problemas de Rendimiento
- [Problema 1]: [Descripción] | Impacto: [Alto/Medio/Bajo]
  Corrección: [Optimización específica]

## Mejores Prácticas
- [Problema 1]: [Qué mejorar]
  Sugerencia: [Mejor enfoque]

Si no hay problemas en una categoría, escribe "Ninguno encontrado."
```

**Para Reportes de Bugs:**
```
Analiza este bug y responde en este formato JSON:

{
  "causaRaiz": "explicación de una oración",
  "porQueOcurre": "explicación detallada",
  "correccion": "solución de código específica",
  "consejosPrevencion": ["consejo 1", "consejo 2"],
  "problemasRelacionados": ["problema 1", "problema 2"]
}
```

**Para Documentación:**
```
Escribe documentación de API en este formato:

# Nombre del Endpoint

## Descripción General
[Un párrafo de descripción]

## Solicitud
```http
[Ejemplo de solicitud HTTP]
```

## Respuesta
```json
[Ejemplo de respuesta]
```

## Parámetros
| Nombre | Tipo | Requerido | Descripción |
|--------|------|-----------|-------------|

## Códigos de Error
| Código | Significado | Resolución |
|--------|-------------|------------|

## Ejemplo de Código
```javascript
[Ejemplo completo y ejecutable]
```
```

### Por Qué Funciona

Las especificaciones de formato hacen las respuestas inmediatamente utilizables. Sin reformatear, sin reestructurar—solo copiar y usar.

### Cuándo Usarlo

- Revisiones de código
- Generación de documentación
- Extracción de datos
- Generación de reportes
- Cualquier tarea repetida con salida estándar

## Patrón 7: El Patrón de Protocolo de Depuración

**Qué es:** Framework estructurado de resolución de problemas

Este patrón redujo mi tiempo de depuración a la mitad al asegurar que Claude tuviera todo el contexto necesario por adelantado.

### La Plantilla

```
## Reporte de Bug

**Error:**
[Mensaje de error exacto o comportamiento inesperado]

**Esperado:**
[Lo que debería pasar]

**Contexto:**
- Entorno: [dev/staging/prod]
- Stack: [lenguajes, frameworks, versiones]
- Cambios recientes: [qué cambió antes de que apareciera el bug]

**Código:**
```text
[fragmento de código relevante]
```

**Lo Que He Intentado:**
1. [Intento 1] - [Resultado]
2. [Intento 2] - [Resultado]

**Por Favor:**
1. Identifica la causa raíz
2. Explica por qué está pasando
3. Proporciona la corrección
4. Sugiere cómo prevenir problemas similares
```

### Historia de Éxito Real

**Mi Bug:**
```
## Reporte de Bug

**Error:**
Error de PostgreSQL: "column 'user_id' does not exist"

**Esperado:**
La consulta debería devolver posts del usuario con información del autor

**Contexto:**
- Entorno: producción (¡funciona en dev!)
- Stack: Node.js 18, PostgreSQL 14, Prisma 4.2
- Cambios recientes: añadí nueva columna 'userId' a tabla posts ayer

**Código:**
```sql
SELECT posts.*, users.name
FROM posts
JOIN users ON posts.user_id = users.id
WHERE users.id = $1;
```

**Lo Que He Intentado:**
1. Verifiqué que la migración corrió - muestra como completa en Prisma
2. Revisé base de datos directamente - la columna existe en la tabla
3. Reinicié aplicación - sigue fallando

**Por Favor:**
[Pedir ayuda a Claude]
```

**Respuesta de Claude:**
¡Inmediatamente detectó el problema: sensibilidad a mayúsculas! La base de datos de producción tenía `userId` (camelCase) pero la consulta usaba `user_id` (snake_case). La base de datos de desarrollo no era sensible a mayúsculas, enmascarando el problema.

### Por Qué Funciona

El contexto completo previene el ciclo de "necesito más información". Claude puede diagnosticar problemas inmediatamente en lugar de jugar a 20 preguntas.

### Cuándo Usarlo

- Bugs de producción
- Errores misteriosos
- Problemas específicos de entorno
- Escenarios complejos de depuración

## Patrón 8: El Patrón de Refinamiento Progresivo

**Qué es:** Itera inteligentemente a través de conversación

En lugar de intentar conseguir todo perfecto en un solo intento, este patrón construye soluciones progresivamente.

### El Flujo

```
Solicitud 1: Versión básica
[Claude proporciona fundamento]

Solicitud 2: "Bien. Ahora añade [mejora específica]"
[Claude mejora]

Solicitud 3: "Perfecto. Ahora optimiza para [preocupación específica]"
[Claude optimiza]

Solicitud 4: "Paso final: añade [toques finales]"
[Claude completa]
```

### Ejemplo Real

**Paso 1:**
```
Escribe un hook React para obtener datos de usuario de una API.
```

**Paso 2:**
```
Buen inicio. Ahora añade:
- Estado de carga
- Manejo de errores
- Reintento automático en fallo
```

**Paso 3:**
```
Genial. Ahora añade tipos TypeScript y maneja estos casos extremos:
- Usuario no encontrado (404)
- Timeout de red
- Formato de respuesta inválido
```

**Paso 4:**
```
Toques finales:
- Añade integración con React Query
- Incluye configuración de caché
- Añade comentarios JSDoc
```

### Por Qué Funciona

- Cada iteración está enfocada y manejable
- Puedes verificar corrección en cada etapa
- Fácil de ajustar dirección basándose en resultados
- Previene solicitudes abrumadoras
- Construye soluciones complejas naturalmente

### Cuándo Usarlo

- Desarrollo exploratorio
- Características complejas
- Cuando los requisitos no están completamente claros
- Aprendiendo nuevos patrones
- Mejora iterativa

## Patrón 9: El Patrón Meta-Prompt

**Qué es:** Pide a Claude que te ayude a escribir mejores prompts

Este meta-patrón me ayudó a descubrir muchos de los patrones en este artículo.

### Cómo Usarlo

```
Quiero pedirte que [objetivo de alto nivel], pero quiero asegurarme de que mi prompt sea efectivo.

Mi prompt actual es:
"[tu prompt actual]"

Esto parece [demasiado vago/demasiado específico/faltando algo].

Ayúdame a:
1. Identificar qué no está claro o falta
2. Hacer preguntas aclaratorias
3. Reescribirlo como un prompt efectivo
```

### Ejemplo Real

**Yo:**
```
Quiero pedirte que me ayudes a refactorizar algo de código, pero quiero asegurarme de que mi prompt sea efectivo.

Mi prompt actual es: "Haz este componente mejor"

Esto es demasiado vago. Ayúdame a reescribirlo.
```

**Claude:**
```
Tienes razón, eso es demasiado vago. Déjame hacer preguntas aclaratorias:

1. ¿Qué problemas específicos existen? (rendimiento, legibilidad, bugs?)
2. ¿Qué restricciones? (no puedo cambiar API, debo mantener compatibilidad?)
3. ¿Cuál es el contexto? (rol del componente, tech stack, escala?)
4. ¿Qué significa "mejor" para ti?

Una vez que respondas estas, así es como estructuraría el prompt:

"Refactoriza este [nombre del componente] en nuestro [tech stack].

Problemas actuales:
- [Problema 1]
- [Problema 2]

Objetivos:
- [Objetivo 1]
- [Objetivo 2]

Restricciones:
- [Restricción 1]
- [Restricción 2]

[Código del componente]"
```

### Por Qué Funciona

Claude entiende prompt engineering y puede ayudarte a crear mejores solicitudes. Es como tener un tutor de prompt engineering disponible 24/7.

### Cuándo Usarlo

- Aprendiendo prompt engineering
- Optimizando flujos de trabajo repetidos
- Cuando estés atascado en cómo preguntar algo
- Construyendo plantillas de prompts

## Patrón 10: Prompt Guiado por Pruebas

**Qué es:** Define criterios de éxito por adelantado

Inspirado en TDD, este patrón asegura que las respuestas cumplan tus necesidades reales.

### La Estructura

```
Necesito [objetivo].

Criterios de éxito (la respuesta debe cumplir TODOS):
✓ [Requisito específico 1]
✓ [Requisito específico 2]
✓ [Requisito específico 3]

Casos de prueba (debe manejar todos):
- Caso 1: [Entrada] → [Salida esperada]
- Caso 2: [Entrada] → [Salida esperada]
- Caso extremo: [Entrada] → [Comportamiento esperado]

[Tu solicitud real]

Después de responder, verifica que tu solución cumple todos los criterios.
```

### Ejemplo Real

```
Necesito una función para calcular costos de envío.

Criterios de éxito:
✓ Devuelve un número (centavos USD)
✓ Maneja los 50 estados de EE.UU.
✓ Tiene en cuenta peso y dimensiones
✓ Aplica multiplicadores regionales
✓ Incluye type hints (TypeScript)
✓ Tiene pruebas unitarias

Casos de prueba:
- CA, 1lb, 6x4x2: → $895
- NY, 5lb, 12x12x6: → $1450
- HI, 2lb, 8x8x4: → $2100 (premium Hawaii)
- Estado inválido: → lanza error

Escribe la función y pruebas.

Después de escribir, verifica que cumple los 6 criterios.
```

### Por Qué Funciona

- Definición clara de "terminado"
- Requisitos comprobables
- Fuerza completitud
- Detecta casos extremos por adelantado
- Claude se auto-valida

### Cuándo Usarlo

- Funciones críticas
- APIs públicas
- Código de producción
- Lógica compleja
- Cuando la precisión importa

## Combinando Patrones

La magia real ocurre cuando combinas patrones. Así es como los uso juntos:

### Ejemplo: Construyendo una Característica

```
[ROL] Eres un desarrollador full-stack senior.

[SÁNDWICH - CONTEXTO]
Estoy construyendo un sistema de notificaciones en tiempo real para una app de redes sociales. Los usuarios reportan notificaciones perdidas.

[RESTRICCIONES]
- Debe funcionar con infraestructura WebSocket existente
- No puedo modificar esquema de base de datos (congelamiento de migración)
- Debe manejar 10,000 usuarios concurrentes
- Máximo 100ms de latencia

[PASO A PASO]
Abordemos esto en etapas:

Etapa 1: Diagnostica el sistema actual
[Código actual]

Identifica por qué se están perdiendo notificaciones.

[BLOQUEO DE FORMATO]
Responde en este formato:
- Causa Raíz: [diagnóstico]
- Evidencia: [qué indica esto]
- Impacto: [cómo afecta a usuarios]
- Confianza: [Alta/Media/Baja]

[GUIADO POR PRUEBAS]
Después de tu análisis, propón una solución que:
✓ Garantice entrega
✓ Maneje caídas de conexión
✓ Mantenga orden
✓ Se mantenga bajo 100ms
✓ No requiera cambios de esquema
```

### El Resultado

Al combinar patrones, obtengo soluciones enfocadas, estructuradas y verificables que cumplen todos los requisitos. Este enfoque ahorra horas de ida y vuelta.

## Errores Comunes Que Cometí (Y Cómo Evitarlos)

### Error 1: Ser Demasiado Educado

**No:** "¿Podrías por favor tal vez ayudarme a escribir una función si no es mucha molestia?"

**Sí:** "Escribe una función para validar direcciones de email."

Claude no necesita cortesías. Sé directo y ahorra tokens.

### Error 2: Preguntar Múltiples Cosas a la Vez

**No:** "Escribe una función, explica cómo funciona, y también cuéntame sobre mejores prácticas de manejo de errores."

**Sí:** Divide en prompts separados. Completa una cosa bien antes de pasar a la siguiente.

### Error 3: No Verificar la Comprensión de Claude

**No:** Asumir que Claude interpretó tu prompt correctamente.

**Sí:** Comienza con "Confirma que entiendes: Necesito [reafirmar requisito clave]"

### Error 4: Ignorar Primeras Respuestas

**No:** Seguir preguntando lo mismo de manera diferente.

**Sí:** Usa refinamiento progresivo. Construye sobre lo que funciona.

### Error 5: No Guardar Lo Que Funciona

**No:** Recrear prompts desde cero cada vez.

**Sí:** Construye una biblioteca personal de prompts. Documenta patrones que funcionan.

## Construyendo Tu Biblioteca de Prompts

Comienza a coleccionar prompts que funcionen para ti:

```markdown
## Mi Biblioteca de Prompts

### Revisión de Código (Enfoque en Seguridad)
```
Eres un ingeniero de seguridad. Revisa este código en busca de vulnerabilidades:
[código]
Enfócate en: [preocupaciones de seguridad]
Formato: Tabla con Problema | Severidad | Corrección
```

### Diagnóstico de Bugs
```
[Usa Patrón de Protocolo de Depuración]
```

### Documentación de API
```
[Usa Patrón de Bloqueo de Formato para docs de API]
```
```

**Beneficios:**
- Ahorra tiempo en tareas repetidas
- Asegura consistencia
- Mejora con el tiempo
- Fácil de compartir con el equipo

## Midiendo Mejora

Rastrea la efectividad de tus prompts:

**Métricas que uso:**
- Tasa de éxito de primera respuesta
- Número de preguntas aclaratorias necesarias
- Tiempo desde prompt hasta resultado utilizable
- Consistencia en tareas similares

**Antes de estos patrones:**
- Tasa de éxito: ~40%
- Iteraciones promedio: 3-4
- Tiempo hasta resultado: 15-20 minutos

**Después de estos patrones:**
- Tasa de éxito: ~85%
- Iteraciones promedio: 1-2
- Tiempo hasta resultado: 5-8 minutos

## Conclusión

Estos 10 patrones transformaron mi flujo de trabajo con Claude de frustrante a increíblemente productivo:

1. **Patrón Sándwich**: Contexto → Solicitud → Restricciones
2. **Patrón Ejemplo-Primero**: Muestra, no digas
3. **Patrón de Asignación de Rol**: Dale experiencia específica
4. **Desglose Paso a Paso**: Divide tareas complejas
5. **Patrón Restricción-Primero**: Define límites por adelantado
6. **Patrón de Bloqueo de Formato**: Especifica estructura exacta de salida
7. **Patrón de Protocolo de Depuración**: Resolución estructurada de problemas
8. **Patrón de Refinamiento Progresivo**: Itera inteligentemente
9. **Patrón Meta-Prompt**: Pide ayuda a Claude para escribir prompts
10. **Patrón Guiado por Pruebas**: Define criterios de éxito por adelantado

**Conclusiones clave:**
- Los buenos prompts están estructurados, no son más largos
- Los ejemplos eliminan ambigüedad
- Las restricciones previenen iteraciones desperdiciadas
- Los roles activan conocimiento especializado
- Las especificaciones de formato hacen la salida inmediatamente utilizable
- Combinar patrones crea flujos de trabajo poderosos

### ¿Qué Sigue?

1. **Elige un patrón** para practicar esta semana
2. **Rastrea tus resultados** antes y después
3. **Construye tu biblioteca de prompts** a medida que descubres qué funciona
4. **Comparte y aprende** de los patrones de otros
5. **Itera continuamente** a medida que mejoras

## Lectura Adicional

- 📘 [**Prompt Engineering para Claude: Mejores Prácticas**](https://www.aipaths.academy/es/docs/005_prompt-engineering-best-practices) — La guía completa detrás de estos patrones
- 📘 [**Ventana de Contexto de Claude: Guía Completa**](https://www.aipaths.academy/es/docs/002_claude-context-window) — Entendé cómo el contexto afecta la calidad de tus prompts
- 📘 [**Construyendo Servidores MCP**](https://www.aipaths.academy/es/docs/004_building-first-mcp-server) — Extendé las capacidades de Claude con herramientas personalizadas
- 📘 [**Claude Skills: Personalizar Flujos de Trabajo**](https://www.aipaths.academy/es/docs/011_claude-skills-guide) — Convertí estos patrones en Skills reutilizables
- [Guía de Prompt Engineering de Anthropic](https://docs.anthropic.com/claude/docs/prompt-engineering)

---

**¿Te resultó útil?** ¡Compártelo con tu equipo!

**¿Tienes un patrón que te funciona genial?** ¡Deja un comentario abajo o [abre un issue en GitHub](https://github.com/aipaths/aipaths-academy-content/issues)!

**¿Quieres ver más ejemplos?** Revisa nuestros [ejemplos del Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook).
