import React, { useState } from 'react';
import ClientDashboard from '../../components/ClientDashboard';

const LiveM2MPage = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  const clients = [
    { id: '3274 : Sweta namdev', ledger: '30134.88', m2m: '30234.53', activePL: '99.65', activeTrades: '24', margin: '32.77', holding: '97.76' },
    { id: '3343 : Ar0', ledger: '14000', m2m: '6925', activePL: '-7075', activeTrades: '1', margin: '500', holding: '2500' },
    { id: '3725 : Namdevji', ledger: '2398.8', m2m: '2481.04', activePL: '82.24', activeTrades: '17', margin: '18.72', holding: '55.85' },
    { id: '4249 : Sajjan', ledger: '13216.93', m2m: '12616.93', activePL: '-600', activeTrades: '2', margin: '1447.95', holding: '4322.24' },
    { id: '4334 : Subhash bhavar', ledger: '131679.63', m2m: '124899.63', activePL: '-6780', activeTrades: '1', margin: '2000', holding: '8000' },
    { id: '4372 : Pardeep kumar', ledger: '58118.96', m2m: '54538.96', activePL: '-3580', activeTrades: '1', margin: '1000', holding: '5000' },
    { id: '4378 : Arjun jain', ledger: '282153.54', m2m: '276628.54', activePL: '-5525', activeTrades: '2', margin: '3000', holding: '15000' },
    { id: '4395 : Jitu0', ledger: '132489.06', m2m: '133189.06', activePL: '700', activeTrades: '2', margin: '40000', holding: '80000' },
  ];

  if (selectedClient) {
    return <ClientDashboard onBack={() => setSelectedClient(null)} />;
  }

  return (
    <div className="flex flex-col h-full bg-[#0b111e] p-4 space-y-6 overflow-y-auto custom-scrollbar">
      {/* Header */}
      <div className="bg-[#4CAF50] p-4 rounded shadow-md">
        <h2 className="text-white text-xl font-normal tracking-wide">
          Live M2M under: rk002
        </h2>
      </div>

      {/* Main Table */}
      <div className="flex-1 bg-[#151c2c] rounded border border-[#2d3748] shadow-xl overflow-hidden flex flex-col">
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="text-slate-300 text-[13px] font-normal border-b border-[#2d3748] bg-[#151c2c]">
                <th className="px-6 py-4">User ID</th>
                <th className="px-6 py-4">Ledger Balance</th>
                <th className="px-6 py-4">M2M</th>
                <th className="px-6 py-4">Active Profit/Loss</th>
                <th className="px-6 py-4">Active Trades</th>
                <th className="px-6 py-4">Margin Used</th>
                <th className="px-6 py-4">Holding Margin</th>
              </tr>
            </thead>
            <tbody className="text-[13px] text-slate-300">
              {clients.map((client, idx) => (
                <tr 
                  key={idx} 
                  onClick={() => setSelectedClient(client)}
                  className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4 text-green-400 font-medium">{client.id}</td>
                  <td className="px-6 py-4">{client.ledger}</td>
                  <td className="px-6 py-4">{client.m2m}</td>
                  <td className={`px-6 py-4 ${parseFloat(client.activePL) >= 0 ? 'text-slate-300' : 'text-slate-300'}`}>
                    {/* The screenshot shows straight white/grey text for PL, unlike previous views where it was colored. 
                        Wait, Image 4 had colored M2M. Image 5 shows white text for most columns. 
                        Let's keep it clean slate-300 as per image for now, maybe only User ID is green. */}
                    {client.activePL}
                  </td>
                  <td className="px-6 py-4">{client.activeTrades}</td>
                  <td className="px-6 py-4">{client.margin}</td>
                  <td className="px-6 py-4">{client.holding}</td>
                  {/* Note: Screenshot shows '4322.24' in yellow for Sajjan? 
                      'Holding Margin' col has one yellow value. I'll stick to slate for consistency unless logic known.
                   */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Turnover Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#4CAF50] p-6 rounded shadow-lg text-white">
          <h3 className="text-xl font-normal">Buy Turnover</h3>
        </div>
        <div className="bg-[#4CAF50] p-6 rounded shadow-lg text-white">
          <h3 className="text-xl font-normal">Sell Turnover</h3>
        </div>
        <div className="bg-[#4CAF50] p-6 rounded shadow-lg text-white">
            <h3 className="text-xl font-normal">Total Turnover</h3>
        </div>
      </div>
    </div>
  );
};

export default LiveM2MPage;
