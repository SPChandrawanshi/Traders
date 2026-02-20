import React, { useState, useEffect, useRef } from 'react';
import { Settings, User, ChevronDown, Lock, Key, LogOut } from 'lucide-react';

const TopBar = ({ currentViewLabel, onLogout, onNavigate }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

        {/* Profile Dropdown Container */}
        <div className="relative" ref={dropdownRef}>
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 px-3 py-2 hover:bg-black/10 rounded cursor-pointer transition-all group select-none"
          >
            <div className="bg-white/20 p-1.5 rounded-full">
              <User className="w-[18px] h-[18px]" />
            </div>
            <span className="text-[13px] font-bold uppercase tracking-tight text-white">DEMO PANNEL</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
          </div>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded shadow-2xl overflow-hidden z-50 animate-in fade-in zoom-in duration-200 origin-top-right border border-gray-100">
              {/* Ledger Balance Section */}
              <div className="px-6 py-5 border-b border-gray-100">
                <p className="text-[#333] text-[15px] font-medium">
                  Ledger-Balance: <span className="font-bold">0</span>
                </p>
              </div>

              {/* Action Items */}
              <div className="py-1">
                <button
                  onClick={() => {
                    if (onNavigate) onNavigate('change-password');
                    setShowDropdown(false);
                  }}
                  className="w-full flex items-center gap-4 px-6 py-3.5 text-[#333] hover:bg-gray-50 transition-colors text-[14px] font-medium"
                >
                  <Lock className="w-4 h-4 text-gray-400" />
                  Change Login Password
                </button>
                <button
                  onClick={() => {
                    if (onNavigate) onNavigate('change-transaction-password');
                    setShowDropdown(false);
                  }}
                  className="w-full flex items-center gap-4 px-6 py-3.5 text-[#333] hover:bg-gray-50 transition-colors text-[14px] font-medium"
                >
                  <Key className="w-4 h-4 text-gray-400" />
                  Change Transaction Password
                </button>
              </div>

              {/* Logout Button */}
              <div className="p-3">
                <button
                  onClick={() => {
                    if (onLogout) onLogout();
                    setShowDropdown(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#f44336] hover:bg-[#d32f2f] text-white py-3 rounded text-[14px] font-bold uppercase transition-all shadow-md active:scale-[0.98]"
                >
                  Log out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
