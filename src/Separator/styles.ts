import styled from "styled-components";
import * as Separator from "@radix-ui/react-separator";
import { margin, MarginType } from "../styles";

export const SeparatorRoot = styled(Separator.Root)<MarginType>`
  background-color: ${({ theme }) => theme.colors.primary[5]};
  ${margin}

  &[data-orientation=horizontal] {
    height: 1px;
    width: 100%;
  }

  &[data-orientation="vertical"] {
    height: 100%;
    width: 1px;
  }
`;
