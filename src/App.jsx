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
import TradesPage from './pages/trades/TradesPage';
import TickersPage from './pages/tickers/TickersPage';
import LiveM2MPage from './pages/dashboard/LiveM2MPage';
import BrokerM2MPage from './pages/dashboard/BrokerM2MPage';
import ActivePositionsPage from './pages/positions/ActivePositionsPage';
import TraderFundsPage from './pages/funds/TraderFundsPage';
import ActiveTradesPage from './pages/trades/ActiveTradesPage';
import ClosedTradesPage from './pages/trades/ClosedTradesPage';
import MarketWatchPage from './pages/market/MarketWatchPage';
import ActionLedgerPage from './pages/logs/ActionLedgerPage';
import NotificationsPage from './pages/notifications/NotificationsPage';
import ClosedPositionsPage from './pages/positions/ClosedPositionsPage';
import TradingClientsPage from './pages/clients/TradingClientsPage';
import ClientDetailsPage from './pages/clients/ClientDetailsPage';
import NewClientBankDetailsPage from './pages/bank/NewClientBankDetailsPage';
import ChangePasswordPage from './pages/settings/ChangePasswordPage';
import ChangeTransactionPasswordPage from './pages/settings/ChangeTransactionPasswordPage';
import GroupTradesPage from './pages/trades/GroupTradesPage';
import DeletedTradesPage from './pages/trades/DeletedTradesPage';
import DepositRequestsPage from './pages/requests/DepositRequestsPage';
import NegativeBalanceTxnsPage from './pages/transactions/NegativeBalanceTxnsPage';
import PendingOrdersPage from './pages/orders/PendingOrdersPage';
import ScripDataPage from './pages/data/ScripDataPage';

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('traders_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [view, setView] = useState(() => {
    return localStorage.getItem('traders_view') || 'live-m2m';
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
      case 'trades':
        return <TradesPage />;
      case 'tickers':
        return <TickersPage />;
      case 'live-m2m':
        return <LiveM2MPage />;
      case 'broker-m2m':
        return <BrokerM2MPage />;
      case 'active-positions':
        return <ActivePositionsPage />;
      case 'funds':
        return <TraderFundsPage />;
      case 'active-trades':
        return <ActiveTradesPage />;
      case 'closed-trades':
        return <ClosedTradesPage />;
      case 'market-watch':
        return <MarketWatchPage />;
      case 'action-ledger':
        return <ActionLedgerPage />;
      case 'notifications':
        return <NotificationsPage />;
      case 'closed-positions':
        return <ClosedPositionsPage />;
      case 'users':
        return <TradingClientsPage onClientClick={() => setView('client-details')} />;
      case 'client-details':
        return <ClientDetailsPage onBack={() => setView('users')} />;
      case 'trading-clients':
        return <TradingClientsPage onClientClick={() => setView('client-details')} />;
      case 'new-client-bank':
        return <NewClientBankDetailsPage />;
      case 'change-password':
        return <ChangePasswordPage />;
      case 'change-transaction-password':
        return <ChangeTransactionPasswordPage />;
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
      case 'group-trades':
        return <GroupTradesPage />;
      default:
        return <LiveM2MPage />;
    }
  };

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <Layout onLogout={handleLogout} onNavigate={setView} currentView={view}>
      <div className="flex flex-col h-full overflow-y-auto custom-scrollbar px-6 py-4">
        {renderContent()}
      </div>
    </Layout>
  );
}

export default App;
