import React, { useState } from 'react';
import { Search, RotateCcw, Edit, Settings, ArrowUp, ArrowDown, Eye } from 'lucide-react';

const TradingClientsPage = ({ clients, onClientClick, onCreateClick, onAddBrokerClick, onDepositClick, onWithdrawClick, onViewClick }) => {
    
    // Search and Filter State
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');

    const handleSearch = () => {
        // Implement search logic here if needed, or just let it be visual for now
        console.log("Searching for:", searchTerm, statusFilter);
    };

    const handleReset = () => {
        setSearchTerm('');
        setStatusFilter('All');
    };

    const MobileClientCard = ({ client }) => (
        <div className="bg-[#151c2c] p-4 rounded-lg border border-[#2d3748] shadow-md mb-3">
            <div className="flex justify-between items-start mb-3">
                <div>
                     <h3 className="text-white font-bold text-sm">{client.fullName}</h3>
                     <p className="text-[10px] text-slate-500 font-mono">{client.username}</p>
                </div>
                 <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${client.status === 'Active' ? 'text-green-400' : 'text-red-400'}`}>
                    {client.status}
                </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                 <div className="flex flex-col">
                    <span className="text-slate-500">Ledger Balance</span>
                    <span className="text-white font-mono">{client.ledgerBalance}</span>
                </div>
                 <div className="flex flex-col text-right">
                    <span className="text-slate-500">Net P/L</span>
                    <span className="text-white font-mono">{client.netPL}</span>
                </div>
            </div>

             <div className="flex justify-end border-t border-[#2d3748] pt-2 gap-2">
                 <button onClick={() => onClientClick && onClientClick(client)} className="p-2 bg-slate-700 rounded-full text-white hover:bg-slate-600 transition-colors">
                    <Edit className="w-3 h-3" />
                </button>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col h-full bg-[#0b111e] p-4 md:p-6 space-y-6 overflow-y-auto custom-scrollbar animate-fade-in">
             
             {/* Search Bar Section */}
             <div className="bg-[#151c2c] p-6 rounded-lg border border-[#2d3748] shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                    <div className="space-y-1 md:col-span-1">
                        <label className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">Username</label>
                         <input 
                            type="text" 
                            className="w-full bg-transparent border-b border-slate-700 text-white py-2 focus:outline-none focus:border-[#4CAF50] transition-colors text-sm" 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="space-y-1 md:col-span-1">
                        <label className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">Account Status</label>
                        <select 
                            className="w-full bg-[#1a2333] border border-slate-700 text-white py-2 px-3 rounded focus:outline-none focus:border-[#4CAF50] transition-colors text-sm"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="All">All</option>
                            <option value="Active">Active</option>
                            <option value="Suspended">Suspended</option>
                            <option value="Closed">Closed</option>
                        </select>
                    </div>
                    <div className="flex gap-2 col-span-1 md:col-span-2">
                        <button 
                            onClick={handleSearch}
                            className="bg-[#4CAF50] hover:bg-green-600 text-white py-2 px-6 rounded text-[11px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg"
                        >
                             SEARCH
                        </button>
                        <button 
                            onClick={handleReset}
                            className="bg-slate-600 hover:bg-slate-500 text-white py-2 px-6 rounded text-[11px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg"
                        >
                            <RotateCcw className="w-3 h-3" /> RESET
                        </button>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
                 {onCreateClick && (
                     <button 
                        onClick={onCreateClick}
                        className="bg-[#4CAF50] hover:bg-green-600 text-white py-3 px-6 rounded text-[11px] font-bold uppercase tracking-widest transition-all shadow-lg"
                     >
                        CREATE CLIENT
                     </button>
                 )}
                 <button 
                    onClick={onAddBrokerClick}
                    className="bg-[#01B4EA] hover:bg-cyan-600 text-white py-3 px-6 rounded text-[11px] font-bold uppercase tracking-widest transition-all shadow-lg"
                 >
                    ADD SUB BROKER
                 </button>
            </div>
            
            {/* Desktop Table View */}
            <div className="hidden md:block bg-[#151c2c] rounded border border-[#2d3748] overflow-hidden shadow-xl">
                 <div className="p-4 border-b border-[#2d3748]">
                    <span className="text-slate-400 text-sm">Showing {clients.length} of {clients.length} items.</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse whitespace-nowrap">
                        <thead>
                            <tr className="text-slate-200 text-[13px] font-semibold border-b border-[#2d3748] bg-[#151c2c]">
                                <th className="px-4 py-4">#</th>
                                <th className="px-4 py-4 text-center">Actions</th>
                                <th className="px-4 py-4">ID <ArrowUp className="w-3 h-3 inline ml-1" /></th>
                                <th className="px-4 py-4">Full Name <ArrowUp className="w-3 h-3 inline ml-1" /></th>
                                <th className="px-4 py-4">Username</th>
                                <th className="px-4 py-4">Ledger Balance <ArrowUp className="w-3 h-3 inline ml-1" /></th>
                                <th className="px-4 py-4">Gross P/L <ArrowUp className="w-3 h-3 inline ml-1" /></th>
                                <th className="px-4 py-4">Brokerage <ArrowUp className="w-3 h-3 inline ml-1" /></th>
                                <th className="px-4 py-4">Swap Charges <ArrowUp className="w-3 h-3 inline ml-1" /></th>
                                <th className="px-4 py-4">Net P/L</th>
                                <th className="px-4 py-4">Admin</th>
                                <th className="px-4 py-4">Demo Account?</th>
                                <th className="px-4 py-4">Account Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-[13px] text-slate-300">
                            {clients.map((client, idx) => (
                                <tr key={client.id} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors">
                                    <td className="px-4 py-4">{idx + 1}</td>
                                    <td className="px-4 py-4 flex flex-col gap-1 items-center justify-center">
                                       <div className="flex gap-2">
                                            <button onClick={() => onClientClick && onClientClick(client)} className="text-white hover:text-blue-400" title="Edit"><Edit className="w-3 h-3" /></button>
                                            <button onClick={() => onViewClick && onViewClick(client)} className="text-white hover:text-blue-400" title="View"><Eye className="w-3 h-3" /></button>
                                            <button className="text-white hover:text-blue-400" title="Settings"><Settings className="w-3 h-3" /></button>
                                       </div>
                                       <div className="flex gap-2 mt-1">
                                            <button onClick={() => onDepositClick && onDepositClick(client)} className="text-green-500 hover:text-green-400" title="Deposit"><ArrowDown className="w-3 h-3" /></button>
                                            <button onClick={() => onWithdrawClick && onWithdrawClick(client)} className="text-red-500 hover:text-red-400" title="Withdraw"><ArrowUp className="w-3 h-3" /></button>
                                       </div>
                                    </td>
                                    <td className="px-4 py-4">{client.id}</td>
                                    <td className="px-4 py-4">{client.fullName}</td>
                                    <td className="px-4 py-4">{client.username}</td>
                                    <td className="px-4 py-4">{client.ledgerBalance}</td>
                                    <td className="px-4 py-4">{client.grossPL}</td>
                                    <td className="px-4 py-4">{client.brokerage}</td>
                                    <td className="px-4 py-4">{client.swapCharges}</td>
                                    <td className="px-4 py-4">{client.netPL}</td>
                                    <td className="px-4 py-4">{client.admin}</td>
                                    <td className="px-4 py-4">{client.demoAccount}</td>
                                    <td className="px-4 py-4">{client.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Mobile Card List View */}
            <div className="md:hidden space-y-3 pb-4">
                {clients.map((client) => (
                    <MobileClientCard key={client.id} client={client} />
                ))}
            </div>
        </div>
    );
};

export default TradingClientsPage;
