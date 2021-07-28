import React from "react";
import { BrowserRouter } from "react-router-dom";
import HeaderButton from "./HeaderButton";

export default {
  title: "Components/atoms/buttons/HeaderButton",
  component: HeaderButton,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {
    children: { control: "text" },
    onlinkclick : { action : "clicked!" , table:{
      disable:true
    }}
  },
};

const Template = (args) => <HeaderButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "hello",
};
