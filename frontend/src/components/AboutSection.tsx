import React from 'react';
import CheckListItem from './common/CheckListItem';

// SVGs from Ehe2.htm (copy exactly as in the template)
const BigAboutIcon = () => (
  <svg
    className="w-full h-auto max-w-[520px] md:max-w-[600px]"
    viewBox="0 0 500 400"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="250" cy="200" r="150" fill="#dbeafe" />
    <circle cx="250" cy="200" r="120" fill="#93c5fd" />
    <circle cx="250" cy="200" r="90" fill="#3b82f6" />
    <circle cx="250" cy="200" r="60" fill="#1a4b8c" />
    <text
      x="250"
      y="205"
      fontFamily="Arial"
      fontSize="32"
      fill="white"
      textAnchor="middle"
    >
      SBS
    </text>
    <g fill="none" stroke="#1a4b8c" strokeWidth="2">
      <path d="M250 50 L250 20" />
      <path d="M250 350 L250 380" />
      <path d="M100 200 L70 200" />
      <path d="M400 200 L430 200" />
      <path d="M145 95 L125 75" />
      <path d="M355 305 L375 325" />
      <path d="M145 305 L125 325" />
      <path d="M355 95 L375 75" />
    </g>
  </svg>
);

const aboutPoints = [
  'Certified Professionals',
  'Personalized Solutions',
  'Accurate & Timely Service',
  'Trusted by Small Businesses',
];

interface AboutSectionProps {
  title?: string;
  description?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = 'About Us',
  description = `Bookkeep is a trusted provider of accounting, bookkeeping, and tax services for small businesses. Our experienced team is dedicated to helping you manage your finances efficiently and accurately. We pride ourselves on delivering personalized solutions tailored to your unique needs.`,
}) => (
  <section id="about" className="py-16 md:py-20 bg-light">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-shrink-0 mb-6 md:mb-0 flex flex-col items-center">
        <BigAboutIcon />
      </div>
      <div className="w-full">
        <h2 className="text-3xl font-extrabold mb-4 text-[#1a4b8c]">{title}</h2>
        <p className="text-lg leading-relaxed mb-6 text-[#0a2342]">
          {description}
        </p>
        <ul className="mt-4">
          {aboutPoints.map((point, idx) => (
            <CheckListItem key={idx} text={point} />
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default AboutSection;
