import { RadioGroup } from "arcilla";

export default {
  title: "RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      control: { type: "radio" },
    },
    size: {
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
    color: "secondary",
  },
};
