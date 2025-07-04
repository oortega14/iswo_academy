# Dockerfile para React 19 + Vite + pnpm (solo desarrollo)
FROM node:20-alpine AS dev
WORKDIR /app

# Instala pnpm globalmente
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copia los archivos necesarios
COPY package.json pnpm-lock.yaml ./
COPY tsconfig.json ./
COPY tsconfig.app.json ./
COPY tsconfig.node.json ./
COPY vite.config.ts ./

# Instala dependencias
RUN pnpm install --frozen-lockfile

# Copia el resto del código
COPY . .

# Expone el puerto de Vite
EXPOSE 5173

# Comando por defecto: modo desarrollo
CMD ["pnpm", "run", "dev", "--host"]
