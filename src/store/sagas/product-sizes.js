import { put, call } from "redux-saga/effects";

import api from "~/services/api";
import { Pages } from "~/routes";
import { navigate } from "~/services/navigation";

import { Creators as ProductSizes } from "~/store/ducks/product-sizes";

export function* getProductSizes(action) {
  try {
    const { product_type_id } = action.payload;

    const { data } = yield call(
      api.get,
      `/product-types/${product_type_id}/product-prices`
    );

    data.forEach(item => {
      price_casted = Number(item.price)
        .toFixed(2)
        .toLocaleString();

      item.price_presentation = `R$ ${price_casted}`;
      item.avatar = item.productSize.images[0] || {};
    });

    yield put(ProductSizes.Success(data));

    navigate(Pages.ProductSizesScreen);
  } catch (error) {
    yield put(ProductSizes.Failure());
  }
}
