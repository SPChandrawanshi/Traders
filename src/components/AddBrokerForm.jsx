import React, { useState } from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';

const FormSection = ({ title, children, className = "" }) => (
  <div className={`mb-8 ${className}`}>
    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6 border-b border-[#2d3748] pb-2">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
      {children}
    </div>
  </div>
);

const InputField = ({ label, type = "text", subtext, placeholder, name, value, onChange }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs text-slate-400 font-medium">{label}</label>
    <input 
      type={type} 
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-transparent border-b border-[#2d3748] text-slate-100 py-1 transition-colors focus:border-[#4CAF50] focus:outline-none text-sm w-full"
    />
    {subtext && <p className="text-[10px] text-slate-500 mt-1 leading-tight">{subtext}</p>}
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

const ToggleSwitch = ({ label, checked, onChange }) => (
    <div className="flex justify-between items-center py-2 border-b border-[#2d3748]">
        <span className="text-xs text-slate-300 font-medium">{label}</span>
        <button 
            type="button"
            onClick={() => onChange(!checked)}
            className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${checked ? 'bg-[#4CAF50]' : 'bg-slate-700'}`}
        >
            <div className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
        </button>
    </div>
);

const SegmentSettings = ({ title, prefix, data, onChange }) => (
    <div className="mb-6 p-4 bg-[#1a2333] rounded border border-[#2d3748]">
        <div className="flex justify-between items-center mb-4">
             <h4 className="text-sm font-bold text-[#01B4EA] uppercase">{title}</h4>
             <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Trading Enabled</span>
                 <button 
                    type="button"
                    onClick={() => onChange(prefix, 'enabled', !data[prefix]?.enabled)}
                    className={`w-8 h-4 flex items-center rounded-full p-0.5 transition-colors ${data[prefix]?.enabled ? 'bg-[#4CAF50]' : 'bg-slate-700'}`}
                >
                    <div className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform ${data[prefix]?.enabled ? 'translate-x-4' : 'translate-x-0'}`} />
                </button>
             </div>
        </div>

        {data[prefix]?.enabled && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                     <SelectField 
                        label="Brokerage Type" 
                        name={`${prefix}_brokerageType`}
                        value={data[prefix]?.brokerageType || 'Per Crore Basis'} 
                        options={['Per Crore Basis', 'Per Lot Basis']}
                        onChange={(e) => onChange(prefix, 'brokerageType', e.target.value)}
                    />
                     <InputField 
                        label="Brokerage" 
                        name={`${prefix}_brokerage`}
                        value={data[prefix]?.brokerage || '0'} 
                        onChange={(e) => onChange(prefix, 'brokerage', e.target.value)}
                    />
                </div>
                <div className="space-y-4">
                    <SelectField 
                        label="Exposure Type" 
                        name={`${prefix}_exposureType`}
                        value={data[prefix]?.exposureType || 'Per Turnover Basis'} 
                        options={['Per Turnover Basis', 'Fixed Exposure']}
                        onChange={(e) => onChange(prefix, 'exposureType', e.target.value)}
                    />
                    <InputField 
                        label="Intraday Exposure/Margin" 
                        name={`${prefix}_intradayExposure`}
                        value={data[prefix]?.intradayExposure || '0'} 
                        onChange={(e) => onChange(prefix, 'intradayExposure', e.target.value)}
                        subtext="Margin required to initiate trade."
                    />
                    <InputField 
                        label="Holding Exposure/Margin" 
                        name={`${prefix}_holdingExposure`}
                        value={data[prefix]?.holdingExposure || '0'} 
                        onChange={(e) => onChange(prefix, 'holdingExposure', e.target.value)}
                         subtext="Margin required to hold overnight."
                    />
                </div>
             </div>
        )}
    </div>
);

const AddBrokerForm = ({ onBack, onSave }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    transactionPassword: '',
    
    accountStatus: 'Active',
    sharePL: '0',
    shareBrokerage: '50',
    shareSwap: '10',
    brokerageShareType: 'Percentage',
    tradingClientsLimit: '10',
    subBrokersLimit: '3',

    permissions: {
        subBrokerActions: true,
        payinAllowed: false,
        payoutAllowed: false,
        createClientsAllowed: false,
        clientTasksAllowed: false,
        tradeActivityAllowed: false,
        notificationsAllowed: false
    },

    segmentSettings: {
        comex_future: { enabled: false },
        comex_currency: { enabled: false },
        comex_crypto: { enabled: false },
        nse_acc: { enabled: false },
        nse_equity_opt_short: { enabled: false },
        nse_equity_opt: { enabled: false },
        nse_index_opt_short: { enabled: false },
        nse_index_opt: { enabled: false }, 
        nse_spot: { enabled: false },
        mcx_future: { enabled: false },
        mcx_opt: { enabled: false },
        mcx_opt_short: { enabled: false }
    },

    mcxLotMargins: {},
    mcxLotBrokerage: {}
  });

  const [activeTab, setActiveTab] = useState('details'); // details, segments, lots

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePermissionChange = (key, val) => {
    setFormData(prev => ({
        ...prev,
        permissions: { ...prev.permissions, [key]: val }
    }));
  };

  const handleSegmentChange = (prefix, field, val) => {
      setFormData(prev => ({
          ...prev,
          segmentSettings: {
              ...prev.segmentSettings,
              [prefix]: {
                  ...prev.segmentSettings[prefix],
                  [field]: val
              }
          }
      }));
  };
  
    const mcxCommodities = [
        'ALUMINI', 'ALUMINIUM', 'COPPER', 'COTTON', 'CRUDEOIL', 'CRUDEOILM', 'GOLD', 
        'GOLDGUINEA', 'GOLDM', 'GOLDPETAL', 'LEAD', 'LEADMINI', 'MCXBULLDEX', 
        'NATGASMINI', 'NATURALGAS', 'NICKEL', 'SILVER', 'SILVERM', 'SILVERMIC', 'ZINC', 'ZINCMINI'
    ];


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving Broker Data:", formData);
    if(onSave) onSave(formData);
  };

  return (
    <div className="bg-[#151c2c] rounded-lg border border-[#2d3748] overflow-hidden flex flex-col h-full animate-fade-in relative">
         <button 
            onClick={onBack}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-20"
        >
            <ArrowLeft className="w-6 h-6" />
        </button>

      <div className="px-6 py-4 bg-[#1a2333] border-b border-[#2d3748] flex items-center gap-4">
        <h2 className="text-lg font-bold text-white">Add Sub Broker</h2>
        <div className="flex gap-2">
            <button 
                onClick={() => setActiveTab('details')}
                className={`px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors ${activeTab === 'details' ? 'bg-[#01B4EA] text-white' : 'text-slate-400 hover:bg-slate-700'}`}
            >
                Details & Config
            </button>
            <button 
                onClick={() => setActiveTab('segments')}
                className={`px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors ${activeTab === 'segments' ? 'bg-[#01B4EA] text-white' : 'text-slate-400 hover:bg-slate-700'}`}
            >
                Segments
            </button>
             <button 
                onClick={() => setActiveTab('lots')}
                className={`px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors ${activeTab === 'lots' ? 'bg-[#01B4EA] text-white' : 'text-slate-400 hover:bg-slate-700'}`}
            >
                Lot Wise Limits
            </button>
        </div>
      </div>
      
      <div className="p-8 flex-1">
        <form onSubmit={handleSubmit}>
            
            {/* TAB: DETAILS */}
            {activeTab === 'details' && (
                <>
                    <FormSection title="Personal Details">
                        <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} subtext="Insert Real name of the broker. Will be visible in website." />
                        <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} subtext="Insert Real name of the broker. Will be visible in website." />
                        <InputField label="Username" name="username" value={formData.username} onChange={handleChange} subtext="Username for logging-in. Must be unique. No symbols." />
                        <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} subtext="Password for logging-in. Case sensitive." />
                        <InputField label="Transaction Password" name="transactionPassword" type="password" value={formData.transactionPassword} onChange={handleChange} />
                    </FormSection>

                    <FormSection title="Config">
                         <SelectField label="Account Status" name="accountStatus" options={['Active', 'Suspended', 'Closed']} value={formData.accountStatus} onChange={handleChange} />
                         <InputField label="Profit/Loss Share in %" name="sharePL" value={formData.sharePL} onChange={handleChange} subtext="Example: 30, will give broker 30% of total brokerage." />
                         <InputField label="Brokerage Share in %" name="shareBrokerage" value={formData.shareBrokerage} onChange={handleChange} subtext="Example: 50, will give broker 50% of total brokerage." />
                         <InputField label="Swap Share in %" name="shareSwap" value={formData.shareSwap} onChange={handleChange} subtext="Example: 10, will give broker 10% of total swap." />
                         <SelectField label="Brokerage Share Type" name="brokerageShareType" options={['Percentage', 'Fixed']} value={formData.brokerageShareType} onChange={handleChange} subtext="Fixed or Percentage based sharing." />
                         <InputField label="Trading Clients Limit" name="tradingClientsLimit" value={formData.tradingClientsLimit} onChange={handleChange} />
                         <InputField label="Sub Brokers Limit" name="subBrokersLimit" value={formData.subBrokersLimit} onChange={handleChange} />
                    </FormSection>

                    <FormSection title="Permissions">
                        <div className="col-span-1 md:col-span-2 space-y-2">
                             <ToggleSwitch label="Sub Brokers Actions (Create, Edit)" checked={formData.permissions.subBrokerActions} onChange={(val) => handlePermissionChange('subBrokerActions', val)} />
                             <ToggleSwitch label="Payin Allowed" checked={formData.permissions.payinAllowed} onChange={(val) => handlePermissionChange('payinAllowed', val)} />
                             <ToggleSwitch label="Payout Allowed" checked={formData.permissions.payoutAllowed} onChange={(val) => handlePermissionChange('payoutAllowed', val)} />
                             <ToggleSwitch label="Create Clients Allowed" checked={formData.permissions.createClientsAllowed} onChange={(val) => handlePermissionChange('createClientsAllowed', val)} />
                             <ToggleSwitch label="Client Tasks Allowed" checked={formData.permissions.clientTasksAllowed} onChange={(val) => handlePermissionChange('clientTasksAllowed', val)} />
                             <ToggleSwitch label="Trade Activity Allowed" checked={formData.permissions.tradeActivityAllowed} onChange={(val) => handlePermissionChange('tradeActivityAllowed', val)} />
                             <ToggleSwitch label="Notifications Allowed" checked={formData.permissions.notificationsAllowed} onChange={(val) => handlePermissionChange('notificationsAllowed', val)} />
                        </div>
                    </FormSection>
                </>
            )}

            {/* TAB: SEGMENTS */}
            {activeTab === 'segments' && (
                <div className="space-y-4">
                    <SegmentSettings title="COMEX Commodity Future" prefix="comex_future" data={formData.segmentSettings} onChange={handleSegmentChange} />
                    <SegmentSettings title="COMEX Currency Future" prefix="comex_currency" data={formData.segmentSettings} onChange={handleSegmentChange} />
                    <SegmentSettings title="COMEX Crypto Future" prefix="comex_crypto" data={formData.segmentSettings} onChange={handleSegmentChange} />
                    
                    <SegmentSettings title="NSE ALL Future" prefix="nse_acc" data={formData.segmentSettings} onChange={handleSegmentChange} />
                    <SegmentSettings title="NSE Equity Options (Shortselling)" prefix="nse_equity_opt_short" data={formData.segmentSettings} onChange={handleSegmentChange} />
                    <SegmentSettings title="NSE Equity Options" prefix="nse_equity_opt" data={formData.segmentSettings} onChange={handleSegmentChange} />
                    <SegmentSettings title="NSE Index Options (Shortselling)" prefix="nse_index_opt_short" data={formData.segmentSettings} onChange={handleSegmentChange} />
                    <SegmentSettings title="NSE Index Options" prefix="nse_index_opt" data={formData.segmentSettings} onChange={handleSegmentChange} />
                     <SegmentSettings title="NSE Equity Spot" prefix="nse_spot" data={formData.segmentSettings} onChange={handleSegmentChange} />

                    <SegmentSettings title="MCX ALL Future" prefix="mcx_future" data={formData.segmentSettings} onChange={handleSegmentChange} />
                    <SegmentSettings title="MCX Commodity Options" prefix="mcx_opt" data={formData.segmentSettings} onChange={handleSegmentChange} />
                    <SegmentSettings title="MCX Commodity Options (Shortselling)" prefix="mcx_opt_short" data={formData.segmentSettings} onChange={handleSegmentChange} />
                </div>
            )}

            {/* TAB: LOT WISE LIMITS */}
            {activeTab === 'lots' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                         <h3 className="text-[#01B4EA] font-bold text-sm uppercase mb-4 border-b border-[#2d3748] pb-2">MCX Lot wise Margins (Intraday / Holding)</h3>
                         <div className="space-y-4">
                            {mcxCommodities.map(comm => (
                                <div key={comm} className="flex gap-2 items-center">
                                    <span className="text-xs text-slate-400 w-24">{comm}</span>
                                    <input placeholder="Intraday" className="bg-[#1a2333] border border-[#2d3748] text-white text-xs px-2 py-1 rounded w-full focus:outline-none focus:border-[#4CAF50]" />
                                    <input placeholder="Holding" className="bg-[#1a2333] border border-[#2d3748] text-white text-xs px-2 py-1 rounded w-full focus:outline-none focus:border-[#4CAF50]" />
                                </div>
                            ))}
                         </div>
                    </div>
                    <div>
                         <h3 className="text-[#01B4EA] font-bold text-sm uppercase mb-4 border-b border-[#2d3748] pb-2">MCX Lot wise Brokerage</h3>
                         <div className="space-y-4">
                            {mcxCommodities.map(comm => (
                                <div key={comm} className="flex gap-2 items-center">
                                    <span className="text-xs text-slate-400 w-24">{comm}</span>
                                    <input placeholder="Brokerage" className="bg-[#1a2333] border border-[#2d3748] text-white text-xs px-2 py-1 rounded w-full focus:outline-none focus:border-[#4CAF50]" />
                                </div>
                            ))}
                         </div>
                    </div>
                </div>
            )}

            <div className="pt-8 border-t border-[#2d3748] mt-8 flex justify-end">
                 <button
                  type="submit"
                  className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-3 px-10 rounded shadow-lg uppercase tracking-wider text-sm transition-all flex items-center gap-2"
                >
                  SAVE BROKER
                </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default AddBrokerForm;
