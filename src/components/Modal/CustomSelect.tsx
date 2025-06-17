import { inputClass } from "@/constants/formConst";
import { IconArrow } from "../icons/IconArrow";
import { SelectProps } from "../../../types/modalProps";

export const CustomSelect = ({
  id,
  value,
  options,
  placeholder,
  error,
  onChange,
  className = "",
}: SelectProps) => {
  return (
    <div className="relative group tab:w-1/2">
      <label htmlFor="messenger" className=""></label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className={`${inputClass} uppercase appearance-none ${className}`}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none rotate-[135deg] absolute right-5 top-1/2 -translate-y-1/2 text-formLight">
        <IconArrow />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-3 border border-t-0 border-text group-focus:border-title transition-all duration-500 ease-in" />
      {error && (
        <p className=" absolute bottom-[-20px] left-0 text-error mt-1">
          {error}
        </p>
      )}
    </div>
  );
};
