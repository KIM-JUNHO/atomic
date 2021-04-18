import { List, ListItem } from 'components/List';
import React from 'react';
import styled from 'styled-components';
import { FirewallListItemLayout } from './layout';

const StyledList = styled(List)``;
const StyledListItem = styled(ListItem)``;

export const FirewallList = () => {
  return (
    <StyledList itemLayout="vertical">
      <StyledListItem>
        <FirewallListItemLayout />
      </StyledListItem>
    </StyledList>
  );
};
