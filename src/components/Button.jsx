import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ location, name }) => {
  return (
    <Link to={location}>
      <button className="btn">{name}</button>
    </Link>
  );
};

export default Button;
