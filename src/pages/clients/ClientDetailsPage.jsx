import React from 'react';
import { ChevronLeft, Settings, User } from 'lucide-react';

const ClientDetailsPage = ({ onBack, client }) => {
  // Dummy data if no client passed, matching Screenshot 1
  const data = client || {
    id: '4395',
    name: 'Jitu0',
    mobile: '',
    username: 'SHRE072',
    city: '',
    accountStatus: 'Active',
    allowOrdersBetweenHighLow: 'Yes',
    allowFreshEntryOrder: 'Yes',
    demoAccount: 'No',
    autoCloseTrades: 'Yes'
  };

  const DetailRow = ({ label, value }) => (
    <div className="flex justify-between items-center py-4 border-b border-[#2d3748] last:border-0 hover:bg-slate-800/30 transition-colors px-4">
      <span className="text-slate-300 font-semibold text-sm">{label}</span>
      <span className="text-slate-400 text-sm font-normal">{value}</span>
    </div>
  );

  return (
    <div className="flex flex-col h-full bg-[#0b111e] p-6 space-y-6 overflow-y-auto custom-scrollbar animate-fade-in">
      {/* Header Actions */}
      <div className="flex justify-between items-center mb-2">
         <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Users
        </button>
        <div className="flex items-center gap-3">
            <button className="bg-[#9c27b0] hover:bg-[#7b1fa2] text-white text-xs font-bold py-2 px-6 rounded shadow-lg transition-all flex items-center gap-2">
                ACTIONS <ChevronLeft className="w-3 h-3 rotate-270" />
            </button>
        </div>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-4xl mx-auto">
        {/* Green Header Button Lookalike */}
        <div className="bg-[#4CAF50] w-full py-4 rounded-lg shadow-lg mb-6 text-center shadow-[0_0_15px_rgba(76,175,80,0.3)]">
            <h2 className="text-white text-lg font-medium tracking-wide uppercase">View Details</h2>
        </div>

        {/* Details List */}
        <div className="bg-[#151c2c] rounded-lg border border-[#2d3748] shadow-xl overflow-hidden">
            <div className="flex flex-col">
                <DetailRow label="ID" value={data.id} />
                <DetailRow label="Name" value={data.name} />
                <DetailRow label="Mobile" value={data.mobile} />
                <DetailRow label="Username" value={data.username} />
                <DetailRow label="City" value={data.city} />
                <DetailRow label="Account Status" value={data.accountStatus} />
                <DetailRow label="Allow Orders between High - Low?" value={data.allowOrdersBetweenHighLow} />
                <DetailRow label="Allow Fresh Entry Order above high & below low?" value={data.allowFreshEntryOrder} />
                <DetailRow label="demo account?" value={data.demoAccount} />
                <DetailRow label="Auto-close trades if losses cross beyond the configured limit" value={data.autoCloseTrades} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetailsPage;
