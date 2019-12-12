import React from "react";
import { NextPage } from "next";
import { User } from "../interfaces";
import Link from "next/link";

interface ListItemProps {
  data: User;
}
const ListItem: NextPage<ListItemProps> = ({ data }) => {
  return (
    <Link href="/users/[id]" as={`/users/${data.id}`}>
      <a>
        {data.id}: {data.name}
      </a>
    </Link>
  );
};

export default ListItem;
