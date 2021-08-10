import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import theme from "../../themes/theme";
import CategoryWithIcon from "./CategoryWithIcon";


export default {
  title: "Components/molecules/CategoryWithIcon",
  component: CategoryWithIcon,
  argTypes: {
      message : { options: [ 'sports','Chemical Engineering','Science','Medicine'], control: "select" }
     },
  };

const Template = (args) => (
   <ThemeProvider theme={theme}>
  <CategoryWithIcon {...args} />
   </ThemeProvider>
);

export const PrimaryCategoryWithIcon = Template.bind({});
PrimaryCategoryWithIcon.args = {  
    message : 'sports'
};

