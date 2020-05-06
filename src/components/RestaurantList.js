import React from "react";

import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ list }) => {
  return (
    <div className="List">
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
        <h2 className="List__Empty">Try searching a new city...</h2>
      )}
    </div>
  );
};

export default RestaurantList;
