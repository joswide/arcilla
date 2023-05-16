import React, { useState } from "react";
import { Input as StyledInput, UnitBlock } from "./styles";
import { FormGroup } from "../FormGroup";
import type { LayoutType } from "../FormGroup/types";
import type { SizeType } from "../../types";
// import { PlusCircledIcon, MinusCircledIcon } from "@radix-ui/react-icons";

const locale = "de-DE";
/**
 * Parse a localized number to a float.
 * @param {string} stringNumber - the localized number
 * @param {string} locale - [optional] the locale that the number is represented in. Omit this parameter to use the current locale.
 */
function stringToLocaleNumber(stringNumber: string, locale: string) {
  var thousandSeparator = Intl.NumberFormat(locale)
    .format(11111)
    .replace(/\p{Number}/gu, "");
  var decimalSeparator = Intl.NumberFormat(locale)
    .format(1.1)
    .replace(/\p{Number}/gu, "");

  return parseFloat(
    stringNumber
      .replace(new RegExp("\\" + thousandSeparator, "g"), "")
      .replace(new RegExp("\\" + decimalSeparator), ".")
  );
}

const numberToLocaleString = (number: number, locale: string) => {
  return new Intl.NumberFormat(locale, {}).format(number);
};

console.log("!!!!!", numberToLocaleString(1000, locale));

type Props = {
  id?: string;
  value?: string;
  size?: SizeType;
  label?: string;
  layout?: LayoutType;
  suffixLabel?: string;
  onChange: (value: string) => void;
};

const Input = ({
  id,
  size,
  value,
  label,
  layout = "vertical",
  suffixLabel,
  onChange,
}: Props) => {
  const [dirty, setDirty] = useState(numberToLocaleString(value, locale));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = stringToLocaleNumber(event.target.value, locale);

    setDirty(event.target.value);
    onChange(isNaN(number) ? 0 : number);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const number = stringToLocaleNumber(event.target.value, locale);

    if (isNaN(number)) {
      setDirty("0");
      onChange(0);
      return;
    }

    setDirty(numberToLocaleString(number, locale));
    onChange(number);
  };

  const stringValue = numberToLocaleString(value, locale);
  const display = stringValue === dirty ? stringValue : dirty;

  return (
    <FormGroup id={id} label={label} layout={layout} size={size}>
      <StyledInput
        id={id}
        size={size}
        value={display}
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

export default Input;
