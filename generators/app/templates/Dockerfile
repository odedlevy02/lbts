FROM node:11-alpine

WORKDIR /var/src

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD ["node","server/server.js"]