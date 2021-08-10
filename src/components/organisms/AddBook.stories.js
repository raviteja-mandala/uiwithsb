import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import theme from "../../themes/theme";
import AddBook from "./AddBook";

export default {
  title: "Components/organisms/AddBook",
  component: AddBook
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <AddBook {...args} />
  </ThemeProvider>
);

export const SimpleAddBook = Template.bind({});
SimpleAddBook.args={}

