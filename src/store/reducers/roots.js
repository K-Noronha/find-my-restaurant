import { combineReducers } from "redux";

import restaurantsReducer from "./restaurants";

const allReducers = combineReducers({ restaurantsReducer });

export default allReducers;
