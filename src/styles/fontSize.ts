import { css } from "styled-components";
import { SIZES } from "../aliases";
import { getRules } from "../utils";

type FontSizeType = {
  fontSize?: keyof typeof SIZES;
};

export const fontSizeRules = [
  {
    prop: "fontSize",
    property: "font-size",
    css: (props: Object, value: string) => {
      // @ts-ignore
      return props.theme.fontSizes[SIZES[value]];
    },
  },
  {
    prop: "lineHeight",
    property: "line-height",
    css: (props: Object, value: string) => {
      // @ts-ignore
      return props.theme.fontSizes[SIZES[value] + 6];
    },
  }
]

// font-size: ${({ theme, size }) => theme.fontSizes[SIZES[size]]};
const fontSize = css<FontSizeType>`
  ${(props) => getRules(props, fontSizeRules)}
`;

export default () => {
  return fontSize;
};
