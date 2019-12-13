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
module.exports = (phase, { defaultConfig }) => {
  // https://github.com/zeit/
  return {
    env: {
      // 替代项目中的 __dirname, 解决 Nextjs 中 __dirname 不正确的问题, __dirname 总是等于 /
      PROJECT_DIRNAME: __dirname
    }
  };
};
