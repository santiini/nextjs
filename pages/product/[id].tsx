import React from "react";
import { NextPage } from "next";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

interface ProductProps {}
const Product: NextPage<ProductProps> = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <div>{id}</div>
    </Layout>
  );
};

export default Product;
