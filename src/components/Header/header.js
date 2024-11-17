import React from 'react';
import "./index.css"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="nav-container">
      <img src={logo} alt="logo" />
      <nav>
        <ul className = "ul">
          <Link to="/" >Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/process">Process</Link>
          <Link to="/partners">Partners</Link>
          <Link to="/contact-us">ContactUs</Link>
          <button>Sign In</button>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;