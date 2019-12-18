import React from "react";
import { NextPage } from "next";

interface LoadingProps {}
const Loading: NextPage<LoadingProps> = () => {
  console.log("loading...");

  return <p style={{ textAlign: "center" }}>...</p>;
};

export default Loading;
