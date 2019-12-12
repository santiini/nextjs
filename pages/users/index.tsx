import React from "react";
import { NextPage } from "next";
import { User } from "../../interfaces";
import Layout from "../../components/Layout";
import Link from "next/link";
import List from "../../components/List";
import { fetchWrapper } from "../../utils/sample-api";

interface UserProps {
  items: User[];
  pathname: string;
}
const UserPage: NextPage<UserProps> = ({ items, pathname }) => {
  return (
    <Layout title="User List">
      <h2>User Lists</h2>
      <p>
        Example fetching data from inside <code>getInitialProps()</code>
      </p>
      <p>Your are currently on: {pathname}</p>
      <List items={items} />
      <p>
        <Link href="/">
          <a>Go Home</a>
        </Link>
      </p>
    </Layout>
  );
};

UserPage.getInitialProps = async ({ pathname }) => {
  const items: User[] = await fetchWrapper("http://localhost:4000/api/users");
  return { items, pathname };
};

export default UserPage;
