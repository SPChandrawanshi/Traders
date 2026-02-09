import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';

const TickersPage = () => {
  const [view, setView] = useState('list');
  const [tickers, setTickers] = useState([]);

  const toggleView = () => setView(view === 'list' ? 'add' : 'list');

  const ListView = () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <p className="text-sm text-slate-400">Showing <span className="text-[#01B4EA] font-semibold">{tickers.length}</span> of <span className="text-[#01B4EA] font-semibold">{tickers.length}</span> items.</p>
        <button 
          onClick={toggleView}
          className="bg-[#9C27B0] hover:bg-[#7B1FA2] text-white font-bold py-2 px-6 rounded transition-all uppercase tracking-wider text-xs w-fit"
        >
          Add Ticker
        </button>
      </div>

      <div className="bg-[#151c2c] rounded-lg border border-[#2d3748] overflow-hidden min-h-[150px]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-slate-100 text-[11px] font-semibold border-b border-[#2d3748] uppercase tracking-wider bg-[#1c2638]/50">
              <th className="px-6 py-4">
                <div className="flex items-center gap-1 cursor-pointer">
                  ID <ChevronUp className="w-3 h-3 text-[#01B4EA]" />
                </div>
              </th>
              <th className="px-6 py-4">Message</th>
              <th className="px-6 py-4">Start Time</th>
              <th className="px-6 py-4">End Time</th>
            </tr>
          </thead>
          <tbody className="text-[11px] text-slate-300">
            {tickers.length === 0 ? (
              <tr className="border-b border-[#2d3748]">
                <td colSpan="4" className="px-6 py-12 text-center text-slate-500 italic">No tickers available. Add one to see it here.</td>
              </tr>
            ) : (
              tickers.map((ticker) => (
                <tr key={ticker.id} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4">{ticker.id}</td>
                  <td className="px-6 py-4">{ticker.message}</td>
                  <td className="px-6 py-4">{ticker.startTime}</td>
                  <td className="px-6 py-4">{ticker.endTime}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  const AddTickerForm = () => (
    <div className="bg-[#151c2c] rounded-lg border border-[#2d3748] overflow-hidden max-w-5xl mx-auto w-full">
      <div className="p-1 px-4">
        <button className="bg-[#4CAF50]/90 text-white font-bold py-2 px-6 rounded transition-all uppercase tracking-wider text-xs w-fit mt-4 mb-6">
          Add Ticker
        </button>
      </div>
      
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {/* Start Date */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 border-b border-[#2d3748] pb-1">
            <input 
              type="text" 
              placeholder="Start Date" 
              className="bg-transparent text-white p-1 w-full text-sm outline-none placeholder-slate-500" 
            />
          </div>
          <div className="flex items-center gap-2 mt-1">
            <select className="bg-white text-slate-800 p-0.5 px-2 rounded text-xs outline-none">
              <option>00</option>
            </select>
            <span className="text-white">:</span>
            <select className="bg-white text-slate-800 p-0.5 px-2 rounded text-xs outline-none">
              <option>00</option>
            </select>
          </div>
        </div>

        {/* End Date */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 border-b border-[#2d3748] pb-1">
            <input 
              type="text" 
              placeholder="End Date" 
              className="bg-transparent text-white p-1 w-full text-sm outline-none placeholder-slate-500" 
            />
          </div>
          <div className="flex items-center gap-2 mt-1">
            <select className="bg-white text-slate-800 p-0.5 px-2 rounded text-xs outline-none">
              <option>00</option>
            </select>
            <span className="text-white">:</span>
            <select className="bg-white text-slate-800 p-0.5 px-2 rounded text-xs outline-none">
              <option>00</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-[#01B4EA] font-semibold mb-1">Message</label>
          <div className="border-b border-[#2d3748] pb-1">
            <textarea 
              className="bg-transparent text-white p-1 w-full text-sm outline-none placeholder-slate-500 min-h-[60px]"
              placeholder="Enter ticker message..."
            />
          </div>
        </div>

        {/* Transaction Password */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-slate-400 font-medium mb-1">Transaction Password</label>
          <div className="border-b border-[#2d3748] pb-1">
            <input 
              type="password" 
              className="bg-transparent text-white p-1 w-full text-sm outline-none" 
            />
          </div>
        </div>

        <div className="md:col-span-2 mt-4">
          <button 
            onClick={toggleView}
            className="bg-[#01B4EA] hover:bg-cyan-600 text-white font-bold py-3 px-12 rounded transition-all uppercase tracking-wider text-xs w-full sm:w-fit shadow-lg shadow-cyan-900/20"
          >
            ADD TICKER
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full overflow-y-auto custom-scrollbar p-6">
      {view === 'list' ? <ListView /> : <AddTickerForm />}
    </div>
  );
};

export default TickersPage;
