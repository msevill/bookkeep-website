import React from 'react';
import { fetchServiceByUuid } from '../../../utils/fetchServiceByUuid';
import ContactForm from '../../../components/ContactForm';

interface ServicePageProps {
  params: { uuid: string };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { uuid } = await params;
  const service = await fetchServiceByUuid(uuid);
  // Defensive: ensure service is an object and not undefined/null
  if (!service || typeof service !== 'object') {
    return (
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center text-2xl text-gray-500">
          Service not found.
        </div>
      </main>
    );
  }

  // Defensive: ensure service.name and service.description exist
  const serviceName = service.name || '';
  const serviceDescription = service.description || '';
  const serviceForm = service.formFields?.[0] || null;
  const serviceId = service.documentId || '';
  return (
    <>
      {/* Temporary Jumbotron Section */}
      <section className="w-full bg-blue-900 py-16 mb-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            {serviceName}
          </h1>
          <p className="text-lg text-blue-100">
            Explore our service details and get in touch below.
          </p>
        </div>
      </section>
      {/* Service Details Section */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 flex items-center justify-center">
            {/* Placeholder for service image */}
            <div className="w-64 h-64 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-6xl text-blue-800 font-bold">
                {serviceName?.[0] || 'S'}
              </span>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-6">
              {serviceName}
            </h2>
            <p className="text-lg text-gray-700 mb-8">{serviceDescription}</p>
          </div>
        </div>
      </section>
      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-blue-50 rounded-lg p-8 shadow">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            {serviceForm?.title}
          </h3>
          {serviceForm &&
            serviceForm.Fields &&
            Array.isArray(serviceForm.Fields) && (
              <ContactForm
                form={{
                  title: '',
                  submitButtonText: serviceForm.SubmitButtonText,
                  actionEndpoint: serviceForm.ActionEndpoint,
                  fields: serviceForm.Fields.map((f) => ({
                    id: f.id,
                    label: f.Label,
                    type: f.Type,
                    placeholder: f.Placeholder,
                    required: f.Required,
                    key: f.Key || '',
                  })),
                }}
                serviceId={
                  typeof serviceId === 'string' ? serviceId : Number(serviceId)
                }
              />
            )}
        </div>
      </section>
    </>
  );
}
