FROM node:10.16.0-alpine
MAINTAINER Krishani;

RUN mkdir -p /app/public /app/src
COPY ./public /app/public
COPY ./src /app/src

WORKDIR /app

EXPOSE 8080

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install

CMD ["npm", "run", "start"]
