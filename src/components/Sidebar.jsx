import React from 'react';
import { 
  LayoutDashboard, TrendingUp, Bell, Radio, Sun, Hexagon, Smile, Tag, 
  LayoutList, Banknote, FileText, Calculator, Ban, Grid, Grid2X2, BookOpen, 
  Briefcase, UserCog, ShieldCheck, ArrowDownRight, ArrowUpLeft, AlertCircle, LogOut, Users 
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, onClick, isActive }) => (
  <div 
    onClick={onClick}
    className={`flex items-center gap-3 px-6 py-3 cursor-pointer transition-colors group ${
      isActive 
        ? 'bg-[#2d3748] text-white border-r-4 border-green-500' // Added border to simulate "active" marker often seen, and matched bg color
        : 'hover:bg-slate-300/10 text-slate-400 hover:text-blue-400'
    }`}
  >
    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-400'}`} />
    <span className={`text-sm font-medium ${isActive ? 'text-white' : 'text-slate-200'}`}>{label}</span>
  </div>
);

const Sidebar = ({ onLogout, onNavigate, currentView }) => {
  const items = [
    { icon: LayoutDashboard, label: 'Dashboard', view: 'live-m2m' }, // Capitalization fix
    { icon: TrendingUp, label: 'Market Watch', view: 'market-watch' },
    { icon: Bell, label: 'Notifications', view: 'notifications' },
    { icon: Radio, label: 'Action Ledger', view: 'action-ledger' }, // Icon change
    { icon: Sun, label: 'Active Positions', view: 'active-positions' },
    { icon: Hexagon, label: 'Closed Positions', view: 'closed-positions' }, // Keeping Hexagon as distinct from active
    { icon: Smile, label: 'Trading Clients', view: 'trading-clients' }, // Icon change
    { icon: Tag, label: 'Trades', view: 'active-trades' },
    { icon: Tag, label: 'Group Trades', view: 'group-trades' },
    { icon: Tag, label: 'Closed Trades', view: 'closed-trades' },
    { icon: Tag, label: 'Deleted Trades', view: 'deleted-trades' },
    
    { icon: LayoutList, label: 'Pending Orders', view: 'pending-orders' },
    { icon: Banknote, label: 'Trader Funds', view: 'funds' },
    { icon: Users, label: 'Users', view: 'users' },
    { icon: FileText, label: 'Scrip Data', view: 'scrip-data' },
    { icon: Calculator, label: 'Tickers', view: 'tickers' },
    { icon: Ban, label: 'Banned Limit Orders', view: 'banned' },
    { icon: Grid, label: 'Bank Details', view: 'bank' },
    { icon: Grid2X2, label: 'Bank Details For New Clients', view: 'new-client-bank' },
    { icon: BookOpen, label: 'Accounts', view: 'accounts' },
    { icon: Briefcase, label: 'Broker Accounts', view: 'broker-m2m' },
    { icon: UserCog, label: 'Change Login Password', view: 'change-password' },
    { icon: ShieldCheck, label: 'Change Transaction Password', view: 'change-transaction-password' },
    { icon: ArrowDownRight, label: 'Withdrawal Requests', view: 'withdrawal-requests' },
    { icon: ArrowUpLeft, label: 'Deposit Requests', view: 'deposit-requests' },
    { icon: AlertCircle, label: 'Negative Balance Txns', view: 'negative-balance' },
  ];

  return (
    <div className="w-64 bg-[#151c2c] h-full flex flex-col border-r border-[#2d3748] overflow-y-auto custom-scrollbar">
      <div className="flex-1 py-4">
        {items.map((item, index) => (
          <SidebarItem 
            key={index} 
            icon={item.icon} 
            label={item.label} 
            isActive={currentView === item.view}
            onClick={() => onNavigate(item.view || '#')}
          />
        ))}
         <SidebarItem 
            icon={LogOut} 
            label="Log Out" 
            onClick={onLogout}
          />
      </div>
    </div>
  );
};

export default Sidebar;
