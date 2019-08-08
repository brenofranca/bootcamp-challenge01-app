import Immutable from "seamless-immutable";

export const Types = {
  REQUEST: "productSizes/REQUEST",
  SELECTED: "productSizes/SELECTED",
  SUCCESS: "productSizes/SUCCESS",
  FAILURE: "productSizes/FAILURE"
};

const initialState = Immutable({
  data: [],
  selected: null,
  processing: null
});

export default function productSizes(state = initialState, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, selected: null, processing: true };
    case Types.SELECTED:
      return {
        ...state,
        selected: action.payload.product
      };
    case Types.SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        processing: null
      };
    case Types.FAILURE:
      return {
        ...state,
        selected: null,
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

  ProductSizesSelected: product => ({
    type: Types.SELECTED,
    payload: { product }
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
