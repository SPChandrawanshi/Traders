import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, Info } from 'lucide-react';

const CollapsibleSection = ({ title, children, isOpen, onToggle, icon: Icon }) => (
  <div className="mb-6 bg-[#1a2236] rounded-lg border border-[#2d3748] overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md">
    <button
      onClick={onToggle}
      className={`w-full px-6 py-4 flex items-center justify-between transition-colors ${isOpen ? 'bg-[#2d3748]/30 border-b border-[#2d3748]' : 'hover:bg-[#2d3748]/20'}`}
    >
      <div className="flex items-center gap-3">
        {Icon && <Icon className="w-5 h-5 text-[#4CAF50]" />}
        <span className="text-sm font-bold text-slate-100 uppercase tracking-wider">{title}</span>
      </div>
      {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
    </button>
    {isOpen && (
      <div className="p-8 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {children}
        </div>
      </div>
    )}
  </div>
);

const ToggleSwitch = ({ label, checked, onChange, name }) => (
  <div className="flex items-center justify-between py-2 group">
    <label className="text-xs text-slate-300 font-medium cursor-pointer group-hover:text-white transition-colors">{label}</label>
    <div
      onClick={() => onChange({ target: { name, type: 'checkbox', checked: !checked } })}
      className={`relative w-10 h-5 rounded-full cursor-pointer transition-colors duration-200 ease-in-out ${checked ? 'bg-[#4CAF50]' : 'bg-[#2d3748]'}`}
    >
      <div className={`absolute top-1 left-1 w-3 h-3 rounded-full bg-white transition-transform duration-200 ease-in-out ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
    </div>
  </div>
);

const InputField = ({ label, type = "text", subtext, placeholder, name, value, onChange, disabled }) => (
  <div className={`flex flex-col gap-1.5 ${disabled ? 'opacity-30' : ''}`}>
    <div className="flex items-center gap-2">
      <label className="text-xs text-slate-400 font-semibold uppercase tracking-tight">{label}</label>
      {subtext && (
        <div className="group relative">
          <Info className="w-3 h-3 text-slate-500 cursor-help" />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-2 bg-slate-800 text-[10px] text-slate-200 rounded shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 border border-slate-700">
            {subtext}
          </div>
        </div>
      )}
    </div>
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full bg-[#0b111e]/50 border-b border-[#2d3748] text-slate-100 py-1.5 transition-all focus:border-[#4CAF50] focus:outline-none text-sm placeholder:text-slate-600 disabled:cursor-not-allowed"
      />
      {type === 'time' && <Clock className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-500 pointer-events-none" />}
    </div>
  </div>
);

const SelectField = ({ label, name, options, value, onChange, disabled }) => (
  <div className={`flex flex-col gap-1.5 ${disabled ? 'opacity-30' : ''}`}>
    <label className="text-xs text-slate-400 font-semibold uppercase tracking-tight">{label}</label>
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="bg-[#0b111e]/50 border-b border-[#2d3748] text-slate-100 py-1.5 px-0 rounded-none w-full appearance-none text-sm focus:outline-none focus:border-[#4CAF50] disabled:cursor-not-allowed transition-all"
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-[#1a2236]">{opt}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none text-slate-500">
        <ChevronDown className="w-3 h-3" />
      </div>
    </div>
  </div>
);

const ClientDetailsForm = ({ onBack, onSave, mode = 'edit' }) => {
  const [openSections, setOpenSections] = useState({
    personal: true,
    config: true,
    mcx: false,
    equity: false,
    options: false,
    comex: false,
    forex: false,
    crypto: false
  });

  const [formData, setFormData] = useState({
    // Basic Details
    name: '',
    username: '',
    email: '',
    mobile: '',
    password: '',
    city: '',
    accountStatus: true,
    clientGroup: 'Default',
    dealerMapping: 'Admin',
    creditLimit: '0',
    demoAccount: false,

    // Segment Configs
    segments: {
      mcx: { enabled: true, brokerageType: 'Per Lot Basis', brokerageValue: '0', leverage: '1', maxLot: '0', autoSquareOff: false, squareOffTime: '23:30', marginType: 'Per Lot Basis', exposureMultiplier: '1' },
      equity: { enabled: true, brokerageType: 'Per Crore Basis', brokerageValue: '0', leverage: '1', maxLot: '0', autoSquareOff: false, squareOffTime: '15:30', marginType: 'Percentage', exposureMultiplier: '1' },
      options: { enabled: true, brokerageType: 'Per Lot Basis', brokerageValue: '0', leverage: '1', maxLot: '0', autoSquareOff: false, squareOffTime: '15:30', marginType: 'Fixed', exposureMultiplier: '1' },
      comex: { enabled: false, brokerageType: 'Per Crore Basis', brokerageValue: '0', leverage: '1', maxLot: '0', autoSquareOff: false, squareOffTime: '00:00', marginType: 'Fixed', exposureMultiplier: '1' },
      forex: { enabled: false, brokerageType: 'Per Crore Basis', brokerageValue: '0', leverage: '1', maxLot: '0', autoSquareOff: false, squareOffTime: '00:00', marginType: 'Fixed', exposureMultiplier: '1' },
      crypto: { enabled: false, brokerageType: 'Per Crore Basis', brokerageValue: '0', leverage: '1', maxLot: '0', autoSquareOff: false, squareOffTime: '00:00', marginType: 'Fixed', exposureMultiplier: '1' }
    }
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSegmentChange = (segment, field, value) => {
    setFormData(prev => ({
      ...prev,
      segments: {
        ...prev.segments,
        [segment]: { ...prev.segments[segment], [field]: value }
      }
    }));
  };

  const SegmentFields = ({ segmentKey, label }) => {
    const config = formData.segments[segmentKey];
    return (
      <CollapsibleSection
        title={label}
        isOpen={openSections[segmentKey]}
        onToggle={() => toggleSection(segmentKey)}
      >
        <div className="col-span-1 md:col-span-2 lg:col-span-3 pb-4 mb-4 border-b border-[#2d3748]/50">
          <ToggleSwitch
            label={`Enable ${label} Segment`}
            name={`${segmentKey}_enabled`}
            checked={config.enabled}
            onChange={(e) => handleSegmentChange(segmentKey, 'enabled', e.target.checked)}
          />
        </div>

        <SelectField
          label="Brokerage Type"
          options={["Per Lot Basis", "Per Crore Basis"]}
          value={config.brokerageType}
          disabled={!config.enabled}
          onChange={(e) => handleSegmentChange(segmentKey, 'brokerageType', e.target.value)}
        />
        <InputField
          label="Brokerage Value"
          value={config.brokerageValue}
          disabled={!config.enabled}
          onChange={(e) => handleSegmentChange(segmentKey, 'brokerageValue', e.target.value)}
        />
        <InputField
          label="Leverage (Multiplier)"
          value={config.leverage}
          disabled={!config.enabled}
          onChange={(e) => handleSegmentChange(segmentKey, 'leverage', e.target.value)}
        />
        <InputField
          label="Max Lot Per Scrip"
          value={config.maxLot}
          disabled={!config.enabled}
          onChange={(e) => handleSegmentChange(segmentKey, 'maxLot', e.target.value)}
        />
        <SelectField
          label="Margin Type"
          options={["Per Lot Basis", "Percentage", "Fixed"]}
          value={config.marginType}
          disabled={!config.enabled}
          onChange={(e) => handleSegmentChange(segmentKey, 'marginType', e.target.value)}
        />
        <InputField
          label="Exposure Multiplier"
          value={config.exposureMultiplier}
          disabled={!config.enabled}
          onChange={(e) => handleSegmentChange(segmentKey, 'exposureMultiplier', e.target.value)}
        />

        <div className="col-span-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 items-end border-t border-[#2d3748]/30 pt-6 mt-2">
            <ToggleSwitch
              label="Auto Square Off"
              checked={config.autoSquareOff}
              disabled={!config.enabled}
              onChange={(e) => handleSegmentChange(segmentKey, 'autoSquareOff', e.target.checked)}
            />
            {config.autoSquareOff && (
              <InputField
                label="Square Off Time"
                type="time"
                value={config.squareOffTime}
                disabled={!config.enabled}
                onChange={(e) => handleSegmentChange(segmentKey, 'squareOffTime', e.target.value)}
              />
            )}
          </div>
        </div>
      </CollapsibleSection>
    );
  };

  return (
    <div className="bg-[#151c2c] rounded-lg border border-[#2d3748] flex flex-col h-full overflow-hidden shadow-2xl animate-fade-in">
      {/* Header */}
      <div className="px-8 py-6 bg-[#202940] border-b border-[#2d3748] flex justify-between items-center sticky top-0 z-50 shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="w-2 h-8 bg-[#4CAF50] rounded-full" />
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">
            {mode === 'create' ? 'Create Trading Client' : 'Update Trading Client'}
          </h2>
        </div>
        <button onClick={onBack} className="bg-[#2d3748] hover:bg-slate-700 text-slate-300 hover:text-white px-4 py-2 rounded-md text-xs font-bold uppercase transition-all border border-slate-600">Close</button>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
        <div className="max-w-6xl mx-auto space-y-2">

          {/* Basic Details */}
          <CollapsibleSection title="Personal & Basic Details" isOpen={openSections.personal} onToggle={() => toggleSection('personal')}>
            <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} subtext="Insert real name as per documents" />
            <InputField label="Username" name="username" value={formData.username} onChange={handleChange} subtext="Login ID (case insensitive, no symbols)" />
            <InputField label="Email Address" name="email" value={formData.email} onChange={handleChange} />
            <InputField label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleChange} />
            <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
            <InputField label="City" name="city" value={formData.city} onChange={handleChange} />
            <SelectField label="Account Status" options={["Active", "Suspended", "Blocked"]} value={formData.accountStatus ? "Active" : "Suspended"} onChange={(e) => handleChange({ target: { name: 'accountStatus', type: 'checkbox', checked: e.target.value === 'Active' } })} />
            <SelectField label="Client Group" options={["Default", "Premium", "VIP"]} value={formData.clientGroup} onChange={handleChange} name="clientGroup" />
            <SelectField label="Dealer Mapping" options={["Admin", "Sub-Broker A", "Sub-Broker B"]} value={formData.dealerMapping} onChange={handleChange} name="dealerMapping" />
          </CollapsibleSection>

          {/* Config */}
          <CollapsibleSection title="Advanced Configuration" isOpen={openSections.config} onToggle={() => toggleSection('config')}>
            <InputField label="Credit Limit / Initial Balance" name="creditLimit" value={formData.creditLimit} onChange={handleChange} />
            <ToggleSwitch label="Demo Account" name="demoAccount" checked={formData.demoAccount} onChange={handleChange} />
          </CollapsibleSection>

          {/* Segments */}
          <SegmentFields segmentKey="mcx" label="MCX Futures" />
          <SegmentFields segmentKey="equity" label="Equity Futures" />
          <SegmentFields segmentKey="options" label="Options Config" />
          <SegmentFields segmentKey="comex" label="Comex" />
          <SegmentFields segmentKey="forex" label="Forex" />
          <SegmentFields segmentKey="crypto" label="Crypto (Bitcoin etc.)" />

          {/* Action Button */}
          <div className="pt-10 pb-6">
            <button
              onClick={() => onSave(formData)}
              className="w-full md:w-auto bg-gradient-to-r from-[#4CAF50] to-[#43a047] hover:from-[#43a047] hover:to-[#388e3c] text-white font-black py-4 px-12 rounded-lg transition-all uppercase tracking-widest text-sm shadow-[0_10px_20px_-5px_rgba(76,175,80,0.4)] active:scale-95"
            >
              {mode === 'create' ? 'Verify & Create Client' : 'Update Configuration'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetailsForm;

