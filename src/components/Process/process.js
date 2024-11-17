import React from 'react';
import './index.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import processImage1 from '../../assets/processImage1.png';
import processImage3 from '../../assets/processImage3.png';
import processImage4 from '../../assets/processImage4.png';
// import profile from '../../assets/Avatar.png';

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
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The elegance of simplicity lies in the profound truth this statement conveys. In a world where distractions abound, the foundational principles of clear and effective communication remain ever relevant. Quis pharetra adipiscing ultrices vulputate posuere tristique reflects a harmonious balance between innovation and tradition, emphasizing the importance of adaptability in navigating complexities. In sed odio nec aliquet eu proin mauris et speaks to resilience and perseverance, highlighting the strength found in overcoming challenges and embracing growth with an open heart. This philosophy invites us to explore the intersection of creativity and discipline, where ideas flourish, and meaningful progress is achieved."
                            </p>
                        </div>
                        {/* <div className="process-history-item">
                            <div className="three-step-process">
                                <div className="step">
                                    <div className="step-number">1</div>
                                    <h4 className="step-title">Step 1: Idea</h4>
                                    <p className="step-description">
                                        Every great process begins with a solid idea. Identify the goal and plan the initial steps to set the foundation for success.
                                    </p>
                                </div>
                                <div className="step">
                                    <div className="step-number">2</div>
                                    <h4 className="step-title">Step 2: Implementation</h4>
                                    <p className="step-description">
                                        Turn ideas into action by creating, testing, and refining the process to ensure efficiency and quality.
                                    </p>
                                </div>
                                <div className="step">
                                    <div className="step-number">3</div>
                                    <h4 className="step-title">Step 3: Delivery</h4>
                                    <p className="step-description">
                                        Bring the process to completion by delivering the final results to consumers, ensuring satisfaction and success.
                                    </p>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </section>

                <div className="process-item-centered">
                    <h3 className="process-subtitle">Global Shudh Certified</h3>
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


            </div>
            <Footer />
        </div>
    );
};

export default Process;
