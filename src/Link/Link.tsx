import styled from "styled-components";

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary[9]};

  &:hover {
    color: ${({ theme }) => theme.colors.primary[7]};
  }
`;
