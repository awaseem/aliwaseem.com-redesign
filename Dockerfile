FROM node:7.0.0-slim

RUN mkdir src/

WORKDIR /src

COPY . /src

ENV NODE_ENV production

RUN cd /src; npm install

expose 3000

CMD ["npm", "run", "prod"]
