import {PaymentType} from "../../data/DataFunctions";

const TransactionTableRow = (transaction : PaymentType) => {
    return (
        <tr key={transaction.id}>
            <td>{transaction.id}</td><td>{transaction.date}</td><td>{transaction.country}</td><td>{transaction.currency}</td><td>{transaction.amount}</td>
    </tr>
);
};

export default TransactionTableRow;
