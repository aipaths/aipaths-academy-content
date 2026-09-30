---
# Unique semantic identifier (links EN/ES versions)
content_id: "docs-github-basics-beginners"

# Locale
locale: "es"

# SEO & Display
title: "Fundamentos de GitHub: Guía para Principiantes sobre Control de Versiones"
description: "Aprende Git y GitHub desde cero. Guía completa cubriendo repositorios, commits, ramas y flujos de trabajo colaborativos."

# Author
author: "AIPaths Academy"

# Publication dates (ISO 8601 format)
publishedAt: "2025-10-02T00:00:00Z"
updatedAt: "2025-10-02T00:00:00Z"

# Cover image
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/docs/default-hero.jpg"

# Tags (canonical lowercase English IDs)
# IMPORTANT: Both EN/ES versions MUST have IDENTICAL tags
tags:
  - beginner
  - github
  - guide
  - collaboration
---

¿Alguna vez has eliminado código importante por accidente? ¿Sobrescrito un archivo que funcionaba perfectamente? ¿Luchado para colaborar con compañeros en el mismo proyecto sin crear conflictos?

Estos son problemas que todo desarrollador enfrenta—y el control de versiones con GitHub los resuelve todos.

GitHub no es solo "donde vive el código". Es una máquina del tiempo para tus proyectos, una plataforma de colaboración para equipos, y una habilidad esencial para cualquier desarrollador en 2025. Ya sea que trabajes solo o con un equipo global, entender los fundamentos de GitHub transformará cómo construyes software.

**Lo que aprenderás:**
- Qué es GitHub y por qué importa
- Entender los commits: puntos de guardado de tu proyecto
- Trabajar con ramas: espacios seguros de experimentación
- Colaborar con equipos a través de pull requests
- Flujos de trabajo esenciales de GitHub para el desarrollo diario
- Mejores prácticas para evitar errores comunes

**Tiempo de lectura:** 12 minutos
**Nivel de habilidad:** Principiante
**Prerequisitos:** Conocimiento básico de línea de comandos, una cuenta de GitHub (gratis)

## ¿Qué es GitHub?

GitHub es una plataforma basada en la nube para control de versiones y colaboración. Piensa en ella como una combinación de:

- **Dropbox para código**: Almacena tus proyectos en la nube
- **Máquina del tiempo**: Rastrea cada cambio que hayas hecho
- **Hub de colaboración**: Permite a los equipos trabajar juntos sin conflictos
- **Portafolio**: Muestra tu trabajo a empleadores y la comunidad

### GitHub vs. Git: ¿Cuál es la Diferencia?

Esto confunde a muchos principiantes, así que aclaremos:

**Git** = El sistema de control de versiones (el motor)
**GitHub** = Un sitio web/plataforma que aloja repositorios Git (el garaje)

Piensa en Git como la función "Control de cambios" de Microsoft Word, pero infinitamente más poderosa. GitHub es como Google Drive—aloja tus documentos (código) en línea para que otros puedan acceder a ellos.

**Otras plataformas como GitHub:**
- GitLab
- Bitbucket
- SourceForge

Pero GitHub es la más popular, con más de 100 millones de desarrolladores en todo el mundo.

### ¿Por Qué Usar Control de Versiones?

Sin control de versiones:
```
mi-proyecto/
├── app.js
├── app_v2.js
├── app_v2_final.js
├── app_v2_final_ACTUAL.js
└── app_v2_final_ACTUAL_USA_ESTE.js
```

¿Te suena familiar? El control de versiones elimina este caos.

**Beneficios reales:**
1. **Nunca pierdas trabajo**: Cada versión se guarda permanentemente
2. **Experimentación segura**: Prueba nuevas funciones sin romper el código que funciona
3. **Colaboración en equipo**: Múltiples personas trabajan simultáneamente sin conflictos
4. **Revisiones de código**: Los miembros del equipo revisan cambios antes de fusionar
5. **Requisito profesional**: El 99% de los trabajos tecnológicos requieren conocimiento de Git/GitHub

