import React from "react";
import { shallow } from "enzyme";
import Error from "./Error";
import Header from "./Header";
import Loader from "./Loader";
import NotFound from "./NotFound";

describe("Error", () => {
  it("should match snapshot", function() {
    const component = shallow(<Error />);
    expect(component).toMatchSnapshot();
  });
});

describe("Header", () => {
  it("should match snapshot", function() {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});

describe("Loader", () => {
  it("should match snapshot", function() {
    const component = shallow(<Loader />);
    expect(component).toMatchSnapshot();
  });
});

describe("NotFound", () => {
  it("should match snapshot", function() {
    const component = shallow(<NotFound />);
    expect(component).toMatchSnapshot();
  });
});
