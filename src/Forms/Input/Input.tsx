import React from "react";
import { Input as StyledInput, UnitBlock } from "./styles";
import { FormGroup } from "../FormGroup";
import type { LayoutType } from "../FormGroup/types";
import type { SizeType } from "../../types";
import { useLocaleNumberInput } from "react-use-locale-number-input";
// import { PlusCircledIcon, MinusCircledIcon } from "@radix-ui/react-icons";

type DefaultInputProps = {
  id?: string;
  value?: string | number;
  size?: SizeType;
  label?: string;
  layout?: LayoutType;
  suffixLabel?: string;
  onChange: (value: string) => void;
  type: "text" | "email";
  inputMode: "decimal" | "numeric" | "text" | "email" | "none";
};

type NumberInputProps = {
  id?: string;
  value?: number;
  size?: SizeType;
  label?: string;
  layout?: LayoutType;
  suffixLabel?: string;
  onChange: (value: number) => void;
  type: "number";
  inputMode: "decimal" | "numeric";
};

const NumberInput = ({
  id,
  size,
  value,
  label,
  layout = "vertical",
  suffixLabel,
  onChange,
  // type = "text",
  inputMode = "numeric",
}: NumberInputProps) => {
  const {
    handleChange,
    handleBlur,
    value: displayValue,
  } = useLocaleNumberInput(value, "de-DE", onChange);

  return (
    <FormGroup id={id} label={label} layout={layout} size={size}>
      <StyledInput
        inputMode={inputMode}
        id={id}
        size={size}
        value={displayValue}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      {suffixLabel && (
        <UnitBlock>
          {/* <div style={{ marginRight: "0px", display: "inline-flex" }}>
            <MinusCircledIcon style={{ verticalAlign: "middle" }} />
            <PlusCircledIcon style={{ verticalAlign: "middle" }} />
          </div> */}
          {suffixLabel}
        </UnitBlock>
      )}
    </FormGroup>
  );
};

const DefaultInput = ({
  id,
  size,
  value,
  label,
  layout = "vertical",
  suffixLabel,
  onChange,
  type = "text",
  inputMode = "text",
}: DefaultInputProps) => {
  return (
    <FormGroup id={id} label={label} layout={layout} size={size}>
      <StyledInput
        type={type}
        inputMode={inputMode}
        id={id}
        size={size}
        value={value}
        onChange={(
          event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => onChange(event.target.value)}
      />

      {suffixLabel && <UnitBlock>{suffixLabel}</UnitBlock>}
    </FormGroup>
  );
};

const Input = (props: DefaultInputProps | NumberInputProps) => {
  if (props.type === "number") {
    return <NumberInput {...props} />;
  }

  return <DefaultInput {...props} />;
};

export default Input;
