import { Layout } from 'components/Layout';
import { SiderMenu } from 'components/Menu/SiderMenu';
import styled from 'styled-components';

const StyledSider = styled(Layout.Sider)``;

export const Sider = ({ children, ...props }) => {
  return (
    <StyledSider {...props}>
      <SiderMenu />
    </StyledSider>
  );
};
