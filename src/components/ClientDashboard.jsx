import React, { useState } from 'react';
import DashboardFilters from './DashboardFilters';
import ClientDetailsCard from './ClientDetailsCard';
import FundWithdrawalTable from './FundWithdrawalTable';
import ActiveTradesTable from './ActiveTradesTable';
import ActivePositionsTable from './ActivePositionsTable';
import { ChevronDown, ArrowLeft } from 'lucide-react';

const ClientDashboard = ({ onBack }) => {
    const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="flex flex-col h-full bg-[#0b111e] p-6 space-y-6 overflow-y-auto custom-scrollbar">
      <div className="flex items-center gap-4">
        <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider"
        >
            <ArrowLeft className="w-4 h-4" /> Back to List
        </button>
      </div>

      {/* Filters Section */}
      <DashboardFilters />

      {/* Actions & View Details Bar */}
      <div className="space-y-4">
         <div className="flex">
            <button className="bg-[#8e24aa] hover:bg-[#7b1fa2] text-white text-[11px] font-bold py-2.5 px-6 rounded-l shadow-lg uppercase tracking-wider flex items-center justify-between min-w-[140px]">
                ACTIONS
                <ChevronDown className="w-4 h-4 ml-2" />
            </button>
        </div>

        <button 
            onClick={() => setShowDetails(!showDetails)}
            className="w-full bg-[#4CAF50] hover:bg-[#43a047] text-white text-[13px] font-bold py-3 px-4 rounded shadow-lg uppercase tracking-wider transition-colors"
        >
            VIEW DETAILS
        </button>
      </div>

      {/* Content Sections */}
      <div className="space-y-8">
        {showDetails && <ClientDetailsCard />}
        
        {/* Screenshot 2/3 shows Active Positions at the top for the client view often, 
            but Screenshot 4 shows Fund Withdrawal above Active Trades. 
            Let's place Active Positions first as it's a key trading view, then Funds, then Trades. 
            Actually, let's follow a logical flow or user preference. 
            The user said "dash bord", usually implies the main view. 
            If I look at Screenshot 2, it shows "SHRE072's Active Positions". 
            I will put ActivePositionsTable first.
        */}
        <ActivePositionsTable />

        <FundWithdrawalTable />
        
        <ActiveTradesTable />
      </div>
    </div>
  );
};

export default ClientDashboard;
