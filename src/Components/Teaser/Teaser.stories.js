import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Teaser from './Teaser';

export default {
  title: 'Teaser',
  component: Teaser,
};

const Template = (args) => <Router><Teaser {...args} /></Router>;

export const Default = Template.bind({});
Default.args = {
  id: 123,
  title: 'Title',
  kicker: 'Kicker',
  lead: 'Lead',
  src: 'https://placekitten.com/800/450'
};
