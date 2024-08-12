import React from 'react';

interface TextInputProps {
  label?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, value, onChange, placeholder = '', type = 'text' }) => {
  return (
    <div className="flex flex-col items-start mt-4">
      <label htmlFor={label} className="mb-2 text-lg font-medium">
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default TextInput;
