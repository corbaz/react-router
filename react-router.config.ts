// Archivo: react-router.config.ts

import type { Config } from "@react-router/dev/config";

// Detecta correctamente el entorno y asegura que basename comience igual que el base de Vite
const isProduction = process.env.NODE_ENV === "production";

export default {
    ssr: false, // SPA mode (ajustá si lo usás diferente)
    // En producción basename debe ser '/react-router'
    // En desarrollo basename debe ser '/' (no vacío), para que coincida con el base de Vite
    basename: isProduction ? "/react-router" : "/",
} satisfies Config;
