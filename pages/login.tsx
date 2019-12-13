/**
 * Jest 测试后组件的引用
 */
import Login from "../src/modules/auth/Login";
import Layout from "../components/Layout";

const LoginPage = () => (
  <Layout>
    <Login />
    <img src="/meimei.jpeg" />
  </Layout>
);

export default LoginPage;
