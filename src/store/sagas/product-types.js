import { put, call } from "redux-saga/effects";

import api from "~/services/api";
import { navigate } from "~/services/navigation";

import { Creators as ProductTypes } from "~/store/ducks/product-types";

export function* getProductTypes(action) {
  try {
    const { product_id } = action.payload;

    const { data } = yield call(
      api.get,
      `/products/${product_id}/product-types`
    );

    data.forEach(item => {
      item.avatar = item.images[0] || {};
    });

    yield put(ProductTypes.Success(data));

    navigate(Pages.HomeStack);
  } catch (error) {
    yield put(ProductTypes.Failure());
  }
}
