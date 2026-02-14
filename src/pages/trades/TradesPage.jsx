import React, { useState, useEffect } from 'react';
import { Trash2, Search as SearchIcon, RotateCcw, ArrowUp, Download } from 'lucide-react';

const TradesPage = ({ trades = [], onCreateClick }) => {
  const [view, setView] = useState('list');
  const [displayedTrades, setDisplayedTrades] = useState(trades);
  const [selectedTrades, setSelectedTrades] = useState([]);

  // Sync displayed trades when props change
  useEffect(() => {
      setDisplayedTrades(trades);
  }, [trades]);
  
  // Search State
  const [filters, setFilters] = useState({
      fromDate: '',
      toDate: '',
      id: '',
      scrip: '',
      userId: '',
      buyRate: '',
      sellRate: ''
  });

  const handleFilterChange = (e) => {
      const { name, value } = e.target;
      setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
      const filtered = trades.filter(trade => {
          const matchId = filters.id ? trade.id.includes(filters.id) : true;
          const matchScrip = filters.scrip ? trade.scrip.toLowerCase().includes(filters.scrip.toLowerCase()) : true;
          const matchUser = filters.userId ? trade.userId.includes(filters.userId) : true;
          const matchBuy = filters.buyRate ? trade.buyRate.includes(filters.buyRate) : true;
          const matchSell = filters.sellRate ? trade.sellRate.includes(filters.sellRate) : true;
          return matchId && matchScrip && matchUser && matchBuy && matchSell;
      });
      setDisplayedTrades(filtered);
  };

  const handleReset = () => {
      setFilters({
          fromDate: '',
          toDate: '',
          id: '',
          scrip: '',
          userId: '',
          buyRate: '',
          sellRate: ''
      });
      setDisplayedTrades(trades);
  };

  const handleExport = () => {
      if (displayedTrades.length === 0) return;
      
      const headers = ['ID', 'Scrip', 'Segment', 'User ID', 'Buy Rate', 'Sell Rate', 'Lots', 'PL', 'Time Diff', 'Bought At'];
      const csvContent = [
          headers.join(','),
          ...displayedTrades.map(row => [
              row.id, row.scrip, row.segment, row.userId, row.buyRate, row.sellRate, row.lots, row.pl, row.timeDiff, row.boughtAt
          ].join(','))
      ].join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      if (link.download !== undefined) {
          const url = URL.createObjectURL(blob);
          link.setAttribute('href', url);
          link.setAttribute('download', 'trades_export.csv');
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      }
  };

  const handleSelectAll = (e) => {
      if (e.target.checked) {
          setSelectedTrades(displayedTrades.map(t => t.id));
      } else {
          setSelectedTrades([]);
      }
  };

  const handleSelectRow = (id) => {
      setSelectedTrades(prev => 
          prev.includes(id) ? prev.filter(tid => tid !== id) : [...prev, id]
      );
  };

  const handleCloseTrades = () => {
      if (selectedTrades.length === 0) return;
      alert(`Simulating closing ${selectedTrades.length} trades: ${selectedTrades.join(', ')}`);
      // Here you would typically call an API or a prop function to delete/close these trades
      setSelectedTrades([]);
  };

  const MobileTradeCard = ({ trade }) => (
    <div className="bg-[#151c2c] p-4 rounded-lg border border-[#2d3748] shadow-md mb-3">
        <div className="flex justify-between items-start mb-2">
            <div>
                <span className="text-xs text-slate-400 font-mono">#{trade.id}</span>
                <h3 className="text-white font-bold text-sm uppercase mt-0.5">{trade.scrip}</h3>
                <span className="text-[10px] text-slate-500">{trade.segment}</span>
            </div>
             <div className="flex flex-col text-right">
                <span className="text-[10px] text-slate-400">Lots</span>
                <span className="text-white font-bold">{trade.lots}</span>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs mb-3 border-t border-[#2d3748] pt-2">
            <div className="flex flex-col">
                <span className="text-slate-500">Buy Rate</span>
                <span className="text-white font-medium">{trade.buyRate}</span>
            </div>
            <div className="flex flex-col text-right">
                <span className="text-slate-500">Sell Rate</span>
                <span className="text-white font-medium">{trade.sellRate}</span>
            </div>
        </div>
        
         <div className="flex justify-between items-center bg-[#0b111e] p-2 rounded border border-[#2d3748]">
             <span className="text-[10px] text-slate-400">{trade.userId}</span>
             <input 
                type="checkbox" 
                checked={selectedTrades.includes(trade.id)}
                onChange={() => handleSelectRow(trade.id)}
                className="rounded bg-slate-700 border-slate-600"
             />
        </div>
    </div>
  );

  const ListView = () => (
    <div className="flex flex-col h-full bg-[#0b111e] p-4 md:p-6 space-y-6 overflow-y-auto custom-scrollbar animate-fade-in">
      
       {/* Actions Header */}
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <button 
                onClick={onCreateClick}
                className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-2.5 px-6 rounded shadow-lg uppercase tracking-wider text-[11px] transition-all"
            >
                CREATE TRADES
            </button>
            
            <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto items-end">
                 <div className="flex gap-2">
                    <input type="date" name="fromDate" value={filters.fromDate} onChange={handleFilterChange} className="bg-white text-slate-900 text-xs py-2 px-3 rounded outline-none" placeholder="From Date" />
                    <input type="date" name="toDate" value={filters.toDate} onChange={handleFilterChange} className="bg-white text-slate-900 text-xs py-2 px-3 rounded outline-none" placeholder="To Date" />
                 </div>
                 <button 
                    onClick={handleExport}
                    className="bg-[#00BCD4] hover:bg-cyan-600 text-white font-bold py-2.5 px-6 rounded shadow-lg uppercase tracking-wider text-[11px] transition-all w-full md:w-auto flex items-center justify-center gap-2"
                 >
                    <Download className="w-4 h-4" />
                    EXPORT TRADES
                </button>
            </div>
       </div>

      {/* Filter Section */}
      <div className="bg-[#151c2c] p-6 rounded border border-[#2d3748] shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            <div className="border-b border-[#2d3748]">
                <label className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">ID</label>
                <input type="text" name="id" value={filters.id} onChange={handleFilterChange} className="bg-transparent w-full text-slate-200 text-sm py-1 outline-none" />
            </div>
            <div className="border-b border-[#2d3748]">
                <label className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Scrip</label>
                <input type="text" name="scrip" value={filters.scrip} onChange={handleFilterChange} className="bg-transparent w-full text-slate-200 text-sm py-1 outline-none" />
            </div>
             <div className="border-b border-[#2d3748]">
                <label className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">User ID</label>
                 <select name="userId" value={filters.userId} onChange={handleFilterChange} className="bg-transparent w-full text-slate-200 text-sm py-1 outline-none appearance-none">
                     <option value="" className="bg-[#151c2c]"></option>
                     <option value="User1" className="bg-[#151c2c]">User 1</option>
                     <option value="SHRE043" className="bg-[#151c2c]">SHRE043</option>
                 </select>
            </div>
            <div className="border-b border-[#2d3748]">
                <label className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Buy Rate</label>
                <input type="text" name="buyRate" value={filters.buyRate} onChange={handleFilterChange} className="bg-transparent w-full text-slate-200 text-sm py-1 outline-none" />
            </div>
            <div className="border-b border-[#2d3748]">
                <label className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Sell Rate</label>
                <input type="text" name="sellRate" value={filters.sellRate} onChange={handleFilterChange} className="bg-transparent w-full text-slate-200 text-sm py-1 outline-none" />
            </div>
        </div>
        
        <div className="flex gap-2">
            <button 
                onClick={handleSearch}
                className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-2 px-6 rounded shadow uppercase tracking-wider text-[10px] transition-all"
            >
                SEARCH
            </button>
            <button 
                onClick={handleReset}
                className="bg-[#607d8b] hover:bg-slate-500 text-white font-bold py-2 px-6 rounded shadow uppercase tracking-wider text-[10px] transition-all"
            >
                RESET
            </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-xs text-slate-400">Showing <span className="text-white font-bold">{displayedTrades.length}</span> of <span className="text-white font-bold">{trades.length}</span> items.</p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block bg-[#151c2c] rounded border border-[#2d3748] overflow-hidden shadow-xl">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="text-slate-300 text-[12px] font-semibold border-b border-[#2d3748] bg-[#151c2c]">
                  <th className="px-4 py-3 w-8">
                      <input 
                        type="checkbox" 
                        onChange={handleSelectAll}
                        checked={displayedTrades.length > 0 && selectedTrades.length === displayedTrades.length}
                        className="rounded bg-slate-700 border-slate-600" 
                      />
                  </th>
                  <th className="px-4 py-3">Actions</th>
                  <th className="px-4 py-3">ID <ArrowUp className="w-3 h-3 inline ml-1 text-[#FDD835]" /></th>
                  <th className="px-4 py-3">Scrip</th>
                  <th className="px-4 py-3">Segment</th>
                  <th className="px-4 py-3">User ID</th>
                  <th className="px-4 py-3">Buy Rate</th>
                  <th className="px-4 py-3">Sell Rate</th>
                  <th className="px-4 py-3">Lots / Units</th>
                  <th className="px-4 py-3">Bought at</th>
                  <th className="px-4 py-3">Sold at</th>
                </tr>
              </thead>
              <tbody className="text-[12px] text-slate-300">
                {displayedTrades.length > 0 ? (
                    displayedTrades.map((trade) => (
                  <tr key={trade.id} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors">
                    <td className="px-4 py-3">
                        <input 
                            type="checkbox" 
                            checked={selectedTrades.includes(trade.id)}
                            onChange={() => handleSelectRow(trade.id)}
                            className="rounded bg-slate-700 border-slate-600" 
                        />
                    </td>
                     <td className="px-4 py-3">
                         {/* Action buttons placeholder */}
                    </td>
                    <td className="px-4 py-3">{trade.id}</td>
                    <td className="px-4 py-3 text-[#01B4EA]">{trade.scrip}</td>
                    <td className="px-4 py-3">{trade.segment}</td>
                    <td className="px-4 py-3">{trade.userId}</td>
                    <td className="px-4 py-3">{trade.buyRate}</td>
                    <td className="px-4 py-3">{trade.sellRate}</td>
                    <td className="px-4 py-3">{trade.lots}</td>
                    <td className="px-4 py-3">{trade.boughtAt}</td>
                    <td className="px-4 py-3">{trade.soldAt || '-'}</td>
                  </tr>
                ))
                ) : (
                    <tr>
                        <td colSpan="11" className="px-6 py-8 text-center text-slate-500 italic">
                            No trades found.
                        </td>
                    </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card List View */}
        <div className="md:hidden space-y-3 pb-20">
            {trades.map((trade) => (
                <MobileTradeCard key={trade.id} trade={trade} />
            ))}
        </div>
        
        {/* Mass Actions */}
        <div className="pt-4">
             <button 
                onClick={handleCloseTrades}
                disabled={selectedTrades.length === 0}
                className={`bg-[#9C27B0] hover:bg-purple-600 text-white font-bold py-2.5 px-6 rounded shadow-lg uppercase tracking-wider text-[11px] transition-all ${selectedTrades.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
             >
                CLOSE TRADES
             </button>
        </div>

      </div>
    </div>
  );

  return <ListView />;
};

export default TradesPage;
