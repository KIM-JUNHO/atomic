import { Button } from 'components/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args}>Hello</Button>;

export const Default = Template.bind({});
