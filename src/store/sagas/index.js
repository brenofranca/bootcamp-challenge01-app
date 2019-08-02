import { all, takeLatest } from "redux-saga/effects";

import { postLogin } from "./login";
import { Types as LoginTypes } from "~/store/ducks/login";

export default function* rootSaga() {
  return yield all([takeLatest(LoginTypes.REQUEST, postLogin)]);
}
