import React from "react";
import { connect } from "react-redux";

import SearchBar from "../components/SearchBar";
import RestaurantList from "../components/RestaurantList";
import RefineSearch from "../components/RefineSearch";

const Homepage = ({ list, filteredList }) => {
  //passes the resturant list if the filter has been applied
  const restaurants = (filteredList.length > 0 && filteredList) || list;

  return (
    <div className="Homepage">
      <div className="Homepage__Container">
        <h1 className="Homepage__Title">FIND YOUR RESTAURANT</h1>
        <SearchBar />
        {list.length > 0 ? <RefineSearch /> : null}
        {list.length > 0 && filteredList.length === 0 ? (
          <h4 className="warning">Try refining your search</h4>
        ) : null}
        <RestaurantList list={restaurants} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: state.restaurantsReducer.list,
  filteredList: state.restaurantsReducer.filteredList,
});
export default connect(mapStateToProps)(Homepage);
