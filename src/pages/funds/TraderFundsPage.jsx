import React, { useState } from 'react';

const TraderFundsPage = ({ onNavigate }) => {
    const [filters, setFilters] = useState({
        fromDate: '',
        toDate: '',
        userId: '',
        amount: ''
    });

    const fundsData = [];

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleSearch = () => {
        console.log('Search with filters:', filters);
    };

    const handleReset = () => {
        setFilters({
            fromDate: '',
            toDate: '',
            userId: '',
            amount: ''
        });
    };

    const handleDownloadReport = () => {
        console.log('Download report for dates:', filters.fromDate, filters.toDate);
    };

    return (
        <div className="flex flex-col h-full bg-[#202940] overflow-y-auto">

            {/* Top Bar - Date Filters and Download Button */}
            <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex flex-col md:flex-row gap-4 flex-1">
                    <input
                        type="text"
                        name="fromDate"
                        value={filters.fromDate}
                        onChange={handleFilterChange}
                        placeholder="From Date"
                        className="bg-white text-slate-900 px-4 py-2.5 rounded text-sm outline-none border border-slate-300"
                    />
                    <input
                        type="text"
                        name="toDate"
                        value={filters.toDate}
                        onChange={handleFilterChange}
                        placeholder="To Date"
                        className="bg-white text-slate-900 px-4 py-2.5 rounded text-sm outline-none border border-slate-300"
                    />
                </div>
                <button
                    onClick={handleDownloadReport}
                    className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white font-bold py-2.5 px-8 rounded uppercase tracking-wide text-xs transition-all shadow-md whitespace-nowrap"
                >
                    DOWNLOAD FUNDS REPORT
                </button>
            </div>

            {/* Filter Section */}
            <div className="bg-[#1f283e] p-6 rounded-lg border border-white/10 shadow-xl">
                <div className="flex flex-col md:flex-row gap-6 items-end">
                    {/* Filter Fields */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-slate-500 text-xs block mb-2">User ID</label>
                            <input
                                type="text"
                                name="userId"
                                value={filters.userId}
                                onChange={handleFilterChange}
                                className="bg-transparent w-full text-white text-sm py-2 outline-none border-b border-slate-600 focus:border-[#4CAF50] transition-colors"
                            />
                        </div>
                        <div>
                            <label className="text-slate-500 text-xs block mb-2">Amount</label>
                            <input
                                type="text"
                                name="amount"
                                value={filters.amount}
                                onChange={handleFilterChange}
                                className="bg-transparent w-full text-white text-sm py-2 outline-none border-b border-slate-600 focus:border-[#4CAF50] transition-colors"
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 shrink-0">
                        <button
                            onClick={handleSearch}
                            className="bg-[#4CAF50] hover:bg-[#43A047] text-white font-bold py-2.5 px-8 rounded uppercase tracking-wide text-xs transition-all shadow-md"
                        >
                            SEARCH
                        </button>
                        <button
                            onClick={handleReset}
                            className="bg-[#607d8b] hover:bg-[#546e7a] text-white font-bold py-2.5 px-8 rounded uppercase tracking-wide text-xs transition-all shadow-md"
                        >
                            RESET
                        </button>
                    </div>
                </div>
            </div>

            {/* Create Button */}
            <div>
                <button
                    onClick={() => onNavigate?.('create-fund')}
                    className="bg-[#4CAF50] hover:bg-[#43A047] text-white font-bold py-2.5 px-6 rounded uppercase tracking-wide text-xs transition-all shadow-md"
                >
                    CREATE FUNDS WD
                </button>
            </div>

            {/* Results Section */}
            <div className="bg-[#1f283e] rounded-lg border border-white/10 shadow-xl overflow-hidden">
                {/* Showing items count */}
                <div className="px-6 py-4 bg-[#151c2c] border-b border-white/10">
                    <span className="text-slate-400 text-sm">
                        Showing <b className="text-white">{fundsData.length}</b> of <b className="text-white">{fundsData.length}</b> items.
                    </span>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-white text-sm bg-[#151c2c] border-b border-white/10">
                                <th className="px-4 py-4 font-bold">ID ↑</th>
                                <th className="px-4 py-4 font-bold">username</th>
                                <th className="px-4 py-4 font-bold">name</th>
                                <th className="px-4 py-4 font-bold">Amount</th>
                                <th className="px-4 py-4 font-bold">Txn Type</th>
                                <th className="px-4 py-4 font-bold">Notes</th>
                                <th className="px-4 py-4 font-bold">PG Txn ID</th>
                                <th className="px-4 py-4 font-bold">Created At</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-slate-300">
                            {fundsData.length > 0 ? (
                                fundsData.map((fund) => (
                                    <tr key={fund.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <td className="px-4 py-4 text-white">{fund.id}</td>
                                        <td className="px-4 py-4 text-[#00BCD4]">{fund.username}</td>
                                        <td className="px-4 py-4">{fund.name}</td>
                                        <td className={`px-4 py-4 font-bold ${parseFloat(fund.amount || 0) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                            {fund.amount}
                                        </td>
                                        <td className="px-4 py-4">{fund.txnType}</td>
                                        <td className="px-4 py-4">{fund.notes}</td>
                                        <td className="px-4 py-4">{fund.pgTxnId}</td>
                                        <td className="px-4 py-4">{fund.createdAt}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="px-6 py-8 text-center text-slate-500">
                                        No funds found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TraderFundsPage;
