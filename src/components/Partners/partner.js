import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import './index.css';
import partnerImage2 from '../../assets/partner-2.png';
import partnerImage3 from '../../assets/partner-3.png';
import partnerImage4 from '../../assets/partner-4.png';
import profile from '../../assets/Avatar.png';


const Partners = () => {
    return (
        <div>
            <Header />
            <div className="partners-hero">
            </div>

            <div className="partners-content">
                <section className="partners-intro">
                    <h2>SMA National Partners</h2>
                    <p>
                        <strong>The Shudh Monitoring Authority (SMA)</strong> Lorem ipsum dolor sit <br /> amet. At sunt quas qui facere dolor quo saepe totam qui <br /> ratione impedit.
                    </p>
                    <img src={partnerImage2} alt="Spice Partners" style={{ height: '90%', width: '82%', marginTop: '20px' }} />

                </section>

                <section className="main-activities">
                    <div className="main-activities-content">
                        <h3>Main Activities</h3>
                        <ul class="dot-list">
                            <li>
                                <span>Lorem ipsum dolor sit amet.</span>
                                <span>At sunt quas qui facere dolor quo saepe totam qui ratione impedit.</span>
                            </li>
                            <li>
                                <span>Odio consectetur debitis beatae adipisci officia modi velit veritatis?</span>
                            </li>
                            <li>
                                <span>Est tenetur numquam aut optio aut ut nostrum repellendus.</span>
                            </li>
                            <li>
                                <span>Lorem ipsum dolor sit amet.</span>
                                <span>At sunt quas qui facere dolor quo saepe totam qui ratione impedit.</span>
                            </li>
                            <li>
                                <span>Et autem rerum qui ipsum voluptatem est quasi deleniti a quos eaque nam voluptate omnis ut dolores quia. Aut perspiciatis inventore rem autem sunt eos voluptas enim est nostrum dolore eos velit totam. 33 inventore ratione non facilis dicta in optio voluptas ea enim dolorum.</span>
                            </li>
                            <li>
                                <span>Lorem ipsum dolor sit amet.</span>
                                <span>At sunt quas qui facere dolor quo saepe totam qui ratione impedit.</span>
                            </li>
                        </ul>

                    </div>
                    <div className="main-activities-image">
                        <img src={partnerImage3} alt="Main Activities" style={{ width: '85%', height: '85%' }} />
                    </div>
                </section>


                <section className="faq-section">
                    <div className="faq-image">
                        <img src={partnerImage4} alt="FAQ" style={{width: '95%', height: 'auto', marginBottom: '20px'}} />
                    </div>
                    <div className="faq-content">
                <h3>Frequently Asked Questions</h3>
                <p className='faq-content-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. </p>
                
                <div className="faq-item">
                    <h4>Where does it come from?</h4>
                    <p>
                        <span>Lorem ipsum dolor sit amet.</span>
                        <span>At sunt quas qui facere dolor quo saepe totam qui ratione impedit.</span>
                    </p>
                </div>
                
                <div className="faq-item">
                    <h4>How can we contact you?</h4>
                    <p>
                        <span>Lorem ipsum dolor sit amet.</span>
                        <span>At sunt quas qui facere dolor quo saepe totam qui ratione impedit.</span>
                    </p>
                </div>
                
                <div className="faq-item">
                    <h4>What is SMA’s offer?</h4>
                    <p>
                        <span>Lorem ipsum dolor sit amet.</span>
                        <span>At sunt quas qui facere dolor quo saepe totam qui ratione impedit.</span>
                    </p>
                </div>
                   </div>

                </section>



                <section className="find-outlet-section">
                    <h2 className="title">Where can i get some ?</h2>
                    <p className="description">“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus Lorem ipsum dolor sit amet.</p>
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
            </div>

            <Footer />
        </div>
    );
};

export default Partners;
