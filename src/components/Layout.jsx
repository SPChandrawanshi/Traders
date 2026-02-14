import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import TopBar from './TopBar';
import Sidebar from './Sidebar';

const Layout = ({ children, onLogout, onNavigate, currentView }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#0b111e]">
      {/* Mobile Header */}
      <div className="flex items-center justify-between md:hidden bg-[#151c2c] p-4 text-white border-b border-[#2d3748]">
        <h1 className="font-bold">TRADERS</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop TopBar */}
      <div className="hidden md:block">
        <TopBar />
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar
          onLogout={onLogout}
          onNavigate={(view) => {
            onNavigate(view);
            setIsSidebarOpen(false);
          }}
          currentView={currentView}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Backdrop for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <main className="flex-1 overflow-x-hidden overflow-y-auto flex flex-col p-4 bg-[#0b111e]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
