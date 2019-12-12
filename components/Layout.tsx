import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

interface LayoutProps {
  title?: string;
}

const Layout: NextPage<LayoutProps> = ({
  children,
  title = "This is the default title"
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        {`  |  `}
        <Link href="/about">
          <a>About</a>
        </Link>
        {`  |  `}
        <Link href="/users">
          <a>Users List</a>
        </Link>
        {`  |  `}
        <Link href="/cars">
          <a>Cars</a>
        </Link>
        {`  |  `}
        <Link href="/login">
          <a>Login</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>This is a Footer</span>
    </footer>
  </div>
);

export default Layout;
