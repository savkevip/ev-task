import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  it("should match snapshot", function() {
    const component = shallow(
      <App />
    );
    expect(component).toMatchSnapshot();
  });
});
