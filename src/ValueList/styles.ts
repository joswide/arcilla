import styled from "styled-components";
import { margin } from '../styles';

export const Root = styled.ul`
  ${margin}
  list-style: none;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
  }
`;
