import { all } from "redux-saga/effects";
import { dataSaga } from "../containers/Home/state/saga/homeSaga";

export default function* rootSaga() {
  yield all([dataSaga()]);
}
