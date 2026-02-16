import React, { useState } from 'react';
import { Trash2, ChevronUp } from 'lucide-react';

const BannedLimitOrdersPage = () => {
  const [view, setView] = useState('list');
  const [bannedItems, setBannedItems] = useState([
    { id: 35, scripId: 'CUB24DECFUT', startTime: '2024-12-16 17:16:00', endTime: '2024-12-16 17:17:00' }
  ]);

  const toggleView = () => setView(view === 'list' ? 'add' : 'list');

  const MobileBannedItemCard = ({ item }) => (
    <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-md mb-3">
      <div className="flex justify-between items-start mb-3">
        <span className="text-[#01B4EA] font-bold text-sm">#{item.id}</span>
        <button className="text-slate-400 hover:text-red-400 transition-colors">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-slate-500 text-xs uppercase">Scrip ID</span>
          <span className="text-slate-800 font-medium text-sm">{item.scripId}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500 text-xs uppercase">Start Time</span>
          <span className="text-slate-600 text-xs">{item.startTime}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500 text-xs uppercase">End Time</span>
          <span className="text-slate-600 text-xs">{item.endTime}</span>
        </div>
      </div>
    </div>
  );

  const ListView = () => (
    <div className="flex flex-col gap-6">
      <div className="bg-white rounded-lg border border-slate-200 p-4 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <p className="text-sm text-slate-600">Showing <span className="text-[#01B4EA] font-semibold">{bannedItems.length}</span> of <span className="text-[#01B4EA] font-semibold">{bannedItems.length}</span> items.</p>
        <div className="flex gap-3 w-full md:w-auto">
          <button
            onClick={toggleView}
            className="btn-success-gradient text-white font-bold py-2 px-6 rounded uppercase tracking-wider text-xs flex-1 md:flex-initial"
          >
            Add to Ban
          </button>
          <button
            className="btn-success-gradient text-white font-bold py-2 px-6 rounded uppercase tracking-wider text-xs flex-1 md:flex-initial"
          >
            Remove from Ban
          </button>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block bg-white rounded-lg border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-slate-700 text-[11px] font-semibold border-b border-slate-200 uppercase tracking-wider bg-slate-50">
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
          <tbody className="text-[11px] text-slate-700">
            {bannedItems.map((item) => (
              <tr key={item.id} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
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
        <div className="p-4 border-t border-slate-200 bg-slate-50">
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
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden max-w-4xl mx-auto w-full">
      <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
        <h3 className="text-slate-800 font-bold uppercase tracking-wider text-sm">Add New Ban</h3>
        <button onClick={toggleView} className="text-slate-600 hover:text-slate-800 text-xs uppercase font-bold">Cancel</button>
      </div>

      <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-xs text-slate-400 uppercase font-bold">Start Time</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Start Date"
              className="bg-transparent border-b border-slate-300 focus:border-[#4caf50] text-slate-800 p-2 w-full text-sm focus:outline-none transition-colors"
            />
            <div className="flex items-center gap-1">
              <select className="bg-white border border-slate-300 text-slate-800 p-2 rounded text-sm focus:outline-none focus:border-[#4caf50]">
                <option>00</option>
              </select>
              <span className="text-slate-800 font-bold">:</span>
              <select className="bg-white border border-slate-300 text-slate-800 p-2 rounded text-sm focus:outline-none focus:border-[#4caf50]">
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
              className="bg-transparent border-b border-slate-300 focus:border-[#4caf50] text-slate-800 p-2 w-full text-sm focus:outline-none transition-colors"
            />
            <div className="flex items-center gap-1">
              <select className="bg-white border border-slate-300 text-slate-800 p-2 rounded text-sm focus:outline-none focus:border-[#4caf50]">
                <option>00</option>
              </select>
              <span className="text-slate-800 font-bold">:</span>
              <select className="bg-white border border-slate-300 text-slate-800 p-2 rounded text-sm focus:outline-none focus:border-[#4caf50]">
                <option>00</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs text-slate-600 uppercase font-bold">Scrip</label>
          <select className="bg-white border border-slate-300 text-slate-800 p-3 rounded text-sm focus:outline-none focus:border-[#4caf50] w-full">
            <option>Select Scrip</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs text-slate-600 uppercase font-bold">Password</label>
          <div className="border-b border-slate-300 relative">
            <input
              type="password"
              placeholder="Transaction Password"
              className="bg-transparent text-slate-800 p-2 w-full text-sm focus:outline-none focus:border-[#4caf50] transition-colors"
            />
          </div>
        </div>

        <div className="md:col-span-2 pt-4">
          <button
            onClick={toggleView}
            className="btn-success-gradient text-white font-bold py-3 px-12 rounded uppercase tracking-wider text-xs w-full"
          >
            Add to Ban
          </button>
        </div>
      </div>
    </div>
  );

  return (view === 'list' ? <ListView /> : <AddFormView />);
};

export default BannedLimitOrdersPage;
