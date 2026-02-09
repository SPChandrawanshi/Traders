import React from 'react';

const ActiveTradesTable = () => {
  const data = [
    { x: "X", id: "4239596", scrip: "CRUDEOIL 26FEBFUT", buyRate: "0", sellRate: "5620", lots: "1 / 100", buyTurnover: "0", sellTurnover: "562000", cmp: "5621", activePL: "-100", margin: "20000", bought: "(not set)" },
    // Only showing 1 item in screenshot 4 active trades bottom part visible, but let's keep 2 for demo
  ];

  const headers = [
    "X", "ID 1", "Scrip", "Buy Rate", "Sell Rate", "Lots / Units", "Buy Turnover", "Sell Turnover", "CMP", "Active P/L", "Margin Used", "Bought"
  ];

  return (
    <div className="bg-[#151c2c] rounded border border-[#2d3748] overflow-hidden mb-6 shadow-xl">
      <div className="px-6 py-4 border-b border-[#2d3748]">
        <h2 className="text-xl font-normal text-slate-300 tracking-wide">Active Trades</h2>
        <p className="text-xs text-slate-500 mt-1">Showing 2 of 2 items.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left whitespace-nowrap">
          <thead>
            <tr className="text-slate-300 text-[13px] font-normal border-b border-[#2d3748] bg-[#151c2c]">
              <th className="px-6 py-4">X</th>
              <th className="px-6 py-4">ID ↑</th>
              <th className="px-6 py-4">Scrip</th>
              <th className="px-6 py-4">Buy Rate</th>
              <th className="px-6 py-4">Sell Rate</th>
              <th className="px-6 py-4">Lots / Units</th>
              <th className="px-6 py-4">Buy Turnover</th>
              <th className="px-6 py-4">Sell Turnover</th>
              <th className="px-6 py-4">CMP</th>
              <th className="px-6 py-4">Active P/L</th>
              <th className="px-6 py-4">Margin Used</th>
              <th className="px-6 py-4">Bough</th>
            </tr>
          </thead>
          <tbody className="text-[13px] text-slate-300">
            {data.map((item, index) => (
              <tr key={index} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors">
                <td className="px-6 py-4 text-slate-400">{item.x}</td>
                <td className="px-6 py-4 text-slate-300">{item.id}</td>
                <td className="px-6 py-4 text-[#90caf9] uppercase">{item.scrip}</td>
                <td className="px-6 py-4 text-slate-300">{item.buyRate}</td>
                <td className="px-6 py-4 text-slate-300">{item.sellRate}</td>
                <td className="px-6 py-4 text-slate-300">{item.lots}</td>
                <td className="px-6 py-4 text-slate-300">{item.buyTurnover}</td>
                <td className="px-6 py-4 text-slate-300">{item.sellTurnover}</td>
                <td className="px-6 py-4 text-slate-300">{item.cmp}</td>
                <td className={`px-6 py-4 ${item.activePL.startsWith('-') ? 'text-slate-300' : 'text-slate-300'}`}>
                  {item.activePL}
                </td>
                <td className="px-6 py-4 text-slate-300">{item.margin}</td>
                <td className="px-6 py-4 text-slate-300">{item.bought}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveTradesTable;
