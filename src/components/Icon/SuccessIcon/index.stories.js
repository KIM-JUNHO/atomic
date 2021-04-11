import { Icon } from 'components/Icon';
import { SuccessIcon } from 'components/Icon/SuccessIcon';

export default {
  title: 'Components/Icon',
  component: Icon,
};

export const Success = (args) => <SuccessIcon {...args} />;
