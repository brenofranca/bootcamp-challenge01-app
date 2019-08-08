import Immutable from "seamless-immutable";

export const Types = {
  ADD_TO_CART: "cart/ADD_TO_CART",
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
