import * as Select from "@radix-ui/react-select";
import styled, { css } from "styled-components";
import { violet } from "@radix-ui/colors";
import { pixels } from "../utils";
import { SIZES } from "../aliases";
import type { SizeType } from "../types";

export const SelectTrigger = styled(Select.SelectTrigger)`
  all: unset;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 13px;
  line-height: 1;
  height: 35px;
  gap: 5px;
  background-color: white;
  color: ${({ theme, color = "primary" }) => theme.colors[color][10]};
  cursor: pointer;
  box-shadow: ${({ theme }) => `0 0 0 1px ${theme.colors.primary[8]}`};

  padding: 0
    ${
      // @ts-ignore
      ({ theme, size = "medium" }) => theme.space[SIZES[size]]
    };
  font-size: ${
    // @ts-ignore
    ({ theme, size = "medium" }) => theme.fontSizes[SIZES[size]]
  };
  height: ${
    // @ts-ignore
    ({ theme, size = "medium" }) =>
      `${
        // @ts-ignore
        pixels(theme.space[SIZES[size]]) * 2 +
        // @ts-ignore
        pixels(theme.space[SIZES[size]]) / 2
      }px`
  };

  &:hover {
    background-color: ${({ theme, color }) => theme.colors[color][2]};
  }

  &:focus {
    box-shadow: 0 0 0 2px black;
  }

  &[data-placeholder] {
    color: ${({ theme, color = "primary" }) => theme.colors[color][10]};
  }
`;

export const Root = styled.div<{ controlWidth?: string }>`
  display: inline;

  ${SelectTrigger} {
    width: ${({ controlWidth = "100%" }) => controlWidth};
  }
`;

export const SelectIcon = styled(Select.SelectIcon)`
  color: ${({ theme, color = "primary" }) => theme.colors[color][10]};
`;

export const SelectContent = styled(Select.Content)`
  overflow: hidden;
  background-color: white;
  border-radius: 6px;
  margin-top: 3px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

export const SelectViewport = styled(Select.Viewport)`
  padding: 5px;
`;

type SelectLabelProps = {
  size: SizeType;
};

export const SelectLabel = styled(Select.Label)<SelectLabelProps>`
  padding: 0 ${({ theme, size }) => theme.space[SIZES[size]]};
  line-height: 2;
  font-size: ${({ theme, size }) => theme.fontSizes[SIZES[size] - 1]};
  color: ${({ theme, color = "ui" }) => theme.colors[color][8]};
`;

export const SelectSeparator = styled(Select.Separator)`
  height: 1px;
  background-color: ${({ theme, color = "primary" }) => theme.colors[color][5]};
  margin: 5px;
`;

const scrollButtonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: white;
  color: ${violet.violet11};
  cursor: default;
`;

export const SelectScrollUpButton = styled(Select.ScrollUpButton)`
  ${scrollButtonStyles}
`;

export const SelectScrollDownButton = styled(Select.ScrollDownButton)`
  ${scrollButtonStyles}
`;
