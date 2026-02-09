import React, { useState } from 'react';
import { Search, Monitor, X, Check } from 'lucide-react';

const MarketWatchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedScrips, setSelectedScrips] = useState([]);

    const [showSuccess, setShowSuccess] = useState(true);

    const suggestions = [
        { id: '341', label: '341' },
        { id: '146', label: '146' },
        { id: '74', label: '74' },
        { id: '225', label: '225' },
        { id: '115', label: '115' },
        { id: '116', label: '116' },
    ];

    const scrips = [
        { id: '1', name: 'ALUMINIUM26FEBFUT', expiry: '2026-02-27', bid: '310', ask: '311.15', ltp: '310', change: '2.1', high: '318.9', low: '300' },
        { id: '2', name: 'COPPER26FEBFUT', expiry: '2026-02-27', bid: '1216.7', ask: '1220', ltp: '1220.8', change: '-4.25', high: '1249.7', low: '1156' },
        { id: '3', name: 'CRUDEOIL26FEB5400PE', expiry: '2026-02-17', bid: '100', ask: '100.8', ltp: '100.5', change: '5.4', high: '119.1', low: '80' },
        { id: '4', name: 'CRUDEOIL26FEB5800CE', expiry: '2026-02-17', bid: '152', ask: '156', ltp: '155', change: '-165', high: '320', low: '149.5' },
        { id: '5', name: 'CRUDEOIL26FEB5900CE', expiry: '2026-02-17', bid: '131', ask: '134.1', ltp: '131', change: '-64.1', high: '211.8', low: '128' },
        { id: '6', name: 'CRUDEOIL26FEB5900PE', expiry: '2026-02-17', bid: '403.3', ask: '418', ltp: '404.7', change: '46.3', high: '430.4', low: '335' },
        { id: '7', name: 'CRUDEOIL26FEB5950CE', expiry: '2026-02-17', bid: '121.8', ask: '124', ltp: '124.6', change: '-62.2', high: '198.8', low: '119.5' },
        { id: '8', name: 'CRUDEOIL26FEB5950PE', expiry: '2026-02-17', bid: '415.2', ask: '479.8', ltp: '442.4', change: '44.7', high: '469', low: '365' },
        { id: '9', name: 'CRUDEOIL26FEB6150CE', expiry: '2026-02-17', bid: '88.2', ask: '98.9', ltp: '91.6', change: '-108.3', high: '199.9', low: '87.3' },
    ];

    const toggleScripSelection = (id) => {
        setSelectedScrips(prev => 
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    const handleSearchCheck = (e) => {
        setSearchTerm(e.target.value);
        setShowSuggestions(true);
    };

    return (
        <div className="flex flex-col h-full bg-[#0b111e] overflow-y-auto custom-scrollbar relative">
            {/* Header / Search Area */}
            <div className="p-6 pb-2">
                 <div className="bg-[#4CAF50] p-3 px-4 rounded-sm shadow-md mb-6">
                    <h2 className="text-white font-medium text-lg tracking-wide">Market Watch</h2>
                </div>

                {showSuccess && (
                     <div className="text-white text-center font-bold text-sm mb-4">
                        Scrip removed from banned list
                    </div>
                )}

                <div className="relative max-w-sm mb-2">
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="search" 
                            value={searchTerm}
                            onChange={handleSearchCheck}
                            onFocus={() => setShowSuggestions(true)}
                            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                            className="w-full bg-white text-slate-900 px-4 py-2 rounded-sm text-sm focus:outline-none shadow-sm"
                        />
                         {/* Cursor indicator from screenshot */}
                        <div className="absolute right-3 top-2.5 w-[1px] h-5 bg-black animate-pulse opacity-0"></div>
                    </div>

                    {showSuggestions && (
                        <div className="absolute top-full left-0 w-full bg-white text-slate-900 shadow-xl rounded-b-md z-50 py-1">
                            {suggestions.map((s) => (
                                <div key={s.id} className="px-4 py-2 hover:bg-slate-100 cursor-pointer text-xs font-medium border-b border-slate-100 last:border-0 text-slate-700">
                                    {s.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <h1 className="text-3xl font-normal text-white mb-6">
                    Active Clients: <span className="font-bold">7</span>
                </h1>
            </div>

            {/* Table */}
            <div className="flex-1 px-6 pb-24">
                 <div className="bg-transparent overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-slate-400 text-sm font-medium border-b border-[#2d3748]">
                                <th className="py-4 w-12">
                                     <div className="w-5 h-5 bg-white rounded-sm cursor-pointer"></div>
                                </th>
                                <th className="py-4"></th>
                                <th className="py-4 text-center">Bid</th>
                                <th className="py-4 text-center">Ask</th>
                                <th className="py-4 text-center">Ltp</th>
                                <th className="py-4 text-center">Change</th>
                                <th className="py-4 text-center">High</th>
                                <th className="py-4 text-center">Low</th>
                                <th className="py-4 text-right"></th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-bold">
                            {scrips.map((scrip) => (
                                <tr key={scrip.id} className="border-b border-[#2d3748] hover:bg-slate-800/30 transition-colors group">
                                     <td className="py-4">
                                        <div 
                                            onClick={() => toggleScripSelection(scrip.id)}
                                            className={`w-5 h-5 rounded-sm cursor-pointer flex items-center justify-center transition-colors ${selectedScrips.includes(scrip.id) ? 'bg-[#01B4EA]' : 'bg-white'}`}
                                        >
                                            {selectedScrips.includes(scrip.id) && <Check className="w-3 h-3 text-white" />}
                                        </div>
                                    </td>
                                    <td className="py-4 text-white">
                                        <div className="flex flex-col">
                                            <span className="text-base font-normal tracking-wide uppercase">{scrip.name}</span>
                                            {scrip.expiry && <span className="text-[10px] text-slate-500 font-normal">{scrip.expiry}</span>}
                                        </div>
                                    </td>
                                    <td className="py-4 text-center text-white text-lg">{scrip.bid}</td>
                                    <td className="py-4 text-center text-white text-lg">{scrip.ask}</td>
                                    <td className="py-4 text-center text-white text-lg">{scrip.ltp}</td>
                                    <td className={`py-4 text-center text-lg ${parseFloat(scrip.change) >= 0 ? 'text-white' : 'text-white'}`}>
                                        {scrip.change}
                                    </td>
                                    <td className="py-4 text-center text-white text-lg">{scrip.high}</td>
                                    <td className="py-4 text-center text-white text-lg">{scrip.low}</td>
                                    <td className="py-4 text-right">
                                        <button className="bg-[#F44336] hover:bg-red-600 text-white text-[10px] font-bold py-1.5 px-3 rounded uppercase transition-colors">
                                            ADD TO BAN
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Bottom Floating Action Bar */}
            <div className="fixed bottom-0 left-64 right-0 bg-[#0b111e]/90 p-4 border-t border-[#2d3748] backdrop-blur-sm">
                <div className="flex gap-4">
                    <button className="bg-[#9C27B0] hover:bg-purple-700 text-white font-bold py-2 px-6 rounded text-xs uppercase shadow-lg transition-all">
                        ADD TO BAN
                    </button>
                    <button className="bg-[#9C27B0]/50 hover:bg-purple-700 text-white/50 font-bold py-2 px-6 rounded text-xs uppercase shadow-lg transition-all">
                        REMOVE FROM BAN
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MarketWatchPage;
