import { Icon } from 'components/Icon';
import { FailIcon } from 'components/Icon/FailIcon';

export default {
  title: 'Components/Icon',
  component: Icon,
};

export const Fail = (args) => <FailIcon {...args} />;
