import React from "react";
import PropTypes from "prop-types";
import { FinanceListWrapper, ItemList, Item } from "./style";

const FinanceList = ({ list }) => (
  <FinanceListWrapper>
    <ItemList className="list-group">
      <Item className="list-group-item active">
        <span className="col-xs-4">From</span>
        <span className="col-xs-4">Description</span>
        <span className="col-xs-4">Amount</span>
        <span className="col-xs-4">Date</span>
      </Item>
      {list.map((item, i) => (
        <Item key={`${item.description}${i}`} className="list-group-item">
          <span className="col-xs-4">{item.from || 'Milos'}</span>
          <span className="col-xs-4">{item.description}</span>
          <span className="col-xs-4">{item.amount}</span>
          <span className="col-xs-4">{new Date(item.date).getFullYear()}</span>
        </Item>
      ))}
    </ItemList>
  </FinanceListWrapper>
);

FinanceList.propTypes = {
  list: PropTypes.array
};

export default FinanceList;
