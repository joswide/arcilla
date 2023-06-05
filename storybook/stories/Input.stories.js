// import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "arcilla";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    variant: {
      options: ["solid", "light", "bordered"],
      control: { type: "radio" },
    },
    size: {
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      control: { type: "radio" },
    },
    label: {
      control: { type: "text" },
    },
    inputMode: {
      options: ["decimal", "numeric", "text", "email", "none"],
      control: { type: "radio" },
    },
  },
};

export const Text = {
  args: {
    inputMode: "text",
    label: "Input",
    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    size: "medium",
    variant: "solid",
    suffixLabel: "",
  },
};

export const Numeric = {
  args: {
    inputMode: "numeric",
    label: "Input",
    value: 5,
    size: "medium",
    variant: "solid",
  },
};

export const Decimal = {
  args: {
    inputMode: "decimal",
    label: "Decimal",
    value: 5.98,
    size: "medium",
    variant: "solid",
  },
};
