import { Layout } from 'antd';
import { SiderMenu } from 'components/Menu/SiderMenu';
import { useState } from 'react';
import styled from 'styled-components';

const StyledSider = styled(Layout.Sider)``;

export const Sider = ({ children, ...props }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <StyledSider collapsible collapsed={collapsed} onCollapse={toggleCollapsed} trigger={null}>
      <SiderMenu collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
    </StyledSider>
  );
};
