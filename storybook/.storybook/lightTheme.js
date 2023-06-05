import {
  orange,
  blue,
  red,
  green,
  yellow,
  gray,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  lime,
  limeA,
  tomato,
  amber,
  amberA,
  purple,
  crimson,
  mint,
  teal,
  blueA,
  sky,
  slate,
} from "@radix-ui/colors";

const base = {
  containerMaxWidth: "1024px",
  borderRadius: "4px",
  grid: {
    gap: "32px",
  },

  space: {
    1: "5px",
    2: "10px",
    3: "15px",
    4: "20px",
    5: "25px",
    6: "30px",
  },
  fontSizes: {
    1: "12px",
    2: "14px",
    3: "16px",
    4: "18px",
    5: "20px",
    6: "22px",
    7: "24px",
    8: "26px",
    9: "28px",
    10: "30px",
    11: "32px",
    12: "34px",
    13: "36px",
    14: "38px",
    15: "40px",
    16: "42px",
  },
  shadows: {
    1: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    2: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    3: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    4: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    5: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    6: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    7: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    8: "0 0 #0000",
  },
};

const colors = {
  text: "#000",
  background: "#fff",

  blue: Object.values(blue),
  green: Object.values(green),
  yellow: Object.values(yellow),
  orange: Object.values(orange),
  red: Object.values(red),
  lime: Object.values(lime),
  tomato: Object.values(tomato),
  amber: Object.values(amber),
  mint: Object.values(mint),
  teal: Object.values(teal),
  sky: Object.values(sky),

  // uses
  primary: Object.values(blue), // crimson
  secondary: Object.values(teal),
  tertiary: Object.values(blue),
  gray: Object.values(gray),
  ui: Object.values(slate),
  info: Object.values(blue),
  success: Object.values(green),
  warning: Object.values(yellow),
  danger: Object.values(red),
};

const chartColors = [colors.lime, colors.tomato, colors.amber];

const theme = {
  ...base,
  colors,
  chartColors,
};

export default theme;
