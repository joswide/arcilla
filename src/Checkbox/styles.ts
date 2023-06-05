import styled from "styled-components";
import * as Checkbox from "@radix-ui/react-checkbox";

export const CheckboxRoot = styled(Checkbox.Root)`
  all: unset;
  background-color: #fff;
  width: 25px;
  height: 25px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors.ui[7]};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary[3]};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary[6]};
  }
`;

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: ${({ theme }) => theme.colors.primary[10]};

  svg {
    vertical-align: middle;
    width: 22px;
    height: 22px;
  }
`;

export const Label = styled.label`
  color: #000;
  font-size: 15px;
  line-height: 1;
  padding-left: 15px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;
