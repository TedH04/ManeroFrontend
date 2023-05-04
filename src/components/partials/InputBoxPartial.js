import React from "react";

const InputBoxPartial = ({ type, className, placeholder }) => {
  return (
    <div className="input-field-group">
      <label>{placeholder.toUpperCase()}</label>
      <input
        type={type}
        className={`InputBoxPartial ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputBoxPartial;
