FROM node:10.15

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .
RUN npm run build

EXPOSE 8010

CMD ["npm", "run", "start"]
