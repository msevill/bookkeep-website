import React from 'react';
import Card from './Card';

export interface SeminarCardProps {
  level: string;
  date: string;
  title: string;
  description: string;
  time: string;
  seminarName: string;
}

const SeminarCard: React.FC<SeminarCardProps> = ({
  level,
  date,
  title,
  description,
  time,
  seminarName,
}) => (
  <Card className="seminar-card bg-blue-50 overflow-hidden">
    <div className="p-6">
      <div className="flex items-center justify-between">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
          {level}
        </span>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <h3 className="mt-4 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <div className="mt-4 flex items-center">
        <svg
          className="h-5 w-5 text-blue-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          />
        </svg>
        <span className="ml-2 text-sm text-gray-500">{time}</span>
      </div>
      <div className="mt-6">
        <button
          className="register-seminar-btn w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
          data-seminar={seminarName}
        >
          Register Now
        </button>
      </div>
    </div>
  </Card>
);

export default SeminarCard;
