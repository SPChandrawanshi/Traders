import React from 'react';

const BrokerM2MPage = () => {
  const brokerMetrics = [
    { id: '3274 : Sweta namdev', ledger: '30134.83', m2m: '30234.53', pl: '99.65', trades: '24', margin: '32.77', holding: '97.76' },
    { id: '3343 : Ar0', ledger: '14000', m2m: '6925', pl: '-7075', trades: '1', margin: '500', holding: '2500' },
    { id: '3725 : Namdevji', ledger: '2398.8', m2m: '2481.04', pl: '82.24', trades: '17', margin: '18.72', holding: '55.85' },
    { id: '4249 : Sajjan', ledger: '13216.93', m2m: '12616.93', pl: '-600', trades: '2', margin: '1447.95', holding: '4322.24' },
    { id: '4334 : Subhash bhavar', ledger: '131679.63', m2m: '124899.63', pl: '-6780', trades: '1', margin: '2000', holding: '8000' },
    { id: '4372 : Pardeep kumar', ledger: '58118.96', m2m: '54538.96', pl: '-3580', trades: '1', margin: '1000', holding: '5000' },
    { id: '4378 : Arjun jain', ledger: '282153.54', m2m: '276628.54', pl: '-5525', trades: '2', margin: '3000', holding: '15000' },
    { id: '4395 : Jitu0', ledger: '132489.06', m2m: '133189.06', pl: '700', trades: '2', margin: '40000', holding: '50000' },
  ];

  return (
    <div className="flex flex-col h-full bg-[#0b111e] p-4 space-y-6 overflow-y-auto custom-scrollbar">
      {/* Top Banner */}
      <div className="bg-[#4CAF50] p-4 rounded-md shadow-md">
        <h2 className="text-white text-xl font-bold tracking-tight italic">
          Live M2M under: <span className="font-extrabold uppercase">rk002</span>
        </h2>
      </div>

      {/* Main Table */}
      <div className="bg-[#151c2c] rounded border border-[#2d3748] overflow-hidden shadow-xl flex-1 flex flex-col">
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
                <tr className="text-slate-300 text-[13px] font-normal border-b border-[#2d3748] bg-[#151c2c]">
                <th className="px-6 py-4">User ID</th>
                <th className="px-6 py-4">Ledger Balance</th>
                <th className="px-6 py-4">M2M</th>
                <th className="px-6 py-4">Active Profit/Loss</th>
                <th className="px-6 py-4">Active Trades</th>
                <th className="px-6 py-4">Margin Used</th>
                <th className="px-6 py-4">Holding Margin</th>
                </tr>
            </thead>
            <tbody className="text-[13px] text-slate-300">
                {brokerMetrics.map((row, idx) => (
                <tr key={idx} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors">
                    <td className="px-6 py-4 text-green-400 font-medium">
                    {row.id}
                    </td>
                    <td className="px-6 py-4">
                    {row.ledger}
                    </td>
                    <td className="px-6 py-4">
                    {row.m2m}
                    </td>
                    <td className={`px-6 py-4 ${parseFloat(row.pl) >= 0 ? 'text-slate-300' : 'text-slate-300'}`}>
                    {row.pl}
                    </td>
                    <td className="px-6 py-4">
                    {row.trades}
                    </td>
                    <td className="px-6 py-4">
                    {row.margin}
                    </td>
                    <td className="px-6 py-4">
                    {row.holding}
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
      </div>

      {/* Turnover Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#4CAF50] p-6 rounded shadow-lg text-white">
          <h3 className="text-xl font-normal">Buy Turnover</h3>
        </div>
        <div className="bg-[#4CAF50] p-6 rounded shadow-lg text-white">
          <h3 className="text-xl font-normal">Sell Turnover</h3>
        </div>
        <div className="bg-[#4CAF50] p-6 rounded shadow-lg text-white">
            <h3 className="text-xl font-normal">Total Turnover</h3>
        </div>
      </div>
    </div>
  );
};

export default BrokerM2MPage;
