// Navbar.js
import React from 'react';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="app-name">Your App Name</span>
      </div>
      <div className="navbar-right">
        <a href="/service">Service</a>
        <a href="/blog">Blog</a>
        {/* Add more navigation options as needed */}
      </div>
    </nav>
  );
}

export default Navbar;
