import React from 'react';
import "./index.css"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';


const Header = () => (
  <header>
    <div className="nav-container">
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/process">Process</Link></li>
          <li><Link to="/partners">Partners</Link></li>
          <li><Link to="/contact-us">ContactUs</Link></li>
          <button>Sign In</button>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;