import React from "react";
/**
 * Individual card for each restaurant
 * @param {string} name
 * @param {string} address
 * @param {number} price
 */
const RestaurantCard = ({ name, address, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{address}</h3>
      <h3>{"$".repeat(price)}</h3>
    </div>
  );
};

export default RestaurantCard;
