import React from 'react';
import "./index.css"
import image from "../../assets/image.png"

const Banner = () => (
  <section className="hero-section">
    <div className="hero-text">
      <h2>But, is it Pure?</h2>
      <p>Don't worry, Shudh helps in monitoring that. Do check out SMA</p>
      <div className="hero-buttons">
        <button>Get Certified</button>
        <button>SMA Outlets</button>
      </div>
    </div>
    <div className="hero-image">
      <img src={image} alt="Food Display" />
    </div>
  </section>
);

export default Banner;
