import { cloneableGenerator } from "redux-saga/utils";
import * as sagas from "./homeSaga";

describe("homeSaga", () => {
  it("should return data getDataSaga", function() {
    const gen = cloneableGenerator(sagas.getDataSaga)();
    expect(gen.return().done).toEqual(true);
  });

  it("should return data putDataSaga", function() {
    const gen = cloneableGenerator(sagas.putDataSaga)({
      amount: 200,
      from: "foo",
      to: "bar",
      description: "Test",
      date: "01-01-1991"
    });
    expect(gen.return().done).toEqual(true);
  });
});
