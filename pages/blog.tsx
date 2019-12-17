import React from "react";
import { NextPage } from "next";
import Layout from "../components/Layout";
import Link from "next/link";

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
    </Layout>
  );
};

export default Blog;
