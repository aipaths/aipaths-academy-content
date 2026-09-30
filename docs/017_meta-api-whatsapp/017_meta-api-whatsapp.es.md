---
# Identificador semántico único (vincula versiones EN/ES)
content_id: "docs-meta-api-whatsapp"

# Locale
locale: "es"

# SEO & Display
title: "Guía de Meta WhatsApp Business API (2026): Configuración Completa y Requisitos"
description: "Aprende a configurar la API de WhatsApp Business, verificar tu negocio y crear chatbots. Incluye cambios de políticas 2026 y precios."

# Author
author: "AIPaths Academy"

# Publication dates
publishedAt: "2026-01-15T10:00:00Z"
updatedAt: "2026-01-15T10:00:00Z"

# Cover image
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/docs/017_meta-api-whatsapp/hero.jpg"

# Tags
tags: ["guide", "whatsapp", "api", "automation", "n8n", "chatbot"]
---

# Guía de Meta WhatsApp Business API (2026)

La API de Meta WhatsApp Business permite a las empresas enviar mensajes automatizados, crear chatbots y comunicarse con clientes a escala a través de WhatsApp. El acceso requiere un **Meta Business Portfolio** (anteriormente Business Manager) que contenga una **WhatsApp Business Account (WABA)** y una **App** que se conecte a la API. Desde 2025, la **Cloud API** es la única opción soportada—la API On-Premises fue descontinuada. Las empresas pueden acceder a la API directamente (requiere conocimientos técnicos) o a través de un **Business Solution Provider (BSP)**. A partir de enero de 2026, los chatbots de IA de propósito general están prohibidos; solo se permiten bots de negocios estructurados.

## Requisitos Previos

Antes de comenzar, necesitarás:

- Una cuenta de Facebook
- Un correo electrónico de empresa
- Un número de teléfono que no esté registrado actualmente en WhatsApp
- Documentos de verificación comercial (nombre legal, dirección, identificación fiscal)
- Tiempo estimado de lectura: 12 minutos

## Conceptos Fundamentales

### ¿Qué es un Meta Business Portfolio?

Un **Meta Business Portfolio** (anteriormente llamado Facebook Business Manager o Meta Business Manager) es tu centro de control para administrar todos los activos comerciales de Meta: páginas de Facebook, cuentas de Instagram, cuentas de WhatsApp Business, cuentas de anuncios y píxeles.

**Puntos clave:**
- Requerido para poseer una WhatsApp Business Account (WABA)
- Separa los activos comerciales de tu perfil personal de Facebook
- Es donde ocurre la verificación del negocio
- Todos los límites de mensajería se aplican a nivel de portfolio, no por números individuales
- Puedes crear hasta 2 portfolios, pero pertenecer a portfolios ilimitados de otros

### ¿Qué es una App en un Business Portfolio?

