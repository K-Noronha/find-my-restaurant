import axios from "axios";

const url = "http://opentable.herokuapp.com/api/restaurants";

export async function fetchRestaurants(city) {
  try {
    const response = await axios.get(url, {
      params: {
        city,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
