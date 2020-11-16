### STAGE 1: Build ###
FROM node:latest as build

WORKDIR /opt/app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn run build


FROM nginx:1.13.12-alpine
COPY --from=build /opt/app/build /usr/share/nginx/html
COPY --from=build /opt/app/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
