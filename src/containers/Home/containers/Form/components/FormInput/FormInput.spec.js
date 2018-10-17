import React from "react";
import { shallow } from "enzyme";
import FormInput from "./FormInput";

const formData = {
  label: "Amount",
  type: "number",
  id: "amount",
  rows: 5,
  handleOnChange: jest.fn()
};

describe("FormInput", () => {
  it("should render without description", function() {
    const component = shallow(
      <FormInput
        label={formData.label}
        type={formData.type}
        id={formData.id}
        onChange={formData.handleOnChange}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("should render description", function() {
    const component = shallow(
      <FormInput
        label={formData.label}
        id={formData.id}
        rows={formData.rows}
        onChange={formData.handleOnChange}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
