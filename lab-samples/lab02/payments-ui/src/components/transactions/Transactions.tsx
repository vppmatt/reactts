import './Transactions.css';
import {getAllPayments, PaymentType} from "../../data/DataFunctions";
import {ChangeEvent, useState} from "react";
import TransactionTableRow from "./TransactionTableRow";

const Transactions = () => {

    const payments : PaymentType[] = getAllPayments()
    const allPaymentCountries : string[] = payments.map(payment => payment.country);
    const uniqueCountries : string[] = allPaymentCountries.filter((country, index) => allPaymentCountries.indexOf(country) === index);
    const countryOptions : JSX.Element[] = uniqueCountries.map(c => <option key={c} value={c}>{c}</option>);

    const [selectedCountry, setSelectedCountry] = useState<string>(uniqueCountries[0])

    const changeCountry  = (event : ChangeEvent<HTMLSelectElement>) => {
        const target : HTMLSelectElement = event.currentTarget;
        const option = target.options.selectedIndex;
        setSelectedCountry(uniqueCountries[option]);
    }

    const countrySelector = <select id="countrySelector" onChange={changeCountry}>
        {countryOptions}
    </select>;


    return (
        <div>
            <div className="transactionsCountrySelector">
                Select country: {countrySelector}
            </div>
            <table className="transactionsTable">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Country</th>
                    <th>Currency</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                {payments.map(payment => payment.country === selectedCountry && TransactionTableRow(payment))}
                </tbody>
            </table>
        </div>
    );
}

export default Transactions
