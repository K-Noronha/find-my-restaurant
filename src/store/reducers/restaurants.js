const restaurants = {
  list: [],
  filteredList: [],
};

const restaurantsReducer = (state = restaurants, { type, payload }) => {
  switch (type) {
    case "UPDATE":
      return {
        ...state,
        list: payload.restaurants,
        filteredList: [],
      };
    case "FILTER":
      var filterBy = payload.toLowerCase();
      var filteredList = state.list.filter((element) => {
        let details =
          element.name.toLowerCase() +
          element.address.toLowerCase() +
          element.area.toLowerCase();
        return details.indexOf(filterBy) !== -1;
      });

      return {
        ...state,
        filteredList,
      };

    default:
      return state;
  }
};
export default restaurantsReducer;
