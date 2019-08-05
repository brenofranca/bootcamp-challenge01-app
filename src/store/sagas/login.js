import { put, call } from "redux-saga/effects";
import AsyncStorage from "@react-native-community/async-storage";

import api from "~/services/api";
import { Pages } from "~/routes";
import { navigate } from "~/services/navigation";

import { Creators as LoginCreators } from "~/store/ducks/login";

export function* postLogin(action) {
  try {
    const { credentials } = action.payload;

    const { data } = yield call(api.post, "/account/signin", credentials);

    yield AsyncStorage.setItem("@login", JSON.stringify({ ...data }));

    yield postLoginAttempt({
      payload: { data }
    });
  } catch (error) {
    yield put(LoginCreators.loginFailure());
  }
}

export function* postLoginAttempt(action) {
  try {
    const { data } = action.payload;

    api.defaults.headers.common.Authorization = `Bearer ${
      data.credentials.token
    }`;

    yield put(LoginCreators.loginSuccess(data));

    navigate(Pages.HomeStack);
  } catch (error) {
    yield put(LoginCreators.loginFailure());
  }
}
