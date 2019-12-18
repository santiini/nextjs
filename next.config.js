/**
 * next 的配置文件
 */
/* 形式1： 对象 */
// module.exports = {
//   env: {
//     // 替代项目中的 __dirname, 解决 Nextjs 中 __dirname 不正确的问题, __dirname 总是等于 /
//     PROJECT_DIRNAME: __dirname
//   }
// };

/* 形式2 */
/**
 * phase：
 *   1. phase是配置文件被加载时的当前内容；
 *   2. 你可看到所有的 phases 常量: 这些常量可以通过next/constants引入
 *      https://github.com/zeit/next.js/blob/7.0.0-canary.8/lib/constants.js
 *
 * defaultConfig： webpack 配置
 */
// module.exports = (phase, { defaultConfig }) => {
//   // https://github.com/zeit/
//   return {
//     env: {
//       // 替代项目中的 __dirname, 解决 Nextjs 中 __dirname 不正确的问题, __dirname 总是等于 /
//       PROJECT_DIRNAME: __dirname
//     }
//   };
// };

/**
 * 形式3
 * @next/bundle-analyzer 等 @next 插件使用
 */
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true"
// });

// module.exports = withBundleAnalyzer({
//   env: {
//     PROJECT_DIRNAME: __dirname
//   },
//   target: "serverless"
// });

/**
 * 形式4
 * @zeit/next-less 使用 less
 */
const lessToJS = require("less-vars-to-js");
const fs = require("fs");
const path = require("path");

// less to js
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./assets/antd-custom.less"), "utf8")
);

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});
const withLess = require("@zeit/next-less");

module.exports = withBundleAnalyzer(
  withLess({
    // 禁止 /pages 下的文件作为路由，一般和自定义的 server.js 配合使用
    // tips: 1. 只适用于 ssr 路由  2. client 路由需要配合 popstate 拦截处理
    useFileSystemPublicRoutes: false, //
    // 环境变量
    env: {
      PROJECT_DIRNAME: __dirname
    },
    // 使用 serverless 页面
    target: "serverless",
    // less-loader, css-loader, postcss-loader
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables
    },
    // webpack
    webpack: (config, { isServer }) => {
      // isServer 处理 antd
      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/;
        const origExternals = [...config.externals];

        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === "function") {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === "function" ? [] : origExternals)
        ];

        config.module.rules.unshift({
          test: antStyles,
          use: "null-loader"
        });
      }

      // alias 别名配置
      config.resolve.alias = {
        ...config.resolve.alias,
        components: path.resolve(__dirname, "./components")
      };
      return config;
    }
  })
);
