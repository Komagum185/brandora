import React from 'react';

interface TextInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  name,
  id,
  required = false,
  disabled = false,
  className = '',
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
      />
    </div>
  );
};

export default TextInput;
