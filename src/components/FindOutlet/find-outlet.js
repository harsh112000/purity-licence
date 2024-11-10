import React from 'react';
import profile from '../../assets/Avatar.png';
import './index.css';

const FindOutlet = () => (
  <section className="find-outlet-section">
    <h2 className="title">Find an SMA Outlet near you</h2>
    <p className="description">“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus Lorem ipsum dolor sit amet.</p>
    <div className="profile">
      <img src={profile} alt="profile" />
      <div className="profile-info">
        <span className="profile-name">Iswarya Raju</span>
        <span className="profile-role">Safety Officer</span>
      </div>
    </div>
    <div className="decorations">
      <div className="decoration-left"></div>
      <div className="decoration-top-right"></div>
      <div className="decoration-bottom-right"></div>
    </div>
  </section>
);

export default FindOutlet;
