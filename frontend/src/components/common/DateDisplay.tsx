import React from 'react';

interface DateDisplayProps {
  date: string;
  className?: string;
}

const DateDisplay: React.FC<DateDisplayProps> = ({ date, className = '' }) => (
  <span className={`text-sm text-gray-500 ${className}`}>{date}</span>
);

export default DateDisplay;
