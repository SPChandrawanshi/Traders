import React, { useState } from 'react';

const AddBrokerForm = ({ onBack, onSave }) => {
    const [formData, setFormData] = useState({
        // Personal Details
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        transactionPasswordSet: '',

        // Config
        accountStatus: 'Active',
        sharePL: '0',
        shareBrokerage: '50',
        shareSwap: '10',
        brokerageShareType: 'Percentage',
        tradingClientsLimit: '10',
        subBrokersLimit: '3',

        // Permissions
        permissions: {
            subBrokerActions: 'Yes',
            payinAllowed: 'No',
            payoutAllowed: 'No',
            createClientsAllowed: 'No',
            clientTasksAllowed: 'No',
            tradeActivityAllowed: 'No',
            notificationsAllowed: 'No'
        },

        // Segments
        segments: {
            comex_commodity_future: { enabled: false, brokerageType: 'Per Crore Basis', brokerage: '', exposureType: 'Per Turnover Basis', intraday: '', holding: '' },
            comex_currency_future: { enabled: false, brokerageType: 'Per Crore Basis', brokerage: '', exposureType: 'Per Turnover Basis', intraday: '', holding: '' },
            comex_crypto_future: { enabled: false, brokerageType: 'Per Crore Basis', brokerage: '', exposureType: 'Per Turnover Basis', intraday: '', holding: '' },
            nse_all_future: { enabled: false, brokerage: '', intraday: '', holding: '' },
            nse_equity_opt_short: { enabled: false, brokerageType: 'Per Crore Basis', brokerage: '', intraday: '', holding: '' },
            nse_equity_opt: { enabled: false, brokerageType: 'Per Crore Basis', brokerage: '', intraday: '', holding: '' },
            nse_index_opt_short: { enabled: false, brokerageType: 'Per Crore Basis', brokerage: '', intraday: '', holding: '' },
            nse_index_opt: { enabled: false, brokerageType: 'Per Crore Basis', brokerage: '', intraday: '', holding: '' },
            nse_equity_spot: { enabled: false, brokerage: '', intraday: '', holding: '' },
            mcx_all_future: { enabled: false, brokerageType: 'Per Crore Basis', brokerage: '', exposureType: 'Per Turnover Basis', intraday: '', holding: '' },
            mcx_comm_opt: { enabled: false, brokerageType: 'Per Crore Basis', brokerage: '', intraday: '', holding: '' },
            mcx_comm_opt_short: { enabled: false, brokerageType: 'Per Crore Basis', brokerage: '', intraday: '', holding: '' }
        },

        // MCX Lot Wise Margins
        mcxMargins: {
            ALUMINI: { intraday: '', holding: '' },
            ALUMINIUM: { intraday: '', holding: '' },
            COPPER: { intraday: '', holding: '' },
            COTTON: { intraday: '', holding: '' },
            CRUDEOIL: { intraday: '', holding: '' },
            CRUDEOILM: { intraday: '', holding: '' },
            GOLD: { intraday: '', holding: '' },
            GOLDGUINEA: { intraday: '', holding: '' },
            GOLDM: { intraday: '', holding: '' },
            GOLDPETAL: { intraday: '', holding: '' },
            LEAD: { intraday: '', holding: '' },
            LEADMINI: { intraday: '', holding: '' },
            MCXBULLDEX: { intraday: '', holding: '' },
            NATGASMINI: { intraday: '', holding: '' },
            NATURALGAS: { intraday: '', holding: '' },
            NICKEL: { intraday: '', holding: '' },
            SILVER: { intraday: '', holding: '' },
            SILVERM: { intraday: '', holding: '' },
            SILVERMIC: { intraday: '', holding: '' },
            ZINC: { intraday: '', holding: '' },
            ZINCMINI: { intraday: '', holding: '' }
        },

        // MCX Lot Wise Brokerage - Single Field
        mcxBrokerage: {
            ALUMINI: '', ALUMINIUM: '', COPPER: '', COTTON: '', CRUDEOIL: '', CRUDEOILM: '',
            GOLD: '', GOLDGUINEA: '', GOLDM: '', GOLDPETAL: '', LEAD: '', LEADMINI: '',
            MCXBULLDEX: '', NATGASMINI: '', NATURALGAS: '', NICKEL: '', SILVER: '',
            SILVERM: '', SILVERMIC: '', ZINC: '', ZINCMINI: ''
        },

        finalTransactionPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePermissionChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            permissions: { ...prev.permissions, [field]: value }
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

    const handleMcxMarginChange = (scrip, field, value) => {
        setFormData(prev => ({
            ...prev,
            mcxMargins: {
                ...prev.mcxMargins,
                [scrip]: { ...prev.mcxMargins[scrip], [field]: value }
            }
        }));
    };

    const handleMcxBrokerageChange = (scrip, value) => {
        setFormData(prev => ({
            ...prev,
            mcxBrokerage: { ...prev.mcxBrokerage, [scrip]: value }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    // Components
    const SectionHeader = ({ color, title }) => (
        <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-2">
            <span className={`w-2.5 h-2.5 rounded-sm ${color}`}></span>
            <h3 className="text-white text-[15px] font-bold uppercase tracking-wide">{title}</h3>
        </div>
    );

    const InputGroup = ({ label, subtext, value, onChange, name, type = "text", placeholder = "" }) => (
        <div className="mb-8">
            <label className="block text-[#bcc0cf] text-[11px] font-bold uppercase mb-2 tracking-wider">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full bg-[#1a2035] border-b border-white/10 text-white px-3 py-2 text-sm focus:outline-none focus:border-[#4caf50] focus:bg-white/5 transition-colors placeholder-slate-600"
                placeholder={placeholder}
            />
            {subtext && <p className="text-[12px] text-[#868a9a] mt-2 leading-relaxed font-normal">{subtext}</p>}
        </div>
    );

    const SelectGroup = ({ label, subtext, value, onChange, options, name }) => (
        <div className="mb-8">
            <label className="block text-[#bcc0cf] text-[11px] font-bold uppercase mb-2 tracking-wider">{label}</label>
            <div className="relative">
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="w-full bg-[#1a2035] border-b border-white/10 text-white px-3 py-2 text-sm focus:outline-none focus:border-[#4caf50] focus:bg-white/5 transition-colors appearance-none cursor-pointer"
                >
                    {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                <div className="absolute right-3 top-2.5 pointer-events-none text-slate-500">
                    <i className="fa-solid fa-caret-down text-xs"></i>
                </div>
            </div>
            {subtext && <p className="text-[12px] text-[#868a9a] mt-2 leading-relaxed font-normal">{subtext}</p>}
        </div>
    );

    const SegmentBlock = ({ title, segmentKey, config }) => {
        // config: { hasBrokerageType, hasExposureType }
        const data = formData.segments[segmentKey];
        return (
            <div className="mb-10 p-6 rounded bg-[#1a2035]/30 border border-white/5">
                <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                    <h4 className="text-[#4caf50] text-[13px] font-bold uppercase tracking-widest">{title}</h4>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <span className="text-slate-400 text-[11px] font-bold uppercase tracking-wider group-hover:text-white transition-colors">Trading Enabled</span>
                        <div className="relative">
                            <input
                                type="checkbox"
                                checked={data.enabled}
                                onChange={(e) => handleSegmentChange(segmentKey, 'enabled', e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#4caf50]"></div>
                        </div>
                    </label>
                </div>

                {data.enabled && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 animate-fadeIn">
                        {config.hasBrokerageType && (
                            <SelectGroup
                                label="Brokerage Type"
                                value={data.brokerageType}
                                options={['Per Crore Basis', 'Per Lot Basis']}
                                onChange={(e) => handleSegmentChange(segmentKey, 'brokerageType', e.target.value)}
                            />
                        )}
                        <InputGroup
                            label="Brokerage"
                            value={data.brokerage}
                            onChange={(e) => handleSegmentChange(segmentKey, 'brokerage', e.target.value)}
                            name={`${segmentKey}_brokerage`}
                        />
                        {config.hasExposureType && (
                            <SelectGroup
                                label="Exposure Type"
                                value={data.exposureType}
                                options={['Per Turnover Basis', 'Fixed Exposure']}
                                onChange={(e) => handleSegmentChange(segmentKey, 'exposureType', e.target.value)}
                            />
                        )}
                        <InputGroup
                            label="Intraday Exposure/Margin"
                            value={data.intraday}
                            onChange={(e) => handleSegmentChange(segmentKey, 'intraday', e.target.value)}
                            subtext="Exposure auto calculates the margin money required for any new trade entry. Calculation : turnover of a trade divided by Exposure is required margin. eg. if gold having lotsize of 100 is trading @ 45000 and exposure is 200, (45000 X 100) / 200 = 22500 is required to initiate the trade."
                            name={`${segmentKey}_intraday`}
                        />
                        <InputGroup
                            label="Holding Exposure/Margin"
                            value={data.holding}
                            onChange={(e) => handleSegmentChange(segmentKey, 'holding', e.target.value)}
                            subtext="Holding Exposure auto calculates the margin money required to hold a position overnight for the next market working day. Calculation : turnover of a trade divided by Exposure is required margin. eg. if gold having lotsize of 100 is trading @ 45000 and holding exposure is 800, (45000 X 100) / 80 = 56250 is required to hold position overnight. System automatically checks at a given time around market closure to check and close all trades if margin(M2M) insufficient."
                            name={`${segmentKey}_holding`}
                        />
                    </div>
                )}
            </div>
        );
    };

    const mcxScrips = Object.keys(formData.mcxMargins);

    return (
        <div className="min-h-screen bg-[#1a2035] font-sans flex flex-col items-center py-10 px-4">
            <div className="w-full max-w-7xl relative">

                {/* 3D Ribbon Header */}
                <div className="relative z-20 mb-[-25px] ml-4">
                    <div
                        className="px-8 py-4 rounded-md shadow-[0_4px_20px_0_rgba(0,0,0,0.14),0_7px_10px_-5px_rgba(76,175,80,0.4)] relative z-10"
                        style={{
                            background: 'linear-gradient(60deg, #66bb6a, #43a047)',
                            display: 'inline-block'
                        }}
                    >
                        <h2 className="text-white text-[16px] font-bold leading-none tracking-widest uppercase m-0">
                            Add Broker
                        </h2>
                    </div>
                    {/* 3D Triangle Fold */}
                    <div style={{
                        position: 'absolute',
                        bottom: '-10px',
                        left: '6px',
                        width: '0',
                        height: '0',
                        borderLeft: '10px solid transparent',
                        borderRight: '10px solid transparent',
                        borderTop: '10px solid #2e7d32',
                        zIndex: '5'
                    }}></div>
                </div>

                {/* Main Card */}
                <div className="bg-[#202940] rounded-md shadow-2xl border border-white/5 pt-16 pb-12 px-6 lg:px-10 w-full">
                    <form onSubmit={handleSubmit}>

                        {/* 1. PERSONAL DETAILS */}
                        <div className="mb-12">
                            <SectionHeader color="bg-[#4caf50]" title="Personal Details" /> {/* Green */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                                <InputGroup label="First Name" subtext="Insert Real name of the broker. Will be visible in website" name="firstName" value={formData.firstName} onChange={handleChange} />
                                <InputGroup label="Last Name" subtext="Insert Real name of the broker. Will be visible in website" name="lastName" value={formData.lastName} onChange={handleChange} />
                                <InputGroup label="Username" subtext="username for loggin-in with, is not case sensitive. must be unique for every trader. should not contain symbols." name="username" value={formData.username} onChange={handleChange} />
                                <InputGroup label="Password" subtext="password for loggin-in with, is case sensitive." name="password" type="password" value={formData.password} onChange={handleChange} />
                                <InputGroup label="Transaction Password to set" name="transactionPasswordSet" type="password" value={formData.transactionPasswordSet} onChange={handleChange} />
                            </div>
                        </div>

                        {/* 2. CONFIG */}
                        <div className="mb-12">
                            <SectionHeader color="bg-[#ff9800]" title="Config" /> {/* Orange */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                                <SelectGroup label="Account Status" options={['Active', 'Suspended', 'Closed']} name="accountStatus" value={formData.accountStatus} onChange={handleChange} />
                                <InputGroup label="Profit/Loss Share in %" subtext="Example: 30, will give broker 30% of total brokerage collected from clients" name="sharePL" value={formData.sharePL} onChange={handleChange} />
                                <InputGroup label="Brokerage Share in %" subtext="Example: 30, will give broker 30% of total brokerage collected from clients. This field is irrelevant if the Brokerage Share Type is set to 'Fixed'." name="shareBrokerage" value={formData.shareBrokerage} onChange={handleChange} />
                                <InputGroup label="Swap Share in %" subtext="Example: 30, will give broker 30% of total swap collected from clients" name="shareSwap" value={formData.shareSwap} onChange={handleChange} />
                                <SelectGroup label="Brokerage Share Type" subtext="If fixed is selected, Then Brokerage set in sections below like MCX, NSE, etc. will be your brokerage and any amount above that will be of broker. If Percentage is selected then Brokerage set in sections below will be the minimum brokerage which can be set in Client's account and Broker will get % wise share in brokerage set above." options={['Percentage', 'Fixed']} name="brokerageShareType" value={formData.brokerageShareType} onChange={handleChange} />
                                <InputGroup label="Trading Clients Limit" subtext="Max. no. of Trading Clients" name="tradingClientsLimit" value={formData.tradingClientsLimit} onChange={handleChange} />
                                <InputGroup label="Sub Brokers Limit" subtext="Max. no. of Sub-brokers" name="subBrokersLimit" value={formData.subBrokersLimit} onChange={handleChange} />
                            </div>
                        </div>

                        {/* 3. PERMISSIONS */}
                        <div className="mb-12">
                            <SectionHeader color="bg-[#f44336]" title="Permissions" /> {/* Red */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                                <SelectGroup label="Sub Brokers Actions (Create, Edit)" options={['Yes', 'No']} value={formData.permissions.subBrokerActions} onChange={(e) => handlePermissionChange('subBrokerActions', e.target.value)} />
                                <SelectGroup label="Payin Allowed" options={['Yes', 'No']} value={formData.permissions.payinAllowed} onChange={(e) => handlePermissionChange('payinAllowed', e.target.value)} />
                                <SelectGroup label="Payout Allowed" options={['Yes', 'No']} value={formData.permissions.payoutAllowed} onChange={(e) => handlePermissionChange('payoutAllowed', e.target.value)} />
                                <SelectGroup label="Create Clients Allowed (Create, Update and Reset Password)" options={['Yes', 'No']} value={formData.permissions.createClientsAllowed} onChange={(e) => handlePermissionChange('createClientsAllowed', e.target.value)} />
                                <SelectGroup label="Client Tasks Allowed (Account Reset, Recalculate brokerage etc.)" options={['Yes', 'No']} value={formData.permissions.clientTasksAllowed} onChange={(e) => handlePermissionChange('clientTasksAllowed', e.target.value)} />
                                <SelectGroup label="Trade Activity Allowed (Create, Update, Restore, Delete Trade)" options={['Yes', 'No']} value={formData.permissions.tradeActivityAllowed} onChange={(e) => handlePermissionChange('tradeActivityAllowed', e.target.value)} />
                                <SelectGroup label="Notifications Allowed" options={['Yes', 'No']} value={formData.permissions.notificationsAllowed} onChange={(e) => handlePermissionChange('notificationsAllowed', e.target.value)} />
                            </div>
                        </div>

                        {/* 4. TRADING SEGMENTS */}
                        <div className="mb-12">
                            <SectionHeader color="bg-[#00bcd4]" title="Trading Segments" /> {/* Cyan/Blue */}
                            <div className="space-y-2">
                                <SegmentBlock title="COMEX Commodity Future :" segmentKey="comex_commodity_future" config={{ hasBrokerageType: true, hasExposureType: true }} />
                                <SegmentBlock title="COMEX Currency Future :" segmentKey="comex_currency_future" config={{ hasBrokerageType: true, hasExposureType: true }} />
                                <SegmentBlock title="COMEX Crypto Future :" segmentKey="comex_crypto_future" config={{ hasBrokerageType: true, hasExposureType: true }} />
                                <SegmentBlock title="NSE ALL Future :" segmentKey="nse_all_future" config={{ hasBrokerageType: false, hasExposureType: false }} />
                                <SegmentBlock title="NSE Equity Options (Shortselling):" segmentKey="nse_equity_opt_short" config={{ hasBrokerageType: true, hasExposureType: false }} />
                                <SegmentBlock title="NSE Equity Options :" segmentKey="nse_equity_opt" config={{ hasBrokerageType: true, hasExposureType: false }} />
                                <SegmentBlock title="NSE Index Options (Shortselling):" segmentKey="nse_index_opt_short" config={{ hasBrokerageType: true, hasExposureType: false }} />
                                <SegmentBlock title="NSE Index Options :" segmentKey="nse_index_opt" config={{ hasBrokerageType: true, hasExposureType: false }} />
                                <SegmentBlock title="NSE Equity Spot :" segmentKey="nse_equity_spot" config={{ hasBrokerageType: false, hasExposureType: false }} />
                                <SegmentBlock title="MCX ALL Future :" segmentKey="mcx_all_future" config={{ hasBrokerageType: true, hasExposureType: true }} />
                                <SegmentBlock title="MCX Commodity Options :" segmentKey="mcx_comm_opt" config={{ hasBrokerageType: true, hasExposureType: false }} />
                                <SegmentBlock title="MCX Commodity Options (Shortselling):" segmentKey="mcx_comm_opt_short" config={{ hasBrokerageType: true, hasExposureType: false }} />
                            </div>
                        </div>

                        {/* 5. MCX LOT WISE MARGINS */}
                        <div className="mb-12">
                            <SectionHeader color="bg-[#9c27b0]" title="MCX Lot wise Margins" /> {/* Purple */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {mcxScrips.map(scrip => (
                                    <div key={scrip} className="bg-[#1a2035] p-4 rounded border border-white/5">
                                        <h5 className="text-[#4caf50] text-[12px] font-bold uppercase mb-4">{scrip}</h5>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-[#bcc0cf] text-[10px] font-bold uppercase mb-1">INTRADAY</label>
                                                <input
                                                    type="text"
                                                    value={formData.mcxMargins[scrip].intraday}
                                                    onChange={(e) => handleMcxMarginChange(scrip, 'intraday', e.target.value)}
                                                    className="w-full bg-transparent border-b border-white/10 text-white text-sm py-1 focus:border-[#4caf50] focus:outline-none"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-[#bcc0cf] text-[10px] font-bold uppercase mb-1">HOLDING</label>
                                                <input
                                                    type="text"
                                                    value={formData.mcxMargins[scrip].holding}
                                                    onChange={(e) => handleMcxMarginChange(scrip, 'holding', e.target.value)}
                                                    className="w-full bg-transparent border-b border-white/10 text-white text-sm py-1 focus:border-[#4caf50] focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 6. MCX LOT WISE BROKERAGE */}
                        <div className="mb-12">
                            <SectionHeader color="bg-[#e91e63]" title="MCX Lot wise Brokerage" /> {/* Pink/Rose */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {Object.keys(formData.mcxBrokerage).map(scrip => (
                                    <div key={scrip}>
                                        <label className="block text-[#bcc0cf] text-[11px] font-bold uppercase mb-2">{scrip}</label>
                                        <input
                                            type="text"
                                            value={formData.mcxBrokerage[scrip]}
                                            onChange={(e) => handleMcxBrokerageChange(scrip, e.target.value)}
                                            className="w-full bg-[#1a2035] border-b border-white/10 text-white px-3 py-2 text-sm focus:outline-none focus:border-[#4caf50] transition-colors"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 7. TRANSACTION PASSWORD (FINAL) */}
                        <div className="mb-12 pt-8 border-t border-white/10">
                            <div className="max-w-md">
                                <InputGroup
                                    label="Your Transaction Password"
                                    name="finalTransactionPassword"
                                    type="password"
                                    value={formData.finalTransactionPassword}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* SAVE BUTTON */}
                        <div className="pt-4 flex justify-end">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[#4caf50] to-[#43a047] hover:from-[#43a047] hover:to-[#388e3c] text-white px-10 py-3 rounded shadow-[0_4px_20px_0_rgba(76,175,80,0.4)] font-bold text-xs tracking-widest transition-all uppercase hover:scale-105 active:scale-95"
                            >
                                ADD BROKER
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default AddBrokerForm;