import React from 'react';

interface OrgChartItemProps {
  name: string;
  role: string;
}

const OrgChartItem: React.FC<OrgChartItemProps> = ({ name, role }) => (
  <div className="org-chart-item bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition text-center w-64">
    <div className="font-semibold text-blue-900 text-lg mb-2">{name}</div>
    <div className="text-gray-700">{role}</div>
  </div>
);

export default OrgChartItem;
