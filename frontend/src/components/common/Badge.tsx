import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => (
  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded ${className}`}>
    {children}
  </span>
);

export default Badge;
