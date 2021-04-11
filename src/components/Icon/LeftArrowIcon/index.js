import styled from 'styled-components';
import { LeftOutlined } from '@ant-design/icons';

const StyledIcon = styled(LeftOutlined)``;

export const LeftArrowIcon = ({ children, ...props }) => {
  return <StyledIcon {...props}>{children}</StyledIcon>;
};
