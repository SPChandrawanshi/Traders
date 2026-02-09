import React from 'react';

const ClientDetailsCard = () => {
    // Data from Image 3
  const details = [
    { label: 'ID', value: '4395' },
    { label: 'Name', value: 'Jitu0' },
    { label: 'Mobile', value: ' ' }, // Empty in screenshot
    { label: 'Username', value: 'SHRE072' },
    { label: 'City', value: ' ' }, // Empty
    { label: 'Account Status', value: 'Active' },
    { label: 'Allow Orders between High - Low?', value: 'Yes' },
    { label: 'Allow Fresh Entry Order above high & below low?', value: 'Yes' },
    { label: 'demo account?', value: 'No' },
    { label: 'Auto-close trades if losses cross beyond the configured limit', value: 'Yes' },
  ];

  return (
    <div className="bg-[#151c2c] border border-[#2d3748] rounded overflow-hidden shadow-xl mb-6">
      {/* Table-like structure for details */}
      <div className="divide-y divide-[#2d3748]">
        {details.map((item, index) => (
          <div key={index} className="flex text-sm hover:bg-slate-800/30 transition-colors">
            <div className="w-1/2 p-4 text-slate-100 font-bold border-r border-[#2d3748]">
              {item.label}
            </div>
            <div className={`w-1/2 p-4 font-medium ${item.value === 'Active' ? 'text-green-400' : 'text-slate-300'}`}>
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientDetailsCard;
