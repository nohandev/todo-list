import React from "react";
import type { CheckboxProps } from '@/types/checkboxType'

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, onClick, data}) => {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="peer hidden"
        onClick={onClick}
        data-id={data}
      />
      <span
        className={`
          size-6 rounded-full border-2 border-blue flex items-center justify-center transition-all duration-200 ease-in-out
          ${checked ? "bg-purple-dark border-purple-dark hover:border-purple hover:bg-purple" : "hover:border-blue-dark hover:bg-blue-dark/25"}
        `}
      >
        <svg
          className={`size-4 text-gray-100 transition-opacity duration-200 ${
            checked ? "opacity-100" : "opacity-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </span>
    </label>
  );
};
