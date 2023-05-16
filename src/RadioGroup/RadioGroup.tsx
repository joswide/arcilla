import React from "react";
import {
  RadioGroupRoot,
  RadioGroupItem,
  RadioGroupIndicator,
  Label,
  Flex,
} from "./styles";

const RadioGroup = () => (
  <RadioGroupRoot defaultValue="default" aria-label="View density">
    <Flex>
      <RadioGroupItem value="default" id="r1">
        <RadioGroupIndicator />
      </RadioGroupItem>
      <Label htmlFor="r1">Default</Label>
    </Flex>

    <Flex>
      <RadioGroupItem value="comfortable" id="r2">
        <RadioGroupIndicator />
      </RadioGroupItem>
      <Label htmlFor="r2">Comfortable</Label>
    </Flex>

    <Flex>
      <RadioGroupItem value="compact" id="r3">
        <RadioGroupIndicator />
      </RadioGroupItem>
      <Label htmlFor="r3">Compact</Label>
    </Flex>
  </RadioGroupRoot>
);

export default RadioGroup;
