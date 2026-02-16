import React, { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';

const CreateClientPage = ({ client, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        fullname: '',
        mobile: '',
        username: '',
        password: '',
        city: '',
        profit_book_interval: '120',
        scalping_stop_loss: '0',
        is_demo: true,
        transaction_password: ''
    });

    useEffect(() => {
        if (client) {
            setFormData({
                fullname: client.fullName || '',
                mobile: client.mobile || '',
                username: `${client.username}_copy` || '',
                password: '',
                city: client.city || '',
                profit_book_interval: '120',
                scalping_stop_loss: '0',
                is_demo: true,
                transaction_password: ''
            });
        }
    }, [client]);

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

    const inputClass = "w-full bg-transparent border-b border-white/20 py-2 px-0 text-white focus:outline-none focus:border-[#5cb85c] transition-all text-sm autofill:bg-transparent";
    const labelClass = "block text-xs text-slate-400 font-medium mb-1";
    const hintClass = "text-[10px] text-slate-500 mt-1 leading-relaxed";

    return (
        <div className="fixed inset-0 bg-[#000000d9] backdrop-blur-sm z-[60] flex items-center justify-center p-4 overflow-y-auto">
            <div className="w-full max-w-5xl bg-[#1a2035] rounded-lg shadow-2xl relative animate-in fade-in zoom-in duration-300 border border-white/5 my-8">

                {/* Header Card Style - Material Dashboard Layered Look */}
                <div className="absolute -top-6 left-6 z-10">
                    <div className="relative">
                        {/* Main Green Card */}
                        <div className="bg-gradient-to-tr from-[#43a047] to-[#66bb6a] px-8 py-4 rounded-md shadow-[0_4px_20px_0_rgba(0,0,0,0.14),0_7px_10px_-5px_rgba(76,175,80,0.4)] min-w-[280px]">
                            <h2 className="text-base font-bold text-white uppercase tracking-tight">
                                {client ? 'Copy Trading Client:' : 'Create Trading Client:'}
                            </h2>
                        </div>
                        {/* Characteristic Offset Square behind */}
                        <div className="absolute -bottom-2 left-[-8px] w-6 h-6 bg-[#388e3c] rounded -z-10 blur-[1px]"></div>
                    </div>
                </div>

                <div className="flex justify-end p-4">
                    <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-8 pt-10">
                    <div className="space-y-10">

                        {/* Personal Details Section */}
                        <section>
                            <h3 className="text-xl font-medium text-slate-200 mb-8 border-b border-white/5 pb-2 inline-block">
                                Personal Details:
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mt-4">
                                <div>
                                    <label className={labelClass}>Name</label>
                                    <input
                                        type="text"
                                        name="fullname"
                                        value={formData.fullname}
                                        onChange={handleChange}
                                        className={inputClass}
                                        required
                                    />
                                    <p className={hintClass}>Insert Real name of the trader. Will be visible in trading App</p>
                                </div>

                                <div>
                                    <label className={labelClass}>Mobile</label>
                                    <input
                                        type="text"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className={inputClass}
                                    />
                                    <p className={hintClass}>Optional</p>
                                </div>

                                <div>
                                    <label className={labelClass}>Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        className={inputClass}
                                        required
                                    />
                                    <p className={hintClass}>username for logging-in with, is not case sensitive. must be unique for every trader. should not contain symbols.</p>
                                </div>

                                <div>
                                    <label className={labelClass}>Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={inputClass}
                                        placeholder="••••••••"
                                        required={!client}
                                    />
                                    <p className={hintClass}>password for logging-in with, is case sensitive. Leave Blank if you want password remain unchanged.</p>
                                </div>

                                <div>
                                    <label className={labelClass}>City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className={inputClass}
                                    />
                                    <p className={hintClass}>Optional</p>
                                </div>

                                <div>
                                    <label className={labelClass}>Min. Time to book profit (No. of Seconds)</label>
                                    <input
                                        type="text"
                                        name="profit_book_interval"
                                        value={formData.profit_book_interval}
                                        onChange={handleChange}
                                        className={inputClass}
                                    />
                                    <p className={hintClass}>Example: 120, will hold the trade for 2 minutes before closing a trade in profit</p>
                                </div>

                                <div>
                                    <label className={labelClass}>Scalping Stop Loss</label>
                                    <select
                                        name="scalping_stop_loss"
                                        value={formData.scalping_stop_loss}
                                        onChange={handleChange}
                                        className={`${inputClass} bg-transparent appearance-none cursor-pointer`}
                                    >
                                        <option value="1" className="bg-[#1a2035]">Enabled</option>
                                        <option value="0" className="bg-[#1a2035]">Disabled</option>
                                    </select>
                                    <p className={hintClass}>If Disabled, Stop Loss or Booking Loss can be done after Min. time of profit booking.</p>
                                </div>
                            </div>
                        </section>

                        <div className="h-[1px] bg-white/5 mx-[-2rem]"></div>

                        {/* Bottom Controls */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
                            <div className="flex items-center gap-3 py-4">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <div className="relative flex items-center justify-center">
                                        <input
                                            type="checkbox"
                                            name="is_demo"
                                            checked={formData.is_demo}
                                            onChange={handleChange}
                                            className="sr-only peer"
                                        />
                                        <div className="w-5 h-5 border-2 border-slate-500 rounded bg-transparent peer-checked:bg-[#5cb85c] peer-checked:border-[#5cb85c] transition-all"></div>
                                        <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">demo account?</span>
                                </label>
                            </div>

                            <div>
                                <label className={labelClass}>Transaction Password</label>
                                <input
                                    type="password"
                                    name="transaction_password"
                                    value={formData.transaction_password}
                                    onChange={handleChange}
                                    className={inputClass}
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {/* Save Button */}
                        <div className="pt-8">
                            <button
                                type="submit"
                                className="bg-[#5cb85c] hover:bg-[#4caf50] text-white px-8 py-2 rounded font-bold text-sm tracking-wide shadow-lg transition-all active:scale-95 flex items-center gap-2"
                            >
                                SAVE
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateClientPage;
