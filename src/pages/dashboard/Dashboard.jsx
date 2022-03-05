import React, { useState } from 'react';
import './dash.css';
import List from '../../components/list/List';
import { menuItems } from './menuItems';
import { Outlet } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import { useSelector, useDispatch } from 'react-redux';
import { selectTab } from '../../redux/features/dashboardSlice';
import { getData } from '../../redux/features/usersSlice';

const Dashboard = () => {
  const activeTab = useSelector(selectTab);

  return (
    <div className="dashboard-container">
      <nav className="side-nav">
        <div className="logo" style={{ fontSize: '36px' }}>
          Dashboard
        </div>
        <div className="list-wrap">
          {menuItems.map((item) => {
            return <List {...item} />;
          })}
        </div>
      </nav>
      <div className="dash-content">
        <div className="nav-container">
          <Nav link={{ location: '/', name: 'home' }} header={activeTab} />
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
