import React from 'react';
import TopBar from './TopBar';
import Sidebar from './Sidebar';

const Layout = ({ children, onLogout, onNavigate }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0b111e]">
      <Sidebar onLogout={onLogout} onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        <main className="flex-1 overflow-hidden flex flex-col p-4 bg-[#0b111e]">
          {children}
        </main>
      </div>
    </div>
  );
};



export default Layout;
