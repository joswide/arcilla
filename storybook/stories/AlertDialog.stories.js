import { AlertDialog } from "arcilla";

export default {
  title: "AlertDialog",
  component: AlertDialog,
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
    title: "¿Estás seguro?",
    body: "Esta acción no se puede deshacer.",
    color: "secondary",
  },
};
