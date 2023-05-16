import { css } from "styled-components";

type RuleType = {
  prop: string;
  property: string;
  css: Function;
};

export const getRules = (props: Object, rules: Array<RuleType>) => {
  return rules.map((rule) => {
    // @ts-ignore
    const ruleValue = props[rule.prop];

    if (ruleValue) {
      return css`
        ${rule.property}: ${rule.css(
          props, 
          // @ts-ignore
          ruleValue
        )};
      `;
    }

    return '';
  });
}