import React from "react";
import { Label } from "../Label";
import { Root, Control } from "./styles";
import type { LayoutType } from "./types";
import type { SizeType } from "../../types";

type Props = {
  id?: string;
  children: React.ReactNode;
  label?: string;
  layout?: LayoutType;
  size?: SizeType;
};

export const FormGroup = ({
  id,
  children,
  label,
  layout = "vertical",
  size = "medium",
}: Props) => {
  return (
    <Root layout={layout}>
      {/* @ts-ignore */}
      <Label htmlFor={id} size={size}>
        {label}
      </Label>
      <Control>{children}</Control>
    </Root>
  );
};
