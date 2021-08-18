import React from "react";

const Input = ({
  id,
  placeholder = "",
  type = "text",
  label,
  handleChange,
}) => {
  return (
    <div className="input-container">
      <label className="label" htmlFor={id}>
        {!label ? id : label}
      </label>
      <input
        required
        className="input"
        onChange={handleChange}
        id={id}
        type={type}
        placeholder={placeholder ? placeholder : `Type your ${id}`}
      />
    </div>
  );
};

export default Input;
