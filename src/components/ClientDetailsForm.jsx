import React from 'react';
import { ChevronDown } from 'lucide-react';

const FormSection = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-slate-100 italic mb-6 border-b border-[#2d3748] pb-2">{title}:</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
      {children}
    </div>
  </div>
);

const InputField = ({ label, type = "text", subtext, placeholder, defaultValue }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm text-slate-400 font-medium">{label}</label>
    <input 
      type={type} 
      defaultValue={defaultValue}
      placeholder={placeholder}
      className={`bg-transparent border-b border-[#2d3748] text-slate-100 py-1 transition-colors focus:border-[#01B4EA] focus:outline-none text-sm`} 
    />
    {subtext && <p className="text-[10px] text-slate-500 mt-1">{subtext}</p>}
  </div>
);

const CheckboxField = ({ label, checked = false }) => (
  <div className="flex items-center gap-3 py-2 cursor-pointer group">
    <div className={`w-4 h-4 rounded border border-[#01B4EA] flex items-center justify-center transition-colors ${checked ? 'bg-[#01B4EA]' : 'bg-transparent group-hover:bg-[#01B4EA]/20'}`}>
      {checked && <div className="w-2 h-2 bg-white rounded-sm" />}
    </div>
    <label className="text-xs text-slate-300 font-medium cursor-pointer">{label}</label>
  </div>
);

const SelectField = ({ label, options, defaultValue, subtext }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm text-slate-400 font-medium">{label}</label>
    <div className="relative">
      <select className="bg-[#1c2638] border border-[#2d3748] text-slate-100 p-2 rounded w-full appearance-none text-sm focus:outline-none focus:border-[#01B4EA]">
        {options.map((opt, i) => (
          <option key={i} value={opt} selected={opt === defaultValue}>{opt}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-slate-400">
        <ChevronDown className="w-4 h-4" />
      </div>
    </div>
    {subtext && <p className="text-[10px] text-slate-500 mt-1">{subtext}</p>}
  </div>
);

const ClientDetailsForm = ({ onBack }) => {
  return (
    <div className="bg-[#151c2c] rounded-lg border border-[#2d3748] overflow-hidden">
      <div className="px-6 py-4 bg-[#4CAF50]/10 border-b border-[#2d3748] flex justify-between items-center">
        <h2 className="text-xl font-semibold text-[#4CAF50] italic px-4 py-2 bg-[#4CAF50]/20 rounded inline-block">Update Trading Client:</h2>
        <button onClick={onBack} className="text-slate-400 hover:text-white text-sm font-medium transition-colors">← Back to Overview</button>
      </div>
      
      <div className="p-8">
        {/* Personal Details */}
        <FormSection title="Personal Details">
          <InputField label="Name" defaultValue="Jitu0" subtext="Insert Real name of the trader. Will be visible in trading App" />
          <InputField label="Mobile" placeholder="Optional" />
          <InputField label="Username" defaultValue="SHRE072" subtext="username for loggin-in with, is not case sensitive. must be unique for every trader. should not contain symbols." />
          <InputField label="Password" type="password" placeholder="Password" subtext="password for loggin-in with, is case sensitive. Leave Blank if you want password remain unchanged." />
          <InputField label="City" placeholder="Optional" />
        </FormSection>

        {/* Config */}
        <FormSection title="Config">
          <CheckboxField label="demo account?" />
          <CheckboxField label="Allow Fresh Entry Order above high & below low?" checked />
          <CheckboxField label="Allow Orders between High - Low?" checked />
          <CheckboxField label="Trade equity as units instead of lots." checked />
          <CheckboxField label="Account Status" checked />
          <CheckboxField label="Auto Close Trades if condition met" checked />
          
          <InputField label="auto-Close all active trades when the losses reach % of Ledger-balance" defaultValue="90" subtext="Example: 95, will close when losses reach 95% of ledger balance" />
          <InputField label="Notify client when the losses reach % of Ledger-balance" defaultValue="70" subtext="Example: 70, will send notification to customer every 5-minutes until losses cross 70% of ledger balance" />
          
          <InputField label="Min. Time to book profit (No. of Seconds)" defaultValue="0" subtext="Example: 120, will hold the trade for 2 minutes before closing a trade in profit" />
          <SelectField 
            label="Scalping Stop Loss" 
            options={["Enabled", "Disabled"]} 
            defaultValue="Enabled" 
            subtext="If Disabled, Stop Loss or Booking Loss can be done after Min. time of profit booking."
          />
        </FormSection>

        {/* MCX Futures */}
        <FormSection title="MCX Futures">
          <CheckboxField label="MCX Trading" checked />
          <InputField label="Minimum lot size required per single trade of MCX" defaultValue="1" />
          <InputField label="Maximum lot size allowed per single trade of MCX" defaultValue="5" />
          <InputField label="Maximum lot size allowed per scrip of MCX to be actively open at a time" defaultValue="5" />
          <InputField label="Max Size All Commodity" defaultValue="15" />
          <SelectField label="Mcx Brokerage Type" options={["Per Crore Basis", "Per Lot Basis"]} />
          <InputField label="MCX brokerage" defaultValue="1000.0000" />
          <SelectField label="Exposure Mcx Type" options={["Per Lot Basis", "Per Crore Basis"]} />
          
          <div className="md:col-span-2 grid grid-cols-2 lg:grid-cols-2 gap-8 mt-4 pt-4 border-t border-[#2d3748]">
            <div>
              <h4 className="text-sm font-semibold text-slate-200 mb-4 uppercase tracking-wider">MCX Exposure Lot wise:</h4>
              <InputField label="BULLDEX INTRADAY" defaultValue="1" />
              <div className="mt-4"><InputField label="GOLD INTRADAY" defaultValue="50000" /></div>
              <div className="mt-4"><InputField label="SILVER INTRADAY" defaultValue="50000" /></div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-200 mb-4 uppercase tracking-wider invisible">Holding:</h4>
              <InputField label="BULLDEX HOLDING" defaultValue="1" />
              <div className="mt-4"><InputField label="GOLD HOLDING" defaultValue="250000" /></div>
              <div className="mt-4"><InputField label="SILVER HOLDING" defaultValue="25000" /></div>
            </div>
          </div>
        </FormSection>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8 pt-6 border-t border-[#2d3748]">
          <button className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-3 px-8 rounded transition-all uppercase tracking-wider text-xs">
            Save Changes
          </button>
          <button onClick={onBack} className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded transition-all uppercase tracking-wider text-xs">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientDetailsForm;
