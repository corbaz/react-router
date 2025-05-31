import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type TransitionSpeed =
    | "ultra-fast"
    | "fast"
    | "normal"
    | "slow"
    | "ultra-slow"
    | "debug";

interface TransitionContextType {
    speed: TransitionSpeed;
    setSpeed: (speed: TransitionSpeed) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(
    undefined
);

export function TransitionProvider({ children }: { children: ReactNode }) {
    const [speed, setSpeed] = useState<TransitionSpeed>("normal");

    return (
        <TransitionContext.Provider value={{ speed, setSpeed }}>
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
