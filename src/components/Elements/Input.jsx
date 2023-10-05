import React, { useState } from "react";

function Input(props) {
  const {
    type,
    name,
    placeholder,
    cn,
    icon,
    visibility,
    value,
    onChange,
    passwordValue,
    isDisabled
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleFocus() {
    setIsFocused(true);
  }

  function togglePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  function handleBlur() {
    setIsFocused(false);
    validateInput(name, value);
  }

  function validateInput(name, value) {
    let newErrorMessage = "";

    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      newErrorMessage = emailPattern.test(value.trim())
        ? ""
        : "Email tidak valid";
    } else if (name === "password") {
      newErrorMessage =
        value.trim().length >= 8 ? "" : "Password harus minimal 8 karakter";
    } else if (name === "confirm_password") {
      newErrorMessage = value === passwordValue ? "" : "Password tidak cocok";
    } else if (name === "top_up_amount") {
      newErrorMessage =
        value < 10000
          ? "Nominal minimal Rp10.000"
          : value > 1000000
          ? "Nominal maksimal Rp1.000.000"
          : "";
    }

    setErrorMessage(newErrorMessage);
  }

  return (
    <div className="mb-3 flex flex-col">
      <div
        className={`border rounded ${
          isFocused ? "border-red" : "border-dark-gray"
        } p-2 flex items-center h-[48px]`}
      >
        <i
          className={`${icon} ${isFocused ? "text-red" : "text-gray"} mr-2`}
        ></i>
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          type={isPasswordVisible ? "text" : type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={isDisabled}
          min={type === "number" ? 10000 : null}
          max={type === "number" ? 1000000 : null}
          className={`${cn} outline-none placeholder:text-xs placeholder:text-gray text-sm font-medium w-full`}
        />
        {visibility && (
          <i
            className="icon-visibility text-gray ml-auto cursor-pointer"
            onClick={togglePasswordVisibility}
          ></i>
        )}
      </div>
      {!!errorMessage && (
        <span className="text-red text-right text-xs">{errorMessage}</span>
      )}
    </div>
  );
}

export default Input;
