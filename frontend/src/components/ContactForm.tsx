'use client';

import React, { useState } from 'react';
import type { ContactForm } from '../utils/fetchHomepageData';

interface ContactFormProps {
  form: ContactForm;
  serviceId?: number | string;
}

const ContactForm: React.FC<ContactFormProps> = ({ form, serviceId }) => {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(null);

    const formData: Record<string, string> = {};
    form.fields.forEach((field) => {
      const value =
        (
          e.currentTarget.elements[field.label] as
            | HTMLInputElement
            | HTMLTextAreaElement
        )?.value || '';
      formData[field.label] = value;
    });

    // Add serviceId to payload if present
    const payload: Record<string, any> = {};
    form.fields.forEach((field) => {
      const value =
        (
          e.currentTarget.elements[field.label] as
            | HTMLInputElement
            | HTMLTextAreaElement
        )?.value || '';
      if (field.key) {
        payload[field.key] = value;
      }
    });
    if (serviceId) {
      payload.service = serviceId;
    }

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Submission failed');
      setSuccess('Inquiry submitted successfully!');
      if (e.currentTarget) {
        (e.currentTarget as HTMLFormElement).reset();
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      setError(err.message || 'Failed to submit inquiry.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      className="space-y-5 flex flex-col h-full justify-between"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      {/* Hidden service field for service page */}
      {serviceId && <input type="hidden" name="service" value={serviceId} />}
      <div>
        <h3 className="text-lg font-semibold text-blue-800 mb-4">
          {form.title}
        </h3>
        {form.fields.map((field) => (
          <div key={field.id} className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor={field.label.replace(/\s+/g, '')}
            >
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                id={field.label.replace(/\s+/g, '')}
                name={field.label}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={field.placeholder}
                required={field.required}
              />
            ) : (
              <input
                id={field.label.replace(/\s+/g, '')}
                name={field.label}
                type={field.type}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
          </div>
        ))}
        {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
        {success && (
          <div className="text-green-600 text-sm mb-2">{success}</div>
        )}
      </div>
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
        disabled={submitting}
      >
        {submitting ? 'Submitting...' : form.submitButtonText}
      </button>
    </form>
  );
};

export default ContactForm;
