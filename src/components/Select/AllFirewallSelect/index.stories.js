import { Select } from 'components/Select';
import { AllFirewallSelect } from 'components/Select/AllFirewallSelect';

export default {
  title: 'Components/Select',
  component: Select,
};

export const AllFirewall = (args) => <AllFirewallSelect {...args} />;
