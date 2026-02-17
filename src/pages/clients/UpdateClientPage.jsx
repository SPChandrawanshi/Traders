import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

const UpdateClientPage = ({ client, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        fullname: client?.fullName || '',
        mobile: '',
        username: client?.username || '',
        password: '',
        city: '',
        profit_book_interval: '120',
        scalping_stop_loss: '0',
        is_demo: client?.demo === 'Yes' ? true : false,
        transaction_password: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    const InputField = ({ label, name, type = "text", placeholder, hint, value }) => (
        <div className="mb-6 group">
            <label htmlFor={name} className="block text-xs uppercase tracking-tight mb-1" style={{ color: '#bcc0cf' }}>
                {label}
            </label>
            <input
                id={name}
                type={type}
                name={name}
                value={value !== undefined ? value : formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full bg-transparent border-b border-slate-700 py-2 text-white focus:outline-none focus:border-[#4caf50] transition-colors text-base font-normal placeholder:text-slate-600"
            />
            {hint && <p className="text-[13px] mt-2 font-light leading-snug" style={{ color: '#bcc0cf' }}>{hint}</p>}
        </div>
    );

    const sidebarItems = [
        { icon: 'fa-table-columns', label: 'DashBoard' },
        { icon: 'fa-chart-line', label: 'Market Watch' },
        { icon: 'fa-bell', label: 'Notifications' },
        { icon: 'fa-list-ul', label: 'Action Ledger' },
        { icon: 'fa-briefcase', label: 'Active Positions' },
        { icon: 'fa-box-archive', label: 'Closed Positions' },
        { icon: 'fa-user-tie', label: 'Trading Clients' },
        { icon: 'fa-arrow-right-arrow-left', label: 'Trades' },
        { icon: 'fa-users-rectangle', label: 'Group Trades' },
        { icon: 'fa-clock-rotate-left', label: 'Closed Trades' },
        { icon: 'fa-trash-can', label: 'Deleted Trades' },
        { icon: 'fa-hourglass-half', label: 'Pending Orders' },
        { icon: 'fa-wallet', label: 'Trader Funds' },
        { icon: 'fa-users', label: 'Users' },
        { icon: 'fa-arrow-up-right-dots', label: 'Tickers' },
        { icon: 'fa-ban', label: 'Banned Limit Orders' },
        { icon: 'fa-building-columns', label: 'Bank Details' },
        { icon: 'fa-address-card', label: 'Accounts' },
        { icon: 'fa-network-wired', label: 'Broker Accounts' },
        { icon: 'fa-key', label: 'Change Login Password' },
        { icon: 'fa-shield-halved', label: 'Change Transaction Password' },
        { icon: 'fa-money-bill-transfer', label: 'Withdrawal Requests' },
        { icon: 'fa-file-invoice-dollar', label: 'Deposit Requests' },
        { icon: 'fa-right-from-bracket', label: 'Log Out' }
    ];

    return (
        <div className="fixed inset-0 bg-[#1a2035] z-50 flex flex-col overflow-hidden font-sans">
            {/* Top Bar - Green */}
            <div className="bg-[#4caf50] h-14 flex items-center justify-end px-6 shadow-md shrink-0 relative z-[60]">
                <div className="flex items-center gap-5 text-white">
                    <button className="hover:bg-black/10 p-2 rounded-full transition-colors">
                        <span className="fa-solid fa-gear text-[18px]"></span>
                    </button>
                    <div className="flex items-center gap-2 font-bold uppercase text-[13px] tracking-tight cursor-pointer hover:bg-black/10 px-3 py-2 rounded transition-colors group">
                        <span className="fa-solid fa-user text-[14px]"></span>
                        <span>Demo pannel</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-[260px] bg-[#1a2035] border-r border-white/5 hidden lg:flex flex-col shrink-0 overflow-y-auto custom-scrollbar">
                    <div className="py-4 px-6 border-b border-white/10 mb-4">
                        <a href="#" className="text-white font-normal uppercase text-sm tracking-widest block text-center">
                            DASHBOARD
                        </a>
                    </div>
                    <ul className="nav px-3 space-y-1">
                        {sidebarItems.map((item, idx) => (
                            <li key={idx} className="mb-1">
                                <div className={`flex items-center gap-4 px-4 py-3 rounded-sm cursor-pointer transition-all ${item.label === 'Trading Clients' ? 'bg-[#4caf50] text-white shadow-lg shadow-[#4caf50]/20 font-bold' : 'text-[#bcc0cf] hover:bg-white/5'}`}>
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        <i className={`fa-solid ${item.icon} text-[18px]`}></i>
                                    </div>
                                    <span className="text-[14px]">{item.label}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#1a2035] p-6 lg:p-10 pt-16">
                    <div className="max-w-6xl mx-auto">

                        {/* Close Button at very top right */}
                        <div className="flex justify-end mb-4 pr-2">
                            <button onClick={onClose} className="text-[#bcc0cf] hover:text-white transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Card Structure */}
                        <div className="bg-[#202940] rounded shadow-2xl relative border border-white/5">

                            {/* Card Header - Floating Green Box with 3D Ribbon fold */}
                            <div className="relative" style={{ margin: '0 15px' }}>
                                {/* Main Header Box */}
                                <div
                                    className="px-6 py-4 rounded-md shadow-xl relative z-10"
                                    style={{
                                        background: 'linear-gradient(60deg, #66bb6a, #43a047)',
                                        marginTop: '-25px',
                                        display: 'inline-block'
                                    }}
                                >
                                    <h4 className="text-white text-[15px] font-bold leading-none tracking-widest uppercase m-0">
                                        Update Trading Client: {formData.fullname}
                                    </h4>
                                </div>

                                {/* 3D Ribbon Fold (Triangle beneath) */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-12px',
                                    left: '5px',
                                    width: '0',
                                    height: '0',
                                    borderLeft: '10px solid transparent',
                                    borderRight: '10px solid transparent',
                                    borderTop: '12px solid #2e7d32',
                                    zIndex: '5'
                                }}></div>
                            </div>

                            <form onSubmit={handleSubmit} className="px-5 py-12 pt-16">
                                <div className="space-y-2">
                                    <legend className="text-[18px] font-normal mb-8 px-2 block" style={{ color: '#bcc0cf' }}>Personal Details: </legend>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 px-2">
                                        <InputField
                                            label="Name"
                                            name="fullname"
                                            hint="Insert Real name of the trader. Will be visible in trading App"
                                        />
                                        <InputField
                                            label="Mobile"
                                            name="mobile"
                                            hint="Optional"
                                        />
                                        <InputField
                                            label="Username"
                                            name="username"
                                            hint="username for loggin-in with, is not case sensitive. must be unique for every trader. should not contain symbols."
                                        />
                                        <InputField
                                            label="Password"
                                            name="password"
                                            placeholder=""
                                            hint="password for loggin-in with, is case sensitive. Leave Blank if you want password remain unchanged."
                                        />
                                        <InputField
                                            label="City"
                                            name="city"
                                            hint="Optional"
                                        />
                                        <InputField
                                            label="Min. Time to book profit (No. of Seconds)"
                                            name="profit_book_interval"
                                            hint="Example: 120, will hold the trade for 2 minutes before closing a trade in profit"
                                        />

                                        <div className="mb-6 group px-0">
                                            <label className="block text-xs uppercase tracking-tight mb-2" style={{ color: '#bcc0cf' }}>Scalping Stop Loss</label>
                                            <select
                                                name="scalping_stop_loss"
                                                value={formData.scalping_stop_loss}
                                                onChange={handleChange}
                                                className="w-full bg-[#202940] border-b border-slate-700 py-2 text-white focus:outline-none focus:border-[#4caf50] transition-colors text-base appearance-none mt-1"
                                                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23bcc0cf\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 4px center', backgroundSize: '16px' }}
                                            >
                                                <option value="1">Enabled</option>
                                                <option value="0">Disabled</option>
                                            </select>
                                            <p className="text-[13px] mt-2 font-light leading-snug" style={{ color: '#bcc0cf' }}>If Disabled, Stop Loss or Booking Loss can be done after Min. time of profit booking.</p>
                                        </div>
                                    </div>

                                    <hr className="border-white/10 my-8 mx-2" />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 px-2 items-center">
                                        <div className="flex items-center gap-3 mb-6 pr-2 h-full py-4">
                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                <div className="relative flex items-center justify-center">
                                                    <input
                                                        type="checkbox"
                                                        name="is_demo"
                                                        checked={formData.is_demo}
                                                        onChange={handleChange}
                                                        className="appearance-none w-[18px] h-[18px] border border-slate-600 rounded-sm checked:bg-[#4caf50] shadow-sm transition-all cursor-pointer"
                                                    />
                                                    {formData.is_demo && <Check className="w-3 h-3 text-white absolute pointer-events-none stroke-[4px]" />}
                                                </div>
                                                <span className="text-[14px] group-hover:text-white transition-colors" style={{ color: '#bcc0cf' }}>demo account?</span>
                                            </label>
                                        </div>

                                        <InputField
                                            label="Transaction Password"
                                            name="transaction_password"
                                            type="password"
                                        />
                                    </div>

                                    <div className="px-2 mt-10">
                                        <button
                                            type="submit"
                                            className="bg-[#4caf50] hover:bg-[#43a047] text-white px-8 py-2.5 rounded shadow-lg font-bold text-[12px] uppercase tracking-wider transition-all shadow-[#4caf50]/20 active:scale-95"
                                        >
                                            SAVE
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.1);
                }
            `}</style>
        </div>
    );
};

export default UpdateClientPage;
