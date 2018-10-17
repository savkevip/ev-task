import React from "react";
import PropTypes from "prop-types";

const FormInput = ({ label, id, type, rows, onChange }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}:</label>
    {!rows ? (
      <input
        id={id}
        type={type}
        className="form-control"
        onChange={onChange}
        placeholder={`Enter ${label}...`}
      />
    ) : (
      <textarea
        id={id}
        className="form-control"
        rows={rows}
        onChange={onChange}
        placeholder={`Enter ${label}...`}
      />
    )}
  </div>
);

FormInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  rows: PropTypes.number,
  onChange: PropTypes.func
};

export default FormInput;
