import React from "react";

const Input = (props) => {
  const { name, label, handleChange, value, type, error } = props;

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        value={value}
        type={type}
        onChange={(e) => handleChange(e)}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
