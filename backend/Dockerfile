FROM node:current-alpine3.15 as development

RUN apk add g++ make python3
WORKDIR /app
RUN npm install -g nodemon
COPY package*.json ./
RUN npm install
RUN npm install axios
COPY ./ ./
EXPOSE ${BACKEND_PORT}

CMD ["/bin/sh", "./backend_watcher.sh"]
