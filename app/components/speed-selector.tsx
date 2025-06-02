import { getTransitionSpeeds } from "~/config/config";
import { useTransition } from "~/hooks/use-transition";

export function SpeedSelector() {
    const { speed, setSpeed } = useTransition();
    const transitionSpeeds = getTransitionSpeeds();

    const speedOptions: Array<{
        value: keyof typeof transitionSpeeds;
        label: string;
        description: string;
    }> = [
        {
            value: "ultra-fast",
            label: "Súper Rápido",
            description: `${transitionSpeeds["ultra-fast"]}ms`,
        },
        {
            value: "fast",
            label: "Rápido",
            description: `${transitionSpeeds.fast}ms`,
        },
        {
            value: "normal",
            label: "Normal",
            description: `${transitionSpeeds.normal}ms`,
        },
        {
            value: "slow",
            label: "Lento",
            description: `${transitionSpeeds.slow}ms`,
        },
        {
            value: "ultra-slow",
            label: "Súper Lento",
            description: `${transitionSpeeds["ultra-slow"]}ms`,
        },
        {
            value: "debug",
            label: "Debug",
            description: `${transitionSpeeds.debug}ms`,
        },
    ];

    return (
        <div className="flex items-center space-x-2">
            <label htmlFor="speed-selector" className="text-sm font-medium">
                Velocidad:
            </label>
            <select
                id="speed-selector"
                value={speed}
                onChange={(e) => setSpeed(e.target.value as keyof typeof transitionSpeeds)}
                className="text-sm bg-pink-700 text-white border border-pink-500 rounded px-2 py-1 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-300"
                title={`Duración actual: ${transitionSpeeds[speed]}ms`}
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
