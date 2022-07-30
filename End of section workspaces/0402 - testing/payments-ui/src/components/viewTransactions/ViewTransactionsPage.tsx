import Search from "./search/Search";
import Transactions from "./transactions/Transactions";
import {Fragment, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const ViewTransactionsPage = () => {

    const [selectedOrderId, setSelectedOrderId] = useState<string>("");

    const {orderId} = useParams<string>();
    useEffect(() => {
        if (orderId != null) {
            setSelectedOrderId(orderId);
        }
    }, []);


    return <Fragment>
        <Search selectedOrderId={selectedOrderId} setSelectedOrderId={ setSelectedOrderId} />
        <Transactions selectedOrderId={selectedOrderId}/>
    </Fragment>
}

export default ViewTransactionsPage;
