import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage: NextPage = () => (
  <Layout>
    <h2>Abount</h2>
    <p>this is about page</p>
    <p>
      <Link href="/">
        <a>Go Home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
