import React, { useState } from "react";
import "./style.scss";

const FormInput = (props) => {
  const { label, onChange, errorMessage, ...val } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="FormInput">
      <label>{label}</label>
      <input
        {...val}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => val.name === "confirmPass" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
