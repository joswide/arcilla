import styled from "styled-components";
import { SIZES } from "../aliases";
import { pixels, aliasScale } from "../utils";
import type { SizeType } from "../types";
import fontSize from "../styles/fontSize";
import margin from "../styles/margin";

type Props = {
  fontSize?: SizeType;
  lineHeight?: SizeType;
  marginBottom?: SizeType;
};

// font-size: ${
//   // @ts-ignore
//   ({ theme, size = "medium" }) => theme.fontSizes[SIZES[size]]
// };

export const Paragraph = styled.p.attrs((props: Props) => ({
  $fontSize: props.fontSize || "medium",
  $lineHeight: props.lineHeight || props.fontSize || "medium",
  $marginBottom:
    props.marginBottom || aliasScale(props.fontSize, -2) || "medium",
  fontSize: undefined,
}))<Props>`
  all: unset;
  ${fontSize}
  ${margin}
  display: block;

  :not(:first-child) {
    margin-top: ${
      // @ts-ignore
      ({ theme, size = "medium" }) => pixels(theme.space[SIZES[size]]) / 1
    }px;
  }
`;
