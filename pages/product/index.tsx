import React, { useEffect } from "react";
import { NextPage } from "next";
import Layout from "../../components/Layout";
import Link from "next/link";
import { Router } from "next/router";

interface ProductList {}
const ProductList: NextPage<ProductList> = () => {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      console.log("App is changing to", url);
    };

    // Router 的事件监听
    Router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      Router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <Layout>
      <Link href="/product/111" as="/product/111">
        <a>111</a>
      </Link>
      <br />
      <Link href="/product/222" as="/product/222">
        <a>222</a>
      </Link>
      <br />
      <Link href="/product/333" as="/product/333">
        <a>333</a>
      </Link>
      <br />
    </Layout>
  );
};

export default ProductList;
