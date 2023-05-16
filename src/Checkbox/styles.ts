import sc from "styled-components";
import { violet, blackA } from "@radix-ui/colors";
import * as Checkbox from "@radix-ui/react-checkbox";

export const CheckboxRoot = sc(Checkbox.Root)`
  all: unset;
  background-color: #fff;
  width: 25px;
  height: 25px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px ${blackA.blackA7};

  &:hover {
    background-color: ${violet.violet3};
  }

  &:focus {
    box-shadow: 0 0 0 2px black;
  }
`;

export const CheckboxIndicator = sc(Checkbox.Indicator)`
  color: ${violet.violet11};
`;

export const Label = sc.label`
  color: #000;
  font-size: 15px;
  line-height: 1;
  padding-left: 15px;
`;

export const Flex = sc.div`
  display: flex;
  align-items: center;
`;
