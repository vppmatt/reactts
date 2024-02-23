import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddTransactionPage from "./components/AddTransactionPage/AddTransactionPage";
import FindTransactionPage from "./components/FindTransactionPage/FindTransactionPage";
import PageHeader from "./components/pageHeader/PageHeader";
import HomePage from "./components/staticPages/HomePage";
import PageNotFound from "./components/staticPages/PageNotFound";
import { UserContext, userType } from "./context/context";
import { useState } from "react";
import Login from "./components/staticPages/Login";

function App() {

  //NOTE - this version uses local strorage to preserve the logged in user beyond a page refresh
  //in practice you'd store a token which can be revalidated against a backend.
  
  const storedUser = localStorage.getItem("user");

  const [user,setUser] = useState<userType>(storedUser ? JSON.parse(storedUser) : {id: 0, name : "", role : ""})
    
  const logout = () => {
      setUser({id: 0, name : "", role : ""});
  }

  const login = (user : userType) => {
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
  }

  return (
    <UserContext.Provider value={{...user, login : login, logout : logout}}>
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/find/:orderId" element={<FindTransactionPage />} />
        <Route path="/find" element={<FindTransactionPage />} />
        <Route path="/add" element={<AddTransactionPage />} />
        <Route path="/" element={<HomePage />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
