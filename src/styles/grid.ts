import { css } from "styled-components";
import {  getRules } from "../utils";

export type GridType = {
  gridColumns?: number | Array<number>;
};

const gridColumnsValue = (_: Object, value: string) => {
  // @ts-ignore
  return `repeat(${value}, minmax(0, 1fr))`;
};

export const marginRules = [
  {
    prop: "gridColumns",
    property: "grid-template-columns",
    css: gridColumnsValue,
  },
];

const style = css<GridType>`
  ${(props) => getRules(props, marginRules)}
`;

export default () => {
  return style;
};
