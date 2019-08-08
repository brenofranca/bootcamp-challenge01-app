import Immutable from "seamless-immutable";

export const Types = {
  REQUEST: "productTypes/REQUEST",
  SELECTED: "productTypes/SELECTED",
  SUCCESS: "productTypes/SUCCESS",
  FAILURE: "productTypes/FAILURE"
};

const initialState = Immutable({
  data: [],
  selected: null,
  processing: null
});

export default function productTypes(state = initialState, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, selected: null, processing: true };
    case Types.SELECTED:
      return { ...state, selected: action.payload.product };
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
  ProductTypesRequest: product_id => ({
    type: Types.REQUEST,
    payload: { product_id }
  }),

  ProductTypesSelected: product => ({
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
