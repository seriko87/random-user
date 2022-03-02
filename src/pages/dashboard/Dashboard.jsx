import React, { useState } from 'react';
import './dash.css';
import List from '../../components/list/List';
import { menuItems } from './menuItems';
import { Outlet } from 'react-router-dom';
import DarkModeToggle from '../../components/darkMode/DarkModeToggle';

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
        <span>
          <DarkModeToggle />
        </span>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
