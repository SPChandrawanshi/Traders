import React, { useState } from 'react';
import { Search, RotateCcw, Eye, Edit2, Trash2, ChevronUp } from 'lucide-react';

const GroupTradesPage = () => {
    const tradesData = [
        { id: 4239542, scrip: "SILVERMIC26FEBFUT", segment: "MCX", userId: "5128 SHRE0373 : 0Hem", buyRate: "240476", sellRate: "242616", lots: "1 / 1", boughtAt: "2026-02-02 23:46:56" },
        { id: 4239521, scrip: "SILVERMIC26FEBFUT", segment: "MCX", userId: "3658 SHRE0116 : Raj bir kapil jind", buyRate: "240715", sellRate: "241008", lots: "1 / 1", boughtAt: "2026-02-02 23:45:20" },
        { id: 4239457, scrip: "SILVER26MARFUT", segment: "MCX", userId: "4334 SHRE0259 : Subhash bhavar", buyRate: "237478", sellRate: "237845", lots: "1 / 30", boughtAt: "2026-02-02 23:33:32" },
        { id: 4239455, scrip: "SILVERMIC26FEBFUT", segment: "MCX", userId: "3658 SHRE0116 : Raj bir kapil jind", buyRate: "245190", sellRate: "247076", lots: "1 / 1", boughtAt: "2026-02-02 23:33:03" },
        { id: 4239436, scrip: "GOLDM26MARFUT", segment: "MCX", userId: "3265 SHRE074 : Dinesh jind", buyRate: "142394", sellRate: "142525", lots: "4 / 40", boughtAt: "2026-02-02 23:31:01" },
        { id: 4239183, scrip: "SILVERMIC26FEBFUT", segment: "MCX", userId: "3658 SHRE0116 : Raj bir kapil jind", buyRate: "249444", sellRate: "250858", lots: "1 / 1", boughtAt: "2026-02-02 22:46:33" },
        { id: 4238784, scrip: "SILVER26FEBFUT", segment: "MCX", userId: "3658 SHRE0116 : Raj bir kapil jind", buyRate: "248596", sellRate: "250659", lots: "1 / 1", boughtAt: "2026-02-02 21:50:49" },
        { id: 4238783, scrip: "SILVERMIC26FEBFUT", segment: "MCX", userId: "4378 SHRE0284 : Arjun jain", buyRate: "251003", sellRate: "250000", lots: "1 / 1", boughtAt: "2026-02-02 21:51:46" },
        { id: 4238770, scrip: "SILVER26FEBFUT", segment: "MCX", userId: "4378 SHRE0284 : Arjun jain", buyRate: "247798", sellRate: "249803", lots: "1 / 1", boughtAt: "2026-02-02 21:49:48" },
        { id: 4238512, scrip: "SILVERMIC26FEBFUT", segment: "MCX", userId: "4378 SHRE0284 : Arjun jain", buyRate: "238964", sellRate: "243500", lots: "1 / 1", boughtAt: "2026-02-02 21:32:37" },
        { id: 4238355, scrip: "SILVERMIC26FEBFUT", segment: "MCX", userId: "5128 SHRE0373 : 0Hem", buyRate: "245000", sellRate: "243049", lots: "1 / 1", boughtAt: "2026-02-02 21:17:51" },
        { id: 4238202, scrip: "CRUDEOIL26FEBFUT", segment: "MCX", userId: "3761 SHRE0308 : Kapil jind", buyRate: "5700", sellRate: "5699", lots: "1 / 100", boughtAt: "2026-02-02 21:03:02" },
        { id: 4238186, scrip: "SILVERM26FEBFUT", segment: "MCX", userId: "3690 SHRE0122 : Narayanlal", buyRate: "245318", sellRate: "250746", lots: "1 / 5", boughtAt: "2026-02-02 21:02:36" },
        { id: 4238185, scrip: "SILVERM26FEBFUT", segment: "MCX", userId: "4364 SHRE0276 : Mahendar chouhan", buyRate: "245427", sellRate: "250155", lots: "1 / 5", boughtAt: "2026-02-02 21:02:35" },
        { id: 4238183, scrip: "GOLDM26MARFUT", segment: "MCX", userId: "3658 SHRE0116 : Raj bir kapil jind", buyRate: "143174", sellRate: "142701", lots: "1 / 10", boughtAt: "2026-02-02 21:02:31" },
        { id: 4238174, scrip: "GOLDM26MARFUT", segment: "MCX", userId: "3761 SHRE0308 : Kapil jind", buyRate: "143099", sellRate: "143246", lots: "1 / 10", boughtAt: "2026-02-02 21:00:52" },
    ];

    return (
        <div className="flex flex-col h-full text-[#a0aec0]">
            {/* Filter Bar */}
            <div className="bg-[#151c2c] p-6 rounded-lg border border-[#2d3748] mb-6 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                    <div className="space-y-1">
                        <label className="text-[10px] font-medium uppercase tracking-wider text-slate-500">ID</label>
                        <input type="text" className="w-full bg-transparent border-b border-slate-700 text-white py-1 focus:outline-none focus:border-[#4CAF50] transition-colors text-sm" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-medium uppercase tracking-wider text-slate-500">Scrip</label>
                        <input type="text" className="w-full bg-transparent border-b border-slate-700 text-white py-1 focus:outline-none focus:border-[#4CAF50] transition-colors text-sm" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-medium uppercase tracking-wider text-slate-500">Segment</label>
                        <input type="text" className="w-full bg-transparent border-b border-slate-700 text-white py-1 focus:outline-none focus:border-[#4CAF50] transition-colors text-sm" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-medium uppercase tracking-wider text-slate-500">User ID</label>
                        <input type="text" className="w-full bg-transparent border-b border-slate-700 text-white py-1 focus:outline-none focus:border-[#4CAF50] transition-colors text-sm" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                    <div className="space-y-1">
                        <label className="text-[10px] font-medium uppercase tracking-wider text-slate-500">Buy Rate</label>
                        <input type="text" className="w-full bg-transparent border-b border-slate-700 text-white py-1 focus:outline-none focus:border-[#4CAF50] transition-colors text-sm" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-medium uppercase tracking-wider text-slate-500">Sell Rate</label>
                        <input type="text" className="w-full bg-transparent border-b border-slate-700 text-white py-1 focus:outline-none focus:border-[#4CAF50] transition-colors text-sm" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-medium uppercase tracking-wider text-slate-500 flex items-center gap-1">
                            Lots / Units
                        </label>
                        <select className="w-full bg-transparent border-b border-slate-700 text-white py-1 focus:outline-none focus:border-[#4CAF50] transition-colors text-sm appearance-none">
                            <option value="all">All</option>
                        </select>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex-1 bg-[#4CAF50] hover:bg-green-600 text-white py-2 rounded text-[11px] font-bold uppercase tracking-widest transition-all">
                            SEARCH
                        </button>
                        <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded text-[11px] font-bold uppercase tracking-widest transition-all">
                            RESET
                        </button>
                    </div>
                </div>
            </div>

            <div className="mb-4 flex items-center gap-2">
                <span className="text-sm font-medium">Showing <span className="text-white">20</span> of <span className="text-white">112</span> items.</span>
            </div>

            {/* Trades Table */}
            <div className="flex-1 bg-[#151c2c] rounded-lg border border-[#2d3748] overflow-hidden flex flex-col shadow-xl">
                <div className="overflow-x-auto overflow-y-auto custom-scrollbar flex-1">
                    <table className="w-full text-left border-collapse min-w-[1200px]">
                        <thead className="sticky top-0 bg-[#0b111e] z-10">
                            <tr className="text-white text-[11px] font-bold uppercase tracking-wider border-b border-[#2d3748]">
                                <th className="px-4 py-4 w-24">Actions</th>
                                <th className="px-4 py-4 w-24">
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
                                <th className="px-4 py-4">Bought at</th>
                            </tr>
                        </thead>
                        <tbody className="text-[12px]">
                            {tradesData.map((trade, idx) => (
                                <tr key={idx} className="bg-[#a67c00] border-b border-[#8b6900] text-white hover:brightness-110 transition-all font-medium">
                                    <td className="px-4 py-3">
                                        <div className="flex gap-2 text-white">
                                            <Eye className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform" />
                                            <Edit2 className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform" />
                                            <Trash2 className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform" />
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">{trade.id}</td>
                                    <td className="px-4 py-3">{trade.scrip}</td>
                                    <td className="px-4 py-3 font-bold">{trade.segment}</td>
                                    <td className="px-4 py-3 tracking-wide">{trade.userId}</td>
                                    <td className="px-4 py-3 font-mono">{trade.buyRate}</td>
                                    <td className="px-4 py-3 font-mono">{trade.sellRate}</td>
                                    <td className="px-4 py-3">{trade.lots}</td>
                                    <td className="px-4 py-3 text-[11px] font-mono">{trade.boughtAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination */}
            <div className="py-6 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <span className="text-slate-500 font-bold text-lg cursor-pointer hover:text-white transition-colors">{'<<'}</span>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-slate-800 text-[15px] font-bold cursor-pointer transition-all shadow-lg scale-110 z-10">1</div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white text-[15px] font-bold border border-slate-700 cursor-pointer transition-all">2</div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white text-[15px] font-bold border border-slate-700 cursor-pointer transition-all">3</div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white text-[15px] font-bold border border-slate-700 cursor-pointer transition-all">4</div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white text-[15px] font-bold border border-slate-700 cursor-pointer transition-all">5</div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white text-[15px] font-bold border border-slate-700 cursor-pointer transition-all">6</div>
                    <span className="text-slate-500 font-bold text-lg cursor-pointer hover:text-white transition-colors">{'>>'}</span>
                </div>
                {/* Decorative horizontal scrollbar look-alike as seen in screenshot */}
                <div className="h-2 w-full bg-[#151c2c] rounded-full border border-[#2d3748] relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-slate-500/30 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default GroupTradesPage;
