import Immutable from "seamless-immutable";

export const Types = {
  ADD_TO_CART: "cart/ADD_TO_CART",
  REMOVE_OF_CART: "cart/REMOVE_OF_CART",
  SUCCESS: "cart/SUCCESS",
  FAILURE: "cart/FAILURE"
};

const initialState = Immutable({
  data: {
    total: 0,
    products: []
  },
  processing: null
});

export default function cart(state = initialState, action) {
  switch (action.type) {
    case Types.REMOVE_OF_CART:
    case Types.ADD_TO_CART:
      return { ...state, processing: true };
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
