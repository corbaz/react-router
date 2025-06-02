FROM node:20-alpine@sha256:ef3f47741e161900ddd07addcaca7e76534a9205e4cd73d2fe6da6da4720ncaa AS development-dependencies-env
COPY . /app
WORKDIR /app
RUN npm ci

FROM node:20-alpine@sha256:ef3f47741e161900ddd07addcaca7e76534a9205e4cd73d2fe6da6da4720ncaa AS production-dependencies-env
COPY ./package.json package-lock.json /app/
WORKDIR /app
RUN npm ci --omit=dev

FROM node:20-alpine@sha256:ef3f47741e161900ddd07addcaca7e76534a9205e4cd73d2fe6da6da4720ncaa AS build-env
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN npm run build

FROM node:20-alpine@sha256:ef3f47741e161900ddd07addcaca7e76534a9205e4cd73d2fe6da6da4720ncaa
COPY ./package.json package-lock.json /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app

# Add non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 -G nodejs

# Set proper ownership
RUN chown -R nodejs:nodejs /app

# Set production environment
ENV NODE_ENV=production

# Security headers and policies
ENV NPM_CONFIG_AUDIT=true
ENV NPM_CONFIG_PRODUCTION=true
ENV NPM_CONFIG_FUND=false
ENV NPM_CONFIG_LOGLEVEL=error

# Minimizar el riesgo por vulnerabilidades
RUN npm audit fix --production

# Switch to non-root user
USER nodejs

# Healthcheck para verificar que la aplicación está funcionando
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

CMD ["npm", "run", "start"]