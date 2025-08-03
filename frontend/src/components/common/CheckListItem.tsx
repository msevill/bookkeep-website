import React from 'react';

interface CheckListItemProps {
  text: string;
}

const CheckListItem: React.FC<CheckListItemProps> = ({ text }) => (
  <li className="flex items-center gap-3 mb-3">
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="10" fill="#0a2342" />
        <path
          d="M6 10l2.5 2.5L14 7"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
    <span className="text-lg text-white">{text}</span>
  </li>
);

export default CheckListItem;
