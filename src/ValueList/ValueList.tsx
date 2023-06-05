import React from "react";
import { ListItem, ListItemType } from "./ListItem";
import { Root } from "./styles";

type Props = {
  items: ListItemType[];
};

export const ValueList = ({ items }: Props) => {
  return (
    <Root marginBottom="small">
      {items.map((item) => (
        <ListItem key={item.label} item={item} />
      ))}
    </Root>
  );
};
