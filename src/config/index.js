import axios from "axios";

const url = "https://opentable.herokuapp.com/api/restaurants";

export async function fetchRestaurants(city) {
  try {
    const response = await axios.get(url, {
      params: {
        city,
        per_page: 50,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
