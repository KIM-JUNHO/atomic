import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Sider = styled.div`
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.div``;

const Content = styled.div`
  height: 100%;
`;
const Footer = styled.div``;

export const PageLayout = ({ header, sider, children, footer }) => {
  return (
    <Wrapper>
      <Sider>{sider}</Sider>
      <ContentWrapper>
        <Header>{header}</Header>
        <Content>{children}</Content>
        <Footer>{footer}</Footer>
      </ContentWrapper>
    </Wrapper>
  );
};
