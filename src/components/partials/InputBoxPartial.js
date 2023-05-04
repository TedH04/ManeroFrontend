import React from 'react';

const InputBoxPartial = ({ type, className, placeholder }) => {
  return (
    <input
      type={type}
      className={`InputBoxPartial ${className}`}
      placeholder={placeholder}
    />
  );
};

export default InputBoxPartial;
