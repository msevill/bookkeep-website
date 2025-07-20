import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div
    className={`rounded-lg shadow-md transition-all duration-300 ${className}`}
  >
    {children}
  </div>
);

export default Card;
