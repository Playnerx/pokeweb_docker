# Utilizza l'immagine Node.js 16 Alpine come base
FROM node:16-alpine AS frontend

# Imposta la directory di lavoro nel contenitore
WORKDIR /app

# Copia il file package.json e package-lock.json
COPY /pokeweb-main/package*.json .

# Installa le dipendenze, inclusa Vite
RUN npm install

# Copia tutti i file del frontend nella directory di lavoro
COPY /pokeweb-main .

# Avvia l'applicazione React
# CMD ["npm", "run", "dev"]