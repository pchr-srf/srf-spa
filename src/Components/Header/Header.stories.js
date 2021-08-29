import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

export default {
  title: 'Header',
  component: Header
};

const PAGES = [
  {
    title: 'Home',
    id: 4267482
  }, {
    title: 'News',
    id: 1646
  }
];

const Template = (args) => <MemoryRouter initialEntries={['/page/4267482']}><Header {...args} /></MemoryRouter>;

export const Default = Template.bind({});
Default.args = {
  pages: PAGES
};
