import { PageLayout } from 'layouts/PageLayout';
import styled from 'styled-components';

export default {
  title: 'Layouts/Layout',
};

const StyledHeader = styled.div`
  background: red;
`;

const StyledSider = styled.div`
  background: orange;
  height: 100%;
`;

const StyledContent = styled.div`
  background: yellow;
  height: 100%;
`;

const StyledFooter = styled.div`
  background: green;
`;

export const Page = (args) => <PageLayout {...args} />;
Page.args = {
  header: <StyledHeader>Header</StyledHeader>,
  sider: <StyledSider>Sider</StyledSider>,
  children: <StyledContent>Content</StyledContent>,
  footer: <StyledFooter>Footer</StyledFooter>,
};
