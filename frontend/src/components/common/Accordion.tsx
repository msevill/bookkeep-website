import React, { useState } from 'react';

interface AccordionItem {
  id: string | number;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, idx) => (
        <div key={item.id}>
          <button
            className="w-full text-left py-4 px-6 font-semibold text-blue-800 focus:outline-none hover:bg-blue-50 transition"
            onClick={() => handleToggle(idx)}
            aria-expanded={openIndex === idx}
          >
            {item.question}
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-4 text-gray-700">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
