# Mi App - Ionic 8 + Angular 20

Aplicación móvil desarrollada con **Ionic 8** y **Angular 20** usando componentes standalone. Implementa el sistema de diseño **Obsidian** con interfaz oscura de alto contraste y paleta violeta (#7C4DFF).

## Tecnologías

| Tecnología | Versión |
|---|---|
| Ionic Framework | 8.x |
| Angular | 20.x |
| TypeScript | 5.9 |
| Capacitor | 8.x |
| Ionicons | 7.x |
| EmailJS | 4.x |

## Estructura del proyecto

```
src/
  app/
    home/              # Página de inicio
    personal/          # Información personal
    contact/           # Formulario de contacto
    services/
      emailjs.service.ts   # Servicio de envío de correos
    app.component.ts   # Componente raíz con menú lateral
    app.routes.ts      # Configuración de rutas
  environments/
    environment.ts     # Constantes (correo, EmailJS)
    environment.prod.ts
  theme/
    variables.scss     # Variables del tema Obsidian
  global.scss          # Estilos globales
```

## Funcionalidades

### 1. Inicio
- Tarjeta de bienvenida con diseño Obsidian
- Botón de navegación rápida a Información Personal
- Tarjetas destacadas con las secciones de la aplicación

### 2. Información Personal
- Datos de perfil en formato de solo lectura
- Iconos representativos por cada campo
- Avatar decorativo en la cabecera

### 3. Contacto
- Formulario con validación en TypeScript (Reactive Forms)
- Campos: nombre, correo electrónico y mensaje
- Validación de campos (requerido, formato email, longitud mínima)
- Envío real mediante **EmailJS** al correo configurado
- Indicador de carga durante el envío
- Manejo de errores con mensaje al usuario
- Pantalla de confirmación al enviar

## Diseño Obsidian

El sistema visual usa una paleta oscura y contrastes pronunciados:

```
Color primario:  #7C4DFF (Deep Purple)
Fondo principal: #0F111A (Midnight)
Fondo de items:  #1A1C26 (Steel Gray)
Texto:           #F4F4F9 (Off White)
```

- `border-radius: 16px` en tarjetas y contenedores
- Sombras suaves (neumorfismo)
- Margen consistente de 16px
- Modo oscuro forzado (`dark.always.css`)

## Configuración

### Correo de contacto

El correo destino del formulario se define en:

**`src/environments/environment.ts` — línea 4**


Cambia este valor por el correo donde quieras recibir los mensajes.

### EmailJS (envío de correos)

El formulario usa **EmailJS** para enviar correos directamente desde el frontend sin necesidad de un servidor propio. Para configurarlo:

1. Crea una cuenta gratis en [EmailJS](https://www.emailjs.com/)
2. Ve a **Email Services** y conecta un servicio de correo (Gmail, Outlook, etc.)
3. Copia el **Service ID**
4. Ve a **Email Templates** y crea una plantilla con las variables:
   - `{{from_name}}` — nombre del remitente
   - `{{from_email}}` — correo del remitente
   - `{{message}}` — contenido del mensaje
   - `{{to_email}}` — correo destino
5. Copia el **Template ID**
6. Ve a **Account > API Keys** y copia tu **Public Key**
7. Reemplaza los valores en `src/environments/environment.ts` (líneas 9-11):

```typescript
emailjs: {
  publicKey: 'tu_public_key',
  serviceId: 'tu_service_id',
  templateId: 'tu_template_id',
},
```

### Plantilla de EmailJS

La plantilla debe incluir estas variables en el asunto y cuerpo:

**Asunto sugerido:** `Nuevo mensaje de {{from_name}}`

**Cuerpo sugerido:**
```
Has recibido un mensaje desde la aplicación:

Nombre: {{from_name}}
Correo: {{from_email}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde Mi App.
```

## Instalación

```bash
npm install
ionic serve
```

Para construir la aplicación:

```bash
ionic build
```

## Rutas

| Ruta | Página | Descripción |
|---|---|---|
| `/home` | Inicio | Pantalla de bienvenida |
| `/personal` | Información Personal | Datos de perfil |
| `/contact` | Contacto | Formulario de mensaje |

Las rutas se definen en `src/app/app.routes.ts` con lazy loading.

## Navegación

Menú lateral tipo overlay con las 3 secciones:

- **Inicio** — icono `home`
- **Información Personal** — icono `person-circle`
- **Contacto** — icono `chatbubble-ellipses`

El menú se abre mediante el botón de menú en el header (visible en todas las pantallas, optimizado para móvil).

## Servicios

### EmailjsService

Ubicación: `src/app/services/emailjs.service.ts`

Servicio que envía correos mediante la API de EmailJS. Lee las credenciales desde `environment.ts` y envía el mensaje a la dirección configurada en `contactEmail`. Se inicializa al arrancar la aplicación con `emailjs.init()`.

## Licencia

Proyecto académico de demostración.
