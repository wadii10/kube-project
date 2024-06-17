# Stage 1: Build the Angular application
FROM node:18.17.1 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm install --save-dev @types/node

# Build the Angular application
RUN npm run build --prod

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Remove the default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy Nginx config file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built Angular application from the build stage
COPY --from=build /app/dist/mcq-lab /usr/share/nginx/html

EXPOSE 5000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
