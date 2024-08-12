import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  title: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', className = '', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};


export default Button;
