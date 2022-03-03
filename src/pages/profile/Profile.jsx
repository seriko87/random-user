import React from 'react';
import Nav from '../../components/nav/Nav';
import './profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <Nav
        link={{ location: '/dashboard', name: 'Dashboard' }}
        header={'Profile'}
      />
      <div className="profile-wrap">
        <div className="user-title">
          <h1>John Doe</h1>
          <span>January 5, 2154</span>
          <span>Male</span>
        </div>
        <img
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="User profile"
          className="user-img"
        />
      </div>
      <div className="user-details">
        <div className="user-info">
          <span>User Info</span>
          <div className="user-info-wrap">
            <p>Username: aseasd</p>
            <p>E-mail: sera@serr.com</p>
            <p>Phone: +19748548784</p>
            <p>Mobile: +97885454545</p>
          </div>
        </div>
        <div className="user-info">
          <span>Address</span>
          <div className="address-info-wrap">
            <p>Street: aseasd</p>
            <p>Citi: sera@serr.com</p>
            <p>State: +19748548784</p>
            <p>Postcode: +97885454545</p>
            <p>Cordinates: +97885454545</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
