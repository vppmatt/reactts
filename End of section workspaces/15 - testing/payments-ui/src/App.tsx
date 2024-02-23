import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddTransactionPage from "./components/AddTransactionPage/AddTransactionPage";
import FindTransactionPage from "./components/FindTransactionPage/FindTransactionPage";
import PageHeader from "./components/pageHeader/PageHeader";
import HomePage from "./components/staticPages/HomePage";
import PageNotFound from "./components/staticPages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route path="/find/:orderId" element={<FindTransactionPage />} />
        <Route path="/find" element={<FindTransactionPage />} />
        <Route path="/add" element={<AddTransactionPage />} />
        <Route path="/" element={<HomePage />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
