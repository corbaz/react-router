import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { getTransitionSpeeds } from "~/config/config";
import { useNavigation } from "~/hooks/use-navigation";
import { useTransition } from "~/hooks/use-transition";

interface MobileSlideTransitionProps {
    children: React.ReactNode;
}

export function MobileSlideTransition({
    children,
}: MobileSlideTransitionProps) {
    const location = useLocation();
    const { speed } = useTransition();
    const { getNavigationDirection } = useNavigation();
    const transitionSpeeds = getTransitionSpeeds();
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [direction, setDirection] = useState<"forward" | "backward">(
        "forward",
    );

    const [_previousPageContent, setPreviousPageContent] =
        useState<React.ReactNode>(null);

    const previousLocation = useRef(location);
    const isFirstRender = useRef(true);
    const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
        null,
    );

    const duration = transitionSpeeds[speed];

    // Manejo de transiciones - solo después del primer render
    useEffect(() => {
        // Marcar como no primer render después del primer ciclo
        if (isFirstRender.current) {
            isFirstRender.current = false;
            previousLocation.current = location;
            return;
        }

        // Solo hacer transiciones si cambió la ruta
        if (location.pathname !== previousLocation.current.pathname) {
            // 1. Capturar contenido anterior
            setPreviousPageContent(children);

            // 2. Determinar dirección
            const newDirection = getNavigationDirection(
                previousLocation.current.pathname,
                location.pathname,
            );
            setDirection(newDirection);

            // 3. Empezar transición
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
    }, [location, children, duration, getNavigationDirection]);

    // Cleanup
    useEffect(() => {
        return () => {
            if (transitionTimeoutRef.current) {
                clearTimeout(transitionTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div
            className="relative w-full overflow-hidden"
            style={{ minHeight: "500px" }}
        >
            {/* Página anterior - SE DESVANECE (comentado por ahora) */}
            {/*isTransitioning && previousPageContent && (
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        transition: `opacity ${duration * 5.5}ms ease-in-out`,
                        opacity: 60,
                    }}
                >
                    {previousPageContent}
                </div>
            )*/}

            {/* Página actual - siempre visible */}
            <div
                className="relative w-full h-full z-20"
                style={{
                    transition: isTransitioning
                        ? `transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
                        : "none",
                    transform: "translateX(0)",
                    ...(isTransitioning && {
                        animation:
                            direction === "forward"
                                ? `slideInFromRight ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
                                : `slideInFromLeft ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                    }),
                }}
            >
                {children}
            </div>
        </div>
    );
}
