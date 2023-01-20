FROM node:19-alpine3.16
WORKDIR /home/app
COPY . .
RUN npm install
RUN npm install -g nodemon

