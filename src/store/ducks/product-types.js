import Immutable from "seamless-immutable";

export const Types = {
  REQUEST: "productTypes/REQUEST",
  SUCCESS: "productTypes/SUCCESS",
  FAILURE: "productTypes/FAILURE"
};

const initialState = Immutable({
  data: [],
  processing: null
});

export default function productTypes(state = initialState, action) {
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
  ProductTypesRequest: product_id => ({
    type: Types.REQUEST,
    payload: { product_id }
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
