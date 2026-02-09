import React, { useState } from 'react';
import { Trash2, ChevronUp } from 'lucide-react';

const BannedLimitOrdersPage = () => {
  const [view, setView] = useState('list');
  const [bannedItems, setBannedItems] = useState([
    { id: 35, scripId: 'CUB24DECFUT', startTime: '2024-12-16 17:16:00', endTime: '2024-12-16 17:17:00' }
  ]);

  const toggleView = () => setView(view === 'list' ? 'add' : 'list');

  const ListView = () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <p className="text-sm text-slate-400">Showing <span className="text-[#01B4EA] font-semibold">{bannedItems.length}</span> of <span className="text-[#01B4EA] font-semibold">{bannedItems.length}</span> items.</p>
        <button 
          onClick={toggleView}
          className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-2 px-6 rounded transition-all uppercase tracking-wider text-xs w-fit"
        >
          Ban Scrip for Order
        </button>
      </div>

      <div className="bg-[#151c2c] rounded-lg border border-[#2d3748] overflow-hidden">
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
    </div>
  );

  const AddFormView = () => (
    <div className="bg-[#151c2c] rounded-lg border border-[#2d3748] overflow-hidden max-w-4xl mx-auto w-full">
      <div className="p-1 px-4">
        <button className="bg-[#4CAF50]/90 text-white font-bold py-2 px-6 rounded transition-all uppercase tracking-wider text-xs w-fit mt-4 mb-6">
          Ban Scrip for Limit Order
        </button>
      </div>
      
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Start Date" 
              className="bg-white border-b border-white text-slate-800 p-1 px-3 w-full text-sm focus:outline-none" 
            />
            <select className="bg-[#1c2638] border border-[#2d3748] text-white p-1 px-2 rounded text-sm focus:outline-none focus:border-[#01B4EA]">
              <option>00</option>
            </select>
            <span className="text-white">:</span>
            <select className="bg-[#1c2638] border border-[#2d3748] text-white p-1 px-2 rounded text-sm focus:outline-none focus:border-[#01B4EA]">
              <option>00</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input 
              type="text" 
              placeholder="End Date" 
              className="bg-white border-b border-white text-slate-800 p-1 px-3 w-full text-sm focus:outline-none" 
            />
            <select className="bg-[#1c2638] border border-[#2d3748] text-white p-1 px-2 rounded text-sm focus:outline-none focus:border-[#01B4EA]">
              <option>00</option>
            </select>
            <span className="text-white">:</span>
            <select className="bg-[#1c2638] border border-[#2d3748] text-white p-1 px-2 rounded text-sm focus:outline-none focus:border-[#01B4EA]">
              <option>00</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <select className="bg-transparent border border-[#2d3748] text-slate-400 p-2 rounded text-sm focus:outline-none focus:border-[#01B4EA]">
            <option>Select Scrip</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <div className="border-b border-[#2d3748] relative">
            <input 
              type="password" 
              placeholder="Transaction Password" 
              className="bg-transparent text-white p-2 w-full text-sm focus:outline-none" 
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <button 
            onClick={toggleView}
            className="bg-[#01B4EA] hover:bg-cyan-600 text-white font-bold py-3 px-12 rounded transition-all uppercase tracking-wider text-xs w-full sm:w-fit"
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
