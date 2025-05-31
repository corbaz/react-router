# Sistema de Transiciones Móviles Configurables

## Descripción

Este sitio web React Router v7 incluye un sistema avanzado de transiciones móviles con velocidades configurables en tiempo real. Las transiciones imitan el comportamiento de las aplicaciones móviles nativas donde ambas páginas son visibles durante la transición.

## Características Implementadas

### ✅ Velocidades Configurables
- **Ultra Rápido**: 150ms - Para transiciones casi instantáneas
- **Rápido**: 300ms - Transiciones ágiles
- **Normal**: 600ms - Velocidad por defecto, equilibrada
- **Lento**: 1200ms - Para ver el efecto en detalle
- **Ultra Lento**: 2500ms - Para análisis detallado
- **Debug**: 5000ms - Para desarrollo y debugging

### ✅ Selector en Tiempo Real
- Selector en el header que permite cambiar la velocidad inmediatamente
- Los cambios se aplican a la siguiente transición de página
- Interfaz intuitiva con duración en milisegundos

### ✅ Sincronización Perfecta
- Duración de animación CSS sincronizada con timeouts de React
- Limpieza automática de estados de transición
- Sin inconsistencias de timing

### ✅ Efectos Móviles Auténticos
- Ambas páginas visibles durante la transición
- Deslizamiento direccional (hacia adelante/atrás)
- Transiciones suaves con easing cubic-bezier optimizado

## Arquitectura Técnica

### Componentes Principales

1. **`TransitionProvider`** - Context provider global para el estado de velocidad
2. **`MobileSlideTransition`** - Componente principal de transición
3. **`SpeedSelector`** - Selector de velocidad en el header
4. **Estilos dinámicos** - CSS generado dinámicamente según la velocidad

### Lógica de Sincronización

```typescript
// Duración configurable
const duration = TRANSITION_SPEEDS[speed];

// CSS con duración dinámica
transition: `transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`

// Timeout sincronizado
setTimeout(() => {
    setIsTransitioning(false);
    setPreviousContent(null);
}, duration + 50); // +50ms buffer
```

## Uso

### Cambiar Velocidad
1. Usa el selector "Velocidad" en el header
2. Selecciona la velocidad deseada
3. Navega entre páginas para ver el efecto

### Para Desarrollo
- Usa "Debug" (5000ms) para analizar la transición paso a paso
- "Ultra Rápido" para testing de performance
- "Normal" para la experiencia de usuario final

## Rutas Disponibles

- **Home** (`/`) - Página de bienvenida
- **About** (`/about`) - Información de la empresa
- **Usuarios** (`/usuarios`) - Tabla de datos de usuarios

## Próximas Mejoras

- [ ] Efectos de transición adicionales (fade, scale, etc.)
- [ ] Persistencia de preferencias del usuario
- [ ] Transiciones específicas por ruta
- [ ] Soporte para gestos táctiles
- [ ] Presets de velocidad personalizados

## Problema Resuelto

✅ **Inconsistencia de Timing**: Se corrigió la discrepancia entre la duración de animación CSS (600ms) y el timeout de React (5550ms). Ahora ambos usan la misma duración configurable para perfecta sincronización.

---

**Estado**: ✅ Completamente implementado y funcional
**Fecha**: Mayo 2025
**Tecnologías**: React Router v7, TypeScript, Tailwind CSS, Bun
