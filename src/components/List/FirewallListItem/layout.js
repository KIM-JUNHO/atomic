import styled from 'styled-components';
import FortinetIcon from 'assets/Fortinet.png';
import { Image, Tag } from 'antd';
import { FormOutlined } from '@ant-design/icons';

const Wrapper = styled.div`
  display: flex;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderLogo = styled.div``;
const HeaderRating = styled.div``;

const Content = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
`;

const ContentTitle = styled.div``;
const ContentSubTitle = styled.div``;
const ContentDescription = styled.div``;
const ContentTags = styled.div``;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterIcon = styled.div``;
const FooterSize = styled.div``;
const FooterDate = styled.div``;

export const FirewallListItemLayout = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderLogo>
          <Image src={FortinetIcon} width={40} />
        </HeaderLogo>
        <HeaderRating>100/23</HeaderRating>
      </Header>
      <Content>
        <ContentTitle>
          Fortinet <Tag color="success">Running</Tag>
        </ContentTitle>
        <ContentSubTitle>SDS_PJT_FW#1</ContentSubTitle>
        <ContentDescription>부품제조_디스플레이</ContentDescription>
        <ContentTags>
          <Tag>C++</Tag>
          <Tag>GPSS</Tag>
          <Tag>OPEN 5G</Tag>
        </ContentTags>
      </Content>
      <Footer>
        <FooterIcon>
          <FormOutlined />
        </FooterIcon>
        <FooterSize>8.8-12.7K PLN</FooterSize>
        <FooterDate>ot 2021.03.08</FooterDate>
      </Footer>
    </Wrapper>
  );
};
