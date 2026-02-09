import React, { useState } from 'react';
import { Search, RotateCcw, Eye, Edit2, Trash2, ChevronUp, ChevronDown } from 'lucide-react';

const ClosedTradesPage = () => {
    const [filters, setFilters] = useState({
        timeDiff: '',
        scrip: '',
        username: ''
    });

    const tradesData = [
        { id: 4239729, scrip: "GCg6", segment: "COMEX", userId: "3214 Demo0721 : Rathore", buyRate: "144500.00000000", sellRate: "4581.00000000", lots: "1 / 100" },
        { id: 4239728, scrip: "SIh6", segment: "COMEX", userId: "3214 Demo0721 : Rathore", buyRate: "81.03500000", sellRate: "85.26000000", lots: "1 / 5000" },
        { id: 4239727, scrip: "SIh6", segment: "COMEX", userId: "3214 Demo0721 : Rathore", buyRate: "81.03500000", sellRate: "85.26000000", lots: "1 / 5000" },
        { id: 4239726, scrip: "CLh6", segment: "COMEX", userId: "3214 Demo0721 : Rathore", buyRate: "65.73000000", sellRate: "62.19000000", lots: "3 / 3000" },
        { id: 4239725, scrip: "CRUDEOIL26FEBFUT", segment: "MCX", userId: "3214 Demo0721 : Rathore", buyRate: "5993.00000000", sellRate: "5620.00000000", lots: "4 / 400" },
        { id: 4239724, scrip: "GOLD26FEBFUT", segment: "MCX", userId: "3214 Demo0721 : Rathore", buyRate: "142100.00000000", sellRate: "139000.00000000", lots: "1 / 100" },
        { id: 4239661, scrip: "GOLDM26FEBFUT", segment: "MCX", userId: "4334 SHRE0259 : Subhash bhavar", buyRate: "141540.00000000", sellRate: "141201.00000000", lots: "2 / 20" },
        { id: 4239521, scrip: "SILVERMIC26FEBFUT", segment: "MCX", userId: "3658 SHRE0116 : Raj bir kapil jind", buyRate: "240715.00000000", sellRate: "241008.00000000", lots: "1 / 1" },
        { id: 4239501, scrip: "SILVERMIC26FEBFUT", segment: "MCX", userId: "3658 SHRE0116 : Raj bir kapil jind", buyRate: "243100.00000000", sellRate: "244503.00000000", lots: "1 / 1" },
        { id: 4239492, scrip: "SILVERM26FEBFUT", segment: "MCX", userId: "4406 SHRE0300 : Satish tehre", buyRate: "244731.00000000", sellRate: "245186.00000000", lots: "1 / 1" },
        { id: 4239457, scrip: "SILVER26MARFUT", segment: "MCX", userId: "4334 SHRE0259 : Subhash bhavar", buyRate: "237478.00000000", sellRate: "237845.00000000", lots: "2 / 2" },
        { id: 4239455, scrip: "SILVERMIC26FEBFUT", segment: "MCX", userId: "3658 SHRE0116 : Raj bir kapil jind", buyRate: "245190.00000000", sellRate: "247076.00000000", lots: "1 / 1" },
        { id: 4239441, scrip: "COPPER26FEBFUT", segment: "MCX", userId: "4390 SHRE0288 : Atul gupta", buyRate: "1223.30000000", sellRate: "1220.95000000", lots: "1 / 1" },
        { id: 4239439, scrip: "COPPER26FEBFUT", segment: "MCX", userId: "4390 SHRE0288 : Atul gupta", buyRate: "1223.30000000", sellRate: "1221.60000000", lots: "1 / 1" },
        { id: 4239438, scrip: "COPPER26FEBFUT", segment: "MCX", userId: "4390 SHRE0288 : Atul gupta", buyRate: "1223.30000000", sellRate: "1221.55000000", lots: "1 / 1" },
    ];

    return (
        <div className="flex flex-col h-full text-[#a0aec0]">
            {/* Filter Bar */}
            <div className="bg-[#151c2c] p-6 rounded-lg border border-[#2d3748] mb-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                    <div className="space-y-2">
                        <label className="text-xs font-medium uppercase tracking-wider text-slate-500">Time Diff.</label>
                        <input
                            type="text"
                            placeholder="No. of seconds"
                            className="w-full bg-transparent border-b border-slate-700 text-white py-1 focus:outline-none focus:border-[#4CAF50] transition-colors text-sm"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-medium uppercase tracking-wider text-slate-500">Scrip</label>
                        <input
                            type="text"
                            placeholder="e.g. GOLD"
                            className="w-full bg-transparent border-b border-slate-700 text-white py-1 focus:outline-none focus:border-[#4CAF50] transition-colors text-sm"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-medium uppercase tracking-wider text-slate-500">Username</label>
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full bg-transparent border-b border-slate-700 text-white py-1 focus:outline-none focus:border-[#4CAF50] transition-colors text-sm"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button className="flex-1 bg-[#4CAF50] hover:bg-green-600 text-white py-2 rounded text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all">
                            <Search className="w-3 h-3" /> Search
                        </button>
                        <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all">
                            <RotateCcw className="w-3 h-3" /> Reset
                        </button>
                    </div>
                </div>
            </div>

            <div className="mb-4 flex items-center gap-2">
                <span className="text-sm font-medium">Showing <span className="text-white">20</span> of <span className="text-white">905</span> items.</span>
            </div>

            {/* Trades Table */}
            <div className="flex-1 bg-[#151c2c] rounded-lg border border-[#2d3748] overflow-hidden flex flex-col shadow-xl">
                <div className="overflow-x-auto overflow-y-auto custom-scrollbar flex-1">
                    <table className="w-full text-left border-collapse min-w-[1000px]">
                        <thead className="sticky top-0 bg-[#0b111e] z-10">
                            <tr className="text-white text-[11px] font-bold uppercase tracking-wider border-b border-[#2d3748]">
                                <th className="px-4 py-4 w-12 text-center">
                                    <input type="checkbox" className="w-4 h-4 rounded border-[#2d3748] bg-[#0b111e] checked:bg-[#4CAF50]" />
                                </th>
                                <th className="px-4 py-4 w-24">Actions</th>
                                <th className="px-4 py-4">
                                    <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                                        ID <ChevronUp className="w-3 h-3" />
                                    </div>
                                </th>
                                <th className="px-4 py-4">Scrip</th>
                                <th className="px-4 py-4">Segment</th>
                                <th className="px-4 py-4">User ID</th>
                                <th className="px-4 py-4">Buy Rate</th>
                                <th className="px-4 py-4">Sell Rate</th>
                                <th className="px-4 py-4">Lots / Units</th>
                            </tr>
                        </thead>
                        <tbody className="text-[12px]">
                            {tradesData.map((trade, idx) => (
                                <tr key={trade.id} className={`${idx % 2 === 0 ? '' : 'bg-[#1c2638]/30'} border-b border-[#2d3748] hover:bg-[#1c2638] transition-colors group`}>
                                    <td className="px-4 py-4 text-center">
                                        <input type="checkbox" className="w-4 h-4 rounded border-[#2d3748] bg-[#0b111e]" />
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="flex gap-2 text-slate-400">
                                            <Eye className="w-4 h-4 cursor-pointer hover:text-white" />
                                            <Edit2 className="w-4 h-4 cursor-pointer hover:text-white" />
                                            <Trash2 className="w-4 h-4 cursor-pointer hover:text-red-400" />
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-white font-medium">{trade.id}</td>
                                    <td className="px-4 py-4 text-white">{trade.scrip}</td>
                                    <td className="px-4 py-4 font-bold text-xs">{trade.segment}</td>
                                    <td className="px-4 py-4 text-white">{trade.userId}</td>
                                    <td className="px-4 py-4 text-white font-mono">{trade.buyRate}</td>
                                    <td className="px-4 py-4 text-white font-mono">{trade.sellRate}</td>
                                    <td className="px-4 py-4 text-white">{trade.lots}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="py-6 flex flex-col gap-6">
                <div>
                    <button className="bg-[#9c27b0] hover:bg-[#7b1fa2] text-white px-6 py-2 rounded text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-purple-900/20 transition-all">
                        Delete Trades
                    </button>
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2">
                    <span className="text-slate-500 cursor-pointer hover:text-white transition-colors">{'<<'}</span>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-slate-800 text-[13px] font-bold cursor-pointer">1</div>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-slate-800 text-white text-[13px] font-bold border border-slate-700 cursor-pointer transition-all">2</div>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-slate-800 text-white text-[13px] font-bold border border-slate-700 cursor-pointer transition-all">3</div>
                    <span className="text-slate-500">...</span>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-slate-800 text-white text-[13px] font-bold border border-slate-700 cursor-pointer transition-all">45</div>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-slate-800 text-white text-[13px] font-bold border border-slate-700 cursor-pointer transition-all">46</div>
                    <span className="text-slate-500 cursor-pointer hover:text-white transition-colors">{'>>'}</span>
                </div>
            </div>
        </div>
    );
};

export default ClosedTradesPage;
