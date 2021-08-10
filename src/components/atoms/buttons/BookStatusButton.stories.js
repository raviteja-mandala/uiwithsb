import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import theme from "../../../themes/theme";
import BookStatusButton from "./BookStatusButton";

export default {
  title: "Components/atoms/buttons/BookStatusButton",
  component: BookStatusButton,
  argTypes: {
    state : { table:{
      disable:true
    }},
    buttonStyles: {
      options: ["bookStatusButtonStyle", "bookStatusButtonActive"],
      control: "select",
    },
    buttonContainerStyles: {
      options: [
        "gridItemContainerForInactiveButton",
        "gridItemContainerForActiveButton",
      ],
      control: "select",
    },
    children: { options: ["currentlyReading", "finished"],
    control: "select",},
    clickfunc : {action : 'submitted', table:{
      disable:true
    }}
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <BookStatusButton {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "currentlyReading",
};
