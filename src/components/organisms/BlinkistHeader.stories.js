import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import theme from "../../themes/theme";
import BlinkistHeader from "./BlinkistHeader";

export default {
  title: "Components/organisms/BlinkistHeader",
  component: BlinkistHeader,
  argTypes: {
    width: { control: "number" },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <BlinkistHeader {...args} />
  </ThemeProvider>
);

export const WideHeader = Template.bind({});
WideHeader.args = {
  width: 1440,
};

// export const MobileHeader = Template.bind({});
// MobileHeader.args = {
//     width : 550,
// };
