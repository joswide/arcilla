// @ts-nocheck
import { css } from "styled-components";

type RuleType = {
  prop: string;
  property: string;
  css: (props: Object, value: any) => string;
};

export const getRules = (props: Object, rules: Array<RuleType>) => {
  const { theme = {} } = props;
  const transientProps = Object.keys(props).reduce((acc, key) => {
    if (key.startsWith("$")) {
      const newKey = key.slice(1);
      // @ts-ignore
      acc[newKey] = props[key];
    }
    return acc;
  }, {});

  const newProps = { ...props, ...transientProps };

  const breakpoints = Object.keys(theme.breakpoints);

  return rules.map((rule) => {
    if (newProps.hasOwnProperty(rule.prop)) {

      if (Array.isArray(newProps[rule.prop]) ){
        return newProps[rule.prop].map((value, index) => {
          const cssValue = rule.css(newProps, value);

          if (index === 0) {
            return css`${rule.property}: ${cssValue};`;
          }

          return css`@media (min-width: ${theme.breakpoints[breakpoints[index]]}px) {
            ${rule.property}: ${cssValue};
          }`;
        })
      }

      // @ts-ignore
      const cssValue = rule.css(newProps, newProps[rule.prop]);

      return css`${rule.property}: ${cssValue};`;
    }

    return "";
  }).filter(rule => rule);
};
