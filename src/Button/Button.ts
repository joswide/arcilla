import styled, { css } from "styled-components";
import { pixels } from "../utils";
import { SIZES } from "../aliases";
import type { ColorType, SizeType } from "../types";

type VariantType = "solid" | "light" | "bordered";

type ColorProps = {
  color: ColorType;
};

type SizeProps = {
  size: SizeType;
};

const lightVariantStyles = css<ColorProps>`
  color: ${({ theme, color = 'primary' }) => theme.colors[color][10]};
  background-color: ${({ theme, color }) => theme.colors[color][3]};

  &:hover {
    background-color: ${({ theme, color }) => theme.colors[color][4]};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme, color }) => theme.colors[color][6]};
  }
`;

const borderedVariantStyles = css<ColorProps>`
  color: ${({ theme, color = 'primary' }) => theme.colors[color][10]};
  background-color: ${({ theme, color }) => theme.colors[color][0]};
  box-shadow: 0 0 0 1px ${({ theme, color }) => theme.colors[color][6]};

  &:hover {
    background-color: ${({ theme, color }) => theme.colors[color][2]};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme, color }) => theme.colors[color][6]};
  }
`;

const solidVariantStyles = css<ColorProps>`
  color: ${({ theme, color = 'primary' }) => theme.colors[color][2]};
  background-color: ${({ theme, color }) => theme.colors[color][9]};

  &:hover {
    background-color: ${({ theme, color }) => theme.colors[color][10]};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme, color }) => theme.colors[color][6]};
  }
`;

const VARIANTS = {
  solid: solidVariantStyles,
  light: lightVariantStyles,
  bordered: borderedVariantStyles,
}

const sizeStyles = css<SizeProps>`
  padding: 0 ${({ theme, size }) => theme.space[SIZES[size]]};
  font-size: ${({ theme, size }) => theme.fontSizes[SIZES[size]]};
  height: ${({ theme, size }) => `${pixels(theme.space[SIZES[size]]) * 2 + pixels(theme.space[SIZES[size]]) / 2}px`};
`;

interface Props {
  color: ColorType;
  variant: VariantType;
  size:  SizeType;
  children: React.ReactNode;
};

export const BaseButton = styled.button<Props>`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  cursor: pointer;

  ${({ variant }) => VARIANTS[variant]};
  ${sizeStyles};
`;

BaseButton.defaultProps = {
  variant: "solid",
  color: "primary",
  size: "medium",
};

export const Button = BaseButton;
