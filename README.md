# React Router v7 - Sistema Completamente Centralizado

Sistema de navegación **100% parametrizado** donde toda la configuración se maneja desde
`app/config/config.ts`.

## ✅ Refactorización Completada

- **Configuración única**: Todo desde `config/config.ts`
- **Auto-generación**: Rutas, navegación y meta automáticos
- **Archivos eliminados**: Limpieza completa de código no utilizado
- **Cero errores**: Compilación exitosa en TypeScript
- **4 páginas**: Home, Nosotros, Usuarios, Contacto

## Características

- ✅ **Configuración centralizada** - Todo desde `config/config.ts`
- ✅ **Auto-generación de rutas** - `routes.ts` se genera automáticamente
- ✅ **Navegación automática** - NavLinks construidos dinámicamente
- ✅ **Transiciones configurables** - Velocidades desde 150ms hasta 5000ms
- ✅ **Meta automáticos** - Títulos y descripciones desde configuración
- ✅ **Header/Footer configurables** - Valores desde config central

## Estructura

```
app/
├── config/
│   └── config.ts           ⭐ CONFIGURACIÓN PRINCIPAL
├── routes.ts               📄 Auto-generado desde config
├── root.tsx                📄 Usa config para header/footer
└── routes/                 📄 Usan config para meta
```

## Uso

1. **Agregar nueva ruta**: Editar `ROUTES_CONFIG` en `config.ts`
2. **Crear componente**: Archivo en `routes/`
3. **Automático**: Ruta y navegación aparecen solos

## Ejecución

```bash
cd c:\www\react-router
npm run dev
```

**Captura de Contenido**:

```typescript
// Capturar contenido ANTES de iniciar transición
setPreviousPageContent(currentPageContent);
```

**Efecto de Salida (Opacity)**:

```css
transition: opacity ${duration}ms ease-out;
opacity: 0; // Se desvanece
```

**Efecto de Entrada (Slide)**:

```css
/* Entrada desde la derecha (forward) */
animation: slideInFromRight ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

/* Entrada desde la izquierda (backward) */
animation: slideInFromLeft ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

## 🎮 Velocidades Configurables

| Velocidad        | Duración | Uso Recomendado         |
| ---------------- | -------- | ----------------------- |
| **Ultra Rápido** | 150ms    | Navegación ágil         |
| **Rápido**       | 300ms    | Transiciones rápidas    |
| **Normal**       | 600ms    | Experiencia equilibrada |
| **Lento**        | 1200ms   | Análisis de transición  |
| **Ultra Lento**  | 2500ms   | Debugging detallado     |
| **Debug**        | 5000ms   | Desarrollo y testing    |

## 🏗️ Estructura del Proyecto

```
react-router/
├── ⭐ config/
│   └── config.ts                   # CONFIGURACIÓN CENTRAL (TODO aquí)
├── 📱 components/
│   ├── auto-navigation.tsx         # Navegación automática
│   ├── mobile-slide-transition.tsx # Sistema de transiciones
│   └── speed-selector.tsx          # Selector de velocidad
├── 🎣 hooks/
│   └── use-navigation.ts           # Hook personalizado de navegación
├── 🔄 contexts/
│   └── transition-context.tsx      # Gestión de estado global
├── 📁 routes/
│   ├── home.tsx                    # Página de inicio (1)
│   ├── about.tsx                   # Página "About" (2) + Demo
│   ├── usuarios.tsx                # Página "Users" (3)
│   └── contacto.tsx                # Página "Contact" (4)
├── routes.ts                       # Auto-generado desde config.ts
└── 🎨 app.css                      # Animaciones CSS
│   └── usuarios.tsx                # Página de usuarios (3)
└── 🎨 app.css                      # Animaciones CSS simples
```

## 🚀 Inicio Rápido

### Instalación

```bash
bun install
```

### Desarrollo

```bash
bun run dev
```

Tu aplicación estará disponible en `http://localhost:5173`.

### Testing de Transiciones

1. **Navegar entre páginas**: Home → About → Usuarios
2. **Cambiar velocidad**: Usar el selector para "Ultra Lento" o "Debug"
3. **Observar efectos**:
    - Página anterior se desvanece
    - Página nueva entra deslizando desde el lado correcto

## 🔧 Características Técnicas

### Efectos Implementados

- ✅ **Salida**: Fade out con opacity transition
- ✅ **Entrada**: Slide in desde el lado correcto
- ✅ **Direcciones inteligentes**: Basadas en orden de rutas
- ✅ **Captura correcta**: Contenido anterior real

### Optimizaciones

- ✅ CSS-first animations
- ✅ Timing curves profesionales
- ✅ Cleanup automático de timeouts
- ✅ GPU acceleration con will-change

## 🔄 Cómo Funciona

### Captura de Contenido

```typescript
// 1. Capturar contenido ANTES de la transición
setPreviousPageContent(currentPageContent);

// 2. Actualizar con nuevo contenido
setCurrentPageContent(children);

// 3. Iniciar transición con contenido correcto
setIsTransitioning(true);
```

