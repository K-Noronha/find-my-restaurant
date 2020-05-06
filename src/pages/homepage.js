import React from "react";
import { connect } from "react-redux";

import SearchBar from "../components/SearchBar";
import RestaurantList from "../components/RestaurantList";
import RefineSearch from "../components/RefineSearch";

const Homepage = ({ list, filteredList }) => {
  const restaurants = (filteredList.length > 0 && filteredList) || list;
  return (
    <div>
      <h1>HOMEPAGE</h1>
      <SearchBar />
      {list.length > 0 ? <RefineSearch /> : null}
      {list.length > 0 && filteredList.length == 0 ? (
        <h3>Try Refining your search</h3>
      ) : null}
      <RestaurantList list={restaurants} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: state.restaurantsReducer.list,
  filteredList: state.restaurantsReducer.filteredList,
});
export default connect(mapStateToProps)(Homepage);
