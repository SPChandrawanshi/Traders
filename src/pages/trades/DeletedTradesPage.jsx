import React, { useState } from 'react';
import { Search, RotateCcw, Trash2, ArrowUp, Eye, Edit } from 'lucide-react';

const DeletedTradesPage = () => {
    const [view, setView] = useState('list'); // 'list' or 'confirm'
    const [selectedTrade, setSelectedTrade] = useState(null);
    const [transactionPassword, setTransactionPassword] = useState('');
    const [searchFilters, setSearchFilters] = useState({
        scrip: '',
        userId: '',
    });

    const tradesData = [
        { id: '4238782', scrip: "GOLD26AFRFUT", segment: "MCX", userId: "4424 SHRE043 : Lv", buyRate: "144696.00000000", sellRate: "145201.00000000", lots: "0.2 lots", profitLoss: "10101", time: "-1577", timeDiff: "-1577 secs", boughtAt: "2026-02-02 10:29:42" },
        { id: '4238684', scrip: "SILVER26MARFUT", segment: "MCX", userId: "4424 SHRE043 : Lv", buyRate: "235926.00000000", sellRate: "238135.00000000", lots: "0.2 lots", profitLoss: "13254", time: "524 s", timeDiff: "524 secs", boughtAt: "2026-02-02 14:34:34" },
        { id: '4238622', scrip: "GOLD26AFRFUT", segment: "MCX", userId: "4424 SHRE043 : Lv", buyRate: "148359.00000000", sellRate: "148933.00000000", lots: "0.02 lots", profitLoss: "1148", time: "-693 s", timeDiff: "-693 secs", boughtAt: "2026-02-02 20:15:55" },
    ];

    const handleDeleteClick = (trade) => {
        setSelectedTrade(trade);
        setView('confirm');
    };

    const handleRemoveTrade = () => {
        // Mock logic
        alert(`Trade ${selectedTrade.id} removed permanently.`);
        setView('list');
        setSelectedTrade(null);
        setTransactionPassword('');
    };
    
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setSearchFilters(prev => ({ ...prev, [name]: value }));
    };

    const MobileTradeCard = ({ trade }) => (
        <div className="bg-[#151c2c] p-4 rounded-lg border border-[#2d3748] shadow-md mb-3">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <span className="text-xs text-slate-400 font-mono">#{trade.id}</span>
                    <h3 className="text-white font-bold text-sm uppercase mt-0.5">{trade.scrip}</h3>
                </div>
                <div className={`text-sm font-bold ${parseFloat(trade.profitLoss) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {trade.profitLoss}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs mb-3 border-t border-[#2d3748] pt-2">
                <div className="flex flex-col">
                    <span className="text-slate-500">Buy Rate</span>
                    <span className="text-white font-medium">{trade.buyRate}</span>
                </div>
                <div className="flex flex-col text-right">
                    <span className="text-slate-500">Sell Rate</span>
                    <span className="text-white font-medium">{trade.sellRate}</span>
                </div>
            </div>
            
             <div className="flex justify-between items-center bg-[#0b111e] p-2 rounded border border-[#2d3748]">
                 <span className="text-[10px] text-slate-400">{trade.userId}</span>
            </div>
            
            <div className="flex justify-end gap-3 mt-3 pt-2 border-t border-[#2d3748]">
                 <Trash2 className="w-4 h-4 text-red-400 cursor-pointer" onClick={() => handleDeleteClick(trade)} />
            </div>
        </div>
      );

    if (view === 'confirm') {
        return (
            <div className="flex flex-col h-full bg-[#0b111e] p-6 text-sm">
                <div className="inline-block bg-[#4CAF50] rounded overflow-hidden mb-8 shadow-lg w-fit">
                    <div className="bg-[#4CAF50] text-white font-bold py-2.5 px-8 text-sm uppercase tracking-wider">
                        Delete Trade
                    </div>
                </div>
                
                <div className="bg-[#151c2c] p-6 md:p-10 rounded border border-[#2d3748] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#4CAF50]" />
                    
                    <p className="text-slate-300 leading-relaxed mb-10">
                        You are about to delete trade of <span className="text-white font-bold">{selectedTrade?.lots} of {selectedTrade?.scrip} of {selectedTrade?.userId}</span>. 
                        Trade will be removed permanently. Enter Transaction Password to continue.
                    </p>
                    
                    <div className="flex flex-col md:flex-row items-end gap-6 max-w-4xl">
                        <div className="flex flex-col gap-2 flex-1 w-full">
                            <label className="text-xs text-slate-400 font-medium uppercase tracking-widest">Transaction Password</label>
                            <div className="border-b-2 border-[#2d3748] pb-1 group focus-within:border-[#4CAF50] transition-colors">
                                <input 
                                    type="password" 
                                    className="bg-transparent text-white w-full outline-none text-base py-1" 
                                    value={transactionPassword}
                                    onChange={(e) => setTransactionPassword(e.target.value)}
                                    autoFocus
                                />
                            </div>
                        </div>
                        
                        <div className="flex gap-4 w-full md:w-auto">
                            <button 
                                onClick={handleRemoveTrade}
                                className="flex-1 md:flex-none bg-[#4CAF50] hover:bg-[#3d8b40] text-white font-bold py-3 px-10 rounded transition-all uppercase tracking-widest text-xs h-fit shadow-xl"
                            >
                                REMOVE TRADE
                            </button>
                            <button 
                                onClick={() => setView('list')}
                                className="flex-1 md:flex-none text-slate-400 hover:text-white font-bold py-3 px-4 rounded transition-all uppercase tracking-widest text-xs h-fit"
                            >
                                CANCEL
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-[#0b111e] p-6 space-y-6 overflow-y-auto custom-scrollbar animate-fade-in">
             {/* Search Section */}
             <div className="flex flex-col md:flex-row items-end gap-4 max-w-2xl">
                 <div className="flex-1 w-full md:w-auto">
                     <label className="text-slate-400 text-xs mb-1 block">Username</label>
                     <input 
                         type="text" 
                         className="bg-transparent border-b border-[#2d3748] text-white w-full py-1 text-sm outline-none focus:border-[#4CAF50] transition-colors"
                         value={searchFilters.userId}
                         onChange={(e) => setSearchFilters(prev => ({ ...prev, userId: e.target.value }))}
                     />
                 </div>
                 <div className="flex gap-2">
                    <button className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-1.5 px-6 rounded shadow text-[11px] uppercase tracking-wider transition-all">
                        SEARCH
                    </button>
                    <button className="bg-[#607d8b] hover:bg-slate-500 text-white font-bold py-1.5 px-6 rounded shadow text-[11px] uppercase tracking-wider transition-all">
                        RESET
                    </button>
                 </div>
             </div>

            <div className="mt-4">
                <span className="text-xs text-slate-400 font-medium">Showing <span className="text-white font-bold">{tradesData.length}</span> of items.</span>
            </div>

            {/* Trades Table */}
            <div className="bg-[#151c2c] rounded border border-[#2d3748] overflow-hidden flex flex-col shadow-xl">
                <div className="overflow-x-auto overflow-y-auto custom-scrollbar flex-1">
                    <table className="w-full text-left border-collapse min-w-[1200px] whitespace-nowrap">
                        <thead className="bg-[#151c2c] sticky top-0 z-10">
                            <tr className="text-white text-[12px] font-normal border-b border-[#2d3748]">
                                <th className="px-4 py-3 text-center">ID <ArrowUp className="w-3 h-3 inline text-slate-500" /></th>
                                <th className="px-4 py-3">Scrip</th>
                                <th className="px-4 py-3">Segment</th>
                                <th className="px-4 py-3">User ID</th>
                                <th className="px-4 py-3">Buy Rate</th>
                                <th className="px-4 py-3">Sell Rate</th>
                                <th className="px-4 py-3">Lots / Units</th>
                                <th className="px-4 py-3">Profit/Loss</th>
                                <th className="px-4 py-3">Time Diff</th>
                                <th className="px-4 py-3">Bought at</th>
                            </tr>
                        </thead>
                        <tbody className="text-[12px] text-slate-300">
                            {tradesData.map((trade, idx) => (
                                <tr key={trade.id} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors">
                                    <td className="px-4 py-3 text-center text-white">{trade.id}</td>
                                    <td className="px-4 py-3 text-white">{trade.scrip}</td>
                                    <td className="px-4 py-3">{trade.segment}</td>
                                    <td className="px-4 py-3 text-white">{trade.userId}</td>
                                    <td className="px-4 py-3">{trade.buyRate}</td>
                                    <td className="px-4 py-3">{trade.sellRate}</td>
                                    <td className="px-4 py-3">{trade.lots}</td>
                                    <td className={`px-4 py-3 ${parseFloat(trade.profitLoss) >= 0 ? 'text-green-400' : 'text-red-400'}`}>{trade.profitLoss}</td>
                                    <td className="px-4 py-3">{trade.timeDiff}</td>
                                    <td className="px-4 py-3">{trade.boughtAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
             {/* Pagination */}
             <div className="py-4 px-4 bg-[#151c2c] border-t border-[#2d3748] flex justify-between items-center">
                 {/* Scrollbar placeholder essentially - user screenshot shows horizontal scrollbar */}
            </div>
        </div>
    );
};

export default DeletedTradesPage;
