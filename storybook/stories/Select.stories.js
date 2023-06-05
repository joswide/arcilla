// import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "arcilla";
import React from "react";

const Template = (args) => {
  const [value, setValue] = React.useState(args.value);

  return <Select value={value} onChange={setValue} {...args} />;
};

export default {
  title: "Select",
  component: Template,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      control: { type: "radio" },
    },
  },
};

export const Primary = {
  args: {
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
    ],
    size: "medium",
    label: "Selecciona una opción",
  },
};
