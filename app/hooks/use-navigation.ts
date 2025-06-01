import { useLocation } from "react-router";
import {
    getNavigationRoutes,
    getRouteOrder,
    getDisplayName,
    isValidRoute,
    getRouteConfig,
    type RouteItem,
    SYSTEM_CONFIG,
} from "~/config/config";

/**
 * Hook personalizado para gestión de navegación
 * Proporciona utilidades para trabajar con el sistema de navegación
 */
export function useNavigation() {
    const location = useLocation();
    const currentPath = location.pathname;
    /**
     * Obtiene todos los elementos de navegación
     */
    const navigationItems = getNavigationRoutes();

    /**
     * Obtiene el orden de rutas para cálculo de dirección
     */
    const routeOrder = getRouteOrder();

    /**
     * Obtiene la configuración de la ruta actual
     */
    const currentRoute = getRouteConfig(currentPath);

    /**
     * Obtiene el nombre de display de la ruta actual
     */
    const currentDisplayName = getDisplayName(currentPath);

    /**
     * Verifica si la ruta actual es válida
     */
    const isCurrentRouteValid = isValidRoute(currentPath);

    /**
     * Obtiene la ruta anterior y siguiente basado en el orden
     */
    const currentIndex = routeOrder.indexOf(currentPath);
    const previousRoute =
        currentIndex > 0 ? routeOrder[currentIndex - 1] : null;
    const nextRoute =
        currentIndex < routeOrder.length - 1
            ? routeOrder[currentIndex + 1]
            : null;

    /**
     * Calcula la dirección de navegación entre dos rutas
     */
    const getNavigationDirection = (
        fromPath: string,
        toPath: string
    ): "forward" | "backward" => {
        const fromIndex = routeOrder.indexOf(fromPath);
        const toIndex = routeOrder.indexOf(toPath);
        return toIndex > fromIndex ? "forward" : "backward";
    };

    /**
     * Obtiene información de navegación completa
     */
    const getNavigationInfo = () => ({
        current: {
            path: currentPath,
            displayName: currentDisplayName,
            config: currentRoute,
            index: currentIndex,
            isValid: isCurrentRouteValid,
        },
        previous: previousRoute
            ? {
                  path: previousRoute,
                  displayName: getDisplayName(previousRoute),
                  config: getRouteConfig(previousRoute),
              }
            : null,
        next: nextRoute
            ? {
                  path: nextRoute,
                  displayName: getDisplayName(nextRoute),
                  config: getRouteConfig(nextRoute),
              }
            : null,
        hasNext: nextRoute !== null,
        hasPrevious: previousRoute !== null,
    });

    return {
        // Estados básicos
        currentPath,
        currentDisplayName,
        currentRoute,
        isCurrentRouteValid,

        // Navegación
        navigationItems,
        routeOrder,
        previousRoute,
        nextRoute,

        // Utilidades
        getNavigationDirection,
        getNavigationInfo,
        getDisplayName,
        isValidRoute,
        getRouteConfig,
    };
}
