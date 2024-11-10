import React from 'react';
import './index.css';
import vegetableImage from '../../assets/vegetable.png';
import pizza from '../../assets/big-pizza.png'

const dishes = [
  {
    title: "Vegetable Healthy Dish",
    description: "Cheesy mayo sauce and mozzarella, tomatoes, green pepper, onion",
    image: vegetableImage
  },
  {
    title: "Vegetable Healthy Dish",
    description: "Cheesy mayo sauce and mozzarella, tomatoes, green pepper, onion",
    image: vegetableImage
  },
  {
    title: "Vegetable Healthy Dish",
    description: "Cheesy mayo sauce and mozzarella, tomatoes, green pepper, onion",
    image: vegetableImage
  },
  {
    title: "Vegetable Healthy Dish",
    description: "Cheesy mayo sauce and mozzarella, tomatoes, green pepper, onion",
    image: vegetableImage
  },
  {
    title: "Vegetable Healthy Dish",
    description: "Cheesy mayo sauce and mozzarella, tomatoes, green pepper, onion",
    image: pizza
  },
  {
    title: "Vegetable Healthy Dish",
    description: "Cheesy mayo sauce and mozzarella, tomatoes, green pepper, onion",
    image: pizza
  }
];

const ShudhFoods = () => (
  <section className="shudh-foods-section">
    <div className="header">
      <h2>Shudh Foods</h2>
      <button className="view-all">View All</button>
    </div>
    <div className="dishes-grid">
      {dishes.map((dish, index) => (
        <div className="dish-card" key={index}>
          <img src={dish.image} alt={dish.title} className="dish-image" />
          <div className="dish-info">
            <h3>{dish.title}</h3>
            <p>{dish.description}</p>
            <button className="read-more">Read More</button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ShudhFoods;
