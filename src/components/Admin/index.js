import React from 'react';
import './index.css';

const Admin = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="logo">Shudh Monitoring Authority</div>
        <div className="image-container">
          <img
            src={require('../../assets/loginpage.png')}
            alt="Login Visual"
          />
        </div>
      </div>
      <div className="login-right">
        <div className="login-box">
          <h1 className="login-title">LOGIN AS A  ADMIN USER</h1>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Nathaniel" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="•••••••" />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
          <div className="login-links">
          Terms Of Use
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
