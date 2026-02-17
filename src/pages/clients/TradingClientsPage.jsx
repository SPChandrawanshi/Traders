import React, { useState } from 'react';
import { RotateCcw, Edit, ArrowUp, ArrowDown, Eye, Copy } from 'lucide-react';
import ClientDetailPage from './ClientDetailPage';
import UpdateClientPage from './UpdateClientPage';
import CreateClientPage from './CreateClientPage';
import ResetAccountPage from './ResetAccountPage';
import RecalculateBrokeragePage from './RecalculateBrokeragePage';
import ChangePasswordPage from './ChangePasswordPage';
import DeleteClientPage from './DeleteClientPage';

const TradingClientsPage = ({ onCreateClick, onDepositClick, onWithdrawClick }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [selectedClient, setSelectedClient] = useState(null);
    const [showDetailPage, setShowDetailPage] = useState(false);
    const [showUpdatePage, setShowUpdatePage] = useState(false);
    const [showCreatePage, setShowCreatePage] = useState(false);
    const [showResetPage, setShowResetPage] = useState(false);
    const [showRecalculatePage, setShowRecalculatePage] = useState(false);
    const [showChangePasswordPage, setShowChangePasswordPage] = useState(false);
    const [showDeletePage, setShowDeletePage] = useState(false);

    // Dummy client data matching screenshot
    const dummyClient = {
        id: '3705377',
        fullName: 'Demo ji',
        username: 'Demo0174',
        balance: '500000000',
        grossPL: '0.0000',
        brokerage: '0.0000',
        swap: '0.0000',
        netPL: '0',
        admin: 'demo001',
        demo: 'Yes',
        status: 'Active'
    };

    const handleView = (client) => {
        setSelectedClient(client);
        setShowDetailPage(true);
    };

    const handleEdit = (client) => {
        setSelectedClient(client);
        setShowUpdatePage(true);
    };

    const handleCopy = (client) => {
        setSelectedClient(client);
        setShowCreatePage(true);
    };

    const handleSettings = (client) => {
        alert(`Settings for: ${client.fullName}`);
    };

    const handleDeposit = (client) => {
        if (onDepositClick) onDepositClick(client);
    };

    const handleWithdraw = (client) => {
        if (onWithdrawClick) onWithdrawClick(client);
    };

    return (
        <div className="flex flex-col h-full bg-[#1a2035] shadow-inner p-6 space-y-8 overflow-y-auto custom-scrollbar">
            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 8px; height: 8px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #1a2035; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #4CAF50; border-radius: 4px; }
            `}</style>

            {/* Search Section */}
            <div className="bg-[#1f283e] p-8 rounded shadow-2xl border border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
                    <div className="group">
                        <label className="block text-sm text-slate-400 mb-2 font-medium">Username</label>
                        <input
                            type="text"
                            className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-[#5cb85c] transition-colors"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="group">
                        <label className="block text-sm text-slate-400 mb-2 font-medium">Account Status</label>
                        <select
                            className="w-full bg-[#1f283e] border-b border-white/10 text-white py-2 focus:outline-none focus:border-[#5cb85c]"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </select>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className="bg-[#5cb85c] hover:bg-[#4caf50] text-white px-8 py-2.5 rounded font-bold text-xs tracking-widest shadow-lg transition-all uppercase">SEARCH</button>
                    <button onClick={() => { setSearchTerm(''); setStatusFilter(''); }} className="bg-[#808080] hover:bg-[#707070] text-white px-8 py-2.5 rounded font-bold text-xs tracking-widest flex items-center gap-2 shadow-lg transition-all uppercase"><RotateCcw className="w-4 h-4" /> RESET</button>
                </div>
            </div>

            {/* Create Button */}
            <div className="flex justify-start">
                <button
                    onClick={() => {
                        setSelectedClient(null);
                        setShowCreatePage(true);
                    }}
                    className="bg-[#4caf50] hover:bg-[#43a047] text-white py-3 px-8 rounded-md font-bold text-[11px] uppercase tracking-widest shadow-lg transition-all"
                >
                    CREATE TRADING CLIENT
                </button>
            </div>

            {/* Table Container */}
            <div className="bg-[#1f283e] overflow-hidden rounded-lg border border-white/5 shadow-2xl">
                <div className="px-6 py-4 bg-[#1a2035] border-b border-white/5">
                    <span className="text-slate-400 text-sm font-medium">Showing <b className="text-white">1</b> of <b className="text-white">1</b> items.</span>
                </div>

                <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full text-left border-collapse" style={{ minWidth: '1600px' }}>
                        <thead className="bg-[#1a2035]/50">
                            <tr className="text-white/90 text-[13px] uppercase tracking-wider">
                                <th className="px-4 py-5 font-bold w-16">#</th>
                                <th className="px-4 py-5 font-bold text-center w-40">Actions</th>
                                <th className="px-4 py-5 font-bold">ID ↑</th>
                                <th className="px-4 py-5 font-bold">Full Name ↑</th>
                                <th className="px-4 py-5 font-bold">Username</th>
                                <th className="px-4 py-5 font-bold">Ledger Balance ↑</th>
                                <th className="px-4 py-5 font-bold">Gross P/L ↑</th>
                                <th className="px-4 py-5 font-bold">Brokerage ↑</th>
                                <th className="px-4 py-5 font-bold">Swap Charges ↑</th>
                                <th className="px-4 py-5 font-bold">Net P/L</th>
                                <th className="px-4 py-5 font-bold">Admin</th>
                                <th className="px-4 py-5 font-bold">Demo Account?</th>
                                <th className="px-4 py-5 font-bold">Account Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-[13px] text-slate-300">
                            <tr className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                                <td className="px-4 py-6">1</td>
                                <td className="px-4 py-6">
                                    <div className="flex flex-col items-start gap-3 pl-2">
                                        <div className="flex items-center gap-4">
                                            <Eye onClick={() => handleView(dummyClient)} className="w-[18px] h-[18px] cursor-pointer hover:text-blue-400 transition-colors" />
                                            <Edit onClick={() => handleEdit(dummyClient)} className="w-[18px] h-[18px] cursor-pointer hover:text-yellow-400 transition-colors" />
                                            <Copy onClick={() => handleCopy(dummyClient)} className="w-[18px] h-[18px] cursor-pointer hover:text-green-400 transition-colors" />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div onClick={() => handleDeposit(dummyClient)} className="w-5 h-5 bg-[#5cb85c] hover:bg-[#4caf50] rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all">
                                                <ArrowDown className="w-3 h-3 text-white" />
                                            </div>
                                            <div onClick={() => handleWithdraw(dummyClient)} className="w-5 h-5 bg-[#d9534f] hover:bg-[#c9302c] rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all">
                                                <ArrowUp className="w-3 h-3 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-6">3705377</td>
                                <td className="px-4 py-6 font-medium text-white">{dummyClient.fullName}</td>
                                <td className="px-4 py-6 font-mono">{dummyClient.username}</td>
                                <td className="px-4 py-6 font-mono text-white/80">{dummyClient.balance}</td>
                                <td className="px-4 py-6">0.0000</td>
                                <td className="px-4 py-6">0.0000</td>
                                <td className="px-4 py-6">0.0000</td>
                                <td className="px-4 py-6 font-bold text-white">0</td>
                                <td className="px-4 py-6">demo001</td>
                                <td className="px-4 py-6">Yes</td>
                                <td className="px-4 py-6 text-[#5cb85c] font-bold">Active</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-5 py-6 border-t border-white/5 flex items-center justify-between bg-[#1a2035]">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#5cb85c] text-white text-sm font-bold rounded shadow-lg">1</div>
                </div>
            </div>

            {/* Client Detail Modal */}
            {showDetailPage && selectedClient && (
                <ClientDetailPage
                    client={selectedClient}
                    onClose={() => {
                        setShowDetailPage(false);
                        setSelectedClient(null);
                    }}
                    onUpdate={(client) => {
                        setShowDetailPage(false);
                        setSelectedClient(client);
                        setShowUpdatePage(true);
                    }}
                    onReset={(client) => {
                        setShowDetailPage(false);
                        setSelectedClient(client);
                        setShowResetPage(true);
                    }}
                    onRecalculate={(client) => {
                        setShowDetailPage(false);
                        setSelectedClient(client);
                        setShowRecalculatePage(true);
                    }}
                    onDuplicate={(client) => {
                        setShowDetailPage(false);
                        setSelectedClient(client);
                        setShowCreatePage(true);
                    }}
                    onChangePassword={(client) => {
                        setShowDetailPage(false);
                        setSelectedClient(client);
                        setShowChangePasswordPage(true);
                    }}
                    onDelete={(client) => {
                        setShowDetailPage(false);
                        setSelectedClient(client);
                        setShowDeletePage(true);
                    }}
                />
            )}

            {/* Reset Account Modal */}
            {showResetPage && selectedClient && (
                <ResetAccountPage
                    client={selectedClient}
                    onClose={() => {
                        setShowResetPage(false);
                        setSelectedClient(null);
                    }}
                    onReset={(client, password) => {
                        console.log('Resetting account for:', client.username, 'with password:', password);
                        // Implement reset logic here
                    }}
                />
            )}

            {/* Recalculate Brokerage Modal */}
            {showRecalculatePage && selectedClient && (
                <RecalculateBrokeragePage
                    client={selectedClient}
                    onClose={() => {
                        setShowRecalculatePage(false);
                        setSelectedClient(null);
                    }}
                    onRecalculate={(client, password) => {
                        console.log('Recalculating brokerage for:', client.username, 'with password:', password);
                        // Implement recalculate logic here
                    }}
                />
            )}

            {/* Update Client Modal */}
            {showUpdatePage && selectedClient && (
                <UpdateClientPage
                    client={selectedClient}
                    onClose={() => {
                        setShowUpdatePage(false);
                        setSelectedClient(null);
                    }}
                    onSave={(updatedData) => {
                        console.log('Updated Data:', updatedData);
                        setShowUpdatePage(false);
                        setSelectedClient(null);
                        alert('Client updated successfully!');
                    }}
                />
            )}

            {/* Create/Copy Client Modal */}
            {showCreatePage && (
                <CreateClientPage
                    client={selectedClient}
                    onClose={() => {
                        setShowCreatePage(false);
                        setSelectedClient(null);
                    }}
                    onSave={(data) => {
                        console.log('Create/Copy Data:', data);
                        setShowCreatePage(false);
                        setSelectedClient(null);
                        alert(selectedClient ? 'Client copied successfully!' : 'Client created successfully!');
                    }}
                />
            )}

            {/* Change Password Modal */}
            {showChangePasswordPage && selectedClient && (
                <ChangePasswordPage
                    client={selectedClient}
                    onClose={() => {
                        setShowChangePasswordPage(false);
                        setSelectedClient(null);
                    }}
                    onChangePasswordConfirm={(newPass, transPass) => {
                        console.log('Changing password for:', selectedClient.username, newPass, transPass);
                        setShowChangePasswordPage(false);
                        setSelectedClient(null);
                        alert('Password updated successfully!');
                    }}
                />
            )}

            {/* Delete Client Modal */}
            {showDeletePage && selectedClient && (
                <DeleteClientPage
                    client={selectedClient}
                    onClose={() => {
                        setShowDeletePage(false);
                        setSelectedClient(null);
                    }}
                    onDeleteConfirm={(password) => {
                        console.log('Deleting client:', selectedClient.username, 'with password:', password);
                        setShowDeletePage(false);
                        setSelectedClient(null);
                        alert('Client deleted successfully!');
                    }}
                />
            )}
        </div>
    );
};

export default TradingClientsPage;