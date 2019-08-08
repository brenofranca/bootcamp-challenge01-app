import { combineReducers } from "redux";

import login from "./login";
import productCategories from "./product-categories";
import productTypes from "./product-types";
import productSizes from "./product-sizes";
import cart from "./cart";

const reducers = combineReducers({
  login,
  productCategories,
  productTypes,
  productSizes,
  cart
});

export default reducers;
