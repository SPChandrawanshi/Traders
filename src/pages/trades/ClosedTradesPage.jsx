import React from 'react';
import { ArrowUpDown } from 'lucide-react';

const ClosedTradesPage = () => {
    const trades = [
        {
            id: '4239381',
            scrip: 'GOLDM26MARFUT',
            buyRate: '142444',
            sellRate: '142880',
            lots: '1 / 10',
            buyTurnover: '1424440',
            sellTurnover: '1428800',
            pl: '4360',
            brokerage: '285.32',
            boughtAt: '2026-02-02 23:10:17',
            soldAt: '2026-02-02 23:22:48',
            buyIp: '152.58.28.60'
        },
        {
            id: '4238404',
            scrip: 'GOLDM26MARFUT',
            buyRate: '143093',
            sellRate: '144280',
            lots: '1 / 10',
            buyTurnover: '1430930',
            sellTurnover: '1442800',
            pl: '11870',
            brokerage: '287.37',
            boughtAt: '2026-02-02 21:22:53',
            soldAt: '2026-02-02 21:10:59',
            buyIp: '152.58.4.15'
        },
        {
            id: '4237559',
            scrip: 'GOLDM26MARFUT',
            buyRate: '143931',
            sellRate: '145419',
            lots: '1 / 10',
            buyTurnover: '1439310',
            sellTurnover: '1454190',
            pl: '14880',
            brokerage: '289.35',
            boughtAt: '2026-02-02 19:52:22',
            soldAt: '2026-02-02 19:58:41',
            buyIp: '152.58.7.23'
        },
        {
            id: '4237420',
            scrip: 'GOLDM26MARFUT',
            buyRate: '144635',
            sellRate: '145380',
            lots: '1 / 10',
            buyTurnover: '1446350',
            sellTurnover: '1453800',
            pl: '7450',
            brokerage: '290.02',
            boughtAt: '2026-02-02 19:27:37',
            soldAt: '2026-02-02 19:42:48',
            buyIp: '152.58.7.23'
        },
         {
            id: '4237333',
            scrip: 'GOLDM26MARFUT',
            buyRate: '143563',
            sellRate: '144805',
            lots: '1 / 10',
            buyTurnover: '1435630',
            sellTurnover: '1448050',
            pl: '12420',
            brokerage: '288.37',
            boughtAt: '2026-02-02 19:13:24',
            soldAt: '2026-02-02 19:26:12',
            buyIp: '152.58.7.23'
        },
        {
            id: '4237181',
            scrip: 'GOLDM26MARFUT',
            buyRate: '143385',
            sellRate: '143548',
            lots: '1 / 10',
            buyTurnover: '1433850',
            sellTurnover: '1435480',
            pl: '1630',
            brokerage: '286.93',
            boughtAt: '2026-02-02 19:07:37',
            soldAt: '2026-02-02 19:04:14',
            buyIp: '152.58.7.23'
        },
        {
            id: '4237082',
            scrip: 'GOLDM26MARFUT',
            buyRate: '144899',
            sellRate: '145567',
            lots: '1 / 10',
            buyTurnover: '1448990',
            sellTurnover: '1455670',
            pl: '6680',
            brokerage: '290.47',
            boughtAt: '2026-02-02 18:54:50',
            soldAt: '2026-02-02 16:53:30',
            buyIp: '152.58.7.23'
        }
    ];

    return (
        <div className="flex flex-col h-full bg-[#0b111e] p-6 space-y-4 overflow-y-auto custom-scrollbar">
             {/* Header */}
             <h2 className="text-2xl font-normal text-slate-300 tracking-tight">Closed Trades</h2>
             <div className="text-xs text-slate-400 pb-2">
                Showing <span className="font-bold text-slate-200">20</span> of <span className="font-bold text-slate-200">23</span> items.
            </div>

             {/* Table */}
             <div className="bg-[#151c2c] rounded border border-[#2d3748] overflow-hidden shadow-xl overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[1200px]">
                    <thead>
                        <tr className="text-slate-200 text-[12px] font-semibold border-b border-[#2d3748] bg-[#151c2c]">
                            <th className="px-4 py-4 cursor-pointer flex items-center gap-1 group whitespace-nowrap">
                                ID <ArrowUpDown className="w-3 h-3 text-slate-500 group-hover:text-white" />
                            </th>
                            <th className="px-4 py-4 whitespace-nowrap">Scrip</th>
                            <th className="px-4 py-4 whitespace-nowrap">Buy Rate</th>
                            <th className="px-4 py-4 whitespace-nowrap">Sell Rate</th>
                            <th className="px-4 py-4 whitespace-nowrap">Lots / Units</th>
                            <th className="px-4 py-4 whitespace-nowrap">Buy Turnover</th>
                            <th className="px-4 py-4 whitespace-nowrap">Sell Turnover</th>
                            <th className="px-4 py-4 whitespace-nowrap">Profit / Loss</th>
                            <th className="px-4 py-4 whitespace-nowrap">Brokerage</th>
                            <th className="px-4 py-4 whitespace-nowrap">Bought at</th>
                            <th className="px-4 py-4 whitespace-nowrap">Sold at</th>
                            <th className="px-4 py-4 whitespace-nowrap">Buy Ip</th>
                        </tr>
                    </thead>
                    <tbody className="text-[12px] text-slate-300 font-medium">
                        {trades.map((trade) => (
                            <tr key={trade.id} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors">
                                <td className="px-4 py-4 font-bold text-white">{trade.id}</td>
                                <td className="px-4 py-4 uppercase font-bold text-slate-300">
                                    <div className="bg-blue-600/20 text-blue-400 px-2 py-0.5 rounded w-fit text-[10px] mb-1">MCX</div>
                                    {trade.scrip}
                                </td>
                                <td className="px-4 py-4">{trade.buyRate}</td>
                                <td className="px-4 py-4">{trade.sellRate}</td>
                                <td className="px-4 py-4">{trade.lots}</td>
                                <td className="px-4 py-4">{trade.buyTurnover}</td>
                                <td className="px-4 py-4">{trade.sellTurnover}</td>
                                <td className={`px-4 py-4 font-bold ${parseFloat(trade.pl) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                    {trade.pl}
                                </td>
                                <td className="px-4 py-4 text-slate-400">{trade.brokerage}</td>
                                <td className="px-4 py-4 text-slate-400 text-[11px] whitespace-pre-wrap w-24">
                                    {trade.boughtAt.replace(' ', '\n')}
                                </td>
                                <td className="px-4 py-4 text-slate-400 text-[11px] whitespace-pre-wrap w-24">
                                    {trade.soldAt.replace(' ', '\n')}
                                </td>
                                <td className="px-4 py-4 text-slate-400 w-24 break-words">
                                    {trade.buyIp}
                                </td>
                            </tr>
                        ))}
                         {/* Pagination / Footer placeholder */}
                         <tr className="bg-[#1c2638]">
                            <td colSpan="12" className="px-4 py-3">
                                <div className="flex gap-2 text-xs text-slate-400">
                                    <span className="font-bold text-white">1</span>
                                    {/* Add more pages if needed */}
                                </div>
                            </td>
                         </tr>
                    </tbody>
                </table>
            </div>
             {/* Horizontal Scroll Hint if needed */}
             <div className="text-[10px] text-slate-600 italic text-center md:hidden">Scroll horizontally to view more columns</div>
        </div>
    );
};

export default ClosedTradesPage;
