import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import {
    getRouteOrder,
    getDefaultTransitionSpeed,
    getTransitionSpeeds,
    SYSTEM_CONFIG,
} from "~/config/config";

type TransitionSpeed = keyof typeof SYSTEM_CONFIG.transitions.speeds;

interface TransitionContextType {
    speed: TransitionSpeed;
    setSpeed: (speed: TransitionSpeed) => void;
    /** Orden automático de rutas basado en configuración */
    routeOrder: string[];
}

const TransitionContext = createContext<TransitionContextType | undefined>(
    undefined
);

export function TransitionProvider({ children }: { children: ReactNode }) {
    const [speed, setSpeed] = useState<TransitionSpeed>(
        SYSTEM_CONFIG.transitions.defaultSpeed as TransitionSpeed
    );
    const routeOrder = getRouteOrder();

    return (
        <TransitionContext.Provider value={{ speed, setSpeed, routeOrder }}>
            {children}
        </TransitionContext.Provider>
    );
}

export function useTransition() {
    const context = useContext(TransitionContext);
    if (context === undefined) {
        throw new Error(
            "useTransition must be used within a TransitionProvider"
        );
    }
    return context;
}
