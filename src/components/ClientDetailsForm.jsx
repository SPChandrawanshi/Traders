import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FormSection = ({ title, children, className = "" }) => (
  <div className={`mb-8 ${className}`}>
    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6 border-b border-[#2d3748] pb-2">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
      {children}
    </div>
  </div>
);

const InputField = ({ label, type = "text", subtext, placeholder, name, value, onChange, disabled }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs text-slate-400 font-medium">{label}</label>
    <input 
      type={type} 
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`bg-transparent border-b border-[#2d3748] text-slate-100 py-1 transition-colors focus:border-[#4CAF50] focus:outline-none text-sm w-full ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    />
    {subtext && <p className="text-[10px] text-slate-500 mt-1 leading-tight">{subtext}</p>}
  </div>
);

const CheckboxField = ({ label, name, checked = false, onChange }) => (
  <div className="flex items-center gap-3 py-1 cursor-pointer group" onClick={() => onChange({ target: { name, type: 'checkbox', checked: !checked } })}>
    <div className={`w-4 h-4 rounded border border-[#2d3748] flex items-center justify-center transition-colors ${checked ? 'bg-[#01B4EA] border-[#01B4EA]' : 'bg-transparent group-hover:border-[#01B4EA]'}`}>
      {checked && <div className="w-2 h-2 bg-white rounded-sm" />}
    </div>
    <label className="text-xs text-slate-300 font-medium cursor-pointer">{label}</label>
  </div>
);

const SelectField = ({ label, name, options, value, onChange, subtext }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs text-slate-400 font-medium">{label}</label>
    <div className="relative">
      <select 
        name={name}
        value={value}
        onChange={onChange}
        className="bg-[#0b111e] border border-[#2d3748] text-slate-100 py-1 px-3 rounded w-full appearance-none text-sm focus:outline-none focus:border-[#4CAF50]"
      >
        {options.map((opt, i) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-slate-400">
        <ChevronDown className="w-3 h-3" />
      </div>
    </div>
    {subtext && <p className="text-[10px] text-slate-500 mt-1 leading-tight">{subtext}</p>}
  </div>
);

const ClientDetailsForm = ({ onBack, onSave, mode = 'edit' }) => {
  const title = mode === 'create' ? 'Create Trading Client' : 'Update Trading Client';
  const saveBtnText = mode === 'create' ? 'Create Client' : 'Save Changes';

  const [formData, setFormData] = useState({
      name: '',
      mobile: '',
      username: '',
      password: '',
      city: '',
      creditLimit: '0',
      demoAccount: false,
      accountStatus: true,
      // ... Add other fields as needed
  });

  const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData(prev => ({
          ...prev,
          [name]: type === 'checkbox' ? checked : value
      }));
  };

  const handleSubmit = () => {
      if (onSave) {
          onSave(formData);
      }
  };

  return (
    <div className="bg-[#151c2c] rounded-lg border border-[#2d3748] overflow-hidden flex flex-col h-full animate-fade-in">
      <div className="px-6 py-4 bg-[#4CAF50]/10 border-b border-[#2d3748] flex justify-between items-center sticky top-0 z-10 backdrop-blur-sm">
        <h2 className="text-lg font-bold text-[#4CAF50] px-4 py-1 bg-[#4CAF50]/20 rounded inline-block uppercase tracking-wide">{title}</h2>
        <button onClick={onBack} className="text-slate-400 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors">Close</button>
      </div>
      
      <div className="p-8 flex-1">
        
        {/* Personal Details */}
        <FormSection title="Personal Details">
          <InputField label="Name" name="name" value={formData.name} onChange={handleChange} subtext="Insert Real name of the trader. Will be visible in trading App" />
          <InputField label="Mobile" name="mobile" value={formData.mobile} onChange={handleChange} subtext="Optional" />
          <InputField label="Username" name="username" value={formData.username} onChange={handleChange} subtext="username for loggin-in with, is not case sensitive. must be unique for every trader. should not contain symbols." />
          <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} subtext="password for loggin-in with, is case sensitive." />
          <InputField label="City" name="city" value={formData.city} onChange={handleChange} subtext="Optional" />
        </FormSection>

        {/* Config */}
        <FormSection title="Config">
          <InputField label="Credit Limit / Balance" name="creditLimit" value={formData.creditLimit} onChange={handleChange} />
          <InputField label="Max Loss Limit (Risk)" defaultValue="0" subtext="If Loss reaches this limit, all open positions will be squared off automatically." />
          
           <div className="space-y-2">
            <CheckboxField label="Allow Fresh Entry Order above high & below low?" checked />
            <CheckboxField label="Allow Orders between High - Low?" checked />
             <CheckboxField label="Trade equity as units instead of lots." />
             <CheckboxField label="Account Status" name="accountStatus" checked={formData.accountStatus} onChange={handleChange} />
          </div>

          <div className="space-y-2">
             <CheckboxField label="Only admin can close his/her active trades?" />
               <CheckboxField label="demo account?" name="demoAccount" checked={formData.demoAccount} onChange={handleChange} />
             <CheckboxField label="Auto Close Trades if condition met" />
          </div>

          <InputField label="auto-Close all active trades when the losses reach % of Ledger-balance" defaultValue="0" subtext="Example: 95, will close when losses reach 95% of ledger balance" />
          <SelectField label="Trading View Chart" options={["Enabled", "Disabled"]} defaultValue="Enabled" subtext="To show chart on user or not?" />
          <InputField label="Notify client when the losses reach % of Ledger-balance" defaultValue="0" subtext="Example: 70, will send notification to customer every 5-minutes until losses cross 70% of ledger balance" />
          
          <InputField label="Min. Time to book profit (No. of Seconds)" defaultValue="0" subtext="Example: 120, will hold the trade for 2 minutes before closing a trade in profit" />
          <SelectField label="Scalping Stop Loss" options={["Enabled", "Disabled"]} defaultValue="Enabled" subtext="If Disabled, Stop Loss or Booking Loss can be done after Min. time of profit booking." />
        </FormSection>

        {/* MCX Futures */}
        <FormSection title="MCX Futures">
          <CheckboxField label="MCX Trading" checked />
          <InputField label="Minimum lot size required per single trade of MCX" defaultValue="1" />
          <InputField label="Maximum lot size allowed per single trade of MCX" defaultValue="0" />
          <InputField label="Maximum lot size allowed per scrip of MCX to be actively open at a time" defaultValue="0" />
          <InputField label="Max Size All Commodity" defaultValue="0" />
          <SelectField label="Mcx Brokerage Type" options={["Per Crore Basis", "Per Lot Basis"]} />
           <InputField label="MCX brokerage" defaultValue="0" />
           <SelectField label="Exposure Mcx Type" options={["Per Lot Basis", "Per Crore Basis"]} />
           
           <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8 mt-4 pt-4 border-t border-[#2d3748]">
               <div>
                   <h5 className="text-xs font-bold text-slate-500 mb-3 uppercase">MCX Exposure Lot wise:</h5>
                   <div className="space-y-4">
                       <InputField label="BULLDEX INTRADAY" defaultValue="0" />
                       <InputField label="GOLD INTRADAY" defaultValue="0" />
                       <InputField label="SILVER INTRADAY" defaultValue="0" />
                   </div>
               </div>
               <div>
                   <h5 className="text-xs font-bold text-slate-500 mb-3 uppercase invisible">HOLDING</h5>
                    <div className="space-y-4">
                       <InputField label="BULLDEX HOLDING" defaultValue="0" />
                       <InputField label="GOLD HOLDING" defaultValue="0" />
                       <InputField label="SILVER HOLDING" defaultValue="0" />
                   </div>
               </div>
           </div>
        </FormSection>

        {/* Equity Futures */}
        <FormSection title="Equity Futures">
          <CheckboxField label="Equity Futures Trading" checked />
           <InputField label="Minimum lot size required per single trade of Equity Future" defaultValue="1" />
           <InputField label="Maximum lot size allowed per single trade of Equity Future" defaultValue="0" />
           <InputField label="Maximum lot size allowed per scrip of Equity Future to be actively open at a time" defaultValue="0" />
           <InputField label="Max Size All Script" defaultValue="0" />
            <SelectField label="Equity Futures Brokerage Type" options={["Per Crore Basis", "Per Lot Basis"]} />
            <InputField label="Equity Futures brokerage" defaultValue="0" />
             <SelectField label="Exposure Futures Type" options={["Per Lot Basis", "Per Crore Basis"]} />
              <div className="col-span-1 md:col-span-2">
                 <h5 className="text-xs font-bold text-slate-500 mb-3 uppercase">Equity Futures Exposure Lot wise:</h5>
                  <div className="grid grid-cols-2 gap-8">
                     <InputField label="INTRADAY" defaultValue="0" />
                     <InputField label="HOLDING" defaultValue="0" />
                  </div>
              </div>
        </FormSection>


        {/* Options Config */}
        <FormSection title="Options Config">
            <CheckboxField label="Index Option Trading" checked />
            <CheckboxField label="Equity Option Trading" checked />

            <SelectField label="Option Brokerage Type" options={["Per Lot Basis", "Per Crore Basis"]} />
            <InputField label="Option Brokerage" defaultValue="0" />
            
            <SelectField label="Option Exposure Type" options={["Per Lot Basis", "Per Crore Basis"]} />
             <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
                 <InputField label="Option margin Intraday" defaultValue="0" />
                  <InputField label="Option margin Holding" defaultValue="0" />
             </div>

             <InputField label="Maximum quantity allowed per single trade of NIFTY Options" defaultValue="0" />
             <InputField label="Maximum quantity allowed per single trade of BANKNIFTY Options" defaultValue="0" />
             <InputField label="Maximum quantity allowed per single trade of FINNIFTY Options" defaultValue="0" />
             <InputField label="Maximum quantity allowed per single trade of Other Options" defaultValue="0" />

             <InputField label="Max Quantity all Index Options" defaultValue="0" />
             <InputField label="Max Quantity all Equity Options" defaultValue="0" />

             <InputField label="Max Quantity Nifty Options" defaultValue="0" />
             <InputField label="Max Quantity BankNifty Options" defaultValue="0" />
             <InputField label="Max Quantity Finnifty Options" defaultValue="0" />
        </FormSection>
        
        {/* Exchange Config */}
         <FormSection title="Exchange Config">
             <CheckboxField label="NSE" checked />
             <CheckboxField label="MCX" checked />
              <CheckboxField label="NSE OPT" checked />
              <div className="col-span-1 md:col-span-2">
                <p className="text-[10px] text-slate-500">Uncheck to disable specific exchange for this user.</p>
              </div>
         </FormSection>

        {/* Other */}
        <FormSection title="Other">
            <div className="col-span-1 md:col-span-2">
                <label className="text-xs text-slate-400 font-medium">Notes</label>
                <textarea className="w-full bg-transparent border-b border-[#2d3748] text-slate-100 py-2 transition-colors focus:border-[#4CAF50] focus:outline-none text-sm h-20" placeholder="Add notes here..."></textarea>
            </div>
             <SelectField label="Group" options={["Select Group"]} />
        </FormSection>

        {/* Create Button */}
        <div className="mt-8 pt-6 border-t border-[#2d3748]">
          <button 
            onClick={handleSubmit} 
            className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-3 px-8 rounded transition-all uppercase tracking-wider text-xs shadow-lg"
          >
            {saveBtnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientDetailsForm;
