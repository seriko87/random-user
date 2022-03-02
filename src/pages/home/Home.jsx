import React from 'react';
import './home.css';
import DarkModeToggle from '../../components/darkMode/DarkModeToggle';
import Button from '../../components/Button';

const Home = () => {
  return (
    <div className="homeContainer">
      <nav className="main-nav">
        <div className="logo">Friendly</div>
        <span className="btns-wrap">
          <Button location={'dashboard'} name={'Dashboard'} />
          <DarkModeToggle />
        </span>
      </nav>
      <article className="welcome">Welcome to Friendly</article>
    </div>
  );
};

export default Home;
