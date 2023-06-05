import { css } from "styled-components";
import { getRules } from "./rules";
import { marginRules } from "../styles/margin";
import { paddingRules } from "../styles/padding";

const rules = [...marginRules, ...paddingRules];

// @ts-ignore
export const property = (rule, value) => {
  return css`
    ${(props) => getRules({...props, [rule]: value}, rules)}
  `;
}
  
