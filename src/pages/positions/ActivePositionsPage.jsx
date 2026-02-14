import React, { useState } from 'react';

const ActivePositionsPage = ({ onNavigate }) => {
    // Data from screenshot (Empty state)
    const positions = [
        { scrip: '0 ()', activeBuy: '0 ()', activeSell: '0', avgBuy: '0', avgSell: '0', total: '0', net: '0', m2m: '0' },
    ];

    const MobilePositionCard = ({ pos }) => (
        <div className="bg-[#151c2c] p-4 rounded-lg border border-[#2d3748] shadow-md mb-3">
            <div className="flex justify-between items-center mb-3">
                 <span className="text-white text-sm font-bold">
                    Scrip
                </span>
                <span className="text-sm font-bold text-white">{pos.m2m}</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                 <div className="flex flex-col">
                    <span className="text-slate-500">Active Buy</span>
                    <span className="text-white font-medium">{pos.activeBuy}</span>
                </div>
                 <div className="flex flex-col text-right">
                    <span className="text-slate-500">Active Sell</span>
                    <span className="text-white font-medium">{pos.activeSell}</span>
                </div>
            </div>
             <div className="flex justify-between items-center border-t border-[#2d3748] pt-2 mt-2 text-xs">
                 <div className="flex flex-col">
                    <span className="text-[#01B4EA]">Net</span>
                    <span className="text-white font-bold">{pos.net}</span>
                </div>
                <div className="flex flex-col text-right">
                     <span className="text-slate-500">Total</span>
                     <span className="text-white font-medium">{pos.total}</span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col h-full bg-[#0b111e] p-4 md:p-6 space-y-6 overflow-y-auto custom-scrollbar">
             {/* Header Button */}
             <div>
                <button className="bg-[#ab47bc] hover:bg-purple-600 text-white text-[11px] font-bold py-2 px-4 rounded shadow uppercase tracking-wide transition-colors">
                    SHOW EQUITY POSITIONS
                </button>
            </div>

             {/* Desktop Table */}
             <div className="hidden md:block bg-[#151c2c] rounded border border-[#2d3748] overflow-hidden shadow-xl">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-slate-400 text-[13px] font-normal border-b border-[#2d3748] bg-[#151c2c]">
                            <th className="px-6 py-4">Scrip</th>
                            <th className="px-6 py-4">Active Buy</th>
                            <th className="px-6 py-4">Active Sell</th>
                            <th className="px-6 py-4">Avg buy rate</th>
                            <th className="px-6 py-4">Avg sell rate</th>
                            <th className="px-6 py-4">Total</th>
                            <th className="px-6 py-4">Net</th>
                            <th className="px-6 py-4">M2m</th>
                        </tr>
                    </thead>
                    <tbody className="text-[13px] font-normal text-slate-300">
                        {positions.map((pos, idx) => (
                            <tr key={idx} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors">
                                <td className="px-6 py-4 text-white">
                                    {pos.scrip}
                                </td>
                                <td className="px-6 py-4">{pos.activeBuy}</td>
                                <td className="px-6 py-4">{pos.activeSell}</td>
                                <td className="px-6 py-4">{pos.avgBuy}</td>
                                <td className="px-6 py-4">{pos.avgSell}</td>
                                <td className="px-6 py-4">{pos.total}</td>
                                <td className="px-6 py-4">{pos.net}</td>
                                <td className="px-6 py-4">{pos.m2m}</td>
                            </tr>
                        ))}
                         {/* Total Row */}
                         <tr className="bg-[#151c2c] font-bold text-slate-200 border-t border-[#2d3748]">
                            <td className="px-6 py-4 text-slate-400">Total</td>
                            <td className="px-6 py-4">0</td>
                            <td className="px-6 py-4">0</td>
                            <td className="px-6 py-4"></td>
                            <td className="px-6 py-4"></td>
                            <td className="px-6 py-4">0</td>
                            <td className="px-6 py-4">0</td>
                            <td className="px-6 py-4">0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            {/* Mobile Card List */}
            <div className="md:hidden space-y-3 pb-20">
                {positions.map((pos, idx) => (
                    <MobilePositionCard key={idx} pos={pos} />
                ))}
            </div>
        </div>
    );
};

export default ActivePositionsPage;
