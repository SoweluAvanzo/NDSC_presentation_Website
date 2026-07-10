# Frontend image — build the Vite SPA, serve it with Caddy.
# Caddy also reverse-proxies /api to the `api` service so the whole site
# is one self-contained, same-origin unit.

# ---- build stage ----
FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

# ---- serve stage ----
FROM caddy:2-alpine
# Strip the binary's file capability so it can exec under no-new-privileges
# (Caddy listens on unprivileged :8080 and needs no capability).
RUN apk add --no-cache libcap \
    && setcap -r /usr/bin/caddy \
    && apk del libcap
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist /srv
EXPOSE 8080
