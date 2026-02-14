import React, { useState } from 'react';
import { Trash2, ChevronUp } from 'lucide-react';

const BannedLimitOrdersPage = () => {
  const [view, setView] = useState('list');
  const [bannedItems, setBannedItems] = useState([
    { id: 35, scripId: 'CUB24DECFUT', startTime: '2024-12-16 17:16:00', endTime: '2024-12-16 17:17:00' }
  ]);

  const toggleView = () => setView(view === 'list' ? 'add' : 'list');

  const MobileBannedItemCard = ({ item }) => (
    <div className="bg-[#151c2c] p-4 rounded-lg border border-[#2d3748] shadow-md mb-3">
      <div className="flex justify-between items-start mb-3">
        <span className="text-[#01B4EA] font-bold text-sm">#{item.id}</span>
        <button className="text-slate-400 hover:text-red-400 transition-colors">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-slate-500 text-xs uppercase">Scrip ID</span>
          <span className="text-white font-medium text-sm">{item.scripId}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500 text-xs uppercase">Start Time</span>
          <span className="text-slate-300 text-xs">{item.startTime}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500 text-xs uppercase">End Time</span>
          <span className="text-slate-300 text-xs">{item.endTime}</span>
        </div>
      </div>
    </div>
  );

  const ListView = () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <p className="text-sm text-slate-400">Showing <span className="text-[#01B4EA] font-semibold">{bannedItems.length}</span> of <span className="text-[#01B4EA] font-semibold">{bannedItems.length}</span> items.</p>
        <button 
          onClick={toggleView}
          className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-2 px-6 rounded transition-all uppercase tracking-wider text-xs w-full md:w-fit active:scale-[0.98]"
        >
          Ban Scrip for Order
        </button>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block bg-[#151c2c] rounded-lg border border-[#2d3748] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-slate-100 text-[11px] font-semibold border-b border-[#2d3748] uppercase tracking-wider">
              <th className="px-6 py-4 w-16"></th>
              <th className="px-6 py-4">
                <div className="flex items-center gap-1 cursor-pointer">
                  ID <ChevronUp className="w-3 h-3 text-[#01B4EA]" />
                </div>
              </th>
              <th className="px-6 py-4">Scrip ID</th>
              <th className="px-6 py-4 text-[#01B4EA]">Start Time</th>
              <th className="px-6 py-4">End Time</th>
            </tr>
          </thead>
          <tbody className="text-[11px] text-slate-300">
            {bannedItems.map((item) => (
              <tr key={item.id} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors">
                <td className="px-6 py-4">
                  <Trash2 className="w-4 h-4 text-slate-500 cursor-pointer hover:text-red-400 transition-colors" />
                </td>
                <td className="px-6 py-4">{item.id}</td>
                <td className="px-6 py-4">{item.scripId}</td>
                <td className="px-6 py-4">{item.startTime}</td>
                <td className="px-6 py-4">{item.endTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 border-t border-[#2d3748]">
          <span className="text-[#01B4EA] text-sm font-semibold">1</span>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden">
        {bannedItems.map((item) => (
          <MobileBannedItemCard key={item.id} item={item} />
        ))}
        {bannedItems.length === 0 && (
           <div className="text-center text-slate-500 py-8">No banned limit orders found.</div>
        )}
      </div>
    </div>
  );

  const AddFormView = () => (
    <div className="bg-[#151c2c] rounded-lg border border-[#2d3748] overflow-hidden max-w-4xl mx-auto w-full">
      <div className="p-4 border-b border-[#2d3748] flex items-center justify-between">
         <h3 className="text-white font-bold uppercase tracking-wider text-sm">Add New Ban</h3>
         <button onClick={toggleView} className="text-slate-400 hover:text-white text-xs uppercase font-bold">Cancel</button>
      </div>
      
      <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="flex flex-col gap-2">
            <label className="text-xs text-slate-400 uppercase font-bold">Start Time</label>
          <div className="flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Start Date" 
              className="bg-transparent border-b border-slate-600 focus:border-[#01B4EA] text-white p-2 w-full text-sm focus:outline-none transition-colors" 
            />
            <div className="flex items-center gap-1">
                <select className="bg-[#1c2638] border border-[#2d3748] text-white p-2 rounded text-sm focus:outline-none focus:border-[#01B4EA]">
                <option>00</option>
                </select>
                <span className="text-white font-bold">:</span>
                <select className="bg-[#1c2638] border border-[#2d3748] text-white p-2 rounded text-sm focus:outline-none focus:border-[#01B4EA]">
                <option>00</option>
                </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
            <label className="text-xs text-slate-400 uppercase font-bold">End Time</label>
          <div className="flex items-center gap-2">
            <input 
              type="text" 
              placeholder="End Date" 
              className="bg-transparent border-b border-slate-600 focus:border-[#01B4EA] text-white p-2 w-full text-sm focus:outline-none transition-colors" 
            />
            <div className="flex items-center gap-1">
                <select className="bg-[#1c2638] border border-[#2d3748] text-white p-2 rounded text-sm focus:outline-none focus:border-[#01B4EA]">
                <option>00</option>
                </select>
                <span className="text-white font-bold">:</span>
                <select className="bg-[#1c2638] border border-[#2d3748] text-white p-2 rounded text-sm focus:outline-none focus:border-[#01B4EA]">
                <option>00</option>
                </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
           <label className="text-xs text-slate-400 uppercase font-bold">Scrip</label>
          <select className="bg-[#1c2638] border border-[#2d3748] text-slate-200 p-3 rounded text-sm focus:outline-none focus:border-[#01B4EA] w-full">
            <option>Select Scrip</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
            <label className="text-xs text-slate-400 uppercase font-bold">Password</label>
          <div className="border-b border-[#2d3748] relative">
            <input 
              type="password" 
              placeholder="Transaction Password" 
              className="bg-transparent text-white p-2 w-full text-sm focus:outline-none focus:border-[#01B4EA] transition-colors" 
            />
          </div>
        </div>

        <div className="md:col-span-2 pt-4">
          <button 
            onClick={toggleView}
            className="bg-[#01B4EA] hover:bg-cyan-600 text-white font-bold py-3 px-12 rounded transition-all uppercase tracking-wider text-xs w-full active:scale-[0.98]"
          >
            Add to Ban
          </button>
        </div>
      </div>
    </div>
  );

  return ( view === 'list' ? <ListView /> : <AddFormView /> );
};

export default BannedLimitOrdersPage;
