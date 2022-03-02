import React, { useState } from 'react';
import './dash.css';
import List from '../../components/list/List';
import { menuItems } from './menuItems';
import { Outlet } from 'react-router-dom';
import Nav from '../../components/nav/Nav';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('users');
  return (
    <div className="dashboard-container">
      <nav className="side-nav">
        <div className="logo" style={{ fontSize: '36px' }}>
          Dashboard
        </div>
        <div className="list-wrap">
          {menuItems.map((item) => {
            return (
              <List
                {...item}
                setActiveTab={setActiveTab}
                activeTab={activeTab}
              />
            );
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
