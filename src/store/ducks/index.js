import { combineReducers } from "redux";

import login from "./login";
import productCategories from "./product-categories";
import productTypes from "./product-types";
import productSizes from "./product-sizes";
import cart from "./cart";
import orders from "./orders";

const reducers = combineReducers({
  login,
  productCategories,
  productTypes,
  productSizes,
  cart,
  orders
});

export default reducers;
