import React, { useState } from "react";
import { connect } from "react-redux";
import {
  searchRestaurants,
  clearRestuarants,
} from "../store/actions/restaurants";

/**
 * Form that perform a city search on the open table API.
 */
const SearchBar = ({ searchRestaurants, clearRestuarants }) => {
  const [validate, handleValidate] = useState(false);

  const handleSubmit = (e) => {
    const inputCity = e.target.inputCity;
    e.preventDefault();

    if (inputCity.value) {
      searchRestaurants(inputCity.value);
    } else {
      inputCity.focus();
      clearRestuarants();
      handleValidate(true);
      setTimeout(() => {
        handleValidate(false);
      }, 3000);
    }
  };

  return (
    <div className="SearchBar">
      <form className="SearchBar__Form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputCity">Find Restaurants by City:</label>
          <input type="text" placeholder="Enter city" id="inputCity" />
          <input
            className="SearchBar__Button"
            type="submit"
            value="Search"
            data-testid="submit-button"
          />
        </div>

        {validate ? (
          <h4 className="warning">No city has been entered</h4>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchRestaurants: (e) => dispatch(searchRestaurants(e)),
    clearRestuarants: () => dispatch(clearRestuarants()),
  };
};
export default connect(null, mapDispatchToProps)(SearchBar);
