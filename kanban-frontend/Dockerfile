# --- Etapa 1: Build ---
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- Etapa 2: Runtime ---
FROM nginx:alpine
COPY --from=build /app/dist/kanban-frontend/browser /usr/share/nginx/html
EXPOSE 80