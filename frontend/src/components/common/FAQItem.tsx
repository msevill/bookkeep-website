import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  active: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  active,
  onClick,
}) => (
  <div
    className={`faq-item bg-white rounded-lg shadow-md p-6 transition-all duration-300 ${
      active ? 'active' : ''
    }`}
    onClick={onClick}
  >
    <div className="font-semibold cursor-pointer text-lg text-blue-800">
      {question}
    </div>
    <div className={`faq-answer mt-2 text-gray-600 ${active ? '' : 'hidden'}`}>
      {answer}
    </div>
  </div>
);

export default FAQItem;
