import { Tree as AntdTree } from 'antd';
import styled from 'styled-components';

const StyledTree = styled(AntdTree)``;

export const Tree = ({ children, ...props }) => {
  return <StyledTree {...props}>{children}</StyledTree>;
};
