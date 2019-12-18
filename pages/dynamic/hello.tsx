/**
 * 基础的动态导入
 */
import React from "react";
import dynamic from "next/dynamic";
import Layout from "components/Layout";
import { NextPage } from "next";

interface Hello2Props {
  name: string;
}
// 动态： 按需加载组件
const Hello = dynamic<Hello2Props>(() =>
  import("components/Hello/Hello2").then(mod => mod.Hello2)
);

const BaseDynamic: NextPage = () => {
  return (
    <Layout>
      <Hello name="hello2" />
    </Layout>
  );
};

export default BaseDynamic;
