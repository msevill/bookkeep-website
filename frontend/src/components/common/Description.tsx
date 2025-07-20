import React from 'react';

interface DescriptionProps {
  description: string;
  className?: string;
}

const Description: React.FC<DescriptionProps> = ({
  description,
  className = '',
}) => <p className={`mt-2 text-gray-600 ${className}`}>{description}</p>;

export default Description;
