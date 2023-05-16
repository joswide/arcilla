import styled, { css } from "styled-components";
import type { LayoutType } from "./types";

type Props = {
  layout?: LayoutType
};

export const Control = styled.div`
  > button {
    width: 100%;
  }
`;

const variants = {
  horizontal: css`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    
    label {
      font-weight: 500;
    }

    ${Control}, label {
      flex-grow: 1;
      flex-shrink: 0;
      width: 50%;
    }
  `,

  vertical: css`
    label { 
      margin-bottom: 8px;
    }
  `
}

export const Root = styled.div<Props>`
  position: relative;
  margin-bottom: 16px;
  ${({ layout }) => layout && variants[layout]}
`;