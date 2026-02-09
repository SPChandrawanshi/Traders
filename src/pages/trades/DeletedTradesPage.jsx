import React, { useState } from 'react';
import { Search, RotateCcw, Trash2, ChevronUp } from 'lucide-react';

const DeletedTradesPage = () => {
    const [view, setView] = useState('list'); // 'list' or 'confirm'
    const [selectedTrade, setSelectedTrade] = useState(null);
    const [transactionPassword, setTransactionPassword] = useState('');

    const tradesData = [
        { id: 4238782, scrip: "GOLD26AFRFUT", segment: "MCX", userId: "4424 SHRE043 : Lv", buyRate: "144696.00000000", sellRate: "145201.00000000", lots: "0.2 lots", profitLoss: "10101", time: "-1577", timeDiff: "-1577 secs", boughtAt: "2026-02-02 10:29:42" },
        { id: 4238684, scrip: "SILVER26MARFUT", segment: "MCX", userId: "4424 SHRE043 : Lv", buyRate: "235926.00000000", sellRate: "238135.00000000", lots: "0.2 lots", profitLoss: "13254", time: "524 s", timeDiff: "524 secs", boughtAt: "2026-02-02 14:34:34" },
        { id: 4238622, scrip: "GOLD26AFRFUT", segment: "MCX", userId: "4424 SHRE043 : Lv", buyRate: "148359.00000000", sellRate: "148933.00000000", lots: "0.02 lots", profitLoss: "1148", time: "-693 s", timeDiff: "-693 secs", boughtAt: "2026-02-02 20:15:55" },
        { id: 4238339, scrip: "COPPER26FEBFUT", segment: "MCX", userId: "3766 SHRE0341 : Vinita jain", buyRate: "1227.30000000", sellRate: "1227.30000000", lots: "0 lots", profitLoss: "0", time: "secs", timeDiff: "secs", boughtAt: "---" },
        { id: 4238328, scrip: "COPPER26FEBFUT", segment: "MCX", userId: "3766 SHRE0341 : Vinita jain", buyRate: "1236.00000000", sellRate: "1236.00000000", lots: "0 lots", profitLoss: "0", time: "secs", timeDiff: "secs", boughtAt: "---" },
        { id: 4237729, scrip: "GOLD26AFRFUT", segment: "MCX", userId: "4424 SHRE043 : Lv", buyRate: "148359.00000000", sellRate: "148933.00000000", lots: "0.5 lots", profitLoss: "28700", time: "693 s", timeDiff: "693 secs", boughtAt: "2026-02-02 20:15:55" },
        { id: 4237725, scrip: "GOLD26AFRFUT", segment: "MCX", userId: "4424 SHRE043 : Lv", buyRate: "148382.00000000", sellRate: "148933.00000000", lots: "0.2 lots", profitLoss: "11020", time: "681 s", timeDiff: "681 secs", boughtAt: "2026-02-02 20:15:43" },
        { id: 4237722, scrip: "GOLD26AFRFUT", segment: "MCX", userId: "4424 SHRE043 : Lv", buyRate: "148385.00000000", sellRate: "148933.00000000", lots: "0.1 lots", profitLoss: "5480", time: "667 s", timeDiff: "667 secs", boughtAt: "2026-02-02 20:15:29" },
        { id: 4237260, scrip: "COPPER26FEBFUT", segment: "MCX", userId: "3766 SHRE0341 : Vinita jain", buyRate: "1227.30000000", sellRate: "1227.30000000", lots: "0 lots", profitLoss: "0", time: "secs", timeDiff: "secs", boughtAt: "---" },
    ];

    const handleDeleteClick = (trade) => {
        setSelectedTrade(trade);
        setView('confirm');
    };

    const handleRemoveTrade = () => {
        // Mock logic
        alert(`Trade ${selectedTrade.id} removed permanently.`);
        setView('list');
        setSelectedTrade(null);
        setTransactionPassword('');
    };

    if (view === 'confirm') {
        return (
            <div className="flex flex-col h-full text-[#a0aec0]">
                <div className="mb-8">
                    <div className="inline-block bg-[#4CAF50] text-white px-4 py-2 rounded-md shadow-sm">
                        <h2 className="text-base font-semibold uppercase tracking-tight">Delete Trade</h2>
                    </div>
                </div>

                <div className="bg-[#151c2c] p-8 rounded-lg border border-[#2d3748] shadow-xl space-y-8">
                    <p className="text-sm">
                        You are about to delete trade of <span className="text-white font-semibold">{selectedTrade?.lots}</span> of
                        <span className="text-white font-semibold"> {selectedTrade?.scrip}</span> of
                        <span className="text-white font-semibold"> {selectedTrade?.userId}</span>.
                        Trade will be removed permanently. Enter Transaction Password to continue.
                    </p>

                    <div className="space-y-2">
                        <label className="block text-slate-400 text-sm font-medium">Transaction Password</label>
                        <input
                            type="password"
                            value={transactionPassword}
                            onChange={(e) => setTransactionPassword(e.target.value)}
                            className="w-full md:w-1/2 bg-transparent border-b border-slate-700 text-white py-1 focus:outline-none focus:border-[#4CAF50] transition-colors"
                        />
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={handleRemoveTrade}
                            className="bg-[#4CAF50] hover:bg-green-600 text-white font-medium py-2 px-8 rounded transition-all uppercase text-xs tracking-wider"
                        >
                            REMOVE TRADE
                        </button>
                        <button
                            onClick={() => setView('list')}
                            className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-8 rounded transition-all uppercase text-xs tracking-wider"
                        >
                            CANCEL
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full text-[#a0aec0]">
            {/* Filter Bar */}
            <div className="bg-[#151c2c] p-6 rounded-lg border border-[#2d3748] mb-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                    <div className="space-y-2 col-span-2">
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

            <div className="mb-4 flex items-center gap-2 text-sm font-medium">
                <span>Showing <span className="text-white font-bold">19</span> of <span className="text-white font-bold">19</span> items.</span>
            </div>

            {/* Trades Table */}
            <div className="flex-1 bg-[#151c2c] rounded-lg border border-[#2d3748] overflow-hidden flex flex-col shadow-xl">
                <div className="overflow-x-auto overflow-y-auto custom-scrollbar flex-1">
                    <table className="w-full text-left border-collapse min-w-[1200px]">
                        <thead className="sticky top-0 bg-[#0b111e] z-10">
                            <tr className="text-white text-[11px] font-bold uppercase tracking-wider border-b border-[#2d3748]">
                                <th className="px-4 py-4 w-12 text-center"></th>
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
                                <th className="px-4 py-4">Profit/Loss</th>
                                <th className="px-4 py-4">Time Diff</th>
                                <th className="px-4 py-4">Bought at</th>
                            </tr>
                        </thead>
                        <tbody className="text-[12px]">
                            {tradesData.map((trade, idx) => (
                                <tr key={idx} className={`${idx % 2 === 0 ? '' : 'bg-[#1c2638]/30'} border-b border-[#2d3748] hover:bg-[#1c2638] transition-colors group`}>
                                    <td className="px-4 py-4 text-center">
                                        <Trash2
                                            className="w-4 h-4 cursor-pointer text-slate-500 hover:text-red-400 transition-colors inline-block"
                                            onClick={() => handleDeleteClick(trade)}
                                        />
                                    </td>
                                    <td className="px-4 py-4 text-white font-bold">{trade.id}</td>
                                    <td className="px-4 py-4 text-white font-medium">{trade.scrip}</td>
                                    <td className="px-4 py-4 text-xs font-bold">{trade.segment}</td>
                                    <td className="px-4 py-4 text-white">{trade.userId}</td>
                                    <td className="px-4 py-4 text-white font-mono">{trade.buyRate}</td>
                                    <td className="px-4 py-4 text-white font-mono">{trade.sellRate}</td>
                                    <td className="px-4 py-4 text-white font-medium">{trade.lots}</td>
                                    <td className={`px-4 py-4 font-bold ${parseInt(trade.profitLoss) >= 0 ? 'text-green-400' : 'text-red-400'}`}>{trade.profitLoss}</td>
                                    <td className="px-4 py-4 text-white font-mono">{trade.timeDiff}</td>
                                    <td className="px-4 py-4 text-white font-mono text-[11px]">{trade.boughtAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DeletedTradesPage;
