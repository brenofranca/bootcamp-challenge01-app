import Immutable from "seamless-immutable";

export const Types = {
  REQUEST: "orders/REQUEST",
  SUCCESS: "orders/SUCCESS",
  FAILURE: "orders/FAILURE"
};

const initialState = Immutable({
  data: [],
  processing: null
});

export default function orders(state = initialState, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, selected: null, processing: true };
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
  OrdersRequest: () => ({
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
