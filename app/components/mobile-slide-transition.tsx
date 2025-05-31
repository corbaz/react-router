import { useLocation } from "react-router";
import { useEffect, useState, useRef } from "react";

interface MobileSlideTransitionProps {
    children: React.ReactNode;
}

const routeOrder = ["/", "/about", "/usuarios"];

export function MobileSlideTransition({
    children,
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
            setDisplayLocation(location);

            // Finalizar transición después de la animación
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setPreviousContent(null);
            }, 650); // Duración total de la animación + pequeño buffer

            return () => clearTimeout(timer);
        }
    }, [location.pathname, displayLocation.pathname]);
    return (
        <div
            ref={containerRef}
            className="relative w-full overflow-hidden mobile-transition-container"
            style={{ minHeight: "500px" }}
        >
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
                        transition:
                            "transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                >
                    {previousContent}
                </div>
            )}

            {/* Página nueva - se desliza hacia adentro (SIEMPRE VISIBLE durante la transición) */}
            <div
                className="relative w-full h-full z-20 mobile-transition-page"
                style={{
                    transform: isTransitioning
                        ? "translateX(0)"
                        : "translateX(0)",
                    transition: isTransitioning
                        ? "transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                        : "none",
                    ...(isTransitioning && {
                        transform: "translateX(0)",
                        animation:
                            direction === "forward"
                                ? "slide-in-right 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards"
                                : "slide-in-left 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
                    }),
                }}
                key={displayLocation.pathname}
            >
                {children}
            </div>
        </div>
    );
}
