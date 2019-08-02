import { combineReducers } from "redux";

import login from "./login";
import productCategories from "./product-categories";

const reducers = combineReducers({
  login,
  productCategories
});

export default reducers;
