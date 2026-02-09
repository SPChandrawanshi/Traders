import React, { useState } from 'react';

const ActivePositionsPage = () => {
    const positions = [
        { scrip: 'ABCAPITAL26FEBFUT', activeBuy: '0 (1)', activeSell: '0 (0)', avgBuy: '327.35', avgSell: '0', total: '0', net: '0', m2m: '10.35' },
        { scrip: 'AMBUJACEM26FEBFUT', activeBuy: '0.953 (1001)', activeSell: '0 (0)', avgBuy: '497', avgSell: '0', total: '0.953', net: '0.953', m2m: '15265.25' },
        { scrip: 'ASHOKLEY26FEBFUT', activeBuy: '0 (2)', activeSell: '0 (0)', avgBuy: '187.2', avgSell: '0', total: '0', net: '0', m2m: '13.9' },
        { scrip: 'AUROPHARMA26FEBFUT', activeBuy: '4 (2200)', activeSell: '0 (0)', avgBuy: '1172.35', avgSell: '0', total: '4', net: '4', m2m: '16830' },
        { scrip: 'BANDHANBNK26FEBFUT', activeBuy: '0.001 (2)', activeSell: '0 (0)', avgBuy: '148.12', avgSell: '0', total: '0.001', net: '0.001', m2m: '3.16' },
        { scrip: 'BANKBARODA26FEBFUT', activeBuy: '0 (1)', activeSell: '0 (0)', avgBuy: '277.75', avgSell: '0', total: '0', net: '0', m2m: '1.15' },
        { scrip: 'BANKINDIA26FEBFUT', activeBuy: '0 (2)', activeSell: '0 (0)', avgBuy: '150.11', avgSell: '0', total: '0', net: '0', m2m: '4.44' },
        { scrip: 'BEL26FEBFUT', activeBuy: '0.001 (1)', activeSell: '0 (0)', avgBuy: '440.85', avgSell: '0', total: '0.001', net: '0.001', m2m: '0.2' },
        { scrip: 'BHEL26FEBFUT', activeBuy: '0 (1)', activeSell: '0 (0)', avgBuy: '259.8', avgSell: '0', total: '0', net: '0', m2m: '0' },
        { scrip: 'BIOCON26FEBFUT', activeBuy: '0 (1)', activeSell: '0 (0)', avgBuy: '335.8', avgSell: '0', total: '0', net: '0', m2m: '5.25' },
    ];

    return (
        <div className="flex flex-col h-full bg-[#0b111e] p-6 space-y-6 overflow-y-auto custom-scrollbar">
             {/* Header Button */}
            <div>
                <button className="bg-[#9C27B0] hover:bg-purple-700 text-white font-medium py-2 px-6 rounded text-xs uppercase shadow-lg transition-all">
                    SHOW EQUITY POSITIONS
                </button>
            </div>

             {/* Table */}
             <div className="bg-[#151c2c] rounded border border-[#2d3748] overflow-hidden shadow-xl">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-slate-200 text-sm font-normal border-b border-[#2d3748] bg-[#151c2c]">
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
                    <tbody className="text-sm font-normal text-slate-300">
                        {positions.map((pos, idx) => (
                            <tr key={idx} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors">
                                <td className="px-6 py-4">
                                    <span className="bg-[#4CAF50] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                        {pos.scrip}
                                    </span>
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
                    </tbody>
                </table>
            </div>
            
             {/* Bottom Navigation / Pagination (implied) */}
        </div>
    );
};

export default ActivePositionsPage;
