/**
 * CONFIGURACIÓN CENTRAL DEL SISTEMA
 * ================================
 * Este archivo contiene TODAS las configuraciones del proyecto
 */

/**
 * Configuración de una ruta del sistema
 */
export interface RouteItem {
    /** Ruta URL */
    path: string;
    /** Nombre que se muestra en la navegación */
    displayName: string;
    /** Archivo del componente (relativo a app/routes/) */
    component: string;
    /** Orden en el menú de navegación */
    order: number;
    /** Título de la página para meta */
    title: string;
    /** Descripción para meta */
    description: string;
    /** Si se debe incluir en la navegación automática */
    showInNav?: boolean;
    /** Si es la ruta index (página principal) */
    isIndex?: boolean;
}

/**
 * CONFIGURACIÓN PRINCIPAL DE RUTAS
 */
export const ROUTES_CONFIG: RouteItem[] = [
    {
        path: "/",
        displayName: "Inicio",
        component: "routes/home.tsx",
        order: 1,
        title: "Inicio - Mi Sitio Web",
        description: "Bienvenido a nuestro sitio web",
        showInNav: true,
        isIndex: true,
    },
    {
        path: "/about",
        displayName: "Nosotros",
        component: "routes/about.tsx",
        order: 2,
        title: "Nosotros - Mi Sitio Web",
        description: "Conoce más sobre nosotros",
        showInNav: true,
    },
    {
        path: "/usuarios",
        displayName: "Usuarios",
        component: "routes/usuarios.tsx",
        order: 3,
        title: "Usuarios - Mi Sitio Web",
        description: "Gestión de usuarios",
        showInNav: true,
    },
    {
        path: "/contacto",
        displayName: "Contacto",
        component: "routes/contacto.tsx",
        order: 4,
        title: "Contacto - Mi Sitio Web",
        description: "Contacto",
        showInNav: true,
    },
];

/**
 * CONFIGURACIONES GENERALES DEL SISTEMA
 */
export const SYSTEM_CONFIG = {
    app: {
        title: "Mi Sitio Web",
        description: "Sistema web moderno y eficiente",
        version: "1.0.0",
    },
    header: {
        siteName: "Mi Sitio Web",
        showSpeedSelector: true,
        backgroundColor: "bg-black",
        textColor: "text-white",
    },
    footer: {
        copyrightText: "© 2025 Mi Sitio Web. Todos los derechos reservados.",
        secondaryText: "Desarrollado con React Router v7",
        backgroundColor: "bg-black",
        textColor: "text-white",
    },
    transitions: {
        speeds: {
            "ultra-fast": 150,
            fast: 300,
            normal: 500,
            slow: 800,
            "ultra-slow": 1200,
            debug: 5000,
        } as const,
        defaultSpeed: "normal" as const,
        easing: {
            slideIn: "ease-out",
            fadeOut: "ease-in",
        },
    },
    navigation: {
        activeLinkClass: "active",
    },
} as const;

/**
 * FUNCIONES UTILITARIAS
 */

export function getNavigationRoutes(): RouteItem[] {
    return ROUTES_CONFIG.filter((route) => route.showInNav !== false).sort(
        (a, b) => a.order - b.order
    );
}

export function getRouterRoutes(): RouteItem[] {
    return ROUTES_CONFIG.sort((a, b) => a.order - b.order);
}

export function getRouteOrder(): string[] {
    return getNavigationRoutes().map((route) => route.path);
}

export function getDisplayName(path: string): string {
    const route = ROUTES_CONFIG.find((route) => route.path === path);
    return route?.displayName || path;
}

export function getRouteMeta(
    path: string
): { title: string; description: string } | null {
    const route = ROUTES_CONFIG.find((route) => route.path === path);
    return route
        ? { title: route.title, description: route.description }
        : null;
}

export function isValidRoute(path: string): boolean {
    return ROUTES_CONFIG.some((route) => route.path === path);
}

export function getRouteConfig(path: string): RouteItem | undefined {
    return ROUTES_CONFIG.find((route) => route.path === path);
}

export function getIndexRoute(): RouteItem | undefined {
    return ROUTES_CONFIG.find((route) => route.isIndex === true);
}

export function getTransitionSpeeds() {
    return SYSTEM_CONFIG.transitions.speeds;
}

export function getDefaultTransitionSpeed() {
    return SYSTEM_CONFIG.transitions.speeds[
        SYSTEM_CONFIG.transitions.defaultSpeed
    ];
}
