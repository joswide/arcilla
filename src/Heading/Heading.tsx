import styled from "styled-components";
import { SIZES, HEADINGS_SIZES } from "../aliases";

export const Heading = styled.h1`
  all: unset;
  display: block;
  font-size: ${
    // @ts-ignore
    ({ theme, as }) => theme.fontSizes[HEADINGS_SIZES[as]]
  };
  font-weight: 700;

  margin-bottom: ${
    // @ts-ignore
    ({ theme, size = "medium" }) => theme.space[SIZES[size]]
  };
`;
