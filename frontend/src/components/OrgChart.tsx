'use client';
import React from 'react';
import OrgChartItem from './common/OrgChartItem';

const orgChart = [
  { name: 'Alice Brown', role: 'President' },
  { name: 'Bob Green', role: 'Vice President' },
  { name: 'Carol White', role: 'Treasurer' },
];

const OrgChart: React.FC = () => (
  <div id="orgchart" className="py-16 bg-white px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Organization Chart
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
        Meet our dedicated team members.
      </p>
    </div>
    <div className="mt-12 flex flex-wrap gap-8 justify-center">
      {orgChart.map((item, idx) => (
        <OrgChartItem key={idx} name={item.name} role={item.role} />
      ))}
    </div>
  </div>
);

export default OrgChart;
