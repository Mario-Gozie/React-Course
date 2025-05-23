import React from "react";
import { ListItem } from "./ListItem.js";

export const List = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
