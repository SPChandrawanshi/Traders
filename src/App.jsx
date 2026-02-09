import React, { useState, useEffect } from 'react';
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
import NewClientBankDetailsPage from './pages/bank/NewClientBankDetailsPage';

import ChangePasswordPage from './pages/settings/ChangePasswordPage';
import ChangeTransactionPasswordPage from './pages/settings/ChangeTransactionPasswordPage';
import ClosedTradesPage from './pages/trades/ClosedTradesPage';
import GroupTradesPage from './pages/trades/GroupTradesPage';
import DeletedTradesPage from './pages/trades/DeletedTradesPage';
import DepositRequestsPage from './pages/requests/DepositRequestsPage';
import NegativeBalanceTxnsPage from './pages/transactions/NegativeBalanceTxnsPage';
import PendingOrdersPage from './pages/orders/PendingOrdersPage';
import ScripDataPage from './pages/data/ScripDataPage';
import TickersPage from './pages/tickers/TickersPage';

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('traders_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [view, setView] = useState(() => {
    return localStorage.getItem('traders_view') || 'overview';
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('traders_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('traders_user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('traders_view', view);
  }, [view]);

  const handleLogin = (username) => {
    setUser({ name: username });
  };

  const handleLogout = () => {
    setUser(null);
    setView('overview');
    localStorage.removeItem('traders_user');
    localStorage.removeItem('traders_view');
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
      case 'new-client-bank':
        return <NewClientBankDetailsPage />;
      case 'change-password':
        return <ChangePasswordPage />;
      case 'change-transaction-password':
        return <ChangeTransactionPasswordPage />;
      case 'closed-trades':
        return <ClosedTradesPage />;
      case 'deleted-trades':
        return <DeletedTradesPage />;
      case 'deposit-requests':
        return <DepositRequestsPage />;
      case 'negative-balance':
        return <NegativeBalanceTxnsPage />;
      case 'pending-orders':
        return <PendingOrdersPage />;
      case 'scrip-data':
        return <ScripDataPage />;
      case 'tickers':
        return <TickersPage />;
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



