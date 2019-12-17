import React from "react";
import { NextPage } from "next";
import { Button } from "antd";
import Link from "next/link";
import Layout from "../components/Layout";
import "./blog.less";

interface BlogProps {}
const Blog: NextPage<BlogProps> = () => {
  return (
    <Layout>
      <h2>Bolg</h2>
      <Link href="/blog/hello">
        <a>blog-hello</a>
      </Link>
      <br />
      <Link href="/blog/learn">
        <a>blog-learn</a>
      </Link>
      <br />
      <Link href="/blog/try">
        <a>blog-try</a>
      </Link>
      <div className="demo1">12222222222222</div>
      <div>
        <Button type="primary">Test Button</Button>
      </div>
    </Layout>
  );
};

export default Blog;
