import React from 'react';
import "./index.css";
import image from "../../assets/Frame 4.png";

const About = () => (
  <section className="about-section">
    <h2>What is SMA?</h2>
    <div className="about-content">
      <div className="text-content">
        <h3>Shudh Monitoring Authority (SMA)</h3>
        <p>The Shudh Monitoring Authority (SMA) realises the complications of the food industry and thus has devised a three-part inspection plan that covers the entire route; from the source (abattoirs, slaughterhouses, manufacturer), the middle-men (processors and distributors), and finally the retailers (butchers and food outlets).</p>
      </div>
      <img src={image} alt="about" className="about-image" />
    </div>
  </section>
);

export default About;
