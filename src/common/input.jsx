import React from "react";

const Input = (props) => {
  const { name, label, handleChange, value, type } = props;

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
    </div>
  );
};

export default Input;
