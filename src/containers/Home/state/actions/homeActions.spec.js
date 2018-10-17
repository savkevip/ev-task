import * as actions from "./homeActions";
import * as type from "../../constants/actionTypes";

describe("homeActions", () => {
  it("getDataStart", () => {
    const expectedAction = {
      type: type.GET_DATA_START
    };
    expect(actions.getDataStart()).toEqual(expectedAction);
  });

  it("getDataSuccess", () => {
    const data = {};
    const expectedAction = {
      type: type.GET_DATA_SUCCESS,
      data
    };
    expect(actions.getDataSuccess(data)).toEqual(expectedAction);
  });

  it("getDataFailed", () => {
    const expectedAction = {
      type: type.GET_DATA_FAILED
    };
    expect(actions.getDataFailed()).toEqual(expectedAction);
  });

  it("addStart", () => {
    const data = {};
    const expectedAction = {
      type: type.ADD_START,
      data
    };
    expect(actions.addStart(data)).toEqual(expectedAction);
  });

  it("addSuccess", () => {
    const expectedAction = {
      type: type.ADD_SUCCESS
    };
    expect(actions.addSuccess()).toEqual(expectedAction);
  });

  it("addFailed", () => {
    const error = {};
    const expectedAction = {
      type: type.ADD_FAILED,
      error
    };
    expect(actions.addFailed(error)).toEqual(expectedAction);
  });
});
