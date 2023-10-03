import React, { useState } from "react";

function Input(props) {
  const { type, name, placeholder, cn, icon, visibility } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }
  function togglePasswordVisibility(){
    setIsPasswordVisible(!isPasswordVisible)  }
  return (
    <div
      className={`border rounded ${
        isFocused ? "border-red" : "border-gray"
      } p-2 flex items-center h-[48px]`}
    >
      <i className={`${icon} ${isFocused ? "text-red" : "text-gray"} mr-2`}></i>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        type={isPasswordVisible ? "text" : type}
        name={name}
        placeholder={placeholder}
        className={`${cn} outline-none placeholder:text-xs placeholder:text-gray text-sm font-medium`}
      />
      {visibility && (
        <i
          className="icon-visibility text-gray ml-auto cursor-pointer"
          onClick={togglePasswordVisibility}
        ></i>
      )}
    </div>
  );
}

export default Input;
