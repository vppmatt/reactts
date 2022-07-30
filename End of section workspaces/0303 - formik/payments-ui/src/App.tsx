import React from 'react';
import './App.css';
import PageHeader from "./components/pageHeader/PageHeader";
import Search from "./components/search/Search";
import Transactions from "./components/transactions/Transactions";
import AddTransaction from "./components/addTransaction/AddTransaction";

function App() {
  return (
      <div>
        <PageHeader/>
        <Search/>
        <Transactions/>
          <AddTransaction />
      </div>
  );
}

export default App;
