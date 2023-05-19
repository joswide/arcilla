import styled from "styled-components";

type Props = {
  gap?: number;
  columns?: number;
};

export const Grid = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(${({columns = 1}) => columns}, minmax(0, 1fr));
  grid-gap: ${({theme}) => theme.grid.gap};

`;