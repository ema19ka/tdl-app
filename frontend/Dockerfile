FROM node:current-alpine3.15 as development

RUN apk add g++ make python3
WORKDIR /app
RUN npm install -g nodemon
RUN npm install -g ionic
COPY package*.json ./
RUN npm install
COPY ./ ./
EXPOSE ${FRONTEND_PORT}

CMD ["/bin/sh", "./frontend_watcher.sh"]
