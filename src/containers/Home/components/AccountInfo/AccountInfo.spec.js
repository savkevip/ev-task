import React from "react";
import { shallow } from "enzyme";
import AccountInfo from "./AccountInfo";

const account = {
  name: "Jack Torrance",
  iban: "123456789",
  balance: 500
};

describe("AccountInfo", () => {
  it("should match snapshot", function() {
    const component = shallow(
      <AccountInfo
        name={account.name}
        iban={account.iban}
        balance={account.balance}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
