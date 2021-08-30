import React from 'react';

import HamburgerButton from './HamburgerButton';

export default {
  title: 'HamburgerButton',
  component: HamburgerButton,
};

const Template = (args) => <HamburgerButton {...args} />;

export const Default = Template.bind({});

export const Active = Template.bind({});
Active.args = {
  active: true
};