Una **App** en el ecosistema de Meta es una aplicación de desarrollador registrada en el [Panel de Apps de Meta](https://developers.facebook.com). Sirve como puente entre tu código/sistemas y las APIs de Meta.

**Para WhatsApp específicamente:**
- La App contiene tus credenciales de API y tokens de acceso
- Contiene la configuración del producto "WhatsApp"
- Se conecta a un **System User** (una cuenta no humana que autentica llamadas API 24/7)
- Requiere permisos: `whatsapp_business_management`, `whatsapp_business_messaging`

**Jerarquía:**

```text
Meta Business Portfolio
├── WhatsApp Business Account (WABA)
│   ├── Número de Teléfono 1
│   └── Número de Teléfono 2 (hasta 20)
├── App (en App Dashboard)
│   └── System User + Access Token
└── Otros activos (Páginas, Cuentas de Anuncios, etc.)
```

### ¿Qué es un Tech Provider?

Un **Tech Provider** es una empresa verificada por Meta para construir y ofrecer integraciones de WhatsApp para otros negocios. Meta clasifica a cualquiera que cree apps de negocios de WhatsApp como Tech Provider.

| Aspecto | Tech Provider | Business Solution Provider (BSP) |
|---------|--------------|----------------------------------|
| Puede incorporar clientes | Sí (embedded signup) | Sí |
| Puede llamar la API de Meta | Sí | Sí |
| Puede revender/agregar margen a conversaciones | **No** | Sí |
| Aloja infraestructura | No (usa Cloud API) | Frecuentemente sí |
| Requiere verificación de Meta | Sí | Sí |

**Fecha límite importante:** Todos los ISVs deben inscribirse como Tech Providers antes del **30 de junio de 2025** para continuar ofreciendo servicios de WhatsApp.

## Verificación del Negocio

### ¿Por Qué Verificar?

| Sin Verificación | Con Verificación |
|------------------|------------------|
| Límite de 250-1,000 mensajes/día | Hasta mensajes ilimitados/día |
| Sin insignia azul | Elegible para insignia de Cuenta Comercial Oficial |
| Aprobaciones de templates más lentas | Aprobaciones de templates más rápidas |
| Señales de confianza más bajas | Mayor confianza del cliente |
| Riesgo de estancarse en escalado | Actualizaciones automáticas de nivel basadas en calidad |

### Cómo Verificar

1. Ve a **Meta Business Suite** → **Configuración** → **Centro de Seguridad**
2. Haz clic en **Iniciar Verificación**
3. Proporciona: Nombre legal del negocio, dirección, documentos de registro (Certificado de Constitución, ID Fiscal)
4. Meta revisa (típicamente de unos días a algunas semanas)
5. Los documentos deben coincidir—nombres no coincidentes entre sitio web y documentos legales causan retrasos

### Riesgos de No Verificar

- **Estancado en límites bajos de mensajería**: No puedes escalar campañas
- **Rechazos de templates**: Meta es más estricto con cuentas no verificadas
- **Restricciones de cuenta**: Más difícil apelar si te marcan
- **Sin insignia oficial**: Menor confianza del cliente y tasas de apertura
- **Números limitados**: No puedes expandir más allá de 2 números por WABA

## Capacidades y Limitaciones de la API

### Límites de Mensajería (Niveles)

| Nivel | Usuarios Únicos/24h | Cómo Alcanzarlo |
|-------|---------------------|-----------------|
| Inicial | 250 | Cuentas nuevas/no verificadas |
| Nivel 1 | 1,000 | Después del uso inicial |
| Nivel 2 | 10,000 | Verificado + buena calidad |
| Nivel 3 | 100,000 | Calidad alta sostenida |
| Ilimitado | Sin límite | Verificado + excelente historial |

### Regla de Ventana de 24 Horas

- Cuando un usuario te envía un mensaje, tienes **24 horas** para responder libremente
- Después de 24 horas, **solo** puedes enviar **templates de mensaje** pre-aprobados
- Los templates deben ser aprobados por Meta antes de usarse

### Sistema de Calificación de Calidad

Meta asigna calificaciones de calidad (Alta/Media/Baja) basadas en:
- Bloqueos y reportes de usuarios
- Engagement de mensajes
- Tasas de opt-out

**Baja calidad → límites reducidos, pausas de templates, posible suspensión**

### Precios (2026)

- **Precio por mensaje** (comenzó en julio 2025)
- Categorías: Marketing, Utilidad, Autenticación, Servicio
- **Los mensajes de servicio (iniciados por usuario) son gratis**
- 1,000 conversaciones gratis/mes por WABA
- Las tarifas varían según el país del destinatario, no tu ubicación

## Qué Necesitas para Construir un Chatbot de WhatsApp

### Componentes Requeridos

| Componente | Descripción |
|------------|-------------|
| **Meta Business Portfolio** | Cuenta verificada en business.facebook.com |
| **WhatsApp Business Account (WABA)** | Creada dentro de tu portfolio |
| **Número de Teléfono** | Número nuevo no activo en ningún WhatsApp |
| **Meta App** | Registrada en developers.facebook.com |
| **System User + Token** | Para autenticar llamadas API |
| **Webhook Endpoint** | Servidor para recibir mensajes entrantes |
| **Verificación del Negocio** | Para escalar más allá de límites de prueba |

### Dos Caminos de Acceso

**1. Directo (Cloud API)**
- Acceso gratis a la infraestructura de Meta
- Tú construyes: inbox, automatización, manejo de errores, analytics
- Requiere recursos de desarrollo
- Control total, sin fees de margen

**2. A través de BSP (ej. Twilio, 360dialog)**
- Configuración más rápida, infraestructura administrada
- Dashboards y herramientas pre-construidas
- Fees de plataforma adicionales sobre las tarifas de Meta
- Menos carga técnica

## Pasos Rápidos de Configuración

### Crear un Business Portfolio

1. Ve a [business.facebook.com](https://business.facebook.com)
2. Inicia sesión con tu cuenta personal de Facebook
3. Haz clic en **Crear Cuenta** → Ingresa nombre del negocio y email
4. Confirma el email de Meta
5. Completa la **Verificación del Negocio** en Centro de Seguridad

### Crear una App

1. Ve a [developers.facebook.com](https://developers.facebook.com)
2. Haz clic en **Mis Apps** → **Crear App**
3. Selecciona tipo **Business** → Conecta a tu portfolio
4. Agrega el producto **WhatsApp** a tu app
5. Crea un **System User** en Configuración del Negocio → Usuarios → System Users
6. Asigna el System User a tu App y WABA
7. Genera un token de acceso permanente

### Conectar un Número de Teléfono

1. En App Dashboard → WhatsApp → **Comenzar**
2. Agrega un número de teléfono (no debe estar en WhatsApp ya)
3. Verifica vía SMS o llamada de voz
4. Establece tu nombre de visualización (debe coincidir con el nombre del negocio verificado)

## Casos de Uso: Permitidos vs. Prohibidos

| Caso de Uso | Estado | Notas |
|-------------|--------|-------|
| Bots de soporte al cliente | Permitido | Uso principal previsto |
| Confirmaciones de pedidos y actualizaciones de envío | Permitido | Mensajes de utilidad |
| Recordatorios de citas | Permitido | Mensajes de utilidad |
| OTP / Autenticación 2FA | Permitido | Categoría de autenticación |
| Recomendaciones de productos (con opt-in) | Permitido | Marketing con consentimiento |
| Sistemas de reservas y turnos | Permitido | Interacciones estructuradas |
| Bots de FAQ | Permitido | Q&amp;A específico del negocio |
| Catálogos de e-commerce | Permitido | Función nativa de WhatsApp |
| **Asistentes de IA de propósito general** | Prohibido (Ene 2026) | Conversaciones abiertas tipo ChatGPT |
| Spam / marketing no solicitado | Prohibido | Resultará en ban |
| Contenido adulto / servicios de citas | Prohibido | Violación de políticas |
| Apuestas / lotería | Prohibido | Restricciones de verticales reguladas |
| Armas, drogas, bienes ilegales | Prohibido | Ban permanente |
| Bots de trading de criptomonedas | Restringido | Regiones limitadas, reglas estrictas |
| Promociones de alcohol | Restringido | Con restricción de edad, cumplimiento regional |

## Puntos Clave

1. **Comienza con Cloud API**: On-Premises está descontinuado; Cloud API es gratis y más fácil
2. **Verifica tu negocio temprano**: Las cuentas no verificadas están severamente limitadas
3. **La calidad importa**: Calificaciones bajas de calidad pueden suspender tu cuenta
4. **Sin chatbots de IA general**: Desde enero 2026, solo se permiten bots de negocios estructurados
5. **Los templates son requeridos**: Después de 24 horas, solo puedes enviar templates pre-aprobados
6. **Los BSPs simplifican la configuración**: Considera un BSP si careces de recursos técnicos

## Fuentes y Lectura Adicional

- [WhatsApp Business Policy](https://business.whatsapp.com/policy) - Documentación oficial de políticas
- [Meta Tech Provider Program](https://www.infobip.com/docs/whatsapp/tech-provider-program) - Guía de configuración de Tech Provider
- [WhatsApp Business API Pricing 2026](https://flowcall.co/blog/whatsapp-business-api-pricing-2026) - Desglose de precios actual
- [WhatsApp API Compliance Guide](https://gmcsco.com/your-simple-guide-to-whatsapp-api-compliance-2026/) - Requisitos de cumplimiento
- [General-Purpose Chatbot Ban Explained](https://respond.io/blog/whatsapp-general-purpose-chatbots-ban) - Cambios de política de IA 2026
- [Meta Tech Provider Verification](https://learn.rasayel.io/en/blog/meta-tech-provider-verification/) - Qué significa el estatus de Tech Provider
- [What is a Meta Business Portfolio](https://tj21.com/what-is-a-meta-business-portfolio-and-why-its-critical-for-managing-facebook-instagram-whatsapp-ads-and-data/) - Explicación de Portfolio
- [WhatsApp Business Manager Setup](https://www.wati.io/en/blog/meta-business-suite-whatsapp/) - Mejores prácticas de configuración
- [WABA Structure Explained](https://docs.360dialog.com/docs/waba-basics/onboarding-guide-summary) - Jerarquía de cuentas
- [WhatsApp Cloud API Guide](https://www.kommunicate.io/blog/all-about-whatsapp-cloud-api/) - Descripción general de Cloud API

## Contenido relacionado

- 📘 [**Guía Completa de n8n para Principiantes**](https://www.aipaths.academy/es/docs/014_n8n-complete-beginners-guide) — Automatizá WhatsApp con n8n: la combinación más popular
- 📝 [**API de WhatsApp Business: Cambios de Política 2026**](https://www.aipaths.academy/es/blog/015_meta-whatsapp-api-2026-policy) — Los cambios regulatorios que afectan cómo usás la API
- 📘 [**Agentes de IA en 2026: Guía Completa**](https://www.aipaths.academy/es/docs/022_agentes-ia-guia-completa-2026) — Conectá agentes de IA a WhatsApp para atención automatizada
