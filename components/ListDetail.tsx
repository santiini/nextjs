import React from "react";
import { NextPage } from "next";
import { User } from "../interfaces";

interface ListDetailProps {
  item: User;
}
const ListDetail: NextPage<ListDetailProps> = ({ item: user }) => {
  return (
    <div>
      <h2>Detail for {user.name}</h2>
      <p>ID: {user.id}</p>
    </div>
  );
};

export default ListDetail;
