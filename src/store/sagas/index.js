import { all, takeLatest } from "redux-saga/effects";
import { Types as CartTypes } from "~/store/ducks/cart";
import { Types as LoginTypes } from "~/store/ducks/login";
import { Types as ProductCategories } from "~/store/ducks/product-categories";
import { Types as ProductSizes } from "~/store/ducks/product-sizes";
import { Types as ProductTypes } from "~/store/ducks/product-types";
import { Types as OrdersTypes } from "~/store/ducks/orders";
import { addProductToCart, placeOrderCart, removeProductOfCart } from "./cart";
import { postLogin, postLoginAttempt } from "./login";
import { getProductCategories } from "./product-categories";
import { getProductSizes } from "./product-sizes";
import { getProductTypes } from "./product-types";
import { getOrders } from "./orders";

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.REQUEST, postLogin),
    takeLatest(LoginTypes.SET_LOGIN, postLoginAttempt),
    takeLatest(ProductCategories.REQUEST, getProductCategories),
    takeLatest(ProductTypes.REQUEST, getProductTypes),
    takeLatest(ProductSizes.REQUEST, getProductSizes),
    takeLatest(CartTypes.ADD_TO_CART, addProductToCart),
    takeLatest(CartTypes.REMOVE_OF_CART, removeProductOfCart),
    takeLatest(CartTypes.PLACE_ORDER, placeOrderCart),
    takeLatest(OrdersTypes.REQUEST, getOrders)
  ]);
}
