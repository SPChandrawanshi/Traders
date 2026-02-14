import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const TickersPage = () => {
    const [view, setView] = useState('list'); // 'list' or 'add'
    const [formData, setFormData] = useState({
        startDate: '02/02/2026',
        startHour: '00',
        startMin: '00',
        endDate: '02/02/2026',
        endHour: '00',
        endMin: '00',
        message: '',
        transactionPassword: ''
    });

    const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
    const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

    const handleSave = (e) => {
        e.preventDefault();
        console.log('Ticker Added:', formData);
        setView('list');
    };

    if (view === 'add') {
        return (
            <div className="flex flex-col h-full text-[#a0aec0] p-6">
                <div className="mb-6">
                    <div className="inline-block bg-[#4CAF50] text-white px-4 py-2 rounded shadow-md">
                        <h2 className="text-sm font-bold uppercase tracking-wider">Add Ticker</h2>
                    </div>
                </div>

                <div className="bg-[#151c2c] p-10 rounded-lg border border-[#2d3748] shadow-2xl">
                    <form onSubmit={handleSave} className="space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                            {/* Start Date & Time */}
                            <div className="flex items-end gap-1">
                                <div className="flex-1">
                                    <label className="block text-slate-400 text-[11px] font-bold uppercase mb-2">Start Date</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white text-slate-800 px-4 py-2 focus:outline-none font-bold text-sm rounded-l"
                                        value={formData.startDate}
                                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                    />
                                </div>
                                <div className="relative">
                                    <select
                                        className="bg-white text-slate-800 pl-3 pr-7 py-2 focus:outline-none font-bold text-sm appearance-none border-l border-slate-200 cursor-pointer"
                                        value={formData.startHour}
                                        onChange={(e) => setFormData({ ...formData, startHour: e.target.value })}
                                    >
                                        {hours.map(h => <option key={h} value={h}>{h}</option>)}
                                    </select>
                                    <ChevronDown className="absolute right-1 top-2.5 w-4 h-4 text-slate-500 pointer-events-none" />
                                </div>
                                <div className="relative">
                                    <select
                                        className="bg-white text-slate-800 pl-3 pr-7 py-2 focus:outline-none font-bold text-sm appearance-none border-l border-slate-200 cursor-pointer rounded-r"
                                        value={formData.startMin}
                                        onChange={(e) => setFormData({ ...formData, startMin: e.target.value })}
                                    >
                                        {minutes.map(m => <option key={m} value={m}>{m}</option>)}
                                    </select>
                                    <ChevronDown className="absolute right-1 top-2.5 w-4 h-4 text-slate-500 pointer-events-none" />
                                </div>
                            </div>

                            {/* End Date & Time */}
                            <div className="flex items-end gap-1">
                                <div className="flex-1">
                                    <label className="block text-slate-400 text-[11px] font-bold uppercase mb-2">End Date</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white text-slate-800 px-4 py-2 focus:outline-none font-bold text-sm rounded-l"
                                        value={formData.endDate}
                                        onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                    />
                                </div>
                                <div className="relative">
                                    <select
                                        className="bg-white text-slate-800 pl-3 pr-7 py-2 focus:outline-none font-bold text-sm appearance-none border-l border-slate-200 cursor-pointer"
                                        value={formData.endHour}
                                        onChange={(e) => setFormData({ ...formData, endHour: e.target.value })}
                                    >
                                        {hours.map(h => <option key={h} value={h}>{h}</option>)}
                                    </select>
                                    <ChevronDown className="absolute right-1 top-2.5 w-4 h-4 text-slate-500 pointer-events-none" />
                                </div>
                                <div className="relative">
                                    <select
                                        className="bg-white text-slate-800 pl-3 pr-7 py-2 focus:outline-none font-bold text-sm appearance-none border-l border-slate-200 cursor-pointer rounded-r"
                                        value={formData.endMin}
                                        onChange={(e) => setFormData({ ...formData, endMin: e.target.value })}
                                    >
                                        {minutes.map(m => <option key={m} value={m}>{m}</option>)}
                                    </select>
                                    <ChevronDown className="absolute right-1 top-2.5 w-4 h-4 text-slate-500 pointer-events-none" />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-4">
                                <label className="block text-slate-400 text-[11px] font-bold uppercase">Message</label>
                                <textarea
                                    className="w-full bg-transparent border-b border-slate-700 text-white min-h-[40px] focus:outline-none focus:border-[#4CAF50] transition-colors py-1 text-sm font-medium"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Message"
                                />
                            </div>

                            {/* Transaction Password */}
                            <div className="space-y-4">
                                <label className="block text-slate-400 text-[11px] font-bold uppercase">Transaction Password</label>
                                <input
                                    type="password"
                                    className="w-full bg-transparent border-b border-slate-700 text-white focus:outline-none focus:border-[#4CAF50] transition-colors py-1 text-sm font-medium"
                                    value={formData.transactionPassword}
                                    onChange={(e) => setFormData({ ...formData, transactionPassword: e.target.value })}
                                    placeholder="Transaction Password"
                                />
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="bg-[#17a2b8] hover:bg-[#138496] text-white font-bold py-2.5 px-12 rounded shadow-md text-xs uppercase tracking-widest transition-all"
                            >
                                ADD TICKER
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full text-[#a0aec0] space-y-6 pt-6">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Showing <span className="text-white font-bold">0</span> of items.</span>
            </div>

            <div className="mb-4">
                <button
                    onClick={() => setView('add')}
                    className="bg-[#c026d3] hover:bg-[#a21caf] text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-widest transition-all shadow-lg shadow-purple-900/10"
                >
                    ADD TICKER
                </button>
            </div>

            {/* Tickers Table */}
            <div className="flex-1 bg-[#202940] rounded-lg border border-[#2d3748] overflow-hidden flex flex-col shadow-xl min-h-[100px]">
                <div className="overflow-x-auto overflow-y-auto custom-scrollbar flex-1">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[#a0aec0] text-[11px] font-bold uppercase tracking-wider border-b border-[#2d3748]">
                                <th className="px-6 py-4 w-32">
                                    <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                                        ID <span className="text-[9px] align-top">↑↑</span>
                                    </div>
                                </th>
                                <th className="px-6 py-4">Message</th>
                                <th className="px-6 py-4 w-48">Start Time</th>
                                <th className="px-6 py-4 w-48">End Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Empty state implicitly handled by showing 0 items */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TickersPage;
