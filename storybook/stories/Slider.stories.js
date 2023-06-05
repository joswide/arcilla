// import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "arcilla";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Slider",
  component: Slider,
  tags: [],
  argTypes: {
    color: { control: "color" },
  },
};

export const Primary = {
  render: () => <Slider primary label="Button" />,
};
