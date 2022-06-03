import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '870px', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <img  src='../Assets/logo.png' alt='logo' height='30px' width='30px'/> 
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
           BizStat
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu style={{fontSize:'11px'}}>
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="users">Users</CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="th-large">Sites</CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="credit-card">Payments</CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="exclamation-circle">Settings</CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;