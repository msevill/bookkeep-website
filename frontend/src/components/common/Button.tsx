import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  ...props
}) => (
  <button
    className={`font-medium py-2 px-4 rounded-md transition-colors duration-300 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
