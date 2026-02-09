import React from 'react';

const FundWithdrawalTable = () => {
  const data = [
    { amount: "-40000", date: "2026-02-02 19:44:11", notes: "" },
    { amount: "-60000", date: "2026-02-02 11:45:10", notes: "" },
    { amount: "-100000", date: "2026-02-02 09:33:45", notes: "" },
    { amount: "164845.7", date: "2026-02-02 00:00:00", notes: "Opening Balance", highlight: true },
  ];

  return (
    <div className="bg-[#151c2c] rounded-lg border border-[#2d3748] overflow-hidden mb-6">
      <div className="px-6 py-4 border-b border-[#2d3748]">
        <h2 className="text-xl font-normal text-slate-300 tracking-wide">Fund - Withdrawal & Deposits</h2>
        <p className="text-xs text-slate-500 mt-1">Showing 4 of 4 items.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-slate-100 text-sm font-semibold border-b border-[#2d3748]">
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Created At</th>
              <th className="px-6 py-3">Notes</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {data.map((item, index) => (
              <tr key={index} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors">
                <td className={`px-6 py-4 ${item.highlight ? 'text-[#01B4EA] bg-[#01B4EA]/10 font-bold' : 'text-slate-300'}`}>
                  {item.amount}
                </td>
                <td className="px-6 py-4 text-slate-300">{item.date}</td>
                <td className="px-6 py-4 text-slate-300">{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FundWithdrawalTable;
