import React from "react";
import configureMockStore from "redux-mock-store";
import { shallow } from "enzyme";
import Form from "./index";

const initialState = {};
const mockStore = configureMockStore();
let store;
let component;
let data;

beforeEach(() => {
  store = mockStore(initialState);
  component = shallow(<Form store={store} />);
  data = {
    amount: 123
  }
});

describe("Form", () => {
  it("should match snapshot", function() {
    expect(component).toMatchSnapshot();
  });

  it("should call add method and get action type", function() {
    expect(component.props().onAddTransaction(data).type).toEqual("ADD_START");
  });

  it("should call validation method and get right result", function() {
    expect(component.dive().instance().validateForm()).toEqual(false);
  });
});
