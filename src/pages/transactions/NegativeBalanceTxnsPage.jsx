import React, { useState } from 'react';
import { Search, RotateCcw, Eye, Download } from 'lucide-react';

const NegativeBalanceTxnsPage = () => {
    const transactions = [
        { id: 6066638, username: "SHRE074", name: "Dinesh jind", amount: "925", txnType: "Added", notes: "Negative Balance Adjustment", createdAt: "2026-02-02 23:04:01" },
        { id: 6066505, username: "SHRE0308", name: "Kapil jind", amount: "1124", txnType: "Added", notes: "Negative Balance Adjustment", createdAt: "2026-02-02 22:47:01" },
        { id: 6066462, username: "SHRE0279", name: "Padam", amount: "1749.5726", txnType: "Added", notes: "Negative Balance Adjustment", createdAt: "2026-02-02 22:44:01" },
        { id: 6066012, username: "SHRE0116", name: "Raj bir kapil jind", amount: "306", txnType: "Added", notes: "Negative Balance Adjustment", createdAt: "2026-02-02 21:59:01" },
        { id: 6066011, username: "SHRE001", name: "Sample User", amount: "500", txnType: "Added", notes: "Negative Balance Adjustment", createdAt: "2026-02-02 21:58:01" },
    ];

    return (
        <div className="flex flex-col h-full text-[#a0aec0] space-y-6">
            {/* Top Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 flex gap-4">
                    <div className="flex-1 bg-white rounded overflow-hidden">
                        <input type="text" placeholder="From Date" className="w-full px-4 py-3 text-slate-500 bg-white focus:outline-none text-sm font-medium" />
                    </div>
                    <div className="flex-1 bg-white rounded overflow-hidden">
                        <input type="text" placeholder="To Date" className="w-full px-4 py-3 text-slate-500 bg-white focus:outline-none text-sm font-medium" />
                    </div>
                </div>
                <button className="bg-[#17a2b8] hover:bg-[#138496] text-white font-bold py-3 px-8 rounded flex items-center justify-center gap-2 text-xs uppercase tracking-widest transition-all">
                    <Download className="w-4 h-4" /> Download Report
                </button>
            </div>

            {/* Secondary Filter Bar */}
            <div className="bg-[#151c2c] p-6 rounded-lg border border-[#2d3748] shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                    <div className="space-y-1">
                        <label className="text-[10px] font-medium uppercase tracking-wider text-slate-500">User ID</label>
                        <input type="text" className="w-full bg-transparent border-b border-slate-700 text-white py-1 focus:outline-none focus:border-[#4CAF50] transition-colors text-sm" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-medium uppercase tracking-wider text-slate-500">Amount</label>
                        <input type="text" className="w-full bg-transparent border-b border-slate-700 text-white py-1 focus:outline-none focus:border-[#4CAF50] transition-colors text-sm" />
                    </div>
                    <div className="flex gap-2 col-span-1 md:col-start-1">
                        <button className="flex-1 bg-[#4CAF50] hover:bg-green-600 text-white py-2 rounded text-[11px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                            <Search className="w-3 h-3" /> SEARCH
                        </button>
                        <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded text-[11px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                            <RotateCcw className="w-3 h-3" /> RESET
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-white text-2xl font-semibold">Total amount adjusted during the week: <span className="text-white">75065.68</span></h2>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium pt-4">
                <span>Showing <span className="text-white font-bold">20</span> of <span className="text-white font-bold">24</span> items.</span>
            </div>

            {/* Transactions Table */}
            <div className="flex-1 bg-[#151c2c] rounded-lg border border-[#2d3748] overflow-hidden flex flex-col shadow-xl">
                <div className="overflow-x-auto overflow-y-auto custom-scrollbar flex-1">
                    <table className="w-full text-left border-collapse min-w-[1000px]">
                        <thead className="sticky top-0 bg-[#0b111e] z-10">
                            <tr className="text-white text-[11px] font-bold uppercase tracking-wider border-b border-[#2d3748]">
                                <th className="px-6 py-5 w-16"></th>
                                <th className="px-6 py-5">
                                    <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                                        ID <span className="text-[9px] align-top">↑↑</span>
                                    </div>
                                </th>
                                <th className="px-6 py-5 uppercase">username</th>
                                <th className="px-6 py-5 uppercase">name</th>
                                <th className="px-6 py-5 uppercase">Amount</th>
                                <th className="px-6 py-5 uppercase">Txn Type</th>
                                <th className="px-6 py-5 uppercase">Notes</th>
                                <th className="px-6 py-5 uppercase">Created At</th>
                            </tr>
                        </thead>
                        <tbody className="text-[13px]">
                            {transactions.map((txn, idx) => (
                                <tr key={txn.id} className="border-b border-[#2d3748] hover:bg-[#1c2638] transition-colors group">
                                    <td className="px-6 py-4">
                                        <Eye className="w-4 h-4 cursor-pointer text-slate-500 group-hover:text-white transition-colors" />
                                    </td>
                                    <td className="px-6 py-4 text-white font-medium">{txn.id}</td>
                                    <td className="px-6 py-4 text-white font-medium">{txn.username}</td>
                                    <td className="px-6 py-4 text-blue-400 font-medium">{txn.name}</td>
                                    <td className="px-6 py-4 text-white font-mono">{txn.amount}</td>
                                    <td className="px-6 py-4 text-white">{txn.txnType}</td>
                                    <td className="px-6 py-4 text-white">{txn.notes}</td>
                                    <td className="px-6 py-4 text-white font-mono text-[11px]">{txn.createdAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default NegativeBalanceTxnsPage;
