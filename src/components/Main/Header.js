import React from 'react';

import './style.css';


function Header() {
  return (
    <div className="main-container">
      <div className="row justify-content-md-center">
        <p className="main-title">
          Front-End Developer
        </p>
      </div>
      <div className="row justify-content-md-center padding-bottom">
        <p className="main-subtitle">
          Adyax's core values take top priority: we care for our client, and we care for our people.
          Staff and clients work in partnership with consistent, transparent communication.
        </p>
      </div>
    </div>
  );
}
export default Header;