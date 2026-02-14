import React from 'react';

const ClosedPositionsPage = () => {
    // Mock data matching the new requested structure
    const closedPositions = [
        { scrip: 'CRUDEOIL26FEB5800CE', lots: '2', avgBuy: '155.0', avgSell: '165.0', pl: '5000', brokerage: '40', netPl: '4960' },
        { scrip: 'GOLDM26MARFUT', lots: '1', avgBuy: '62000', avgSell: '62100', pl: '1000', brokerage: '20', netPl: '980' },
        { scrip: 'SILVERMIC26FEBFUT', lots: '5', avgBuy: '72500', avgSell: '72400', pl: '-5000', brokerage: '100', netPl: '-5100' },
    ];

    const MobileClosedPositionCard = ({ pos }) => (
        <div className="bg-[#1f283e] p-4 rounded-lg border border-white/5 shadow-md mb-3 active:scale-[0.98] transition-transform">
            <div className="flex justify-between items-center mb-3">
                <span className="text-white text-sm font-bold uppercase tracking-wide">
                    {pos.scrip}
                </span>
                <span className={`text-sm font-bold ${parseFloat(pos.netPl) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {pos.netPl}
                </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                <div className="flex flex-col">
                    <span className="text-slate-500 uppercase font-semibold text-[10px]">Lots</span>
                    <span className="text-white font-medium">{pos.lots}</span>
                </div>
                <div className="flex flex-col text-right">
                    <span className="text-slate-500 uppercase font-semibold text-[10px]">Profit / Loss</span>
                    <span className="text-white font-medium">{pos.pl}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-slate-500 uppercase font-semibold text-[10px]">Avg Buy</span>
                    <span className="text-white font-medium">{pos.avgBuy}</span>
                </div>
                <div className="flex flex-col text-right">
                    <span className="text-slate-500 uppercase font-semibold text-[10px]">Avg Sell</span>
                    <span className="text-white font-medium">{pos.avgSell}</span>
                </div>
            </div>

            <div className="flex justify-between border-t border-white/5 pt-2 mt-2 text-xs">
                <span className="text-slate-500">Brokerage: <span className="text-white">{pos.brokerage}</span></span>
                <span className="text-slate-500">Net P/L: <span className={`font-bold ${parseFloat(pos.netPl) >= 0 ? 'text-green-400' : 'text-red-400'}`}>{pos.netPl}</span></span>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col h-full bg-[#1a2035] p-2 md:p-4 space-y-6 overflow-y-auto custom-scrollbar">
            {/* Header Section from screenshot style */}
            <div className="bg-[#1f283e] rounded-sm shadow-xl border border-white/5 overflow-hidden">
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-slate-300 text-sm font-semibold bg-[#1f283e]">
                                <th className="px-6 py-5 border-b border-white/10">Scrip</th>
                                <th className="px-6 py-5 border-b border-white/10 text-center">Lots</th>
                                <th className="px-6 py-5 border-b border-white/10 text-center">Avg buy rate</th>
                                <th className="px-6 py-5 border-b border-white/10 text-center">Avg sell rate</th>
                                <th className="px-6 py-5 border-b border-white/10 text-center">Profit / Loss</th>
                                <th className="px-6 py-5 border-b border-white/10 text-center">Brokerage</th>
                                <th className="px-6 py-5 border-b border-white/10 text-center pr-12">Net P/L</th>
                            </tr>
                        </thead>
                        <tbody className="text-[14px] text-slate-300">
                            {closedPositions.map((pos, idx) => (
                                <tr key={idx} className="border-b border-white/5 hover:bg-slate-800/30 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-200 uppercase tracking-tight">
                                        {pos.scrip}
                                    </td>
                                    <td className="px-6 py-4 text-center">{pos.lots}</td>
                                    <td className="px-6 py-4 text-center">{pos.avgBuy}</td>
                                    <td className="px-6 py-4 text-center">{pos.avgSell}</td>
                                    <td className={`px-6 py-4 text-center font-bold ${parseFloat(pos.pl) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        {pos.pl}
                                    </td>
                                    <td className="px-6 py-4 text-center text-slate-400">{pos.brokerage}</td>
                                    <td className={`px-6 py-4 text-center pr-12 font-bold ${parseFloat(pos.netPl) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        {pos.netPl}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Mobile Card List View */}
            <div className="md:hidden space-y-3 pb-8">
                {closedPositions.map((pos, idx) => (
                    <MobileClosedPositionCard key={idx} pos={pos} />
                ))}
            </div>
        </div>
    );
};

export default ClosedPositionsPage;

