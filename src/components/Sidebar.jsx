import React from 'react';
import { 
  LayoutDashboard, TrendingUp, Bell, Crosshair, Sun, Hexagon, Users, Tag, 
  LayoutList, Banknote, FileText, Calculator, Ban, Grid, Grid2X2, BookOpen, 
  Briefcase, UserCog, ShieldCheck, ArrowDownRight, ArrowUpLeft, AlertCircle, LogOut 
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, onClick }) => (
  <div 
    onClick={onClick}
    className="flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-slate-300/10 transition-colors group"
  >
    <Icon className="w-5 h-5 text-slate-400 group-hover:text-blue-400" />
    <span className="text-slate-200 text-sm font-medium">{label}</span>
  </div>
);

const Sidebar = ({ onLogout, onNavigate }) => {
  const items = [
    { icon: LayoutDashboard, label: 'DashBoard', onClick: () => onNavigate('overview') },
    { icon: TrendingUp, label: 'Market Watch' },
    { icon: Bell, label: 'Notifications' },
    { icon: Crosshair, label: 'Action Ledger' },
    { icon: Sun, label: 'Active Positions' },
    { icon: Hexagon, label: 'Closed Positions' },
    { icon: Users, label: 'Trading Clients' },
    { icon: Tag, label: 'Trades' },
    { icon: Tag, label: 'Group Trades' },
    { icon: Tag, label: 'Closed Trades' },
    { icon: Tag, label: 'Deleted Trades' },
    { icon: LayoutList, label: 'Pending Orders' },
    { icon: Banknote, label: 'Trader Funds' },
    { icon: Users, label: 'Users' },
    { icon: FileText, label: 'Scrip Data' },
    { icon: Calculator, label: 'Tickers' },
    { icon: Ban, label: 'Banned Limit Orders', onClick: () => onNavigate('banned') },
    { icon: Grid, label: 'Bank Details', onClick: () => onNavigate('bank') },
    { icon: Grid2X2, label: 'Bank Details For New Clients' },
    { icon: BookOpen, label: 'Accounts', onClick: () => onNavigate('accounts') },
    { icon: Briefcase, label: 'Broker Accounts' },
    { icon: UserCog, label: 'Change Login Password' },
    { icon: ShieldCheck, label: 'Change Transaction Password' },
    { icon: ArrowDownRight, label: 'Withdrawal Requests' },
    { icon: ArrowUpLeft, label: 'Deposit Requests' },
    { icon: AlertCircle, label: 'Negative Balance Txns' },
    { icon: LogOut, label: 'Log Out', onClick: onLogout },
  ];


  return (
    <div className="w-64 bg-[#151c2c] h-screen flex flex-col border-r border-[#2d3748] overflow-y-auto custom-scrollbar">
      <div className="flex-1 py-4">
        {items.map((item, index) => (
          <SidebarItem 
            key={index} 
            icon={item.icon} 
            label={item.label} 
            onClick={item.onClick}
          />
        ))}
      </div>
    </div>
  );
};



export default Sidebar;
