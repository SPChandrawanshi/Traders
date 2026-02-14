import React from 'react';
import { Settings, User, ChevronDown } from 'lucide-react';

const TopBar = ({ currentViewLabel }) => {
  return (
    <nav className="bg-[#4caf50] h-[70px] flex items-center justify-between px-6 text-white shadow-lg sticky top-0 z-40">
      {/* Left Section: View Name (Mobile mostly) */}
      <div className="flex items-center">
        <span className="text-lg font-bold uppercase tracking-wider md:hidden">
          {currentViewLabel || 'DashBoard'}
        </span>
      </div>

      {/* Right Section: Actions & Profile */}
      <div className="flex items-center gap-6">
        {/* Settings Icon */}
        <button className="p-2 hover:bg-white/10 rounded-full transition-all">
          <Settings className="w-5 h-5 cursor-pointer" />
        </button>

        {/* Profile Dropdown Simulation */}
        <div className="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded cursor-pointer transition-all group">
          <div className="bg-white/20 p-1.5 rounded-full">
            <User className="w-5 h-5" />
          </div>
          <div className="flex flex-col items-start leading-tight">
            <span className="text-[12px] font-bold uppercase tracking-widest text-white/90">DEMO PANNEL</span>
          </div>
          <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
