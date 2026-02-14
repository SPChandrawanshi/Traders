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

    const handleUpdate = () => {
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
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="mb-8">
                <div className="inline-block bg-[#4CAF50] text-white px-4 py-2 rounded-md shadow-sm">
                    <h2 className="text-base font-semibold">Change Transaction Password</h2>
                </div>
            </div>

            {/* Form Section */}
            <div className="flex-1 bg-[#151c2c] p-8 rounded-lg border border-[#2d3748] shadow-xl">
                <div className="max-w-4xl space-y-10">
                    {/* Old Transaction Password - Full Width */}
                    <div className="space-y-2">
                        <label className="block text-slate-400 text-sm font-medium">Old Transaction Password</label>
                        <input
                            type="password"
                            name="oldPassword"
                            value={formData.oldPassword}
                            onChange={handleChange}
                            className="w-full md:w-1/2 bg-transparent border-b border-slate-700 text-white py-1 focus:outline-none focus:border-[#4CAF50] transition-colors"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {/* New Transaction Password */}
                        <div className="space-y-2">
                            <label className="block text-slate-400 text-sm font-medium">New Transaction Password</label>
                            <input
                                type="password"
                                name="newPassword"
                                value={formData.newPassword}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-slate-700 text-white py-1 focus:outline-none focus:border-[#4CAF50] transition-colors"
                            />
                        </div>

                        {/* Repeat New Transaction Password */}
                        <div className="space-y-2">
                            <label className="block text-slate-400 text-sm font-medium">Repeat New Transaction Password</label>
                            <input
                                type="password"
                                name="repeatNewPassword"
                                value={formData.repeatNewPassword}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-slate-700 text-white py-1 focus:outline-none focus:border-[#4CAF50] transition-colors"
                            />
                        </div>
                    </div>
                </div>

                {/* Message */}
                {message.text && (
                    <div className={`mt-6 text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {message.text}
                    </div>
                )}

                {/* Update Button */}
                <div className="mt-12">
                    <button
                        onClick={handleUpdate}
                        className="bg-[#4CAF50] hover:bg-green-600 text-white font-medium py-2 px-8 rounded transition-all uppercase text-xs tracking-wider"
                    >
                        UPDATE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChangeTransactionPasswordPage;
