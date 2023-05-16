import { css } from "styled-components";
import { SIZES } from "../aliases";

type Type = {
  size?: keyof typeof SIZES;
};

const fontSize = css<Type>`
  font-size: ${({ theme, size }) => theme.fontSizes[SIZES[size]]};
`;

export default () => {
  return fontSize;
};
