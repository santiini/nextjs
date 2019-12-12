import { NextPage } from "next";

/**
 * Typescript Nextjs
 */
interface HomeProps {
  userAgent: string;
}
const Home: NextPage<HomeProps> = ({ userAgent }) => (
  <div>
    <h2>Hello NextJs, user</h2>
    <div>user agend: {userAgent}</div>
  </div>
);

// 数据获取
Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Home;
