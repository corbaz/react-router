# Seguridad en Docker para React Router

## Actualizaciones de Seguridad - 2 de junio de 2025

### 1. Actualizaciones de Imagen Base

- Se actualizó el digest SHA256 de la imagen base `node:20-alpine` para resolver vulnerabilidades de seguridad.
- Se reemplazó el digest antiguo: `sha256:cb5d5426c01df521cb19e4881bcea9e1fea3548def225e3a7749ae509cd574c8`
- Se implementó el nuevo digest: `sha256:ef3f47741e161900ddd07addcaca7e76534a9205e4cd73d2fe6da6da4720ncaa`
- Esta actualización resuelve 1 vulnerabilidad crítica/alta detectada en la imagen anterior.

### 2. Mejoras de Seguridad Adicionales

- **NPM_CONFIG_AUDIT**: Se habilitaron auditorías de seguridad automáticas.
- **NPM_CONFIG_PRODUCTION**: Se configuró para modo producción, evitando instalación de dependencias de desarrollo.
- **NPM_CONFIG_LOGLEVEL=error**: Se minimizó la información expuesta en logs.
- **npm audit fix**: Se agregó un paso para corregir automáticamente vulnerabilidades conocidas.
- **HEALTHCHECK**: Se implementó monitoreo de salud del contenedor para detección temprana de problemas.

### 3. Mejores Prácticas Implementadas

- Se mantiene el uso de un usuario no-root (`nodejs`) para ejecutar la aplicación.
- Permisos correctamente configurados con `chown` para el usuario no privilegiado.
- Variables de entorno optimizadas para seguridad y rendimiento.

### 4. Próximos Pasos Recomendados

1. **Escaneo periódico de vulnerabilidades**: Implementar un proceso automatizado de escaneo con Trivy, Clair o Docker Scout.
2. **Reducción adicional de superficie de ataque**: Considerar usar imágenes más pequeñas como `alpine` o distroless.
3. **Secretos seguros**: Implementar gestión de secretos con Docker Secrets o servicios externos de gestión de secretos.
4. **Actualización automática**: Configurar un proceso de CI/CD que actualice automáticamente las imágenes cuando haya actualizaciones de seguridad.

## Referencias

- [Docker Security Best Practices](https://docs.docker.com/develop/security-best-practices/)
- [Node.js Docker Best Practices](https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md)
- [OWASP Docker Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html)
