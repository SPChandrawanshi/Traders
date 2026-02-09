import React from 'react';
import { User, Eye } from 'lucide-react';

const TradingClientsPage = () => {
    const clients = [
        { id: 'SHRE072', name: 'Amit Kumar', balance: '150000', marginUsed: '40000', activeTrades: 2, status: 'Active' },
        { id: 'SHRE073', name: 'Rahul Singh', balance: '25000', marginUsed: '0', activeTrades: 0, status: 'Active' },
        { id: 'SHRE074', name: 'Priya Sharma', balance: '-5000', marginUsed: '0', activeTrades: 0, status: 'Blocked' },
        { id: 'SHRE075', name: 'Vikram Malhotra', balance: '500000', marginUsed: '125000', activeTrades: 5, status: 'Active' },
        { id: 'SHRE076', name: 'Sneha Gupta', balance: '10000', marginUsed: '2000', activeTrades: 1, status: 'Active' },
    ];

    return (
        <div className="flex flex-col h-full bg-[#0b111e] p-6 space-y-6 overflow-y-auto custom-scrollbar">
             <h1 className="text-3xl font-bold text-slate-200 tracking-tight">Trading Clients</h1>
            
            <div className="bg-[#151c2c] rounded border border-[#2d3748] overflow-hidden shadow-xl">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-slate-200 text-sm font-semibold border-b border-[#2d3748] bg-[#151c2c]">
                            <th className="px-6 py-4">Client ID</th>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4 text-right">Balance</th>
                            <th className="px-6 py-4 text-right">Margin Used</th>
                            <th className="px-6 py-4 text-center">Active Trades</th>
                            <th className="px-6 py-4 text-center">Status</th>
                            <th className="px-6 py-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-slate-300">
                        {clients.map((client) => (
                            <tr key={client.id} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors">
                                <td className="px-6 py-4 font-mono text-blue-400 font-bold">{client.id}</td>
                                <td className="px-6 py-4 flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                                        <User className="w-4 h-4 text-slate-400" />
                                    </div>
                                    {client.name}
                                </td>
                                <td className={`px-6 py-4 text-right font-mono ${parseFloat(client.balance) < 0 ? 'text-red-400' : 'text-green-400'}`}>
                                    {client.balance}
                                </td>
                                <td className="px-6 py-4 text-right font-mono">{client.marginUsed}</td>
                                <td className="px-6 py-4 text-center">
                                    <span className="bg-slate-700 text-white px-2 py-0.5 rounded text-xs">{client.activeTrades}</span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${client.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                        {client.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button className="text-blue-400 hover:text-blue-300 transition-colors">
                                        <Eye className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TradingClientsPage;
