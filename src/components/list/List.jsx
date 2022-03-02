import React from 'react';
import './list.css';
import { Link } from 'react-router-dom';

const List = ({ icon, name, id, activeTab, setActiveTab }) => {
  return (
    <Link to={id}>
      <button
        className={activeTab === id ? 'list-btn active' : 'list-btn'}
        onClick={() => setActiveTab(id)}
      >
        <span>{icon}</span>
        <span>{name}</span>
      </button>
    </Link>
  );
};

export default List;
