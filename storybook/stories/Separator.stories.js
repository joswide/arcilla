// import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "arcilla";

export default {
  title: "Separator",
  component: Separator,
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
  },
};

export const Horizontal = {
  args: {
    orientation: "horizontal",
  },
};
