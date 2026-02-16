import React, { useState } from 'react';

const BrokerAccountsPage = () => {
    const [filters, setFilters] = useState({
        fromDate: '02/02/2026',
        toDate: '02/02/2026'
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleCalculate = (e) => {
        e.preventDefault();
        console.log('Calculating for:', filters);
    };

    const tableData = [
        {
            broker: 'All',
            sumPL: '',
            sumBrokerage: '',
            sumSwap: '',
            sumNet: '',
            plShare: '',
            brokerageShare: '',
            swapShare: '',
            netShare: ''
        },
        {
            broker: '3761: demo001',
            sumPL: '0',
            sumBrokerage: '0',
            sumSwap: '0',
            sumNet: '0',
            plShare: '0',
            brokerageShare: '0',
            swapShare: '0',
            netShare: '0'
        }
    ];

    return (
        <div className="flex flex-col h-full bg-[#1a2035] p-4 space-y-6 overflow-y-auto">
            {/* Custom Date Filter Section */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="grid grid-cols-2 bg-white rounded overflow-hidden shadow-lg w-full md:w-auto">
                    <input
                        type="text"
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.value === "" ? (e.target.type = "text") : null)}
                        placeholder="From Date"
                        className="px-6 py-3 border-r border-slate-200 focus:outline-none text-slate-700 font-medium text-sm min-w-[150px]"
                    />
                    <input
                        type="text"
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.value === "" ? (e.target.type = "text") : null)}
                        placeholder="To Date"
                        className="px-6 py-3 focus:outline-none text-slate-700 font-medium text-sm min-w-[150px]"
                    />
                </div>
                <button
                    onClick={handleCalculate}
                    className="bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-bold py-3 px-8 rounded uppercase tracking-widest text-[11px] transition-all shadow-lg active:scale-95 w-full md:w-auto"
                >
                    CALCULATE FOR CUSTOM DATES
                </button>
            </div>

            {/* Broker Accounts Table */}
            <div className="bg-[#1f283e] rounded-lg shadow-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full border-separate border-spacing-0 min-w-[1200px]">
                        <thead>
                            <tr className="text-white text-[12px] font-bold uppercase tracking-wider bg-[#1a2035]">
                                <th className="px-6 py-4 border-b border-r border-white/10 text-left">Broker</th>
                                <th className="px-6 py-4 border-b border-r border-white/10 text-left">SUM of Client PL</th>
                                <th className="px-6 py-4 border-b border-r border-white/10 text-left">SUM of Client Brokerage</th>
                                <th className="px-6 py-4 border-b border-r border-white/10 text-left">SUM of Client Swap</th>
                                <th className="px-6 py-4 border-b border-r border-white/10 text-left">SUM of Client Net</th>
                                <th className="px-6 py-4 border-b border-r border-white/10 text-left">PL Share</th>
                                <th className="px-6 py-4 border-b border-r border-white/10 text-left">Brokerage Share</th>
                                <th className="px-6 py-4 border-b border-r border-white/10 text-left">Swap Share</th>
                                <th className="px-6 py-4 border-b border-white/10 text-left">Net Share</th>
                            </tr>
                        </thead>
                        <tbody className="text-[13px] text-slate-300">
                            {tableData.map((row, index) => (
                                <tr key={index} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 border-b border-r border-white/10 font-medium text-white">{row.broker}</td>
                                    <td className="px-6 py-4 border-b border-r border-white/10 font-mono text-center">{row.sumPL || '0'}</td>
                                    <td className="px-6 py-4 border-b border-r border-white/10 font-mono text-center">{row.sumBrokerage || '0'}</td>
                                    <td className="px-6 py-4 border-b border-r border-white/10 font-mono text-center">{row.sumSwap || '0'}</td>
                                    <td className="px-6 py-4 border-b border-r border-white/10 font-mono text-center">{row.sumNet || '0'}</td>
                                    <td className="px-6 py-4 border-b border-r border-white/10 font-mono text-center">{row.plShare || '0'}</td>
                                    <td className="px-6 py-4 border-b border-r border-white/10 font-mono text-center">{row.brokerageShare || '0'}</td>
                                    <td className="px-6 py-4 border-b border-r border-white/10 font-mono text-center">{row.swapShare || '0'}</td>
                                    <td className="px-6 py-4 border-b border-white/10 font-mono text-center">{row.netShare || '0'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BrokerAccountsPage;
