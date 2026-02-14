import React, { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';

const ClosedTradesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
      fromDate: '',
      toDate: '',
      id: '',
      scrip: '',
    });

    const trades = [
        {
            id: '4239381',
            scrip: 'GOLDM26MARFUT',
            buyRate: '142444',
            sellRate: '142880',
            lots: '1 / 10',
            buyTurnover: '1424440',
            sellTurnover: '1428800',
            pl: '4360',
            brokerage: '285.32',
            boughtAt: '2026-02-02 23:10:17',
            soldAt: '2026-02-02 23:22:48',
            buyIp: '152.58.28.60'
        },
        {
            id: '4238404',
            scrip: 'GOLDM26MARFUT',
            buyRate: '143093',
            sellRate: '144280',
            lots: '1 / 10',
            buyTurnover: '1430930',
            sellTurnover: '1442800',
            pl: '11870',
            brokerage: '287.37',
            boughtAt: '2026-02-02 21:22:53',
            soldAt: '2026-02-02 21:10:59',
            buyIp: '152.58.4.15'
        },
    ];

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const MobileClosedTradeCard = ({ trade }) => (
        <div className="bg-[#151c2c] p-4 rounded-lg border border-[#2d3748] shadow-md mb-3">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <span className="text-xs text-slate-400 font-mono">#{trade.id}</span>
                    <h3 className="text-white font-bold text-sm uppercase mt-0.5">{trade.scrip}</h3>
                </div>
                <div className={`text-sm font-bold ${parseFloat(trade.pl) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {trade.pl}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs mb-3 border-t border-[#2d3748] pt-2">
                <div className="flex flex-col">
                    <span className="text-slate-500">Buy Rate</span>
                    <span className="text-white font-medium">{trade.buyRate}</span>
                </div>
                <div className="flex flex-col text-right">
                    <span className="text-slate-500">Sell Rate</span>
                    <span className="text-white font-medium">{trade.sellRate}</span>
                </div>
            </div>
            
             <div className="text-[10px] text-slate-400 flex flex-col gap-1 border-t border-[#2d3748] pt-2">
                <div className="flex justify-between">
                    <span>Bought:</span>
                    <span className="text-slate-300">{trade.boughtAt}</span>
                </div>
                <div className="flex justify-between">
                    <span>Sold:</span>
                    <span className="text-slate-300">{trade.soldAt}</span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col h-full bg-[#0b111e] p-4 md:p-6 space-y-6 overflow-y-auto custom-scrollbar animate-fade-in">
             {/* Header */}
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                 <div>
                      <h2 className="text-xl md:text-2xl font-normal text-slate-300 tracking-tight">Closed Trades</h2>
                      <div className="h-1 w-20 bg-[#4CAF50] mt-1 rounded-full opacity-80" />
                 </div>
                 
                 <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto items-end">
                     <div className="flex gap-2">
                        <input type="date" className="bg-white text-slate-900 text-xs py-2 px-3 rounded outline-none" placeholder="From Date" />
                        <input type="date" className="bg-white text-slate-900 text-xs py-2 px-3 rounded outline-none" placeholder="To Date" />
                     </div>
                     <button className="bg-[#00BCD4] hover:bg-cyan-600 text-white font-bold py-2.5 px-6 rounded shadow-lg uppercase tracking-wider text-[11px] transition-all w-full md:w-auto">
                        EXPORT TRADES
                    </button>
                </div>
            </div>

             {/* Filter Section */}
             <div className="bg-[#151c2c] p-6 rounded border border-[#2d3748] shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                    <div className="border-b border-[#2d3748]">
                        <label className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">ID</label>
                        <input type="text" name="id" value={filters.id} onChange={handleFilterChange} className="bg-transparent w-full text-slate-200 text-sm py-1 outline-none" />
                    </div>
                    <div className="border-b border-[#2d3748]">
                        <label className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Scrip</label>
                        <input type="text" name="scrip" value={filters.scrip} onChange={handleFilterChange} className="bg-transparent w-full text-slate-200 text-sm py-1 outline-none" />
                    </div>
                </div>
                
                 <div className="flex gap-2">
                    <button className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-2 px-6 rounded shadow uppercase tracking-wider text-[10px] transition-all">
                        SEARCH
                    </button>
                    <button className="bg-[#607d8b] hover:bg-slate-500 text-white font-bold py-2 px-6 rounded shadow uppercase tracking-wider text-[10px] transition-all">
                        RESET
                    </button>
                </div>
            </div>

            <div className="mb-2 flex items-center gap-2">
                <span className="text-xs text-slate-400 font-medium">Showing <span className="text-white font-bold">{trades.length}</span> items.</span>
            </div>

             {/* Desktop Table View */}
             <div className="hidden md:block bg-[#151c2c] rounded border border-[#2d3748] overflow-hidden shadow-xl overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[1200px] whitespace-nowrap">
                    <thead>
                        <tr className="text-slate-300 text-[12px] font-semibold border-b border-[#2d3748] bg-[#151c2c]">
                            <th className="px-4 py-3 cursor-pointer flex items-center gap-1 group whitespace-nowrap">
                                ID <ArrowUpDown className="w-3 h-3 text-slate-500 group-hover:text-white" />
                            </th>
                            <th className="px-4 py-3">Scrip</th>
                            <th className="px-4 py-3">Buy Rate</th>
                            <th className="px-4 py-3">Sell Rate</th>
                            <th className="px-4 py-3">Lots / Units</th>
                            <th className="px-4 py-3">Buy Turnover</th>
                            <th className="px-4 py-3">Sell Turnover</th>
                            <th className="px-4 py-3">Profit / Loss</th>
                            <th className="px-4 py-3">Brokerage</th>
                            <th className="px-4 py-3">Bought at</th>
                            <th className="px-4 py-3">Sold at</th>
                            <th className="px-4 py-3">Buy Ip</th>
                        </tr>
                    </thead>
                    <tbody className="text-[12px] text-slate-300 font-medium">
                        {trades.map((trade) => (
                            <tr key={trade.id} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors">
                                <td className="px-4 py-3 font-bold text-white">{trade.id}</td>
                                <td className="px-4 py-3 uppercase font-bold text-[#01B4EA]">
                                    {trade.scrip}
                                </td>
                                <td className="px-4 py-3">{trade.buyRate}</td>
                                <td className="px-4 py-3">{trade.sellRate}</td>
                                <td className="px-4 py-3">{trade.lots}</td>
                                <td className="px-4 py-3">{trade.buyTurnover}</td>
                                <td className="px-4 py-3">{trade.sellTurnover}</td>
                                <td className={`px-4 py-3 font-bold ${parseFloat(trade.pl) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                    {trade.pl}
                                </td>
                                <td className="px-4 py-3 text-slate-400">{trade.brokerage}</td>
                                <td className="px-4 py-3 text-slate-400 text-[11px]">
                                    {trade.boughtAt.replace(' ', '\n')}
                                </td>
                                <td className="px-4 py-3 text-slate-400 text-[11px]">
                                    {trade.soldAt.replace(' ', '\n')}
                                </td>
                                <td className="px-4 py-3 text-slate-400">
                                    {trade.buyIp}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {/* Mobile Card List View */}
            <div className="md:hidden space-y-3 pb-20">
                {trades.map((trade) => (
                    <MobileClosedTradeCard key={trade.id} trade={trade} />
                ))}
            </div>
             {/* Pagination */}
             <div className="py-4 flex justify-center gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 text-white text-xs hover:bg-slate-600">1</button>
            </div>
        </div>
    );
};

export default ClosedTradesPage;
