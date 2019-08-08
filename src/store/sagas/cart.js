import { put, select } from "redux-saga/effects";

import AsyncStorage from "@react-native-community/async-storage";

import { Creators as CartTypes } from "~/store/ducks/cart";

export function* addProductToCart(action) {
  try {
    let cart = {};

    const { quantity, productPrice } = action.payload.data;

    const { data } = yield select(state => state.cart);

    const { total, products } = data;

    const [productToCart] = products.filter(
      item => item.productPrice.id === productPrice.id
    );

    const totalProductPrice = productPrice.price * quantity;

    const totalCart = total + totalProductPrice;

    if (!productToCart) {
      const productType = yield select(state => state.productTypes.selected);

      const productCategory = yield select(
        state => state.productCategories.selected
      );

      cart = {
        total: totalCart,
        products: [
          ...products,
          {
            total: totalProductPrice,
            quantity,
            productType,
            productPrice,
            productCategory
          }
        ]
      };
    } else {
      const productUpdated = {
        ...productToCart,
        total: productToCart.total + totalProductPrice,
        quantity: productToCart.quantity + quantity
      };

      const productsUpdated = products.map(productCart =>
        productCart.productPrice.id === productPrice.id
          ? productUpdated
          : productCart
      );

      cart = {
        total: totalCart,
        products: productsUpdated
      };
    }

    yield AsyncStorage.setItem("@cart", JSON.stringify(cart));

    yield put(CartTypes.Success(cart));
  } catch (error) {
    yield put(CartTypes.Failure());
  }
}
