FROM node:18.16.0

WORKDIR /usr/src/app

COPY . .

RUN apt-get update && apt-get install -y wget

EXPOSE 3000

CMD ["node","app.js"]
