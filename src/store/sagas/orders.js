import { put, call } from "redux-saga/effects";
import { format, distanceInWords } from "date-fns";
import ptBrLocale from "date-fns/locale/pt";
import api from "~/services/api";

import { Creators as Orders } from "~/store/ducks/orders";

export function* getOrders() {
  try {
    const { data } = yield call(api.get, "/orders");

    data.map(item => {
      item.created_at = distanceInWords(Date.now(), format(item.created_at), {
        addSuffix: true,
        locale: ptBrLocale
      });
    });

    yield put(Orders.Success(data));
  } catch (error) {
    yield put(Orders.Failure());
  }
}
