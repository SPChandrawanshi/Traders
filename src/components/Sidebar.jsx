import React from 'react';
import {
  LayoutDashboard,
  TrendingUp,
  Bell,
  Radio,
  Sun,
  UserCircle,
  Tag,
  Package,
  CircleDollarSign,
  Users,
  Calculator,
  User,
  Settings,
  LogOut,
  Layout
} from 'lucide-react';

const Sidebar = ({ onLogout, onNavigate, currentView, isOpen, onClose }) => {
  const menuItems = [
    { id: 'live-m2m', label: 'DashBoard', icon: <Layout className="w-5 h-5" /> },
    { id: 'market-watch', label: 'Market Watch', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-5 h-5" /> },
    { id: 'action-ledger', label: 'Action Ledger', icon: <Radio className="w-5 h-5" /> },
    { id: 'active-positions', label: 'Active Positions', icon: <Sun className="w-5 h-5" /> },
    { id: 'closed-positions', label: 'Closed Positions', icon: <Sun className="w-5 h-5" /> },
    { id: 'users', label: 'Trading Clients', icon: <UserCircle className="w-5 h-5" /> },
    { id: 'trades', label: 'Trades', icon: <Tag className="w-5 h-5" /> },
    { id: 'group-trades', label: 'Group Trades', icon: <Tag className="w-5 h-5" /> },
    { id: 'closed-trades', label: 'Closed Trades', icon: <Tag className="w-5 h-5" /> },
    { id: 'deleted-trades', label: 'Deleted Trades', icon: <Tag className="w-5 h-5" /> },
    { id: 'pending-orders', label: 'Pending Orders', icon: <Layout className="w-5 h-5" /> }, // Close to screenshot icon
    { id: 'funds', label: 'Trader Funds', icon: <CircleDollarSign className="w-5 h-5" /> },
    { id: 'trading-clients', label: 'Users', icon: <Users className="w-5 h-5" /> },
    { id: 'tickers', label: 'Tickers', icon: <Calculator className="w-5 h-5" /> },
    { id: 'banned', label: 'Banned Limit Orders', icon: <Calculator className="w-5 h-5" /> },
    { id: 'bank', label: 'Bank Details', icon: <Calculator className="w-5 h-5" /> },
    { id: 'new-client-bank', label: 'Bank Details For New Client', icon: <Calculator className="w-5 h-5" /> },
    { id: 'accounts', label: 'Accounts', icon: <Calculator className="w-5 h-5" /> },
    { id: 'create-broker', label: 'Broker Accounts', icon: <Calculator className="w-5 h-5" /> },
    { id: 'change-password', label: 'Change Login Password', icon: <User className="w-5 h-5" /> },
    { id: 'change-transaction-password', label: 'Change Transaction Password', icon: <Settings className="w-5 h-5" /> },
    { id: 'withdrawal-requests', label: 'Withdrawal Requests', icon: <Settings className="w-5 h-5" /> },
    { id: 'deposit-requests', label: 'Deposit Requests', icon: <Settings className="w-5 h-5" /> },
    { id: 'negative-balance', label: 'Negative Balance Txns', icon: <Bell className="w-5 h-5" /> },
  ];

  return (
    <aside className={`
      h-full bg-[#1a2035] text-white transition-all duration-300 ease-in-out flex-shrink-0 z-50
      fixed inset-y-0 left-0 w-64
      md:relative md:translate-x-0
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    `}>
      <div className="flex flex-col h-full border-r border-white/10 overflow-hidden">
        {/* Sidebar Header - Hidden if not needed, but keeping for structure */}
        <div className="p-4 bg-[#1a2035] border-b border-white/5">
          <h2 className="text-lg font-bold text-[#4CAF50]">TRADERS</h2>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto custom-scrollbar py-2">
          <div className="space-y-0.5">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  if (window.innerWidth < 768) onClose();
                }}
                className={`
                  w-full flex items-center px-6 py-4 text-[15px] font-medium transition-all duration-150
                  ${currentView === item.id
                    ? 'bg-slate-700/50 text-white border-r-4 border-[#4CAF50]'
                    : 'text-slate-300 hover:bg-slate-700/30 hover:text-white'}
                `}
              >
                <span className="mr-5 text-slate-400 group-hover:text-white transition-colors">
                  {item.icon}
                </span>
                <span className="truncate">{item.label}</span>
              </button>
            ))}

            {/* Logout Button */}
            <button
              onClick={onLogout}
              className="w-full flex items-center px-6 py-4 text-[15px] font-medium text-slate-300 hover:bg-slate-700/30 hover:text-white transition-all duration-150 mt-4 border-t border-white/5"
            >
              <span className="mr-5 text-slate-400">
                <LogOut className="w-5 h-5" />
              </span>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
