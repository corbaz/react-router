# ¡Bienvenido a React Router!

Una plantilla moderna y lista para producción para construir aplicaciones React full-stack usando React Router con transiciones profesionales tipo móvil.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Características

- 🚀 Renderizado del lado del servidor (SSR)
- ⚡️ Recarga en caliente de módulos (HMR)
- 📦 Empaquetado y optimización de assets
- 🔄 Carga de datos y mutaciones
- 🔒 TypeScript por defecto
- 🎉 TailwindCSS para estilos
- 📱 Sistema de transiciones móviles profesionales con velocidades configurables
- ⚙️ Context API para gestión de estado global
- 🎯 Componentes reutilizables y modulares
- 📖 [Documentación de React Router](https://reactrouter.com/)

## Comenzando

### Instalación

Instala las dependencias:

```bash
bun install
# o alternativamente
npm install
```

### Desarrollo

Inicia el servidor de desarrollo con HMR:

```bash
bun run dev
# o alternativamente  
npm run dev
```

Tu aplicación estará disponible en `http://localhost:5173`.

## Estructura del Proyecto

Este proyecto implementa un sistema de transiciones móviles profesionales con las siguientes características:

```
react-router/
├── 📁 app/                                    # Código fuente de la aplicación
│   ├── 🎨 app.css                            # Estilos globales y animaciones CSS
│   ├── 🏠 root.tsx                           # Layout principal con providers
│   ├── 🗺️ routes.ts                           # Configuración de rutas
│   │
│   ├── 📁 components/                         # Componentes reutilizables
│   │   ├── 📱 mobile-slide-transition.tsx    # Sistema de transiciones móviles
│   │   └── ⚡ speed-selector.tsx             # Selector de velocidad en tiempo real
│   │
│   ├── 📁 contexts/                          # Gestión de estado global
│   │   └── 🔄 transition-context.tsx         # Context para configuración de velocidad
│   │
│   └── 📁 routes/                            # Páginas de la aplicación
│       ├── 🏡 home.tsx                       # Página de inicio con contenido de bienvenida
│       ├── ℹ️ about.tsx                       # Página "Acerca de" con información corporativa
│       └── 👥 usuarios.tsx                   # Página de usuarios con tabla de datos
│
├── 📁 public/                                # Assets estáticos
│   ├── 🌐 favicon.ico                        # Icono del sitio
│   └── ⚙️ sw.js                              # Service Worker (vacío, evita errores 404)
│
├── 📁 build/                                 # Archivos generados para producción
│   ├── 📁 client/                            # Assets del cliente
│   └── 📁 server/                            # Código del servidor
│
├── 📄 TRANSITIONS.md                         # Documentación del sistema de transiciones
├── 📄 package.json                          # Dependencias y scripts
├── 📄 react-router.config.ts                # Configuración de React Router
├── 📄 tsconfig.json                         # Configuración de TypeScript
├── 📄 vite.config.ts                        # Configuración de Vite
└── 🐳 Dockerfile                            # Configuración para contenedores
```

### Componentes Principales

#### 🏠 **Root Layout** (`root.tsx`)
- Layout principal con header, navegación y footer
- Integración del `TransitionProvider` para estado global
- Navegación responsiva con enlaces activos
- Selector de velocidad integrado en el header

#### 📱 **Mobile Slide Transition** (`mobile-slide-transition.tsx`)
- Sistema de transiciones que simula el comportamiento móvil nativo
- 6 velocidades preconfiguradas: ultra-rápida (150ms) a debug (5000ms)
- Detección automática de dirección de navegación
- Sincronización perfecta entre animaciones CSS y timeouts de React
- Inyección dinámica de CSS para diferentes velocidades

#### ⚡ **Speed Selector** (`speed-selector.tsx`)
- Dropdown elegante para cambiar velocidades en tiempo real
- Feedback visual inmediato
- Persistencia de configuración durante la sesión

#### 🔄 **Transition Context** (`transition-context.tsx`)
- Gestión centralizada del estado de velocidad
- Hook personalizado `useTransition()` para acceso fácil
- Provider que envuelve toda la aplicación

### Páginas Implementadas

#### 🏡 **Home** (`/`)
- Página de bienvenida con diseño moderno
- Cards con características principales
- Call-to-action y navegación intuitiva

#### ℹ️ **About** (`/about`)
- Información corporativa profesional
- Secciones de misión, visión y valores
- Diseño responsivo y atractivo

#### 👥 **Usuarios** (`/usuarios`)
- Tabla de datos con usuarios de ejemplo
- Diseño tabular responsivo
- Información estructurada y fácil de leer

### Sistema de Transiciones

El proyecto incluye un sistema avanzado de transiciones que simula el comportamiento de aplicaciones móviles nativas:

- **Efecto Slide**: Las páginas se deslizan horizontalmente
- **Dirección Automática**: Detecta si es navegación hacia adelante o atrás
- **Velocidades Configurables**: 6 opciones desde 150ms hasta 5000ms
- **Sincronización Perfecta**: CSS y JavaScript perfectamente coordinados
- **Optimización de Rendimiento**: Animaciones GPU-accelerated

Para más detalles sobre el sistema de transiciones, consulta `TRANSITIONS.md`.

## Construcción para Producción

Crea una build de producción:

```bash
bun run build
# o alternativamente
npm run build
```

## Despliegue

### Despliegue con Docker

Para construir y ejecutar usando Docker:

```bash
docker build -t mi-app .

# Ejecutar el contenedor
docker run -p 3000:3000 mi-app
```

La aplicación contenerizada puede desplegarse en cualquier plataforma que soporte Docker, incluyendo:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### Despliegue Manual (DIY)

Si estás familiarizado con el despliegue de aplicaciones Node.js, el servidor de aplicaciones incluido está listo para producción.

Asegúrate de desplegar la salida de `bun run build` o `npm run build`:

```
├── package.json
├── bun.lockb (o package-lock.json, o pnpm-lock.yaml)
├── build/
│   ├── client/    # Assets estáticos
│   └── server/    # Código del lado del servidor
```

## Estilos

Esta plantilla viene con [Tailwind CSS](https://tailwindcss.com/) ya configurado para una experiencia de inicio simple y por defecto. Puedes usar cualquier framework CSS que prefieras.

## Tecnologías Utilizadas

- **React Router v7**: Framework principal para routing y SSR
- **TypeScript**: Tipado estático para mayor seguridad
- **Tailwind CSS**: Framework CSS utility-first
- **Vite**: Bundler rápido y moderno
- **Bun**: Runtime y gestor de paquetes ultrarrápido
- **Context API**: Gestión de estado global
- **CSS Animations**: Transiciones hardware-accelerated

## Comandos Disponibles

```bash
# Desarrollo
bun run dev          # Inicia servidor de desarrollo
bun run build        # Construye para producción
bun run start        # Inicia servidor de producción
bun run typecheck    # Verifica tipos de TypeScript
bun run lint         # Ejecuta linter

# Gestión de dependencias
bun install          # Instala dependencias
bun add <paquete>    # Añade nueva dependencia
bun remove <paquete> # Elimina dependencia
```

## Contribuciones

Este proyecto está diseñado como una plantilla base. Siéntete libre de:

- Añadir nuevas páginas y rutas
- Personalizar las transiciones y animaciones
- Modificar los estilos y temas
- Integrar APIs y bases de datos
- Añadir autenticación y autorización

---

Construido con ❤️ usando React Router y tecnologías modernas.
