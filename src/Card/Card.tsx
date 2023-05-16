import React from "react";

import { Root } from "./styles";

type Props = {
  children: React.ReactNode;
};

export const Card = ({ children }: Props) => {
  return <Root>{children}</Root>;
};
