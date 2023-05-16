import styled from "styled-components";

export const Root = styled.div`
  padding: 24px 18px;
  border-radius: 4px;
  /* background-color: ${({ theme }) => theme.colors.primary[8]}; */
  box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.gray[5]};
  min-height: 340px;
`;