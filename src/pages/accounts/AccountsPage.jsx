import React from 'react';

const AccountsPage = () => {
  const dummyData = [
    { 
      label: "Rs. 0 is to receive from Shrenathji N", 
      broker: "323: rk002", 
      clientPL: "-3050964.2", 
      clientBrokerage: "110434.52", 
      clientNet: "-3161398.71", 
      plShare: "0", 
      brokerageShare: "0", 
      netShare: "0" 
    },
    { 
      label: "Rs. 37.30839 is payable to Ramesh raparia", 
      broker: "324: rr001", 
      clientPL: "1735", 
      clientBrokerage: "106.6", 
      clientNet: "1628.4", 
      plShare: "0", 
      brokerageShare: "37.31", 
      netShare: "37.31" 
    },
    { 
      label: "Rs. 0 is to receive from Lalit Rathore", 
      broker: "327: lr001", 
      clientPL: "0", 
      clientBrokerage: "0", 
      clientNet: "0", 
      plShare: "0", 
      brokerageShare: "0", 
      netShare: "0" 
    },
    { 
      label: "Rs. 0 is to receive from Pradeep jain", 
      broker: "335: pj001", 
      clientPL: "0", 
      clientBrokerage: "0", 
      clientNet: "0", 
      plShare: "0", 
      brokerageShare: "0", 
      netShare: "0" 
    },
    { 
      label: "Rs. 62.97445 is payable to Gopal ji", 
      broker: "337: gg001", 
      clientPL: "-3907.5", 
      clientBrokerage: "89.96", 
      clientNet: "-3997.46", 
      plShare: "0", 
      brokerageShare: "62.97", 
      netShare: "62.97" 
    },
    { 
      label: "Rs. 1598.26448 is payable to RICHA ROCKY JI", 
      broker: "352: rus001", 
      clientPL: "-203045.55", 
      clientBrokerage: "7991.32", 
      clientNet: "-211036.87", 
      plShare: "0", 
      brokerageShare: "1598.26", 
      netShare: "1598.26" 
    },
  ];

  const total = {
    broker: "Total",
    clientPL: "-4044440.23",
    clientBrokerage: "192646.97",
    clientNet: "-4237087.2",
    plShare: "0",
    brokerageShare: "56366.92",
    netShare: "56366.92"
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Search/Filter Bar */}
      <div className="flex flex-wrap gap-4 mb-6 bg-[#151c2c] p-4 rounded border border-[#2d3748]">
        <div className="flex flex-col gap-1 flex-1 min-w-[150px]">
          <label className="text-xs text-slate-400">From Date</label>
          <input type="date" className="bg-[#1c2638] border border-[#2d3748] text-white p-2 rounded text-sm focus:outline-none focus:border-[#01B4EA]" />
        </div>
        <div className="flex flex-col gap-1 flex-1 min-w-[150px]">
          <label className="text-xs text-slate-400">To Date</label>
          <input type="date" className="bg-[#1c2638] border border-[#2d3748] text-white p-2 rounded text-sm focus:outline-none focus:border-[#01B4EA]" />
        </div>
        <div className="flex items-end">
          <button className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-2 px-6 rounded transition-all uppercase tracking-wider text-xs h-[38px]">
            Calculate for Custom Dates
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="flex-1 bg-[#151c2c] rounded-lg border border-[#2d3748] overflow-hidden flex flex-col">
        <div className="overflow-x-auto overflow-y-auto custom-scrollbar flex-1">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-[#151c2c] z-10 shadow-sm">
              <tr className="text-slate-100 text-[11px] font-semibold border-b border-[#2d3748] uppercase tracking-wider">
                <th className="px-4 py-4 min-w-[250px]">Receivable / Payable</th>
                <th className="px-4 py-4">Broker</th>
                <th className="px-4 py-4 text-right">SUM of Client PL</th>
                <th className="px-4 py-4 text-right">SUM of Client Brokerage</th>
                <th className="px-4 py-4 text-right">SUM of Client Net</th>
                <th className="px-4 py-4 text-right">PL Share</th>
                <th className="px-4 py-4 text-right">Brokerage Share</th>
                <th className="px-4 py-4 text-right">Net Share</th>
              </tr>
            </thead>
            <tbody className="text-[11px] text-slate-300">
              {/* Total Row */}
              <tr className="bg-[#1c2638]/50 font-bold border-b border-[#2d3748]">
                <td className="px-4 py-4"></td>
                <td className="px-4 py-4">{total.broker}</td>
                <td className="px-4 py-4 text-right text-red-400">{total.clientPL}</td>
                <td className="px-4 py-4 text-right">{total.clientBrokerage}</td>
                <td className="px-4 py-4 text-right text-red-400">{total.clientNet}</td>
                <td className="px-4 py-4 text-right">{total.plShare}</td>
                <td className="px-4 py-4 text-right">{total.brokerageShare}</td>
                <td className="px-4 py-4 text-right">{total.netShare}</td>
              </tr>
              {/* Data Rows */}
              {dummyData.map((row, idx) => (
                <tr key={row.broker} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors">
                  <td className="px-4 py-4 text-slate-400 italic">{row.label}</td>
                  <td className="px-4 py-4">{row.broker}</td>
                  <td className={`px-4 py-4 text-right ${parseFloat(row.clientPL) < 0 ? 'text-red-400' : parseFloat(row.clientPL) > 0 ? 'text-green-400' : ''}`}>
                    {row.clientPL}
                  </td>
                  <td className="px-4 py-4 text-right">{row.clientBrokerage}</td>
                  <td className={`px-4 py-4 text-right ${parseFloat(row.clientNet) < 0 ? 'text-red-400' : parseFloat(row.clientNet) > 0 ? 'text-green-400' : ''}`}>
                    {row.clientNet}
                  </td>
                  <td className="px-4 py-4 text-right">{row.plShare}</td>
                  <td className="px-4 py-4 text-right">{row.brokerageShare}</td>
                  <td className="px-4 py-4 text-right">{row.netShare}</td>
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
