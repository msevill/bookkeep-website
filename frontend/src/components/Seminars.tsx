'use client';
import React from 'react';
import SeminarCard from './cards/SeminarCard';

const seminars = [
  {
    level: 'Beginner',
    date: 'May 15, 2023',
    title: 'Bookkeeping Fundamentals',
    description:
      'Learn the basics of bookkeeping, including double-entry accounting, financial statements, and record-keeping best practices.',
    time: '2:00 PM - 4:00 PM',
    seminarName: 'Bookkeeping Fundamentals',
  },
  {
    level: 'Intermediate',
    date: 'May 22, 2023',
    title: 'Tax Preparation for Small Businesses',
    description:
      'Understand tax obligations for small businesses, deductions, credits, and how to prepare accurate tax returns.',
    time: '1:00 PM - 3:30 PM',
    seminarName: 'Tax Preparation for Small Businesses',
  },
  {
    level: 'Advanced',
    date: 'May 29, 2023',
    title: 'QuickBooks Mastery',
    description:
      'Master QuickBooks software for efficient bookkeeping, including advanced features, reporting, and troubleshooting.',
    time: '10:00 AM - 1:00 PM',
    seminarName: 'QuickBooks Mastery',
  },
];

const Seminars: React.FC = () => (
  <div id="seminars" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Upcoming Free Seminars
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Expand your bookkeeping knowledge with our expert-led sessions
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {seminars.map((seminar, idx) => (
          <SeminarCard key={idx} {...seminar} />
        ))}
      </div>
    </div>
  </div>
);

export default Seminars;
