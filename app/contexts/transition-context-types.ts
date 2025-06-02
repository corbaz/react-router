import { createContext } from "react";
import { SYSTEM_CONFIG } from "~/config/config";

export type TransitionSpeed = keyof typeof SYSTEM_CONFIG.transitions.speeds;

export interface TransitionContextType {
    speed: TransitionSpeed;
    setSpeed: (speed: TransitionSpeed) => void;
    /** Orden automático de rutas basado en configuración */
    routeOrder: string[];
}

export const TransitionContext = createContext<
    TransitionContextType | undefined
>(undefined);
