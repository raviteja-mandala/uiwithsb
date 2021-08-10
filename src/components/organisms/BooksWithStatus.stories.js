import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import theme from "../../themes/theme";
import BooksWithStatus from "./BooksWithStatus";
import WindowContext from "./WindowContext";

export default {
  title: "Components/organisms/MyLibrary",
  component: BooksWithStatus
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <BooksWithStatus {...args} />
  </ThemeProvider>
);

export const MyLibraryLargeWidth = Template.bind({});
MyLibraryLargeWidth.decorators = [
  (Story) => (
    <WindowContext.Provider value={{width : 1440, height : 950}}>
    <BrowserRouter>
      <Story />
    </BrowserRouter>
    </WindowContext.Provider>
  )   
]

export const MyLibrarySmallWidth = Template.bind({});
MyLibrarySmallWidth.decorators = [
  (Story) => (
    <WindowContext.Provider value={{width : 900, height : 950}}>
    <BrowserRouter>
      <Story />
    </BrowserRouter>
    </WindowContext.Provider>
  )   
]

export const MyLibraryForMobile = Template.bind({});
MyLibraryForMobile.decorators = [
  (Story) => (
    <WindowContext.Provider value={{width : 450, height : 950}}>
    <BrowserRouter>
      <Story />
    </BrowserRouter>
    </WindowContext.Provider>
  )   
]
