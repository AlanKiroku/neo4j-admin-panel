FROM node:latest

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /app
COPY . /app

RUN yarn build
RUN yarn global add serve

CMD ["serve", "-s", "build", "-p", "5000"]

EXPOSE 5000