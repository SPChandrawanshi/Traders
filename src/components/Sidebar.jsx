import React from 'react';

const Sidebar = ({ onLogout, onNavigate, currentView, isOpen, onClose }) => {
  const menuItems = [
    { id: 'live-m2m', label: 'DashBoard', icon: 'fa-table-columns' },
    { id: 'market-watch', label: 'Market Watch', icon: 'fa-arrow-trend-up' },
    { id: 'notifications', label: 'Notifications', icon: 'fa-bell' },
    { id: 'action-ledger', label: 'Action Ledger', icon: 'fa-podcast' },
    { id: 'active-positions', label: 'Active Positions', icon: 'fa-certificate' },
    { id: 'closed-positions', label: 'Closed Positions', icon: 'fa-certificate' },
    { id: 'users', label: 'Trading Clients', icon: 'fa-regular fa-face-flushed' },
    { id: 'trades', label: 'Trades', icon: 'fa-tag' },
    { id: 'group-trades', label: 'Group Trades', icon: 'fa-tag' },
    { id: 'closed-trades', label: 'Closed Trades', icon: 'fa-tag' },
    { id: 'deleted-trades', label: 'Deleted Trades', icon: 'fa-tag' },
    { id: 'pending-orders', label: 'Pending Orders', icon: 'fa-swatchbook' },
    { id: 'funds', label: 'Trader Funds', icon: 'fa-circle-dollar-to-slot' },
    { id: 'trading-clients', label: 'Users', icon: 'fa-user-group' },
    { id: 'tickers', label: 'Tickers', icon: 'fa-calculator' },
    { id: 'banned', label: 'Banned Limit Orders', icon: 'fa-calculator' },
    { id: 'bank', label: 'Bank Details', icon: 'fa-calculator' },
    { id: 'new-client-bank', label: 'Bank Details for new clients', icon: 'fa-calculator' },
    { id: 'accounts', label: 'Accounts', icon: 'fa-calculator' },
    { id: 'broker-accounts', label: 'Broker Accounts', icon: 'fa-calculator' },
    { id: 'ip-logins', label: 'IP Logins', icon: 'fa-shield-halved' },
    { id: 'trade-ip-tracking', label: 'Trade IP Tracking', icon: 'fa-location-dot' },
    { id: 'global-updation', label: 'Global Updation', icon: 'fa-earth-americas' },
    { id: 'change-password', label: 'Change Login Password', icon: 'fa-user' },
    { id: 'change-transaction-password', label: 'Change Transaction Password', icon: 'fa-gear' },
    { id: 'withdrawal-requests', label: 'Withdrawal Requests', icon: 'fa-gear' },
    { id: 'deposit-requests', label: 'Deposit Requests', icon: 'fa-gear' },
    { id: 'negative-balance', label: 'Negative Balance Txns', icon: 'fa-bell' },
  ];

  return (
    <aside className={`
      h-full bg-[#1a2035] text-white transition-all duration-300 ease-in-out flex-shrink-0 z-50
      fixed inset-y-0 left-0 w-[260px]
      md:relative md:translate-x-0
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      shadow-2xl
    `}>
      <div className="flex flex-col h-full border-r border-white/5 overflow-hidden">



        {/* Navigation Items */}
        <div className="flex-1 py-4 overflow-y-auto custom-scrollbar scroll-smooth">
          <div className="px-4 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  if (window.innerWidth < 768) onClose();
                }}
                className={`
                  w-full flex items-center px-4 py-2.5 rounded-md transition-all duration-200 group mb-0.5
                  ${currentView === item.id
                    ? 'text-white shadow-lg'
                    : 'text-[#bcc0cf] hover:bg-white/10 hover:text-white'}
                `}
                style={currentView === item.id ? {
                  background: 'linear-gradient(60deg, #288c6c, #4ea752)',
                  boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4)',
                  fontWeight: '500'
                } : {}}
              >
                <div className={`
                  w-8 flex justify-center mr-2 transition-colors
                  ${currentView === item.id ? 'text-white' : 'text-slate-400 group-hover:text-white'}
                `}>
                  <i className={`fa-solid ${item.icon} text-[16px]`}></i>
                </div>
                <span className="text-[13px] font-normal truncate uppercase tracking-wider">{item.label}</span>
              </button>
            ))}

            <div className="px-2 py-4 border-t border-white/10 mt-6">
              <button
                onClick={onLogout}
                className="w-full flex items-center px-4 py-3 text-[#bcc0cf] hover:bg-white/10 hover:text-white rounded-md transition-all duration-200"
              >
                <div className="w-8 flex justify-center mr-2 text-slate-400 group-hover:text-white">
                  <i className="fa-solid fa-sign-out-alt text-[16px]"></i>
                </div>
                <span className="text-[13px] font-medium uppercase tracking-wider">Log Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>

  );
};

export default Sidebar;
