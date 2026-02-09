import React from 'react';

const LiveM2MPage = () => {
  const m2mData = [
    { id: '323 : rk002', pl: '-22678.11', trades: '50', margin: '47999.42', color: 'bg-green-600' },
    { id: '324 : rk001', pl: '9018', trades: '11', margin: '2157.13', color: 'bg-green-600' },
    { id: '337 : gg001', pl: '-320', trades: '1', margin: '3883.6', color: 'bg-green-600' },
    { id: '339 : sp001', pl: '-74600', trades: '1', margin: '10000', color: 'bg-green-600' },
    { id: '352 : rs001', pl: '100740.1', trades: '19', margin: '34474.41', color: 'bg-green-600' },
    { id: '390 : jp001', pl: '181794.05', trades: '18', margin: '50409.86', color: 'bg-green-600' },
    { id: '399 : ar001', pl: '-5105', trades: '2', margin: '2500', color: 'bg-green-600' },
    { id: '410 : ns001', pl: '311.5', trades: '1', margin: '124.19', color: 'bg-green-600' },
    { id: '423 : rk001', pl: '58239.9', trades: '1', margin: '82471.01', color: 'bg-green-600' },
  ];

  const total = {
    pl: '280626.44',
    trades: '109',
    margin: '255729.85'
  };

  return (
    <div className="flex flex-col h-full bg-[#0b111e] p-4 space-y-4 overflow-y-auto custom-scrollbar">
      {/* Top Banner */}
      <div className="bg-[#4CAF50] p-4 rounded-md shadow-md">
        <h2 className="text-white text-xl font-bold tracking-tight italic">
          Live M2M under: <span className="font-extrabold">SHRISHREENATHJI TRADERS</span>
        </h2>
      </div>

      {/* Stats Table */}
      <div className="bg-[#151c2c] rounded-lg border border-[#2d3748] overflow-hidden shadow-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-slate-400 text-[11px] font-semibold border-b border-[#2d3748] uppercase tracking-wider bg-[#1c2638]">
              <th className="px-6 py-4">User ID</th>
              <th className="px-6 py-4 text-right">Active Profit/Loss</th>
              <th className="px-6 py-4 text-center">Active Trades</th>
              <th className="px-6 py-4 text-right">Margin Used</th>
            </tr>
          </thead>
          <tbody className="text-[12px] text-slate-100 font-medium">
            {/* Total Row */}
            <tr className="border-b border-[#2d3748] bg-slate-800/40">
              <td className="px-6 py-4 font-bold text-slate-400">Total</td>
              <td className="px-6 py-4 text-right font-bold text-red-500/90">{total.pl}</td>
              <td className="px-6 py-4 text-center font-bold text-blue-400">{total.trades}</td>
              <td className="px-6 py-4 text-right font-bold text-slate-300">{total.margin}</td>
            </tr>

            {/* Individual User Rows */}
            {m2mData.map((row, idx) => (
              <tr key={idx} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors">
                <td className="px-6 py-3 flex items-center gap-3">
                  <span className={`${row.color} text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-sm`}>
                    {row.id}
                  </span>
                </td>
                <td className={`px-6 py-3 text-right ${parseFloat(row.pl) >= 0 ? 'text-green-400' : 'text-slate-100'}`}>
                  {row.pl}
                </td>
                <td className="px-6 py-3 text-center text-blue-400 font-semibold">
                  {row.trades}
                </td>
                <td className="px-6 py-3 text-right text-slate-300">
                  {row.margin}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveM2MPage;
