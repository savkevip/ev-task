import React from "react";
import { shallow } from "enzyme";
import FinanceList from "./FinanceList";

const list = [
  {
    amount: 10.5,
    date: "2017-02-10T09:22:20.000Z",
    description: "Pizza",
    from: "Mendy"
  },
  {
    amount: 10.5,
    date: "2016-01-10T09:20:00.000Z",
    description: "Diner",
    from: "Wendy"
  }
];

describe("FinanceList", () => {
  it("should match snapshot", function() {
    const component = shallow(<FinanceList list={list} />);
    expect(component).toMatchSnapshot();
  });
});
