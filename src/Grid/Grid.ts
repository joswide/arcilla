import styled from "styled-components";
import grid from "../styles/grid";

type Props = {
  gap?: number;
  gridColumns?: number | Array<number>;
};

// grid-template-columns: repeat(${({columns = 1}) => columns}, minmax(0, 1fr));
export const Grid = styled.div<Props>`
  display: grid;
  grid-gap: ${({theme}) => theme.grid.gap};
  ${grid}
`;