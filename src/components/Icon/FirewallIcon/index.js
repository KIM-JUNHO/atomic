import styled from 'styled-components';
import { TableOutlined } from '@ant-design/icons';

const StyledIcon = styled(TableOutlined)``;

export const FirewallIcon = ({ children, ...props }) => {
  return <StyledIcon {...props}>{children}</StyledIcon>;
};
