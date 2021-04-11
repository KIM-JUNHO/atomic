import { Button as AntdButton } from 'antd';
import styled from 'styled-components';

const StyledButton = styled(AntdButton)``;

export const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
