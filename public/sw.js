// Service worker vacío para evitar errores 404
// Este archivo resuelve las solicitudes automáticas del navegador por sw.js

self.addEventListener("install", () => {
    // Sin implementación - service worker vacío
    console.log("Service worker instalado");
});

self.addEventListener("fetch", () => {
    // Sin implementación - sin interceptación de solicitudes
});
