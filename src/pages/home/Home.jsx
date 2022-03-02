import React from 'react';
import Nav from '../../components/nav/Nav';
import './home.css';

const Home = () => {
  return (
    <div className="homeContainer">
      <Nav
        link={{ location: 'dashboard', name: 'dashboard' }}
        header={'Friendly'}
      />
      <article className="welcome">Welcome to Friendly</article>
    </div>
  );
};

export default Home;
