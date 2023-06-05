// import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "arcilla";

export default {
  title: "Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    as: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "radio" },
    },
  },
};

export const H1 = {
  args: {
    as: "h1",
    children: "Heading 1",
  },
};

export const H3 = {
  args: {
    as: "h3",
    children: "Heading 3",
  },
};
