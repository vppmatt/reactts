import PageHeader from "../pageHeader/PageHeader";
import Search from "./Search/Search"
import Transactions from "./Transactions/Transactions";
import {useState} from "react";

const FindTransactionPage = () => {

    const [searchTerm, setSearchTerm] = useState<string>("");

    return (
        <div>
            <PageHeader/>
                <Search setSearchTerm={setSearchTerm} />
                <Transactions searchTerm={searchTerm} />
        </div>
    );
}

export default FindTransactionPage;
