FROM node:12.18 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build-prod

FROM nginx

WORKDIR /var/www/rcg-app

COPY --from=builder /app/www/ .

COPY nginx.conf /etc/nginx/
