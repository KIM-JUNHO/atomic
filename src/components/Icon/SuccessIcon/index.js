import styled from 'styled-components';
import { CheckCircleOutlined } from '@ant-design/icons';

const StyledIcon = styled(CheckCircleOutlined)`
  color: green;
`;

export const SuccessIcon = ({ children, ...props }) => {
  return <StyledIcon {...props}>{children}</StyledIcon>;
};
