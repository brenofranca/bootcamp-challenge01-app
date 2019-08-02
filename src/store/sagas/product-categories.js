import axios from "axios";
import { put, call } from "redux-saga/effects";

import api from "~/services/api";

import { Creators as ProductCategories } from "~/store/ducks/product-categories";

export function* getProductCategories(action) {
  try {
    api.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU2NDcxNjcyOX0.MH-ZTzyaRYo6FPcm5GGPLBeMy8M0fY6Gg72YmGQErFo`;

    const { data } = yield call(api.get, "/products");

    yield put(ProductCategories.Success(data));
  } catch (error) {
    yield put(ProductCategories.Failure());
  }
}
