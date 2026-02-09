import React, { useState } from 'react';
import Layout from './components/Layout';
import AnalysisTable from './components/AnalysisTable';
import FundWithdrawalTable from './components/FundWithdrawalTable';
import ActiveTradesTable from './components/ActiveTradesTable';
import FilterBar from './components/FilterBar';
import PendingOrdersTable from './components/PendingOrdersTable';
import ClientDetailsForm from './components/ClientDetailsForm';
import LoginPage from './pages/LoginPage';
import AccountsPage from './pages/accounts/AccountsPage';
import BannedLimitOrdersPage from './pages/banned/BannedLimitOrdersPage';
import BankDetailsPage from './pages/bank/BankDetailsPage';

function App() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState('overview');

  const handleLogin = (username) => {
    setUser({ name: username });
  };

  const handleLogout = () => {
    setUser(null);
    setView('overview');
  };

  const renderContent = () => {
    switch (view) {
      case 'edit':
        return <ClientDetailsForm onBack={() => setView('overview')} />;
      case 'accounts':
        return <AccountsPage />;
      case 'banned':
        return <BannedLimitOrdersPage />;
      case 'bank':
        return <BankDetailsPage />;
      default:
        return (
          <>
            <div className="mb-6 flex justify-between items-center">
              <h1 className="text-xl font-semibold text-white tracking-tight italic">Overview & Analysis</h1>
              <button 
                onClick={() => setView('edit')}
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 py-1 px-3 rounded border border-slate-700 transition-all font-medium"
              >
                Edit Client Profile
              </button>
            </div>
            
            <FilterBar />
            
            <div className="space-y-6">
              <AnalysisTable />
              <FundWithdrawalTable />
              <ActiveTradesTable />
              <PendingOrdersTable title="MCX Pending Orders" />
              <PendingOrdersTable title="Equity Pending Orders" />
            </div>
          </>
        );
    }
  };

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <Layout onLogout={handleLogout} onNavigate={setView}>
      <div className="flex flex-col h-full overflow-y-auto custom-scrollbar px-6 py-4">
        {renderContent()}
      </div>
    </Layout>
  );
}


export default App;