## Prerequisitos y Configuración

Antes de sumergirnos en los conceptos de GitHub, configurémonos.

### Lo Que Necesitarás

**Requerido:**
- Una cuenta de GitHub (gratis): [github.com/signup](https://github.com/signup)
- Git instalado en tu computadora
- Una aplicación de terminal/línea de comandos
- 20 minutos para completar la configuración

**Opcional pero Recomendado:**
- VS Code u otro editor de código
- GitHub Desktop (alternativa GUI a la línea de comandos)

### Instalando Git

**macOS:**
```bash
# Verifica si ya está instalado
git --version

# Si no está instalado, usa Homebrew
brew install git
```

**Windows:**
Descarga desde [git-scm.com](https://git-scm.com/download/win) o usa:
```bash
# Usando winget
winget install Git.Git
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get update
sudo apt-get install git
```

### Configurando Git

Después de la instalación, dile a Git quién eres:

```bash
# Establece tu nombre (aparece en commits)
git config --global user.name "Tu Nombre"

# Establece tu email (debe coincidir con el email de GitHub)
git config --global user.email "tu.email@ejemplo.com"

# Verifica la configuración
git config --list
```

> **Nota**: Usa el mismo email con el que te registraste en GitHub. Esto vincula tus commits a tu perfil de GitHub.

### Creando Tu Primer Repositorio

Creemos un repositorio de práctica:

**Opción 1: En GitHub (Recomendado para principiantes)**

1. Ve a [github.com](https://github.com)
2. Haz clic en el ícono "+" → "Nuevo repositorio"
3. Nómbralo `mi-primer-repo`
4. Agrega una descripción: "Aprendiendo lo básico de GitHub"
5. Marca "Agregar un archivo README"
6. Haz clic en "Crear repositorio"

**Opción 2: Desde Tu Computadora**

```bash
# Crea un nuevo directorio
mkdir mi-primer-repo
cd mi-primer-repo

# Inicializa el repositorio Git
git init

# Crea un archivo README
echo "# Mi Primer Repositorio" > README.md

# Agrega y haz commit
git add README.md
git commit -m "Commit inicial"

# Conecta a GitHub (después de crear repo en GitHub)
git remote add origin https://github.com/TU_USUARIO/mi-primer-repo.git
git push -u origin main
```

## Entendiendo los Commits: Puntos de Guardado

Los commits son la base de Git. Piensa en ellos como "puntos de guardado" en un videojuego—siempre puedes volver a cualquier estado anterior.

### ¿Qué es un Commit?

Un commit es una instantánea de tu proyecto en un momento específico. Registra:
- **Qué cambió**: Qué archivos fueron modificados, agregados o eliminados
- **Quién lo cambió**: Nombre y email del autor
- **Cuándo**: Marca de tiempo
- **Por qué**: Mensaje de commit explicando los cambios

### Anatomía de un Commit

```bash
commit a3f4d8e9b2c1f6e7d8a9b0c1d2e3f4g5h6i7j8k9
Author: Jane Doe <jane@ejemplo.com>
Date:   Wed Nov 6 10:30:45 2025 -0500

    Agregar función de autenticación de usuario

    - Implementar formulario de login
    - Agregar hash de contraseñas
    - Crear gestión de sesiones
```

**Desglosándolo:**
- **Hash**: Identificador único (como una huella digital)
- **Author**: Quién hizo el cambio
- **Date**: Cuándo se hizo
- **Message**: Por qué se hizo el cambio

### Creando Tu Primer Commit

```bash
# 1. Verifica el estado de tu proyecto
git status

# 2. Crea o modifica un archivo
echo "¡Hola, GitHub!" > hola.txt

# 3. Verifica el estado nuevamente (verás "archivo sin seguimiento")
git status

# 4. Prepara el archivo (prepáralo para commit)
git add hola.txt

# 5. Haz commit con un mensaje
git commit -m "Agregar hola.txt con saludo"

# 6. Ve el historial de commits
git log
```

### Los Tres Estados de Git

Entender estos estados es crucial:

```
Directorio de Trabajo → Área de Preparación → Repositorio
    (modificado)            (preparado)         (confirmado)
```

1. **Directorio de Trabajo**: Donde editas archivos
2. **Área de Preparación**: Archivos listos para ser confirmados (usa `git add`)
3. **Repositorio**: Commits guardados permanentemente (usa `git commit`)

**Ejemplo práctico:**

```bash
# Edita un archivo
echo "Más contenido" >> hola.txt

# Verifica qué cambió
git status
# Salida: Cambios no preparados para commit

# Prepara el cambio
git add hola.txt

# Verifica de nuevo
git status
# Salida: Cambios a ser confirmados

# Haz commit
git commit -m "Agregar más contenido a hola.txt"
```

### Escribiendo Buenos Mensajes de Commit

**Mensajes de commit malos:**
- ❌ "Actualización"
- ❌ "Arreglar cosas"
- ❌ "asdfasdf"
- ❌ "Cambios de ayer"

**Mensajes de commit buenos:**
- ✅ "Agregar formulario de login de usuario"
- ✅ "Corregir bug en procesamiento de pagos"
- ✅ "Actualizar documentación de API"
- ✅ "Refactorizar lógica de conexión a base de datos"

**Mejores prácticas:**
1. **Usa modo imperativo**: "Agregar función" no "Agregada función"
2. **Sé específico**: Di qué hiciste y por qué
3. **Mantén la primera línea bajo 50 caracteres**
4. **Agrega detalles en el cuerpo si es necesario**

**Ejemplo de mensaje de commit detallado:**

```bash
git commit -m "Agregar funcionalidad de reseteo de contraseña

- Crear endpoint de solicitud de reseteo de contraseña
- Implementar envío de email con token de reseteo
- Agregar expiración de token (24 horas)
- Crear página de confirmación de reseteo de contraseña

Resuelve issue #142"
```

### Comandos Comunes de Commit

```bash
# Ver historial de commits
git log

# Ver historial compacto
git log --oneline

# Ver cambios en el último commit
git show

# Ver cambios antes de hacer commit
git diff

# Deshacer cambios en directorio de trabajo
git checkout -- nombrearchivo.txt

# Deshacer preparación de archivo (mantener cambios)
git reset HEAD nombrearchivo.txt

# Modificar último commit (corregir mensaje o agregar archivos)
git commit --amend -m "Nuevo mensaje"
```

> **Advertencia**: Nunca modifiques commits que han sido enviados a ramas compartidas. Esto reescribe el historial y puede causar problemas a los colaboradores.

## Entendiendo las Ramas: Experimentación Segura

Las ramas son una de las características más poderosas de Git. Te permiten trabajar en nuevas funciones sin afectar la base de código principal.

### ¿Qué es una Rama?

Piensa en las ramas como universos paralelos para tu código:

```
rama main:      A---B---C---D---E (código de producción)
                     \
rama feature:         F---G---H (nueva función en desarrollo)
```

**La rama main/master:**
- Rama por defecto en cada repositorio
- Usualmente contiene código listo para producción
- Protegida en entornos de equipo

### ¿Por Qué Usar Ramas?

**Escenario sin ramas:**
Estás construyendo una nueva función. A mitad del camino, aparece un bug crítico en producción. Necesitas arreglarlo AHORA, pero tu código está a medio terminar y roto.

**Escenario con ramas:**
Tu nueva función está en una rama separada. Cambias a `main`, arreglas el bug, lo despliegas, luego vuelves a tu rama de función y continúas trabajando.

### Creando y Usando Ramas

```bash
# Ver todas las ramas (* indica rama actual)
git branch

# Crear una nueva rama
git branch feature/agregar-login

# Cambiar a la nueva rama
git checkout feature/agregar-login

# Crear y cambiar en un comando (recomendado)
git checkout -b feature/agregar-login

# Hacer cambios y commit
echo "Formulario de login" > login.html
git add login.html
git commit -m "Agregar formulario de login"

# Volver a la rama main
git checkout main

# Ver todas las ramas con último commit
git branch -v
```

### Convenciones de Nomenclatura de Ramas

Los equipos profesionales usan nomenclatura consistente:

**Patrones comunes:**
- `feature/descripcion` - Nuevas funciones
- `bugfix/descripcion` - Correcciones de bugs
- `hotfix/descripcion` - Arreglos urgentes de producción
- `docs/descripcion` - Cambios de documentación
- `refactor/descripcion` - Mejoras de código

**Ejemplos:**
- ✅ `feature/autenticacion-usuario`
- ✅ `bugfix/validacion-login`
- ✅ `hotfix/crash-pagos`
- ✅ `docs/endpoints-api`
- ❌ `mi-rama`
- ❌ `prueba`
- ❌ `cosas-nuevas`

### Fusionando Ramas

Una vez que tu función está completa, fusionala de vuelta a main:

```bash
# Cambia a la rama en la que quieres fusionar
git checkout main

# Fusiona la rama de función
git merge feature/agregar-login

# Elimina la rama de función (limpieza)
git branch -d feature/agregar-login
```

### Manejando Conflictos de Fusión

Los conflictos ocurren cuando las mismas líneas de código son modificadas en diferentes ramas.

**Ejemplo de conflicto:**

```bash
# Obtienes un conflicto de fusión
git merge feature/agregar-login

# Git te dice:
CONFLICT (content): Conflicto de fusión en app.js
La fusión automática falló; arregla los conflictos y luego haz commit del resultado.
```

**Conflicto en archivo:**

```javascript
function saludar() {
<<<<<<< HEAD
    return "¡Hola, Mundo!";
=======
    return "¡Hola, que tal!";
>>>>>>> feature/agregar-login
}
```

**Cómo resolver:**

1. Abre el archivo en tu editor
2. Decide qué versión mantener (o combina ambas)
3. Elimina los marcadores de conflicto (`<<<<<<<`, `=======`, `>>>>>>>`)
4. Guarda el archivo
5. Prepara y haz commit

```bash
# Después de resolver conflictos manualmente
git add app.js
git commit -m "Fusionar feature/agregar-login - resolver conflicto de saludo"
```

### Flujos de Trabajo de Ramas

**Flujo simple (desarrollador solo):**

```bash
main → feature/cosa-nueva → fusionar de vuelta a main
```

**Flujo de equipo (más complejo):**

```bash
main (producción)
  └── develop (integración)
        ├── feature/login
        ├── feature/pagos
        └── bugfix/estilo-header
```

### Comandos Comunes de Ramas

```bash
# Listar todas las ramas
git branch

# Listar ramas remotas
git branch -r

# Listar todas las ramas (locales + remotas)
git branch -a

# Crear rama
git branch feature/mi-funcion

# Cambiar ramas
git checkout feature/mi-funcion

# Crear y cambiar
git checkout -b feature/mi-funcion

# Renombrar rama actual
git branch -m nuevo-nombre-rama

# Eliminar rama (seguro - previene eliminar trabajo no fusionado)
git branch -d feature/mi-funcion

# Forzar eliminación de rama (¡usa con cuidado!)
git branch -D feature/mi-funcion

# Fusionar rama en rama actual
git merge feature/mi-funcion

# Ver ramas fusionadas
git branch --merged

# Ver ramas no fusionadas
git branch --no-merged
```

## Colaboración en Equipo: Trabajando Juntos

GitHub transforma Git de una herramienta individual en una plataforma de colaboración. Así es como los equipos trabajan juntos.

### Clonando Repositorios

Al unirte a un proyecto, clonarás (descargarás) el repositorio:

```bash
# Clonar un repositorio
git clone https://github.com/usuario/repositorio.git

# Clonar en una carpeta específica
git clone https://github.com/usuario/repositorio.git mi-carpeta

# Clonar y navegar dentro
git clone https://github.com/usuario/repositorio.git && cd repositorio
```

### Enviando y Descargando Cambios

**Push**: Subir tus commits a GitHub
**Pull**: Descargar commits desde GitHub

```bash
# Enviar commits a GitHub
git push origin main

# Enviar una nueva rama
git push -u origin feature/mi-funcion

# Descargar últimos cambios
git pull origin main

# Obtener cambios sin fusionar
git fetch origin
```

### El Flujo de Trabajo Completo del Equipo

**1. Comienza con el código más reciente:**

```bash
git checkout main
git pull origin main
```

**2. Crea una rama de función:**

```bash
git checkout -b feature/agregar-pasarela-pago
```

**3. Haz cambios y commit:**

```bash
# Haz cambios a archivos
git add .
git commit -m "Agregar integración de pago con Stripe"
```

**4. Envía tu rama:**

```bash
git push -u origin feature/agregar-pasarela-pago
```

**5. Crea un Pull Request en GitHub:**
- Ve a tu repositorio en GitHub
- Haz clic en "Comparar & pull request"
- Agrega descripción de los cambios
- Solicita revisores
- Envía

**6. El equipo revisa tu código:**
- Los revisores comentan en tu código
- Solicitan cambios si es necesario
- Haces actualizaciones y envías de nuevo

**7. Fusiona cuando esté aprobado:**
- Una vez aprobado, fusiona vía interfaz de GitHub
- Elimina la rama de función

**8. Actualiza tu repositorio local:**

```bash
git checkout main
git pull origin main
git branch -d feature/agregar-pasarela-pago
```

### Pull Requests: Revisión de Código Fácil

Los pull requests (PRs) son la forma de GitHub de decir "Tengo cambios, por favor revísalos."

**Qué incluye un PR:**
- Tus cambios (vista diff)
- Historial de commits
- Hilo de discusión
- Estado de revisión
- Estado de fusión

**Creando un buen PR:**

**Título:**
✅ "Agregar autenticación de usuario con tokens JWT"
❌ "Actualización"

**Plantilla de descripción:**

```markdown
## ¿Qué hace este PR?
Agrega autenticación basada en JWT a la API

## Cambios realizados:
- Implementar endpoints de login/logout
- Agregar generación de token JWT
- Crear middleware de autenticación
- Actualizar modelo de usuario

## Cómo probar:
1. Iniciar el servidor: `npm start`
2. POST a `/api/login` con credenciales
3. Verificar que se devuelve el token

## Capturas de pantalla:
[Adjuntar imágenes relevantes]

## Issues relacionados:
Cierra #123
```

### Mejores Prácticas de Revisión

**Como revisor:**
- ✅ Sé constructivo: "Considera usar const en lugar de let aquí"
- ❌ No seas grosero: "Este código es terrible"
- ✅ Explica por qué: "Esto podría causar fugas de memoria porque..."
- ✅ Haz preguntas: "¿Por qué elegiste este enfoque?"

**Como autor:**
- No tomes la crítica personalmente
- Pide aclaraciones si no estás seguro
- Haz los cambios solicitados rápidamente
- Agradece a los revisores por su tiempo

## Flujos de Trabajo Comunes de GitHub

Pongámoslo todo junto con escenarios del mundo real.

### Flujo de Trabajo 1: Desarrollador Solo

```bash
# 1. Comienza una nueva función
git checkout -b feature/modo-oscuro

# 2. Trabaja en la función (repite según necesites)
# ... edita archivos ...
git add .
git commit -m "Agregar botón de alternancia de modo oscuro"

# 3. Más trabajo
# ... edita archivos ...
git add .
git commit -m "Implementar estilos de modo oscuro"

# 4. Función completa - fusionar a main
git checkout main
git merge feature/modo-oscuro

# 5. Enviar a GitHub
git push origin main

# 6. Limpieza
git branch -d feature/modo-oscuro
```

### Flujo de Trabajo 2: Miembro del Equipo en Proyecto Existente

```bash
# 1. Clonar el repositorio (solo la primera vez)
git clone https://github.com/equipo/proyecto.git
cd proyecto

# 2. Siempre empieza con el código más reciente
git checkout main
git pull origin main

# 3. Crear rama de función
git checkout -b feature/pagina-perfil-usuario

# 4. Hacer cambios y commit regularmente
git add .
git commit -m "Crear componente de perfil de usuario"

# 5. Enviar rama a GitHub
git push -u origin feature/pagina-perfil-usuario

# 6. Crear Pull Request en GitHub
# (Usar interfaz web de GitHub)

# 7. Hacer cambios basados en revisión
# ... editar archivos basado en feedback ...
git add .
git commit -m "Atender feedback de revisión - agregar validación"
git push origin feature/pagina-perfil-usuario

# 8. Después de que el PR sea fusionado, limpiar
git checkout main
git pull origin main
git branch -d feature/pagina-perfil-usuario
```

### Flujo de Trabajo 3: Arreglando un Bug en Producción

```bash
# 1. Obtener código de producción más reciente
git checkout main
git pull origin main

# 2. Crear rama hotfix
git checkout -b hotfix/arreglar-crash-login

# 3. Arreglar el bug
# ... editar archivos ...
git add .
git commit -m "Corregir error de puntero nulo en manejador de login"

# 4. Enviar y crear PR
git push -u origin hotfix/arreglar-crash-login
# Crear PR en GitHub para revisión rápida

# 5. Después de fusionar, actualizar local
git checkout main
git pull origin main
git branch -d hotfix/arreglar-crash-login
```

## Hoja de Trucos de Comandos Esenciales de Git

### Configuración de Repositorio

```bash
git init                    # Inicializar nuevo repositorio
git clone <url>             # Clonar repositorio existente
```

### Comandos Básicos

```bash
git status                  # Verificar estado actual
git add <archivo>           # Preparar archivo específico
git add .                   # Preparar todos los cambios
git commit -m "mensaje"     # Confirmar cambios preparados
git log                     # Ver historial de commits
git log --oneline           # Historial compacto
```

### Ramas

```bash
git branch                  # Listar ramas
git branch <nombre>         # Crear rama
git checkout <nombre>       # Cambiar rama
git checkout -b <nombre>    # Crear y cambiar
git merge <rama>            # Fusionar rama
git branch -d <nombre>      # Eliminar rama
```

### Operaciones Remotas

```bash
git remote add origin <url> # Agregar repositorio remoto
git push origin <rama>      # Enviar a remoto
git pull origin <rama>      # Descargar desde remoto
git fetch origin            # Obtener sin fusionar
```

### Deshaciendo Cambios

```bash
git checkout -- <archivo>   # Descartar cambios de trabajo
git reset HEAD <archivo>    # Deshacer preparación de archivo
git revert <commit>         # Crear nuevo commit que deshace cambios
git reset --hard <commit>   # Resetear a commit específico (¡peligroso!)
```

### Comandos Útiles

```bash
git diff                    # Mostrar cambios no preparados
git diff --staged           # Mostrar cambios preparados
git stash                   # Guardar cambios temporalmente
git stash pop               # Restaurar cambios guardados
git tag v1.0.0              # Crear etiqueta de versión
```

## Mejores Prácticas para Principiantes

### 1. Haz Commit Seguido, Envía Regularmente

**Buen hábito:**
- Haz commit de cada cambio lógico
- Envía al menos una vez al día
- No esperes hasta que "todo sea perfecto"

**¿Por qué?**
- Los commits pequeños son más fáciles de revisar
- No puedes perder trabajo que está enviado
- El equipo se mantiene actualizado sobre el progreso

### 2. Escribe Mensajes de Commit Significativos

**Plantilla:**
```
[Tipo] Descripción corta (50 caracteres o menos)

Explicación más detallada si es necesaria (ajusta a 72 caracteres)

- Los puntos son válidos
- Incluye contexto sobre POR QUÉ, no solo QUÉ

Relacionado con issue #123
```

**Tipos:**
- `feat:` Nueva función
- `fix:` Corrección de bug
- `docs:` Cambio de documentación
- `style:` Formato, sin cambio de código
- `refactor:` Reestructuración de código
- `test:` Agregar pruebas
- `chore:` Tareas de mantenimiento

### 3. Mantén la Rama Main Estable

**Reglas:**
- Nunca hagas commit directamente a `main` en proyectos de equipo
- Siempre usa ramas de función
- Solo fusiona código probado y revisado
- `main` siempre debe ser desplegable

### 4. Descarga Antes de Enviar

**Siempre haz esto:**
```bash
git pull origin main    # Obtener últimos cambios
# ... resolver cualquier conflicto ...
git push origin main    # Enviar tus cambios
```

**Previene:**
- Conflictos de fusión
- Envíos rechazados
- Sobrescribir trabajo de compañeros

### 5. Revisa Tus Cambios Antes de Hacer Commit

```bash
# Verifica qué estás por confirmar
git status
git diff

# Prepara archivos
git add .

# Verifica cambios preparados
git diff --staged

# Si todo se ve bien
git commit -m "Tu mensaje"
```

### 6. No Hagas Commit de Información Sensible

**Nunca hagas commit de:**
- Contraseñas o claves API
- Credenciales de base de datos
- Claves privadas o certificados
- Archivos `.env` con secretos

**Usa `.gitignore`:**

```bash
# Crear archivo .gitignore
cat > .gitignore << EOF
.env
.env.local
*.log
node_modules/
*.key
*.pem
config/secretos.json
EOF

git add .gitignore
git commit -m "Agregar .gitignore para archivos sensibles"
```

### 7. Aprende a Leer Mensajes de Git

Git te dice qué está pasando:

```bash
On branch main
Your branch is ahead of 'origin/main' by 2 commits.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```

**Traducción:** Tienes 2 commits que no están en GitHub todavía. Ejecuta `git push`.

## Problemas Comunes y Soluciones

### Problema 1: "Fatal: No es un repositorio git"

**Causa:** No estás en una carpeta inicializada con Git

**Solución:**
```bash
# Verifica directorio actual
pwd

# Navega al directorio correcto
cd /ruta/a/tu/proyecto

# O inicializa Git aquí
git init
```

### Problema 2: "Permiso denegado (publickey)"

**Causa:** Claves SSH no configuradas con GitHub

**Solución:**
```bash
# Usa HTTPS en lugar de SSH por ahora
git remote set-url origin https://github.com/usuario/repo.git

# O configura claves SSH (recomendado a largo plazo)
ssh-keygen -t ed25519 -C "tu.email@ejemplo.com"
# Agrega la clave a GitHub: Configuración → Claves SSH → Nueva clave SSH
```

### Problema 3: "Tu rama está detrás de 'origin/main'"

**Causa:** El remoto tiene commits que no tienes localmente

**Solución:**
```bash
# Descargar los últimos cambios
git pull origin main

# Si tienes cambios locales, guárdalos primero
git stash
git pull origin main
git stash pop
```

### Problema 4: "Conflicto de fusión en archivo"

**Causa:** Las mismas líneas modificadas en dos ramas

**Solución:**
1. Abre el archivo conflictivo
2. Busca marcadores de conflicto (`<<<<<<<`, `=======`, `>>>>>>>`)
3. Elige qué versión mantener
4. Elimina marcadores de conflicto
5. Guarda archivo
6. `git add &lt;archivo&gt;`
7. `git commit -m "Resolver conflicto de fusión"`

### Problema 5: "Falló enviar algunas refs"

**Causa:** El remoto tiene commits que necesitas descargar primero

**Solución:**
```bash
# Descargar y fusionar
git pull origin main

# O descargar con rebase (historial más limpio)
git pull --rebase origin main

# Luego enviar
git push origin main
```

### Problema 6: Commit en Rama Incorrecta

**Causa:** Olvidaste crear/cambiar a rama de función

**Solución:**
```bash
# ¡No envíes todavía! Deshaz el commit, mantén cambios
git reset HEAD~1

# Crea rama correcta
git checkout -b feature/mi-funcion

# Haz commit de nuevo
git add .
git commit -m "Agregar función en rama correcta"
```

## Próximos Pasos

¡Ahora entiendes los fundamentos de GitHub! Aquí está cómo subir de nivel:

### Práctica Inmediata

**Día 1-3: Práctica individual**
1. Crea un repositorio de proyecto personal
2. Haz 10+ commits practicando buenos mensajes
3. Crea 3+ ramas y fusiónalas
4. Envía a GitHub y explora la interfaz web

**Día 4-7: Aprende más funciones**
1. Explora GitHub Issues (seguimiento de tareas)
2. Prueba GitHub Actions (automatización)
3. Marca con estrella repositorios que te gusten
4. Lee código de otros desarrolladores

**Semana 2+: Contribuye a proyectos**
1. Encuentra proyectos de código abierto amigables para principiantes
2. Haz fork de un repositorio
3. Haz una pequeña mejora
4. Envía tu primer Pull Request

### Recursos para Aprendizaje Continuo

**Tutoriales interactivos:**
- [GitHub Skills](https://skills.github.com/) - Cursos interactivos
- [Learn Git Branching](https://learngitbranching.js.org/) - Juego visual
- [Git Immersion](https://gitimmersion.com/) - Laboratorios prácticos

**Documentación:**
- [GitHub Docs](https://docs.github.com/) - Documentación oficial
- [Pro Git Book](https://git-scm.com/book/es/v2) - Guía completa gratuita

**Repositorios de práctica:**
- [First Contributions](https://github.com/firstcontributions/first-contributions) - Practica tu primer PR
- [Contribute to Open Source](https://github.com/danthareja/contribute-to-open-source) - Amigable para principiantes

### ¿Qué Sigue en Tu Viaje con Git?

**Temas intermedios:**
- Git rebase y rebase interactivo
- Cherry-picking de commits
- Git hooks para automatización
- Estrategias avanzadas de fusión
- Git submodules

**Colaboración en equipo:**
- Mejores prácticas de revisión de código
- Integración CI/CD
- Versionado semántico
- Gestión de releases

**Funciones de GitHub:**
- GitHub Actions para CI/CD
- GitHub Projects para gestión de proyectos
- GitHub Wiki para documentación
- GitHub Pages para alojar sitios web

## Conclusión

GitHub es más que solo una herramienta—es la base del desarrollo de software moderno. Al dominar estos fundamentos, has dado un paso crucial en tu viaje como desarrollador.

**Conclusiones clave:**
- Los **Commits** son instantáneas de tu proyecto en puntos específicos en el tiempo
- Las **Ramas** permiten experimentación segura y desarrollo paralelo
- Los **Pull Requests** facilitan la revisión de código y colaboración en equipo
- El **flujo de trabajo de Git** se vuelve natural con práctica diaria
- Las **mejores prácticas** previenen problemas antes de que comiencen

### Recuerda:

1. **Todos fueron principiantes alguna vez** - Incluso los desarrolladores senior tuvieron que aprender Git
2. **Cometerás errores** - ¡Está bien! Git puede deshacer casi cualquier cosa
3. **La práctica hace al maestro** - Cuanto más uses Git, más intuitivo se vuelve
4. **Pide ayuda** - La comunidad de desarrolladores es acogedora con los aprendices

¡Empieza pequeño, haz commit seguido, y no tengas miedo de experimentar. Tú puedes!

---

**¿Preguntas?** ¡Abre un issue o únete a nuestras discusiones de comunidad!

**¿Listo para contribuir?** ¡Revisa proyectos de código abierto amigables para principiantes!

**¿Quieres más?** ¡Síguenos para tutoriales avanzados de Git, flujos de trabajo de GitHub Actions, y estrategias de colaboración en equipo!
