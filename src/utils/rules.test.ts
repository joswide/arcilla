// import { css } from 'styled-components';
import { getRules } from './rules';

const marginValue = (_:any, value:any) => {
  return `${2 * value}px`;
};

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
}

const rules = [
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

it ("should return empty string if no props", () => {
  const result = getRules({theme, marginRight: 5, marginLeft: 1}, rules)

  expect(Array.from(result[0]).join('')).toBe('margin-left: 2px;');
  expect(Array.from(result[1]).join('')).toBe('margin-right: 10px;');
});

it ("should return transient props", () => {
  const result = getRules({theme, $marginRight: 5, $marginLeft: 1}, rules)

  expect(Array.from(result[0]).join('')).toBe('margin-left: 2px;');
  expect(Array.from(result[1]).join('')).toBe('margin-right: 10px;');
});
  
it ("should return empty string if no props", () => {
  expect(getRules({theme}, rules)).toEqual([]);
});

it ("should not validate zero as false", () => {
  const result = getRules({ theme, marginRight: 0}, rules)

  expect(Array.from(result[0]).join('')).toBe('margin-right: 0px;');
});


it ("should return media queries", () => {
  const result = getRules({ theme, marginRight: [0, 1]}, rules);

  expect(Array.from(result[0][0]).join('')).toBe('margin-right: 0px;');
  expect(Array.from(result[0][1]).join('')).toContain('min-width: 576px');
  expect(Array.from(result[0][1]).join('')).toContain('margin-right: 2px;');
});

