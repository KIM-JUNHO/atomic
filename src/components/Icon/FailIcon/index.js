import styled from 'styled-components';
import { CloseCircleOutlined } from '@ant-design/icons';

const StyledIcon = styled(CloseCircleOutlined)`
  color: red;
`;

export const FailIcon = ({ children, ...props }) => {
  return <StyledIcon {...props}>{children}</StyledIcon>;
};
