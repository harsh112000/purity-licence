import React from 'react';
import './certified.css';
import image from '../../assets/certified.png';

export default function Certified() {
  return (
    <div className="certified-container">
      <div className="certified-content">
        <h2>Get Certified</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries.
        </p>
      </div>
      <div className="certified-image">
        <img src={image} alt="Food on plate" />
      </div>
    </div>
  );
}
