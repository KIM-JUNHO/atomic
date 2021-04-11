import { PageHeader } from 'components/PageHeader';
import styled from 'styled-components';

const StyledPageHeader = styled(PageHeader)``;

export const MenuPageHeader = ({ children, ...props }) => {
  return <StyledPageHeader titl="test" subTite="subTitle" {...props} />;
};
