/**
 * 自定义的 Error 页面 --- 404 和 500 错误
 *   1. 只在 production 生效
 */
import React from "react";
import { NextPage } from "next";

interface ErrorProps {
  statusCode?: number;
}
const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
