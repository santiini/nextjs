/**
 * 基础的动态导入
 */
import React from "react";
import { NextPage } from "next";
import Layout from "components/Layout";
import dynamic from "next/dynamic";
import Loading from "components/Loading";

// 动态： 按需加载组件
const Hello = dynamic(
  () => import("components/Hello"),
  // 自定义的 loading
  {
    loading: () => <Loading />
    // ssr: false  // 取消 ssr, client 渲染
  }
);

interface BaseDynamicProps {}
const BaseDynamic: NextPage<BaseDynamicProps> = () => {
  return (
    <Layout>
      <Hello name="hello1" />
    </Layout>
  );
};

export default BaseDynamic;
