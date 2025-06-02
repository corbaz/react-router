import { useContext } from "react";
import {
    TransitionContext,
    type TransitionContextType,
} from "~/contexts/transition-context-types";

/**
 * Hook para acceder al contexto de transición
 * @returns El contexto de transición
 */
export function useTransition(): TransitionContextType {
    const context = useContext(TransitionContext);
    if (context === undefined) {
        throw new Error(
            "useTransition must be used within a TransitionProvider",
        );
    }
    return context;
}
