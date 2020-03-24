FROM node:13.10.1-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
ENTRYPOINT npm start