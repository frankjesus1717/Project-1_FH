# Mi App - Ionic 8 + Angular 20

Aplicación móvil desarrollada con Ionic 8 y Angular 20 que utiliza componentes standalone. Implementa el sistema de diseño Obsidian con interfaz oscura de alto contraste y paleta de color violeta. Esta aplicación funciona como portafolio y medio de contacto profesional.

## Tecnologías utilizadas

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
    home/                    # Página de inicio con bienvenida
    personal/                # Información personal del perfil
    contact/                 # Formulario de contacto con EmailJS
    services/
      emailjs.service.ts     # Servicio de envío de correos
      contact.service.ts     # Servicio alternativo con mailto
    app.component.ts         # Componente raíz con menú lateral
    app.routes.ts            # Configuración de rutas
  environments/
    environment.ts           # Constantes de configuración
    environment.prod.ts      # Constantes para producción
  theme/
    variables.scss           # Variables del tema Obsidian
  global.scss                # Estilos y animaciones globales
```

## Funcionalidades

### Página de inicio
- Tarjeta principal de bienvenida con efecto de aumento al pasar el cursor
- Botón de navegación rápida hacia la sección de información personal
- Tarjetas destacadas con las funcionalidades principales de la aplicación
- Animaciones de entrada y transiciones suaves entre secciones

### Información personal
- Datos de perfil presentados en formato de solo lectura
- Iconos representativos para cada campo del perfil
- Avatar decorativo en la cabecera de la tarjeta
- Efecto de ampliación al pasar el cursor sobre cada elemento

### Formulario de contacto
- Formulario con validación mediante Reactive Forms de Angular
- Campos validados: nombre, correo electrónico y mensaje
- Contador de caracteres en el campo de mensaje
- Animación visual durante el proceso de envío con indicador de progreso
- Notificaciones de error con efecto de vibración
- Pantalla de confirmación con animación al completar el envío
- Envío de correos electrónicos mediante la plataforma EmailJS

### Interactividad general
- Todos los botones muestran una animación de rotación en el icono al pasar el cursor
- Todas las tarjetas aumentan de tamaño con una transición suave al recibir el cursor
- Los elementos del menú lateral también responden con ampliación al pasar el cursor
- Animaciones escalonadas en los campos del formulario de contacto

## Diseño Obsidian

El sistema visual utiliza una paleta oscura con contrastes definidos para una apariencia moderna y profesional:

| Elemento | Color | Descripción |
|---|---|---|
| Color primario | `#7C4DFF` | Violeta profundo |
| Fondo principal | `#0F111A` | Azul medianoche |
| Fondo de elementos | `#1A1C26` | Gris acero |
| Texto | `#F4F4F9` | Blanco apagado |

Características del diseño:
- Bordes redondeados de 16px en tarjetas y contenedores
- Sombras suaves con efecto neumórfico
- Márgenes uniformes de 16px en toda la interfaz
- Modo oscuro forzado mediante la paleta `dark.always.css`
- Animaciones sutiles para mejorar la experiencia de usuario

## Configuración del entorno

Las variables de configuración se definen en los archivos de entorno y no deben incluirse en el repositorio. Para configurar la aplicación es necesario crear o modificar los archivos `src/environments/environment.ts` y `src/environments/environment.prod.ts` con la siguiente estructura:

```typescript
export const environment = {
  production: false,
  contactEmail: 'correo@ejemplo.com',
  emailjs: {
    publicKey: 'tu_llave_publica',
    serviceId: 'tu_identificador_de_servicio',
    templateId: 'tu_identificador_de_plantilla',
  },
};
```

### Correo de contacto
La propiedad `contactEmail` define la dirección de correo electrónico que recibirá los mensajes enviados desde el formulario de contacto.

### EmailJS
El formulario de contacto utiliza EmailJS para el envío de correos electrónicos directamente desde el navegador, sin necesidad de un servidor backend. Para configurarlo:

1. Crear una cuenta en el sitio web de EmailJS
2. Configurar un servicio de correo electrónico (Gmail, Outlook, entre otros)
3. Copiar el identificador del servicio
4. Crear una plantilla de correo con las siguientes variables:
   - `{{from_name}}`: nombre del remitente
   - `{{from_email}}`: correo electrónico del remitente
   - `{{message}}`: contenido del mensaje
   - `{{to_email}}`: dirección de correo destino
5. Copiar el identificador de la plantilla
6. Obtener la llave pública desde la sección de API Keys
7. Sustituir los valores en el archivo de entorno correspondiente

## Instalación y uso

Para instalar las dependencias y ejecutar la aplicación en un entorno de desarrollo:

```bash
npm install
ionic serve
```

Para generar una compilación de producción:

```bash
ionic build
```

## Rutas de navegación

| Ruta | Página | Descripción |
|---|---|---|
| `/home` | Inicio | Pantalla principal de bienvenida |
| `/personal` | Información Personal | Datos del perfil del usuario |
| `/contact` | Contacto | Formulario para enviar mensajes |

Las rutas están configuradas con carga diferida (lazy loading) para optimizar el rendimiento inicial de la aplicación.

## Navegación lateral

El menú lateral tipo overlay incluye las tres secciones principales de la aplicación, cada una con su icono distintivo:

- **Inicio**: icono `home` para la pantalla de bienvenida
- **Información Personal**: icono `person-circle` para los datos del perfil
- **Contacto**: icono `chatbubble-ellipses` para el formulario de mensajes

El menú se despliega mediante el botón de menú ubicado en el encabezado, visible en todas las pantallas y optimizado para dispositivos móviles.

## Animaciones incluidas

La aplicación incorpora las siguientes animaciones para mejorar la experiencia de usuario:

- Rotación de iconos en botones al pasar el cursor
- Ampliación de tarjetas y elementos al recibir el cursor
- Aparición escalonada de los campos del formulario de contacto
- Animación de avión de papel durante el envío del formulario
- Efecto de rebote en el icono de confirmación de envío exitoso
- Vibración en mensajes de error y validación
- Desplazamiento y desvanecimiento en las transiciones de pantalla

## Licencia

Proyecto académico de demostración.
