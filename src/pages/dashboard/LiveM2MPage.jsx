import React, { useState } from 'react';

const LiveM2MPage = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  const clients = [
    { id: '323 : rk002', activePL: '-22678.11', activeTrades: '50', margin: '47999.42' },
    { id: '324 : rr001', activePL: '9018', activeTrades: '11', margin: '2157.13' },
    { id: '337 : gg001', activePL: '-320', activeTrades: '1', margin: '3883.6' },
    { id: '339 : sp001', activePL: '-74600', activeTrades: '1', margin: '10000' },
    { id: '352 : rus001', activePL: '100740.1', activeTrades: '19', margin: '34474.41' },
    { id: '390 : jp001', activePL: '181794.05', activeTrades: '18', margin: '50409.66' },
  ];

  const StatCard = ({ title, data }) => (
    <div className="bg-[#1f283e] rounded-md shadow-2xl relative mt-10 mb-6">
      {/* Offset Header */}
      <div className="absolute -top-6 left-4 right-4 bg-gradient-to-tr from-[#43a047] to-[#66bb6a] rounded-md shadow-[0_4px_20px_0_rgba(0,0,0,0.14),0_7px_10px_-5px_rgba(76,175,80,0.4)] px-6 py-4 z-10">
        <h3 className="text-white text-base font-bold uppercase tracking-tight">{title}</h3>
      </div>

      {/* Card Body */}
      <div className="pt-12 px-6 pb-6 space-y-4">
        {data.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex flex-col items-center">
              <span className="text-slate-400 text-[10px] uppercase font-bold tracking-[0.1em]">{item.label}</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-white text-3xl font-bold tracking-tight">{item.value.split(' ')[0]}</span>
                {item.value.includes('Lakhs') && (
                  <span className="text-slate-400 text-sm font-medium">Lakhs</span>
                )}
              </div>
            </div>
            {index < data.length - 1 && (
              <div className="h-[1px] bg-white opacity-5 w-full my-4"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full bg-[#1a2035] space-y-12">

      {/* 1. Live M2M Table Section */}
      <div className="relative mt-8">
        <div className="bg-[#1f283e] rounded-md shadow-2xl relative pt-12">
          {/* Table Offset Header */}
          <div className="absolute -top-6 left-4 bg-gradient-to-tr from-[#43a047] to-[#66bb6a] rounded-md shadow-[0_4px_20px_0_rgba(0,0,0,0.14),0_7px_10px_-5px_rgba(76,175,80,0.4)] px-10 py-5 z-10 w-[calc(100%-32px)]">
            <h2 className="text-white text-base font-bold uppercase tracking-tight">
              Live M2M under: Demo pannel
            </h2>
          </div>

          <div className="px-6 py-4 overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead className="border-b border-white/5">
                <tr className="text-[#4caf50] text-[12px] font-bold uppercase tracking-widest">
                  <th className="px-4 py-4">User ID</th>
                  <th className="px-4 py-4">Active Profit/Loss</th>
                  <th className="px-4 py-4">Active Trades</th>
                  <th className="px-4 py-4">Margin Used</th>
                </tr>
              </thead>
              <tbody className="text-[13px] text-slate-300">
                {clients.map((client, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer" onClick={() => setSelectedClient(client)}>
                    <td className="px-4 py-4 text-white font-medium">{client.id}</td>
                    <td className={`px-4 py-4 font-bold ${parseFloat(client.activePL) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {client.activePL}
                    </td>
                    <td className="px-4 py-4">{client.activeTrades}</td>
                    <td className="px-4 py-4">{client.margin}</td>
                  </tr>
                ))}
                <tr className="bg-black/10 font-bold text-white uppercase text-[11px] tracking-widest">
                  <td className="px-4 py-4">Total</td>
                  <td className="px-4 py-4">0</td>
                  <td className="px-4 py-4">0</td>
                  <td className="px-4 py-4">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 2. Turnover Rows - Updated Grid to Match Screenshot spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <StatCard
          title="Buy Turnover"
          data={[
            { label: "Mcx", value: "0 Lakhs" },
            { label: "NSE Futures", value: "0 Lakhs" },
            { label: "NSE Spot", value: "0 Lakhs" },
            { label: "Options", value: "0 Lakhs" },
            { label: "COMEX", value: "0 Lakhs" },
          ]}
        />
        <StatCard
          title="Sell Turnover"
          data={[
            { label: "Mcx", value: "0 Lakhs" },
            { label: "NSE Future", value: "0 Lakhs" },
            { label: "NSE Spot", value: "0 Lakhs" },
            { label: "Options", value: "0 Lakhs" },
            { label: "COMEX", value: "0 Lakhs" },
          ]}
        />
        <StatCard
          title="Total Turnover"
          data={[
            { label: "Mcx", value: "0 Lakhs" },
            { label: "NSE Future", value: "0 Lakhs" },
            { label: "NSE Spot", value: "0 Lakhs" },
            { label: "Options", value: "0 Lakhs" },
            { label: "COMEX", value: "0 Lakhs" },
          ]}
        />
      </div>

      {/* 3. Status Rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
        <StatCard
          title="Active Users"
          data={[
            { label: "Mcx", value: "1" },
            { label: "NSE Future", value: "1" },
            { label: "NSE Spot", value: "-" },
            { label: "Options", value: "1" },
            { label: "COMEX", value: "0" },
          ]}
        />
        <StatCard
          title="Profit / Loss"
          data={[
            { label: "Mcx", value: "0" },
            { label: "NSE Future", value: "0" },
            { label: "NSE Spot", value: "0" },
            { label: "Options", value: "0" },
            { label: "COMEX", value: "0" },
          ]}
        />
        <StatCard
          title="Brokerage"
          data={[
            { label: "Mcx", value: "0" },
            { label: "NSE Future", value: "0" },
            { label: "NSE Spot", value: "0" },
            { label: "Options", value: "0" },
            { label: "COMEX", value: "0" },
          ]}
        />
        <StatCard
          title="Active Buy"
          data={[
            { label: "Mcx", value: "0" },
            { label: "NSE Future", value: "0" },
            { label: "NSE Spot", value: "0" },
            { label: "Options", value: "0" },
            { label: "COMEX", value: "0" },
          ]}
        />
        <StatCard
          title="Active Sell"
          data={[
            { label: "Mcx", value: "0" },
            { label: "NSE Future", value: "0" },
            { label: "NSE Spot", value: "0" },
            { label: "Options", value: "0" },
            { label: "COMEX", value: "0" },
          ]}
        />
      </div>

    </div>
  );
};

export default LiveM2MPage;