import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { blackA } from "@radix-ui/colors";

type RootProps = {
  $orientation?: "horizontal" | "vertical";
}

export const RadioGroupRoot = styled(RadioGroup.Root)<RootProps>`
  display: flex;
  flex-flow: ${({ $orientation }) => $orientation === "horizontal" ? "row" : "column"};
  gap: 12px 36px;
`;

export const RadioGroupItem = styled(RadioGroup.Item)`
  all: unset;
  background-color: white;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  box-shadow: 0 2px 10px ${blackA.blackA7};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[2]};
  }

  &:focus {
    box-shadow: 0 0 0 2px black;
  }
`;

export const RadioGroupIndicator = styled(RadioGroup.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary[10]};
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  color: white;
  color: currentColor;
  font-size: 15px;
  line-height: 1;
  padding-left: 15px;
`;
