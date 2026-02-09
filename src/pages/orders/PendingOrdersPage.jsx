import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const PendingOrdersPage = () => {
    const [view, setView] = useState('list'); // 'list' or 'create'
    const [formData, setFormData] = useState({
        script: '',
        userId: '',
        lots: '',
        price: '',
        orderType: '',
        transactionPassword: ''
    });

    const handleCreateClick = () => setView('create');

    const handleSave = (e) => {
        e.preventDefault();
        // Mock save logic
        console.log('Order Saved:', formData);
        setView('list');
        setFormData({
            script: '',
            userId: '',
            lots: '',
            price: '',
            orderType: '',
            transactionPassword: ''
        });
    };

    if (view === 'create') {
        return (
            <div className="flex flex-col h-full text-[#a0aec0]">
                <div className="mb-8">
                    <div className="inline-block bg-[#4CAF50] text-white px-4 py-2 rounded-md shadow-sm">
                        <h2 className="text-base font-semibold uppercase tracking-tight">Create Limit Order</h2>
                    </div>
                </div>

                <div className="bg-[#151c2c] p-8 rounded-lg border border-[#2d3748] shadow-xl">
                    <form onSubmit={handleSave} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            {/* Script */}
                            <div className="space-y-2">
                                <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider">Script</label>
                                <div className="relative">
                                    <select
                                        className="w-full bg-transparent border-b border-slate-700 text-white py-2 focus:outline-none focus:border-[#4CAF50] transition-colors appearance-none font-medium text-sm"
                                        value={formData.script}
                                        onChange={(e) => setFormData({ ...formData, script: e.target.value })}
                                    >
                                        <option value="" disabled className="bg-[#151c2c]">Select Scrip</option>
                                        <option value="GOLD" className="bg-[#151c2c]">GOLD</option>
                                        <option value="SILVER" className="bg-[#151c2c]">SILVER</option>
                                    </select>
                                    <ChevronDown className="absolute right-0 top-2 w-4 h-4 text-slate-500 pointer-events-none" />
                                </div>
                            </div>

                            {/* User ID */}
                            <div className="space-y-2">
                                <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider">User ID</label>
                                <div className="relative">
                                    <select
                                        className="w-full bg-transparent border-b border-slate-700 text-white py-2 focus:outline-none focus:border-[#4CAF50] transition-colors appearance-none font-medium text-sm"
                                        value={formData.userId}
                                        onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
                                    >
                                        <option value="" disabled className="bg-[#151c2c]">Select User</option>
                                        <option value="SHRE072" className="bg-[#151c2c]">SHRE072</option>
                                    </select>
                                    <ChevronDown className="absolute right-0 top-2 w-4 h-4 text-slate-500 pointer-events-none" />
                                </div>
                            </div>

                            {/* Lots / Units */}
                            <div className="space-y-2">
                                <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider">Lots / Units</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-slate-700 text-white py-2 focus:outline-none focus:border-[#4CAF50] transition-colors font-medium text-sm"
                                    value={formData.lots}
                                    onChange={(e) => setFormData({ ...formData, lots: e.target.value })}
                                />
                            </div>

                            {/* Price */}
                            <div className="space-y-2">
                                <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider">Price</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-slate-700 text-white py-2 focus:outline-none focus:border-[#4CAF50] transition-colors font-medium text-sm"
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                />
                            </div>

                            {/* Order Type */}
                            <div className="space-y-2">
                                <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider">Order Type</label>
                                <div className="relative">
                                    <select
                                        className="w-full bg-transparent border-b border-slate-700 text-white py-2 focus:outline-none focus:border-[#4CAF50] transition-colors appearance-none font-medium text-sm"
                                        value={formData.orderType}
                                        onChange={(e) => setFormData({ ...formData, orderType: e.target.value })}
                                    >
                                        <option value="" disabled className="bg-[#151c2c]">Select Order Type</option>
                                        <option value="BUY" className="bg-[#151c2c]">BUY LIMIT</option>
                                        <option value="SELL" className="bg-[#151c2c]">SELL LIMIT</option>
                                    </select>
                                    <ChevronDown className="absolute right-0 top-2 w-4 h-4 text-slate-500 pointer-events-none" />
                                </div>
                            </div>

                            {/* Transaction Password */}
                            <div className="space-y-2">
                                <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider">Transaction Password</label>
                                <input
                                    type="password"
                                    className="w-full bg-transparent border-b border-slate-700 text-white py-2 focus:outline-none focus:border-[#4CAF50] transition-colors font-medium text-sm"
                                    value={formData.transactionPassword}
                                    onChange={(e) => setFormData({ ...formData, transactionPassword: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-2 px-8 rounded transition-all uppercase text-xs tracking-widest"
                            >
                                SAVE
                            </button>
                            <button
                                type="button"
                                onClick={() => setView('list')}
                                className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-8 rounded transition-all uppercase text-xs tracking-widest"
                            >
                                CANCEL
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full text-[#a0aec0]">
            <div className="mb-8">
                <button
                    onClick={handleCreateClick}
                    className="bg-[#4CAF50] hover:bg-green-600 text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-widest transition-all shadow-lg shadow-green-900/10"
                >
                    CREATE PENDING ORDERS
                </button>
            </div>

            <div className="bg-[#151c2c] p-6 rounded border border-[#2d3748] shadow-sm">
                <p className="text-sm font-medium">No Pending Orders</p>
            </div>
        </div>
    );
};

export default PendingOrdersPage;
