import Immutable from "seamless-immutable";

export const Types = {
  REQUEST: "productSizes/REQUEST",
  SUCCESS: "productSizes/SUCCESS",
  FAILURE: "productSizes/FAILURE"
};

const initialState = Immutable({
  data: [],
  processing: null
});

export default function productSizes(state = initialState, action) {
  switch (action.type) {
    case Types.REQUEST:
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
  ProductSizesRequest: product_type_id => ({
    type: Types.REQUEST,
    payload: { product_type_id }
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
