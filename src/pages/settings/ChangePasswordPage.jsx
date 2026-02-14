import React, { useState } from 'react';

const ChangePasswordPage = () => {
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
        setMessage({ type: 'success', text: 'Password updated successfully!' });
        setFormData({
            oldPassword: '',
            newPassword: '',
            repeatNewPassword: ''
        });

        setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    };

    return (
        <div className="flex flex-col h-full space-y-6">
            {/* Header Badge */}
            <div>
                <div className="inline-block bg-[#4CAF50] text-white px-6 py-3 rounded shadow-md">
                    <h2 className="text-base font-bold">Change Password</h2>
                </div>
            </div>

            {/* Form Section */}
            <div className="flex-1 bg-[#202940] p-8 rounded border border-[#2d3748] shadow-xl space-y-8">
                {/* Old Password - Full Width */}
                <div className="space-y-2">
                    <label className="block text-slate-400 text-sm">Old Password</label>
                    <input
                        type="password"
                        name="oldPassword"
                        value={formData.oldPassword}
                        onChange={handleChange}
                        className="w-full max-w-md bg-transparent border-b border-slate-600 text-white py-2 focus:outline-none focus:border-[#4CAF50] transition-colors"
                    />
                </div>

                {/* New Password and Repeat New Password - Side by Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* New Password */}
                    <div className="space-y-2">
                        <label className="block text-slate-400 text-sm">New Password</label>
                        <input
                            type="password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-slate-600 text-white py-2 focus:outline-none focus:border-[#4CAF50] transition-colors"
                        />
                    </div>

                    {/* Repeat New Password */}
                    <div className="space-y-2">
                        <label className="block text-slate-400 text-sm">Repeat New Password</label>
                        <input
                            type="password"
                            name="repeatNewPassword"
                            value={formData.repeatNewPassword}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-slate-600 text-white py-2 focus:outline-none focus:border-[#4CAF50] transition-colors"
                        />
                    </div>
                </div>

                {/* Message */}
                {message.text && (
                    <div className={`text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {message.text}
                    </div>
                )}

                {/* Update Button */}
                <div className="pt-4">
                    <button
                        onClick={handleUpdate}
                        className="bg-[#4CAF50] hover:bg-[#43A047] text-white font-bold py-3 px-10 rounded transition-all uppercase text-sm tracking-wider shadow-md"
                    >
                        UPDATE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordPage;
