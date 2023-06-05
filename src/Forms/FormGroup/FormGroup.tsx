// @ts-nocheck
import React from "react";
import { Label } from "../Label";
import { Root, Control } from "./styles";
import type { LayoutType } from "./types";
import type { SizeType } from "../../types";
type Props = {
  id?: string;
  label?: string;
  layout?: LayoutType;
  size?: SizeType;
  children: React.ReactNode;
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
      {label ? (
        <Label htmlFor={id} size={size}>
          {label}
        </Label>
      ) : null}

      <Control>{children}</Control>
    </Root>
  );
};
