FROM node:20-alpine

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
COPY . .

RUN yarn install && yarn build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV BASE_URL=http://localhost:1337

EXPOSE 3000 

ENTRYPOINT ["node", ".output/server/index.mjs"]