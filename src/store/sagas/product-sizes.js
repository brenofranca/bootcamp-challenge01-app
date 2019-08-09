import { call, put } from "redux-saga/effects";
import { Pages } from "~/routes";
import api from "~/services/api";
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
      item.avatar = item.productSize.images[0] || {};
    });

    yield put(ProductSizes.Success(data));

    navigate(Pages.ProductSizesScreen);
  } catch (error) {
    yield put(ProductSizes.Failure());
  }
}
