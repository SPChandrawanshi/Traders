import React from 'react';
import { ChevronDown, Calendar, Search } from 'lucide-react';

const TraderFundsPage = () => {
    const transactions = [
        { amount: '-40000', createdAt: '2026-02-02 19:44:11', notes: '' },
        { amount: '-60000', createdAt: '2026-02-02 11:45:10', notes: '' },
        { amount: '-100000', createdAt: '2026-02-02 09:33:45', notes: '' },
        { amount: '164845.7', createdAt: '2026-02-02 00:00:00', notes: 'Opening Balance' },
    ];

    return (
        <div className="flex flex-col h-full bg-[#0b111e] p-6 space-y-6 overflow-y-auto custom-scrollbar">
            {/* Top Controls Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="From Date" 
                            className="w-full bg-white text-slate-900 px-4 py-2.5 rounded text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#01B4EA]" 
                        />
                        <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-slate-400" />
                    </div>
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="To Date" 
                            className="w-full bg-white text-slate-900 px-4 py-2.5 rounded text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#01B4EA]" 
                        />
                        <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-slate-400" />
                    </div>
                </div>
                <div>
                     <button className="w-full bg-[#01B4EA] hover:bg-cyan-600 text-white font-bold py-2.5 px-6 rounded transition-all uppercase tracking-wider text-xs shadow-lg">
                        EXPORT TRADES
                    </button>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="From Date" 
                            className="w-full bg-white text-slate-900 px-4 py-2.5 rounded text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#01B4EA]" 
                        />
                         <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-slate-400" />
                    </div>
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="To Date" 
                            className="w-full bg-white text-slate-900 px-4 py-2.5 rounded text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#01B4EA]" 
                        />
                        <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-slate-400" />
                    </div>
                </div>
                <div>
                    <button className="w-full bg-[#01B4EA] hover:bg-cyan-600 text-white font-bold py-2.5 px-6 rounded transition-all uppercase tracking-wider text-xs shadow-lg">
                        DOWNLOAD TRADES PDF
                    </button>
                </div>

                 {/* Row 3 - Export Funds Button only in right column equivalent */}
                <div className="md:col-start-2">
                    <button className="w-full bg-[#01B4EA] hover:bg-cyan-600 text-white font-bold py-2.5 px-6 rounded transition-all uppercase tracking-wider text-xs shadow-lg">
                        EXPORT FUNDS
                    </button>
                </div>
            </div>

            {/* Actions & View Details */}
            <div className="space-y-4">
                <div className="relative w-fit">
                    <button className="flex items-center justify-between gap-8 bg-[#9C27B0] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-all uppercase tracking-wider text-xs">
                        ACTIONS <ChevronDown className="w-4 h-4" />
                    </button>
                </div>

                <button className="w-full bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-3 px-6 rounded transition-all uppercase tracking-wider text-sm shadow-lg shadow-green-900/20">
                    VIEW DETAILS
                </button>
            </div>


            {/* Funds Table */}
            <div className="space-y-2">
                <h2 className="text-xl font-normal text-slate-300">
                    Fund - Withdrawal <span className="text-slate-400">&</span> Deposits
                </h2>
                <div className="text-xs text-slate-400 pb-2">
                    Showing <span className="font-bold text-slate-200">{transactions.length}</span> of <span className="font-bold text-slate-200">{transactions.length}</span> items.
                </div>

                <div className="bg-[#151c2c] rounded border border-[#2d3748] overflow-hidden shadow-xl">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-slate-200 text-[13px] font-bold border-b border-[#2d3748] bg-[#151c2c]">
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4">Created At</th>
                                <th className="px-6 py-4">Notes</th>
                            </tr>
                        </thead>
                        <tbody className="text-[13px] text-slate-300 font-medium">
                            {transactions.map((txn, idx) => (
                                <tr key={idx} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors">
                                    <td className={`px-6 py-4 font-mono ${parseFloat(txn.amount) < 0 ? 'text-blue-400' : 'text-slate-300'}`}>
                                        {txn.amount}
                                    </td>
                                    <td className="px-6 py-4 text-slate-400">{txn.createdAt}</td>
                                    <td className="px-6 py-4 text-slate-400 italic">
                                        {txn.notes || ''}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TraderFundsPage;
