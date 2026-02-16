import React, { useState } from 'react';
import { X } from 'lucide-react';

const ClientDetailPage = ({ client, onClose }) => {
    const [showDetails, setShowDetails] = useState(false);

    const clientData = {
        id: client?.id || '3705377',
        name: client?.fullName || 'Demo ji',
        mobile: client?.mobile || '',
        username: client?.username || 'Demo0174',
        city: client?.city || '',
        accountStatus: 'Active',
        allowOrdersHighLow: 'Yes',
        allowFreshEntry: 'Yes',
        demoAccount: 'Yes',
        autoCloseLosses: 'Yes',
        autoCloseInsufficient: 'Yes',
        minLotMCX: '0',
        maxLotMCX: '20',
        minLotEquity: '0',
        maxLotEquity: '50',
        minLotEquityIndex: '0',
        maxLotEquityIndex: '20',
        maxScripMCX: '50',
        maxScripEquity: '100',
        maxScripEquityIndex: '100',
        minLotEquityOptions: '0',
        maxLotEquityOptions: '50',
        minLotEquityIndexOptions: '0',
        maxLotEquityIndexOptions: '20',
        maxScripEquityOptions: '200',
        maxScripEquityIndexOptions: '200',
        autoCloseLossPercent: '90',
        notifyLossPercent: '70',
        mcxTrading: 'Active',
        mcxBrokerage: '800.0000',
        equityTrading: 'Active',
        equityBrokerage: '800.0000',
        intradayMarginEquity: '500',
        holdingMarginEquity: '100',
        optionsTrading: 'Active',
        optionsBrokerage: '20.0000',
        intradayMarginOptions: '5',
        holdingMarginOptions: '2.000000',
        ledgerBalance: '500000000.0000',
        broker: '3761 : ',
        createdAt: '2026-02-10 00:44:10',
        notes: '',
        totalPL: '0',
        totalBrokerage: '0',
        netPL: '0'
    };

    const fundsData = [
        {
            amount: '500000000',
            createdAt: '2026-02-10 00:44:41',
            notes: ''
        }
    ];

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto custom-scrollbar">
            <div className="min-h-screen p-4 flex items-center justify-center">
                <div className="w-full max-w-7xl bg-[#1a2035] rounded-lg shadow-2xl relative animate-in fade-in zoom-in duration-200">
                    {/* Header */}
                    <div className="flex justify-between items-center p-6 border-b border-white/10">
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider">User Details</h2>
                        <button
                            onClick={onClose}
                            className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="p-6 space-y-8">
                        {/* Export Forms */}
                        <div className="space-y-4 max-w-4xl">
                            {/* Export Trades */}
                            <div className="flex flex-wrap gap-4 items-center">
                                <input
                                    type="text"
                                    placeholder="From Date"
                                    className="bg-white text-slate-900 px-4 py-2 rounded text-sm outline-none border border-slate-300 w-40"
                                />
                                <input
                                    type="text"
                                    placeholder="To Date"
                                    className="bg-white text-slate-900 px-4 py-2 rounded text-sm outline-none border border-slate-300 w-40"
                                />
                                <button className="bg-[#5bc0de] hover:bg-[#46b8da] text-white font-bold py-2 px-8 rounded transition-all text-xs uppercase tracking-widest shadow-md">
                                    EXPORT TRADES
                                </button>
                            </div>

                            {/* Download PDF */}
                            <div className="flex flex-wrap gap-4 items-center">
                                <input
                                    type="text"
                                    placeholder="From Date"
                                    className="bg-white text-slate-900 px-4 py-2 rounded text-sm outline-none border border-slate-300 w-40"
                                />
                                <input
                                    type="text"
                                    placeholder="To Date"
                                    className="bg-white text-slate-900 px-4 py-2 rounded text-sm outline-none border border-slate-300 w-40"
                                />
                                <button className="bg-[#5bc0de] hover:bg-[#46b8da] text-white font-bold py-2 px-8 rounded transition-all text-xs uppercase tracking-widest shadow-md">
                                    DOWNLOAD TRADES PDF
                                </button>
                            </div>

                            {/* Export Funds */}
                            <div className="flex flex-wrap gap-4 items-center">
                                <input
                                    type="text"
                                    placeholder="From Date"
                                    className="bg-white text-slate-900 px-4 py-2 rounded text-sm outline-none border border-slate-300 w-40"
                                />
                                <input
                                    type="text"
                                    placeholder="To Date"
                                    className="bg-white text-slate-900 px-4 py-2 rounded text-sm outline-none border border-slate-300 w-40"
                                />
                                <button className="bg-[#5bc0de] hover:bg-[#46b8da] text-white font-bold py-2 px-8 rounded transition-all text-xs uppercase tracking-widest shadow-md">
                                    EXPORT FUNDS
                                </button>
                            </div>
                        </div>

                        {/* Actions Button */}
                        <div className="flex justify-start">
                            <button className="bg-[#9b59b6] hover:bg-[#8e44ad] text-white font-bold py-2.5 px-6 rounded transition-all text-xs uppercase tracking-widest shadow-md flex items-center gap-2">
                                ACTIONS <span className="text-[10px]">▼</span>
                            </button>
                        </div>

                        {/* View Details Button */}
                        <div>
                            <button
                                onClick={() => setShowDetails(!showDetails)}
                                className="w-full bg-[#5cb85c] hover:bg-[#4caf50] text-white font-bold py-3 px-6 rounded transition-all text-sm uppercase tracking-widest shadow-lg"
                            >
                                VIEW DETAILS
                            </button>
                        </div>

                        {/* Details UI Grid */}
                        {showDetails && (
                            <div className="animate-in slide-in-from-top-4 duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {[
                                        { label: 'ID', value: clientData.id, icon: '🆔' },
                                        { label: 'Name', value: clientData.name, icon: '👤' },
                                        { label: 'Username', value: clientData.username, icon: '🔑' },
                                        { label: 'Account Status', value: clientData.accountStatus, status: true },
                                        { label: 'Ledger Balance', value: clientData.ledgerBalance, highlighted: true },
                                        { label: 'Broker', value: clientData.broker, icon: '🏢' },
                                        { label: 'Account Created', value: clientData.createdAt, icon: '📅' },
                                        { label: 'Mobile', value: clientData.mobile || 'Not Set', icon: '📱' },
                                        { label: 'City', value: clientData.city || 'Not Set', icon: '📍' },
                                        { label: 'Total P/L', value: clientData.totalPL, color: 'text-green-400' },
                                        { label: 'Total Brokerage', value: clientData.totalBrokerage, color: 'text-red-400' },
                                        { label: 'Net Profit / Loss', value: clientData.netPL, color: 'text-blue-400', bold: true },
                                    ].map((row, idx) => (
                                        <div key={idx} className="bg-[#202940] p-4 rounded-lg border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.02] group">
                                            <div className="flex justify-between items-start">
                                                <div className="space-y-1">
                                                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">{row.label}</p>
                                                    <p className={`text-sm font-semibold ${row.color || 'text-slate-100'} ${row.bold ? 'text-lg' : ''} ${row.highlighted ? 'text-green-400 font-mono text-base' : ''}`}>
                                                        {row.value}
                                                    </p>
                                                </div>
                                                {row.status ? (
                                                    <span className="bg-green-400/10 text-green-400 text-[9px] px-2 py-0.5 rounded font-bold uppercase">Active</span>
                                                ) : (
                                                    <span className="opacity-40 group-hover:opacity-100 transition-opacity text-sm">{row.icon}</span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Advanced Settings Mini Section */}
                                <div className="mt-6 bg-[#202940]/40 p-6 rounded-lg border border-white/5">
                                    <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Advanced Permissions</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {[
                                            { label: 'MCX Trading', value: clientData.mcxTrading },
                                            { label: 'Equity Trading', value: clientData.equityTrading },
                                            { label: 'Options Trading', value: clientData.optionsTrading },
                                            { label: 'Demo Account', value: clientData.demoAccount },
                                        ].map((item, i) => (
                                            <div key={i} className="space-y-1">
                                                <p className="text-[10px] text-slate-500 font-bold uppercase">{item.label}</p>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
                                                    <p className="text-xs text-slate-200 font-medium">{item.value}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Fund - Withdrawal & Deposits */}
                        <div className="bg-[#1f283e] rounded-lg border border-white/5 p-8 shadow-xl">
                            <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-3">
                                <span className="w-2 h-6 bg-[#5bc0de] rounded-full"></span>
                                Fund - Withdrawal & Deposits
                            </h3>
                            <div className="text-slate-500 text-xs mb-6 font-medium">Showing <b className="text-slate-300">1</b> of <b className="text-slate-300">1</b> items.</div>
                            <div className="overflow-x-auto custom-scrollbar">
                                <table className="w-full border-collapse border border-white/5">
                                    <thead className="bg-[#1a2035]">
                                        <tr className="text-white text-[11px] uppercase tracking-wider">
                                            <th className="px-6 py-4 border border-white/5 text-left font-bold">Amount</th>
                                            <th className="px-6 py-4 border border-white/5 text-left font-bold">Created At</th>
                                            <th className="px-6 py-4 border border-white/5 text-left font-bold">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-xs text-slate-300">
                                        {fundsData.map((fund, idx) => (
                                            <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                                                <td className="px-6 py-4 border border-white/5 font-mono text-green-400">{fund.amount}</td>
                                                <td className="px-6 py-4 border border-white/5 text-slate-400">{fund.createdAt}</td>
                                                <td className="px-6 py-4 border border-white/5">{fund.notes || '-'}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Standard Widget Class for remaining sections */}
                        {[
                            { title: 'Active Trades' },
                            { title: 'Closed Trades' },
                            { title: 'MCX Pending Orders' },
                            { title: 'Equity Pending Orders' }
                        ].map((section, idx) => (
                            <div key={idx} className="bg-[#1f283e] rounded-lg border border-white/5 p-8 shadow-xl">
                                <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-3">
                                    <span className="w-2 h-6 bg-[#5cb85c] rounded-full"></span>
                                    {section.title}
                                </h3>
                                <div className="text-slate-500 text-xs mb-6 font-medium">Showing <b className="text-slate-300">0</b> of <b className="text-slate-300"></b> items.</div>
                                <div className="text-center text-slate-600 py-12 border border-dashed border-white/10 rounded-lg bg-black/10 font-medium italic text-sm">
                                    No records found
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientDetailPage;
