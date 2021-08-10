import React from 'react';

import MainTemplate from './MainTemplate';

export default {
  title: 'Components/template/MainTemplate',
  component: MainTemplate,
};

const EmptyElement = (props) => (
    <div style={{ backgroundColor: props.color, height : props.height }}>{props.children}</div>
  );

const Template = (args) => <MainTemplate {...args} />;

export const EmptyTemplate = Template.bind({});
EmptyTemplate.args = {
  header: <EmptyElement color="#28A5DF" height="100%"></EmptyElement>,
  body: <EmptyElement color="#e8c8c5" height="600px"></EmptyElement>,
  dimensions : {width : 1300 , height : 950}
};