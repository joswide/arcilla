import { css } from "styled-components";

type RuleType = {
  prop: string;
  property: string;
  css: Function;
};

export const getRules = (props: Object, rules: Array<RuleType>) => {
  return rules.map((rule) => {
    if (props.hasOwnProperty(rule.prop)) {
      // @ts-ignore
      const cssValue = rule.css(props, props[rule.prop]);

      return css`${rule.property}: ${cssValue};`;
    }

    return "";
  }).filter(rule => rule);
};
