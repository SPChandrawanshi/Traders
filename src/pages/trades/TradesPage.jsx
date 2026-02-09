import React, { useState } from 'react';
import { Eye, Pencil, Trash2, ChevronUp, Search as SearchIcon, RotateCcw } from 'lucide-react';

const TradesPage = () => {
  const [view, setView] = useState('list'); // list, delete_confirm
  const [activeDataView, setActiveDataView] = useState('detailed'); // detailed (with P/L, Time Diff, Bought At)

  const tradeData = [
    { id: '4238782', scrip: 'GOLD26APRFUT', segment: 'MCX', userId: '4424 SHRE043 : Lv', buyRate: '144696.00000000', sellRate: '145201.00000000', lots: '0.2 lots', pl: '10100', timeDiff: '-1577 secs', boughtAt: '2026-02-02 10:29:42' },
    { id: '4238684', scrip: 'SILVER26MARFUT', segment: 'MCX', userId: '4424 SHRE043 : Lv', buyRate: '235926.00000000', sellRate: '238135.00000000', lots: '0.2 lots', pl: '13254', timeDiff: '524 secs', boughtAt: '2026-02-02 14:34:34' },
    { id: '4238622', scrip: 'GOLD26APRFUT', segment: 'MCX', userId: '4424 SHRE043 : Lv', buyRate: '148359.00000000', sellRate: '148933.00000000', lots: '0.02 lots', pl: '1148', timeDiff: '-693 secs', boughtAt: '2026-02-02 20:15:55' },
    { id: '4238339', scrip: 'COPPER26FEBFUT', segment: 'MCX', userId: '3766 SHRE0341 : Vinita jain', buyRate: '1227.30000000', sellRate: '1227.30000000', lots: '0 lots', pl: '0', timeDiff: 'secs', boughtAt: '2026-02-02 23:46:56' },
    { id: '4238328', scrip: 'COPPER26FEBFUT', segment: 'MCX', userId: '3766 SHRE0341 : Vinita jain', buyRate: '1236.00000000', sellRate: '1236.00000000', lots: '0 lots', pl: '0', timeDiff: 'secs', boughtAt: '2026-02-02 23:45:20' },
    { id: '4237729', scrip: 'GOLD26APRFUT', segment: 'MCX', userId: '4424 SHRE043 : Lv', buyRate: '148359.00000000', sellRate: '148933.00000000', lots: '0.5 lots', pl: '28700', timeDiff: '693 secs', boughtAt: '2026-02-02 20:15:55' },
    { id: '4237725', scrip: 'GOLD26APRFUT', segment: 'MCX', userId: '4424 SHRE043 : Lv', buyRate: '148382.00000000', sellRate: '148933.00000000', lots: '0.2 lots', pl: '11020', timeDiff: '681 secs', boughtAt: '2026-02-02 20:15:43' },
    { id: '4237722', scrip: 'GOLD26APRFUT', segment: 'MCX', userId: '4424 SHRE043 : Lv', buyRate: '148385.00000000', sellRate: '148933.00000000', lots: '0.1 lots', pl: '5480', timeDiff: '667 secs', boughtAt: '2026-02-02 20:15:29' },
  ];

  const ListView = () => (
    <div className="flex flex-col h-full bg-[#0b111e] p-6 space-y-6 overflow-y-auto custom-scrollbar">
      {/* Search Filter */}
      <div className="bg-[#151c2c] p-8 rounded border border-[#2d3748] shadow-lg">
        <div className="flex items-end gap-12">
          <div className="flex flex-col gap-2 flex-1 max-w-sm">
            <label className="text-sm text-slate-400 font-medium">Username</label>
            <div className="border-b border-[#2d3748] pb-1">
              <input type="text" className="bg-transparent text-slate-100 text-sm outline-none w-full" />
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-2.5 px-10 rounded transition-all uppercase tracking-widest text-xs flex items-center gap-2">
              <SearchIcon className="w-3.5 h-3.5" /> SEARCH
            </button>
            <button className="bg-[#607d8b] hover:bg-slate-500 text-white font-bold py-2.5 px-10 rounded transition-all uppercase tracking-widest text-xs flex items-center gap-2">
              <RotateCcw className="w-3.5 h-3.5" /> RESET
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-slate-400">Showing <span className="text-[#01B4EA] font-semibold">19</span> of <span className="text-[#01B4EA] font-semibold">19</span> items.</p>
        </div>

        <div className="bg-[#151c2c] rounded-lg border border-[#2d3748] overflow-hidden shadow-xl">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[1200px]">
              <thead>
                <tr className="text-slate-100 text-[11px] font-semibold border-b border-[#2d3748] bg-[#151c2c]">
                  <th className="px-6 py-4 w-12">
                    <Trash2 className="w-4 h-4 text-slate-500 opacity-0" />
                  </th>
                  <th className="px-6 py-4">
                    <div className="flex items-center gap-1 cursor-pointer">
                      ID <ChevronUp className="w-3 h-3 text-[#01B4EA]" />
                    </div>
                  </th>
                  <th className="px-6 py-4">Scrip</th>
                  <th className="px-6 py-4">Segment</th>
                  <th className="px-6 py-4">User ID</th>
                  <th className="px-6 py-4 text-right">Buy Rate</th>
                  <th className="px-6 py-4 text-right">Sell Rate</th>
                  <th className="px-6 py-4">Lots / Units</th>
                  <th className="px-6 py-4 text-right">Profit/Loss</th>
                  <th className="px-6 py-4 text-right">Time Diff</th>
                  <th className="px-6 py-4 text-right">Bought at</th>
                </tr>
              </thead>
              <tbody className="text-[11px] text-slate-100">
                {tradeData.map((trade) => (
                  <tr key={trade.id} className="border-b border-[#2d3748] bg-[#8B6D05] hover:opacity-90 transition-opacity">
                    <td className="px-6 py-3 text-center">
                      <Trash2 
                        onClick={() => setView('delete_confirm')}
                        className="w-4 h-4 text-white cursor-pointer hover:scale-110 transition-transform" 
                      />
                    </td>
                    <td className="px-6 py-3">{trade.id}</td>
                    <td className="px-6 py-3 uppercase">{trade.scrip}</td>
                    <td className="px-6 py-3">{trade.segment}</td>
                    <td className="px-6 py-3">{trade.userId}</td>
                    <td className="px-6 py-3 text-right font-mono">{trade.buyRate}</td>
                    <td className="px-6 py-3 text-right font-mono">{trade.sellRate}</td>
                    <td className="px-6 py-3">{trade.lots}</td>
                    <td className="px-6 py-3 text-right font-bold">{trade.pl}</td>
                    <td className="px-6 py-3 text-right">{trade.timeDiff}</td>
                    <td className="px-6 py-3 text-right whitespace-nowrap">{trade.boughtAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-[#1c2638]/50">
            <span className="text-[#01B4EA] text-sm font-semibold">1</span>
          </div>
        </div>
      </div>
    </div>
  );

  const DeleteView = () => (
    <div className="flex flex-col h-full bg-[#0b111e] p-6">
      <div className="inline-block bg-[#4CAF50] rounded overflow-hidden mb-8 shadow-lg">
        <div className="bg-[#4CAF50] text-white font-bold py-2.5 px-8 text-sm uppercase tracking-wider">
          Delete Trade
        </div>
      </div>
      
      <div className="bg-[#151c2c] p-10 rounded border border-[#2d3748] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#4CAF50]" />
        
        <p className="text-slate-300 text-[15px] leading-relaxed mb-10">
          You are about to delete trade of <span className="text-white font-bold">0.200000 lots of GOLD26APRFUT of SHRE043 (4424)</span>. 
          Trade will be removed permanently. Enter Transaction Password to continue.
        </p>
        
        <div className="flex flex-col md:flex-row items-end gap-6 max-w-4xl">
          <div className="flex flex-col gap-2 flex-1 w-full">
            <label className="text-xs text-slate-400 font-medium uppercase tracking-widest">Transaction Password</label>
            <div className="border-b-2 border-[#2d3748] pb-1 group focus-within:border-[#4CAF50] transition-colors">
              <input 
                type="password" 
                className="bg-transparent text-white w-full outline-none text-base py-1" 
                autoFocus
              />
            </div>
          </div>
          
          <button 
            onClick={() => setView('list')}
            className="bg-[#4CAF50] hover:bg-[#3d8b40] text-white font-bold py-3 px-10 rounded transition-all uppercase tracking-widest text-xs h-fit shadow-xl"
          >
            REMOVE TRADE
          </button>
        </div>
      </div>
    </div>
  );

  return view === 'list' ? <ListView /> : <DeleteView />;
};

export default TradesPage;
