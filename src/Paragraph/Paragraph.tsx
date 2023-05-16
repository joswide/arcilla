import styled from "styled-components";
import { SIZES } from "../aliases";
import { pixels } from "../utils";
import type { SizeType } from "../types";

type Props = {
  size?: SizeType;
};

export const Paragraph = styled.p<Props>`
  all: unset;
  display: block;
  font-size: ${
    // @ts-ignore
    ({ theme, size = "medium" }) => theme.fontSizes[SIZES[size]]
  };

  line-height: ${
    // @ts-ignore
    ({ theme, size = "medium" }) => theme.fontSizes[SIZES[size] + 6]
  };

  :not(:first-child) {
    margin-top: ${
      // @ts-ignore
      ({ theme, size = "medium" }) => pixels(theme.space[SIZES[size]]) / 1
    }px;
  }

  margin-bottom: ${
    // @ts-ignore
    ({ theme, size = "medium" }) => pixels(theme.space[SIZES[size]]) / 1
  }px;
`;
