import React from 'react';
import './tabs.css';
import { SvgIcon } from '@mui/material';

const Tabs = ({ name, icon }) => {
  return (
    <div className="tabs-container">
      <SvgIcon sx={{ fontSize: 98 }}> {icon} </SvgIcon>
      <h2 style={{ fontSize: '1.5rem' }}>{name}</h2>
    </div>
  );
};

export default Tabs;
