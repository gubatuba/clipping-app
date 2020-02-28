import React from "react";
import PropTypes from "prop-types";

const CheckInput = ({ id, name, label, value, onChange, error }) => {
  let wrapperClass = "form-group form-check";
  if (error && error.length > 0) {
    wrapperClass += " " + "has-error";
  }

  return (
    <div className={wrapperClass}>
      <input
        type="checkbox"
        className="form-check-input"
        id={id}
        name={name}
        checked={value}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={id} >
        {label}
      </label>
    </div>
  );
};

CheckInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool,
  error: PropTypes.string
};

export default CheckInput;
