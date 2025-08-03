'use client';
import React from 'react';
import Accordion from './common/Accordion';
import { FAQSectionData } from '../utils/fetchHomepageData';

interface FAQProps {
  faqSection: FAQSectionData;
}

const FAQ: React.FC<FAQProps> = ({ faqSection }) => {
  return (
    <div id="faq" className="py-16 bg-white px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {faqSection.title}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          {faqSection.description}
        </p>
      </div>
      <div className="mt-12 space-y-4 max-w-3xl mx-auto">
        <Accordion items={faqSection.faqs} />
      </div>
    </div>
  );
};

export default FAQ;
