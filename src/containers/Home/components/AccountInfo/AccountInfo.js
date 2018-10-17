import React from "react";
import PropTypes from "prop-types";
import { AccountInfoWrapper } from "./styles/style";

const AccountInfo = ({ name, iban, balance }) => (
  <AccountInfoWrapper>
    <h1>{name}</h1>
    <h3>iban: {iban}</h3>
    <h3>balance: {balance}</h3>
  </AccountInfoWrapper>
);

AccountInfo.propTypes = {
  name: PropTypes.string,
  iban: PropTypes.string,
  balance: PropTypes.number
};

export default AccountInfo;
