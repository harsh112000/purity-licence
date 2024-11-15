import React from 'react';
import './index.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import processImage1 from '../../assets/processImage1.png';
import processImage2 from '../../assets/processImage2.png';
import processImage3 from '../../assets/processImage3.png';
import processImage4 from '../../assets/processImage4.png';
import profile from '../../assets/Avatar.png';

const Process = () => {
    return (
        <div>
            <Header />
            <div className="process-about">
                <section className="process-intro">
                </section>
                <section className="process-history-section">
                    <h2 className="process-history-title">Process Stages</h2>
                    <p className="process-history-description">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                    </p>
                    <div className="process-history-content">
                        <div className="process-history-item">
                            <img src={processImage1} alt="Delicious food" className="process-images" />
                            <h3 className="process-subtitle">Plants</h3>
                            <p className="process-paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
                            </p>
                        </div>
                        <div className="process-history-item">
                            <p className="process-paragraph process-paragraph-extra">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
                            </p>
                            <img src={processImage2} alt="Person holding food" className="process-image-alt" />
                        </div>
                    </div>
                </section>

                <div className="process-item-centered">
                    <h3 className="process-subtitle">Certified Outlets</h3>
                    <p className="process-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique.
                    </p>
                    <img src={processImage3} alt="Delicious food" className="process-image" />
                </div>

                <section className="process-world-consumers">
                    <h2>World Level Consumers</h2>
                    <p className="process-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique.
                    </p>
                    <img src={processImage4} alt="Life at Shudh" />
                </section>

                <section className="process-outlet-section">
                    <h2 className="process-outlet-title">Perfect Food</h2>
                    <div className="process-profile">
                        <img src={profile} alt="profile" />
                        <div className="process-profile-info">
                            <span className="process-profile-name">Iswarya Raju</span>
                            <div>
                                <span className="process-profile-role">Safety Officer</span>
                            </div>
                        </div>
                    </div>
                    <div className="process-decorations">
                        <div className="process-decoration-left"></div>
                        <div className="process-decoration-top-right"></div>
                        <div className="process-decoration-bottom-right"></div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Process;
