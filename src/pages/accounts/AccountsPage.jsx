import React, { useState } from 'react';

const AccountsPage = () => {
  const [filters, setFilters] = useState({
    fromDate: '',
    toDate: ''
  });

  const accountsData = [
    {
      receivablePayable: "Rs. 0 is payable to Parent Admin",
      broker: "3761: demo001",
      clientPL: "0",
      clientBrokerage: "0",
      clientNet: "0",
      plShare: "0",
      brokerageShare: "0",
      netShare: "0"
    }
  ];

  const total = {
    broker: "Total",
    clientPL: "0",
    clientBrokerage: "0",
    clientNet: "0",
    plShare: "0",
    brokerageShare: "0",
    netShare: "0"
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleCalculate = () => {
    console.log('Calculate for dates:', filters);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden space-y-4">
      {/* Date Filter Bar */}
      <div className="flex flex-wrap gap-4 items-end">
        <input
          type="text"
          name="fromDate"
          value={filters.fromDate}
          onChange={handleFilterChange}
          placeholder="From Date"
          className="bg-white text-slate-900 px-4 py-2 rounded text-sm outline-none border border-slate-300"
        />
        <input
          type="text"
          name="toDate"
          value={filters.toDate}
          onChange={handleFilterChange}
          placeholder="To Date"
          className="bg-white text-slate-900 px-4 py-2 rounded text-sm outline-none border border-slate-300"
        />
        <button
          onClick={handleCalculate}
          className="bg-[#4CAF50] hover:bg-[#43A047] text-white font-bold py-2 px-6 rounded uppercase tracking-wide text-xs transition-all shadow-md"
        >
          CALCULATE FOR CUSTOM DATES
        </button>
      </div>

      {/* Table Section */}
      <div className="flex-1 overflow-hidden flex flex-col shadow-xl">
        <div className="overflow-x-auto overflow-y-auto custom-scrollbar flex-1">
          <table className="w-full border-collapse border border-[#2d3748]">
            <thead className="sticky top-0 bg-[#1c2638] z-10">
              <tr className="text-slate-100 text-xs font-semibold">
                <th className="px-4 py-3 border border-[#2d3748]">Receivable / Payable</th>
                <th className="px-4 py-3 border border-[#2d3748]">Broker:</th>
                <th className="px-4 py-3 border border-[#2d3748]">SUM of Client PL</th>
                <th className="px-4 py-3 border border-[#2d3748]">SUM of Client Brokerage</th>
                <th className="px-4 py-3 border border-[#2d3748]">SUM of Client Net</th>
                <th className="px-4 py-3 border border-[#2d3748]">PL Share</th>
                <th className="px-4 py-3 border border-[#2d3748]">Brokerage Share</th>
                <th className="px-4 py-3 border border-[#2d3748]">Net Share</th>
              </tr>
            </thead>
            <tbody className="text-xs text-slate-300">
              {/* Total Row */}
              <tr className="bg-[#202940] font-bold">
                <td className="px-4 py-3 border border-[#2d3748]"></td>
                <td className="px-4 py-3 border border-[#2d3748] text-white">{total.broker}</td>
                <td className="px-4 py-3 border border-[#2d3748]">{total.clientPL}</td>
                <td className="px-4 py-3 border border-[#2d3748]">{total.clientBrokerage}</td>
                <td className="px-4 py-3 border border-[#2d3748]">{total.clientNet}</td>
                <td className="px-4 py-3 border border-[#2d3748]">{total.plShare}</td>
                <td className="px-4 py-3 border border-[#2d3748]">{total.brokerageShare}</td>
                <td className="px-4 py-3 border border-[#2d3748]">{total.netShare}</td>
              </tr>
              {/* Data Rows */}
              {accountsData.map((row, idx) => (
                <tr key={idx} className="bg-[#1a2035] hover:bg-slate-800/20 transition-colors">
                  <td className="px-4 py-3 border border-[#2d3748]">{row.receivablePayable}</td>
                  <td className="px-4 py-3 border border-[#2d3748]">{row.broker}</td>
                  <td className={`px-4 py-3 border border-[#2d3748] ${parseFloat(row.clientPL) < 0 ? 'text-red-400' : parseFloat(row.clientPL) > 0 ? 'text-green-400' : ''}`}>
                    {row.clientPL}
                  </td>
                  <td className="px-4 py-3 border border-[#2d3748]">{row.clientBrokerage}</td>
                  <td className={`px-4 py-3 border border-[#2d3748] ${parseFloat(row.clientNet) < 0 ? 'text-red-400' : parseFloat(row.clientNet) > 0 ? 'text-green-400' : ''}`}>
                    {row.clientNet}
                  </td>
                  <td className="px-4 py-3 border border-[#2d3748]">{row.plShare}</td>
                  <td className="px-4 py-3 border border-[#2d3748]">{row.brokerageShare}</td>
                  <td className="px-4 py-3 border border-[#2d3748]">{row.netShare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
