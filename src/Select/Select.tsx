import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { SelectItem } from "./SelectItem";
import type { LayoutType } from "../Forms/FormGroup/types";
import { FormGroup } from "../Forms/FormGroup";

import {
  Root,
  SelectTrigger,
  SelectContent,
  SelectIcon,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectViewport,
  SelectLabel,
  // SelectSeparator,
} from "./styles";

import type { ColorType, SizeType } from "../types";

type OptionType = {
  label: string;
  value: string;
};

type Props = {
  id?: string;
  color?: ColorType;
  size?: SizeType;
  layout?: LayoutType;
  options: OptionType[];
  label?: string;
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  controlWidth?: string;
};

const Select = ({
  color = "primary",
  size = "medium",
  options = [],
  label = "Opciones",
  placeholder = "Selecciona...",
  value,
  onChange,
  controlWidth = "100%",
}: Props) => {
  const handleChange = (value: string) => {
    onChange(value);
  };

  return (
    <Root controlWidth={controlWidth}>
      <SelectPrimitive.Root value={value} onValueChange={handleChange}>
        <SelectTrigger aria-label={label} color={color}>
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectIcon>
            <ChevronDownIcon />
          </SelectIcon>
        </SelectTrigger>

        <SelectPrimitive.Portal>
          <SelectContent position="popper">
            <SelectScrollUpButton>
              <ChevronUpIcon />
            </SelectScrollUpButton>

            <SelectViewport>
              <SelectPrimitive.Group>
                <SelectLabel size={size}>{label}</SelectLabel>

                {options.map((option) => (
                  <SelectItem
                    color={color}
                    size={size}
                    value={option.value}
                    key={option.value}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectPrimitive.Group>
            </SelectViewport>

            <SelectScrollDownButton>
              <ChevronDownIcon />
            </SelectScrollDownButton>
          </SelectContent>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </Root>
  );
};

const SelectFormGroup = ({
  id,
  size,
  label = "",
  layout = "vertical",
  ...rest
}: Props) => {
  return (
    <FormGroup id={id} label={label} layout={layout} size={size}>
      <Select size={size} {...rest} />
    </FormGroup>
  );
};

export default SelectFormGroup;
