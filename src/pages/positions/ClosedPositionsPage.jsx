import React from 'react';

const ClosedPositionsPage = () => {
    // Mock data for closed positions (Net = 0)
    const closedPositions = [
        { scrip: 'CRUDEOIL26FEB5800CE', buyQty: '500', sellQty: '500', avgBuy: '155.0', avgSell: '165.0', net: '0', pl: '5000' },
        { scrip: 'GOLDM26MARFUT', buyQty: '10', sellQty: '10', avgBuy: '62000', avgSell: '62100', net: '0', pl: '1000' },
        { scrip: 'SILVERMIC26FEBFUT', buyQty: '50', sellQty: '50', avgBuy: '72500', avgSell: '72400', net: '0', pl: '-5000' },
    ];

    return (
        <div className="flex flex-col h-full bg-[#0b111e] p-6 space-y-6 overflow-y-auto custom-scrollbar">
            <h1 className="text-3xl font-bold text-slate-200 tracking-tight">Closed Positions</h1>
             <div className="bg-[#151c2c] rounded border border-[#2d3748] overflow-hidden shadow-xl">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-slate-200 text-sm font-normal border-b border-[#2d3748] bg-[#151c2c]">
                            <th className="px-6 py-4">Scrip</th>
                            <th className="px-6 py-4 text-center">Buy Qty</th>
                            <th className="px-6 py-4 text-center">Sell Qty</th>
                            <th className="px-6 py-4 text-right">Avg Buy</th>
                            <th className="px-6 py-4 text-right">Avg Sell</th>
                            <th className="px-6 py-4 text-center">Net Qty</th>
                            <th className="px-6 py-4 text-right">P/L</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm font-normal text-slate-300">
                        {closedPositions.map((pos, idx) => (
                            <tr key={idx} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors">
                                <td className="px-6 py-4">
                                     <span className="bg-[#9E9E9E] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                        {pos.scrip}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center">{pos.buyQty}</td>
                                <td className="px-6 py-4 text-center">{pos.sellQty}</td>
                                <td className="px-6 py-4 text-right">{pos.avgBuy}</td>
                                <td className="px-6 py-4 text-right">{pos.avgSell}</td>
                                <td className="px-6 py-4 text-center">{pos.net}</td>
                                <td className={`px-6 py-4 text-right font-bold ${parseFloat(pos.pl) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                    {pos.pl}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClosedPositionsPage;
