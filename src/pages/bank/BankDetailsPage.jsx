import React from 'react';
import { Plus, Search } from 'lucide-react';

const BankDetailsPage = () => {
  const bankData = [
    { 
      id: 1, 
      bankName: "HDFC Bank", 
      accountHolder: "SHRISHREENATHJI TRADERS", 
      accountNumber: "50200012345678", 
      ifsc: "HDFC0001234", 
      branch: "Mumbai Main Branch", 
      status: "Active" 
    },
    { 
      id: 2, 
      bankName: "ICICI Bank", 
      accountHolder: "SHRISHREENATHJI TRADERS", 
      accountNumber: "000405001234", 
      ifsc: "ICIC0000004", 
      branch: "Delhi Connaught Place", 
      status: "Active" 
    },
    { 
      id: 3, 
      bankName: "State Bank of India", 
      accountHolder: "SHRISHREENATHJI TRADERS", 
      accountNumber: "31234567890", 
      ifsc: "SBIN0001234", 
      branch: "Ahmedabad Corporate Branch", 
      status: "Inactive" 
    },
  ];

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Header Actions */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white tracking-tight italic">Bank Details Management</h2>
        <button className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-2 px-6 rounded transition-all uppercase tracking-wider text-xs flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add New Bank
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-[#151c2c] p-4 rounded border border-[#2d3748] mb-6 flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search by bank or account number..." 
            className="w-full bg-[#1c2638] border border-[#2d3748] text-white pl-10 pr-4 py-2 rounded text-sm focus:outline-none focus:border-[#01B4EA] transition-colors"
          />
        </div>
        <select className="bg-[#1c2638] border border-[#2d3748] text-white px-4 py-2 rounded text-sm focus:outline-none focus:border-[#01B4EA]">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* Table Section */}
      <div className="flex-1 bg-[#151c2c] rounded-lg border border-[#2d3748] overflow-hidden flex flex-col shadow-xl">
        <div className="overflow-x-auto overflow-y-auto custom-scrollbar flex-1">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-[#1c2638] z-10">
              <tr className="text-slate-100 text-[11px] font-semibold border-b border-[#2d3748] uppercase tracking-wider">
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4 font-bold">Bank Name</th>
                <th className="px-6 py-4">Account Holder</th>
                <th className="px-6 py-4">Account Number</th>
                <th className="px-6 py-4">IFSC Code</th>
                <th className="px-6 py-4">Branch</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-[12px] text-slate-300">
              {bankData.map((bank) => (
                <tr key={bank.id} className="border-b border-[#2d3748] hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-4 text-slate-500">#{bank.id}</td>
                  <td className="px-6 py-4 font-semibold text-white">{bank.bankName}</td>
                  <td className="px-6 py-4">{bank.accountHolder}</td>
                  <td className="px-6 py-4 text-[#01B4EA] font-mono">{bank.accountNumber}</td>
                  <td className="px-6 py-4 font-mono">{bank.ifsc}</td>
                  <td className="px-6 py-4">{bank.branch}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${
                      bank.status === 'Active' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {bank.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-[#01B4EA] hover:text-cyan-400 text-xs font-bold uppercase tracking-widest bg-cyan-500/5 px-3 py-1 rounded border border-cyan-500/10 transition-all opacity-0 group-hover:opacity-100">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-[#2d3748] bg-[#1c2638]/30 flex justify-between items-center">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest">Showing {bankData.length} records</p>
          <div className="flex gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded bg-[#1c2638] text-white text-xs border border-[#2d3748]">1</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetailsPage;
