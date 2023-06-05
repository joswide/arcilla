// import { css } from 'styled-components';
import { getRules } from './rules';

const marginValue = (_:any, value:any) => {
  return `${2 * value}px`;
};

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
  const result = getRules({ marginRight: 5, marginLeft: 1}, rules)

  expect(Array.from(result[0]).join('')).toBe('margin-left: 2px;');
  expect(Array.from(result[1]).join('')).toBe('margin-right: 10px;');
});
  
it ("should return empty string if no props", () => {
  expect(getRules({}, rules)).toEqual([]);
});

it ("should not validate zero as false", () => {
  const result = getRules({ marginRight: 0}, rules)

  expect(Array.from(result[0]).join('')).toBe('margin-right: 0px;');
});


