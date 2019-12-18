/**
 * 自定义的 Document
 *   1. 在服务端呈现
 *   2. 初始化服务端时添加文档标记元素
 *   3. 通常实现服务端渲染会使用一些 css-in-js 库，
 *      如styled-components, glamorous 或 emotion。styled-jsx是 Next.js 自带默认使用的 css-in-js 库
 *   4. <Main />外的 React 组件将不会渲染到浏览器中，所以不要添加应用逻辑代码。
 *      如果你页面需要公共组件（菜单或工具栏），可以参照上面说的App组件代替。
 *
 *  tips:
 *   1. 只渲染在服务端
 *   2. 点击事件无效
 *   3. 钩子getInitialProps接收到的参数ctx对象都是一样的
 *      回调函数renderPage是会执行 React 渲染逻辑的函数(同步)，
 *      这种做法有助于此函数支持一些类似于 Aphrodite 的 renderStatic 等一些服务器端渲染容器。
 *   4. 注意：<Main />外的 React 组件将不会渲染到浏览器中，所以那添加应用逻辑代码。
 *      如果你页面需要公共组件（菜单或工具栏），可以参照上面说的App组件代替。
 */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  /**
   *  1. client 渲染不会执行 getInitialProps, 无论是否启用 static 静态页面优化
   *  2. next export 导出静态页面时，ctx.req, ctx.res 都是 undefined
   *  3. ctx 的参数和其他 getInitialProps 中的参数一样
   * @param ctx
   */
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
