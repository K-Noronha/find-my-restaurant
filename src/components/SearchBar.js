import React, { useState } from "react";
import { connect } from "react-redux";
import { searchRestaurants } from "../store/actions/restaurants";

/**
 * Form that perform a city search on the open table API.
 */
const SearchBar = ({ searchRestaurants }) => {
  const [validate, handleValidate] = useState(false);

  const handleSubmit = (e) => {
    const inputCity = e.target.inputCity;
    e.preventDefault();

    if (inputCity.value) {
      searchRestaurants(inputCity.value);
    } else {
      inputCity.focus();
      handleValidate(true);
      setTimeout(() => {
        handleValidate(false);
      }, 3000);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputCity">Find Restaurants by City</label>
        <input type="text" placeholder="Enter city" id="inputCity" />
        {validate ? <h3>No city has been entered</h3> : null}
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchRestaurants: (e) => dispatch(searchRestaurants(e)),
  };
};
export default connect(null, mapDispatchToProps)(SearchBar);
