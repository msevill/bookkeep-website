import React from 'react';
import type { ContactSectionData } from '../utils/fetchHomepageData';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const GetInTouch: React.FC<{ contactSection: ContactSectionData }> = ({
  contactSection,
}) => (
  <section id="contact" className="py-16 bg-blue-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-10 justify-center items-stretch relative z-10">
      <div className="bg-white rounded-2xl shadow-xl p-10 border border-blue-100 w-full md:w-1/2 flex flex-col min-h-[520px]">
        <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl mb-4 tracking-tight">
          {contactSection.title}
        </h2>
        <p className="mb-8 text-lg text-gray-700">
          {contactSection.description}
        </p>
        <ContactInfo info={contactSection.contactInformation} />
      </div>
      <div className="bg-white rounded-2xl shadow-xl p-10 border border-blue-100 w-full md:w-1/2 flex flex-col min-h-[520px]">
        <ContactForm form={contactSection.form} />
      </div>
    </div>
  </section>
);

export default GetInTouch;
