import { Icon } from 'components/Icon';
import { UnknownIcon } from 'components/Icon/UnknownIcon';

export default {
  title: 'Components/Icon',
  component: Icon,
};

export const Unknown = (args) => <UnknownIcon {...args} />;
