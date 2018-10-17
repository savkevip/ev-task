import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getDataStart } from "./state/actions/homeActions";
import { getHomeState } from "./state/selectors/homeSelectors";
import { HomeContainer, AddBtn } from "./style/style";
import Loader from "../../common/Loader";
import AccountInfo from "./components/AccountInfo/AccountInfo";
import FinanceList from "./components/FinanceList/FinanceList";
import Error from "../../common/Error";

class Home extends Component {

  componentDidMount() {
    this.props.getData();
  }

  renderContent = ({ account, debitsAndCredits }) => (
    <React.Fragment>
      <AccountInfo
        name={account.name}
        iban={account.iban}
        balance={account.balance}
      />
      <AddBtn className="btn btn-primary" to={'/add'}>Add Debit/Credit</AddBtn>
      <FinanceList
        list={debitsAndCredits}
      />
    </React.Fragment>
  );

  render() {
    const { accountDetails } = this.props;
    if (!accountDetails.data) return null;

    return (
      <HomeContainer>
        {!accountDetails.error ?
          (accountDetails.loading ? <Loader /> : this.renderContent(accountDetails.data))
          : <Error />
        }
      </HomeContainer>
    );
  }
}

Home.propTypes = {
  accountDetails: PropTypes.object
};

const mapStateToProps = state => ({
  accountDetails: getHomeState(state)
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getDataStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
