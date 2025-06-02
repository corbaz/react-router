import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
    build: {
        outDir: "docs", // Carpeta donde se va a generar el build
        emptyOutDir: true, // Limpia la carpeta antes de cada build
    },
    base: "/react-router/", // ¡Muy importante para GitHub Pages!
});
