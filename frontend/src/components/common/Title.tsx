import React from 'react';

interface TitleProps {
  title: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ title, className = '' }) => (
  <h3 className={`mt-4 text-xl font-bold text-gray-900 ${className}`}>
    {title}
  </h3>
);

export default Title;
