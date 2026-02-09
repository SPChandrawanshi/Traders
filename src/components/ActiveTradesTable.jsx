import React from 'react';

const ActiveTradesTable = () => {
  const data = [
    { x: "X", id: "4239596", scrip: "CRUDEOIL 26FEBFUT", buyRate: "0", sellRate: "5620", lots: "1 / 100", buyTurnover: "0", sellTurnover: "562000", cmp: "5621", activePL: "-100", margin: "20000", bought: "(not set)" },
    { x: "X", id: "4239578", scrip: "CRUDEOIL 26FEBFUT", buyRate: "0", sellRate: "5629", lots: "1 / 100", buyTurnover: "0", sellTurnover: "562900", cmp: "5621", activePL: "800", margin: "20000", bought: "(not set)" },
  ];

  const headers = [
    "X", "ID ↑", "Scrip", "Buy Rate", "Sell Rate", "Lots / Units", "Buy Turnover", "Sell Turnover", "CMP", "Active P/L", "Margin Used", "Bought"
  ];

  return (
    <div className="bg-[#151c2c] rounded-lg border border-[#2d3748] overflow-hidden mb-6">
      <div className="px-6 py-4 border-b border-[#2d3748]">
        <h2 className="text-xl font-semibold text-slate-100 italic">Active Trades</h2>
        <p className="text-xs text-slate-400 mt-1">Showing 2 of 2 items.</p>
      </div>
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700">
        <table className="w-full text-left whitespace-nowrap">
          <thead>
            <tr className="text-slate-100 text-xs font-semibold border-b border-[#2d3748]">
              {headers.map((h, i) => (
                <th key={i} className="px-4 py-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-xs">
            {data.map((item, index) => (
              <tr key={index} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors">
                <td className="px-4 py-4 text-slate-400">{item.x}</td>
                <td className="px-4 py-4 text-slate-300">{item.id}</td>
                <td className="px-4 py-4 text-[#01B4EA] font-semibold">{item.scrip}</td>
                <td className="px-4 py-4 text-slate-300">{item.buyRate}</td>
                <td className="px-4 py-4 text-slate-300 underline decoration-dotted">{item.sellRate}</td>
                <td className="px-4 py-4 text-slate-300">{item.lots}</td>
                <td className="px-4 py-4 text-slate-300">{item.buyTurnover}</td>
                <td className="px-4 py-4 text-slate-300">{item.sellTurnover}</td>
                <td className="px-4 py-4 text-slate-300">{item.cmp}</td>
                <td className={`px-4 py-4 font-bold ${item.activePL.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>
                  {item.activePL}
                </td>
                <td className="px-4 py-4 text-slate-300">{item.margin}</td>
                <td className="px-4 py-4 text-slate-300">{item.bought}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveTradesTable;
