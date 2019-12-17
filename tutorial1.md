## Nextjs 的开发意见

### 官网推荐

最佳推荐:

1. 大多数情况下，不需要自定义 server.js，所以推荐尽可能添加 `target: serverless` ;

   ```js
   // next.config.js
   module.exports = {
     target: "serverless"
   };
   ```

2. `getInitialProps` 是决定是否静态页面的主要因素，如果不需要 ssr, 就不要加;

3. 并非所有的动态数据都需要 `getInitialProps`，例如: 登录页面或者不需要 SEO 的页面， 可以把请求放在 `getInitialProps`外面，以便享受到 `static HTML`的好处。
