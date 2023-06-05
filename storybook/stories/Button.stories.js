// import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "arcilla";

export default {
  title: "Button",
  component: Button,
  // tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["solid", "light", "bordered"],
      control: { type: "radio" },
    },
    size: {
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      control: { type: "radio" },
    },
    color: {
      options: [
        "primary",
        "secondary",
        "tertiary",
        "success",
        "warning",
        "danger",
      ],
      control: { type: "radio" },
    },
  },
};

export const Primary = {
  args: {
    color: "primary",
    children: "Button",
    size: "medium",
    variant: "solid",
  },
};

export const Light = {
  args: {
    color: "primary",
    children: "Button",
    size: "medium",
    variant: "light",
  },
};

export const Bordered = {
  args: {
    color: "primary",
    children: "Button",
    size: "medium",
    variant: "bordered",
  },
};
