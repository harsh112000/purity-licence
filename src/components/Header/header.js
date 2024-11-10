import React from 'react';
import "./index.css"
import logo from "../../assets/logo.png"

const Header = () => (
  <header>
    <div className="nav-container">
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Process</li>
          <li>Partners</li>
          <li>Contact Us</li>
          <button>Sign In</button>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;