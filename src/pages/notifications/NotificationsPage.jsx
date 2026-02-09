import React from 'react';

const NotificationsPage = () => {
    const notifications = [
        {
            id: 1,
            title: 'Hi',
            message: 'Hello',
            deliveredAt: '2025-09-07 23:54:58'
        },
        {
            id: 2,
            title: 'MARKET CLOSE',
            message: 'Dear Trader, Tomorrow NSE and MCX Maket remian close due to election in Maharastra, however MCX evening Session will be started at 5.00 pm to 11.55pm.',
            deliveredAt: '2024-11-19 14:51:44'
        },
        {
            id: 3,
            title: 'Software update',
            message: "Don't take any fresh position.... software is in update 2-3 days lagenge",
            deliveredAt: '2024-10-23 10:58:06'
        },
        {
            id: 4,
            title: 'Software update',
            message: "Don't take any fresh position for 2-3 days software is in update....kindly co operate",
            deliveredAt: '2024-10-23 10:56:53'
        },
        {
            id: 5,
            title: 'Dear traders,',
            message: 'Tomorrow NSE market will remain Closed on account of Moharram, MCX Market will Start at 5 pm Evening and will run till 11:30 pm',
            deliveredAt: '2024-07-16 15:17:59'
        },
        {
            id: 6,
            title: 'ELECTION RESULT',
            message: 'DUE TO HEAVY VOLATILITY EXPECTED IN DURING ELECTION RESULT, APPLICABLE INTRADAY MARGIN 50X AND HOLDING MARGIN 20X FOR FUTURE AND INTRADAY AND HOLDING 1X FOR OPTIONS, ALSO PENDING OR ADVANCE ORDER REMAINS DISABLED FROM 3RD JUNE MARKET OPEN TO 5TH JUNE MARKET CLOSE. FOR MORE INFORMATION CONTACT YOUR BROKER.',
            deliveredAt: '2024-06-03 08:59:12'
        }
    ];

    return (
        <div className="flex flex-col h-full bg-[#0b111e] p-6 space-y-6 overflow-y-auto custom-scrollbar">
            {/* Header Action */}
            <div>
                <button className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-2 px-6 rounded shadow-lg uppercase text-sm tracking-wide transition-all">
                    SEND NOTIFICATION
                </button>
            </div>

            {/* Table */}
            <div className="bg-[#151c2c] rounded border border-[#2d3748] overflow-hidden shadow-xl">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-white text-sm font-semibold border-b border-[#2d3748] bg-[#151c2c]">
                            <th className="px-6 py-4 w-1/5">Title</th>
                            <th className="px-6 py-4 w-3/5">Message</th>
                            <th className="px-6 py-4 w-1/5 text-right">Delivered at</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-slate-300">
                        {notifications.map((notif) => (
                            <tr key={notif.id} className="border-b border-[#2d3748] hover:bg-slate-800/20 transition-colors last:border-0">
                                <td className="px-6 py-4 align-top text-slate-200 font-medium">
                                    {notif.title}
                                </td>
                                <td className="px-6 py-4 align-top leading-relaxed text-slate-400">
                                    {notif.message}
                                </td>
                                <td className="px-6 py-4 align-top text-right text-slate-400 font-mono text-xs">
                                    {notif.deliveredAt.split(' ').map((part, i) => (
                                        <div key={i}>{part}</div>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NotificationsPage;
