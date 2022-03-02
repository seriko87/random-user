import React from 'react';
import DarkModeToggle from '../../components/darkMode/DarkModeToggle';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = ({ link, header }) => {
  return (
    <nav className="main-nav">
      <div className="logo">{header}</div>
      <span className="btns-wrap">
        <Link to={link.location}>
          <button className="btn">{link.name}</button>
        </Link>
        <DarkModeToggle />
      </span>
    </nav>
  );
};

export default Nav;
