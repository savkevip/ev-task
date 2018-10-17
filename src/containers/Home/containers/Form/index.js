import React, { Component } from "react";
import { connect } from "react-redux";
import { addStart } from "../../state/actions/homeActions";
import PropTypes from "prop-types";
import { FormContainer } from "./styles/style";
import FormInput from "./components/FormInput/FormInput";

class From extends Component {
  handleAdd = () => {
    this.validateForm()
      ? this.props.onAddTransaction(this.state)
      : alert("All fields are required... :)");
  };

  handleOnChange = e =>
    this.setState({
      [e.target.id]: e.target.value
    });

  validateForm = () =>
    // I stole this from your code :D
    this.state
      ? ["amount", "description", "date", "from", "to"].every(prop =>
          Object.keys(this.state).includes(prop)
        )
      : false;

  render() {
    return (
      <FormContainer>
        <FormInput
          label={"Amount"}
          id={"amount"}
          type={"number"}
          onChange={this.handleOnChange}
        />
        <FormInput
          label={"From"}
          id={"from"}
          type={"text"}
          onChange={this.handleOnChange}
        />
        <FormInput
          label={"To"}
          id={"to"}
          type={"text"}
          onChange={this.handleOnChange}
        />
        <FormInput
          label={"Description"}
          id={"description"}
          rows={5}
          onChange={this.handleOnChange}
        />
        <FormInput
          label={"Date"}
          id={"date"}
          type={"date"}
          onChange={this.handleOnChange}
        />
        <span className="btn btn-primary" onClick={this.handleAdd}>
          Submit
        </span>
      </FormContainer>
    );
  }
}

From.propTypes = {
  onAddTransaction: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  onAddTransaction: data => dispatch(addStart(data))
});

export default connect(
  null,
  mapDispatchToProps
)(From);
