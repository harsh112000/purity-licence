import React from 'react';
import "./index.css"
import image from "../../assets/image.png"

const Banner = () => (
  <section className="hero-section">
    <div className="hero-text">
    <h2>But, is it Pure? </h2>
    <h2>Don’t worry, Shudh</h2>
    <h2> helps in monitoring </h2>
    <h2>that.Do check out SMA</h2>
      <div className="hero-buttons">
        <button className="button-solid">Get Certified</button>
        <button class="button-outline">SMA Outlets</button>
      </div>
    </div>
    <div className="hero-image">
      <img src={image} alt="Food Display" />
    </div>
  </section>
);

export default Banner;
