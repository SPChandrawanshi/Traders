import React from 'react';
import {
  LayoutDashboard,
  TrendingUp,
  Bell,
  Radio,
  Sun,
  UserCircle,
  Tag,
  CircleDollarSign,
  Users,
  Calculator,
  User,
  Settings,
  LogOut,
  Layout as LayoutIcon,
  Layers,
  FileText,
  BadgeAlert,
  ClipboardList,
  History,
  Trash2,
  Clock,
  Wallet,
  Building2,
  Lock,
  ArrowDownLeft,
  ArrowUpRight,
  ShieldAlert
} from 'lucide-react';

const Sidebar = ({ onLogout, onNavigate, currentView, isOpen, onClose }) => {
  const menuItems = [
    { id: 'live-m2m', label: 'DashBoard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'market-watch', label: 'Market Watch', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-5 h-5" /> },
    { id: 'action-ledger', label: 'Action Ledger', icon: <Radio className="w-5 h-5" /> },
    { id: 'active-positions', label: 'Active Positions', icon: <Layers className="w-5 h-5" /> },
    { id: 'closed-positions', label: 'Closed Positions', icon: <History className="w-5 h-5" /> },
    { id: 'users', label: 'Trading Clients', icon: <UserCircle className="w-5 h-5" /> },
    { id: 'trades', label: 'Trades', icon: <Tag className="w-5 h-5" /> },
    { id: 'group-trades', label: 'Group Trades', icon: <Tag className="w-5 h-5" /> },
    { id: 'closed-trades', label: 'Closed Trades', icon: <Tag className="w-5 h-5" /> },
    { id: 'deleted-trades', label: 'Deleted Trades', icon: <Trash2 className="w-5 h-5" /> },
    { id: 'pending-orders', label: 'Pending Orders', icon: <Clock className="w-5 h-5" /> },
    { id: 'funds', label: 'Trader Funds', icon: <Wallet className="w-5 h-5" /> },
    { id: 'trading-clients', label: 'Users', icon: <Users className="w-5 h-5" /> },
    { id: 'tickers', label: 'Tickers', icon: <Calculator className="w-5 h-5" /> },
    { id: 'banned', label: 'Banned Limit Orders', icon: <ShieldAlert className="w-5 h-5" /> },
    { id: 'bank', label: 'Bank Details', icon: <Building2 className="w-5 h-5" /> },
    { id: 'new-client-bank', label: 'Bank Details for new clients', icon: <Building2 className="w-5 h-5" /> },
    { id: 'accounts', label: 'Accounts', icon: <FileText className="w-5 h-5" /> },
    { id: 'create-broker', label: 'Broker Accounts', icon: <FileText className="w-5 h-5" /> },
    { id: 'change-password', label: 'Change Login Password', icon: <Lock className="w-5 h-5" /> },
    { id: 'change-transaction-password', label: 'Change Transaction Password', icon: <Lock className="w-5 h-5" /> },
    { id: 'withdrawal-requests', label: 'Withdrawal Requests', icon: <ArrowUpRight className="w-5 h-5" /> },
    { id: 'deposit-requests', label: 'Deposit Requests', icon: <ArrowDownLeft className="w-5 h-5" /> },
    { id: 'negative-balance', label: 'Negative Balance Txns', icon: <BadgeAlert className="w-5 h-5" /> },
  ];

  return (
    <aside className={`
      h-full bg-[#1a2035] text-white transition-all duration-300 ease-in-out flex-shrink-0 z-50
      fixed inset-y-0 left-0 w-64
      md:relative md:translate-x-0
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      shadow-2xl
    `}>
      <div className="flex flex-col h-full border-r border-white/5 overflow-hidden">
        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pt-4 pb-4">
          <div className="px-3 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  if (window.innerWidth < 768) onClose();
                }}
                className={`
                  w-full flex items-center px-4 py-3 rounded-md transition-all duration-200 group
                  ${currentView === item.id
                    ? 'bg-[#4caf50] text-white shadow-lg'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'}
                `}
              >
                <div className={`
                  mr-4 transition-colors
                  ${currentView === item.id ? 'text-white' : 'text-slate-400 group-hover:text-white'}
                `}>
                  {item.icon}
                </div>
                <span className="text-[13px] font-medium truncate">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="px-6 py-6 border-t border-white/10 mt-6">
            <button
              onClick={onLogout}
              className="w-full flex items-center px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white rounded-md transition-all duration-200"
            >
              <LogOut className="w-5 h-5 mr-4 text-slate-400" />
              <span className="text-[13px] font-medium">Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
