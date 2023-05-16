import React from "react";
import { SeparatorRoot } from "./styles";
import { MarginType } from "../styles";

type Props = {
  orientation?: "horizontal" | "vertical";
} & MarginType;

const Separator = ({ orientation = "horizontal", ...rest }: Props) => (
  <SeparatorRoot decorative orientation={orientation} {...rest} />
);

export default Separator;
