FROM node:14-alpine as client_build
RUN npm install -g yarn
WORKDIR /app
COPY /client/package.json /app/
COPY /client/yarn.lock /app/
RUN yarn install
COPY /client /app
RUN npm run build


FROM node:14-alpine as server_build
WORKDIR /app
COPY /server/package*.json /app/
RUN npm install
COPY ./server /app
RUN npm run build


FROM node:14-alpine
WORKDIR /app
COPY --from=server_build /app/build /app
COPY /server/package.json /app/package.json
COPY /server/.env /app/.env
RUN npm install --only=prod

COPY --from=client_build /app/build /app/build

EXPOSE 4000
CMD ["node", "server.js"]
