// import React, { useState } from 'react';
// import ClientDashboard from '../../components/ClientDashboard';

// const LiveM2MPage = () => {
//   const [selectedClient, setSelectedClient] = useState(null);

//   const clients = [
//     { id: '323 : rk002', activePL: '-22678.11', activeTrades: '50', margin: '47999.42' },
//     { id: '324 : rr001', activePL: '9018', activeTrades: '11', margin: '2157.13' },
//     { id: '337 : gg001', activePL: '-320', activeTrades: '1', margin: '3883.6' },
//     { id: '339 : sp001', activePL: '-74600', activeTrades: '1', margin: '10000' },
//     { id: '352 : rus001', activePL: '100740.1', activeTrades: '19', margin: '34474.41' },
//     { id: '390 : jp001', activePL: '181794.05', activeTrades: '18', margin: '50409.66' },
//     { id: '399 : ar001', activePL: '-5105', activeTrades: '2', margin: '2500' },
//     { id: '410 : rs001', activePL: '311.5', activeTrades: '1', margin: '124.19' },
//     { id: '423 : nh001', activePL: '58239.9', activeTrades: '1', margin: '82471.01' },
//   ];

//   if (selectedClient) {
//     return <ClientDashboard client={selectedClient} onBack={() => setSelectedClient(null)} />;
//   }

//   const InfoCard = ({ title, data }) => (
//     <div className="bg-[#151c2c] rounded-lg border border-[#2d3748] shadow-xl overflow-hidden flex flex-col h-full">
//       <div className="bg-[#4CAF50] px-4 py-2 border-b border-[#2d3748]">
//         <h3 className="text-white text-sm font-bold tracking-wide">{title}</h3>
//       </div>
//       <div className="p-4 flex-1 flex flex-col justify-center space-y-3">
//         {data.map((item, index) => (
//           <div key={index} className="flex justify-between items-center text-xs">
//             <span className="text-slate-400 font-medium uppercase tracking-wider">{item.label}</span>
//             <span className="text-white font-bold tracking-wide">{item.value}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="flex flex-col h-full bg-[#202940] p-4 space-y-4 overflow-y-auto custom-scrollbar">

//       {/* 1. Live M2M Table (Top) */}
//       <div className="bg-[#151c2c] rounded-lg border border-[#2d3748] shadow-xl overflow-hidden">
//         <div className="bg-[#4CAF50] px-6 py-3 border-b border-[#2d3748]">
//             <h2 className="text-white text-sm font-bold tracking-wide">
//             Live M2M under: Demo pannel
//             </h2>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse whitespace-nowrap">
//             <thead>
//               <tr className="text-slate-400 text-[10px] font-bold border-b border-[#2d3748] bg-[#1a2333] uppercase tracking-wider">
//                 <th className="px-6 py-3">User ID</th>
//                 <th className="px-6 py-3">Active Profit/Loss</th>
//                 <th className="px-6 py-3">Active Trades</th>
//                 <th className="px-6 py-3">Margin Used</th>
//               </tr>
//             </thead>
//             <tbody className="text-[11px] text-slate-300">
//                 {clients.map((client, index) => (
//                   <tr key={index} className="border-b border-[#2d3748] hover:bg-[#1a2333]/50 transition-colors">
//                     <td className="px-6 py-3 cursor-pointer text-[#01B4EA] hover:underline" onClick={() => setSelectedClient(client)}>{client.id}</td>
//                     <td className={`px-6 py-3 ${parseFloat(client.activePL) >= 0 ? 'text-green-500' : 'text-red-500'}`}>{client.activePL}</td>
//                     <td className="px-6 py-3">{client.activeTrades}</td>
//                     <td className="px-6 py-3">{client.margin}</td>
//                   </tr>
//                 ))}
//                <tr className="border-b border-[#2d3748] bg-[#1a2333] font-bold text-white">
//                   <td className="px-6 py-3 text-slate-400">Total</td>
//                   <td className="px-6 py-3">0</td>
//                   <td className="px-6 py-3">0</td>
//                   <td className="px-6 py-3">0</td>
//                 </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* 2. Turnover Row */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <InfoCard 
//             title="Buy Turnover" 
//             data={[
//                 { label: "Mix:", value: "0 Lakhs" },
//                 { label: "NSE Fut:", value: "0 Lakhs" },
//                 { label: "NSE Opt:", value: "0 Lakhs" },
//                 { label: "Options:", value: "0 Lakhs" },
//                 { label: "COMX:", value: "0 Lakhs" },
//             ]} 
//         />
//         <InfoCard 
//             title="Sell Turnover" 
//             data={[
//                 { label: "Mix:", value: "0 Lakhs" },
//                 { label: "NSE Fut:", value: "0 Lakhs" },
//                 { label: "NSE Opt:", value: "0 Lakhs" },
//                 { label: "Options:", value: "0 Lakhs" },
//                 { label: "COMX:", value: "0 Lakhs" },
//             ]} 
//         />
//         <InfoCard 
//             title="Total Turnover" 
//             data={[
//                 { label: "Mix:", value: "0 Lakhs" },
//                 { label: "NSE Fut:", value: "0 Lakhs" },
//                 { label: "NSE Opt:", value: "0 Lakhs" },
//                 { label: "Options:", value: "0 Lakhs" },
//                 { label: "COMX:", value: "0 Lakhs" },
//             ]} 
//         />
//       </div>

