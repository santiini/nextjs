/**
 * Typescript Nextjs
 */
import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";

interface HomeProps {
  userAgent: string;
}
const Home: NextPage<HomeProps> = ({ userAgent }) => (
  <Layout>
    <h2>Hello NextJs, user</h2>
    <div>user agend: {userAgent}</div>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

// 数据获取
Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Home;
