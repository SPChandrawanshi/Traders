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
import BrokerAccountsPage from './pages/accounts/BrokerAccountsPage';
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
import ClientDetailPage from './pages/clients/ClientDetailPage';
import NewClientBankDetailsPage from './pages/bank/NewClientBankDetailsPage';
import ChangePasswordPage from './pages/settings/ChangePasswordPage';
import ChangeTransactionPasswordPage from './pages/settings/ChangeTransactionPasswordPage';
import GroupTradesPage from './pages/trades/GroupTradesPage';
import DeletedTradesPage from './pages/trades/DeletedTradesPage';
import DepositRequestsPage from './pages/requests/DepositRequestsPage';
import NegativeBalanceTxnsPage from './pages/transactions/NegativeBalanceTxnsPage';
import PendingOrdersPage from './pages/orders/PendingOrdersPage';
import ScripDataPage from './pages/data/ScripDataPage';
import UsersPage from './pages/users/UsersPage';
import CreateFundForm from './components/CreateFundForm';
import AddBrokerForm from './components/AddBrokerForm';
import CreateTradeForm from './components/CreateTradeForm';

function App() {
  const [user, setUser] = useState(() => {
    // Check for valid session
    const savedUser = localStorage.getItem('traders_user');
    const sessionValid = localStorage.getItem('traders_session_valid');

    // Only restore user if session is explicitly valid
    if (savedUser && sessionValid === 'true') {
      return JSON.parse(savedUser);
    }
    return null;
  });
  const [view, setView] = useState(() => {
    return localStorage.getItem('traders_view') || 'live-m2m';
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('traders_user', JSON.stringify(user));
      localStorage.setItem('traders_session_valid', 'true');
    } else {
      localStorage.removeItem('traders_user');
      localStorage.removeItem('traders_session_valid');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('traders_view', view);
  }, [view]);

  // Dummy Data for Clients (Lifted from TradingClientsPage)
  const [clients, setClients] = useState([
    { id: '3705377', fullName: 'Demo ji', username: 'Demo0174', ledgerBalance: '500000000', grossPL: '0.0000', brokerage: '0.0000', swapCharges: '0.0000', netPL: '0', admin: 'demo001', demoAccount: 'Yes', status: 'Active' },
  ]);

  const handleLogin = (username) => {
    setUser({ name: username });
    localStorage.setItem('traders_session_valid', 'true');
  };

  const handleLogout = () => {
    setUser(null);
    setView('overview');
    localStorage.removeItem('traders_user');
    localStorage.removeItem('traders_view');
    localStorage.removeItem('traders_session_valid');
  };

  const handleAddClient = (newClientData) => {
    // Basic ID generation and default values for simplicity
    const newClient = {
      id: Math.floor(Math.random() * 10000000).toString(),
      fullName: newClientData.name || 'New User',
      username: newClientData.username || 'user' + Math.floor(Math.random() * 1000),
      ledgerBalance: newClientData.creditLimit || '0',
      grossPL: '0.0000',
      brokerage: '0.0000',
      swapCharges: '0.0000',
      netPL: '0',
      admin: 'demo001', // Default
      demoAccount: newClientData.demoAccount ? 'Yes' : 'No',
      status: newClientData.accountStatus ? 'Active' : 'Suspended',
      ...newClientData
    };
    setClients([...clients, newClient]);
    setView('users');
  };

  // Dummy Data for Trades (Lifted from TradesPage)
  const [trades, setTrades] = useState([
    { id: '4238782', scrip: 'GOLD26APRFUT', segment: 'MCX', userId: '4424 SHRE043 : Lv', buyRate: '144696.00000000', sellRate: '145201.00000000', lots: '0.2 lots', pl: '10100', timeDiff: '-1577 secs', boughtAt: '2026-02-02 10:29:42' },
  ]);

  const handleAddTrade = (newTradeData) => {
    const newTrade = {
      id: Math.floor(Math.random() * 10000000).toString(),
      scrip: newTradeData.scrip,
      segment: 'MCX', // Default
      userId: newTradeData.userId,
      buyRate: newTradeData.buyRate || '0',
      sellRate: newTradeData.sellRate || '0',
      lots: (newTradeData.lots || '0') + ' lots',
      pl: '0',
      timeDiff: '0 secs',
      boughtAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      ...newTradeData
    };
    setTrades([...trades, newTrade]);
    setView('trades');
  };

  const [selectedClient, setSelectedClient] = useState(null);

  const handleDeposit = (client) => {
    setSelectedClient(client);
    setView('create-fund-deposit');
  };

  const handleWithdraw = (client) => {
    setSelectedClient(client);
    setView('create-fund-withdraw');
  };

  const renderContent = () => {
    switch (view) {
      case 'edit':
        return <ClientDetailsForm onBack={() => setView('users')} />;
      case 'accounts':
        return <AccountsPage />;
      case 'banned':
        return <BannedLimitOrdersPage />;
      case 'bank':
        return <BankDetailsPage />;
      case 'trades':
        return <TradesPage trades={trades} onCreateClick={() => setView('create-trade')} />;
      case 'tickers':
        return <TickersPage />;
      case 'live-m2m':
        return <LiveM2MPage />;
      case 'broker-m2m':
        return <BrokerM2MPage />;
      case 'active-positions':
        return <ActivePositionsPage onNavigate={setView} />;
      case 'funds':
        return <TraderFundsPage onNavigate={setView} />;
      case 'create-fund':
        return <CreateFundForm onBack={() => setView('funds')} onSave={(data) => { console.log('Fund Saved:', data); setView('funds'); }} />;
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
        return <TradingClientsPage clients={clients} onClientClick={() => setView('client-details')} onAddBrokerClick={() => setView('create-broker')} onDepositClick={handleDeposit} onWithdrawClick={handleWithdraw} onViewClick={() => setView('client-details')} />;
      case 'create-client':
        return <ClientDetailsForm onBack={() => setView('users')} onSave={handleAddClient} mode="create" />;
      case 'create-broker':
        return <AddBrokerForm onBack={() => setView('users')} onSave={(data) => { console.log('Broker Saved:', data); setView('users'); }} />;
      case 'broker-accounts':
        return <BrokerAccountsPage />;
      case 'add-broker-form':
        return <AddBrokerForm onBack={() => setView('users')} onSave={(data) => { console.log('Broker Saved:', data); setView('users'); }} />;
      case 'create-fund-deposit':
        return <CreateFundForm onBack={() => setView('users')} onSave={(data) => { console.log('Deposit Saved:', data); setView('users'); }} mode="deposit" initialUser={selectedClient} />;
      case 'create-fund-withdraw':
        return <CreateFundForm onBack={() => setView('users')} onSave={(data) => { console.log('Withdraw Saved:', data); setView('users'); }} mode="withdraw" initialUser={selectedClient} />;
      case 'client-details':
        return <ClientDetailPage onClose={() => setView('users')} />;
      case 'trading-clients':
        return <UsersPage onNavigate={setView} />;
      case 'new-client-bank':
        return <NewClientBankDetailsPage />;
      case 'create-trade':
        return <CreateTradeForm onSave={handleAddTrade} onBack={() => setView('trades')} />;
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
      <div>
        {renderContent()}
      </div>
    </Layout>
  );
}

export default App;