//       {/* 3. Stats Row: Active Users, P/L, Brokerage */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <InfoCard 
//             title="Active Users" 
//             data={[
//                 { label: "Mix:", value: "1" },
//                 { label: "NSE Fut:", value: "1" },
//                 { label: "NSE Opt:", value: "1" },
//                 { label: "Options:", value: "1" },
//                 { label: "COMX:", value: "0" },
//             ]} 
//         />
//         <InfoCard 
//             title="Profit / Loss" 
//             data={[
//                 { label: "Mix:", value: "0" },
//                 { label: "NSE Fut:", value: "0" },
//                 { label: "NSE Opt:", value: "0" },
//                 { label: "Options:", value: "0" },
//                 { label: "COMX:", value: "0" },
//             ]} 
//         />
//         <InfoCard 
//             title="Brokerage" 
//             data={[
//                 { label: "Mix:", value: "0" },
//                 { label: "NSE Fut:", value: "0" },
//                 { label: "NSE Opt:", value: "0" },
//                 { label: "Options:", value: "0" },
//                 { label: "COMX:", value: "0" },
//             ]} 
//         />
//       </div>

//       {/* 4. Active Orders Row */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <InfoCard 
//             title="Active Buy" 
//             data={[
//                 { label: "Mix:", value: "0" },
//                 { label: "NSE Fut:", value: "0" },
//                 { label: "NSE Opt:", value: "0" },
//             ]} 
//         />
//         <InfoCard 
//             title="Active Sell" 
//             data={[
//                 { label: "Mix:", value: "0" },
//                 { label: "NSE Fut:", value: "0" },
//                 { label: "NSE Opt:", value: "0" },
//             ]} 
//         />
//       </div>

//     </div>
//   );
// };

// export default LiveM2MPage;



import React, { useState } from 'react';
// Agar tumhara ClientDashboard component exist karta hai toh rahne do, nahi toh error nahi aayega dashboard view ke liye.
// import ClientDashboard from '../../components/ClientDashboard'; 

