FROM node:20-alpine

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
COPY . .

ARG BASE_URL
ARG PORT
ARG HOST


ENV BASE_URL=${BASE_URL}
ENV PORT=${PORT}
ENV HOST=${HOST}

RUN npm install

EXPOSE ${PORT} 

CMD ["npm", "run" ,"dev"]