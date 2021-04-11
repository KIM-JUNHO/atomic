import { Footer as AntdFooter } from 'antd';
import styled from 'styled-components';

const StyledFooter = styled(AntdFooter)``;

export const Footer = ({ children, ...props }) => {
  return <StyledFooter {...props}>{children}</StyledFooter>;
};
