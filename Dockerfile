# --- Etapa 1: "Builder" ---
# En esta etapa, instalamos todas las dependencias (incluidas las de desarrollo)
# y compilamos el código TypeScript a JavaScript.

FROM node:20-alpine AS builder

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos de manifiesto del paquete
COPY package.json package-lock.json ./

# Instalar TODAS las dependencias (npm ci es más rápido y seguro para CI/CD)
RUN npm ci

# Copiar todo el código fuente
COPY . .

# Generar la build de producción (compila TS a JS en la carpeta /dist)
RUN npm run build

# --- Etapa 2: "Production" ---
# Esta es la etapa final. Construimos una imagen limpia desde cero
# copiando solo lo ESTRICTAMENTE necesario de la etapa "builder".

FROM node:20-alpine

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los package.json/lock (necesarios para instalar solo deps de prod)
COPY package.json package-lock.json ./

# Instalar SOLO las dependencias de producción
RUN npm ci --omit=dev

# Copiar la carpeta 'dist' compilada desde la etapa 'builder'
COPY --from=builder /usr/src/app/dist ./dist

# Copiar la carpeta 'node_modules' (opcional, pero puede ser necesario si usas assets)
# Si tu app no necesita nada de node_modules (ej. plantillas), puedes omitir esto
# y la instalación de 'npm ci --omit=dev' de arriba, pero la mayoría de apps lo necesitan.

# Exponer el puerto en el que corre la app NestJS (por defecto 3000)
EXPOSE 3000

# El comando para iniciar la aplicación en producción
CMD ["node", "dist/main.js"]