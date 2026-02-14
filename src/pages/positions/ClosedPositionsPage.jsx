import React from 'react';

const ClosedPositionsPage = () => {
    // Mock data for closed positions (Net = 0)
    const closedPositions = [
        { scrip: 'CRUDEOIL26FEB5800CE', buyQty: '500', sellQty: '500', avgBuy: '155.0', avgSell: '165.0', net: '0', pl: '5000' },
        { scrip: 'GOLDM26MARFUT', buyQty: '10', sellQty: '10', avgBuy: '62000', avgSell: '62100', net: '0', pl: '1000' },
        { scrip: 'SILVERMIC26FEBFUT', buyQty: '50', sellQty: '50', avgBuy: '72500', avgSell: '72400', net: '0', pl: '-5000' },
    ];

    const MobileClosedPositionCard = ({ pos }) => (
        <div className="bg-[#151c2c] p-4 rounded-lg border border-[#2d3748] shadow-md mb-3 active:scale-[0.98] transition-transform">
            <div className="flex justify-between items-center mb-3">
                 <span className="bg-[#9E9E9E] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide truncate max-w-[200px]">
                    {pos.scrip}
                </span>
                <span className={`text-sm font-bold ${parseFloat(pos.pl) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {pos.pl}
                </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                 <div className="flex flex-col">
                    <span className="text-slate-500">Buy Qty</span>
                    <span className="text-white font-medium">{pos.buyQty}</span>
                </div>
                 <div className="flex flex-col text-right">
                    <span className="text-slate-500">Sell Qty</span>
                    <span className="text-white font-medium">{pos.sellQty}</span>
                </div>
                 <div className="flex flex-col">
                    <span className="text-slate-500">Avg Buy</span>
                    <span className="text-white font-medium">{pos.avgBuy}</span>
                </div>
                 <div className="flex flex-col text-right">
                    <span className="text-slate-500">Avg Sell</span>
                    <span className="text-white font-medium">{pos.avgSell}</span>
                </div>
            </div>
            
            <div className="flex justify-center border-t border-[#2d3748] pt-2 mt-2 text-xs">
                 <div className="flex gap-2">
                    <span className="text-slate-500">Net Qty:</span>
                    <span className="text-white font-bold">{pos.net}</span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col h-full bg-[#0b111e] p-4 md:p-6 space-y-6 overflow-y-auto custom-scrollbar">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-200 tracking-tight">Closed Positions</h1>
             
             {/* Desktop Table View */}
             <div className="hidden md:block bg-[#151c2c] rounded border border-[#2d3748] overflow-hidden shadow-xl">
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
                            <tr key={pos.scrip} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors">
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

            {/* Mobile Card List View */}
            <div className="md:hidden space-y-3 pb-20">
                {closedPositions.map((pos, idx) => (
                    <MobileClosedPositionCard key={pos.scrip} pos={pos} />
                ))}
            </div>
        </div>
    );
};

export default ClosedPositionsPage;
