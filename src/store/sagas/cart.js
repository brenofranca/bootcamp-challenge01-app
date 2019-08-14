import AsyncStorage from "@react-native-community/async-storage";
import { put, select, call } from "redux-saga/effects";
import { Pages } from "~/routes";
import api from "~/services/api";
import { navigate } from "~/services/navigation";
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

    const totalPresentation = yield formatPricePresentation(
      total + totalProductPrice
    );
    const totalProductPricePresentation = yield formatPricePresentation(
      totalProductPrice
    );

    if (!productToCart) {
      const productType = yield select(state => state.productTypes.selected);

      const productCategory = yield select(
        state => state.productCategories.selected
      );

      cart = {
        total: totalCart,
        totalPresentation,
        products: [
          ...products,
          {
            total: totalProductPrice,
            totalPresentation: totalProductPricePresentation,
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
        totalPresentation,
        products: productsUpdated
      };
    }

    yield put(CartTypes.Success(cart));

    yield AsyncStorage.setItem("@cart", JSON.stringify(cart));

    navigate(Pages.CartScreen);
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

export function* placeOrderCart(action) {
  try {
    const { data: cart } = yield select(state => state.cart);

    const products = cart.products.map(item => {
      return {
        total: item.total,
        quantity: item.quantity,
        product_id: item.productCategory.id,
        product_type_id: item.productType.id,
        product_price_id: item.productPrice.id,
        product_size_id: item.productPrice.productSize.id
      };
    });

    const order = { ...action.payload.data, total: cart.total, products };

    const { data } = yield call(api.post, "/orders", order);

    yield put(CartTypes.ResetCart());

    navigate(Pages.ProductCategoriesScreen);
  } catch (error) {
    console.tron.log("error");
  }
}

export function* formatPricePresentation(price) {
  const price_currency = (price / 100)
    .toFixed(2)
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+\,)/g, "$1.");

  return `R$ ${price_currency}`;
}
