import styled from "styled-components";

export const Label = styled.span`
  :before {
    display: inline-block;
    content: "";
    background-color: red;
    background-color: ${({ theme }) => theme.colors.primary[8]};
    border-radius: 4px;
    width: 12px;
    height: 12px;
    margin-right: 6px;
  }
`;

export const Value = styled.span`
  font-weight: 500;
`;
