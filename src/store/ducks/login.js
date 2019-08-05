import Immutable from "seamless-immutable";

export const Types = {
  SET_LOGIN: "login/SET_LOGIN",
  REQUEST: "login/REQUEST",
  SUCCESS: "login/SUCCESS",
  FAILURE: "login/FAILURE"
};

const initialState = Immutable({
  user: {},
  logged: false,
  processing: null,
  credentials: {}
});

export default function login(state = initialState, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, processing: true };
    case Types.SUCCESS:
      return {
        ...state,
        ...action.payload.data,
        logged: true,
        processing: false
      };
    case Types.FAILURE:
      return {
        ...state,
        user: {},
        credentials: {},
        processing: null,
        logged: false
      };
    default:
      return state;
  }
}

export const Creators = {
  loginAttempt: data => ({
    type: Types.SET_LOGIN,
    payload: { data }
  }),

  loginRequest: credentials => ({
    type: Types.REQUEST,
    payload: { credentials }
  }),

  loginSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data }
  }),

  loginFailure: () => ({
    type: Types.FAILURE,
    payload: {}
  })
};
