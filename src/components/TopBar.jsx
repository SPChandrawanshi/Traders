import React from 'react';
import { Settings, User } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-[#4CAF50] h-12 flex items-center justify-end px-4 gap-4 text-white">
      <Settings className="w-5 h-5 cursor-pointer hover:opacity-80 transition-opacity" />
      <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
        <User className="w-5 h-5" />
        <span className="text-sm font-semibold uppercase tracking-wide">
          DEMO PANNEL
        </span>
      </div>
    </div>
  );
};

export default TopBar;
