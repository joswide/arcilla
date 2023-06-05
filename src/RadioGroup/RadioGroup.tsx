import React from "react";
import {
  RadioGroupRoot,
  RadioGroupItem,
  RadioGroupIndicator,
  Label,
  Flex,
} from "./styles";

type OptionType = {
  label: string;
  value: string;
};

type Props = {
  id?: string;
  orientation?: "horizontal" | "vertical";
  options: OptionType[];
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const RadioGroup = ({
  id = "rg1",
  orientation = "vertical",
  options,
  value,
  onChange,
  label,
}: Props) => {
  return (
    <RadioGroupRoot
      $orientation={orientation}
      value={value}
      onValueChange={onChange}
      aria-label={label}
    >
      {options.map((option, key) => {
        const optionId = `${id}-${option.value}`;

        return (
          <Flex key={key}>
            <RadioGroupItem value={option.value} id={optionId}>
              <RadioGroupIndicator />
            </RadioGroupItem>
            <Label htmlFor={optionId}>{option.label}</Label>
          </Flex>
        );
      })}
    </RadioGroupRoot>
  );
};

export default RadioGroup;
