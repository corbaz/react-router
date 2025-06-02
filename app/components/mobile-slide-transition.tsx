import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { getTransitionSpeeds } from "~/config/config";
import { useNavigation } from "~/hooks/use-navigation";
import { useTransition } from "~/hooks/use-transition";

interface MobileSlideTransitionProps {
    children: React.ReactNode;
}

export function MobileSlideTransition({ children }: MobileSlideTransitionProps) {
    const location = useLocation();
    const { speed } = useTransition();
    const { getNavigationDirection } = useNavigation();
    const transitionSpeeds = getTransitionSpeeds();
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [direction, setDirection] = useState<"forward" | "backward">("forward");

    // Estados para contenido de páginas
    const [_previousPageContent, setPreviousPageContent] = useState<React.ReactNode>(null);
    const [currentPageContent, setCurrentPageContent] = useState<React.ReactNode>(children);

    const previousLocation = useRef(location);
    const isFirstRender = useRef(true);
    const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const duration = transitionSpeeds[speed];

    // Inicialización
    useEffect(() => {
        if (isFirstRender.current) {
            setCurrentPageContent(children);
            isFirstRender.current = false;
        }
    }, [children]);

    // Manejo de transiciones
    useEffect(() => {
        if (location.pathname !== previousLocation.current.pathname && !isFirstRender.current) {
            // 1. Capturar contenido actual
            setPreviousPageContent(currentPageContent); // 2. Determinar dirección usando el hook mejorado
            const newDirection = getNavigationDirection(
                previousLocation.current.pathname,
                location.pathname,
            );
            setDirection(newDirection);

            // 3. Actualizar contenido y empezar transición
            setCurrentPageContent(children);
            setIsTransitioning(true);

            previousLocation.current = location;

            // 4. Limpiar timeout anterior
            if (transitionTimeoutRef.current) {
                clearTimeout(transitionTimeoutRef.current);
            }

            // 5. Finalizar transición
            transitionTimeoutRef.current = setTimeout(() => {
                setIsTransitioning(false);
                setPreviousPageContent(null);
            }, duration);
        }
    }, [
        location.pathname,
        duration,
        children,
        currentPageContent,
        getNavigationDirection,
        location,
    ]);

    // Cleanup
    useEffect(() => {
        return () => {
            if (transitionTimeoutRef.current) {
                clearTimeout(transitionTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div className="relative w-full overflow-hidden" style={{ minHeight: "500px" }}>
            {" "}
            {/* Página anterior - SE DESVANECE (opacity) 
            {isTransitioning && previousPageContent && (
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        transition: `opacity ${duration * 5.5}ms ease-in-out`,
                        opacity: 60, // Se desvanece
                    }}
                >
                    {previousPageContent}
                </div>
            )}*/}
            {/* Página nueva - ENTRA DESLIZANDO desde el lado correcto */}
            <div
                className="relative w-full h-full z-20"
                style={{
                    transition: isTransitioning
                        ? `transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
                        : "none",
                    transform: isTransitioning
                        ? "translateX(0)" // Termina en el centro
                        : "translateX(0)", // Posición normal
                    // Empieza desde el lado correcto cuando hay transición
                    ...(isTransitioning && {
                        animation:
                            direction === "forward"
                                ? `slideInFromRight ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
                                : `slideInFromLeft ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                    }),
                }}
            >
                {currentPageContent}
            </div>
        </div>
    );
}
