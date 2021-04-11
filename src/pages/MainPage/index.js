import { SiderMenu } from 'components/Menu/SiderMenu';
import { PageLayout } from 'layouts/PageLayout';
import styled from 'styled-components';

const Wrapper = styled.div``;

export const MainPage = () => {
  return (
    <Wrapper>
      <PageLayout sider={<SiderMenu />}>TEST</PageLayout>
    </Wrapper>
  );
};
