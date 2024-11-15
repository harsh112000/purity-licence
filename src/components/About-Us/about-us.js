import React from 'react';
import './index.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import foodImage1 from '../../assets/about-us-1.png';
import foodImage2 from '../../assets/about-us-2.png';
import foodImage3 from '../../assets/about-us-3.png';
import veganImage from '../../assets/vegan.png';
import profile from '../../assets/Avatar.png';

const AboutUs = () => {
    return (
        <div>
            <Header />
            <div className="about-us">
                <section className="intro">
                    {/* The "Keepin IT Shudh" text is now part of the background image */}
                </section>
                <section className="history-section">
                    <h2 className="history-title">Our History</h2>
                    <p className="history-description">
                        It means permissible. Shudh can be applied to anything - food, income, relationships
                    </p>
                    <div className="history-content">
                        <div className="history-image-text-wrapper">
                            <img src={foodImage1} alt="Delicious food" className="food-image" />
                            <h3 className="history-subtitle">Over the years</h3>
                            <p className="history-paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
                            </p>
                        </div>
                        <div className="history-image-text-wrapper">
                            <p className="history-paragraph history-extra-paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
                            </p>
                            <img src={foodImage2} alt="Person holding food" className="food-image1" />
                        </div>
                    </div>
                </section>
        

                <section className="life-glimpses">
                    <h2>Glimpses of life at Shudh</h2>
                    <img src={foodImage3} alt="Life at Shudh" />
                </section>

                <section className="find-outlet-section">
                    <h2 className="title">Prefect Food</h2>
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

                <section className="vegan-purity">
                    <div className="vegan-content">
                        <div className="vegan-image-container">
                            <img src={veganImage} alt="Go Vegan" />
                        </div>
                        <div>
                            <h2>All About Shudh Purity</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis libero velit, eget suscipit massa auctor nec.</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
