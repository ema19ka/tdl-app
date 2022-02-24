FROM nikolaik/python-nodejs:python3.10-nodejs17-alpine as development

WORKDIR /app
RUN npm install -g nodemon
COPY package*.json /app/
RUN npm install
COPY . ./
EXPOSE ${FRONTEND_PORT}

CMD ["/bin/sh", "./frontend_watcher.sh"]