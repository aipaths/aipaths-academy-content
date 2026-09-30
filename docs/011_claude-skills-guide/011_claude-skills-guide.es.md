---
# Unique semantic identifier (links EN/ES versions)
content_id: "docs-claude-skills-guide"

# Locale (must match filename: .en.md or .es.md)
locale: "es"

# SEO & Display
title: "Claude Skills: La Guía Completa para Personalizar Flujos de Trabajo con IA"
description: "Aprende qué son los Claude Skills, cómo funcionan y cómo crear los tuyos. Desde configuración básica hasta skills personalizados avanzados con scripts y plantillas."

# Author
author: "AIPaths Academy"

# Publication dates (ISO 8601 format)
publishedAt: "2025-12-01T10:00:00Z"
updatedAt: "2025-12-01T10:00:00Z"

# Cover image
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/docs/011_claude-skills-guide/hero.jpg"

# Tags (canonical lowercase English IDs)
# IMPORTANT: Both EN/ES versions MUST have IDENTICAL tags
tags:
  - claude
  - tutorial
  - productivity
  - automation
  - workflows
---

Los Skills son una de las funcionalidades más poderosas de Claude—sin embargo, la mayoría de los usuarios no saben que existen.

Piensa en los Skills como "modos" especializados que Claude puede activar cuando los necesita. En lugar de explicar tus preferencias en cada conversación, los Skills te permiten enseñarle a Claude tus flujos de trabajo una vez y hacer que los aplique automáticamente.

Esta guía cubre todo lo que necesitas saber: qué son los Skills, cómo se diferencian de otras funcionalidades de Claude, y cómo crear los tuyos propios.

---

## Tabla de Contenidos

