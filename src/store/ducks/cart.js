import Immutable from "seamless-immutable";

export const Types = {
  ADD_TO_CART: "cart/ADD_TO_CART",
  REMOVE_OF_CART: "cart/REMOVE_OF_CART",
  RESET_CART: "cart/RESET_CART",
  SUCCESS: "cart/SUCCESS",
  FAILURE: "cart/FAILURE",
  PLACE_ORDER: "cart/PLACE_ORDER"
};

const initialState = Immutable({
  data: {
    total: 0,
    products: [],
    totalPresentation: "R$ 0"
  },
  processing: null
});

export default function cart(state = initialState, action) {
  switch (action.type) {
    case Types.REMOVE_OF_CART:
    case Types.ADD_TO_CART:
    case Types.PLACE_ORDER:
      return { ...state, processing: true };
    case Types.RESET_CART:
      return { ...state, ...initialState };
    case Types.SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        processing: null
      };
    case Types.FAILURE:
      return {
        ...state,
        processing: null
      };
    default:
      return state;
  }
}

export const Creators = {
  addProductToCart: data => ({
    type: Types.ADD_TO_CART,
    payload: { data }
  }),

  removeProductOfCart: product_price_id => ({
    type: Types.REMOVE_OF_CART,
    payload: { product_price_id }
  }),

  ResetCart: () => ({
    type: Types.RESET_CART,
    payload: {}
  }),

  placeOrderCart: data => ({
    type: Types.PLACE_ORDER,
    payload: { data }
  }),

  RefreshDataCart: data => ({
    type: Types.SUCCESS,
    payload: { data }
  }),

  Success: data => ({
    type: Types.SUCCESS,
    payload: { data }
  }),

  Failure: () => ({
    type: Types.FAILURE,
    payload: {}
  })
};
