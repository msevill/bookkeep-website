import React from 'react';
import { ServicesSectionData } from '../utils/fetchHomepageData';
import ServiceCard from './cards/ServiceCard';

interface ServicesProps {
  servicesSection: ServicesSectionData;
}

const Services: React.FC<ServicesProps> = ({ servicesSection }) => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {servicesSection.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {servicesSection.description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {servicesSection.services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.sgvIcon}
              name={service.name}
              description={service.description}
              uuid={service.uuid}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
