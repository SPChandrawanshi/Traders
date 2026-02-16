import React, { useState } from 'react';
import { X, Save } from 'lucide-react';

const UpdateClientPage = ({ client, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        fullname: client?.fullName || 'Demo ji',
        mobile: client?.mobile || '',
        username: client?.username || 'Demo0174',
        password: '',
        city: client?.city || '',
        is_demo: true,
        allow_orders_beyond_high_low: true,
        allow_orders_between_high_low: true,
        trade_equity_as_units: true,
        status: true,
        auto_square_off: true,
        auto_square_off_percentage: '90',
        notify_percentage: '70',
        profit_book_interval: '120',
        scalping_stop_loss: '0',
        // MCX Futures
        mcx_enabled: true,
        mcx_min_lot_per_trade: '0',
        mcx_max_lot_per_trade: '20',
        mcx_max_lot_per_scrip: '50',
        max_commodity_lots: '100',
        mcx_brokerage_type: 'per_lot',
        mcx_brokerage: '800.0000',
        mcx_exposure_type: 'per_lot',
        mcx_lot_margin: {
            MCXBULLDEX: { INTRADAY: '10000', HOLDING: '10000' },
            GOLD: { INTRADAY: '10000', HOLDING: '10000' },
            SILVER: { INTRADAY: '15000', HOLDING: '40000' },
            CRUDEOIL: { INTRADAY: '10000', HOLDING: '10000' },
            CRUDEOILM: { INTRADAY: '10000', HOLDING: '10000' },
            COPPER: { INTRADAY: '10000', HOLDING: '10000' },
            NICKEL: { INTRADAY: '10000', HOLDING: '10000' },
            ZINC: { INTRADAY: '10000', HOLDING: '10000' },
            ZINCMINI: { INTRADAY: '1000', HOLDING: '1000' },
            LEAD: { INTRADAY: '1000', HOLDING: '1000' },
            LEADMINI: { INTRADAY: '1000', HOLDING: '1000' },
            ALUMINIUM: { INTRADAY: '1000', HOLDING: '1000' },
            ALUMINI: { INTRADAY: '1000', HOLDING: '1000' },
            NATURALGAS: { INTRADAY: '1000', HOLDING: '1000' },
            NATGASMINI: { INTRADAY: '1000', HOLDING: '1000' },
            MENTHAOIL: { INTRADAY: '1000', HOLDING: '1000' },
            COTTON: { INTRADAY: '1000', HOLDING: '1000' },
            GOLDM: { INTRADAY: '1000', HOLDING: '1000' },
            SILVERM: { INTRADAY: '1000', HOLDING: '1000' },
            SILVERMIC: { INTRADAY: '1000', HOLDING: '1000' }
        },
        mcx_lot_brokerage: {
            GOLDM: '100.0000', SILVERM: '100.0000', MCXBULLDEX: '500.0000', GOLD: '200.0000',
            SILVER: '150.0000', CRUDEOIL: '100.0000', COPPER: '100.0000', NICKEL: '100.0000',
            ZINC: '100.0000', LEAD: '100.0000', NATURALGAS: '100.0000', NATGASMINI: '100.0000',
            ALUMINIUM: '100.0000', MENTHAOIL: '100.0000', COTTON: '100.0000', SILVERMIC: '100.0000',
            ZINCMINI: '100.0000', ALUMINI: '100.0000', LEADMINI: '100.0000', CRUDEOILM: '110.0000'
        },
        mcx_bid_gap: {
            GOLDM: '0.0000', SILVERM: '0.0000', MCXBULLDEX: '0.0000', GOLD: '0.0000',
            SILVER: '0.0000', CRUDEOIL: '0.0000', COPPER: '0.0000', NICKEL: '0.0000',
            ZINC: '0.0000', LEAD: '0.0000', NATURALGAS: '0.0000', NATGASMINI: '0.0000',
            ALUMINIUM: '0.0000', MENTHAOIL: '0.0000', COTTON: '0.0000', SILVERMIC: '0.0000',
            ZINCMINI: '0.0000', ALUMINI: '0.0000', LEADMINI: '0.0000', CRUDEOILM: '0.0000'
        },
        // Equity Futures
        nse_enabled: true,
        nse_brokerage: '800.0000',
        nse_equity_min_lot_per_trade: '0',
        nse_equity_max_lot_per_trade: '50',
        nse_index_min_lot_per_trade: '0',
        nse_index_max_lot_per_trade: '20',
        nse_equity_max_lot_per_scrip: '100',
        nse_index_max_lot_per_scrip: '100',
        max_nse_equity_lots: '100',
        max_nse_index_lots: '100',
        nse_intraday_margin: '500',
        nse_holding_margin: '100',
        nse_bid_gap_percentage: '0.00',
        // Options Config
        options_enabled: true,
        equity_options_enabled: true,
        mcx_options_enabled: true,
        options_brokerage_type: 'per_lot',
        options_brokerage: '20.0000',
        options_equity_brokerage_type: 'per_lot',
        options_equity_brokerage: '20.0000',
        options_mcx_brokerage_type: 'per_lot',
        options_mcx_brokerage: '20.0000',
        options_minimum_bid: '1.0000',
        options_short_selling_allowed: '0',
        options_equity_short_selling_allowed: '0',
        options_mcx_short_selling_allowed: '0',
        options_equity_min_lot_per_trade: '0',
        options_equity_max_lot_per_trade: '50',
        options_index_min_lot_per_trade: '0',
        options_index_max_lot_per_trade: '20',
        options_mcx_min_lot_per_trade: '0',
        options_mcx_max_lot_per_trade: '50',
        options_equity_max_lot_per_scrip: '200',
        options_index_max_lot_per_scrip: '200',
        options_mcx_max_lot_per_scrip: '200',
        max_options_equity_lots: '200',
        max_options_index_lots: '200',
        max_options_mcx_lots: '200',
        options_intraday_margin: '5',
        options_holding_margin: '2.000000',
        options_equity_intraday_margin: '5',
        options_equity_holding_margin: '2',
        options_mcx_intraday_margin: '5',
        options_mcx_holding_margin: '2',
        options_bid_gap_percentage: '0.00'
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleNestedChange = (category, scrip, type, value) => {
        setFormData(prev => ({
            ...prev,
            [category]: {
                ...prev[category],
                [scrip]: type ? { ...prev[category][scrip], [type]: value } : value
            }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    const inputClass = "w-full bg-transparent border-b border-white/20 py-2 px-0 text-white focus:outline-none focus:border-[#5cb85c] transition-all text-sm";
    const labelClass = "block text-xs text-slate-400 font-medium uppercase tracking-wider mb-1";
    const hintClass = "text-[10px] text-slate-500 mt-1 leading-relaxed";
    const checkboxLabelClass = "flex items-center gap-3 cursor-pointer text-sm text-slate-300 hover:text-white transition-colors py-2";
    const fieldsetLabelClass = "text-sm font-bold text-[#5cb85c] mb-6 uppercase tracking-[0.2em] border-b border-[#5cb85c]/30 pb-2 inline-block";

    return (
        <div className="fixed inset-0 bg-[#0f1423] z-50 overflow-y-auto custom-scrollbar">
            <div className="min-h-screen p-4 md:p-8 flex items-center justify-center">
                <div className="w-full max-w-7xl bg-[#1a2035] rounded-xl shadow-2xl relative border border-white/5 pb-24">

                    {/* Header Card Style - Material Dashboard Layered Look */}
                    <div className="absolute -top-6 left-6 z-10">
                        <div className="relative">
                            {/* Main Green Card */}
                            <div className="bg-gradient-to-tr from-[#43a047] to-[#66bb6a] px-8 py-4 rounded-md shadow-[0_4px_20px_0_rgba(0,0,0,0.14),0_7px_10px_-5px_rgba(76,175,80,0.4)] min-w-[280px]">
                                <h2 className="text-base font-bold text-white uppercase tracking-tight">
                                    Update Trading Client:
                                </h2>
                            </div>
                            {/* Characteristic Offset Square behind */}
                            <div className="absolute -bottom-2 left-[-8px] w-6 h-6 bg-[#388e3c] rounded -z-10 blur-[1px]"></div>
                        </div>
                    </div>

                    <div className="flex justify-end p-6">
                        <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-16">

                        {/* Personal Details */}
                        <section>
                            <legend className={fieldsetLabelClass}>Personal Details:</legend>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                                <div>
                                    <label className={labelClass}>Name</label>
                                    <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} className={inputClass} />
                                    <p className={hintClass}>Real name visible in App</p>
                                </div>
                                <div>
                                    <label className={labelClass}>Mobile</label>
                                    <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} className={inputClass} />
                                    <p className={hintClass}>Optional</p>
                                </div>
                                <div>
                                    <label className={labelClass}>Username</label>
                                    <input type="text" name="username" value={formData.username} onChange={handleChange} className={inputClass} />
                                    <p className={hintClass}>Unique ID for login</p>
                                </div>
                                <div>
                                    <label className={labelClass}>Password</label>
                                    <input type="password" name="password" value={formData.password} onChange={handleChange} className={inputClass} placeholder="Leave blank to keep same" />
                                </div>
                                <div>
                                    <label className={labelClass}>City</label>
                                    <input type="text" name="city" value={formData.city} onChange={handleChange} className={inputClass} />
                                </div>
                            </div>
                        </section>

                        {/* Config Section */}
                        <section>
                            <legend className={fieldsetLabelClass}>Config:</legend>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 mb-10">
                                <label className={checkboxLabelClass}>
                                    <input type="checkbox" name="is_demo" checked={formData.is_demo} onChange={handleChange} className="w-4 h-4 rounded border-white/20 bg-transparent text-[#5cb85c]" />
                                    Demo Account?
                                </label>
                                <label className={checkboxLabelClass}>
                                    <input type="checkbox" name="allow_orders_beyond_high_low" checked={formData.allow_orders_beyond_high_low} onChange={handleChange} className="w-4 h-4 rounded border-white/20 bg-transparent text-[#5cb85c]" />
                                    Allow Fresh Entry above High/Low?
                                </label>
                                <label className={checkboxLabelClass}>
                                    <input type="checkbox" name="allow_orders_between_high_low" checked={formData.allow_orders_between_high_low} onChange={handleChange} className="w-4 h-4 rounded border-white/20 bg-transparent text-[#5cb85c]" />
                                    Allow Orders between High - Low?
                                </label>
                                <label className={checkboxLabelClass}>
                                    <input type="checkbox" name="trade_equity_as_units" checked={formData.trade_equity_as_units} onChange={handleChange} className="w-4 h-4 rounded border-white/20 bg-transparent text-[#5cb85c]" />
                                    Trade equity as units.
                                </label>
                                <label className={checkboxLabelClass}>
                                    <input type="checkbox" name="status" checked={formData.status} onChange={handleChange} className="w-4 h-4 rounded border-white/20 bg-transparent text-[#5cb85c]" />
                                    Account Status
                                </label>
                                <label className={checkboxLabelClass}>
                                    <input type="checkbox" name="auto_square_off" checked={formData.auto_square_off} onChange={handleChange} className="w-4 h-4 rounded border-white/20 bg-transparent text-[#5cb85c]" />
                                    Auto Close Trades
                                </label>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <label className={labelClass}>Auto-Close Loss %</label>
                                    <input type="text" name="auto_square_off_percentage" value={formData.auto_square_off_percentage} onChange={handleChange} className={inputClass} />
                                    <p className={hintClass}>% of ledger balance</p>
                                </div>
                                <div>
                                    <label className={labelClass}>Notify Loss %</label>
                                    <input type="text" name="notify_percentage" value={formData.notify_percentage} onChange={handleChange} className={inputClass} />
                                </div>
                                <div>
                                    <label className={labelClass}>Profit Holding Time (Sec)</label>
                                    <input type="text" name="profit_book_interval" value={formData.profit_book_interval} onChange={handleChange} className={inputClass} />
                                </div>
                                <div>
                                    <label className={labelClass}>Scalping Stop Loss</label>
                                    <select name="scalping_stop_loss" value={formData.scalping_stop_loss} onChange={handleChange} className={`${inputClass} bg-[#1f283e]`}>
                                        <option value="1">Enabled</option>
                                        <option value="0">Disabled</option>
                                    </select>
                                </div>
                            </div>
                        </section>

                        {/* MCX Futures Section */}
                        <section>
                            <legend className={fieldsetLabelClass}>MCX Futures:</legend>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                                <label className={checkboxLabelClass}>
                                    <input type="checkbox" name="mcx_enabled" checked={formData.mcx_enabled} onChange={handleChange} className="w-4 h-4 rounded border-white/20 bg-transparent text-[#5cb85c]" />
                                    MCX Trading
                                </label>
                                <div>
                                    <label className={labelClass}>Max Lot Per Scrip</label>
                                    <input type="text" name="mcx_max_lot_per_scrip" value={formData.mcx_max_lot_per_scrip} onChange={handleChange} className={inputClass} />
                                </div>
                                <div>
                                    <label className={labelClass}>Brokerage</label>
                                    <input type="text" name="mcx_brokerage" value={formData.mcx_brokerage} onChange={handleChange} className={inputClass} />
                                </div>
                                <div>
                                    <label className={labelClass}>Brokerage Type</label>
                                    <select name="mcx_brokerage_type" value={formData.mcx_brokerage_type} onChange={handleChange} className={`${inputClass} bg-[#1f283e]`}>
                                        <option value="per_crore">Per Crore Basis</option>
                                        <option value="per_lot">Per Lot Basis</option>
                                    </select>
                                </div>
                            </div>

                            {/* MCX Lot Margin Grid */}
                            <div className="mt-12 bg-black/20 p-6 rounded-lg border border-white/5">
                                <h4 className="text-white text-xs font-bold uppercase mb-6 opacity-60 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                    MCX Exposure Lot wise
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-8">
                                    {Object.entries(formData.mcx_lot_margin).map(([scrip, margins]) => (
                                        <div key={scrip} className="space-y-4 p-4 rounded bg-white/[0.02] border border-white/[0.03]">
                                            <p className="text-[11px] font-bold text-white/50 border-b border-white/5 pb-2 mb-4 tracking-wider">{scrip}</p>
                                            <div className="flex gap-4">
                                                <div className="flex-1">
                                                    <label className="text-[9px] text-slate-500 font-bold uppercase block mb-1">Intraday</label>
                                                    <input
                                                        type="text"
                                                        value={margins.INTRADAY}
                                                        onChange={(e) => handleNestedChange('mcx_lot_margin', scrip, 'INTRADAY', e.target.value)}
                                                        className="w-full bg-transparent border-b border-white/10 text-white text-xs py-1 focus:outline-none focus:border-blue-400 font-mono"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <label className="text-[9px] text-slate-500 font-bold uppercase block mb-1">Holding</label>
                                                    <input
                                                        type="text"
                                                        value={margins.HOLDING}
                                                        onChange={(e) => handleNestedChange('mcx_lot_margin', scrip, 'HOLDING', e.target.value)}
                                                        className="w-full bg-transparent border-b border-white/10 text-white text-xs py-1 focus:outline-none focus:border-blue-400 font-mono"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* MCX Lot Brokerage Grid */}
                            <div className="mt-8 bg-black/20 p-6 rounded-lg border border-white/5">
                                <h4 className="text-white text-xs font-bold uppercase mb-6 opacity-60 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                                    MCX Lot Wise Brokerage
                                </h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                                    {Object.entries(formData.mcx_lot_brokerage).map(([scrip, value]) => (
                                        <div key={scrip} className="space-y-1">
                                            <label className="text-[9px] text-slate-500 font-bold uppercase block truncate">{scrip}</label>
                                            <input
                                                type="text"
                                                value={value}
                                                onChange={(e) => handleNestedChange('mcx_lot_brokerage', scrip, null, e.target.value)}
                                                className="w-full bg-transparent border-b border-white/10 text-white text-xs py-1 focus:outline-none focus:border-yellow-400 font-mono"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Equity Futures Section */}
                        <section>
                            <legend className={fieldsetLabelClass}>Equity Futures:</legend>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                                <label className={checkboxLabelClass}>
                                    <input type="checkbox" name="nse_enabled" checked={formData.nse_enabled} onChange={handleChange} className="w-4 h-4 rounded border-white/20 bg-transparent text-[#5cb85c]" />
                                    Equity Trading
                                </label>
                                <div>
                                    <label className={labelClass}>Equity Brokerage (Cr)</label>
                                    <input type="text" name="nse_brokerage" value={formData.nse_brokerage} onChange={handleChange} className={inputClass} />
                                </div>
                                <div>
                                    <label className={labelClass}>Intraday Margin Equity</label>
                                    <input type="text" name="nse_intraday_margin" value={formData.nse_intraday_margin} onChange={handleChange} className={inputClass} />
                                </div>
                                <div>
                                    <label className={labelClass}>Holding Margin Equity</label>
                                    <input type="text" name="nse_holding_margin" value={formData.nse_holding_margin} onChange={handleChange} className={inputClass} />
                                </div>
                                <div>
                                    <label className={labelClass}>Max Equity Lots</label>
                                    <input type="text" name="max_nse_equity_lots" value={formData.max_nse_equity_lots} onChange={handleChange} className={inputClass} />
                                </div>
                                <div>
                                    <label className={labelClass}>Max Index Lots</label>
                                    <input type="text" name="max_nse_index_lots" value={formData.max_nse_index_lots} onChange={handleChange} className={inputClass} />
                                </div>
                            </div>
                        </section>

                        {/* Options Config Section */}
                        <section>
                            <legend className={fieldsetLabelClass}>Options Config:</legend>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                                <label className={checkboxLabelClass}>
                                    <input type="checkbox" name="options_enabled" checked={formData.options_enabled} onChange={handleChange} className="w-4 h-4 rounded border-white/20 bg-transparent text-[#5cb85c]" />
                                    Index Options
                                </label>
                                <label className={checkboxLabelClass}>
                                    <input type="checkbox" name="equity_options_enabled" checked={formData.equity_options_enabled} onChange={handleChange} className="w-4 h-4 rounded border-white/20 bg-transparent text-[#5cb85c]" />
                                    Equity Options
                                </label>
                                <label className={checkboxLabelClass}>
                                    <input type="checkbox" name="mcx_options_enabled" checked={formData.mcx_options_enabled} onChange={handleChange} className="w-4 h-4 rounded border-white/20 bg-transparent text-[#5cb85c]" />
                                    MCX Options
                                </label>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div>
                                    <label className={labelClass}>Index Options Brokerage</label>
                                    <input type="text" name="options_brokerage" value={formData.options_brokerage} onChange={handleChange} className={inputClass} />
                                </div>
                                <div>
                                    <label className={labelClass}>Equity Options Brokerage</label>
                                    <input type="text" name="options_equity_brokerage" value={formData.options_equity_brokerage} onChange={handleChange} className={inputClass} />
                                </div>
                                <div>
                                    <label className={labelClass}>Intraday Options Margin</label>
                                    <input type="text" name="options_intraday_margin" value={formData.options_intraday_margin} onChange={handleChange} className={inputClass} />
                                </div>
                                <div>
                                    <label className={labelClass}>Min. Bid Price</label>
                                    <input type="text" name="options_minimum_bid" value={formData.options_minimum_bid} onChange={handleChange} className={inputClass} />
                                </div>
                            </div>
                        </section>

                        {/* Submit Section */}
                        <div className="fixed bottom-0 left-0 right-0 bg-[#161c2d] py-6 px-12 border-t border-white/5 flex justify-end gap-6 shadow-2xl z-20">
                            <button type="button" onClick={onClose} className="px-8 py-2.5 rounded text-slate-400 font-bold text-xs uppercase hover:text-white hover:bg-white/5 transition-all tracking-wider">
                                DISCARD CHANGES
                            </button>
                            <button type="submit" className="bg-[#5cb85c] hover:bg-[#4caf50] text-white px-12 py-3 rounded-lg font-bold text-xs tracking-[0.2em] flex items-center gap-3 shadow-lg transition-all uppercase">
                                <Save className="w-4 h-4" /> COMMIT UPDATE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateClientPage;
