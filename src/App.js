import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import First from './components/First';
import MoneyTransfer from './components/MoneyTransfer';
import CheckBalance from './components/CheckBalance';
import ViewTransactions from './components/ViewTransactions';
import ProfileManagement from './components/ProfileManagement';
import AddBankAccount from './components/AddBankAccount';
import CreditCard from './components/CreditCard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<ProfileManagement />} />
          <Route path="/transactions" element={<ViewTransactions />} />
          <Route path="/checkbalance" element={<CheckBalance />} />
          <Route path="/first" element={<First />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/MoneyTransfer" element={<MoneyTransfer />} />
          <Route path="/Addbankaccount" element={<AddBankAccount />} />
          <Route path="/CreditCard" element={<CreditCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
