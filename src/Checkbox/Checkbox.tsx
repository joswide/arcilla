import React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { Flex, CheckboxRoot, Label, CheckboxIndicator } from "./styles";

type Props = {
  id?: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  label?: string;
};

const CheckboxDemo = ({
  id = "c1",
  checked = false,
  onChange,
  label,
}: Props) => (
  <Flex>
    <CheckboxRoot
      onCheckedChange={onChange}
      checked={checked}
      defaultChecked={false}
      id={id}
    >
      <CheckboxIndicator>
        <CheckIcon />
      </CheckboxIndicator>
    </CheckboxRoot>

    {label ? <Label htmlFor={id}>{label}</Label> : null}
  </Flex>
);

export default CheckboxDemo;
