import React from 'react';

const DashboardFilters = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {/* Left Column: Date Inputs */}
      <div className="space-y-2">
        {/* Row 1 */}
        <div className="flex gap-2">
          <div className="flex-1 bg-white p-0">
             <input type="text" placeholder="From Date" className="w-full h-10 px-3 text-slate-800 text-sm border-r border-slate-300 placeholder:text-slate-500" />
          </div>
          <div className="flex-1 bg-white p-0">
             <input type="text" placeholder="To Date" className="w-full h-10 px-3 text-slate-800 text-sm placeholder:text-slate-500" />
          </div>
        </div>
         {/* Row 2 */}
         <div className="flex gap-2">
          <div className="flex-1 bg-white p-0">
             <input type="text" placeholder="From Date" className="w-full h-10 px-3 text-slate-800 text-sm border-r border-slate-300 placeholder:text-slate-500" />
          </div>
          <div className="flex-1 bg-white p-0">
             <input type="text" placeholder="To Date" className="w-full h-10 px-3 text-slate-800 text-sm placeholder:text-slate-500" />
          </div>
        </div>
         {/* Row 3 */}
         <div className="flex gap-2">
          <div className="flex-1 bg-white p-0">
             <input type="text" placeholder="From Date" className="w-full h-10 px-3 text-slate-800 text-sm border-r border-slate-300 placeholder:text-slate-500" />
          </div>
          <div className="flex-1 bg-white p-0">
             <input type="text" placeholder="To Date" className="w-full h-10 px-3 text-slate-800 text-sm placeholder:text-slate-500" />
          </div>
        </div>
      </div>

      {/* Right Column: Action Buttons */}
      <div className="space-y-2">
        <button className="w-full h-10 bg-[#17a2b8] hover:bg-[#138496] text-white text-xs font-bold uppercase tracking-wide transition-colors shadow-sm">
          EXPORT TRADES
        </button>
        <button className="w-full h-10 bg-[#17a2b8] hover:bg-[#138496] text-white text-xs font-bold uppercase tracking-wide transition-colors shadow-sm">
          DOWNLOAD TRADES PDF
        </button>
        <button className="w-full h-10 bg-[#17a2b8] hover:bg-[#138496] text-white text-xs font-bold uppercase tracking-wide transition-colors shadow-sm">
          EXPORT FUNDS
        </button>
      </div>
    </div>
  );
};

export default DashboardFilters;
