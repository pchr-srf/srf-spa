import React from 'react';

import Image from './Image';

export default {
  title: 'Article/Image',
  component: Image,
};

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  urn: 'urn:srf:image:d5e904',
  legend: 'Legend',
  alt: 'Alt text',
  source: 'Source'
};
