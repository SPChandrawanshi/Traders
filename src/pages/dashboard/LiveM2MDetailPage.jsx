import React from 'react';
import { ArrowLeft } from 'lucide-react';

const LiveM2MDetailPage = ({ selectedClient, onBack, onClientClick }) => {
    const subClients = [
        { id: '3703274 : Sweta namdev', ledger: '2941.98', m2m: '2935.33', activePL: '-6.65', trades: '2', margin: '2.43', holding: '0' },
        { id: '3703725 : Namdevji', ledger: '2556.97', m2m: '2534.74', activePL: '-22.23', trades: '3', margin: '7.59', holding: '0' },
        { id: '3703766 : Vinita jain', ledger: '631456.33', m2m: '617196.33', activePL: '-13760', trades: '2', margin: '15000', holding: '75000' },
        { id: '3703942 : Manoj shrivastav', ledger: '32.66', m2m: '77.61', activePL: '44.95', trades: '1', margin: '14.66', holding: '25000' },
        { id: '3704249 : Sajjan', ledger: '19126.93', m2m: '16816.93', activePL: '-2310', trades: '2', margin: '4410.45', holding: '50000' },
        { id: '3704266 : Pankaj', ledger: '55090.94', m2m: '53190.94', activePL: '-2160', trades: '1', margin: '5000', holding: '25000' },
        { id: '3704330 : Kamlesh', ledger: '6411.15', m2m: '5671.15', activePL: '-700', trades: '2', margin: '1000', holding: '6000' },
        { id: '3704395 : Jitu0', ledger: '107923.06', m2m: '102088.06', activePL: '-5515', trades: '3', margin: '15000', holding: '140000' },
        { id: '3704402 : Vinay sharma', ledger: '12620.38', m2m: '13495.38', activePL: '875', trades: '1', margin: '5000', holding: '25000' },
        { id: '3704468 : Rakesh', ledger: '8562.18', m2m: '8370.71', activePL: '-191.47', trades: '21', margin: '80.02', holding: '475000' },
    ];

    return (
        <div className="flex flex-col h-full bg-[#1a2035] p-6 space-y-12 overflow-y-auto custom-scrollbar">
            <div className="relative mt-4">
                <div className="bg-[#1f283e] rounded-md shadow-2xl relative pt-12">
                    {/* Header Ribbon - Matching 2nd Screenshot exactly */}
                    <div
                        className="absolute -top-6 left-4 rounded-md shadow-[0_4px_20px_0_rgba(0,0,0,0.14),0_7px_10px_-5px_rgba(76,175,80,0.4)] px-10 py-5 z-10 w-[calc(100%-32px)] flex items-center justify-between"
                        style={{ background: 'linear-gradient(60deg, #288c6c, #4ea752)' }}
                    >
                        <h2 className="text-white text-lg font-bold tracking-tight lowercase">
                            live m2m under: {selectedClient?.username || selectedClient?.id?.split(' : ')[1] || 'rk002'}
                        </h2>
                        <button
                            onClick={onBack}
                            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded-md transition-all text-xs border border-white/20 uppercase font-black"
                        >
                            <ArrowLeft className="w-4 h-4" /> BACK TO DASHBOARD
                        </button>
                    </div>

                    <div className="px-6 py-4 overflow-x-auto min-h-[500px]">
                        <table className="w-full text-left border-collapse whitespace-nowrap">
                            <thead className="border-b border-white/5">
                                <tr className="text-[#a0aec0] text-[13px] font-bold uppercase tracking-widest leading-none">
                                    <th className="px-4 py-6 font-normal">USER ID</th>
                                    <th className="px-4 py-6 font-normal">LEDGER BALANCE</th>
                                    <th className="px-4 py-6 font-normal">M2M</th>
                                    <th className="px-4 py-6 font-normal">ACTIVE PROFIT/LOSS</th>
                                    <th className="px-4 py-6 font-normal">ACTIVE TRADES</th>
                                    <th className="px-4 py-6 font-normal">MARGIN USED</th>
                                    <th className="px-4 py-6 font-normal">HOLDING</th>
                                </tr>
                            </thead>
                            <tbody className="text-[14px]">
                                {subClients.map((client, index) => (
                                    <tr key={index} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <td
                                            className="px-4 py-4 text-[#4caf50] font-bold hover:underline cursor-pointer"
                                            onClick={() => onClientClick({ id: client.id })}
                                        >
                                            {client.id}
                                        </td>
                                        <td className="px-4 py-4 text-white font-medium">{client.ledger}</td>
                                        <td className="px-4 py-4 text-white font-medium">{client.m2m}</td>
                                        <td className={`px-4 py-4 font-bold ${parseFloat(client.activePL) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                            {client.activePL}
                                        </td>
                                        <td className="px-4 py-4 text-white">{client.trades}</td>
                                        <td className="px-4 py-4 text-white font-medium">{client.margin}</td>
                                        <td className="px-4 py-4 text-white font-medium">{client.holding}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 0px;
                }
            `}</style>
        </div>
    );
};

export default LiveM2MDetailPage;
