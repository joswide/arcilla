/** @type { import('@storybook/react').Preview } */

import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import lightTheme from "./lightTheme";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
