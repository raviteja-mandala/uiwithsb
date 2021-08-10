import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import theme from "../../themes/theme";
import BlinkistHeader from "./BlinkistHeader";
import WindowContext from "./WindowContext";

export default {
  title: "Components/organisms/BlinkistHeader",
  component: BlinkistHeader
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <BlinkistHeader {...args} />
  </ThemeProvider>
);

export const WideHeader = Template.bind({});
WideHeader.decorators = [
  (Story) => (
    <WindowContext.Provider value={{width : 1440, height : 950}}>
    <BrowserRouter>
      <Story />
    </BrowserRouter>
    </WindowContext.Provider>
  )   
]

export const MobileHeader = Template.bind({});
MobileHeader.decorators = [
  (Story) => (
    <WindowContext.Provider value={{width : 900, height : 950}}>
    <BrowserRouter>
      <Story />
    </BrowserRouter>
    </WindowContext.Provider>
  )   
]
