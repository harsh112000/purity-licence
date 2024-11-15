import React from 'react';
import './index.css';
import logo from '../../assets/logo.png';
import payment from '../../assets/payment.png';
const Footer = () => (
  <footer className="footer">
    <div className="footer-section">
      <div className="footer-logo">
        <div className="logo-text">
          <div className="logo-image">
            <img src={logo} alt="logo" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dictumst faucibus ac eget nisl augue.</p>
        </div>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Work With Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>Restaurants</li>
            <li>Reviews</li>
            <li>Order Food</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Online Order</li>
            <li>Pre-Reservation</li>
            <li>24/7 Services</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
      <div className="newsletter">
        <h4>Join Our Newsletter</h4>
        <form className="newsletter-form">
          <input type="email" placeholder="email@google.com" />
          <button type="submit">
            <i className="fas fa-envelope"></i>
          </button>
        </form>
        <p style={{paddingTop: '10px'}}>Will send you weekly updates for your better finance management.</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© SMA 2024. All Rights Reserved.</p>
      <div>
        <img  className = "payment-image" src={payment} alt="Mastercard" />
      </div>
    </div>
  </footer>
);

export default Footer;
