import './App.css';
import PageHeader from "./components/pageHeader/PageHeader";
import Search from "./components/Search/Search";
import Transactions from "./components/Transactions/Transactions";

function App() : JSX.Element  {
    return (
        <div>
            <PageHeader/>
            <Search/>
            <Transactions/>
        </div>
    );
}

export default App;
