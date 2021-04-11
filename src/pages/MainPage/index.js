import { Sider } from 'containers/Sider';
import { PageLayout } from 'layouts/PageLayout';
import styled from 'styled-components';

const Wrapper = styled.div``;

export const MainPage = () => {
  return (
    <Wrapper>
      <PageLayout sider={<Sider />}>TEST</PageLayout>
    </Wrapper>
  );
};
