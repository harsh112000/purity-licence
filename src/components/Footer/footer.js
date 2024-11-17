import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import logo from '../../assets/logo.png';
import payment from '../../assets/payment.png';
import email from '../../assets/footer-img.png';
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
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/work-with-us">Work With Us</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/restaurants">Restaurants</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/order-food">Order Food</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><Link to="/online-order">Online Order</Link></li>
            <li><Link to="/pre-reservation">Pre-Reservation</Link></li>
            <li><Link to="/24-7-services">24/7 Services</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </div>
      </div>
      <div className="newsletter">
        <h4>Join Our Newsletter</h4>
        <form className="newsletter-form">
          <input type="email" placeholder="email@google.com" />
          <button type="submit">
            <img className='email-image' src={email} alt="email" />
          </button>
        </form>
        <p style={{ paddingTop: '10px', fontFamily: 'Nunito-Sans', fontWeight: '500', fontSize: '14px' }}>Will send you weekly updates for your better finance management.</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© SMA 2024. All Rights Reserved.</p>
      <div>
        <img className="payment-image" src={payment} alt="Mastercard" />
      </div>
    </div>
  </footer>
);

export default Footer;