### Renderizado de Efectos

```typescript
{/* Página anterior - SE DESVANECE */}
<div style={{ opacity: 0, transition: "opacity 600ms ease-out" }}>
  {previousPageContent}
</div>

{/* Página nueva - ENTRA DESLIZANDO */}
<div style={{
  animation: direction === "forward"
    ? "slideInFromRight 600ms"
    : "slideInFromLeft 600ms"
}}>
  {currentPageContent}
</div>
```

## 🛠️ Tecnologías

- **React Router v7**: Framework principal
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos utility-first
- **Vite**: Bundler moderno
- **CSS Animations**: Efectos nativos optimizados

## 📈 Beneficios

✅ **Transiciones naturales** con efectos simples y elegantes  
✅ **Performance optimizada** usando CSS nativo  
✅ **Configuración flexible** con múltiples velocidades  
✅ **Código simple** fácil de mantener  
✅ **Experiencia móvil** natural y fluida

## 🎯 Ejemplo Práctico - Nueva Ruta Añadida

### Demostración: Página de Contacto

Para mostrar lo fácil que es añadir rutas con el nuevo sistema centralizado:

**1. ⭐ Configuración en `config/config.ts` (TODO aquí):**

```typescript
{
    path: "/contacto",
    displayName: "Contact",
    component: "routes/contacto.tsx",
    order: 4,
    showInNav: true,
},
```

**2. ✅ `routes.ts` se auto-genera** (no tocar) **3. ✅ Navegación se auto-construye** (sin NavLinks
manuales) **4. ✅ Archivo creado:** `app/routes/contacto.tsx`

¡Y listo! La navegación se actualiza automáticamente con transiciones incluidas.

## 🔧 Cómo Añadir Nuevas Rutas

### 🚀 Proceso ULTRA-Simplificado (Solo 2 pasos):

1. **⭐ Configurar en `config/config.ts` (1 lugar, TODO aquí):**

```typescript
export const ROUTES_CONFIG: RouteItem[] = [
    // ...rutas existentes...
    {
        path: "/nueva-ruta",
        displayName: "Nueva Página", // ← Nombre mostrado
        component: "routes/nueva.tsx", // ← Archivo del componente
        order: 5, // ← Orden en menú
        showInNav: true, // ← Visible en navegación
    },
];
```

2. **Crear archivo de componente:**

```typescript
// app/routes/nueva.tsx
export default function Nueva() {
    return <div>Contenido de la nueva página</div>;
}
```

### ✅ **¡Automático!** (Ya no necesitas hacer esto):

- ❌ ~~Editar `routes.ts`~~ → Auto-generado
- ❌ ~~Crear NavLinks~~ → Auto-construidos
- ❌ ~~Configurar transiciones~~ → Auto-configuradas
- ❌ ~~Actualizar navegación~~ → Auto-actualizada

### Proceso Anterior vs Nuevo:

| **ANTES**                  | **AHORA**                     |
| -------------------------- | ----------------------------- |
| 1. Editar `routes.ts`      | 1. ⭐ Solo `config/config.ts` |
| 2. Editar `navigation.ts`  | 2. Crear componente           |
| 3. Actualizar NavLinks     | ✅ **¡Listo!**                |
| 4. Configurar transiciones |                               |
| 5. Crear componente        |                               |

    {
        path: "/nueva-ruta",
        displayName: "Nueva Página",    // ← Nombre mostrado
        order: 5,                       // ← Orden en menú
        showInNav: true,               // ← Visible en navegación
    },

];

````

3. **Crear archivo de ruta:**
```typescript
// app/routes/nueva-ruta.tsx
export default function NuevaRuta() {
    return <div>Contenido de la nueva página</div>;
}
````

### Navegación Actual del Sistema:

- **Home** (/) - Página principal con información del sistema
- **About** (/about) - Información sobre nosotros + Demo de navegación
- **Users** (/usuarios) - Gestión de usuarios
- **Contact** (/contacto) - Página de contacto (ejemplo práctico)

## 🎮 Uso del Hook `useNavigation()`

```typescript
import { useNavigation } from "~/hooks/use-navigation";

function MiComponente() {
    const {
        currentDisplayName, // Nombre actual
        navigationItems, // Todas las rutas
        getNavigationInfo, // Info completa
        nextRoute, // Siguiente ruta
        previousRoute, // Ruta anterior
    } = useNavigation();

    const navInfo = getNavigationInfo();
    console.log(navInfo); // Info completa de navegación
}
```

## 📚 Instalación de ESLint y Plugins

Para asegurar la calidad del código y seguir las mejores prácticas en un proyecto TypeScript y
React, se recomienda agregar ESLint y sus plugins como dependencias de desarrollo. Esto se puede
hacer con el siguiente comando:

```bash
bun add -d eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react
```

**Resultado**: Sistema de navegación completamente automatizado con transiciones profesionales y
cero mantenimiento manual de NavLinks.
