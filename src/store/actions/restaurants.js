import { fetchRestaurants } from "../../config/index";

export const filterRestuarants = (payload) => {
  return {
    type: "FILTER",
    payload,
  };
};
export const clearRestuarants = (payload) => {
  return {
    type: "CLEAR",
    payload,
  };
};

const updateRestaurants = (payload) => {
  return {
    type: "UPDATE",
    payload,
  };
};

export const searchRestaurants = (city) => {
  return (dispatch) => {
    fetchRestaurants(city)
      .then((res) => {
        dispatch(updateRestaurants(res.data));
      })
      .catch((error) => console.log("error", error));
  };
};
