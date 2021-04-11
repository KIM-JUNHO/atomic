import { Menu as AntdMenu } from 'antd';
import styled from 'styled-components';

const StyledMenu = styled(AntdMenu)``;
const StyledSubMenu = styled(AntdMenu.SubMenu)``;
const StyledItem = styled(AntdMenu.Item)``;
const StyledItemGroup = styled(AntdMenu.ItemGroup)``;

export const Menu = ({ children, ...props }) => {
  return <StyledMenu {...props}>{children}</StyledMenu>;
};
export const SubMenu = ({ children, ...props }) => {
  return <StyledSubMenu {...props}>{children}</StyledSubMenu>;
};
export const Item = ({ children, ...props }) => {
  return <StyledItem {...props}>{children}</StyledItem>;
};
export const ItemGroup = ({ children, ...props }) => {
  return <StyledItemGroup {...props}>{children}</StyledItemGroup>;
};