1. [¿Qué Son los Claude Skills?](#qué-son-los-claude-skills)
2. [Skills vs. Otras Funcionalidades de Claude](#skills-vs-otras-funcionalidades-de-claude)
3. [Tipos de Skills](#tipos-de-skills)
4. [Cómo Funcionan los Skills](#cómo-funcionan-los-skills)
5. [Habilitar y Usar Skills](#habilitar-y-usar-skills)
6. [Creando Tu Primer Skill](#creando-tu-primer-skill)
7. [La Estructura del Archivo SKILL.md](#la-estructura-del-archivo-skillmd)
8. [Skills Avanzados con Scripts](#skills-avanzados-con-scripts)
9. [Mejores Prácticas](#mejores-prácticas)
10. [Ejemplos de Skills](#ejemplos-de-skills)

---

## ¿Qué Son los Claude Skills?

Los Skills son carpetas que contienen instrucciones, scripts y recursos que Claude carga dinámicamente cuando son relevantes para tu tarea.

**Características principales:**

- **Activación automática**: Claude decide cuándo usar un Skill basándose en tu solicitud—sin necesidad de selección manual
- **Específicos para tareas**: A diferencia de configuraciones generales, los Skills se activan solo cuando son relevantes
- **Reutilizables**: Crea una vez, usa en cualquier conversación o proyecto
- **Extensibles**: Pueden incluir código ejecutable, plantillas y archivos de referencia

**Casos de uso de ejemplo:**

- Generar informes siguiendo las reglas de formato exactas de tu empresa
- Crear presentaciones con las guías de tu marca
- Analizar datos usando los frameworks específicos de tu organización
- Automatizar tareas repetitivas con scripts personalizados

---

## Skills vs. Otras Funcionalidades de Claude

Entendiendo cuándo usar Skills versus otras opciones de personalización de Claude:

| Funcionalidad | Alcance | Cuándo Se Carga | Mejor Para |
|---------------|---------|-----------------|------------|
| **Instrucciones Personalizadas** | Todas las conversaciones | Siempre activo | Preferencias generales ("sé conciso", "usa comas Oxford") |
| **Proyectos** | Dentro de un proyecto | Al abrir el proyecto | Conocimiento de fondo estático, contexto del proyecto |
| **Skills** | Específico por tarea | Cuando es relevante para la solicitud | Flujos de trabajo especializados, procedimientos repetibles |

**La diferencia clave**: Las Instrucciones Personalizadas son ajustes de personalidad. Los Proyectos proporcionan contexto. Los Skills son procedimientos específicos de tareas con automatización opcional.

---

## Tipos de Skills

### Skills de Anthropic (Integrados)

Skills pre-construidos mantenidos por Anthropic:

- **Creación de Excel**: Generación mejorada de hojas de cálculo
- **Documentos de Word**: Creación de documentos formateados
- **PowerPoint**: Construcción de presentaciones
- **Creación de PDF**: Exportación de documentos

Estos se activan automáticamente cuando solicitas tareas relevantes.

### Skills Personalizados

Skills que tú o tu organización crean:

- **Cumplimiento de marca**: Archivos de logo, códigos de color, plantillas de diseño
- **Documentación técnica**: Guías de notación, estándares de terminología
- **Análisis de feedback de clientes**: Frameworks de categorización, identificación de patrones
- **Notas de reunión**: Formato específico de la empresa, extracción de elementos de acción
- **Preparación de llamadas de ventas**: Investigación de cuentas, generación de puntos de conversación

---

## Cómo Funcionan los Skills

### Divulgación Progresiva

Los Skills usan un sistema de carga ligero:

1. **Escaneo de metadatos** (~100 tokens): Claude lee todos los nombres y descripciones de Skills al inicio
2. **Verificación de relevancia**: Cuando haces una solicitud, Claude la compara con las descripciones de Skills
3. **Carga completa** (&lt;5k tokens): Solo las instrucciones completas del Skill relevante se cargan
4. **Acceso a recursos**: Scripts y plantillas se cargan solo según sea necesario

Esto mantiene a Claude rápido mientras habilita capacidades especializadas.

### Invocado por Modelo vs. Invocado por Usuario

**Los Skills son invocados por el modelo**—Claude decide autónomamente cuándo usarlos basándose en:

- El contenido de tu solicitud
- La descripción del Skill
- La relevancia del contexto

Esto difiere de los **comandos slash**, que son invocados por el usuario (tú escribes explícitamente `/comando`).

---

## Habilitar y Usar Skills

### Disponibilidad

Los Skills requieren un plan de pago:

- **Pro**: Acceso completo
- **Max**: Acceso completo
- **Team**: Habilitado por defecto
- **Enterprise**: Requiere habilitación por administrador

### Configuración por Tipo de Plan

**Usuarios Pro/Max:**
1. Ve a Configuración > Capacidades
2. Habilita "Ejecución de código y creación de archivos"
3. Activa los Skills de ejemplo o sube los tuyos

**Planes Team:**
Los Skills están habilitados por defecto. Los miembros individuales pueden activar Skills en Configuración > Capacidades.

**Planes Enterprise:**
1. Los propietarios deben habilitar en Configuración de Admin > Capacidades
2. Habilita tanto "Ejecución de código" como "Skills"
3. Los miembros pueden entonces activar Skills individualmente

### Usando Skills

Una vez habilitados, los Skills funcionan automáticamente. Simplemente haz solicitudes como normalmente:

- "Crea un PowerPoint sobre resultados del Q3" → Se activa el Skill de PowerPoint
- "Formatea este documento con nuestras guías de marca" → Se activa el Skill de Marca (si has creado uno)
- "Analiza este feedback de clientes" → Se activa el Skill de análisis de feedback (si has creado uno)

---

## Creando Tu Primer Skill

### Método 1: Creación Conversacional

La forma más fácil—deja que Claude te ayude:

1. Inicia un nuevo chat
2. Di: "Quiero crear un skill para [tu flujo de trabajo]"
3. Sube materiales relevantes (plantillas, ejemplos, guías)
4. Claude generará la estructura del Skill por ti

**Ejemplo de prompt:**
> "Quiero crear un skill para escribir informes de estado semanales. Aquí hay una plantilla que uso y un ejemplo de un buen informe que escribí."

### Método 2: Creación Manual

Para más control, crea los archivos tú mismo:

1. Crea una carpeta con el nombre de tu Skill
2. Agrega un archivo `SKILL.md` con frontmatter YAML
3. (Opcional) Agrega scripts, plantillas y archivos de referencia

---

## La Estructura del Archivo SKILL.md

Cada Skill necesita un archivo `SKILL.md`. Aquí está la estructura:

```markdown
---
name: nombre-de-tu-skill
description: Breve descripción de lo que hace este Skill y cuándo usarlo
---

# Nombre de Tu Skill

## Instrucciones

Guía clara, paso a paso para Claude.

## Ejemplos

Ejemplos concretos mostrando entrada y salida esperadas.

## Guías

Reglas o restricciones específicas a seguir.
```

### Campos Requeridos

| Campo | Reglas | Ejemplo |
|-------|--------|---------|
| `name` | Solo minúsculas, números, guiones. Máximo 64 caracteres. | `generador-informe-semanal` |
| `description` | Qué hace Y cuándo usarlo. Máximo 1024 caracteres. | `Genera informes de estado semanales formateados cuando el usuario solicita actualizaciones de progreso o resúmenes semanales` |

### Por Qué Importa la Descripción

La descripción es **crítica**—es cómo Claude decide si activar tu Skill. Incluye:

- Qué hace el Skill
- Cuándo Claude debería usarlo
- Palabras o frases clave de activación

**Buena descripción:**
> "Crea presentaciones de revisión de negocio trimestral con resumen ejecutivo, dashboards de KPI y elementos de acción. Usar cuando el usuario solicite QBR, revisión trimestral o presentación de rendimiento del negocio."

**Mala descripción:**
> "Hace presentaciones" (muy vago—Claude no sabrá cuándo activarlo)

---

## Skills Avanzados con Scripts

Los Skills pueden incluir código ejecutable para automatización.

### Estructura de Directorios

```text
mi-skill/
├── SKILL.md          # Instrucciones principales
├── scripts/          # Scripts ejecutables Python/Bash
├── references/       # Documentación cargada en contexto
└── assets/           # Plantillas y archivos binarios
```

### Ejemplo: Skill de Validación de Datos

```text
validador-datos/
├── SKILL.md
├── scripts/
│   └── validate.py
└── references/
    └── reglas-validacion.md
```

**SKILL.md:**
```markdown
---
name: validador-datos
description: Valida datos CSV contra reglas de negocio. Usar cuando el usuario sube archivos de datos para validación o verificaciones de calidad.
---

# Skill de Validación de Datos

## Instrucciones

1. Cuando el usuario sube un CSV, ejecutar scripts/validate.py
2. Parsear la salida de validación
3. Presentar hallazgos en una tabla de resumen clara
4. Sugerir correcciones para cualquier problema encontrado

## Reglas de Validación

Ver references/reglas-validacion.md para el conjunto completo de reglas.
```

### Dónde Se Almacenan los Skills

**Usuarios de Claude Code:**

| Ubicación | Alcance | Ruta |
|-----------|---------|------|
| Skills Personales | Solo tú | `~/.claude/skills/` |
| Skills de Proyecto | Compartidos con el equipo | `.claude/skills/` |

**Usuarios de Claude.ai:**

Sube Skills a través de Configuración > Capacidades.

---

## Mejores Prácticas

### Empieza Simple

Comienza con instrucciones básicas en Markdown antes de agregar scripts. Siempre puedes expandir después.

```markdown
---
name: notas-reunion
description: Formatea notas de reunión con asistentes, decisiones y elementos de acción
---

# Formateador de Notas de Reunión

## Formato

1. **Fecha y Título** arriba
2. **Asistentes** como lista con viñetas
3. **Decisiones Clave** numeradas
4. **Elementos de Acción** con responsables y fechas límite
5. **Próximos Pasos** al final
```

### La Regla 5/10

Antes de crear un Skill, pregunta:
- ¿He hecho esta tarea al menos **5 veces**?
- ¿La haré al menos **10 veces más**?

Si es sí, un Skill tiene sentido. Si no, un prompt simple podría ser suficiente.

### Mantén los Skills Enfocados

Crea Skills separados para diferentes flujos de trabajo. Múltiples Skills enfocados componen mejor que un solo Skill grande.

**Bueno:**
- `prep-llamada-ventas`
- `email-seguimiento-ventas`
- `generador-propuesta-ventas`

**Malo:**
- `ventas-todo` (muy amplio, más difícil de mantener)

### Usa Ejemplos

Incluye entradas y salidas de ejemplo en tu SKILL.md:

```markdown
## Ejemplos

### Entrada
"Reunión con Acme Corp sobre renovación Q1"

### Salida
**Notas de Reunión: Renovación Q1 Acme Corp**
*Fecha: [Fecha Actual]*

**Asistentes:**
- [Por llenar]

**Decisiones Clave:**
1. [Decisión 1]
...
```

### Longitud Ideal

- **Skills Iniciales**: &lt;100 líneas
- **Skills Maduros**: 150-400 líneas
- **Máximo**: Mantén bajo 5,000 palabras para evitar abrumar el contexto

---

## Ejemplos de Skills

### 1. Skill de Guías de Marca

```markdown
---
name: cumplimiento-marca
description: Aplica las guías de marca de la empresa a documentos y presentaciones. Usar para cualquier contenido que necesite revisión de marca o formateo.
---

# Skill de Cumplimiento de Marca

## Colores de Marca
- Primario: #1E40AF (Azul)
- Secundario: #10B981 (Verde)
- Acento: #F59E0B (Naranja)

## Tipografía
- Títulos: Inter Bold
- Cuerpo: Inter Regular
- Código: JetBrains Mono

## Guías de Voz
- Profesional pero accesible
- Preferir voz activa
- Evitar jerga a menos que sea audiencia técnica

## Uso de Logo
- Espacio libre mínimo: 20px
- Nunca estirar o distorsionar
- Fondos oscuros: usar versión blanca del logo
```

### 2. Skill de Revisión de Código

```markdown
---
name: revision-codigo
description: Revisa código para mejores prácticas, problemas de seguridad y rendimiento. Usar cuando el usuario comparte código para revisión o pide feedback sobre código.
---

# Skill de Revisión de Código

## Lista de Verificación

### Seguridad
- [ ] Sin secretos hardcodeados
- [ ] Validación de entrada presente
- [ ] Prevención de inyección SQL
- [ ] Protección XSS

### Rendimiento
- [ ] Sin loops innecesarios
- [ ] Estructuras de datos eficientes
- [ ] Caché apropiado donde aplique

### Mantenibilidad
- [ ] Convenciones de nombres claras
- [ ] Comentarios apropiados
- [ ] Funciones bajo 50 líneas
- [ ] Principio de responsabilidad única

## Formato de Salida
Proporcionar revisión como:
1. **Resumen**: Evaluación general en una línea
2. **Problemas Críticos**: Debe arreglar antes de merge
3. **Sugerencias**: Mejoras deseables
4. **Notas Positivas**: Lo que está bien hecho
```

### 3. Skill de Plantilla de Email

```markdown
---
name: email-cliente
description: Genera emails de comunicación con clientes siguiendo plantillas de la empresa. Usar para respuestas de soporte, actualizaciones o anuncios.
---

# Skill de Email a Cliente

## Estructura
1. Saludo personalizado
2. Reconocer su situación
3. Proporcionar solución/información
4. Próximos pasos (si los hay)
5. Cierre cálido

## Tono
- Empático y servicial
- Confiado pero no arrogante
- Conciso—respeta su tiempo

## Plantillas

### Respuesta de Soporte
Asunto: Re: [Su Asunto]

Hola [Nombre],

Gracias por contactarnos sobre [resumen del problema].

[Solución/explicación en 2-3 oraciones]

[Próximos pasos si es necesario]

¡Avísame si tienes alguna pregunta!

Saludos,
[Tu Nombre]
```

---

## Nota de Seguridad

Los Skills pueden ejecutar código arbitrario en el entorno de Claude. Solo instala Skills de fuentes confiables.

Antes de usar un Skill de terceros:
- Revisa el SKILL.md y cualquier script
- Verifica llamadas de red o acceso a archivos sospechosos
- Prefiere Skills del repositorio oficial de Anthropic

---

## Recursos

- [Documentación Oficial de Skills](https://docs.claude.com/en/docs/claude-code/skills)
- [Repositorio de Skills de Anthropic](https://github.com/anthropics/skills)
- [Mejores Prácticas de Autoría de Skills](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/best-practices)
- [Centro de Ayuda de Claude - Skills](https://support.claude.com/en/articles/12512176-what-are-skills)

---

## Resumen

Los Claude Skills transforman cómo trabajas con IA:

1. **Los Skills son dinámicos**—se cargan solo cuando se necesitan
2. **Los Skills son poderosos**—pueden incluir scripts, plantillas y materiales de referencia
3. **Los Skills son compartibles**—crea una vez, usa en todas partes

Empieza con un Skill simple para una tarea que haces frecuentemente. A medida que te sientas cómodo, agrega scripts y expande capacidades.

La inversión de crear un Skill rinde dividendos cada vez que Claude aplica automáticamente tu flujo de trabajo exacto—sin necesidad de re-explicar.

## Contenido relacionado

- 📘 [**Prompt Engineering para Claude: Mejores Prácticas**](https://www.aipaths.academy/es/docs/005_prompt-engineering-best-practices) — La base de prompting que necesitás antes de crear Skills avanzados
- 📘 [**Ventana de Contexto de Claude: Guía Completa**](https://www.aipaths.academy/es/docs/002_claude-context-window) — Entendé cómo los Skills interactúan con el contexto disponible
- 📘 [**Context Engineering: La Evolución**](https://www.aipaths.academy/es/docs/012_context-engineering-evolution) — Skills son una forma de context engineering aplicado
- 📝 [**Claude Code vs Cursor**](https://www.aipaths.academy/es/blog/004_claude-code-vs-cursor) — Dónde funcionan mejor los Skills: comparativa de entornos
