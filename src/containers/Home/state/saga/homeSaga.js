import { put, takeLatest, fork } from "redux-saga/effects";
import { GET_DATA_START, ADD_START } from "../../constants/actionTypes";
import {
  addSuccess,
  addFailed,
  getDataFailed,
  getDataSuccess
} from "../actions/homeActions";
import { getDataApi } from "../../../../api/api";
import history from "../../../../history";

export function* getDataSaga() {
  try {
    const response = yield fetch(`${getDataApi()}/balance`).then(response =>
      response.json()
    );
    yield put(getDataSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(getDataFailed());
  }
}

export function* putDataSaga({ data }) {
  try {
    yield fetch(`${getDataApi()}/balance/add`, {
      method: "PUT",
      body: JSON.stringify({
        amount: parseInt(data.amount, 10),
        from: data.from,
        to: data.to,
        description: data.description,
        date: data.date
      })
    });
    yield put(addSuccess());
    yield history.push("/");
  } catch (err) {
    console.log(err);
    yield put(addFailed());
  }
}

export function* watcherSaga() {
  yield [
    fork(takeLatest, GET_DATA_START, getDataSaga),
    fork(takeLatest, ADD_START, putDataSaga)
  ];
}

export function* dataSaga() {
  yield fork(watcherSaga);
}
