## Next 项目部署

dockerfile 通过 Docker 启动

```dockerfile
FROM node:10.15

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .
RUN npm run build

EXPOSE 8010

# CMD ["npm", "run", "start"]

# CMD [ "PORT=8010 npm run start " ]

CMD PORT=8010 npm start


```

构建镜像

```bash
docker build -t next-demo .
```

生成容器

```bash
docker run --name next-demo -it -d -p 8010:8010 next-demo
```
