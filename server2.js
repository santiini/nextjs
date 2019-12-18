/**
 * 动态的前缀
 */
const next = require("next");
const micro = require("micro");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handleNextRequests = app.getRequestHandler();

app.prepare().then(() => {
  const server = micro((req, res) => {
    // Add assetPrefix support based on the hostname
    if (req.headers.host === "my-app.com") {
      app.setAssetPrefix("http://cdn.com/myapp");
    } else {
      app.setAssetPrefix("");
    }

    handleNextRequests(req, res);
  });

  server.listen(port, err => {
    if (err) {
      throw err;
    }

    console.log(`> Ready on http://localhost:${port}`);
  });
});
