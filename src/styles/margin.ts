import { css } from "styled-components";
import { SIZES } from "../aliases";
import { pixels, getRules } from "../utils";

export type MarginType = {
  marginTop?: keyof typeof SIZES;
  marginBottom?: keyof typeof SIZES;
  marginLeft?: keyof typeof SIZES;
  marginRight?: keyof typeof SIZES;
  margin?: keyof typeof SIZES;
};

const marginValue = (props: Object, value: string) => {
  // @ts-ignore
  return `${2 * pixels(props.theme.space[SIZES[value]])}px`;
};

export const marginRules = [
  {
    prop: "marginTop",
    property: "margin-top",
    css: marginValue,
  },
  {
    prop: "marginBottom",
    property: "margin-bottom",
    css: marginValue,
  },
  {
    prop: "marginLeft",
    property: "margin-left",
    css: marginValue,
  },
  {
    prop: "marginRight",
    property: "margin-right",
    css: marginValue,
  },
];

const style = css<MarginType>`
  ${(props) => getRules(props, marginRules)}
`;

export default () => {
  return style;
};
