import { Select, Option } from 'components/Select';
import styled from 'styled-components';

const StyledSelect = styled(Select)`
  width: 100%;
`;
const StyledOption = styled(Option)``;

export const AllFirewallSelect = ({ children, ...props }) => {
  return (
    <StyledSelect defaultValue="1">
      <StyledOption value="1">All Firewall</StyledOption>
      <StyledOption value="2">Abnormal Firewall</StyledOption>
      <StyledOption value="3">Normal Firewall</StyledOption>
    </StyledSelect>
  );
};
