/**
 * 自定义的项目启动
 */
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    //
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    switch (pathname) {
      // 映射 /test1 ---> /try1
      case "/test1":
        app.render(req, res, "/try1", query);
        break;
      case "/test2":
        app.render(req, res, "/try2", query);
        break;
      default:
        handle(req, res, parsedUrl);
    }
  }).listen(4001, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:4001  ");
  });
});