const LiveM2MPage = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  const clients = [
    { id: '323 : rk002', activePL: '-22678.11', activeTrades: '50', margin: '47999.42' },
    { id: '324 : rr001', activePL: '9018', activeTrades: '11', margin: '2157.13' },
    { id: '337 : gg001', activePL: '-320', activeTrades: '1', margin: '3883.6' },
    { id: '339 : sp001', activePL: '-74600', activeTrades: '1', margin: '10000' },
    { id: '352 : rus001', activePL: '100740.1', activeTrades: '19', margin: '34474.41' },
    { id: '390 : jp001', activePL: '181794.05', activeTrades: '18', margin: '50409.66' },
    { id: '399 : ar001', activePL: '-5105', activeTrades: '2', margin: '2500' },
    { id: '410 : rs001', activePL: '311.5', activeTrades: '1', margin: '124.19' },
    { id: '423 : nh001', activePL: '58239.9', activeTrades: '1', margin: '82471.01' },
  ];

  // Agar Client select kiya gaya hai toh wahan redirect karega (Dashboard functionality)
  // if (selectedClient) {
  //   return <ClientDashboard client={selectedClient} onBack={() => setSelectedClient(null)} />;
  // }

  const InfoCard = ({ title, data }) => (
    <div className="bg-[#202940] rounded-lg border border-[#2d3748] shadow-xl overflow-hidden flex flex-col">
      <div className="bg-[#4CAF50] px-6 py-4 border-b border-[#2d3748]">
        <h3 className="text-white text-lg font-bold tracking-wide">{title}</h3>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-evenly">
        {data.map((item, index) => (
          <div key={index} className="text-right">
            <span className="block text-slate-400 text-sm mb-1">{item.label.replace(':', '')}</span>
            <h3 className="text-white text-3xl font-bold mb-3">
              {item.value.split(' ')[0]}
            </h3>
            {index < data.length - 1 && <div className="h-px bg-[#2d3748] my-2"></div>}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full bg-[#202940] p-4 space-y-4 overflow-y-auto custom-scrollbar">

      {/* 1. Live M2M Table (Top) */}
      <div className="bg-[#202940] rounded-lg border border-[#2d3748] shadow-xl overflow-hidden">
        <div className="bg-[#4CAF50] px-6 py-3 border-b border-[#2d3748]">
          <h2 className="text-white text-sm font-bold tracking-wide">
            Live M2M under: Demo panel
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="text-slate-400 text-[10px] font-bold border-b border-[#2d3748] bg-[#1a2333] uppercase tracking-wider">
                <th className="px-6 py-3">User ID</th>
                <th className="px-6 py-3">Active Profit/Loss</th>
                <th className="px-6 py-3">Active Trades</th>
                <th className="px-6 py-3">Margin Used</th>
              </tr>
            </thead>
            <tbody className="text-[11px] text-slate-300">
              {clients.map((client, index) => (
                <tr key={index} className="border-b border-[#2d3748] hover:bg-[#1a2333]/50 transition-colors cursor-pointer" onClick={() => setSelectedClient(client)}>
                  <td className="px-6 py-3 text-[#01B4EA] hover:underline font-bold">{client.id}</td>
                  <td className={`px-6 py-3 font-bold ${parseFloat(client.activePL) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {client.activePL}
                  </td>
                  <td className="px-6 py-3">{client.activeTrades}</td>
                  <td className="px-6 py-3">{client.margin}</td>
                </tr>
              ))}
              <tr className="border-b border-[#2d3748] bg-[#1a2333] font-bold text-white">
                <td className="px-6 py-3 text-slate-400">Total</td>
                <td className="px-6 py-3">0</td>
                <td className="px-6 py-3">0</td>
                <td className="px-6 py-3">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Turnover Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InfoCard
          title="Buy Turnover"
          data={[
            { label: "Mix:", value: "0 Lakhs" },
            { label: "NSE Fut:", value: "0 Lakhs" },
            { label: "NSE Opt:", value: "0 Lakhs" },
            { label: "Options:", value: "0 Lakhs" },
            { label: "COMX:", value: "0 Lakhs" },
          ]}
        />
        <InfoCard
          title="Sell Turnover"
          data={[
            { label: "Mix:", value: "0 Lakhs" },
            { label: "NSE Fut:", value: "0 Lakhs" },
            { label: "NSE Opt:", value: "0 Lakhs" },
            { label: "Options:", value: "0 Lakhs" },
            { label: "COMX:", value: "0 Lakhs" },
          ]}
        />
        <InfoCard
          title="Total Turnover"
          data={[
            { label: "Mix:", value: "0 Lakhs" },
            { label: "NSE Fut:", value: "0 Lakhs" },
            { label: "NSE Opt:", value: "0 Lakhs" },
            { label: "Options:", value: "0 Lakhs" },
            { label: "COMX:", value: "0 Lakhs" },
          ]}
        />
      </div>

      {/* 3. Stats Row: Active Users, P/L, Brokerage */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InfoCard
          title="Active Users"
          data={[
            { label: "Mix:", value: "1" },
            { label: "NSE Fut:", value: "1" },
            { label: "NSE Opt:", value: "1" },
            { label: "Options:", value: "1" },
            { label: "COMX:", value: "0" },
          ]}
        />
        <InfoCard
          title="Profit / Loss"
          data={[
            { label: "Mix:", value: "0" },
            { label: "NSE Fut:", value: "0" },
            { label: "NSE Opt:", value: "0" },
            { label: "Options:", value: "0" },
            { label: "COMX:", value: "0" },
          ]}
        />
        <InfoCard
          title="Brokerage"
          data={[
            { label: "Mix:", value: "0" },
            { label: "NSE Fut:", value: "0" },
            { label: "NSE Opt:", value: "0" },
            { label: "Options:", value: "0" },
            { label: "COMX:", value: "0" },
          ]}
        />
      </div>

      {/* 4. Active Orders Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <InfoCard
          title="Active Buy"
          data={[
            { label: "Mix:", value: "0" },
            { label: "NSE Fut:", value: "0" },
            { label: "NSE Opt:", value: "0" },
          ]}
        />
        <InfoCard
          title="Active Sell"
          data={[
            { label: "Mix:", value: "0" },
            { label: "NSE Fut:", value: "0" },
            { label: "NSE Opt:", value: "0" },
          ]}
        />
      </div>

    </div>
  );
};

export default LiveM2MPage;