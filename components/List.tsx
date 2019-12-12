import React from "react";
import { NextPage } from "next";
import { User } from "../interfaces";
import ListItem from "./ListItem";

interface ListProps {
  items: User[];
}
const List: NextPage<ListProps> = props => {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>
          <ListItem data={item} />
        </li>
      ))}
    </ul>
  );
};

export default List;
