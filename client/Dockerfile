# Use an official Node.js runtime as a build stage
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json / yarn.lock (if any)
COPY package.json ./
COPY package-lock.json ./
# or if you use yarn:
# COPY yarn.lock ./

# Install dependencies
RUN npm install

# Copy rest of the application code
COPY . .

# Build the Vite project (run tsc first as you have in your build script)
RUN npm run build

# Use an official Nginx image to serve the built files
FROM nginx:stable-alpine

# Copy built static files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
