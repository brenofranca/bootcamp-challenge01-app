import { all, takeLatest } from "redux-saga/effects";

import { postLogin, postLoginAttempt } from "./login";
import { Types as LoginTypes } from "~/store/ducks/login";

import { getProductCategories } from "./product-categories";
import { Types as ProductCategories } from "~/store/ducks/product-categories";

import { getProductTypes } from "./product-types";
import { Types as ProductTypes } from "~/store/ducks/product-types";

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.REQUEST, postLogin),
    takeLatest(LoginTypes.SET_LOGIN, postLoginAttempt),
    takeLatest(ProductCategories.REQUEST, getProductCategories),
    takeLatest(ProductTypes.REQUEST, getProductTypes)
  ]);
}
