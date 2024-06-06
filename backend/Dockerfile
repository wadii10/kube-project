# Stage 1: Build Node.js environment
FROM node:18.17.1 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if using)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy your Node.js application code
COPY . .


# Expose port 80 (or adjust as needed)
EXPOSE 3000

# Start the server using CMD
CMD ["npm", "start"]