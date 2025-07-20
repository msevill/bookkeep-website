'use client';
import React, { useState } from 'react';
import FAQItem from './common/FAQItem';

const faqItems = [
  {
    question: 'How do I join the society?',
    answer: 'Simply register on our website and attend our next seminar.',
  },
  {
    question: 'Are seminars free?',
    answer: 'Some seminars are free, others may require a small fee.',
  },
];

const FAQ: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  return (
    <div id="faq" className="py-16 bg-white px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Find answers to common questions about our seminars and society.
        </p>
      </div>
      <div className="mt-12 space-y-4 max-w-3xl mx-auto">
        {faqItems.map((item, idx) => (
          <FAQItem
            key={idx}
            question={item.question}
            answer={item.answer}
            active={activeIdx === idx}
            onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
