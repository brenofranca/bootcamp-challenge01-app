import { combineReducers } from "redux";

import login from "./login";
import productCategories from "./product-categories";
import productTypes from "./product-types";

const reducers = combineReducers({
  login,
  productCategories,
  productTypes
});

export default reducers;
