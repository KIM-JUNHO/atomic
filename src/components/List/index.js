import { List as AntdList } from 'antd';
import styled from 'styled-components';

const StyledList = styled(AntdList)``;
const StyledListItem = styled(AntdList.Item)``;
const StyledListItemMeta = styled(AntdList.Item.Meta)``;

export const List = ({ children, ...props }) => {
  return <StyledList {...props}>{children}</StyledList>;
};

export const ListItem = ({ children, ...props }) => {
  return <StyledListItem {...props}>{children}</StyledListItem>;
};

export const ListItemMeta = ({ children, ...props }) => {
  return <StyledListItemMeta {...props}>{children}</StyledListItemMeta>;
};
