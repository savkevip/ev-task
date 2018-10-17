import React from "react";
import configureMockStore from "redux-mock-store";
import { shallow, render } from "enzyme";
import Home from "./index";

const initialState = {};
const mockStore = configureMockStore();
let store;
let getData;

beforeEach(() => {
  store = mockStore(initialState);
  getData: jest.fn();
});

describe("Home", () => {
  it("should match snapshot default", function() {
    const component = shallow(<Home store={store} />);
    expect(component).toMatchSnapshot();
  });

  it("should match snapshot if loading true", function() {
    const component = shallow(<Home store={store} loading={true} />);
    expect(component).toMatchSnapshot();
  });

  it("should match snapshot if error true", function() {
    const component = shallow(<Home store={store} error={true} />);
    expect(component).toMatchSnapshot();
  });

  it("should call getData method and get action type", function() {
    const component = shallow(<Home store={store} loading={true} />);
    expect(component.props().getData().type).toEqual("GET_DATA_START");
  });
});
