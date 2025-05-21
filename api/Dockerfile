# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package.json ./
COPY package-lock.json ./

# Install only production dependencies
RUN npm install --production

# Copy the rest of the app source code
COPY . .

# Set environment variable for production
ENV NODE_ENV=production

# Expose the port your app runs on (adjust if needed)
EXPOSE 8080

# Start the app in production mode
CMD ["npm", "run", "prod"]
