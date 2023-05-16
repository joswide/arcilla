// @flow
import { css } from "styled-components";
import { rem, getRem } from "./rem";

const fontSizes = {
  "-2": {
    size: 11,
    compact: 15,
    default: 18,
  },
  "-1": {
    size: 13,
    compact: 18,
    default: 21,
  },
  0: {
    size: 15,
    xcompact: 18,
    compact: 21,
    default: 24,
  },
  1: {
    size: 18,
    xcompact: 24,
    compact: 27,
    default: 30,
  },
  2: {
    size: 22,
    compact: 30,
    default: 33,
  },
  3: {
    size: 26,
    compact: 33,
    default: 36,
  },
  4: {
    size: 30,
    compact: 36,
    default: 39,
  },
  5: {
    size: 37,
    compact: 45,
    default: 48,
  },
  6: {
    size: 45,
    compact: 54,
    default: 57,
  },
  7: {
    size: 54,
    compact: 57,
    default: 60,
  },
};

export const getFont = (size, variant = "default", fonts = fontSizes) => css`
  font-size: ${rem(fonts[size].size)};
  line-height: ${rem(fonts[size][variant])};
`;

export const getFontSize = (size, variant = "default", fonts = fontSizes) =>
  getRem(fonts[size].size);
export const getLineHeight = (size, variant = "default", fonts = fontSizes) =>
  getRem(fonts[size][variant]);
