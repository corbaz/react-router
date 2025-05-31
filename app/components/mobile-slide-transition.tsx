import { useLocation } from "react-router";
import { useEffect, useState, useRef } from "react";

interface MobileSlideTransitionProps {
    children: React.ReactNode;
    speed?: "ultra-fast" | "fast" | "normal" | "slow" | "ultra-slow" | "debug";
}

const routeOrder = ["/", "/about", "/usuarios"];

// Configuraciones de velocidades en milisegundos
export const TRANSITION_SPEEDS = {
    "ultra-fast": 150, // Súper rápido
    fast: 300, // Rápido
    normal: 600, // Normal (por defecto)
    slow: 1200, // Lento
    "ultra-slow": 2500, // Súper lento
    debug: 5000, // Para debugging
} as const;

// Función para crear estilos dinámicos de animación
function createDynamicAnimationStyles(duration: number): string {
    return `
        .dynamic-slide-in-right {
            animation: slide-in-right ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .dynamic-slide-in-left {
            animation: slide-in-left ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
    `;
}

// Función para inyectar estilos dinámicos
function injectDynamicStyles(duration: number, styleId: string) {
    // Remover estilos previos si existen
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
        existingStyle.remove();
    }

    // Crear nuevo elemento de estilo
    const styleElement = document.createElement("style");
    styleElement.id = styleId;
    styleElement.textContent = createDynamicAnimationStyles(duration);
    document.head.appendChild(styleElement);
}

export function MobileSlideTransition({
    children,
    speed = "normal",
}: MobileSlideTransitionProps) {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [direction, setDirection] = useState<"forward" | "backward">(
        "forward"
    );
    const [previousContent, setPreviousContent] =
        useState<React.ReactNode>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Obtener la duración basada en la velocidad seleccionada
    const duration = TRANSITION_SPEEDS[speed];
    const styleId = `mobile-transition-styles-${speed}`;

    // Inyectar estilos dinámicos cuando cambie la velocidad
    useEffect(() => {
        injectDynamicStyles(duration, styleId);

        return () => {
            // Limpiar estilos al desmontar
            const existingStyle = document.getElementById(styleId);
            if (existingStyle) {
                existingStyle.remove();
            }
        };
    }, [duration, styleId]);
    useEffect(() => {
        if (location.pathname !== displayLocation.pathname) {
            // Determinar dirección del deslizamiento
            const currentIndex = routeOrder.indexOf(location.pathname);
            const previousIndex = routeOrder.indexOf(displayLocation.pathname);
            const newDirection =
                currentIndex > previousIndex ? "forward" : "backward";

            setDirection(newDirection);

            // Capturar el contenido actual antes de cambiar
            setPreviousContent(
                <div
                    key={displayLocation.pathname}
                    className="w-full h-full mobile-transition-page"
                >
                    {children}
                </div>
            );

            // Iniciar transición
            setIsTransitioning(true);

            // Cambiar a la nueva ubicación inmediatamente
            setDisplayLocation(location); // Finalizar transición después de la animación
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setPreviousContent(null);
            }, duration + 50); // Duración configurable + pequeño buffer

            return () => clearTimeout(timer);
        }
    }, [location.pathname, displayLocation.pathname, duration]);
    return (
        <div
            ref={containerRef}
            className="relative w-full overflow-hidden mobile-transition-container"
            style={{ minHeight: "500px" }}
        >
            {" "}
            {/* Página anterior - se desliza hacia afuera (SIEMPRE VISIBLE durante la transición) */}
            {isTransitioning && previousContent && (
                <div
                    className="absolute top-0 w-full h-full z-10 mobile-transition-page"
                    style={{
                        left: 0,
                        transform:
                            direction === "forward"
                                ? "translateX(-100%)"
                                : "translateX(100%)",
                        transition: `transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                    }}
                >
                    {previousContent}
                </div>
            )}{" "}
            {/* Página nueva - se desliza hacia adentro (SIEMPRE VISIBLE durante la transición) */}
            <div
                className={`relative w-full h-full z-20 mobile-transition-page ${
                    isTransitioning
                        ? direction === "forward"
                            ? "dynamic-slide-in-right"
                            : "dynamic-slide-in-left"
                        : ""
                }`}
                style={{
                    transform: isTransitioning
                        ? "translateX(0)"
                        : "translateX(0)",
                    transition: isTransitioning ? "none" : "none",
                }}
                key={displayLocation.pathname}
            >
                {children}
            </div>
        </div>
    );
}
