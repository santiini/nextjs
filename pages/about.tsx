import React from "react";
import { NextPage } from "next";
import Link from "next/link";

const AboutPage: NextPage = () => (
  <div>
    <h2>Abount</h2>
    <p>this is about page</p>
    <p>
      <Link href="/">
        <a>Go Home</a>
      </Link>
    </p>
  </div>
);

export default AboutPage;
