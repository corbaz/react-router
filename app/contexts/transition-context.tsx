import { useState, type ReactNode } from "react";
import { getRouteOrder, SYSTEM_CONFIG } from "~/config/config";
import { TransitionContext, type TransitionSpeed } from "~/contexts/transition-context-types";

export function TransitionProvider({ children }: { children: ReactNode }) {
    const [speed, setSpeed] = useState<TransitionSpeed>(
        SYSTEM_CONFIG.transitions.defaultSpeed as TransitionSpeed,
    );
    const routeOrder = getRouteOrder();

    return (
        <TransitionContext.Provider value={{ speed, setSpeed, routeOrder }}>
            {children}
        </TransitionContext.Provider>
    );
}

// Hook movido a app/hooks/use-transition.ts para resolver problemas de Fast Refresh
