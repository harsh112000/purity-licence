import React from 'react';
import './index.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import foodImage1 from '../../assets/about-us-1.png';
import foodImage3 from '../../assets/about-us-3.png';
import veganImage from '../../assets/vegan.png';
import profile from '../../assets/Avatar.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'




const AboutUs = () => {
    const carouselImages = [foodImage3, foodImage3, foodImage3];
    const NextArrow = ({ onClick }) => (
        <div className="custom-arrow next-arrow" onClick={onClick}>
            &#8250;
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div className="custom-arrow prev-arrow" onClick={onClick}>
            &#8249;
        </div>
    );

    const sliderSettings = {
        dots: true,
        infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

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
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The elegance of simplicity lies in the profound truth this statement conveys. In a world where distractions abound, the foundational principles of clear and effective communication remain ever relevant. Quis pharetra adipiscing ultrices vulputate posuere tristique reflects a harmonious balance between innovation and tradition, emphasizing the importance of adaptability in navigating complexities. In sed odio nec aliquet eu proin mauris et speaks to resilience and perseverance, highlighting the strength found in overcoming challenges and embracing growth with an open heart. This philosophy invites us to explore the intersection of creativity and discipline, where ideas flourish, and meaningful progress is achieved."
                            </p>
                            {/* <img src={foodImage2} alt="Person holding food" className="food-image1" /> */}
                        </div>
                    </div>
                </section>


                <section className="life-glimpses">
                    <h2>Glimpses of life at Shudh</h2>
                    <Slider {...sliderSettings}>
                        {carouselImages.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Glimpse ${index + 1}`} className="carousel-image" />
                            </div>
                        ))}
                    </Slider>
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

                            <Link style={{textDecoration: 'underline', color: 'black', fontFamily: 'Nunito-Sans'}}
                                to="/path/to/shudh-purity-brochure.pdf"
                                target="_blank"
                                className="download-link"
                            >
                                Shudh Purity Brochure
                            </Link>.
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
