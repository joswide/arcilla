import styled from "styled-components";
import { margin, MarginType } from "../styles";

type Props = MarginType;

export const Box = styled.div<Props>`
  ${margin}
`;
