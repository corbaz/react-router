import { useTransition } from "../contexts/transition-context";
import { TRANSITION_SPEEDS } from "./mobile-slide-transition";

export function SpeedSelector() {
    const { speed, setSpeed } = useTransition();

    const speedOptions: Array<{
        value: keyof typeof TRANSITION_SPEEDS;
        label: string;
        description: string;
    }> = [
        { value: "ultra-fast", label: "Súper Rápido", description: "150ms" },
        { value: "fast", label: "Rápido", description: "300ms" },
        { value: "normal", label: "Normal", description: "600ms" },
        { value: "slow", label: "Lento", description: "1200ms" },
        { value: "ultra-slow", label: "Súper Lento", description: "2500ms" },
        { value: "debug", label: "Debug", description: "5000ms" },
    ];

    return (
        <div className="flex items-center space-x-2">
            <label htmlFor="speed-selector" className="text-sm font-medium">
                Velocidad:
            </label>
            <select
                id="speed-selector"
                value={speed}
                onChange={(e) =>
                    setSpeed(e.target.value as keyof typeof TRANSITION_SPEEDS)
                }
                className="text-sm bg-pink-700 text-white border border-pink-500 rounded px-2 py-1 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-300"
                title={`Duración actual: ${TRANSITION_SPEEDS[speed]}ms`}
            >
                {speedOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label} ({option.description})
                    </option>
                ))}
            </select>
        </div>
    );
}
