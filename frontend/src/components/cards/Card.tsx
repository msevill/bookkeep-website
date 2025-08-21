import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => (
  <div
    className={`rounded-lg shadow-md transition-all duration-300 ${className}`}
    onClick={onClick}
  >
    {children}
  </div>
);

export default Card;
