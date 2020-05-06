import React from "react";
import { connect } from "react-redux";
import { filterRestuarants } from "../store/actions/restaurants";

const RefineSearch = ({ filterRestuarants }) => {
  return (
    <div>
      <label htmlFor="refineInput">Refine your search</label>
      <input
        type="text"
        placeholder="Refine your search"
        id="refineInput"
        onChange={(e) => filterRestuarants(e.target.value)}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterRestuarants: (e) => dispatch(filterRestuarants(e)),
  };
};

export default connect(null, mapDispatchToProps)(RefineSearch);
