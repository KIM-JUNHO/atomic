import { PageHeader } from 'components/PageHeader';

export default {
  title: 'Components/PageHeader',
  component: PageHeader,
};

const Template = (args) => <PageHeader {...args}>Hello</PageHeader>;

export const Default = Template.bind({});
