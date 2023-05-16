import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { SelectItem } from "./SelectItem";
import type { LayoutType } from "../Forms/FormGroup/types";
import { FormGroup } from "../Forms/FormGroup";

import {
  SelectTrigger,
  SelectContent,
  SelectIcon,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectViewport,
  // SelectSeparator,
  SelectLabel,
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
};

const Select = ({
  color = "primary",
  size = "medium",
  options = [],
  label = "Opciones",
  placeholder = "Selecciona...",
  value,
  onChange,
}: Props) => {
  const handleChange = (value: string) => {
    onChange(value);
  };
  return (
    <SelectPrimitive.Root value={value} onValueChange={handleChange}>
      <SelectTrigger aria-label={label} color="primary">
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

          {/* <SelectViewport>
            <SelectPrimitive.Group>
              <SelectLabel size={size}>Fruits</SelectLabel>
              <SelectItem color={color} size={size} value="apple">
                Apples
              </SelectItem>
              <SelectItem color={color} size={size} value="banana">
                Banana
              </SelectItem>
              <SelectItem color={color} size={size} value="blueberry">
                Blueberry
              </SelectItem>
              <SelectItem color={color} size={size} value="grapes">
                Grapes
              </SelectItem>
              <SelectItem color={color} size={size} value="pineapple">
                Pineapple
              </SelectItem>
            </SelectPrimitive.Group>

            <SelectSeparator />

            <SelectPrimitive.Group>
              <SelectLabel size={size}>Vegetables</SelectLabel>
              <SelectItem color={color} size={size} value="aubergine">
                Aubergine
              </SelectItem>
              <SelectItem color={color} size={size} value="broccoli">
                Broccoli
              </SelectItem>
              <SelectItem color={color} size={size} value="carrot" disabled>
                Carrot
              </SelectItem>
              <SelectItem color={color} size={size} value="courgette">
                Courgette
              </SelectItem>
              <SelectItem color={color} size={size} value="leek">
                Leek
              </SelectItem>
            </SelectPrimitive.Group>

            <SelectSeparator />

            <SelectPrimitive.Group>
              <SelectLabel size={size}>Meat</SelectLabel>
              <SelectItem color={color} size={size} value="beef">
                Beef
              </SelectItem>
              <SelectItem color={color} size={size} value="chicken">
                Chicken
              </SelectItem>
              <SelectItem color={color} size={size} value="lamb">
                Lamb
              </SelectItem>
              <SelectItem color={color} size={size} value="pork">
                Pork
              </SelectItem>
            </SelectPrimitive.Group>
          </SelectViewport> */}
          <SelectScrollDownButton>
            <ChevronDownIcon />
          </SelectScrollDownButton>
        </SelectContent>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};

const SelectFormGroup = ({
  id,
  size,
  label,
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
