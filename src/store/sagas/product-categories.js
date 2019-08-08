import { put, call } from "redux-saga/effects";

import api from "~/services/api";

import { Creators as ProductCategories } from "~/store/ducks/product-categories";

export function* getProductCategories() {
  try {
    const { data } = yield call(api.get, "/products");

    data.forEach(item => {
      item.avatar = item.images[0] || {};
    });

    yield put(ProductCategories.Success(data));
  } catch (error) {
    yield put(ProductCategories.Failure());
  }
}
