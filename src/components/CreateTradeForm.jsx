import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const InputField = ({ label, type = "text", placeholder, name, value, onChange }) => (
  <div className="flex flex-col gap-1 w-full">
    <label className="text-xs text-slate-400 font-medium">{label}</label>
    <div className="border-b border-[#2d3748] focus-within:border-[#4CAF50] transition-colors">
        <input 
        type={type} 
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent text-slate-100 py-2 outline-none text-sm placeholder:text-slate-600"
        />
    </div>
  </div>
);

const SelectField = ({ label, name, options, value, onChange }) => (
  <div className="flex flex-col gap-1 w-full">
    <label className="text-xs text-slate-400 font-medium">{label}</label>
    <div className="relative border-b border-[#2d3748] focus-within:border-[#4CAF50] transition-colors">
      <select 
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-[#0b111e] text-slate-100 py-2 pr-8 outline-none text-sm appearance-none cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none text-slate-400">
        <ChevronDown className="w-4 h-4" />
      </div>
    </div>
  </div>
);

const CreateTradeForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    scrip: 'Select Scrip',
    userId: 'Select User',
    lots: '',
    buyRate: '',
    sellRate: '',
    transactionPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (onSave) {
        onSave(formData);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#0b111e] p-6 animate-fade-in">
      <div className="inline-block bg-[#4CAF50] rounded overflow-hidden mb-8 shadow-lg w-fit">
        <div className="bg-[#4CAF50] text-white font-bold py-2.5 px-6 text-sm">
          Create Trades
        </div>
      </div>

      <div className="bg-[#151c2c] p-8 md:p-12 rounded border border-[#2d3748] shadow-2xl relative overflow-hidden flex-1">
         <div className="absolute top-0 left-0 w-1 h-full bg-[#4CAF50]" />
         
         <h2 className="text-slate-400 text-sm mb-8 font-medium">Incorrect Transaction Password</h2>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-8">
            <SelectField 
                label="Scrip" 
                name="scrip" 
                value={formData.scrip} 
                onChange={handleChange} 
                options={["Select Scrip", "Mega", "Gold", "Silver"]} 
            />
             <SelectField 
                label="User ID" 
                name="userId" 
                value={formData.userId} 
                onChange={handleChange} 
                options={["Select User", "User 1", "User 2"]} 
            />
            
            <InputField 
                label="Lots / Units" 
                name="lots" 
                value={formData.lots} 
                onChange={handleChange} 
            />
            <InputField 
                label="Buy Rate" 
                name="buyRate" 
                value={formData.buyRate} 
                onChange={handleChange} 
            />
            
            <InputField 
                label="Sell Rate" 
                name="sellRate" 
                value={formData.sellRate} 
                onChange={handleChange} 
            />
             <InputField 
                label="Transaction Password" 
                name="transactionPassword" 
                type="password"
                value={formData.transactionPassword} 
                onChange={handleChange} 
            />
         </div>

         <div className="flex justify-start mt-8 border-t border-[#2d3748] pt-6">
             <button 
                onClick={handleSubmit} 
                className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-3 px-10 rounded shadow-lg uppercase tracking-wider text-xs transition-all"
            >
                 SAVE
             </button>
         </div>
      </div>
    </div>
  );
};

export default CreateTradeForm;
