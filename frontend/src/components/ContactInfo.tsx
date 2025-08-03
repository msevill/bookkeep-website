import React from 'react';
import type { ContactInformation } from '../utils/fetchHomepageData';

const infoItems = [
  {
    label: 'Address',
    value: (info: ContactInformation) => info.address,
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        />
        <circle cx="12" cy="9" r="2.5" fill="white" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: (info: ContactInformation) => (
      <a href={`mailto:${info.email}`} className="underline text-white">
        {info.email}
      </a>
    ),
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          fill="none"
          strokeWidth="2"
        />
        <polyline points="3 7 12 13 21 7" fill="none" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: (info: ContactInformation) => (
      <a href={`tel:${info.phone}`} className="underline text-white">
        {info.phone}
      </a>
    ),
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M22 16.92V19a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.58 6.58l1.27-1.27a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0122 16.92z"
        />
      </svg>
    ),
  },
  {
    label: 'Business Hours',
    value: (info: ContactInformation) => (
      <span className="whitespace-pre-line">{info.businessHours}</span>
    ),
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <polyline points="12 6 12 12 16 14" strokeWidth="2" />
      </svg>
    ),
  },
];

const ContactInfo: React.FC<{ info: ContactInformation }> = ({ info }) => (
  <div className="bg-blue-900 rounded-xl p-10 text-white flex flex-col justify-between h-full min-h-[400px]">
    <div className="space-y-8">
      {infoItems.map((item) => (
        <div key={item.label} className="flex items-start gap-4">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-800 border border-blue-700">
            {item.icon}
          </span>
          <div>
            <div className="font-semibold mb-1">{item.label}</div>
            <div className="text-white text-base">
              {typeof item.value === 'function' ? item.value(info) : item.value}
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="flex gap-4 mt-8">
      {info.socmedFB && (
        <a
          href={info.socmedFB}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-900 hover:bg-blue-700 hover:text-white transition"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
          </svg>
        </a>
      )}
      {info.socmedX && (
        <a
          href={info.socmedX}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-900 hover:bg-blue-700 hover:text-white transition"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.924 2.206-4.924 4.924 0 .386.045.762.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.229-.616v.062c0 2.385 1.697 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.318-3.809 2.105-6.102 2.105-.396 0-.788-.023-1.175-.067 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.016-.634.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </a>
      )}
      {info.socmedLinkedIn && (
        <a
          href={info.socmedLinkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-900 hover:bg-blue-700 hover:text-white transition"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.001 3.601 4.604v5.592z" />
          </svg>
        </a>
      )}
    </div>
  </div>
);

export default ContactInfo;
