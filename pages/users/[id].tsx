import React from "react";
import { User } from "../../interfaces";
import Layout from "../../components/Layout";
import ListDetail from "../../components/ListDetail";
import { NextPageContext } from "next";
import { fetchWrapper } from "../../utils/sample-api";

interface UserDetailProps {
  item?: User;
  errors?: string;
}
class UserDetail extends React.Component<UserDetailProps> {
  static getInitialProps = async ({ query }: NextPageContext) => {
    try {
      const { id } = query;
      const item = await fetchWrapper(
        `http://localhost:4000/api/users/${Array.isArray(id) ? id[0] : id}`
      );
      return { item };
    } catch (err) {
      return { errors: err.message };
    }
  };

  render() {
    const { item, errors } = this.props;
    if (errors) {
      return (
        <Layout title="Error | Next">
          <p>
            <span style={{ color: "red" }}>Error:</span> {errors}
          </p>
        </Layout>
      );
    }
    return (
      <Layout title={`${item ? item.name : "User Detail"} Next.js`}>
        {item && <ListDetail item={item} />}
      </Layout>
    );
  }
}

export default UserDetail;
