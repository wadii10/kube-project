FROM node:18.17.1 AS build

WORKDIR /app

COPY package.json ./

RUN npm config set fetch-retry-maxtimeout 120000

RUN npm config set registry https://registry.npmjs.org/

RUN npm cache clean --force

RUN npm install

COPY . .

RUN npm install --save-dev @types/node

RUN npm run build --prod

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/mcq-lab /usr/share/nginx/html

EXPOSE 5000

CMD ["nginx", "-g", "daemon off;"]
