import React, { useState } from 'react';
import { Calendar, Search, RotateCcw, ArrowUp, ArrowDown } from 'lucide-react';

const TraderFundsPage = ({ onNavigate }) => {
    const [filters, setFilters] = useState({
        fromDate: '',
        toDate: '',
        userId: '',
        amount: ''
    });

    const fundsData = [
        { id: '1', username: 'SHRE001', name: 'User One', amount: '5000', txnType: 'Deposit', notes: ' UPI Transfer', pgTxnId: 'PAY12345', createdAt: '2026-02-10 10:00:00' },
        // Add more dummy data as needed
    ];

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="flex flex-col h-full bg-[#0b111e] p-4 md:p-6 space-y-6 overflow-y-auto custom-scrollbar animate-fade-in">
            {/* Top Bar with Date Filters and Report Button */}
            <div className="flex flex-col md:flex-row gap-4 items-end bg-[#151c2c] p-4 rounded border border-[#2d3748] shadow-md">
                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto flex-1">
                    <div className="flex flex-col w-full">
                        <label className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 ml-1">From Date</label>
                        <input 
                            type="date"
                            name="fromDate"
                            value={filters.fromDate}
                            onChange={handleFilterChange}
                            className="w-full bg-white text-slate-900 px-3 py-2 rounded text-sm focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 ml-1">To Date</label>
                        <input 
                            type="date"
                            name="toDate"
                            value={filters.toDate}
                            onChange={handleFilterChange}
                            className="w-full bg-white text-slate-900 px-3 py-2 rounded text-sm focus:outline-none"
                        />
                    </div>
                </div>
                 <button className="w-full md:w-auto bg-[#00BCD4] hover:bg-cyan-600 text-white font-bold py-2 px-8 rounded text-xs uppercase tracking-wider shadow transition-all whitespace-nowrap">
                    DOWNLOAD FUNDS REPORT
                </button>
            </div>

            {/* Filter Section */}
            <div className="bg-[#151c2c] p-6 rounded border border-[#2d3748] shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div className="border-b border-[#2d3748]">
                         <label className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">User ID</label>
                         <input 
                            type="text" 
                            name="userId" 
                            value={filters.userId} 
                            onChange={handleFilterChange} 
                            className="bg-transparent w-full text-slate-200 text-sm py-1 outline-none"
                        />
                    </div>
                    <div className="border-b border-[#2d3748]">
                         <label className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Amount</label>
                         <input 
                            type="number" 
                            name="amount" 
                            value={filters.amount} 
                            onChange={handleFilterChange} 
                            className="bg-transparent w-full text-slate-200 text-sm py-1 outline-none"
                        />
                    </div>
                </div>
                
                <div className="flex gap-2">
                    <button className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-2 px-8 rounded shadow uppercase tracking-wider text-[11px] transition-all">
                        SEARCH
                    </button>
                    <button className="bg-[#607d8b] hover:bg-slate-500 text-white font-bold py-2 px-8 rounded shadow uppercase tracking-wider text-[11px] transition-all flex items-center gap-1">
                        <RotateCcw className="w-3 h-3" /> RESET
                    </button>
                </div>
            </div>

            {/* Create Button */}
            <div>
                 <button 
                    onClick={() => onNavigate('create-fund')}
                    className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-2.5 px-6 rounded shadow-lg uppercase tracking-wider text-[11px] transition-all"
                >
                    CREATE FUNDS WD
                </button>
            </div>

            {/* Funds Table */}
            <div className="flex-1">
                <div className="text-xs text-slate-400 mb-2">
                    Showing <span className="font-bold text-slate-200">{fundsData.length}</span> of <span className="font-bold text-slate-200">0</span> items.
                </div>
                <div className="bg-[#151c2c] rounded border border-[#2d3748] overflow-hidden shadow-xl">
                    <div className="overflow-x-auto custom-scrollbar">
                        <table className="w-full text-left border-collapse min-w-[1000px]">
                            <thead>
                                <tr className="text-white text-[12px] font-bold border-b border-[#2d3748] bg-[#0b111e]">
                                    <th className="px-6 py-4 whitespace-nowrap">
                                        ID <ArrowUp className="w-3 h-3 inline ml-1 text-slate-500" />
                                    </th>
                                    <th className="px-6 py-4 whitespace-nowrap">username</th>
                                    <th className="px-6 py-4 whitespace-nowrap">name</th>
                                    <th className="px-6 py-4 whitespace-nowrap">Amount</th>
                                    <th className="px-6 py-4 whitespace-nowrap">Txn Type</th>
                                    <th className="px-6 py-4 whitespace-nowrap">Notes</th>
                                    <th className="px-6 py-4 whitespace-nowrap">PG Txn ID</th>
                                    <th className="px-6 py-4 whitespace-nowrap">Created At</th>
                                </tr>
                            </thead>
                            <tbody className="text-[12px] text-slate-300">
                                {fundsData.map((fund) => (
                                    <tr key={fund.id} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors">
                                        <td className="px-6 py-4">{fund.id}</td>
                                        <td className="px-6 py-4 text-[#01B4EA]">{fund.username}</td>
                                        <td className="px-6 py-4 text-[#01B4EA]">{fund.name}</td>
                                        <td className={`px-6 py-4 font-bold ${parseFloat(fund.amount) < 0 ? 'text-red-400' : 'text-green-400'}`}>
                                            {fund.amount}
                                        </td>
                                        <td className="px-6 py-4">{fund.txnType}</td>
                                        <td className="px-6 py-4">{fund.notes}</td>
                                        <td className="px-6 py-4">{fund.pgTxnId}</td>
                                        <td className="px-6 py-4">{fund.createdAt}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TraderFundsPage;
