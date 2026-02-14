import React, { useState } from 'react';
import { Trash2, Search as SearchIcon, RotateCcw, ArrowUp, Edit, Eye } from 'lucide-react';

const GroupTradesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
      fromDate: '',
      toDate: '',
      id: '',
      scrip: '',
      userId: '',
      buyRate: '',
      sellRate: ''
    });

    const tradesData = [
        { id: '4239542', scrip: "SILVERMIC26FEBFUT", segment: "MCX", userId: "5128 SHRE0373 : 0Hem", buyRate: "240476", sellRate: "242616", lots: "1 / 1", boughtAt: "2026-02-02 23:46:56" },
        { id: '4239521', scrip: "SILVERMIC26FEBFUT", segment: "MCX", userId: "3658 SHRE0116 : Raj bir kapil jind", buyRate: "240715", sellRate: "241008", lots: "1 / 1", boughtAt: "2026-02-02 23:45:20" },
        { id: '4239457', scrip: "SILVER26MARFUT", segment: "MCX", userId: "4334 SHRE0259 : Subhash bhavar", buyRate: "237478", sellRate: "237845", lots: "1 / 30", boughtAt: "2026-02-02 23:33:32" },
        { id: '4239455', scrip: "SILVERMIC26FEBFUT", segment: "MCX", userId: "3658 SHRE0116 : Raj bir kapil jind", buyRate: "245190", sellRate: "247076", lots: "1 / 1", boughtAt: "2026-02-02 23:33:03" },
        { id: '4239436', scrip: "GOLDM26MARFUT", segment: "MCX", userId: "3265 SHRE074 : Dinesh jind", buyRate: "142394", sellRate: "142525", lots: "4 / 40", boughtAt: "2026-02-02 23:31:01" },
        { id: '4239183', scrip: "SILVERMIC26FEBFUT", segment: "MCX", userId: "3658 SHRE0116 : Raj bir kapil jind", buyRate: "249444", sellRate: "250858", lots: "1 / 1", boughtAt: "2026-02-02 22:46:33" },
    ];

    const handleFilterChange = (e) => {
      const { name, value } = e.target;
      setFilters(prev => ({ ...prev, [name]: value }));
    };

    const MobileTradeCard = ({ trade }) => (
        <div className="bg-[#151c2c] p-4 rounded-lg border border-[#2d3748] shadow-md mb-3">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <span className="text-xs text-slate-400 font-mono">#{trade.id}</span>
                    <h3 className="text-white font-bold text-sm uppercase mt-0.5">{trade.scrip}</h3>
                    <span className="text-[10px] text-slate-500">{trade.segment}</span>
                </div>
                 <div className="flex flex-col text-right">
                    <span className="text-[10px] text-slate-400">Lots</span>
                    <span className="text-white font-bold">{trade.lots}</span>
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
            
             <div className="flex justify-between items-center bg-[#0b111e] p-2 rounded border border-[#2d3748]">
                 <span className="text-[10px] text-slate-400">{trade.userId}</span>
            </div>

            <div className="flex justify-end gap-3 mt-3 pt-2 border-t border-[#2d3748]">
                 <Eye className="w-4 h-4 text-slate-400" />
                 <Edit className="w-4 h-4 text-slate-400" />
                 <Trash2 className="w-4 h-4 text-red-400" />
            </div>
        </div>
      );

    return (
        <div className="flex flex-col h-full bg-[#0b111e] p-4 md:p-6 space-y-6 overflow-y-auto custom-scrollbar animate-fade-in">
             {/* Actions Header */}
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <button className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-2.5 px-6 rounded shadow-lg uppercase tracking-wider text-[11px] transition-all">
                    CREATE GROUP TRADE
                </button>
                
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
                     <div className="border-b border-[#2d3748]">
                        <label className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Segment</label>
                        <input type="text" name="segment" value={filters.segment} onChange={handleFilterChange} className="bg-transparent w-full text-slate-200 text-sm py-1 outline-none" />
                    </div>
                     <div className="border-b border-[#2d3748]">
                        <label className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">User ID</label>
                        <input type="text" name="userId" value={filters.userId} onChange={handleFilterChange} className="bg-transparent w-full text-slate-200 text-sm py-1 outline-none" />
                    </div>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                    <div className="border-b border-[#2d3748]">
                        <label className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Buy Rate</label>
                        <input type="text" name="buyRate" value={filters.buyRate} onChange={handleFilterChange} className="bg-transparent w-full text-slate-200 text-sm py-1 outline-none" />
                    </div>
                    <div className="border-b border-[#2d3748]">
                        <label className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Sell Rate</label>
                        <input type="text" name="sellRate" value={filters.sellRate} onChange={handleFilterChange} className="bg-transparent w-full text-slate-200 text-sm py-1 outline-none" />
                    </div>
                     <div className="border-b border-[#2d3748]">
                        <label className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Lots / Units</label>
                         <select className="bg-transparent w-full text-slate-200 text-sm py-1 outline-none appearance-none">
                             <option value="All" className="bg-[#151c2c]">All</option>
                         </select>
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
                <span className="text-xs text-slate-400 font-medium">Showing <span className="text-white font-bold">{tradesData.length}</span> items.</span>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block bg-[#151c2c] rounded border border-[#2d3748] overflow-hidden shadow-xl">
                <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full text-left border-collapse whitespace-nowrap">
                         <thead>
                            <tr className="text-slate-300 text-[12px] font-semibold border-b border-[#2d3748] bg-[#151c2c]">
                                <th className="px-4 py-3 w-24">Actions</th>
                                <th className="px-4 py-3">ID <ArrowUp className="w-3 h-3 inline ml-1 text-[#FDD835]" /></th>
                                <th className="px-4 py-3">Scrip</th>
                                <th className="px-4 py-3">Segment</th>
                                <th className="px-4 py-3">User ID</th>
                                <th className="px-4 py-3">Buy Rate</th>
                                <th className="px-4 py-3">Sell Rate</th>
                                <th className="px-4 py-3">Lots / Units</th>
                                <th className="px-4 py-3">Bought at</th>
                            </tr>
                        </thead>
                        <tbody className="text-[12px] text-slate-300">
                             {tradesData.map((trade) => (
                                <tr key={trade.id} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors">
                                    <td className="px-4 py-3">
                                        <div className="flex gap-2 text-slate-400">
                                            <Eye className="w-4 h-4 cursor-pointer hover:text-blue-400" />
                                            <Edit className="w-4 h-4 cursor-pointer hover:text-green-400" />
                                            <Trash2 className="w-4 h-4 cursor-pointer hover:text-red-400" />
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">{trade.id}</td>
                                    <td className="px-4 py-3 text-[#01B4EA]">{trade.scrip}</td>
                                    <td className="px-4 py-3">{trade.segment}</td>
                                    <td className="px-4 py-3">{trade.userId}</td>
                                    <td className="px-4 py-3 font-mono">{trade.buyRate}</td>
                                    <td className="px-4 py-3 font-mono">{trade.sellRate}</td>
                                    <td className="px-4 py-3">{trade.lots}</td>
                                    <td className="px-4 py-3">{trade.boughtAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Mobile Card List View */}
            <div className="md:hidden space-y-3 pb-20">
                {tradesData.map((trade) => (
                    <MobileTradeCard key={trade.id} trade={trade} />
                ))}
            </div>

             {/* Pagination */}
             <div className="py-4 flex justify-center gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 text-white text-xs hover:bg-slate-600">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent border border-slate-700 text-slate-400 text-xs hover:border-slate-500 hover:text-white">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent border border-slate-700 text-slate-400 text-xs hover:border-slate-500 hover:text-white">3</button>
            </div>
        </div>
    );
};

export default GroupTradesPage;
