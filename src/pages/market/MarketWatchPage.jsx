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
        { id: '1', name: 'ALUMINIUM26FEBFUT', expiry: '2026-02-27', bid: '310', ask: '311.15', ltp: '310', change: '2.1', high: '318.9', low: '300' },
        { id: '2', name: 'COPPER26FEBFUT', expiry: '2026-02-27', bid: '1216.7', ask: '1220', ltp: '1220.8', change: '-4.25', high: '1249.7', low: '1156' },
        { id: '3', name: 'CRUDEOIL26FEB5400PE', expiry: '2026-02-17', bid: '100', ask: '100.8', ltp: '100.5', change: '5.4', high: '119.1', low: '80' },
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

    const handleBulkAddToBan = () => {
        if (selectedScrips.length === 0) {
            setSuccessMessage('Please select scrips to ban');
            setTimeout(() => setSuccessMessage(''), 3000);
            return;
        }
        setScrips(prev => prev.filter(s => !selectedScrips.includes(s.id)));
        setSuccessMessage(`${selectedScrips.length} Scrip(s) added to ban list`);
        setSelectedScrips([]);
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    const handleBulkRemoveFromBan = () => {
        if (selectedScrips.length === 0) {
            setSuccessMessage('Please select scrips to remove from ban');
            setTimeout(() => setSuccessMessage(''), 3000);
            return;
        }
        setSuccessMessage(`${selectedScrips.length} Scrip(s) removed from ban list`);
        setSelectedScrips([]);
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    const filteredScrips = scrips.filter(scrip =>
        scrip.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Mobile Card Component
    const MobileScripCard = ({ scrip, isSelected, onToggle, isBanned, onToggleBan }) => (
        <div className={`bg-[#202940] p-4 rounded-lg border ${isSelected ? 'border-[#01B4EA]' : 'border-[#2d3748]'} shadow-md mb-3`}>
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                    <div
                        onClick={() => onToggle(scrip.id)}
                        className={`w-5 h-5 rounded-sm cursor-pointer flex items-center justify-center transition-colors border border-slate-600 ${isSelected ? 'bg-[#01B4EA] border-[#01B4EA]' : 'bg-transparent'}`}
                    >
                        {isSelected && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-sm uppercase">{scrip.name}</h3>
                        <p className="text-[10px] text-slate-500">{scrip.expiry}</p>
                    </div>
                </div>
                <div className={`text-sm font-bold ${parseFloat(scrip.change) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {scrip.change}
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="flex flex-col items-center bg-[#202940] p-2 rounded">
                    <span className="text-[10px] text-slate-500 uppercase">Bid</span>
                    <span className="text-white font-bold">{scrip.bid}</span>
                </div>
                <div className="flex flex-col items-center bg-[#202940] p-2 rounded border border-[#01B4EA]/30">
                    <span className="text-[10px] text-[#01B4EA] uppercase">LTP</span>
                    <span className="text-white font-bold text-lg">{scrip.ltp}</span>
                </div>
                <div className="flex flex-col items-center bg-[#202940] p-2 rounded">
                    <span className="text-[10px] text-slate-500 uppercase">Ask</span>
                    <span className="text-white font-bold">{scrip.ask}</span>
                </div>
            </div>

            <div className="flex justify-between items-center text-xs text-slate-400 px-1">
                <div className="flex gap-4">
                    <span>H: <span className="text-white">{scrip.high}</span></span>
                    <span>L: <span className="text-white">{scrip.low}</span></span>
                </div>
                <button
                    onClick={() => onToggleBan(scrip.id)}
                    className={`${isBanned ? 'bg-white text-slate-900 border-white' : 'text-[#F44336] border-[#F44336]'} font-bold text-[10px] uppercase border px-2 py-1 rounded hover:opacity-80 transition-all`}
                >
                    {isBanned ? 'Remove' : 'Ban'}
                </button>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col h-full bg-[#202940] overflow-hidden relative">
            <div className="flex-1 overflow-y-auto custom-scrollbar pb-20">
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

                    <h1 className="text-2xl md:text-3xl font-normal text-white mb-6">
                        Active Clients: <span className="font-bold">{filteredScrips.length}</span>
                    </h1>
                </div>

                {/* Desktop Table View */}
                <div className="hidden md:flex flex-1 px-6 pb-4 overflow-hidden flex-col">
                    <div className="bg-transparent overflow-x-auto flex-1 custom-scrollbar">
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                                <tr className="text-slate-400 text-sm font-medium border-b border-[#2d3748]">
                                    <th className="py-4 w-12 text-center">
                                        <div className="w-5 h-5 bg-white rounded-sm cursor-pointer mx-auto"></div>
                                    </th>
                                    <th className="py-4 px-4">Scrip</th>
                                    <th className="py-4 text-center">Bid</th>
                                    <th className="py-4 text-center">Ask</th>
                                    <th className="py-4 text-center">Ltp</th>
                                    <th className="py-4 text-center">Change</th>
                                    <th className="py-4 text-center">High</th>
                                    <th className="py-4 text-center">Low</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm font-bold">
                                {filteredScrips.map((scrip) => (
                                    <tr key={scrip.id} className="border-b border-[#2d3748] hover:bg-slate-800/30 active:bg-slate-800/50 transition-all group cursor-pointer active:scale-[0.99]">
                                        <td className="py-4 text-center">
                                            <div
                                                onClick={() => toggleScripSelection(scrip.id)}
                                                className={`w-5 h-5 rounded-sm cursor-pointer flex items-center justify-center transition-colors mx-auto ${selectedScrips.includes(scrip.id) ? 'bg-[#01B4EA]' : 'bg-white'}`}
                                            >
                                                {selectedScrips.includes(scrip.id) && <Check className="w-3 h-3 text-white" />}
                                            </div>
                                        </td>
                                        <td className="py-4 text-white px-4">
                                            <div className="flex flex-col">
                                                <span className="text-base font-normal tracking-wide uppercase whitespace-nowrap">{scrip.name}</span>
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
                                        <td className="py-4 text-right px-4">
                                            <button
                                                onClick={() => toggleBanStatus(scrip.id)}
                                                className={`${bannedScrips.includes(scrip.id) ? 'bg-[#4CAF50] text-white' : 'bg-[#F44336] text-white'} hover:opacity-80 text-[10px] font-bold py-1.5 px-3 rounded uppercase transition-all whitespace-nowrap`}
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

                {/* Mobile Card List View */}
                <div className="md:hidden px-4 pb-4 space-y-3">
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

            {/* Bottom Floating Action Bar - Purple Buttons */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#202940] p-4 border-t border-[#2d3748] z-10">
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
                        className="bg-[#9C27B0] hover:bg-purple-700 text-white font-bold py-2 px-6 rounded text-xs uppercase shadow-lg transition-all"
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
                        className="bg-[#9C27B0] hover:bg-purple-700 text-white font-bold py-2 px-6 rounded text-xs uppercase shadow-lg transition-all"
                    >
                        REMOVE FROM BAN
                    </button>
                </div>
            </div>

        </div>
    );
};

export default MarketWatchPage;
