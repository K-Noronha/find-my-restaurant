import React, { useState } from "react";

const SearchBar = ({}) => {
  const [validate, handleValidate] = useState(false);

  const handleSubmit = (e) => {
    const inputCity = e.target.inputCity;
    e.preventDefault();

    if (inputCity.value) {
      console.log("inputCity.value", inputCity.value);
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

export default SearchBar;
