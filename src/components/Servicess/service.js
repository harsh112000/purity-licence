import React from 'react';
import image from "../../assets/Container.png"
import image2 from "../../assets/Margin (1).png"
import "./index.css"
const Services = () => (
  <section className="services-section">
    <h2>Our Services</h2>
    <div className='content'>This is the section of our work</div>
    <div className="service-images">
      <img src={image2} alt="service" />
      <img src={image} alt="service" />
    </div>
  </section>
);

export default Services;
