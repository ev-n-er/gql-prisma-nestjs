FROM node:24-alpine

RUN apk update && apk add \
    bash \
    curl

EXPOSE 8080

WORKDIR /dist

USER 1000

CMD [ "npm", "run", "start" ]
