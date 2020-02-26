import React from "react";
import PropTypes from "prop-types";

const CheckInput = ({ name, label, value, error }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " " + "has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <input
        type="checkbox"
        name={name}
        className="form-control"
        value={value}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

CheckInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
};

export default CheckInput;
