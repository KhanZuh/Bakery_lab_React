import { useState } from 'react';

const CakeItem = ({ cake, onSell }) => {
  return (
    <div className="cake-item">
      <h3>{cake.cakeName}</h3>
      <p className="price">Price: £{cake.price}</p>
      <p className="rating">Rating: {cake.rating}/5</p>
      <h4>Ingredients:</h4>
      <ul>
        {cake.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <button onClick={onSell} className="sell-button">Sell Cake</button>
    </div>
  );
};

export default CakeItem;