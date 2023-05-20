import { pixels } from "./pixels";

it ("should convert pixels to numbers", () => {
  expect(pixels("0px")).toEqual(0);
  expect(pixels("90px")).toEqual(90);
  expect(pixels("100px")).toEqual(100);
});

it ("should convert string numbers", () => {
  expect(pixels("10")).toEqual(10);
});
