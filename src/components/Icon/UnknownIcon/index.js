import styled from 'styled-components';
import { MinusCircleOutlined } from '@ant-design/icons';

const StyledIcon = styled(MinusCircleOutlined)`
  color: gray;
`;

export const UnknownIcon = ({ children, ...props }) => {
  return <StyledIcon {...props}>{children}</StyledIcon>;
};
