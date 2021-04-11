import AntdIcon from '@ant-design/icons';
import styled from 'styled-components';

const StyledIcon = styled(AntdIcon)``;

export const Icon = ({ children, ...props }) => {
  return <StyledIcon {...props}>{children}</StyledIcon>;
};
