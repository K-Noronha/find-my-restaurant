import React from "react";

import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ list }) => {
  return (
    <div>
      {list && list.length > 0 ? (
        list.map((item) => (
          <RestaurantCard
            key={item.id}
            name={item.name}
            address={item.address}
            price={item.price}
          />
        ))
      ) : (
        <h1>Try searching a new city...</h1>
      )}
    </div>
  );
};

export default RestaurantList;
