import React from 'react';
import Header from './components/Header/header';
import Banner from './components/Banner/banner';
import Services from './components/Servicess/service';
import About from './components/About/about';
import Certification from './components/Certification/certification';
import Certified from './components/Certified/certified';
import TopChoice from './components/TopChoice/top-choice';
import FoodGallery from './components/FoodGallery/food-gallery';
import FindOutlet from './components/FindOutlet/find-outlet';
import Footer from './components/Footer/footer';
import SudhFood from './components/SudhFood.js/sudh-food';
const App = () => (
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

export default App;