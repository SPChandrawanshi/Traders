import React from 'react';

const ActivePositionsPage = () => {
    // Data from screenshot state
    const positions = [
        {
            scrip: '',
            activeBuy: '0 ()',
            activeSell: '0 ()',
            avgBuy: '0',
            avgSell: '0',
            total: '0',
            net: '0',
            m2m: '0'
        },
    ];

    return (
        <div className="flex flex-col h-full bg-[#1a2035] overflow-hidden">
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar">

                {/* Unified Card Container - Matching Screenshot */}
                <div className="bg-[#1f283e] p-6 rounded shadow-xl overflow-x-auto border border-white/5">

                    {/* Header Button Section */}
                    <div className="mb-8">
                        <button className="bg-[#9c27b0] hover:bg-purple-600 text-white text-[12px] font-bold py-2.5 px-6 rounded shadow uppercase tracking-wider transition-all active:scale-95">
                            SHOW EQUITY POSITIONS
                        </button>
                    </div>

                    {/* Table Section */}
                    <table className="w-full text-left border-collapse min-w-[900px]">
                        <thead>
                            <tr className="text-slate-400 text-[15px] font-normal border-b border-[#2d3748]">
                                <th className="px-4 py-4 w-[12%]">Scrip</th>
                                <th className="px-4 py-4 w-[12%] text-center">Active Buy</th>
                                <th className="px-4 py-4 w-[12%] text-center">Active Sell</th>
                                <th className="px-4 py-4 w-[12%] text-center">Avg buy rate</th>
                                <th className="px-4 py-4 w-[12%] text-center">Avg sell rate</th>
                                <th className="px-4 py-4 w-[12%] text-center">Total</th>
                                <th className="px-4 py-4 w-[12%] text-center">Net</th>
                                <th className="px-4 py-4 w-[12%] text-center">M2m</th>
                            </tr>
                        </thead>
                        <tbody className="text-[14px]">
                            {positions.map((pos, idx) => (
                                <tr key={idx} className="border-b border-[#2d3748]/30 hover:bg-[#202940]/50 transition-colors">
                                    <td className="px-4 py-5 text-slate-300 min-h-[50px]">
                                        {pos.scrip}
                                    </td>
                                    <td className="px-4 py-5 text-slate-300 text-center">{pos.activeBuy}</td>
                                    <td className="px-4 py-5 text-slate-300 text-center">{pos.activeSell}</td>
                                    <td className="px-4 py-5 text-slate-300 text-center">{pos.avgBuy}</td>
                                    <td className="px-4 py-5 text-slate-300 text-center">{pos.avgSell}</td>
                                    <td className="px-4 py-5 text-slate-300 text-center">{pos.total}</td>
                                    <td className="px-4 py-5 text-slate-300 text-center">{pos.net}</td>
                                    <td className="px-4 py-5 text-slate-300 text-center">{pos.m2m}</td>
                                </tr>
                            ))}

                            {/* Total Row Section */}
                            <tr className="border-b border-[#2d3748]/10 bg-transparent font-bold">
                                <td className="px-4 py-6 text-slate-400 text-[15px]">Total</td>
                                <td className="px-4 py-6 text-slate-300 text-center">0</td>
                                <td className="px-4 py-6 text-slate-300 text-center">0</td>
                                <td className="px-4 py-6"></td>
                                <td className="px-4 py-6"></td>
                                <td className="px-4 py-6 text-slate-300 text-center">0</td>
                                <td className="px-4 py-6 text-slate-300 text-center">0</td>
                                <td className="px-4 py-6 text-slate-300 text-center">0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default ActivePositionsPage;
