import React from 'react';
import './App.css';
import PageHeader from "./components/pageHeader/PageHeader";
import Search from "./components/search/Search";
import Transactions from "./components/transactions/Transactions";

function App() {
  return (
      <div>
        <PageHeader/>
        <Search/>
        <Transactions/>
      </div>
  );
}

export default App;
