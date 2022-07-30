import React from 'react';
import './App.css';
import PageHeader from "./components/pageHeader/PageHeader";
import AddTransaction from "./components/addTransaction/AddTransaction";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./components/staticPages/HomePage";
import PageNotFound from "./components/staticPages/PageNotFound";
import ViewTransactionsPage from "./components/viewTransactions/ViewTransactionsPage";

function App() {

  return (
      <BrowserRouter>
        <PageHeader/>
        <Routes>
            <Route path="/add" element={<AddTransaction />} />
            <Route path="/find" element={<ViewTransactionsPage />} />
            <Route path="/find/:orderId" element={<ViewTransactionsPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<PageNotFound />} />

            {//This is just an example of how to match multiple paths to 1 route
            ["a","b"].map( (pathMatcher, idx) => <Route key={idx} path={pathMatcher}element={<ViewTransactionsPage />} /> )}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
