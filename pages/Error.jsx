/**
 * 自定义的 Error
 *   1. 使用内置的 Error 页面
 *   2. 在 _error 中, 如果你自定义了个错误页面，你可以引入自己的错误页面来代替next/error
 */
import React from "react";
import Error from "next/error";
import fetch from "isomorphic-unfetch";

export default class Page extends React.Component {
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/repos/zeit/next.js");
    const statusCode = res.statusCode > 200 ? res.statusCode : false;
    const json = await res.json();

    return { statusCode, stars: json.stargazers_count };
  }

  render() {
    if (this.props.statusCode) {
      return <Error statusCode={this.props.statusCode} />;
    }

    return <div>Next stars: {this.props.stars}</div>;
  }
}
