// import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "arcilla";

export default {
  title: "Grid",
  component: Grid,
  argTypes: {},
};

export const Grid = {
  args: {
    columns: 5,
    gap: 10,
  },
};
