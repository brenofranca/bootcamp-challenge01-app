import Immutable from "seamless-immutable";

export const Types = {
  REQUEST: "login/REQUEST",
  SUCCESS: "login/SUCCESS",
  FAILURE: "login/FAILURE"
};

const initialState = Immutable({
  data: [],
  processing: null
});

export default function productCategories(state = initialState, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, processing: true };
    case Types.SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        processing: false
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
  ProductCategoriesRequest: () => ({
    type: Types.REQUEST,
    payload: {}
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
