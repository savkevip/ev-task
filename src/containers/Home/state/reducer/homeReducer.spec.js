import reducer from "./homeReducer";
import * as type from "../../constants/actionTypes";

const initState = {
  error: false,
  loading: false,
  data: null
};

describe("homeReducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

  it("should handle GET_DATA_START", function() {
    expect(reducer(initState, { type: type.GET_DATA_START })).toEqual({
      error: false,
      loading: true,
      data: null
    });
  });

  it("should handle GET_DATA_SUCCESS", function() {
    expect(
      reducer(initState, {
        type: type.GET_DATA_SUCCESS,
        data: {
          account: { from: "foo" },
          currency: "EUR",
          debitsAndCredits: [
            {
              amount: 10,
              date: "2018-05-10T09:21:20.000Z",
              description: "Test",
              from: "Tester"
            }
          ]
        }
      })
    ).toEqual({
      error: false,
      loading: false,
      data: {
        account: { from: "foo" },
        currency: "EUR",
        debitsAndCredits: [
          {
            amount: 10,
            date: "2018-05-10T09:21:20.000Z",
            description: "Test",
            from: "Tester"
          }
        ]
      }
    });
  });

  it("should handle GET_DATA_FAILED", function() {
    expect(reducer(initState, { type: type.GET_DATA_FAILED })).toEqual({
      error: true,
      loading: false,
      data: null
    });
  });
});
