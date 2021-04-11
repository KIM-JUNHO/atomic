import { Layout } from 'antd';
import styled from 'styled-components';

const Wrapper = styled(Layout)``;

const ContentWrapper = styled(Layout)``;

const Content = styled.div``;

export const PageLayout = ({ header, sider, children, footer }) => {
  return (
    <Wrapper>
      {sider}
      <ContentWrapper>
        {header}
        <Content>{children}</Content>
        {footer}
      </ContentWrapper>
    </Wrapper>
  );
};
