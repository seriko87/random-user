import React, { useState } from 'react';
import './dash.css';
import List from '../../components/list/List';
import { menuItems } from './menuItems';
import { Routes, Route, Outlet } from 'react-router-dom';
import Users from '../../components/users/Users';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('users');
  return (
    <div className="dashboard-container">
      <nav className="side-nav">
        <div className="logo">Friendly</div>
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
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
