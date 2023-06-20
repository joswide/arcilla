// @ts-nocheck
import { css } from 'styled-components';

const minMax = (size: string, type: "min" | "max") => (...args) => css`
  @media (${type}-width: ${({ theme }) => theme.breakpoints[size]}) {
    ${css(...args)};
  }
`;

const range = (min: string, max: string) => (...args) => css`
  @media (min-width: ${({ theme }) => theme.breakpoints[min]}) and (max-width: ${({ theme }) => theme.breakpoints[max]}) {
    ${css(...args)};
  }
`;

export const up = {
  xs: minMax("xs", "min"),
  sm: minMax("sm", "min"),
  md: minMax("md", "min"),
  lg: minMax("lg", "min"),
  xl: minMax("xl", "min"),
  xxl: minMax("xxl", "min"),
};

export const down = {
  xs: minMax("xs", "max"),
  sm: minMax("sm", "max"),
  md: minMax("md", "max"),
  lg: minMax("lg", "max"),
  xl: minMax("xl", "max"),
  xxl: minMax("xxl", "max"),
};

export const between = {
  sm: {
    md: range("sm", "md"),
    lg: range("sm", "lg"),
    xl: range("sm", "xl"),
    xxl: range("sm", "xxl"),
  },
  md: {
    lg: range("md", "lg"),
    xl: range("md", "xl"),
    xxl: range("md", "xxl"),
  },
  lg: {
    xl: range("lg", "xl"),
    xxl: range("lg", "xxl"),
  },
  xl: {
    xxl: range("xl", "xxl"),
  },
}

