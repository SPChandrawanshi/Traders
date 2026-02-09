import React from 'react';
import TopBar from './TopBar';
import Sidebar from './Sidebar';

const Layout = ({ children, onLogout, onNavigate, currentView }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#0b111e]">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar onLogout={onLogout} onNavigate={onNavigate} currentView={currentView} />
        <main className="flex-1 overflow-hidden flex flex-col p-4 bg-[#0b111e]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
