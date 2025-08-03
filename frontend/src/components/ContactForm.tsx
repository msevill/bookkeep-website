import React from 'react';
import type { ContactForm } from '../utils/fetchHomepageData';

const ContactForm: React.FC<{ form: ContactForm }> = ({ form }) => {
  return (
    <form className="space-y-5 flex flex-col h-full justify-between">
      <div>
        <h3 className="text-lg font-semibold text-blue-800 mb-4">
          {form.title}
        </h3>
        {form.fields.map((field) => (
          <div key={field.id} className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={field.placeholder}
                required={field.required}
              />
            ) : (
              <input
                type={field.type}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
      >
        {form.submitButtonText}
      </button>
    </form>
  );
};

export default ContactForm;
