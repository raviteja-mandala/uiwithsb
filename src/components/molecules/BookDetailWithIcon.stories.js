import React from "react";
import AccessTime from "@material-ui/icons/AccessTime";
import Person from "@material-ui/icons/Person";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../../themes/theme";
import BookDetailWithIcon from "./BookDetailWithIcon";


export default {
  title: "Components/molecules/BookDetailWithIcon",
  component: BookDetailWithIcon,
  argTypes: {    
      message : { control: "text" },
      icon: { options: ['AccessTime','Person'],
        
        mapping: {
          AccessTime: AccessTime,
          Person: Person,
        },
        control: "radio" },
    },
  };

const Template = (args) => (
   <ThemeProvider theme={theme}>
  <BookDetailWithIcon {...args} />
   </ThemeProvider>
);

export const PrimaryBookDetailWithIcon = Template.bind({});
PrimaryBookDetailWithIcon.args = {  
    message : '20 mins of reading',
    icon : AccessTime
};

