import { css } from "styled-components";
import { SIZES } from "../aliases";
import { pixels, getRules } from "../utils";

export type PaddingType = {
  paddingTop?: keyof typeof SIZES;
  paddingBottom?: keyof typeof SIZES;
  paddingLeft?: keyof typeof SIZES;
  paddingRight?: keyof typeof SIZES;
  padding?: keyof typeof SIZES;
};

const paddingValue = (props: Object, value: string) => {
  // @ts-ignore
  return `${2 * pixels(props.theme.space[SIZES[value]])}px`;
};

export const paddingRules = [
  {
    prop: "paddingTop",
    property: "padding-top",
    css: paddingValue,
  },
  {
    prop: "paddingBottom",
    property: "padding-bottom",
    css: paddingValue,
  },
  {
    prop: "paddingLeft",
    property: "padding-left",
    css: paddingValue,
  },
  {
    prop: "paddingRight",
    property: "padding-right",
    css: paddingValue,
  },
];

const style = css<PaddingType>`
  ${(props) => getRules(props, paddingRules)}
`;

export default () => {
  return style;
};
