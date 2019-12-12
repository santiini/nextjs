import Layout from "./Layout";
import { NextPage } from "next";

const layoutStyle = {
  margin: 50,
  padding: 50,
  border: "1px solid #ddd"
};

const withLayout = (Page: NextPage) => () => (
  <div style={layoutStyle}>
    <Layout>
      <Page />
    </Layout>
  </div>
);

export default withLayout;
