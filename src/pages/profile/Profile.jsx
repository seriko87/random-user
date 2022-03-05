import React, { useEffect, useState } from 'react';
import Nav from '../../components/nav/Nav';
import './profile.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userdata } from '../../redux/features/usersSlice';

const Profile = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const userData = useSelector(userdata);
  const user = userData.currentUser;

  let date_param = new Date(user.dob);
  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  console.log(user);

  return (
    <div className="profile-container">
      <Nav
        link={{ location: '/dashboard', name: 'Dashboard' }}
        header={'Profile'}
      />
      <button className="btn" onClick={() => navigate(-1)}>
        go back
      </button>
      <div className="profile-wrap">
        <div className="user-title">
          <h1>{user.name}</h1>
          <span>{date_param.toLocaleDateString('en-US', options)}</span> <br />
          <span>{user.gender}</span>
        </div>
        <img src={user.img} alt="User profile" className="user-img" />
      </div>
      <div className="user-details">
        <div className="user-info">
          <span className="user-info-title">User Info</span>
          <ul className="info-wrap">
            <li>
              <span className="">Username:</span>
              <span>{user.username}</span>
            </li>
            <li>
              <span>E-mail:</span> <span>{user.email}</span>
            </li>
            <li>
              <span>Phone:</span> <span>{user.phone}</span>
            </li>
            <li>
              <span>Mobile:</span> <span>{user.mobile}</span>{' '}
            </li>
          </ul>
        </div>
        <div className="user-info">
          <span className="user-info-title">Address</span>
          <ul className="info-wrap">
            <li>
              <span>Street: </span>
              <span>
                {user.location.street.number + ', ' + user.location.street.name}
              </span>
            </li>
            <li>
              <span>Citi:</span> <span>{user.location.city}</span>{' '}
            </li>
            <li>
              <span>State:</span> <span>{user.location.state}</span>{' '}
            </li>
            <li>
              <span>Postcode:</span> <span>{user.location.postcode}</span>{' '}
            </li>
            <li>
              <span>Country:</span> <span>{user.location.country}</span>{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
