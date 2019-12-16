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
  <div className="app">
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
        {`  |  `}
        <Link href="/post">
          <a>Post Blog</a>
        </Link>
        {`  |  `}
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </nav>
    </header>
    <div className="main-content">{children}</div>
    <footer>
      <hr />
      <span>This is a Footer</span>
    </footer>
    <style jsx>{`
      :global(body) {
        height: 100%;
        padding: 0;
        margin: 0;
      }

      :global(html) {
        height: 100%;
        padding: 0;
        margin: 0;
      }

      :global(#__next) {
        height: 100%;
      }

      .main-content {
        width: 80%;
        padding: 0 80px;
      }

      .app {
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .main-content {
        flex: 1;
      }

      header,
      footer {
        padding: 20px 30px;
      }

      footer {
        text-align: center;
      }
    `}</style>
  </div>
);

export default Layout;
