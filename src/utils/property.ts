import { marginRules } from "../styles/margin";
import { css } from "styled-components";
import { getRules } from "./rules";

// @ts-ignore
export const property = (rule, value) => {
  const style = css`
    ${(props) => getRules({...props, [rule]: value}, marginRules)}
  `;

  return style;
}
  
