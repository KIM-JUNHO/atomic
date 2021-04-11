import { PageHeader as AntdPageHeader } from 'antd';
import styled from 'styled-components';

const StyledPageHeader = styled(AntdPageHeader)``;

export const PageHeader = ({ children, ...props }) => {
  return <StyledPageHeader {...props}>{children}</StyledPageHeader>;
};
