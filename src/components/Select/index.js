import { Select as AntdSelect } from 'antd';
import styled from 'styled-components';

const StyledSelect = styled(AntdSelect)``;
const StyledOption = styled(AntdSelect.Option)``;

export const Select = ({ children, ...props }) => {
  return <StyledSelect {...props}>{children}</StyledSelect>;
};
export const Option = ({ children, ...props }) => {
  return <StyledOption {...props}>{children}</StyledOption>;
};
