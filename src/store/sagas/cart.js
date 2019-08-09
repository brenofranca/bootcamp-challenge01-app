import AsyncStorage from "@react-native-community/async-storage";
import { put, select } from "redux-saga/effects";
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

    yield put(CartTypes.Success(cart));

    yield AsyncStorage.setItem("@cart", JSON.stringify(cart));
  } catch (error) {
    yield put(CartTypes.Failure());
  }
}

export function* removeProductOfCart(action) {
  try {
    const { product_price_id } = action.payload;

    const { data } = yield select(state => state.cart);

    const products = data.products.filter(
      ({ productPrice }) => productPrice.id !== product_price_id
    );

    const total = products.reduce(
      (accumulator, current) => accumulator + current.total,
      0
    );

    const cart = { total, products };

    yield put(CartTypes.Success(cart));

    yield AsyncStorage.setItem("@cart", JSON.stringify(cart));
  } catch (error) {
    yield put(CartTypes.Failure());
  }
}
