import React from 'react';

import { Button } from 'components/atoms/Button';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args}>Hello</Button>;

export const Default = Template.bind({});
