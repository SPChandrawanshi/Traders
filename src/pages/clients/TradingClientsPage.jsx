import React from 'react';
import { User, Eye } from 'lucide-react';

const TradingClientsPage = ({ onClientClick }) => {
    // Dummy Data matching distinct users in screenshots + extras
    const clients = [
        { id: 'SHRE072', name: 'Jitu0', username: 'SHRE072', mobile: '9876543210', status: 'Active', balance: '132489.06' },
        { id: '3274', name: 'Sweta namdev', username: '3274', mobile: '9988776655', status: 'Active', balance: '30134.88' },
        { id: '3343', name: 'Ar0', username: '3343', mobile: '8877665544', status: 'Active', balance: '14000' },
        { id: '3725', name: 'Namdevji', username: '3725', mobile: '7766554433', status: 'Active', balance: '2398.8' },
        { id: '4249', name: 'Sajjan', username: '4249', mobile: '6655443322', status: 'Suspended', balance: '13216.93' },
    ];

    return (
        <div className="flex flex-col h-full bg-[#0b111e] p-6 space-y-6 overflow-y-auto custom-scrollbar animate-fade-in">
             <div className="flex justify-between items-end">
                <h1 className="text-3xl font-bold text-slate-200 tracking-tight">Users</h1>
                <div className="text-sm text-slate-400">Manage your trading clients</div>
             </div>
            
            <div className="bg-[#151c2c] rounded border border-[#2d3748] overflow-hidden shadow-xl">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-slate-200 text-sm font-semibold border-b border-[#2d3748] bg-[#151c2c]">
                            <th className="px-6 py-4">Client ID</th>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Username</th>
                            <th className="px-6 py-4">Mobile</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-slate-300">
                        {clients.map((client) => (
                            <tr key={client.id} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors">
                                <td className="px-6 py-4 font-mono text-[#01B4EA] font-bold">{client.id}</td>
                                <td className="px-6 py-4 flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-300">
                                        {client.name.charAt(0)}
                                    </div>
                                    {client.name}
                                </td>
                                <td className="px-6 py-4 font-mono">{client.username}</td>
                                <td className="px-6 py-4 font-mono text-slate-400">{client.mobile}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${client.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                        {client.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button 
                                      onClick={() => onClientClick && onClientClick(client)}
                                      className="text-[#01B4EA] hover:text-blue-300 transition-colors p-2 hover:bg-slate-700 rounded-full"
                                      title="View Details"
                                    >
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
