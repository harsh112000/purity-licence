import React from 'react';
import './index.css';
import dishesImage from '../../assets/dish.png';
import dessertImage from '../../assets/dessertImage.png';
import bowlImage from '../../assets/bowl.png';
import mapImage from '../../assets/mapImage.png';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import profile from '../../assets/Avatar.png';

const ContactUs = () => {
    return (
        <>
            <Header />
            <div className="contact-container">
                <div className="contact-header">
                    <div className="flex">
                        <button className="help-button">Need Help?</button>
                        <h1>Contact Us</h1>
                    </div>
                    <div className="dishes-image-wrapper">
                        <img src={dishesImage} alt="Dishes" className="dishes-image" />
                    </div>
                </div>
                <div className='contact-form-wrapper'>
                <form className="contact-form">
                    <div>
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" placeholder="First Name" />
                    </div>
                    <div>
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" placeholder="Last Name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Email" />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" placeholder="Phone Number" />
                    </div>
                    <div>
                        <label htmlFor="company-name">Company Name</label>
                        <input type="text" id="company-name" placeholder="Company Name" />
                    </div>
                    <div>
                        <textarea id="about-you" placeholder="What would you like us to know about you?"></textarea>
                    </div>
                    <button type="submit" className="send-button">Send Message</button>
                </form>
                    <img src={dessertImage} alt="Dessert" className="dessert-image" />
                </div>
                <div className='contact-info-wrapper'>
                    <div className="contact-info">
                        <div className="office-info">
                            <p><strong style={{color: 'orange'}}>Canada</strong><br />4497, Dufferin Street<br />Toronto, Ontario</p>
                            <p><strong style={{color: 'orange'}}>US Office</strong><br />1115 First Ave Ste 511<br />King of Prussia, PA 19406</p>
                            <p><strong style={{color: 'orange'}}>UK Office</strong><br />71-75 Shelton Street<br />Greater London, WC2H 9JQ</p>
                            <p>contact@some.com<br />474-814-3947</p>
                        </div>
                        <div className='map-image-wrapper'>
                            <img src={mapImage} alt="Map" className="map-image" />
                        </div>
                    </div>
                    <img src={bowlImage} alt="Bowl" className="bowl-image" />
                </div>
            </div>
            <section className="find-outlet-section">
                <h2 className="title">Shudh Vegetables</h2>
                <p className="description">“Shudh Vegetables is an essential part of the faith and advocates argue that the practices of traditional vegan foodsare Pure.”</p>
                <div className="profile">
                    <img src={profile} alt="profile" />
                    <div className="profile-info">
                        <span className="profile-name">Iswarya Raju</span>
                        <div>
                            <span className="profile-role">Safety Officer</span>
                        </div>
                    </div>
                </div>
                <div className="decorations">
                    <div className="decoration-left"></div>
                    <div className="decoration-top-right"></div>
                    <div className="decoration-bottom-right"></div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ContactUs;
