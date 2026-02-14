import React, { useState } from 'react';
import { ArrowLeft, Save } from 'lucide-react';

const CreateFundForm = ({ onSave, onBack, mode = 'deposit', initialUser }) => {
  const isWithdraw = mode === 'withdraw';
  const title = isWithdraw ? 'Create Funds Withdrawal' : 'Create Funds';
  const buttonText = isWithdraw ? 'SAVE FUNDS WITHDRAWAL' : 'ADD FUNDS';

  const [formData, setFormData] = useState({
    userId: initialUser?.id || '',
    notes: '',
    amount: '',
    transactionPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, mode });
  };

  return (
    <div className="flex flex-col h-full bg-[#0b111e] p-6 animate-fade-in relative">
        {/* Back Button */}
        <button 
            onClick={onBack}
            className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
        >
            <ArrowLeft className="w-6 h-6" />
        </button>

      {/* Header */}
      <div className="mb-8">
        <h2 className="bg-[#4CAF50] text-white py-2 px-6 rounded-sm text-sm font-medium uppercase tracking-wide inline-block shadow-lg">
          {title}
        </h2>
      </div>

      {/* Form Container */}
      <div className="bg-[#151c2c] p-8 rounded border border-[#2d3748] shadow-xl max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="text-slate-400 text-xs uppercase tracking-wider font-medium">User ID</label>
                    <div className="relative">
                        <select 
                            name="userId" 
                            value={formData.userId} 
                            onChange={handleChange}
                            className="w-full bg-white text-slate-900 px-4 py-2.5 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#4CAF50] appearance-none"
                        >
                            <option value="">Select User</option>
                            <option value="3705377">Demo ji (3705377)</option>
                            <option value="5643097">New User (5643097)</option>
                            <option value="SHRE001">SHRE001 : User One</option>
                            <option value="SHRE002">SHRE002 : User Two</option>
                        </select>
                         <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-slate-400 text-xs uppercase tracking-wider font-medium">Funds</label>
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-slate-600 text-white py-2 focus:outline-none focus:border-[#4CAF50] transition-colors placeholder-slate-600"
                        placeholder="0.00"
                    />
                </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="text-slate-400 text-xs uppercase tracking-wider font-medium">Notes</label>
                    <input
                        type="text"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-slate-600 text-white py-2 focus:outline-none focus:border-[#4CAF50] transition-colors"
                    />
                </div>

                 <div className="space-y-2">
                    <label className="text-slate-400 text-xs uppercase tracking-wider font-medium">Transaction Password</label>
                    <input
                        type="password"
                        name="transactionPassword"
                        value={formData.transactionPassword}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-slate-600 text-white py-2 focus:outline-none focus:border-[#4CAF50] transition-colors"
                    />
                </div>
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-2.5 px-8 rounded shadow-lg uppercase tracking-wider text-xs transition-all flex items-center gap-2"
            >
              {buttonText}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateFundForm;
