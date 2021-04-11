import { Menu, SubMenu, Item } from 'components/Menu';
import styled from 'styled-components';
import { Icon } from 'components/Icon';
import { FirewallIcon } from 'components/Icon/FirewallIcon';
import { SuccessIcon } from 'components/Icon/SuccessIcon';
import { FailIcon } from 'components/Icon/FailIcon';
import { UnknownIcon } from 'components/Icon/UnknownIcon';
import { AllFirewallSelect } from 'components/Select/AllFirewallSelect';
import { LeftArrowIcon } from 'components/Icon/LeftArrowIcon';

const StyledMenu = styled(Menu)`
  min-height: 100vh;
`;
const StyledSubMenu = styled(SubMenu)``;
const StyledItem = styled(Item)``;

export const SiderMenu = ({ collapsed, toggleCollapsed }) => {
  return (
    <StyledMenu
      mode="inline"
      inlineIndent={12}
      openKeys={!collapsed ? ['sub1'] : []}
      onOpenChange={() => {}}
      expandIcon={<Icon />}
    >
      <StyledItem key="1" icon={<FirewallIcon />} onClick={toggleCollapsed}>
        Firewall
        <LeftArrowIcon style={{ marginLeft: '76px' }} />
      </StyledItem>
      <StyledSubMenu key="sub1" title={!collapsed && <AllFirewallSelect />}>
        <StyledItem key="2" icon={<SuccessIcon />}>
          defaultfw01
        </StyledItem>
        <StyledItem key="3" icon={<FailIcon />}>
          secui-test
        </StyledItem>
        <StyledItem key="4" icon={<UnknownIcon />}>
          SDS_PJT_FW
        </StyledItem>
        <StyledItem key="5" icon={<SuccessIcon />}>
          firewall#2
        </StyledItem>
      </StyledSubMenu>
    </StyledMenu>
  );
};