import React, { useState } from 'react';

const DepositRequestsPage = () => {
    const [depositRequests, setDepositRequests] = useState([
        {
            id: 758,
            name: "Priyadarshini",
            username: "SHRE0294",
            ledgerBalance: "",
            availableBalance: "",
            broker: "rk002 (323)",
            time: "28-Jul-2025 11:03 am",
            proofImage: "https://via.placeholder.com/60x100?text=Proof"
        },
        {
            id: 755,
            name: "MLB",
            username: "SHRE021",
            ledgerBalance: "",
            availableBalance: "",
            broker: "jp001 (390)",
            time: "25-Jul-2025 03:58 pm",
            proofImage: "https://via.placeholder.com/60x100?text=Proof"
        },
        {
            id: 754,
            name: "MLB",
            username: "SHRE021",
            ledgerBalance: "",
            availableBalance: "",
            broker: "jp001 (390)",
            time: "25-Jul-2025 03:58 pm",
            proofImage: "https://via.placeholder.com/60x100?text=Proof"
        },
        {
            id: 753,
            name: "Dummy User",
            username: "SHRE999",
            ledgerBalance: "1000",
            availableBalance: "1000",
            broker: "test001 (100)",
            time: "24-Jul-2025 10:00 am",
            proofImage: "https://via.placeholder.com/60x100?text=Proof"
        },
        {
            id: 752,
            name: "Sample Account",
            username: "SHRE123",
            ledgerBalance: "5000",
            availableBalance: "5000",
            broker: "brk005 (555)",
            time: "23-Jul-2025 02:30 pm",
            proofImage: "https://via.placeholder.com/60x100?text=Proof"
        }
    ]);

    const handleRemove = (id) => {
        if (window.confirm('Are you sure you want to remove this request?')) {
            setDepositRequests(prev => prev.filter(req => req.id !== id));
        }
    };

    return (
        <div className="flex flex-col h-full text-[#a0aec0]">
            <div className="mb-6">
                <span className="text-sm font-medium">Showing <span className="text-white font-bold">5</span> of <span className="text-white font-bold">5</span> items.</span>
            </div>

            <div className="flex-1 bg-[#151c2c] rounded-lg border border-[#2d3748] overflow-hidden flex flex-col shadow-xl">
                <div className="overflow-x-auto overflow-y-auto custom-scrollbar flex-1">
                    <table className="w-full text-left border-collapse min-w-[1000px]">
                        <thead className="sticky top-0 bg-[#0b111e] z-10 border-b border-[#2d3748]">
                            <tr className="text-white text-[13px] font-bold tracking-wider">
                                <th className="px-6 py-5 w-24">ID <span className="inline-block align-middle cursor-pointer">↑↑</span></th>
                                <th className="px-6 py-5">User Details</th>
                                <th className="px-6 py-5">Broker</th>
                                <th className="px-6 py-5">File</th>
                                <th className="px-6 py-5">Time</th>
                                <th className="px-6 py-5"></th>
                            </tr>
                        </thead>
                        <tbody className="text-[13px]">
                            {depositRequests.map((req, idx) => (
                                <tr key={req.id} className="border-b border-[#2d3748] group hover:bg-[#1c2638] transition-colors">
                                    <td className="px-6 py-8 align-middle text-white">{req.id}</td>
                                    <td className="px-6 py-8">
                                        <div className="space-y-4">
                                            <div>
                                                <span className="text-slate-400">Name: </span>
                                                <span className="text-blue-400 font-medium">{req.name}</span>
                                            </div>
                                            <div>
                                                <span className="text-slate-400">Username: </span>
                                                <span className="text-white">{req.username}</span>
                                            </div>
                                            <div>
                                                <span className="text-slate-400">Ledger Balance: </span>
                                                <span className="text-white">{req.ledgerBalance}</span>
                                            </div>
                                            <div>
                                                <span className="text-slate-400">Available Balance: </span>
                                                <span className="text-white">{req.availableBalance}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-8 align-middle">
                                        <span className="text-blue-400">{req.broker}</span>
                                    </td>
                                    <td className="px-6 py-8 align-middle">
                                        <div className="w-[80px] h-[120px] bg-black rounded shadow-lg overflow-hidden border border-[#2d3748] cursor-pointer hover:border-[#4CAF50] transition-all">
                                            <img
                                                src={req.proofImage}
                                                alt="Deposit Proof"
                                                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-6 py-8 align-middle text-white">
                                        {req.time}
                                    </td>
                                    <td className="px-6 py-8 align-middle text-right">
                                        <button 
                                            onClick={() => handleRemove(req.id)}
                                            className="bg-[#E53935] hover:bg-red-600 text-white font-bold py-2 px-6 rounded text-[11px] uppercase tracking-wider transition-all"
                                        >
                                            REMOVE
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DepositRequestsPage;
