import React, { useState } from 'react';

const UsersPage = ({ onNavigate }) => {
    const [filters, setFilters] = useState({
        username: '',
        status: ''
    });

    const usersData = [];

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleSearch = () => {
        console.log('Search with filters:', filters);
    };

    const handleReset = () => {
        setFilters({
            username: '',
            status: ''
        });
    };

    return (
        <div className="flex flex-col h-full p-4 md:p-6 space-y-4 overflow-y-auto">

            {/* Filter Section */}
            <div className="bg-[#1f283e] p-6 rounded-lg border border-white/10 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="text-slate-500 text-xs block mb-2">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={filters.username}
                            onChange={handleFilterChange}
                            className="bg-transparent w-full text-white text-sm py-2 outline-none border-b border-slate-600 focus:border-[#4CAF50] transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-slate-500 text-xs block mb-2">Account Status</label>
                        <select
                            name="status"
                            value={filters.status}
                            onChange={handleFilterChange}
                            className="bg-white text-slate-900 w-full px-4 py-2.5 rounded text-sm outline-none border border-slate-300 cursor-pointer"
                        >
                            <option value="">All</option>
                            <option value="0">Inactive</option>
                            <option value="1">Active</option>
                        </select>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={handleSearch}
                        className="bg-[#4CAF50] hover:bg-[#43A047] text-white font-bold py-2.5 px-8 rounded uppercase tracking-wide text-xs transition-all shadow-md"
                    >
                        SEARCH
                    </button>
                    <button
                        onClick={handleReset}
                        className="bg-[#607d8b] hover:bg-[#546e7a] text-white font-bold py-2.5 px-8 rounded uppercase tracking-wide text-xs transition-all shadow-md"
                    >
                        RESET
                    </button>
                </div>
            </div>

            {/* Add Sub Broker Button */}
            <div>
                <button
                    onClick={() => onNavigate?.('add-broker')}
                    className="bg-[#4CAF50] hover:bg-[#43A047] text-white font-bold py-2.5 px-6 rounded uppercase tracking-wide text-xs transition-all shadow-md"
                >
                    ADD SUB BROKER
                </button>
            </div>

            {/* Results Section */}
            <div className="bg-[#1f283e] rounded-lg border border-white/10 shadow-xl overflow-hidden">
                <div className="px-6 py-8">
                    {usersData.length === 0 ? (
                        <div className="text-slate-400 text-sm">
                            No Users Found
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="text-white text-sm bg-[#151c2c] border-b border-white/10">
                                        <th className="px-4 py-4 font-bold">Actions</th>
                                        <th className="px-4 py-4 font-bold">ID</th>
                                        <th className="px-4 py-4 font-bold">Username</th>
                                        <th className="px-4 py-4 font-bold">Name</th>
                                        <th className="px-4 py-4 font-bold">Status</th>
                                        <th className="px-4 py-4 font-bold">Created At</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-slate-300">
                                    {usersData.map((user) => (
                                        <tr key={user.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                            <td className="px-4 py-4">
                                                {/* Actions placeholder */}
                                            </td>
                                            <td className="px-4 py-4 text-white">{user.id}</td>
                                            <td className="px-4 py-4 text-[#00BCD4]">{user.username}</td>
                                            <td className="px-4 py-4">{user.name}</td>
                                            <td className="px-4 py-4">
                                                <span className={`px-2 py-1 rounded text-xs ${user.status === '1' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                                    {user.status === '1' ? 'Active' : 'Inactive'}
                                                </span>
                                            </td>
                                            <td className="px-4 py-4">{user.createdAt}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UsersPage;
