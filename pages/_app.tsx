/**
 * 自定义 App.js -- 项目启动文件
 *   1. 当页面变化时保持页面布局
 *   2. 当路由变化时保持页面状态
 *   3. 使用componentDidCatch自定义处理错误
 *   4. 注入额外数据到页面里 (如 GraphQL 查询)
 */
import App from "next/app";
import React, { ErrorInfo } from "react";

class MyApp extends App {
  // 这会导致所有的页面都是 ssr, 不能 static optimization 静态页面优化
  // static async getInitialProps(appContext: any) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);

  //   return { ...appProps };
  // }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error);
    console.log(info.componentStack);
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
