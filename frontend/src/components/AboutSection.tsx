import React from 'react';
import SectionHighlighter from './SectionHighlighter';
import FadeInOnView from './FadeInOnView';
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
      fill="#0a2342"
      textAnchor="middle"
    >
      SBS
    </text>
    <g fill="none" stroke="#0a2342" strokeWidth="2">
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


interface DescriptionChild {
  type: string;
  text?: string;
  children?: DescriptionChild[];
}

interface DescriptionItem {
  type: string;
  children: DescriptionChild[];
  format?: string;
}

interface AboutUsSection {
  id: number;
  Title: string;
  Description: DescriptionItem[];
}

interface AboutSectionProps {
  aboutData: AboutUsSection;
}

const extractParagraphs = (description: DescriptionItem[]) =>
  description
    .filter(item => item.type === 'paragraph')
    .map(item =>
      item.children
        .map(child => child.text || '')
        .join('')
    )
    .filter(text => text.trim().length > 0);

const extractListItems = (description: DescriptionItem[]) =>
  description
    .filter(item => item.type === 'list')
    .flatMap(item =>
      item.children
        .filter(child => child.type === 'list-item')
        .map(listItem =>
          listItem.children
            .map(grandChild => grandChild.text || '')
            .join('')
        )
    )
    .filter(text => text.trim().length > 0);



const AboutSection: React.FC<AboutSectionProps> = ({ aboutData }) => {
  // Debug log
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-console
    console.log('AboutSection aboutData:', aboutData);
  }
  const paragraphs = extractParagraphs(aboutData.Description);
  const aboutPoints = extractListItems(aboutData.Description);

  // Fallback rendering if no data
  if (!aboutData || (!paragraphs.length && !aboutPoints.length)) {
    return (
      <section id="about" className="py-16 md:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-4 text-[#1a4b8c]">About Us</h2>
          <p className="text-lg leading-relaxed mb-6 text-[#0a2342]">No about information available.</p>
        </div>
      </section>
    );
  }

  return (
    <FadeInOnView as="section" id="about" className="py-16 md:py-20 bg-light">
      <SectionHighlighter sectionId="about" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0 mb-6 md:mb-0 flex flex-col items-center">
          <BigAboutIcon />
        </div>
        <div className="w-full">
          <h2 className="text-3xl font-extrabold mb-4 text-[#1a4b8c]">{aboutData.Title || 'About Us'}</h2>
          {paragraphs.length > 0 ? (
            paragraphs.map((para, idx) => (
              <FadeInOnView as="p" key={idx} className="text-lg leading-relaxed mb-6 text-[#0a2342]">
                {para}
              </FadeInOnView>
            ))
          ) : (
            <p className="text-lg leading-relaxed mb-6 text-[#0a2342]">No description available.</p>
          )}
          <ul className="mt-4">
            {aboutPoints.length > 0 ? (
              aboutPoints.map((point, idx) => (
                <CheckListItem key={idx} text={point} />
              ))
            ) : (
              <li className="text-[#0a2342]">No highlights available.</li>
            )}
          </ul>
        </div>
      </div>
    </FadeInOnView>
  );
};

export default AboutSection;
