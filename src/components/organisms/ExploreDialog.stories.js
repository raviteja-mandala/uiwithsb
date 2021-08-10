import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import theme from "../../themes/theme";
import ExploreDialog from "./ExploreDialog";

export default {
  title: "Components/organisms/ExploreDialog",
  component: ExploreDialog,
  argTypes: {
    open: { control: "boolean" },
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
    <ExploreDialog {...args} />
  </ThemeProvider>
);

export const ExploreDialogVisible = Template.bind({});
ExploreDialogVisible.args = {
  open: "true",
};
