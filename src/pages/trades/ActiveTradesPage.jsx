import React, { useState } from 'react';
import { ChevronDown, ArrowUpDown, ChevronUp } from 'lucide-react';

const ActiveTradesPage = () => {
    // view: 'list' | 'detail' | 'delete_confirm'
    const [view, setView] = useState('list');
    const [selectedTrade, setSelectedTrade] = useState(null);

    const trades = [
        {
            id: '4239596',
            scrip: 'CRUDEOIL26FEBFUT',
            buyRate: '0',
            sellRate: '5620',
            lots: '1 / 100',
            buyTurnover: '0',
            sellTurnover: '562000',
            cmp: '5621',
            pl: '-100',
            margin: '20000',
            user: 'SHRE072',
            userId: '4395',
            segment: 'MCX',
            buyIp: '',
            sellIp: '152.58.28.60'
        },
        {
            id: '4239578',
            scrip: 'CRUDEOIL26FEBFUT',
            buyRate: '0',
            sellRate: '5629',
            lots: '1 / 100',
            buyTurnover: '0',
            sellTurnover: '562900',
            cmp: '5621',
            pl: '800',
            margin: '20000',
            user: 'SHRE072',
            userId: '4395',
            segment: 'MCX',
            buyIp: '',
            sellIp: '152.58.28.60'
        }
    ];

    const handleTradeClick = (trade, e) => {
        // Prevent clicking if we hit the 'X' button or similar, but for now just click row
        setSelectedTrade(trade);
        setView('detail');
    };

    const handleDeleteInit = () => {
        setView('delete_confirm');
    };

    const ListView = () => (
        <div className="flex flex-col h-full space-y-4">
             {/* Header */}
             <h2 className="text-2xl font-normal text-slate-300 tracking-tight">Active Trades</h2>
             <div className="text-xs text-slate-400">
                Showing <span className="font-bold text-slate-200">{trades.length}</span> of <span className="font-bold text-slate-200">{trades.length}</span> items.
            </div>

             {/* Table */}
             <div className="bg-[#151c2c] rounded border border-[#2d3748] overflow-hidden shadow-xl">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-slate-200 text-[12px] font-semibold border-b border-[#2d3748] bg-[#151c2c]">
                            <th className="px-6 py-4 w-12 text-center text-slate-400">X</th>
                            <th className="px-6 py-4 cursor-pointer flex items-center gap-1 group">
                                ID <ArrowUpDown className="w-3 h-3 text-slate-500 group-hover:text-white" />
                            </th>
                            <th className="px-6 py-4">Scrip</th>
                            <th className="px-6 py-4">Buy Rate</th>
                            <th className="px-6 py-4">Sell Rate</th>
                            <th className="px-6 py-4">Lots / Units</th>
                            <th className="px-6 py-4">Buy Turnover</th>
                            <th className="px-6 py-4">Sell Turnover</th>
                            <th className="px-6 py-4">CMP</th>
                            <th className="px-6 py-4">Active P/L</th>
                            <th className="px-6 py-4">Margin Used</th>
                            <th className="px-6 py-4">Bough</th>
                        </tr>
                    </thead>
                    <tbody className="text-[12px] text-slate-300 font-medium">
                        {trades.map((trade) => (
                            <tr key={trade.id} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors">
                                <td className="px-6 py-4 text-center text-slate-400 cursor-pointer hover:text-white font-bold">X</td>
                                <td 
                                    onClick={() => handleTradeClick(trade)}
                                    className="px-6 py-4 font-bold text-white cursor-pointer hover:underline"
                                >
                                    {trade.id}
                                </td>
                                <td className="px-6 py-4 uppercase font-bold text-slate-300">{trade.scrip}</td>
                                <td className="px-6 py-4">{trade.buyRate}</td>
                                <td className="px-6 py-4">{trade.sellRate}</td>
                                <td className="px-6 py-4">{trade.lots}</td>
                                <td className="px-6 py-4">{trade.buyTurnover}</td>
                                <td className="px-6 py-4">{trade.sellTurnover}</td>
                                <td className="px-6 py-4">{trade.cmp}</td>
                                <td className={`px-6 py-4 font-bold ${parseFloat(trade.pl) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                    {trade.pl}
                                </td>
                                <td className="px-6 py-4">{trade.margin}</td>
                                <td className="px-6 py-4 text-slate-500 italic">(not set)</td>
                            </tr>
                        ))}
                         {/* Pagination / Footer placeholder */}
                         <tr className="bg-[#1c2638]">
                            <td colSpan="12" className="px-6 py-3">
                                <div className="flex gap-2 text-xs text-slate-400">
                                    <span className="font-bold text-white">1</span>
                                </div>
                            </td>
                         </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

    const handleUpdateInit = () => {
        setView('edit');
    };

    const handleSaveUpdate = () => {
        // Here you would typically save the changes
        setView('detail');
    };

    const EditView = () => (
        <div className="flex flex-col h-full bg-[#0b111e] p-6 space-y-6 overflow-y-auto custom-scrollbar">
            <div className="bg-[#4CAF50] p-3 px-4 rounded-sm shadow-md w-fit mb-4">
                <h2 className="text-white font-medium text-sm tracking-wide uppercase">Update Trades</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl">
                {/* Scrip */}
                <div className="flex flex-col gap-1">
                    <label className="text-slate-400 text-xs font-medium mb-1">Scrip</label>
                    <div className="relative">
                        <select className="bg-white text-slate-900 w-full p-2 rounded text-sm outline-none font-bold">
                            <option>{selectedTrade.scrip}</option>
                            <option>Mega</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700">
                            <ChevronDown className="h-4 w-4" />
                        </div>
                    </div>
                    <p className="text-[#01B4EA] text-[10px] mt-1">(Mini Works on Silver and Gold only)</p>
                </div>

                {/* User ID */}
                <div className="flex flex-col gap-1">
                    <label className="text-slate-400 text-xs font-medium mb-1">User ID</label>
                    <div className="relative">
                        <select className="bg-white text-slate-900 w-full p-2 rounded text-sm outline-none font-bold">
                            <option value={selectedTrade.userId}>{selectedTrade.userId} : {selectedTrade.user} (Jitu0)</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700">
                            <ChevronDown className="h-4 w-4" />
                        </div>
                    </div>
                </div>

                {/* Lots / Units */}
                <div className="flex flex-col gap-1">
                    <label className="text-slate-400 text-xs font-medium mb-1">Lots / Units</label>
                    <input 
                        type="text" 
                        defaultValue="1.00000000" 
                        className="bg-transparent border-b border-slate-600 text-white w-full py-1 focus:outline-none focus:border-[#4CAF50] transition-colors" 
                    />
                </div>

                {/* Buy Rate */}
                <div className="flex flex-col gap-1">
                    <label className="text-[#01B4EA] text-xs font-medium mb-1">Buy Rate</label>
                    <input 
                        type="text" 
                        defaultValue={selectedTrade.buyRate}
                        className="bg-transparent border-b border-slate-600 text-white w-full py-1 focus:outline-none focus:border-[#4CAF50] transition-colors" 
                    />
                </div>

                {/* Sell Rate */}
                <div className="flex flex-col gap-1">
                    <label className="text-slate-400 text-xs font-medium mb-1">Sell Rate</label>
                    <input 
                        type="text" 
                        defaultValue={`${selectedTrade.sellRate}.00000000`}
                        className="bg-transparent border-b border-slate-600 text-white w-full py-1 focus:outline-none focus:border-[#4CAF50] transition-colors" 
                    />
                </div>

                {/* Transaction Password */}
                <div className="flex flex-col gap-1">
                    <label className="text-slate-400 text-xs font-medium mb-1">Transaction Password</label>
                    <input 
                        type="password" 
                        className="bg-transparent border-b border-slate-600 text-white w-full py-1 focus:outline-none focus:border-[#4CAF50] transition-colors" 
                    />
                </div>

                <div className="col-span-1 md:col-span-2 mt-4">
                     <button 
                        onClick={handleSaveUpdate}
                        className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-2 px-8 rounded text-xs uppercase shadow-lg shadow-green-900/20 transition-all"
                    >
                        SAVE
                    </button>
                </div>
            </div>
        </div>
    );

    const DetailView = () => (
        <div className="flex flex-col h-full space-y-6 max-w-4xl">
            {/* Header Actions */}
            <div className="flex gap-4">
                 <button 
                    onClick={handleUpdateInit}
                    className="bg-[#9C27B0] hover:bg-purple-700 text-white font-bold py-2 px-6 rounded text-xs uppercase shadow-lg"
                >
                    UPDATE
                </button>
                <button 
                    onClick={handleDeleteInit}
                    className="bg-[#F44336] hover:bg-red-700 text-white font-bold py-2 px-6 rounded text-xs uppercase shadow-lg"
                >
                    DELETE
                </button>
            </div>

            <div className="flex gap-4">
                 <button className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-2 px-6 rounded text-xs uppercase shadow-lg shadow-green-900/20">
                    RESTORE BUY
                </button>
            </div>

            {/* Details Table */}
            <div className="bg-[#151c2c] rounded border border-[#2d3748] overflow-hidden">
                <table className="w-full text-left text-sm text-slate-300">
                    <tbody>
                        <tr className="border-b border-[#2d3748]">
                            <th className="px-6 py-4 font-semibold text-slate-400 w-48">ID</th>
                            <td className="px-6 py-4 text-white">{selectedTrade.id}</td>
                        </tr>
                        <tr className="border-b border-[#2d3748]">
                            <th className="px-6 py-4 font-semibold text-slate-400">Script</th>
                            <td className="px-6 py-4 text-white uppercase">{selectedTrade.scrip}</td>
                        </tr>
                        <tr className="border-b border-[#2d3748]">
                            <th className="px-6 py-4 font-semibold text-slate-400">Segment</th>
                            <td className="px-6 py-4 text-white">{selectedTrade.segment}</td>
                        </tr>
                        <tr className="border-b border-[#2d3748]">
                            <th className="px-6 py-4 font-semibold text-slate-400">User ID</th>
                            <td className="px-6 py-4 text-white">{selectedTrade.userId}</td>
                        </tr>
                        <tr className="border-b border-[#2d3748]">
                            <th className="px-6 py-4 font-semibold text-slate-400">Buy Rate</th>
                            <td className="px-6 py-4 text-white">{selectedTrade.buyRate}</td>
                        </tr>
                        <tr className="border-b border-[#2d3748]">
                            <th className="px-6 py-4 font-semibold text-slate-400">Sell Rate</th>
                            <td className="px-6 py-4 text-white">{selectedTrade.sellRate}</td>
                        </tr>
                        <tr className="border-b border-[#2d3748]">
                            <th className="px-6 py-4 font-semibold text-slate-400">Buy IP</th>
                            <td className="px-6 py-4 text-white">{selectedTrade.buyIp}</td>
                        </tr>
                        <tr className="border-b border-[#2d3748]">
                            <th className="px-6 py-4 font-semibold text-slate-400">Sell IP</th>
                            <td className="px-6 py-4 text-white">{selectedTrade.sellIp}</td>
                        </tr>
                        <tr className="border-b border-[#2d3748]">
                            <th className="px-6 py-4 font-semibold text-slate-400">Lots / Units</th>
                            <td className="px-6 py-4 text-white">{selectedTrade.lots}</td>
                        </tr>
                        <tr className="border-b border-[#2d3748]">
                            <th className="px-6 py-4 font-semibold text-slate-400">Profit / Loss</th>
                            <td className="px-6 py-4 text-slate-400 italic">Not booked yet</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

    const DeleteConfirmView = () => (
        <div className="flex flex-col h-full space-y-6 max-w-5xl">
             <div className="bg-[#4CAF50] p-3 px-4 rounded-sm shadow-md w-fit">
                <h2 className="text-white font-medium text-sm tracking-wide">Delete Trade</h2>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed border-b border-[#2d3748] pb-6">
                You are about to delete trade of <span className="font-bold text-white">1.00000000</span> lots of <span className="font-bold text-white uppercase">{selectedTrade.scrip}</span> of <span className="font-bold text-white">{selectedTrade.user} ({selectedTrade.userId})</span>. 
                Brokerage and Profit/Loss of the Buy and SELL Trade will be refunded to the client and the Trade will be removed. 
                In case it is a partial trade of some parent trade, then no. of lots of parent trade will be reduced by 1.00000000 lots. 
                Enter Transaction Password to continue.
            </p>

            <div className="space-y-6 max-w-md">
                <div className="group">
                    <label className="text-slate-400 text-xs font-medium mb-1 block">Transaction Password</label>
                    <input 
                        type="password" 
                        className="bg-transparent border-b border-slate-600 w-full text-white py-1 focus:outline-none focus:border-[#4CAF50] transition-colors"
                    />
                </div>

                <div className="flex gap-4 pt-2">
                    <button className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-2 px-6 rounded text-xs uppercase shadow-lg shadow-green-900/20">
                        DELETE TRADE
                    </button>
                    <button 
                        onClick={() => setView('detail')}
                        className="text-slate-400 hover:text-white text-xs underline py-2"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col h-full bg-[#0b111e] p-6 overflow-y-auto custom-scrollbar">
            {view === 'list' && <ListView />}
            {view === 'detail' && selectedTrade && <DetailView />}
            {view === 'edit' && selectedTrade && <EditView />}
            {view === 'delete_confirm' && selectedTrade && <DeleteConfirmView />}
        </div>
    );
};

export default ActiveTradesPage;
