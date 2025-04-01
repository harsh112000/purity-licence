import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/header';
import Banner from './components/Banner/banner';
import Services from './components/Servicess/service';
import About from './components/About/about';
import Certification from './components/Certification/certification';
import Certified from './components/Certified/certified';
import TopChoice from './components/TopChoice/top-choice';
import SudhFood from './components/SudhFood.js/sudh-food';
import FoodGallery from './components/FoodGallery/food-gallery';
import FindOutlet from './components/FindOutlet/find-outlet';
import Footer from './components/Footer/footer';
import AboutUs from './components/About-Us/about-us'; 
import Process from './components/Process/process';
import Partners from './components/Partners/partner';
import ContactUs from './components/ContactUs/contact';
import Certify from './components/Certify/certify';
import Login from './components/Login/index';
import Admin from './components/Admin/index';
import ForgotPassword from './components/ForgotPassword/index';

const HomePage = () => (
    <div>
        <Header />
        <Banner />
        <Services />
        <About />
        <Certification />
        <Certified />
        <TopChoice />
        <SudhFood />
        <FoodGallery />
        <FindOutlet />
        <Footer />
    </div>
    
);

const LoginPage = () => (
    <div>
        <Login/>
        {/* <ForgotPassword/> */}
        {/* <Admin/> */}
    </div>
);

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/process" element={<Process />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/certify" element={<Certify />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    </Router>
);

export default App;
