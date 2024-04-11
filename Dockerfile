FROM node:alpine3.10

WORKDIR /code
COPY package.json package.json
RUN npm i
COPY src/index.js app.js
ENTRYPOINT [ "/usr/local/bin/node", "app.js" ]
