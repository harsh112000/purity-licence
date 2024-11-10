import React from 'react';
import './index.css';
import burgerImage from "../../assets/burger.png";
import cakeImage from "../../assets/cake.png";
import pizzaImage from "../../assets/pizza.png";
import deliciousImage from "../../assets/delicious.png";


const choices = [
  { title: "Burger", subtitle: "Dishes", image: burgerImage },
  { title: "Pizza", subtitle: "Dishes", image: pizzaImage },
  { title: "Cakes", subtitle: "Dishes", image: cakeImage },
  // { title: "Cold Coffee", subtitle: "Dishes", image: coldCoffeeImage },
  { title: "Delicious", subtitle: "Dishes", image: deliciousImage },
];

const TopChoice = () => (
  <section className="top-choice-section">
    <h2>Top Choice For You</h2>
    <div className="choices">
      {choices.map((choice, index) => (
        <div className="choice-card" key={index}>
          <img src={choice.image} alt={choice.title} className="choice-image" />
          <h3>{choice.title}</h3>
          <p>{choice.subtitle}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TopChoice;
