import React from "react";
import { InputProps } from "../../../types/modalProps";
import { inputClass } from "@/constants/formConst";

export const CustomInput = ({
  id,
  value,
  placeholder,
  error,
  onChange,
  className = "",
}: InputProps) => {
  return (
    <div className=" relative group tab:w-1/2">
      <label htmlFor="name"></label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${inputClass} ${className} `}
      />
      <div className="absolute bottom-0 left-0 w-full h-3 border border-t-0 border-text group-focus:border-title transition-all duration-500 ease-in" />
      {error && (
        <p className="absolute bottom-[-20px] left-0 text-error mt-1">
          {error}
        </p>
      )}
    </div>
  );
};
