// Archivo: vite.config.js

// Importamos los plugins necesarios para Vite
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Exportamos la configuración de Vite usando una función para detectar el modo (dev/prod)
export default defineConfig(({ mode }) => ({
    plugins: [
        tailwindcss(), // Habilita Tailwind CSS
        reactRouter(), // Habilita el soporte de React Router en Vite
        tsconfigPaths(), // Soporte de paths desde tsconfig.json
    ],
    build: {
        outDir: "docs", // Carpeta de salida del build (ideal para GitHub Pages)
        emptyOutDir: true, // Limpia la carpeta antes de cada build
    },
    // Base path:
    // - En producción (GitHub Pages): '/react-router/' (el nombre de tu repo)
    // - En desarrollo: '/'
    base: mode === "production" ? "/react-router/" : "/",
}));
