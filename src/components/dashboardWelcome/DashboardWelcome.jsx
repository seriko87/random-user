import React from 'react';
import Tabs from '../tabs/Tabs';
import { menuItems } from '../../pages/dashboard/menuItems';
import './dashboardWelcome.css';

const DashboardWelcome = () => {
  return (
    <div className="dash-tabs-wrap">
      {menuItems.map((item) => {
        return <Tabs name={item.name} icon={item.icon} key={item.id} />;
      })}
    </div>
  );
};

export default DashboardWelcome;
