import React, { useState } from 'react';
import { ChevronDown, X, Check } from 'lucide-react';

const InputField = ({ label, type = "text", placeholder, name, value, onChange }) => (
  <div className="flex flex-col gap-1 w-full group">
    <label className="text-[13px] uppercase tracking-tight mb-1" style={{ color: '#bcc0cf' }}>{label}</label>
    <div className="border-b border-white/10 group-focus-within:border-[#4caf50] transition-colors pb-1">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent text-white py-1 outline-none text-[15px] placeholder:text-slate-600 font-normal"
      />
    </div>
  </div>
);

const WhiteSelectField = ({ label, name, options, value, onChange, placeholder }) => (
  <div className="flex flex-col gap-1 w-full">
    <label className="text-[13px] uppercase tracking-tight mb-2" style={{ color: '#bcc0cf' }}>{label}</label>
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-white text-slate-800 py-2.5 px-3 pr-10 outline-none text-sm rounded shadow-sm appearance-none font-bold"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value || opt} value={opt.value || opt}>{opt.label || opt}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
        <ChevronDown className="w-4 h-4" />
      </div>
    </div>
  </div>
);

const CreateTradeForm = ({ onSave, onBack }) => {
  const [formData, setFormData] = useState({
    scrip: '',
    category: 'Mega',
    userId: '',
    lots: '',
    buyRate: '',
    sellRate: '',
    transactionPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave(formData);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a2035] lg: font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Card Container */}
        <div className="bg-[#202940] rounded shadow-2xl relative border border-white/5 mt-6">

          {/* Floating Header Ribbon */}
          <div className="absolute -top-6 left-5 px-6 py-3.5 rounded shadow-lg bg-gradient-to-tr from-[#43a047] to-[#66bb6a] z-10 w-fit">
            <h4 className="text-white text-[16px] font-normal m-0 tracking-tight">Create Trades</h4>
          </div>

          <form onSubmit={handleSubmit} className="px-6 py-12 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 px-2 lg:px-4">

              {/* Left Column */}
              <div className="space-y-10">
                <div>
                  <WhiteSelectField
                    label="Scrip"
                    name="scrip"
                    placeholder="Select Scrip"
                    value={formData.scrip}
                    onChange={handleChange}
                    options={[
                      "360ONE FUTURE", "AARTIIND FUTURE", "ABBOTINDIA FUTURE", "ABCAPITAL FUTURE", "ADANIENT FUTURE", "GOLD26APRFUT", "CRUDEOIL20MARFUT"
                    ]}
                  />
                  <div className="mt-4">
                    <WhiteSelectField
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      options={["Mega", "Mini", "Lot"]}
                    />
                  </div>
                </div>

                <InputField
                  label="Lots / Units"
                  name="lots"
                  value={formData.lots}
                  onChange={handleChange}
                  placeholder=""
                />

                <InputField
                  label="Sell Rate"
                  name="sellRate"
                  value={formData.sellRate}
                  onChange={handleChange}
                  placeholder=""
                />
              </div>

              {/* Right Column */}
              <div className="space-y-10">
                <WhiteSelectField
                  label="User ID"
                  name="userId"
                  placeholder="Select User"
                  value={formData.userId}
                  onChange={handleChange}
                  options={[
                    "3761 : demo001", "3705 : demo0174", "4424 : SHRE043"
                  ]}
                />

                <InputField
                  label="Buy Rate"
                  name="buyRate"
                  value={formData.buyRate}
                  onChange={handleChange}
                  placeholder=""
                />

                <InputField
                  label="Transaction Password"
                  name="transactionPassword"
                  type="password"
                  value={formData.transactionPassword}
                  onChange={handleChange}
                  placeholder=""
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="px-4 mt-12">
              <button
                type="submit"
                className="bg-[#4caf50] hover:bg-[#43a047] text-white px-10 py-2.5 rounded shadow-lg font-bold text-[13px] uppercase tracking-wider transition-all shadow-[#4caf50]/20 active:scale-95"
                style={{ background: '#5cb85c' }}
              >
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
                select {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                }
            `}</style>
    </div>
  );
};

export default CreateTradeForm;
