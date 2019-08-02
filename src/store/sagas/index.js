import { all, takeLatest } from "redux-saga/effects";

import { postLogin } from "./login";
import { Types as LoginTypes } from "~/store/ducks/login";

import { getProductCategories } from "./product-categories";
import { Types as ProductCategories } from "~/store/ducks/product-categories";

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.REQUEST, postLogin),
    takeLatest(ProductCategories.REQUEST, getProductCategories)
  ]);
}
