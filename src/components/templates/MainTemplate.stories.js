import React from 'react';

import MainTemplate from './MainTemplate';

export default {
  title: 'Components/template/MainTemplate',
  component: MainTemplate,
};

const EmptyElement = (props) => (
    <div style={{ backgroundColor: props.color }}>{props.children}</div>
  );

const Template = (args) => <MainTemplate {...args} />;

export const EmptyTemplate = Template.bind({});
EmptyTemplate.args = {
  header: <EmptyElement color="ivory">abc</EmptyElement>,
  body: <EmptyElement color="#e8c8c5">xyz</EmptyElement>,
  dimensions : {width : 1300 , height : 950}
};