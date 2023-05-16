import React from "react";
import styled from "styled-components";
import * as Select from "@radix-ui/react-select";
import { CheckIcon } from "@radix-ui/react-icons";
import { violet } from "@radix-ui/colors";
import type { ColorType, SizeType } from "../../types";
import { SIZES } from "../../aliases";

const StyledItem = styled(Select.Item)`
  font-size: ${
    // @ts-ignore
    ({ theme, size }) => theme.fontSizes[SIZES[size]]
  };
  line-height: 1;
  color: ${({ theme, color = "primary" }) => theme.colors[color][10]};
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 25px;

  position: relative;
  user-select: none;
  cursor: pointer;

  &[data-disabled] {
    color: ${({ theme }) => theme.colors["ui"][8]};
    cursor: not-allowed;
    pointer-events: none;
  }

  &[data-highlighted] {
    outline: none;
    background-color: ${({ theme, color = "primary" }) =>
      theme.colors[color][8]};
    color: ${violet.violet1};
  }
`;

const StyledItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

type Props = {
  children: React.ReactNode;
  value: string;
  disabled?: boolean;
  color?: ColorType;
  size?: SizeType;
};

export const SelectItem = React.forwardRef(
  ({ children, ...props }: Props, forwardedRef: React.Ref<HTMLDivElement>) => {
    return (
      <StyledItem {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>

        {false && (
          <StyledItemIndicator>
            <CheckIcon />
          </StyledItemIndicator>
        )}
      </StyledItem>
    );
  }
);
