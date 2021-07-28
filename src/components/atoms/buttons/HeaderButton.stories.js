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
    state: { control: "text" },
    link: { control: "text" },
    children: { control: "text" },
  },
};

const Template = (args) => <HeaderButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  state: "true",
  link: "#",
  children: "hello",
};
