// @flow
const baseFontSize = 16;

// Receives a value in px and transforms it to rem value
export const getRem = (value) => value / baseFontSize;
export const rem = (value) => `${value / baseFontSize}rem`;
