import React from "react";
import "./index.css";

const ForgotPassword = () => {
  return (
    <div className="forgot-password-container">
      <div className="left-panel">
        <div className="logo">
          <span>SMA</span>
          <p>Shudh Monitoring Authority</p>
        </div>
        <div className="image-container">
          <img
            src={require('../../assets/loginpage.png')}
            alt="User"
          />
        </div>
      </div>
      <div className="right-panel">
        <div className="form-container">
          <h3>Forgot Password</h3>
          <form>
            <label htmlFor="email">Email</label>
            <div className="input-group">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Nathaniel"
              />
            </div>
            <button type="submit" className="reset-button">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
