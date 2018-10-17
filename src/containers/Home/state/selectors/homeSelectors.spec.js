import * as selectors from "./homeSelectors";

const state = {
  home: null
};

describe("homeSelectors", () => {
  it("getHomeState", function() {
    expect(selectors.getHomeState(state)).toEqual(null);
  });
});
