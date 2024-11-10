import React from 'react';
import image from '../../assets/Frame 4.png';
import './index.css';

const Certification = () => (
  <section className="certification-section">
    <h2>To Get Certified</h2>
    <div className="certification-cards">
      <div className="card">
        <img src={image} alt="Perfect Burger" />
        <h3>Perfect Burger</h3>
        <p>Snacks, Beverages</p>
      </div>
      <div className="card">
        <img src={image} alt="Perfect Sandwich" />
        <h3>Perfect Sandwich</h3>
        <p>Snacks, Beverages</p>
      </div>
      <div className="card">
        <img src={image} alt="Perfect with Fries" />
        <h3>Perfect with Fries</h3>
        <p>Snacks, Beverages</p>
      </div>
      <div className="card">
        <img src={image} alt="Perfect Salad" />
        <h3>Perfect Salad</h3>
        <p>Snacks, Beverages</p>
      </div>
    </div>
  </section>
);

export default Certification;
