import React from 'react';
import Card from './Card';

interface ServiceCardProps {
  icon: string;
  name: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  name,
  description,
}) => (
  <Card className="bg-white p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
    <span className="mb-4 flex items-center justify-center rounded-full bg-blue-50 w-16 h-16">
      <span className="w-8 h-8" dangerouslySetInnerHTML={{ __html: icon }} />
    </span>
    <h3 className="text-xl font-semibold text-blue-800 mb-2">{name}</h3>
    <p className="text-gray-600">{description}</p>
  </Card>
);

export default ServiceCard;
