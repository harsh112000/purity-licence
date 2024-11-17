import React from 'react';
import './index.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';

const CertificatePage = () => {
    return (
        <>
            <Header />
            <div className="certificate-page">
                <div className="banner-section">
                </div>
                <h3>SMA National Partners</h3>
            </div>
            <div className="certificate-text">
                <h4>The Shudh Monitoring Authority (SMA)orem ipsum dolor sit </h4>
                <h4>  amet. At sunt quas qui facere dolor quo saepe totam qui </h4>
                <h4> ratione impedit. </h4>
            </div>
            <div className="partners-section">
                <img src={require('../../assets/istanbul.png')} alt="partners" />
                <img src={require('../../assets/sport.png')} alt="partners" />
            </div>
            <div className="ai-image">
                <img style={{ width: '500px', height: '500px' }} src={require('../../assets/ai-image.png')} alt="certificate" />
                <div className="ai-image-text">
                    <h1 style={{ marginLeft: '30%' }}>Places to Visit</h1>
                    <div className="places-container">
                        <div className="place-item">
                            <h3>Hotel XXXXX</h3>
                            <p>Time: </p>
                            <p>Date: </p>
                        </div>
                        <div className="place-item">
                            <h3>XXXX Cafe</h3>
                            <p>Time: </p>
                            <p>Date: </p>
                        </div>
                        <div className="place-item">
                            <h3>Restaurant</h3>
                            <p>Time:</p>
                            <p>Date: </p>
                        </div>
                        <div className="place-item">
                            <h3>Ciclo Cafe</h3>
                            <p>Time: </p>
                            <p>Date: </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="certificate-image">
                <h1 style={{ marginTop:'60px', marginLeft: '40%', fontSize: '3rem' }}>Our Certificate</h1>
                    <img style={{ width: '95%', height: '95%', marginLeft: '2.5%' }} src={require('../../assets/certificate1.png')} alt="certificate" />
                </div>
            <Footer />
        </>
    );
};

export default CertificatePage;
