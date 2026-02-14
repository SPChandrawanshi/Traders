import React, { useState } from 'react';
import { Search, Monitor, X, Check, MoreVertical } from 'lucide-react';

const MarketWatchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedScrips, setSelectedScrips] = useState([]);
    const [bannedScrips, setBannedScrips] = useState([]); // Track banned scrips

    const suggestions = [
        { id: '341', label: '341' },
        { id: '146', label: '146' },
        { id: '74', label: '74' },
        { id: '225', label: '225' },
        { id: '115', label: '115' },
        { id: '116', label: '116' },
    ];

    const [scrips, setScrips] = useState([
        { id: '1', name: 'ALUMINIUM26FEBFUT', expiry: '2026-02-27', bid: '309.35', ask: '309.7', ltp: '309.35', change: '0.65', high: '311.2', low: '304' },
        { id: '2', name: 'COPPER26FEBFUT', expiry: '2026-02-27', bid: '1211.5', ask: '1211.75', ltp: '1211.5', change: '-0.1', high: '1225.4', low: '1181.85' },
        { id: '3', name: 'CRUDEOIL26FEB5550CE', expiry: '2026-02-27', bid: '191.1', ask: '196.7', ltp: '192', change: '1.7', high: '220', low: '157.5' },
        { id: '4', name: 'CRUDEOIL26FEB5800CE', expiry: '2026-02-17', bid: '152', ask: '156', ltp: '155', change: '-165', high: '320', low: '149.5' },
        { id: '5', name: 'CRUDEOIL26FEB5900CE', expiry: '2026-02-17', bid: '131', ask: '134.1', ltp: '131', change: '-64.1', high: '211.8', low: '128' },
        { id: '6', name: 'CRUDEOIL26FEB5900PE', expiry: '2026-02-17', bid: '403.3', ask: '418', ltp: '404.7', change: '46.3', high: '430.4', low: '335' },
        { id: '7', name: 'CRUDEOIL26FEB5950CE', expiry: '2026-02-17', bid: '121.8', ask: '124', ltp: '124.6', change: '-62.2', high: '198.8', low: '119.5' },
        { id: '8', name: 'CRUDEOIL26FEB5950PE', expiry: '2026-02-17', bid: '415.2', ask: '479.8', ltp: '442.4', change: '44.7', high: '469', low: '365' },
        { id: '9', name: 'CRUDEOIL26FEB6150CE', expiry: '2026-02-17', bid: '88.2', ask: '98.9', ltp: '91.6', change: '-108.3', high: '199.9', low: '87.3' },
    ]);

    const [successMessage, setSuccessMessage] = useState('');

    const toggleScripSelection = (id) => {
        setSelectedScrips(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    const handleSearchCheck = (e) => {
        setSearchTerm(e.target.value);
        setShowSuggestions(true);
    };

    const toggleBanStatus = (id) => {
        setBannedScrips(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
        setSuccessMessage(
            bannedScrips.includes(id)
                ? 'Scrip removed from ban list'
                : 'Scrip added to ban list'
        );
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    const filteredScrips = scrips.filter(scrip =>
        scrip.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Mobile Card Component - Updated to Black Theme
    const MobileScripCard = ({ scrip, isSelected, onToggle, isBanned, onToggleBan }) => (
        <div className={`bg-black p-4 border-b border-white/5 shadow-md`}>
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-4">
                    <div
                        onClick={() => onToggle(scrip.id)}
                        className={`w-6 h-6 rounded-sm cursor-pointer flex items-center justify-center transition-colors border border-slate-600 ${isSelected ? 'bg-[#01B4EA] border-[#01B4EA]' : 'bg-white'}`}
                    >
                        {isSelected && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-[13px] uppercase tracking-tight">{scrip.name}</h3>
                        <p className="text-[10px] text-slate-500">{scrip.expiry}</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-6 gap-2 text-center items-center">
                <span className="text-white font-bold text-xs">{scrip.bid}</span>
                <span className="text-white font-bold text-xs">{scrip.ask}</span>
                <span className="text-white font-bold text-xs">{scrip.ltp}</span>
                <span className={`text-white font-bold text-xs`}>{scrip.change}</span>
                <span className="text-white font-bold text-xs text-opacity-80">{scrip.high}</span>
                <span className="text-white font-bold text-xs text-opacity-80">{scrip.low}</span>
            </div>

            <div className="mt-4 flex justify-end">
                <button
                    onClick={() => onToggleBan(scrip.id)}
                    className={`bg-[#e53935] hover:bg-red-600 text-white font-bold text-[10px] uppercase px-4 py-2 rounded shadow transition-all`}
                >
                    {isBanned ? 'REMOVE BAN' : 'ADD TO BAN'}
                </button>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col h-full bg-[#1a2035] overflow-hidden relative">
            <div className="flex-1 overflow-y-auto custom-scrollbar pb-24">
                {/* Header / Search Area */}
                <div className="p-4 md:p-6 pb-2">
                    <div className="bg-[#4CAF50] p-3 px-4 rounded-sm shadow-md mb-6 flex justify-between items-center">
                        <h2 className="text-white font-medium text-lg tracking-wide">Market Watch</h2>
                    </div>

                    {successMessage && (
                        <div className="text-white text-center font-bold text-sm mb-4">
                            {successMessage}
                        </div>
                    )}

                    <div className="relative max-w-sm mb-2">
                        <input
                            type="text"
                            placeholder="search"
                            value={searchTerm}
                            onChange={handleSearchCheck}
                            onFocus={() => setShowSuggestions(true)}
                            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                            className="w-full bg-white text-slate-900 px-4 py-2 rounded-sm text-sm focus:outline-none shadow-sm"
                        />
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

                    <h1 className="text-2xl md:text-3xl font-normal text-white mb-6">
                        Active Clients: <span className="font-bold">{filteredScrips.length}</span>
                    </h1>
                </div>

                {/* Desktop Table View - Updated to Black Theme as per screenshot */}
                <div className="hidden md:block px-6">
                    <div className="bg-black rounded-sm overflow-hidden shadow-2xl">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-white text-[12px] font-bold uppercase tracking-wider bg-black border-b border-white/5">
                                    <th className="py-4 w-16 text-center"></th>
                                    <th className="py-4 px-4 min-w-[200px]">Scrip</th>
                                    <th className="py-4 text-center">Bid</th>
                                    <th className="py-4 text-center">Ask</th>
                                    <th className="py-4 text-center">Ltp</th>
                                    <th className="py-4 text-center">Change</th>
                                    <th className="py-4 text-center">High</th>
                                    <th className="py-4 text-center">Low</th>
                                    <th className="py-4 text-right px-6">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredScrips.map((scrip) => (
                                    <tr key={scrip.id} className="bg-black border-b border-white/5 hover:bg-white/5 transition-colors group">
                                        <td className="py-4 text-center">
                                            <div
                                                onClick={() => toggleScripSelection(scrip.id)}
                                                className={`w-6 h-6 rounded-sm cursor-pointer flex items-center justify-center transition-colors mx-auto ${selectedScrips.includes(scrip.id) ? 'bg-[#01B4EA]' : 'bg-white'}`}
                                            >
                                                {selectedScrips.includes(scrip.id) && <Check className="w-4 h-4 text-white" />}
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="flex flex-col">
                                                <span className="text-white text-[14px] font-bold tracking-tight uppercase">{scrip.name}</span>
                                                <span className="text-[10px] text-slate-500 font-medium tracking-wide">{scrip.expiry}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 text-center text-white text-[14px] font-bold">{scrip.bid}</td>
                                        <td className="py-4 text-center text-white text-[14px] font-bold">{scrip.ask}</td>
                                        <td className="py-4 text-center text-white text-[14px] font-bold">{scrip.ltp}</td>
                                        <td className={`py-4 text-center text-[14px] font-bold text-white`}>
                                            {scrip.change}
                                        </td>
                                        <td className="py-4 text-center text-white text-[14px] font-bold">{scrip.high}</td>
                                        <td className="py-4 text-center text-white text-[14px] font-bold">{scrip.low}</td>
                                        <td className="py-4 text-right px-6">
                                            <button
                                                onClick={() => toggleBanStatus(scrip.id)}
                                                className="bg-[#e53935] hover:bg-red-600 text-white font-bold text-[10px] py-2 px-4 rounded shadow transition-all uppercase whitespace-nowrap"
                                            >
                                                {bannedScrips.includes(scrip.id) ? 'REMOVE BAN' : 'ADD TO BAN'}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Mobile Card List View - Updated to Black Theme */}
                <div className="md:hidden space-y-0">
                    {filteredScrips.map((scrip) => (
                        <MobileScripCard
                            key={scrip.id}
                            scrip={scrip}
                            isSelected={selectedScrips.includes(scrip.id)}
                            onToggle={toggleScripSelection}
                            isBanned={bannedScrips.includes(scrip.id)}
                            onToggleBan={toggleBanStatus}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom Floating Action Bar - Updated to Black/Dark Theme */}
            <div className="absolute bottom-0 left-0 right-0 bg-black p-4 border-t border-white/10 z-10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
                <div className="flex gap-4 justify-start">
                    <button
                        onClick={() => {
                            if (selectedScrips.length === 0) {
                                setSuccessMessage('Please select scrips to ban');
                                setTimeout(() => setSuccessMessage(''), 3000);
                                return;
                            }
                            setBannedScrips(prev => [...new Set([...prev, ...selectedScrips])]);
                            setSuccessMessage(`${selectedScrips.length} Scrip(s) added to ban list`);
                            setSelectedScrips([]);
                            setTimeout(() => setSuccessMessage(''), 3000);
                        }}
                        className="bg-[#9c27b0] hover:bg-purple-700 text-white font-bold py-2.5 px-8 rounded shadow-lg transition-all uppercase text-[11px] tracking-widest active:scale-95"
                    >
                        ADD TO BAN
                    </button>
                    <button
                        onClick={() => {
                            if (selectedScrips.length === 0) {
                                setSuccessMessage('Please select scrips to remove from ban');
                                setTimeout(() => setSuccessMessage(''), 3000);
                                return;
                            }
                            setBannedScrips(prev => prev.filter(id => !selectedScrips.includes(id)));
                            setSuccessMessage(`${selectedScrips.length} Scrip(s) removed from ban list`);
                            setSelectedScrips([]);
                            setTimeout(() => setSuccessMessage(''), 3000);
                        }}
                        className="bg-[#9c27b0] hover:bg-purple-700 text-white font-bold py-2.5 px-8 rounded shadow-lg transition-all uppercase text-[11px] tracking-widest active:scale-95"
                    >
                        REMOVE FROM BAN
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MarketWatchPage;
