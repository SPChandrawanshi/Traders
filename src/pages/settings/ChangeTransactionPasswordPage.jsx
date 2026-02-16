import React, { useState } from 'react';

const ChangeTransactionPasswordPage = () => {
    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        repeatNewPassword: ''
    });
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        if (!formData.oldPassword || !formData.newPassword || !formData.repeatNewPassword) {
            setMessage({ type: 'error', text: 'All fields are required.' });
            return;
        }

        if (formData.newPassword !== formData.repeatNewPassword) {
            setMessage({ type: 'error', text: 'New passwords do not match.' });
            return;
        }

        // Mock update logic
        setMessage({ type: 'success', text: 'Transaction password updated successfully!' });
        setFormData({
            oldPassword: '',
            newPassword: '',
            repeatNewPassword: ''
        });

        setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    };

    return (
        <div className="flex flex-col h-full bg-[#1a2035] space-y-6 pt-10">
            <div className="relative">
                {/* Material Card Container */}
                <div className="bg-[#1f283e] rounded-md shadow-2xl relative pt-16 pb-6">
                    {/* Floating Green Header Card */}
                    <div
                        className="absolute -top-6 left-5 rounded-md shadow-[0_4px_20px_0_rgba(0,0,0,0.14),0_7px_10px_-5px_rgba(76,175,80,0.4)] px-8 py-5 z-10"
                        style={{ background: 'linear-gradient(60deg, #288c6c, #4ea752)' }}
                    >
                        <h4 className="text-white text-[15px] font-bold tracking-tight">Change Transaction Password</h4>
                    </div>

                    <div className="px-8 space-y-10">
                        {/* Error/Success Message Area */}
                        <div className="min-h-[20px]">
                            {message.text && (
                                <div className={`text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                                    {message.text}
                                </div>
                            )}
                        </div>

                        <form onSubmit={handleUpdate} autoComplete="off">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                {/* Old Password */}
                                <div className="space-y-2 group">
                                    <label className="block text-slate-300 text-[14px] font-normal">Old Password</label>
                                    <input
                                        type="password"
                                        name="oldPassword"
                                        value={formData.oldPassword}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border-b border-white/10 text-white pb-1.5 focus:outline-none focus:border-[#4caf50] transition-colors text-[14px]"
                                    />
                                </div>

                                <div className="hidden md:block"></div>

                                {/* New Password */}
                                <div className="space-y-2 group">
                                    <label className="block text-slate-300 text-[14px] font-normal">New Password</label>
                                    <input
                                        type="password"
                                        name="newPassword"
                                        value={formData.newPassword}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border-b border-white/10 text-white pb-1.5 focus:outline-none focus:border-[#4caf50] transition-colors text-[14px]"
                                    />
                                </div>

                                {/* Repeat New Password */}
                                <div className="space-y-2 group">
                                    <label className="block text-slate-300 text-[14px] font-normal">Repeat New Password</label>
                                    <input
                                        type="password"
                                        name="repeatNewPassword"
                                        value={formData.repeatNewPassword}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border-b border-white/10 text-white pb-1.5 focus:outline-none focus:border-[#4caf50] transition-colors text-[14px]"
                                    />
                                </div>
                            </div>

                            {/* Actions Group */}
                            <div className="mt-12 space-y-4">
                                <button
                                    type="submit"
                                    className="btn-success-gradient text-white font-bold py-2.5 px-8 rounded uppercase text-[11px] tracking-widest"
                                >
                                    UPDATE
                                </button>

                                <div className="block pt-2">
                                    <button type="button" className="text-slate-400 hover:text-white text-[12px] font-medium transition-colors">
                                        Forgot Transaction Password?
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangeTransactionPasswordPage;
