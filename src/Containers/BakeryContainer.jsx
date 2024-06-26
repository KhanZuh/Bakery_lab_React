import { useState } from 'react';
import CakeItem from '../Components/CakeItem';
import '../App.css';

const BakeryContainer = () => {
  const [cakes, setCakes] = useState([
    {
      cakeName: "Victoria Sponge",
      ingredients: [
        "eggs",
        "chocolate", // test for dynamically adding ingrei
        "butter",
        "sugar",
        "self-raising flour",
        "baking powder",
        "milk"
      ],
      price: 5,
      rating: 5
    },
    {
      cakeName: "Tea Loaf",
      ingredients: [
        "eggs",
        "oil",
        "dried fruit",
        "sugar",
        "self-raising flour",
        "strong tea",
      ],
      price: 2,
      rating: 3
    },
    {
      cakeName: "Carrot Cake",
      ingredients: [
        "carrots",
        "walnuts",
        "oil",
        "cream cheese",
        "flour",
        "sugar",
      ],
      price: 8,
      rating: 5
    }
  ]);

  const [totalSales, setTotalSales] = useState(0);

  const calculateAverageRating = () => {
    const sum = cakes.reduce((total, cake) => total + cake.rating, 0);
    return (sum / cakes.length).toFixed(1);
  };

  const handleSellCake = (price) => {
    setTotalSales(prevTotal => prevTotal + price);
  };

  return (
    <div className="bakery-container">
      <div className="cake-list">
        {cakes.map((cake, index) => (
          <CakeItem 
            key={index} 
            cake={cake} 
            onSell={() => handleSellCake(cake.price)}
          />
        ))}
      </div>
      <div className="average-rating">
        <h3>Average Cake Rating: {calculateAverageRating()}/5</h3>
      </div>
      <div className="total-sales">
        <h3>Total Sales: £{totalSales.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default BakeryContainer;