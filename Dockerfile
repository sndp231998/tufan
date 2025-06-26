# Stage 1: Build the application
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the built app with a Node.js static server
FROM node:20-alpine

WORKDIR /app

# Install a static file server (serve)
RUN npm install -g serve

COPY --from=build /app/dist .

EXPOSE 5173

CMD ["serve", "-s", ".", "-l", "5173"]