import { SIZES } from "../aliases";

export const aliasScale = (scale: string, x: number) => {
  const values = Object.keys(SIZES);

  const pos = values.indexOf(scale) + x;

  if (values[pos]) {
    return values[pos];
  }

  if (pos < 0) {
    return values[0];
  }

  return values[values.length - 1];

}