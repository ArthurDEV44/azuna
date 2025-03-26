"use client";

import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  multiline?: boolean;
  rows?: number;
}

const Input: FC<InputProps> = ({ label, multiline = false, rows = 4, ...props }) => {
  const inputClasses = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300 outline-none";
  
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        {multiline ? (
          <textarea
            {...(props as InputHTMLAttributes<HTMLTextAreaElement>)}
            rows={rows}
            className={inputClasses}
          />
        ) : (
          <input
            {...(props as InputHTMLAttributes<HTMLInputElement>)}
            className={inputClasses}
          />
        )}
      </div>
    </div>
  );
};

export default Input; 