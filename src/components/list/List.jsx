import React from 'react';
import './list.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectTab, setActiveTab } from '../../redux/features/dashboardSlice';

const List = ({ icon, name, id }) => {
  const activeTab = useSelector(selectTab);
  const dispatch = useDispatch();

  return (
    <Link to={id}>
      <button
        className={activeTab === id ? 'list-btn active' : 'list-btn'}
        onClick={() => dispatch(setActiveTab(id))}
      >
        <span>{icon}</span>
        <span>{name}</span>
      </button>
    </Link>
  );
};

export default List;
