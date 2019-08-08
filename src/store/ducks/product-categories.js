import Immutable from "seamless-immutable";

export const Types = {
  REQUEST: "productCategories/REQUEST",
  SELECTED: "productCategories/SELECTED",
  SUCCESS: "productCategories/SUCCESS",
  FAILURE: "productCategories/FAILURE"
};

const initialState = Immutable({
  data: [],
  selected: null,
  processing: null
});

export default function productCategories(state = initialState, action) {
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
  ProductCategoriesRequest: () => ({
    type: Types.REQUEST,
    payload: {}
  }),

  ProductCategoriesSelected: product => ({
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
