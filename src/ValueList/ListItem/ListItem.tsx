import React from "react";
import { Label, Value } from "./styles";

export type ListItemType = {
  label: string;
  value: string | React.ReactNode;
};

type Props = {
  item: ListItemType;
};

export const ListItem = ({ item }: Props) => {
  return (
    <li>
      <Label>{item.label}</Label>
      <Value>{item.value}</Value>
    </li>
  );
};
